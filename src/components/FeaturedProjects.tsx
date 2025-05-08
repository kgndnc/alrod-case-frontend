import { Wind, Droplet } from "lucide-react";

export const FeaturedProjectsSection = () => {
  return (
    <section className="relative mb-20 pb-10">
      <div className="flex gap-6">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm w-64">
          <div className="flex justify-center mb-4">
            <Droplet className="text-gray-700" />
          </div>
          <h3 className="font-medium text-gray-700">Çamlıdere Projesi</h3>
          <p className="text-gray-500 text-sm">Kayseri, Türkiye</p>
          <div className="mt-4">
            <span className="text-3xl font-medium text-gray-700">125</span>
            <span className="text-gray-500 text-sm ml-1">MWe</span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm w-64">
          <div className="flex justify-center mb-4">
            <Wind className="text-gray-700" />
          </div>
          <h3 className="font-medium text-gray-700">Rüzgartepe Projesi</h3>
          <p className="text-gray-500 text-sm">Adana, Türkiye</p>
          <div className="mt-4">
            <span className="text-3xl font-medium text-gray-700">43</span>
            <span className="text-gray-500 text-sm ml-1">MWe</span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-6">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
};
