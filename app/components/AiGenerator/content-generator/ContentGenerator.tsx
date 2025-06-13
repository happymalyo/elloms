import { SparklesIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { MdEditNote } from "react-icons/md";
import { JobService } from "~/services/jobsService/job.service";
import type { CreateJobRequest, Jobs } from "~/services/jobsService/types";
import { formatDistanceToNow } from "date-fns";
import { GeneratedPost } from "./GeneratedPost";

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
    const [generatedAt, setGeneratedAt] = useState<Date | null>(null);
    const queryClient = useQueryClient();
    const [job, setJob] = useState<CreateJobRequest>(INITIAL_JOB);

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
                const job = await jobService.getById<Jobs>(jobId);
                setJobStatus(job.status);
                if (job.status === "completed" && job.result) {
                    clearInterval(interval);
                    const parsedResult = typeof job.result === "string" ? JSON.parse(job.result) : job.result;
                    if (parsedResult.status === "success") {
                        setGeneratedPost(parsedResult.result);
                        setEditedPost(parsedResult.result);
                        setGeneratedAt(new Date());
                        queryClient.invalidateQueries({ queryKey: ["jobs"] });
                    } else {
                        setError(parsedResult.message || "Failed to generate content");
                    }
                } else if (job.status === "error") {
                    clearInterval(interval);
                    setError(job.error_message || "Job failed");
                }
            } catch (err) {
                clearInterval(interval);
                setError("Error checking job status");
            }
        }, 5000);
    };

    const handleGenerateContent = async () => {
        if (!job.topic || !job.platform || !job.additional_context) {
            setError("Please fill in all fields: Topic, Platform, and Tone");
            return;
        }

        try {
            setError("");
            setJobStatus("started");
            setGeneratedPost("");
            setEditedPost("");
            setIsEditing(false);
            setGeneratedAt(null);
            const response = await jobService.createJob(job);
            setJobStatus(response.status);
            pollJobStatus(response.job_id);
        } catch (err: any) {
            setError(err.message || "Failed to start content generation");
            setJobStatus("");
        }
    };



    const handleEditPost = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        setGeneratedPost(editedPost);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedPost(generatedPost);
        setIsEditing(false);
    };

    return (

        <> <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <MdEditNote className="text-purple-500 h-8 w-8" />
                <span>Content Generator</span>
            </h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Topic or Description</label>
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
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Tone</label>
                        <select
                            name="additional_context"
                            value={job.additional_context}
                            onChange={(e) => setJob({ ...job, additional_context: e.target.value })}
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
                    className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-3 rounded-lg hover:from-primary-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleGenerateContent}
                    disabled={jobStatus === "started" || jobStatus === "running"}
                >
                    <SparklesIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span>{jobStatus === "started" || jobStatus === "running" ? "Generating..." : "Generate Content"}</span>
                </button>

                {(jobStatus === "started" || jobStatus === "running") && (
                    <div className="text-sm text-gray-600 flex items-center space-x-2">
                        <svg
                            className="animate-spin h-5 w-5 text-primary-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <span>Status: {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}</span>
                    </div>
                )}

                {jobStatus && !["started", "running"].includes(jobStatus) && (
                    <div className="text-sm text-gray-600">
                        Status: {jobStatus.charAt(0).toUpperCase() + jobStatus.slice(1)}
                    </div>
                )}

                {error && (
                    <div className="text-red-600 bg-red-50 p-4 rounded-md">
                        <p className="font-semibold">Error:</p>
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
                />
            )}</>
    );
};
