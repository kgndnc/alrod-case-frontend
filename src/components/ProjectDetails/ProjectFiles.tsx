function ProjectFiles() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="font-semibold mb-2 text-sm">Veri Odası</div>
        <div className="text-gray-500 text-xs mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh eu dolore magna aliquam erat volutpat...
        </div>
        <button className="bg-blue-400 text-white rounded-lg px-6 py-2 text-sm font-medium">
          İndir
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="font-semibold mb-2 text-sm">Teaser</div>
        <div className="text-gray-500 text-xs mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh eu dolore magna aliquam erat volutpat...
        </div>
        <button className="bg-blue-400 text-white rounded-lg px-6 py-2 text-sm font-medium">
          İndir
        </button>
      </div>
    </div>
  );
}

export default ProjectFiles;
