import { Search } from "lucide-react";

function ProjectGallery({
  display,
  selectedPhoto,
  setSelectedPhoto,
}: {
  display: any;
  selectedPhoto: number;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="mb-8 bg-gray-100 rounded-lg p-5">
      <div className="font-semibold mb-4 text-blue-400 ">Fotoğraflar</div>
      <div className="space-y-4">
        {/* Main large photo */}
        <div className="relative h-80 rounded-lg overflow-hidden">
          <div className="w-2/3 relative mx-auto h-full ">
            <img
              src={display.photos[selectedPhoto]}
              alt="Main project"
              className="rounded object-cover"
            />
            {/* Zoom icon  */}
            <button className="absolute right-4 top-4 bg-white p-3 rounded-xl border-2 border-gray-300">
              <Search className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          {/* Navigation controls */}
          <button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 text-gray-400 border-gray-300 bg-white rounded-lg flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) =>
                prev > 0 ? prev - 1 : display.photos.length - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 text-gray-400 border-gray-300 bg-white rounded-lg flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) => (prev + 1) % display.photos.length)
            }
          >
            &gt;
          </button>
        </div>
        {/* Thumbnail row */}
        <div className="relative w-10/12 mx-auto">
          <div className="flex gap-2 overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-300"
              style={{
                transform: `translateX(${-selectedPhoto * (128 + 8)}px)`, // 128px width + 8px gap
              }}
            >
              {display.photos.map((url: string, idx: number) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden ${
                    selectedPhoto === idx ? "border-2 border-blue-400" : ""
                  }`}
                  onClick={() => setSelectedPhoto(idx)}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Navigation controls */}
          <button
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 text-gray-400 border-gray-300 bg-white rounded-lg flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) =>
                prev > 0 ? prev - 1 : display.photos.length - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 text-gray-400 border-gray-300 bg-white rounded-lg flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) => (prev + 1) % display.photos.length)
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
