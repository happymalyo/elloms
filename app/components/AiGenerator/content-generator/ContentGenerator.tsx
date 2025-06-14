import { SparklesIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { MdEditNote } from "react-icons/md";
import { JobService } from "~/services/jobsService/job.service";
import type {
  CreateJobRequest,
  CreateJobResponse,
  Jobs,
  UpdateJobRequest,
} from "~/services/jobsService/types";
import { formatDistanceToNow } from "date-fns";
import { GeneratedPost } from "./GeneratedPost";
import { useImageStore } from "~/store/imageStore";
import { LoadingSVG } from "~/components/Common/LoadingSVG";

const jobService = new JobService();
const INITIAL_JOB: CreateJobRequest = {
  topic: "",
  additional_context: "",
  platform: "",
};

export const ContentGenerator = () => {
  const [jobStatus, setJobStatus] = useState<string>("");
  const [generatedPost, setGeneratedPost] = useState<string>("");
  const [editedPost, setEditedPost] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [editError, setEditError] = useState<string>("");
  const [generatedAt, setGeneratedAt] = useState<Date | null>(null);
  const queryClient = useQueryClient();
  const [job, setJob] = useState<CreateJobRequest>(INITIAL_JOB);
  const [currentJobId, setCurrentJobId] = useState<string>("");
  const setImageStatus = useImageStore((state) => state.setImageStatus);
  const setImages = useImageStore((state) => state.setImages);

  // Relative time display using date-fns
  const [relativeTime, setRelativeTime] = useState<string>("");
  useEffect(() => {
    if (generatedAt) {
      const updateRelativeTime = () => {
        setRelativeTime(formatDistanceToNow(generatedAt, { addSuffix: true }));
      };

      updateRelativeTime();
      const interval = setInterval(updateRelativeTime, 60000);
      return () => clearInterval(interval);
    }
  }, [generatedAt]);

  const refreshJobs = async () => {
    queryClient.invalidateQueries({ queryKey: ["jobs"] });
  };

  const pollImageStatus = async (jobId: string) => {
    const maxPollTime = 5 * 60 * 1000; // 5 minutes
    const startTime = Date.now();
    const interval = setInterval(async () => {
      if (Date.now() - startTime > maxPollTime) {
        clearInterval(interval);
        setError("Job timed out");
        return;
      }
      try {
        const imgJob = await jobService.getById<Jobs>(jobId);
        setImageStatus(imgJob.image_status);
        console.log(imgJob);
        if (imgJob.image_status === "completed") {
          let images: string[] = [];
          if (imgJob.images) {
            try {
              images = JSON.parse(imgJob.images);
            } catch {
              images = [];
            }
          }
          setImages(images);
          setImageStatus("completed");
          clearInterval(interval);
        } else if (imgJob.image_status === "error") {
          clearInterval(interval);
          useImageStore.setState({
            imageStatus: "error",
            images: [],
          });
        }
      } catch (err) {
        clearInterval(interval);
        setError("Error generating image");
      }
    }, 5000);
  };

  // Poll job status
  const pollJobStatus = async (jobId: string) => {
    const maxPollTime = 5 * 60 * 1000; // 5 minutes
    const startTime = Date.now();
    const interval = setInterval(async () => {
      if (Date.now() - startTime > maxPollTime) {
        clearInterval(interval);
        setError("Job timed out");
        return;
      }
      try {
        const oneJob = await jobService.getById<Jobs>(jobId);
        setJobStatus(oneJob.status);
        if (oneJob.status === "completed" && oneJob.result) {
          clearInterval(interval);
          const parsedResult =
            typeof oneJob.result === "string"
              ? JSON.parse(oneJob.result)
              : oneJob.result;
          if (parsedResult.status === "success") {
            setGeneratedPost(parsedResult.result);
            setEditedPost(parsedResult.result);
            setGeneratedAt(new Date());
            await queryClient.invalidateQueries({
              queryKey: ["jobs"],
              refetchType: "active",
            });
            try {
              await jobService.startImageGen(jobId, job);
              pollImageStatus(jobId);
            } catch (error) {
              console.log(error);
            }
          } else {
            setError(parsedResult.message || "Failed to generate content");
          }
        } else if (oneJob.status === "error") {
          clearInterval(interval);
          setError(oneJob.error_message || "Job failed");
        }
      } catch (err) {
        clearInterval(interval);
        setError("Error checking job status");
      }
    }, 5000);
  };

  // Generate content
  const createJobMutation = useMutation({
    mutationFn: (data: CreateJobRequest) => jobService.createJob(data),
    onSuccess: (response: CreateJobResponse) => {
      setJobStatus(response.status);
      setCurrentJobId(response.job_id);
      pollJobStatus(response.job_id);
    },
    onError: (err: any) => {
      setError(err.message || "Failed to start content generation");
      setJobStatus("");
    },
  });

  const handleGenerateContent = async () => {
    if (!job.topic || !job.platform || !job.additional_context) {
      setError("Please fill in all fields: Topic, Platform, and Tone");
      return;
    }

    try {
      setError("");
      setJobStatus("started");
      setImageStatus("pending");
      setGeneratedPost("");
      setEditedPost("");
      setIsEditing(false);
      setGeneratedAt(null);
      createJobMutation.mutate(job);
    } catch (err: any) {
      setError(err.message || "Failed to start content generation");
      setJobStatus("");
    }
  };

  const handleEditPost = () => {
    setIsEditing(true);
  };

  const mutation = useMutation({
    mutationFn: (data: UpdateJobRequest) =>
      jobService.updateJob(currentJobId, data),
    onSuccess: () => {
      refreshJobs();
    },
  });

  const { mutate: updateJob, isPending: isUpdating } = mutation;

  const handleSaveEdit = () => {
    try {
      updateJob({ text: editedPost });
      setGeneratedPost(editedPost);
      setIsEditing(false);
    } catch (error) {
      setEditError("Failed to save edited post");
    } finally {
      refreshJobs();
    }
  };

  const handleCancelEdit = () => {
    setEditedPost(generatedPost);
    setIsEditing(false);
  };

  return (
    <>
      {" "}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <MdEditNote className="text-purple-500 h-8 w-8" />
          <span>Content Generator</span>
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Topic or Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
              rows={3}
              placeholder="Describe what you want to create content about..."
              name="topic"
              value={job.topic}
              onChange={(e) => setJob({ ...job, topic: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Platform</label>
              <select
                name="platform"
                value={job.platform}
                onChange={(e) => setJob({ ...job, platform: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a platform</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">X</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tone</label>
              <select
                name="additional_context"
                value={job.additional_context}
                onChange={(e) =>
                  setJob({ ...job, additional_context: e.target.value })
                }
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a tone</option>
                <option value="Professional">Professional</option>
                <option value="Casual">Casual</option>
                <option value="Inspiring">Inspiring</option>
                <option value="Informative">Informative</option>
              </select>
            </div>
          </div>

          <button
            className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-3 rounded-lg hover:from-primary-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            onClick={handleGenerateContent}
            disabled={jobStatus === "started" || jobStatus === "running"}
          >
            <SparklesIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
            <span>
              {jobStatus === "started" || jobStatus === "running"
                ? "Generating..."
                : "Generate Content"}
            </span>
          </button>

          {(jobStatus === "started" || jobStatus === "running") && (
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <LoadingSVG />
              <span>
                Status: {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}
              </span>
            </div>
          )}

          {jobStatus && !["started", "running"].includes(jobStatus) && (
            <div className="text-sm text-gray-600">
              Status: {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}
            </div>
          )}

          {error && (
            <div className="text-red-600 bg-red-50 p-4 rounded-md">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
      {generatedPost && (
        <GeneratedPost
          generatedPost={generatedPost}
          relativeTime={relativeTime}
          isEditing={isEditing}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
          handleEditPost={handleEditPost}
          editError={editError}
          isUpdating={isUpdating}
        />
      )}
    </>
  );
};
