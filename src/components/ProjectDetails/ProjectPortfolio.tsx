import { MessageSquare, SquarePen } from "lucide-react";
import WindTurbineIcon from "../../assets/WindTurbineIcon";
import Button from "../Button";

function ProjectPortfolio({ display }: { display: any }) {
  return (
    <div className="mb-4">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {/* First Card: Portfolio Overview */}
        <div className="min-w-[300px] max-w-[400px] h-[300px] bg-[#809fb885] px-8 rounded-lg p-6 relative flex flex-col justify-between">
          <div className="font-semibold mb-2 text-lg text-primary-gray">
            Portföy Bilgileri
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="text-primary-gray font-bold text-3xl mb-4">
                Kayseri Portföyü
              </div>
              <div className="text-primary-gray text-sm mb-4 w-9/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit diam
                nonummy nibh eu dolore magna aliquam erat volutpat...
              </div>
            </div>
            <div className="flex gap-4">
              <Button Icon={MessageSquare} text="Asking Price" />
              <Button Icon={SquarePen} text="Niyet Bildir" />
            </div>
          </div>
        </div>

        {/* Portfolio Project Cards */}
        {display.portfolios.map((portfolio: any, idx: number) => (
          <div
            key={idx}
            className="min-w-[300px] text-white fill-white w-[400px] h-[300px] bg-[#809FB8] px-4 rounded-lg p-6 relative"
          >
            <div className="">
              <div className="font-semibold mb-8 text-lg text-white">
                {portfolio.name || "Kayseri Portföyü"}
              </div>
              <div className="">
                <div className="flex items-center mb-16">
                  <WindTurbineIcon className="w-16 h-16 fill-white" />
                  <div className="ml-2">
                    <div className="text-2xl font-bold">
                      {portfolio.project}
                    </div>
                    <span className="text-base font-normal text-gray-200">
                      {portfolio.location}
                    </span>
                  </div>
                </div>

                <div className="text-4xl font-bold mb-4 flex gap-4 items-center">
                  {/* image */}

                  <div className={``}>
                    <img
                      src={
                        portfolio.image ||
                        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmQlMjBmYXJtfGVufDB8fDB8fHww"
                      }
                      alt="Portfolio Image"
                      className="w-24 rounded-lg object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-gray-100 text-4xl font-normal">
                      {portfolio.power}
                    </span>
                    <span className="ml-2 text-gray-100 text-lg font-normal">
                      MWe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPortfolio;
