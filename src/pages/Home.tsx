import { useEffect, useState } from "react";
import { client } from "../lib/strapi-client";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { FeaturedProjectsSection } from "../components/FeaturedProjects";
import { ExploreSection } from "../components/ExploreSection";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";



function Home() {
  return (
    <div className="flex flex-col  bg-white">
      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8">
        <Hero />
        {/* <FeaturedProjectsSection /> */}
        <ExploreSection />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
