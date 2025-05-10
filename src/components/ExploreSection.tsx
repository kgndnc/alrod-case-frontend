import { Wind, Droplet } from "lucide-react";
import WindTurbineIcon from "../assets/WindTurbineIcon";

export const ExploreSection = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold mb-8">
        <span className="text-blue-500">explore</span>
        <span className="text-gray-600"> project</span>
      </h2>

      <div className="grid grid-cols-[1fr_4fr] gap-6">
        <div className="max-w-xs">
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur. Elementum risus tempor at
            vivamus curabitur viverra diam nec.
          </p>
        </div>

        {/* Project Cards Row */}
        <div className="grid grid-cols-3 gap-2 text-[#5A5B5E]">
          {/* Project 1 */}
          <div className="project-card flex h-64 justify-between flex-col bg-white rounded-lg py-4 px-6 shadow-sm">
            <div className="title-container">
              <h3 className="font-bold text-xl">Günışığı Projesi</h3>
              <p className="text-base">Diyarbakır, Türkiye</p>

              <div className="flex justify-between items-center mt-4">
                <div className="">
                  <span className="text-5xl font-bold">84</span>
                  <span className="ml-1">MWe</span>
                </div>
                <div className="flex justify-start">
                  <Wind size={64} />
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white rounded-4xl px-10 py-4 text-sm w-30">
              İncele
            </button>
          </div>

          {/* Project 2 */}
          <div className="project-card flex h-64 justify-between flex-col bg-white rounded-lg py-4 px-6 shadow-sm">
            <div className="title-container">
              <h3 className="font-bold text-xl">Çamlıdere Projesi</h3>
              <p className="text-base">Kayseri, Türkiye</p>

              <div className="flex justify-between items-center mt-4">
                <div className="">
                  <span className="text-5xl font-bold">125</span>
                  <span className="ml-1">MWe</span>
                </div>
                <div className="flex justify-start">
                  <Droplet size={64} />
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white rounded-4xl px-10 py-4 text-sm w-30">
              İncele
            </button>
          </div>

          {/* Project 3 */}
          <div className="project-card flex h-64 justify-between flex-col bg-white rounded-lg py-4 px-6 shadow-sm">
            <div className="title-container">
              <h3 className="font-bold text-xl">Rüzgartepe Projesi</h3>
              <p className="text-base">Adana, Türkiye</p>

              <div className="flex justify-between items-center mt-4">
                <div className="">
                  <span className="text-5xl font-bold">43</span>
                  <span className="ml-1">MWe</span>
                </div>
                <div className="flex justify-start">
                  <WindTurbineIcon className="w-16 h-16 fill-current" />
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white rounded-4xl px-10 py-4 text-sm w-30">
              İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
