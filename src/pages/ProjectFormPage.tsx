import React, { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { client } from "../lib/strapi-client";
import il_ilce from "../data/il_ilce.json";

const ilData = il_ilce.iller;
const ilceData = il_ilce.ilceler;

// Step 1: Welcome/Info
function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 ml-2">
        <span className="text-blue-500 font-medium">proje</span> bilgileriniz
      </h2>
      <div className="bg-gray-100 rounded-2xl p-10 flex flex-row items-center justify-between  mt-2">
        <div className="flex items-center">
          <svg
            width="56"
            height="56"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-4 text-blue-400"
          >
            <rect
              x="3"
              y="7"
              width="18"
              height="13"
              rx="2"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="#fff"
            />
            <rect
              x="7"
              y="3"
              width="10"
              height="4"
              rx="1"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="#fff"
            />
          </svg>
          <span className="text-lg font-semibold text-gray-700">
            <b>
              Potansiyel alıcılarla tanışmaya sadece birkaç adım uzaklıktasınız.
            </b>{" "}
            Projelerinizi hemen ekleyin, doğru ilgiyi çekmesine yardımcı olalım.
          </span>
        </div>
        <button
          onClick={onNext}
          className="bg-blue-400 text-white rounded-xl px-10 py-3 text-lg font-medium mt-0 hover:cursor-pointer"
        >
          Başlayın
        </button>
      </div>
      <div className="flex items-start max-w-4xl mx-auto mt-4">
        <div className="flex items-center mr-2 mt-1">
          <svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            className="text-blue-400"
          >
            <circle cx="12" cy="12" r="10" fill="#3B82F6" fillOpacity="0.15" />
            <rect x="11" y="7" width="2" height="6" rx="1" fill="#3B82F6" />
            <rect x="11" y="15" width="2" height="2" rx="1" fill="#3B82F6" />
          </svg>
        </div>
        <span className="text-gray-500 text-sm">
          Sistemde proje yayınlayabilmek ücretsizdir. Yayınlanması için yetki
          belgesi talep edilecektir. Devam ederek projenizi taslak olarak
          kaydedebilir ve daha sonra yetki belgenizi yükleyerek projenizi
          yayınlayabilirsiniz.
        </span>
      </div>
    </div>
  );
}

