import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { client } from "../lib/strapi-client";
import WindTurbineIcon from "../assets/WindTurbineIcon";
import ProjectHeader from "../components/ProjectDetails/ProjectHeader";
import ProjectTabs from "../components/ProjectDetails/ProjectTabs";
import ProjectSubTabs from "../components/ProjectDetails/ProjectSubTabs";
import ProjectInfoGrid from "../components/ProjectDetails/ProjectInfoGrid";
import ProjectYekdem from "../components/ProjectDetails/ProjectYekdem";
import ProjectFiles from "../components/ProjectDetails/ProjectFiles";
import ProjectGallery from "../components/ProjectDetails/ProjectGallery";
import ProjectPortfolio from "../components/ProjectDetails/ProjectPortfolio";
import ProjectSeller from "../components/ProjectDetails/ProjectSeller";

const MOCK_PROJECT = {
  name: "Çamlıdere Projesi",
  il: "Kayseri",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu dolore magna aliquam erat volutpat lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu dolore magna aliquam erat volutpat",
  installedPower: 64,
  kabulBilgisi: [
    { date: "23.04.2024", power: "40 MWe" },
    { date: "25.07.2024", power: "5 MWe" },
    { date: "15.02.2025", power: "10 MWe" },
  ],
  elektrikSatisi: [
    { date: "23.04.2024", power: "40 MWe" },
    { date: "25.07.2024", power: "5 MWe" },
    { date: "15.02.2025", power: "10 MWe" },
  ],
  yekdemTarihi: "23.04.2024",
  katkiPayi: "234.090,00",
  photos: [
    "https://images.unsplash.com/photo-1524252500348-1bb07b83f3be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZCUyMGZhcm18ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbmQlMjBmYXJtfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmQlMjBmYXJtfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbmQlMjBmYXJtfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2luZCUyMGZhcm18ZW58MHx8MHx8fDA%3D",
  ],
  mainPhoto:
    "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2luZCUyMGZhcm18ZW58MHx8MHx8fDA%3D",
  portfolios: [
    {
      name: "Kayseri Portföyü",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh eu dolore magna aliquam erat volutpat…",
      project: "Rüzgartepe-2 Projesi",
      location: "Kayseri, Türkiye",
      power: 64,
    },
    {
      name: "Kayseri Portföyü",
      project: "Rüzgartepe-2 Projesi",
      location: "Kayseri, Türkiye",
      power: 64,
    },
  ],
  seller: {
    name: "Ahmet Hamdi Öztürk",
    info: "Proje doğrudan sahibi tarafından satılmaktadır. Satıcı bilgileri Enstart tarafından doğrulanmıştır ve gerekli belgeler taraflarca karşılıklı olarak imzalanmıştır.",
  },
};

const ProjectDetailsPage: React.FC = () => {
  const { project_id } = useParams<{ project_id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Tesise İlişkin Bilgiler");
  const [activeSubTab, setActiveSubTab] = useState("Ana Kaynak");
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      setError(null);
      try {
        const res = await client.fetch(`projects/${project_id}`, {
          method: "GET",
        });
        const data = await res.json();
        setProject(data?.data ?? null);
      } catch (err) {
        setError("Proje bulunamadı veya bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    }
    if (project_id) fetchProject();
    else setLoading(false);
  }, [project_id]);

  // Use fetched data if available, otherwise mock data
  const display = project
    ? {
        name: project.attributes?.name,
        il: project.attributes?.details?.il,
        description: project.attributes?.description,
        installedPower: project.attributes?.details?.installedPower,
        kabulBilgisi: MOCK_PROJECT.kabulBilgisi, // Fallback to mock data
        elektrikSatisi: MOCK_PROJECT.elektrikSatisi, // Fallback to mock data
        yekdemTarihi: project.attributes?.details?.yekdemTarihi,
        katkiPayi: project.attributes?.details?.katkiPayiValue,
        photos: MOCK_PROJECT.photos,
        mainPhoto: MOCK_PROJECT.mainPhoto,
        portfolios: MOCK_PROJECT.portfolios,
        seller: MOCK_PROJECT.seller,
      }
    : MOCK_PROJECT;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="flex-1 ml-20 px-10 pt-8">
        {loading && <div>Yükleniyor...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && (
          <div className="w-full max-w-7xl mx-auto">
            {/* Project Header */}
            <ProjectHeader display={display} />

            {/* Main Content with Side Tabs */}
            <ProjectTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeSubTab={activeSubTab}
              setActiveSubTab={setActiveSubTab}
            />
            <section className="flex">
              {/* Left Side - Tabs */}
              <div className="w-48 flex flex-col mr-6">
                {/* Sub tabs visible only when Tesise İlişkin Bilgiler is active */}
                {activeTab === "Tesise İlişkin Bilgiler" && (
                  <ProjectSubTabs
                    activeSubTab={activeSubTab}
                    setActiveSubTab={setActiveSubTab}
                  />
                )}
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                {activeTab === "Tesise İlişkin Bilgiler" &&
                  activeSubTab === "Ana Kaynak" && (
                    <>
                      <ProjectInfoGrid display={display} />
                      {/* Yekdem Hakkı */}
                      <ProjectYekdem display={display} />
                      {/* Veri Odası & Teaser */}
                      <ProjectFiles />
                      <ProjectGallery
                        display={display}
                        selectedPhoto={selectedPhoto}
                        setSelectedPhoto={setSelectedPhoto}
                      />
                      <ProjectPortfolio display={display} />
                      <ProjectSeller display={display} />
                    </>
                  )}

                {activeTab === "Q&A" && (
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <p>Q&A section coming soon...</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
