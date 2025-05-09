import WindTurbineIcon from "../../assets/WindTurbineIcon";

function ProjectInfoGrid({ display }: { display: any }) {
  return (
    <div className="flex mb-8 text-gray-700">
      {/* Icon + Power */}
      <div className="flex items-start mr-10">
        <div className="mr-3">
          <WindTurbineIcon className="w-14 h-14" />
        </div>
        <div className="text-4xl font-bold pt-4">
          64<span className="text-lg ml-1 font-normal">MWe</span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Kabul Bilgileri */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="font-semibold mb-2 text-blue-400 text-sm">
            Kabul Bilgileri
          </div>
          <div className="text-gray-500 text-sm">İşletmede</div>
          <hr className="my-2 w-1/6 border-gray-500" />
          {display?.kabulBilgisi?.map((item: any, index: any) => (
            <div key={index} className="text-gray-500 font-normal text-sm">
              {item.date}{" "}
              <span className="ml-1 font-semibold">{item.power}</span>
            </div>
          ))}
        </div>

        {/* Elektrik Satışı */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="font-semibold mb-4 text-blue-400 text-sm">
            Elektrik Satışı
          </div>
          {display?.elektrikSatisi?.map((item: any, index: any) => (
            <div key={index} className="text-gray-500 font-normal text-sm">
              {item.date}{" "}
              <span className="ml-1 font-semibold">{item.power}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoGrid;
