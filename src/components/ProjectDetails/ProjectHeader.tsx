import WindTurbineIcon from "../../assets/WindTurbineIcon";
import { Download, MapPin, MessageSquare, SquarePen } from "lucide-react";
import { useState } from "react";

function ProjectHeader({ display }: { display: any }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 rounded-2xl p-8 flex flex-row items-center justify-between mb-6">
      <div className="flex items-start">
        <div className="grid grid-rows-2 gap-4">
          <div className="flex">
            <div className="mr-4">
              <WindTurbineIcon className="w-16 h-16 fill-[#5A5B5E]" />
            </div>

            <div>
              <h2 className="text-3xl text-[#5A5B5E] font-bold mb-2">
                {display.projectName || "Proje Adı"}
              </h2>
              <div className="flex items-center text-2xl text-gray-500 mb-2">
                <MapPin className="w-6 h-6 mr-2 text-[#48A0E2]" />
                {display.il_id || "Şehir"}, Türkiye
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="text-gray-500 text-sm">
            <div
              className={` max-w-xl line-clamp-2 ${
                showMore ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              {display.description || "Proje açıklaması burada yer alacak."}
            </div>
            <div
              className="cursor-pointer underline"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Kısalt" : "Devamı için tıklayın."}
            </div>
          </div>
          {/* Project Description End*/}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2">
        <button className="bg-blue-400 text-white rounded-2xl px-6 py-4 text-sm font-medium flex items-center cursor-pointer">
          <Download className="mr-2" />
          <span>Lisans Bilgileri</span>
        </button>
        <button className="bg-blue-400 text-white rounded-2xl px-6 py-4 text-sm font-medium flex items-center cursor-pointer">
          <MessageSquare className="mr-2" />
          <span>Asking Price</span>
        </button>
        <button className="bg-blue-400 text-white rounded-2xl px-6 py-4 text-sm font-medium flex items-center cursor-pointer">
          <SquarePen className="mr-2" />
          <span>Niyet Bildir</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectHeader;
