import { Wind, Droplet } from "lucide-react";

export const ExploreSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-normal mb-8">
        <span className="text-blue-500 font-medium">explore</span>
        <span className="text-gray-600"> project</span>
      </h2>

      <div className="flex gap-6">
        <div className="max-w-xs">
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur. Elementum risus tempor at
            vivamus curabitur viverra diam nec.
          </p>
        </div>

        {/* Project Cards Row */}
        <div className="flex gap-4 flex-1">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-lg p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium text-gray-700">Güneşiği Projesi</h3>
                <p className="text-gray-500 text-xs">Diyarbakır, Türkiye</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-gray-700"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="3"
                    x2="12"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="19"
                    x2="12"
                    y2="21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="21"
                    y1="12"
                    x2="19"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="5"
                    y1="12"
                    x2="3"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-medium text-gray-700">84</span>
              <span className="text-gray-500 text-sm ml-1">MWe</span>
            </div>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 text-sm">
              İncele
            </button>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 rounded-lg p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium text-gray-700">Çamlıdere Projesi</h3>
                <p className="text-gray-500 text-xs">Kayseri, Türkiye</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8">
                <Droplet className="text-gray-700" size={20} />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-medium text-gray-700">125</span>
              <span className="text-gray-500 text-sm ml-1">MWe</span>
            </div>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 text-sm">
              İncele
            </button>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 rounded-lg p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium text-gray-700">
                  Rüzgartepe Projesi
                </h3>
                <p className="text-gray-500 text-xs">Adana, Türkiye</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8">
                <Wind className="text-gray-700" size={20} />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-medium text-gray-700">43</span>
              <span className="text-gray-500 text-sm ml-1">MWe</span>
            </div>
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 text-sm">
              İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
