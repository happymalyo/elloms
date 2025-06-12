import type { Jobs } from "~/services/jobsService/types";

export const ModalHistory = ({ jobs }: { jobs: Jobs[] }) => {
  return (
    <div className="flex h-screen p-6 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Sidebar */}
      <aside className="w-80 border-r border-gray-200 p-4 flex flex-col">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-gray-100 p-2 rounded-md border border-gray-50 focus:outline-none text-sm font-medium text-gray-700  mb-4"
        />

        <div className="text-sm text-gray-400 uppercase mb-1">All requests</div>
        <div className="overflow-y-auto space-y-2">
          {jobs?.map((job, index) => (
            <div
              key={index}
              className="hover:bg-gray-100 rounded-md p-2 cursor-pointer text-sm"
            >
              {job.topic}
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center text-gray-500 text-sm">
        Sélectionnez une conversation à prévisualiser
      </main>
    </div>
  );
};
