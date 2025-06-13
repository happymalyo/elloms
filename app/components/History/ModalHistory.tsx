import { useState, useEffect, useCallback } from "react";
import type { Jobs } from "~/services/jobsService/types";
import ReactMarkdown from 'react-markdown';

export const ModalHistory = ({ jobs }: { jobs: Jobs[] }) => {
  const [selectedJob, setSelectedJob] = useState<Jobs | null>(null);


  const handleSelectJob = useCallback((job: Jobs) => () => {
    setSelectedJob(job);
  }, []);

  console.log("jobs", jobs);

  const parseResult = (result: string | object) => {
    try {
      // If result is already an object, use it directly
      let parsed = typeof result === 'string' ? JSON.parse(result) : result;

      // Handle error case
      if (parsed.status === 'error') {
        return (
          <div className="text-red-600 bg-red-50 p-4 rounded-md">
            <p className="font-semibold">Error:</p>
            <p>{parsed.message || "An unknown error occurred"}</p>
          </div>
        );
      }

      // Handle success case
      if (parsed.status === 'success') {
        return parsed.result || parsed.message || "Operation completed successfully";
      }

      // Fallback for other cases
      return parsed.message || parsed.result || JSON.stringify(parsed);

    } catch (error) {
      // If parsing fails, return the original string or a default message
      return typeof result === 'string' ? result : "Could not parse response";
    }
  };

  const renderContent = (content: string) => {
    return (
      <div className="prose max-w-none whitespace-pre-wrap">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="flex h-screen p-6 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Sidebar */}
      <aside className="w-80 border-r border-gray-200 p-4 flex flex-col">
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-gray-100 p-2 rounded-md border border-gray-50 focus:outline-none text-sm font-medium text-gray-700 mb-4"
        />

        <div className="text-sm text-gray-400 uppercase mb-1">All requests</div>
        <div className="overflow-y-auto space-y-2">
          {jobs?.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                className={`rounded-md p-2 cursor-pointer text-sm ${job.status === 'error' ? 'text-red-500' : 'text-gray-700'
                  } ${selectedJob?.job_id === job.job_id
                    ? 'bg-gray-100'
                    : 'hover:bg-gray-100'
                  }`}
                onClick={handleSelectJob(job)}
              >
                {job.topic}
                {job.status === 'error' && (
                  <span className="ml-2 text-xs text-red-400">(Erreur)</span>
                )}
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500">No jobs available</div>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto">
        {selectedJob ? (
          <div>
            <h1 className="text-lg font-bold text-gray-800 mb-2">
              {selectedJob.topic}
              {selectedJob.status === 'error' && (
                <span className="ml-2 text-sm text-red-500">(Erreur)</span>
              )}
            </h1>
            {renderContent(parseResult(selectedJob.result || ""))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center h-full text-gray-500">
            Sélectionnez une conversation à prévisualiser
          </div>
        )}
      </main>
    </div>
  );
};