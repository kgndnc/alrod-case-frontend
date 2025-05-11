import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { client } from "../lib/strapi-client";
import ProjectHeader from "../components/ProjectDetails/ProjectHeader";
import ProjectTabs from "../components/ProjectDetails/ProjectTabs";
import ProjectSubTabs from "../components/ProjectDetails/ProjectSubTabs";
import ProjectInfoGrid from "../components/ProjectDetails/ProjectInfoGrid";
import ProjectYekdem from "../components/ProjectDetails/ProjectYekdem";
import ProjectFiles from "../components/ProjectDetails/ProjectFiles";
import ProjectGallery from "../components/ProjectDetails/ProjectGallery";
import ProjectPortfolio from "../components/ProjectDetails/ProjectPortfolio";
import ProjectSeller from "../components/ProjectDetails/ProjectSeller";
import { Footer } from "../components/Footer";
import type { StrapiResponse, ProjectData } from "../types/project";

const MOCK_PROJECT = {
  projectName: "Çamlıdere Projesi",
  ilId: "38",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu dolore magna aliquam erat volutpat lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu dolore magna aliquam erat volutpat",
  installedPower: 64,
  kabulBilgisi: [
    { date: "2024-04-23", mwe: "40" },
    { date: "2024-07-25", mwe: "5" },
    { date: "2025-02-15", mwe: "10" },
  ],
  elektrikSatisi: [
    { date: "2024-04-23", mwe: "40" },
    { date: "2024-07-25", mwe: "5" },
    { date: "2025-02-15", mwe: "10" },
  ],
  yekdemYil: "2024-04-23",
  katkiPayiValue: "234090",
  sourceType: "Rüzgar",
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
  const [project, setProject] = useState<ProjectData | null>(null);
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
        if (project_id === "example") {
          setProject(null); // This will trigger the mock data display
        } else {
          const res = await client.fetch(`projects/${project_id}`, {
            method: "GET",
          });
          const data: StrapiResponse = await res.json();
          setProject(data?.data ?? null);
        }
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
        projectName: project.projectName,
        ilId: project.details?.ilId,
        description: project.description,
        installedPower: project.details?.installedPower,
        operationalPower: project.details?.operationalPower,
        facilityType: project.details?.facilityType,
        stage: project.details?.stage,
        sourceType: project.details?.sourceType,
        projectStatus: project.details?.projectStatus,
        kabulBilgisi: project.details?.acceptanceInfo || [],
        yekdemYil: project.details?.yekdemSonTarihi,
        kapasiteArtisImkani: project.details?.kapasiteArtisImkani,
        katkiPayi: project.details?.katkiPayi,
        katkiPayiValue: project.details?.katkiPayiValue,
        ilceId: project.details?.ilceId,
        photos: MOCK_PROJECT.photos,
        mainPhoto: MOCK_PROJECT.mainPhoto,
        portfolios: MOCK_PROJECT.portfolios,
        seller: MOCK_PROJECT.seller,
      }
    : MOCK_PROJECT;

  console.log(display);

  return (
    <div className="bg-white">
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
                <ProjectTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  activeSubTab={activeSubTab}
                  setActiveSubTab={setActiveSubTab}
                />
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
                    </>
                  )}

                {activeTab === "Q&A" && (
                  <div className="p-6 bg-gray-50 rounded-lg mb-4">
                    <p>Q&A section coming soon...</p>
                  </div>
                )}
              </div>
            </section>

            {activeTab === "Tesise İlişkin Bilgiler" &&
              activeSubTab === "Ana Kaynak" && (
                <>
                  <ProjectPortfolio display={display} />
                  <ProjectSeller display={display} />
                </>
              )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
