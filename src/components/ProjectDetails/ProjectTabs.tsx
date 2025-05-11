function ProjectTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}) {
  return (
    <div className="flex border-b-2 *:not-[:last-child]:border-r-2 *:not-[:last-child]:pr-6 *:not-[:first-child]:pl-6 text-3xl font-bold border-gray-300 mb-6">
      <button
        className={`py-2 text-left border-gray-300  ${
          activeTab === "Tesise İlişkin Bilgiler"
            ? "text-primary-blue"
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("Tesise İlişkin Bilgiler")}
      >
        Tesise İlişkin Bilgiler
      </button>
      <button
        className={`py-2  text-left  ${
          activeTab === "Q&A" ? "text-primary-blue" : "text-gray-400"
        }`}
        onClick={() => setActiveTab("Q&A")}
      >
        Q&A
      </button>
    </div>
  );
}

export default ProjectTabs;