// Step 2: Basic Project Info
function StepBasicInfo({
  formData,
  setFormData,
  onNext,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 ml-2">
        <span className="text-blue-500 font-medium">proje</span> bilgileriniz
      </h2>
      <div className="bg-gray-100 rounded-2xl p-10 mt-2">
        <div
          className="grid gap-6 items-center grid-rows-3"
          style={{ gridTemplateColumns: "180px 1fr 140px" }}
        >
          {/* First Column: Labels */}

          <label className="block text-gray-600 text-right">
            Yeni Proje Ekleyin
          </label>
          {/* Project Name Input */}
          <input
            className="w-full indent-4 placeholder:text-sm placeholder:font-semibold p-4 rounded-xl border-2 bg-white border-gray-300 focus:outline-blue-400 text-lg"
            placeholder="Proje Adı"
            value={formData.projectName}
            onChange={(e) =>
              setFormData((f: any) => ({ ...f, projectName: e.target.value }))
            }
          />
          <div></div>
          <div></div>

          {/* Facility Type Buttons */}
          <div className="flex gap-4">
            {/* Üretim Tesisi */}
            <button
              type="button"
              className={`relative flex-1 border-2 rounded-lg p-6 flex flex-col items-start justify-center min-h-[80px] text-left bg-white hover:cursor-pointer ${
                formData.facilityType === "Üretim Tesis"
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() =>
                setFormData((f: any) => ({
                  ...f,
                  facilityType: "Üretim Tesis",
                }))
              }
            >
              <input
                type="checkbox"
                checked={formData.facilityType === "Üretim Tesis"}
                onChange={() =>
                  setFormData((f: any) => ({
                    ...f,
                    facilityType: "Üretim Tesis",
                  }))
                }
                className="absolute top-3 left-3 w-5 h-5 rounded border-2 border-gray-300 checked:border-blue-400 checked:bg-blue-400 checked:hover:bg-blue-500 transition-colors cursor-pointer"
              />
              <span className="ml-7 font-medium">Üretim Tesisi</span>
              <span className="ml-7 text-xs text-gray-500 mt-1">
                Proje gücü alt eşiği 1 MW olup, n tane {"<=1"} MW proje
                yayınlanabilir
              </span>
            </button>
            {/* Müstakil Batarya Tesisi */}
            <button
              type="button"
              className={`relative flex-1 border-2 rounded-lg p-6 flex flex-col items-start justify-center min-h-[80px] text-left bg-white hover:cursor-pointer ${
                formData.facilityType === "Müstakil Batarya Tesis"
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() =>
                setFormData((f: any) => ({
                  ...f,
                  facilityType: "Müstakil Batarya Tesis",
                }))
              }
            >
              <input
                type="checkbox"
                checked={formData.facilityType === "Müstakil Batarya Tesis"}
                onChange={() =>
                  setFormData((f: any) => ({
                    ...f,
                    facilityType: "Müstakil Batarya Tesis",
                  }))
                }
                className="absolute top-3 left-3 w-5 h-5 rounded border-2 border-gray-300 checked:border-blue-400 checked:bg-blue-400 checked:hover:bg-blue-500 transition-colors cursor-pointer"
              />

              <span className="ml-7 font-medium">Müstakil Batarya Tesisi</span>
            </button>
          </div>
          <div></div>
          <label className="block text-gray-600 text-right">
            Yeni Proje Hangi Aşamadadır?
          </label>
          {/* Stage Buttons */}
          <div className="flex gap-4">
            {/* Lisanslı */}
            <label className="relative flex-1">
              <div
                className={`relative border-2 rounded-lg p-6 flex items-center justify-start min-h-[60px] bg-white hover:cursor-pointer ${
                  formData.stage === "Lisanslı"
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="stage"
                  value="Lisanslı"
                  checked={formData.stage === "Lisanslı"}
                  onChange={(e) =>
                    setFormData((f: any) => ({ ...f, stage: e.target.value }))
                  }
                  className="mr-3 w-5 h-5"
                />
                Lisanslı
              </div>
            </label>
            {/* Lisanssız */}

            <label className="relative flex-1">
              <div
                className={`relative border-2 rounded-lg p-6 flex items-center justify-start min-h-[60px] bg-white hover:cursor-pointer ${
                  formData.stage === "Lisanssız"
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="stage"
                  value="Lisanssız"
                  checked={formData.stage === "Lisanssız"}
                  onChange={(e) =>
                    setFormData((f: any) => ({ ...f, stage: e.target.value }))
                  }
                  className="mr-3 w-5 h-5"
                />
                Lisanssız
              </div>
            </label>
          </div>

          {/* Third Column: Devam Button */}
          <div className="">
            <button
              onClick={onNext}
              className="bg-blue-400 text-white rounded-xl px-10 py-3 text-lg font-medium hover:cursor-pointer"
            >
              Devam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3: Ana Kaynak
function StepAnaKaynak({
  formData,
  setFormData,
  onSubmit,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
}) {
  const [activeTab, setActiveTab] = useState("Ana Kaynak");

  const [anaKaynakFormData, setAnaKaynakFormData] = useState({
    sourceType: "Biyokütle/Biyogaz",
    projectStatus: "Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)",
    installedPower: "",
    operationalPower: "",
    powerUnit: "MWe",
    katkiPayi: "Var",
    katkiPayiValue: "",
    ilId: "",
    ilceId: "",
  });

  // Add a submit handler
  const handleSubmit = async () => {
    const payload = {
      data: {
        ...formData,
        sourceType: anaKaynakFormData.sourceType,
        projectStatus: anaKaynakFormData.projectStatus,
        installedPower: anaKaynakFormData.installedPower,
        operationalPower: anaKaynakFormData.operationalPower,
        katkiPayi: anaKaynakFormData.katkiPayi,
        katkiPayiValue: anaKaynakFormData.katkiPayiValue,
        ilId: anaKaynakFormData.ilId,
        ilceId: anaKaynakFormData.ilceId,
        // add other local state fields if needed
      },
    };

    try {
      const projects = client.collection("projects");

      // Create a new project
      const newProject = await projects.create({
        name: formData.projectName,
        description: formData.description,
        details: { ...formData },
      });

      console.log({ newProject });

      if (newProject.data.documentId) {
        alert("Proje başarıyla gönderildi!");
      } else {
        alert("Gönderme başarısız: ");
      }
    } catch (error) {
      alert("Bir hata oluştu: " + error);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Stepper */}
      <h2 className="text-2xl font-semibold mb-6 ml-2">
        <span className="text-blue-500 font-medium">tesise</span> ilişkin
        bilgiler
      </h2>
      <div className="flex items-center gap-2 mb-8 ml-2">
        <button
          data-active={activeTab === "Ana Kaynak"}
          className={`tab px-8 py-2 rounded-tl-xl rounded-bl-xl text-white font-medium ${
            activeTab === "Ana Kaynak"
              ? "bg-blue-400"
              : "bg-blue-100 text-blue-400"
          }`}
          onClick={() => setActiveTab("Ana Kaynak")}
        >
          Ana Kaynak
        </button>
        <button
          data-active={activeTab === "Yardımcı Kaynak"}
          className={`tab px-8 py-2 font-medium ${
            activeTab === "Yardımcı Kaynak"
              ? "bg-blue-400 text-white"
              : "bg-blue-100 text-blue-400"
          }`}
          onClick={() => setActiveTab("Yardımcı Kaynak")}
        >
          Yardımcı Kaynak
        </button>
        <button
          data-active={activeTab === "BESS"}
          className={`tab px-8 py-2 rounded-tr-xl rounded-br-xl font-medium ${
            activeTab === "BESS"
              ? "bg-blue-400 text-white"
              : "bg-blue-100 text-blue-400"
          }`}
          onClick={() => setActiveTab("BESS")}
        >
          BESS
        </button>
      </div>
      {/* Form Section (only Ana Kaynak for now) */}
      {activeTab === "Ana Kaynak" && (
        <div>
          <div className="bg-gray-100 rounded-2xl p-8 mb-8 flex flex-row gap-8">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Tesis/Proje Kaynak Türü
                  </label>
                  <select
                    value={anaKaynakFormData.sourceType}
                    onChange={(e) =>
                      setAnaKaynakFormData((f: any) => ({
                        ...f,
                        sourceType: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300"
                  >
                    <option>Biyokütle/Biyogaz</option>
                    <option>Güneş</option>
                    <option>Rüzgar</option>
                    <option>Hidroelektrik</option>
                    <option>Jeotermal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Tesis/Proje Durumu{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      title="Bilgi"
                    >
                      &#9432;
                    </span>
                  </label>
                  <select
                    value={anaKaynakFormData.projectStatus}
                    onChange={(e) =>
                      setAnaKaynakFormData((f: any) => ({
                        ...f,
                        projectStatus: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300"
                  >
                    <option>
                      Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)
                    </option>
                    <option>İnşaat Halinde</option>
                    <option>İşletmede</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Kurulu Güç
                  </label>
                  <div className="flex gap-2">
                    <input
                      value={anaKaynakFormData.installedPower}
                      onChange={(e) =>
                        setAnaKaynakFormData((f: any) => ({
                          ...f,
                          installedPower: e.target.value,
                        }))
                      }
                      className="w-32 p-3 rounded-lg border border-gray-300"
                      placeholder="MWe"
                    />
                    <input
                      className="w-32 p-3 rounded-lg border border-gray-300"
                      placeholder="MWm"
                      disabled
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    İşletmedeki Güç{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      title="Bilgi"
                    >
                      &#9432;
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      value={anaKaynakFormData.operationalPower}
                      onChange={(e) =>
                        setAnaKaynakFormData((f: any) => ({
                          ...f,
                          operationalPower: e.target.value,
                        }))
                      }
                      className="w-32 p-3 rounded-lg border border-gray-300"
                      placeholder="MWe"
                    />
                    <input
                      className="w-32 p-3 rounded-lg border border-gray-300"
                      placeholder="MWm"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Info box on the right */}
            <div className="w-72 flex items-end">
              <div className="bg-white rounded-xl p-4 text-gray-500 text-sm border border-gray-200">
                <span className="font-medium text-gray-700 block mb-2">
                  Lisans dereceli toplam gücü yazınız.
                </span>
                Ondalık için virgül işareti kullanınız.
              </div>
            </div>
          </div>

          {/* 2nd Section: Kabul Bilgileri */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Kabul Bilgileri
                </label>
                <select className="w-full p-3 rounded-lg border border-gray-300 mb-4">
                  <option>Kabul Bilgileri</option>
                  <option>Seçenek 1</option>
                </select>
                <div className="flex gap-2 mb-4">
                  <input
                    type="date"
                    className="p-3 rounded-lg border border-gray-300"
                  />
                  <input
                    className="w-24 p-3 rounded-lg border border-gray-300"
                    placeholder="MWe"
                  />
                  <input
                    className="w-24 p-3 rounded-lg border border-gray-300"
                    placeholder="MWm"
                  />
                  <button className="bg-blue-400 text-white rounded-lg px-6 py-2 font-medium hover:cursor-pointer">
                    Ekle
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-semibold text-right text-sm">
                    YEKDEM son yararlanma takvim yılı/dönemi
                  </span>
                  <select className="p-3 rounded-lg border border-gray-300 w-32">
                    {Array.from(
                      { length: 21 },
                      (_, i) => new Date().getFullYear() + i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span className="text-blue-400 cursor-pointer" title="Bilgi">
                    &#9432;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Section: Elektrik Satışı, Katkı Payı */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-3 gap-6 mb-4 items-end">
              <div>
                <span className="block text-gray-600 font-medium mb-2">
                  Elektrik Satışı
                </span>
                <label className="flex items-center gap-2 bg-white rounded-lg p-8">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-gray-300"
                  />
                  <span className="text-gray-600 font-medium">
                    Kapasite Artış İmkanı
                  </span>
                </label>
              </div>
              <div>
                <span className="block text-gray-600 font-medium mb-2">
                  Katkı Payı
                </span>
                <div className="flex gap-4 bg-white rounded-lg p-8">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="katkiPayi"
                      value="Var"
                      checked={anaKaynakFormData.katkiPayi === "Var"}
                      onChange={(e) =>
                        setAnaKaynakFormData((f: any) => ({
                          ...f,
                          katkiPayi: e.target.value,
                        }))
                      }
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-blue-400 checked:border-blue-400"
                    />
                    <span className="text-gray-600 font-medium ml-2">Var</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="katkiPayi"
                      value="Yok"
                      checked={anaKaynakFormData.katkiPayi === "Yok"}
                      onChange={(e) =>
                        setAnaKaynakFormData((f: any) => ({
                          ...f,
                          katkiPayi: e.target.value,
                        }))
                      }
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-blue-400 checked:border-blue-400"
                    />
                    <span className="text-gray-600 font-medium ml-2">Yok</span>
                  </label>
                </div>
              </div>
              <div
                className={`${
                  anaKaynakFormData.katkiPayi === "Var" ? "" : "opacity-50"
                }`}
              >
                <span className="block text-gray-600 font-medium mb-2">
                  Katkı Payı (varsa)
                </span>
                <input
                  className="w-40 p-3 rounded-lg border border-gray-300"
                  placeholder="Birim Seçin"
                  value={anaKaynakFormData.katkiPayiValue}
                  onChange={(e) =>
                    setAnaKaynakFormData((f: any) => ({
                      ...f,
                      katkiPayiValue: e.target.value,
                    }))
                  }
                  disabled={anaKaynakFormData.katkiPayi !== "Var"}
                />
              </div>
            </div>
          </div>

          {/* 4th Section: Proje Lokasyonu, File Upload */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <span className="block text-gray-600 font-medium mb-4">
              Proje Lokasyonu
            </span>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="flex gap-4">
                <select
                  className="p-3 rounded-lg border border-gray-300 w-40"
                  value={anaKaynakFormData.ilId}
                  onChange={(e) =>
                    setAnaKaynakFormData((f: any) => ({
                      ...f,
                      ilId: e.target.value,
                    }))
                  }
                >
                  <option value={""}>İl Seçin</option>
                  {/* il data */}
                  {ilData.map((il) => (
                    <option key={il.id} value={il.id}>
                      {il.name}
                    </option>
                  ))}
                </select>
                <select
                  className="p-3 rounded-lg border border-gray-300 w-40"
                  value={anaKaynakFormData.ilceId}
                  onChange={(e) =>
                    setAnaKaynakFormData((f: any) => ({
                      ...f,
                      ilceId: e.target.value,
                    }))
                  }
                >
                  <option value={""}>İlçe Seçin</option>
                  {/* ilce data */}
                  {ilceData
                    .filter((ilce) => ilce.il_id === anaKaynakFormData.ilId)
                    .map((ilce) => (
                      <option key={ilce.id} value={ilce.id}>
                        {ilce.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Proje Lokasyon KMZ Yükleyin.
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-6 cursor-pointer bg-white text-blue-400 hover:bg-blue-50">
                  <span className="mb-2">+ Add some files</span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* 5th Section: Proje Hakkında Kısa Açıklama, Teaser Yükleyin */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Proje Hakkında Kısa Açıklama
                </label>
                <textarea
                  className="w-full p-3 rounded-lg border border-gray-300 min-h-[60px]"
                  placeholder="Açıklama"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((f: any) => ({
                      ...f,
                      description: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Teaser Yükleyin
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-6 cursor-pointer bg-white text-blue-400 hover:bg-blue-50">
                  <span className="mb-2">+ Add some files</span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Add a submit button at the end of the Ana Kaynak tab */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-xl px-10 py-3 text-lg font-medium hover:bg-blue-600 hover:cursor-pointer"
            >
              Gönder
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Multi-step Form Page
const ProjectFormPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    projectName: "",
    facilityType: "",
    stage: "",
    // Ana Kaynak fields
    sourceType: "Biyokütle/Biyogaz",
    projectStatus: "Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)",
    installedPower: "",
    operationalPower: "",
    kabulBilgisi: "",
    kabulTarihi: "",
    kabulMWe: "",
    kabulMWm: "",
    yekdemYil: new Date().getFullYear().toString(),
    kapasiteArtisImkani: false,
    katkiPayi: "",
    katkiPayiValue: "",
    katkiPayiBirim: "",
    il: "",
    ilce: "",
    kmzFile: null,
    description: "",
    teaserFile: null,
  });

  console.log(formData);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="flex-1 ml-20 px-10 pt-8">
        {step === 0 && <StepWelcome onNext={() => setStep(1)} />}
        {step === 1 && (
          <StepBasicInfo
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <StepAnaKaynak
            formData={formData}
            setFormData={setFormData}
            onSubmit={() => setStep(3)}
          />
        )}
        {/* Add more steps here as needed */}
      </main>
    </div>
  );
};

export default ProjectFormPage;
