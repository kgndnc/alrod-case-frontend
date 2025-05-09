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
    <div className="mb-8">
      <div className="font-semibold mb-4 text-sm">Fotoğraflar</div>
      <div className="flex flex-col gap-4">
        {/* Main large photo */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <img
            src={display.photos[selectedPhoto]}
            alt="Main project"
            className="w-full h-full object-cover"
          />
          {/* Navigation controls */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) =>
                prev > 0 ? prev - 1 : display.photos.length - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            onClick={() =>
              setSelectedPhoto((prev) => (prev + 1) % display.photos.length)
            }
          >
            &gt;
          </button>
          {/* Zoom icon */}
          <button className="absolute right-4 top-4 bg-white p-2 rounded-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H21V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21H3V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 3L14 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 21L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Thumbnail row */}
        <div className="flex gap-2 overflow-x-auto">
          {display.photos.map((url: string, idx: number) => (
            <div
              key={idx}
              className={`cursor-pointer flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden ${
                selectedPhoto === idx ? "ring-2 ring-blue-400" : ""
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
    </div>
  );
}

export default ProjectGallery;
