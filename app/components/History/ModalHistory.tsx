export const ModalHistory = () => {
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

        {/* Create new chat button */}
        <div className="text-sm text-gray-400 mb-1">Actions</div>
        <button className="bg-gray-100 text-sm cursor-pointer font-medium text-gray-700 rounded-md px-3 py-2 mb-4 text-left">
          Créer un nouveau chat
        </button>

        {/* Section titles */}
        <div className="text-sm text-gray-400 uppercase mb-1">Aujourd'hui</div>
        <div className="space-y-1 mb-4">
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md cursor-pointer">
            <span>Enhancing CrewAI with User Inputs</span>
            <span className="bg-gray-300 text-xs px-2 py-0.5 rounded">
              Actuel
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-400 uppercase mb-1">Cette année</div>
        <div className="overflow-y-auto space-y-2">
          {[
            "Candidature Développeur React/Node",
            "Merging Files for Generic Component",
            "Reusable MiniDialog Component in React",
            "Optimizing API Calls with React Query",
            "Adding Optional Condition to React Query Hook",
            "React Component for DeliveryHeader",
            "Debugging React Select Event Handler",
            "React-PDF Delivery Note Template",
            "Extracting Delivery Note Items for State",
            "ESLint Setup in VS Code for React Hooks",
          ].map((title, index) => (
            <div
              key={index}
              className="hover:bg-gray-100 rounded-md p-2 cursor-pointer text-sm"
            >
              {title}
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
