function ProjectTabs({
  activeTab,
  setActiveTab,
  activeSubTab,
  setActiveSubTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}) {
  return (
    <div className="flex border-l border-gray-200 mb-6">
      <button
        className={`px-4 py-2 text-left text-sm font-medium ${
          activeTab === "Tesise İlişkin Bilgiler"
            ? "text-blue-500 border-l-2 border-blue-500 -ml-[1px]"
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("Tesise İlişkin Bilgiler")}
      >
        Tesise İlişkin Bilgiler
      </button>
      <button
        className={`px-4 py-2 text-left text-sm font-medium ${
          activeTab === "Q&A"
            ? "text-blue-500 border-l-2 border-blue-500 -ml-[1px]"
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("Q&A")}
      >
        Q&A
      </button>
    </div>
  );
}

export default ProjectTabs;
