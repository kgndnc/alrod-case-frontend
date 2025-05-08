import { useEffect, useState } from "react";
import { client } from "../lib/strapi-client";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { FeaturedProjectsSection } from "../components/FeaturedProjects";
import { ExploreSection } from "../components/ExploreSection";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const __Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await client.fetch("projects", { method: "GET" });
        const projects = await result.json();
        setData(projects?.data ?? []);
      } catch (error) {
        console.error("Catched error");
        console.error(error);
        setData([]);
      }
    })();
  }, []);

  return (
    <>
      <div>Home</div>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-20 px-10 pt-8">
        <Hero />
        <FeaturedProjectsSection />
        <ExploreSection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
