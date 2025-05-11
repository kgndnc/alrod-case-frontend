function ProjectSubTabs({
  activeSubTab,
  setActiveSubTab,
}: {
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}) {
  return (
    <div className="mb-6">
      <button
        className={`w-full py-2 px-3 rounded-lg text-sm font-medium text-center mb-2 ${
          activeSubTab === "Ana Kaynak"
            ? "bg-primary-blue text-white"
            : "bg-blue-100 text-primary-blue"
        }`}
        onClick={() => setActiveSubTab("Ana Kaynak")}
      >
        Ana Kaynak
      </button>
      <button
        className={`w-full py-2 px-3 rounded-lg text-sm font-medium text-center mb-2 ${
          activeSubTab === "Yardımcı Kaynak"
            ? "bg-primary-blue text-white"
            : "bg-blue-100 text-primary-blue"
        }`}
        onClick={() => setActiveSubTab("Yardımcı Kaynak")}
      >
        Yardımcı Kaynak
      </button>
      <button
        className={`w-full py-2 px-3 rounded-lg text-sm font-medium text-center ${
          activeSubTab === "Depolama"
            ? "bg-primary-blue text-white"
            : "bg-blue-100 text-primary-blue"
        }`}
        onClick={() => setActiveSubTab("Depolama")}
      >
        Depolama
      </button>
    </div>
  );
}

export default ProjectSubTabs;
