import { Wind, Droplet, Sun, Flame } from "lucide-react";
import WindTurbineIcon from "../assets/WindTurbineIcon";
import { useEffect, useState } from "react";
import { client } from "../lib/strapi-client";
import type { StrapiResponse, ProjectData } from "../types/project";
import { iller } from "../data/il_ilce.json";
import { useNavigate } from "react-router-dom";

export const ExploreSection = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await client.fetch("projects", {
          method: "GET",
        });
        const response = await res.json();
        setProjects(response.data);
      } catch (err) {
        setError("Projeler yüklenirken bir hata oluştu.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const getSourceIcon = (sourceType: string) => {
    switch (sourceType) {
      case "Rüzgar":
        return <WindTurbineIcon className="w-10 h-10" />;
      case "Güneş":
        return <Sun size={64} />;
      case "Hidroelektrik":
        return <Droplet size={64} />;
      case "Biyokütle/Biyogaz":
      case "Jeotermal":
        return <Flame size={64} />;
      default:
        return <Wind size={64} />;
    }
  };

  const getIlName = (ilId: string) => {
    const il = iller.find((il) => il.id === ilId);
    return il
      ? il.name.charAt(0).toLocaleUpperCase() +
          il.name.slice(1).toLocaleLowerCase()
      : "Şehir";
  };

  const handleProjectClick = (documentId: string) => {
    navigate(`/projects/${documentId}`);
  };

  return (
    <section className="mb-20 text-[#5A5B5E]">
      <h2 className="text-4xl font-bold mb-8">
        <span className="text-primary-blue">explore</span>
        <span className="text-primary-gray"> project</span>
      </h2>

      <div className="grid grid-cols-[1fr_4fr] gap-6">
        <div className="max-w-xs">
          <p className="text-primary-gray text-sm">
            Lorem ipsum dolor sit amet consectetur. Elementum risus tempor at
            vivamus curabitur viverra diam nec.
          </p>
        </div>

        {/* Project Cards Row */}
        <div className="overflow-hidden relative px-12">
          {loading ? (
            <div>Yükleniyor...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                <div className="flex gap-2">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="project-card flex-none w-[calc(33.33%-0.5rem)] min-w-[300px] snap-start flex h-64 justify-between flex-col bg-white rounded-lg py-4 px-6 shadow-sm"
                    >
                      <div className="title-container">
                        <h3 className="font-bold text-xl">
                          {project.projectName}
                        </h3>
                        <p className="text-base">
                          {getIlName(project.details.ilId)}, Türkiye
                        </p>

                        <div className="flex justify-between items-center mt-4">
                          <div className="">
                            <span className="text-5xl font-bold">
                              {project.details.installedPower}
                            </span>
                            <span className="ml-1">MWe</span>
                          </div>
                          <div className="flex justify-start">
                            {getSourceIcon(project.details.sourceType)}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleProjectClick(project.documentId)}
                        className="bg-primary-blue text-white rounded-4xl px-10 py-4 text-sm w-30 hover:bg-blue-500 cursor-pointer transition-colors"
                      >
                        İncele
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {projects.length > 0 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-primary-blue transition-all z-10"
                    onClick={() => {
                      const container =
                        document.querySelector(".overflow-x-auto");
                      if (container)
                        container.scrollBy({ left: -300, behavior: "smooth" });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>

                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-primary-blue transition-all z-10"
                    onClick={() => {
                      const container =
                        document.querySelector(".overflow-x-auto");
                      if (container)
                        container.scrollBy({ left: 300, behavior: "smooth" });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
