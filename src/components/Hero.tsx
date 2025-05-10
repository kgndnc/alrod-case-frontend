import { Image, Wind } from "lucide-react";
import { Droplet } from "lucide-react";
import type React from "react";

export const Hero: React.FC = () => (
  <div className="list mb-20 text-[#5A5B5E]">
    <section className="grid -mt-8 grid-cols-[4fr_1fr] w-full grid-rows-2 hero-banner">
      <h1 className="text-5xl font-bold col-span-2">
        <span className="text-blue-500">energy</span>
        <span> starts here</span>
      </h1>
      <p className="pl-28 mb-4 max-w-lg">
        The Only Best marketplace to buy or sell a project, find energy project
        that interest you
      </p>
      <button className="bg-blue-500 text-white rounded-full mr-2 justify-self-end px-8 py-2 w-32 h-14">
        Join Us
      </button>
    </section>

    {/* Çamlıdere Projesi */}
    <div className="project-card project-card-1 justify-self-end bg-white rounded-lg p-6 shadow-sm w-[335px] h-[281px]">
      <div className="flex justify-start min-h-1/3 mb-4">
        <Droplet />
      </div>

      <div className="middle">
        <h3 className="font-bold text-2xl">Çamlıdere Projesi</h3>
        <p className="text-base">Kayseri, Türkiye</p>
      </div>

      <div className="mt-4">
        <span className="text-4xl font-bold">125</span>
        <span className="ml-1">MWe</span>
      </div>
    </div>

    {/* Boş kart uzun */}
    <div className="project-card project-card-2 flex justify-center items-center bg-white rounded-lg p-6 shadow-sm w-[335px] h-full">
      <Image size={100} opacity={0.2} color="gray" strokeWidth={0.7} />
    </div>

    {/* Rüzgartepe Projesi */}
    <div className="project-card project-card-3 justify-self-end bg-white rounded-lg p-6 shadow-sm w-[335px] h-[281px]">
      <div className="flex justify-start min-h-1/3 mb-4">
        <Wind />
      </div>

      <div className="middle">
        <h3 className="font-bold text-2xl">Rüzgartepe Projesi</h3>
        <p className="text-base">Adana, Türkiye</p>
      </div>

      <div className="mt-4">
        <span className="text-4xl font-bold">43</span>
        <span className="ml-1">MWe</span>
      </div>
    </div>

    {/* Boş kart kısa */}
    <div className="project-card project-card-4 flex justify-center items-center bg-white rounded-lg p-6 shadow-sm w-[335px] h-full">
      <Image size={100} opacity={0.2} color="gray" strokeWidth={0.7} />
    </div>

    {/* Pagination Dots */}
    <div className="pagination-dots flex gap-4 justify-center">
      <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
      <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
    </div>
  </div>
);
