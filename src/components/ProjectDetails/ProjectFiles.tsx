import { Download } from "lucide-react";

function ProjectFiles() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="font-semibold mb-2 text-sm text-blue-400">
          Veri Odası
        </div>

        <div className="flex gap-6">
          <div className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh eu dolore magna aliquam erat volutpat...
          </div>
          <button className="bg-blue-400 flex justify-center items-center self-end text-white rounded-xl px-8 py-4 text-sm font-medium">
            <Download className="w-4 h-4 mr-2" />
            <span>İndir</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="font-semibold mb-2 text-sm text-blue-400">Teaser</div>

        <div className="flex gap-6">
          <div className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <button className="bg-blue-400 flex justify-center items-center self-end text-white rounded-xl px-8 py-4 text-sm font-medium">
            <Download className="w-4 h-4 mr-2" />
            <span>İndir</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectFiles;
