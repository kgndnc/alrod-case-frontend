import { Map } from "lucide-react";

function ProjectYekdem({ display }: { display: any }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-100 col-span-2 rounded-lg p-4 pr-8">
        <div>
          <div className="font-semibold text-primary-blue mb-4">Yekdem Hakkı</div>

          <div className="content text-sm flex text-primary-gray flex-row gap-7 items-center w-full">
            <div>
              <span className="text-primary-gray mr-3">Son Uzatma Tarihi</span>
              <span className="font-bold">
                {Intl.DateTimeFormat("tr-TR").format(
                  new Date(display.yekdemYil)
                )}
              </span>
            </div>

            <div className="h-6 w-[1px] bg-gray-500"></div>

            <div>
              <span className="text-primary-gray mr-3">Katkı Payı</span>
              <span className="font-bold">
                {Intl.NumberFormat("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                }).format(display.katkiPayiValue)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-primary-blue flex items-center justify-center gap-1 text-white rounded-2xl px-10 py-4 text-sm font-medium">
          <Map />
          <span>KMZ</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectYekdem;
