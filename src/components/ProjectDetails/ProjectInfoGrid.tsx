import WindTurbineIcon from "../../assets/WindTurbineIcon";

function ProjectInfoGrid({ display }: { display: any }) {
  return (
    <div className="flex mb-8">
      {/* Icon + Power */}
      <div className="flex items-center mr-10">
        <div className="mr-4">
          <WindTurbineIcon className="w-10 h-10" />
        </div>
        <div className="text-5xl font-bold">
          64 <span className="text-lg font-normal">MWe</span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Kabul Bilgileri */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="font-semibold mb-2 text-sm">Kabul Bilgileri</div>
          <div className="text-gray-500 text-xs">İşletmede</div>
          {display?.kabulBilgisi?.map((item: any, index: any) => (
            <div key={index} className="text-gray-700 text-xs">
              {item.date} <span className="font-medium">{item.power}</span>
            </div>
          ))}
        </div>

        {/* Elektrik Satışı */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="font-semibold mb-2 text-sm">Elektrik Satışı</div>
          {display?.elektrikSatisi?.map((item: any, index: any) => (
            <div key={index} className="text-gray-700 text-xs">
              {item.date} <span className="font-medium">{item.power}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoGrid;
