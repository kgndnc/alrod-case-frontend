import WindTurbineIcon from "../../assets/WindTurbineIcon";

function ProjectPortfolio({ display }: { display: any }) {
  return (
    <div className="mb-4">
      <div className="font-semibold mb-4 text-sm">Portföy Bilgileri</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-gray-700 font-bold text-base mb-2">
            Kayseri Portföyü
          </div>
          <div className="text-gray-500 text-xs mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy
            nibh eu dolore magna aliquam erat volutpat...
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-blue-400 text-white rounded-lg px-4 py-1.5 text-xs font-medium">
              Asking Price
            </button>
            <button className="bg-white border border-blue-400 text-blue-500 rounded-lg px-4 py-1.5 text-xs font-medium">
              Niyet Bildir
            </button>
          </div>
        </div>

        {display.portfolios.map((portfolio: any, idx: number) => (
          <div key={idx} className="bg-blue-50 rounded-lg p-4 relative">
            <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-blue-50 to-transparent absolute z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1473122430408-5e968d5b9d3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Wind farm"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start mb-4">
                <WindTurbineIcon className="w-10 h-10" />
                <div className="ml-2">
                  <div className="text-sm font-medium">{portfolio.project}</div>
                  <div className="text-xs text-gray-500">
                    {portfolio.location}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold mt-16 mb-4">
                {portfolio.power}{" "}
                <span className="text-sm font-normal">MWe</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-400 text-white rounded-lg px-4 py-1.5 text-xs font-medium">
                  Asking Price
                </button>
                <button className="bg-white border border-blue-400 text-blue-500 rounded-lg px-4 py-1.5 text-xs font-medium">
                  Niyet Bildir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPortfolio;
