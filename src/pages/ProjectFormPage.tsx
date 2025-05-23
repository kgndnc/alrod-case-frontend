import React, { useState, useCallback } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { client } from "../lib/strapi-client";
import il_ilce from "../data/il_ilce.json";
import { Footer } from "../components/Footer";
import { BatteryCharging, Bell, Factory, Folders } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ProjectFormData, AcceptanceInfo } from "../types/project";

const ilData = il_ilce.iller;
const ilceData = il_ilce.ilceler;

// Step 1: Welcome/Info
function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full mx-auto mb-60">
      <h2 className="text-3xl font-semibold mb-12">
        <span className="text-primary-blue">proje</span> bilgileriniz
      </h2>
      <div className="bg-gray-100 rounded-2xl p-20 flex flex-row items-center justify-between gap-12 mt-2">
        <div className="flex gap-6 items-center">
          <Folders size={120} className="text-primary-blue" />
          <div className="text-2xl text-gray-700">
            <b className="">
              Potansiyel alıcılarla tanışmaya sadece birkaç adım uzaklıktasınız.
            </b>
            <span>
              &nbsp;Projelerinizi hemen ekleyin, doğru ilgiyi çekmesine yardımcı
              olalım.
            </span>
          </div>
        </div>
        <button
          onClick={onNext}
          className="bg-primary-blue text-white rounded-xl px-18 py-3 text-lg font-medium mt-0 hover:cursor-pointer"
        >
          Başlayın
        </button>
      </div>
      <div className="flex items-center max-w-4xl mx-auto mt-6">
        <div className="flex items-center mr-4 bg-primary-blue rounded-xl p-4">
          <Bell size={24} className="text-white fill-primary-blue" />
        </div>
        <span className="text-primary-gray text-sm text-balance">
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
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
  onNext: () => void;
}) {
  const handleNext = useCallback(() => {
    if (formData.projectName === "") {
      alert("Proje adı girilmedi");
      return;
    }
    if (formData.facilityType === "") {
      alert("Proje türü seçilmedi");
      return;
    }
    if (formData.stage === "") {
      alert("Proje aşaması seçilmedi");
      return;
    }
    onNext();
  }, [formData, onNext]);

  return (
    <div className="w-full max-w-7xl mx-auto mb-60">
      <h2 className="text-3xl font-semibold mb-6 ml-2">
        <span className="text-primary-blue">proje</span> bilgileriniz
      </h2>
      <div className="bg-gray-100 rounded-2xl p-10 mt-2">
        <div
          className="grid gap-8 items-center grid-rows-[auto_1fr_auto]"
          style={{ gridTemplateColumns: "180px 1fr 140px" }}
        >
          {/* First Column: Labels */}
          <label className="block text-primary-gray text-right">
            Yeni Proje Ekleyin
          </label>
          {/* Project Name Input */}
          <input
            className="w-full indent-4 placeholder:text-sm placeholder:font-semibold p-4 rounded-xl border-2 bg-white border-gray-300 focus:outline-primary-blue text-lg"
            placeholder="Proje Adı"
            value={formData.projectName}
            name="projectName"
            id="projectName"
            onChange={(e) =>
              setFormData((f: any) => ({ ...f, projectName: e.target.value }))
            }
            required={true}
          />
          <div></div>
          <div></div>

          {/* Facility Type Buttons */}
          <div className="flex gap-4">
            {/* Üretim Tesisi */}
            <button
              type="button"
              className={`flex-1 border-2 grid gap-2 grid-cols-[1fr_auto] rounded-lg p-6 min-h-[80px] text-left bg-white hover:cursor-pointer ${
                formData.facilityType === "Üretim Tesis"
                  ? "border-primary-blue bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() =>
                setFormData((f: any) => ({
                  ...f,
                  facilityType: "Üretim Tesis",
                }))
              }
            >
              <div className="">
                <label className="flex items-center gap-2 mb-2" htmlFor="">
                  <input
                    type="checkbox"
                    checked={formData.facilityType === "Üretim Tesis"}
                    onChange={() =>
                      setFormData((f: any) => ({
                        ...f,
                        facilityType: "Üretim Tesis",
                      }))
                    }
                    className="w-5 h-5 rounded border-2 border-gray-300 checked:border-primary-blue checked:bg-primary-blue checked:hover:bg-primary-blue transition-colors cursor-pointer"
                  />
                  <span className="font-medium">Üretim Tesisi</span>
                </label>

                <span className="text-sm text-primary-gray mt-1">
                  Proje gücü alt eşiği 1 MW olup, n tane {"<=1"} MW proje
                  yayınlanabilir
                </span>
              </div>
              <div className="text-primary-blue">
                <Factory size={32} />
              </div>
            </button>
            {/* Müstakil Batarya Tesisi */}

            <button
              type="button"
              className={`flex-1 border-2 grid gap-2 grid-cols-[1fr_auto] rounded-lg p-6 min-h-[80px] text-left bg-white hover:cursor-pointer ${
                formData.facilityType === "Müstakil Batarya Tesis"
                  ? "border-primary-blue bg-blue-50"
                  : "border-gray-300"
              }`}
              onClick={() =>
                setFormData((f: any) => ({
                  ...f,
                  facilityType: "Müstakil Batarya Tesis",
                }))
              }
            >
              <div className="">
                <label className="flex items-center gap-2 mb-2" htmlFor="">
                  <input
                    type="checkbox"
                    checked={formData.facilityType === "Müstakil Batarya Tesis"}
                    onChange={() =>
                      setFormData((f: any) => ({
                        ...f,
                        facilityType: "Müstakil Batarya Tesis",
                      }))
                    }
                    className="w-5 h-5 rounded border-2 border-gray-300 checked:border-primary-blue checked:bg-primary-blue checked:hover:bg-primary-blue transition-colors cursor-pointer"
                  />
                  <span className="font-medium">Müstakil Batarya Tesisi</span>
                </label>
              </div>
              <div className="text-primary-blue">
                <BatteryCharging size={32} />
              </div>
            </button>
          </div>
          <div></div>
          <label className="block text-primary-gray text-right">
            Yeni Proje Hangi Aşamadadır?
          </label>
          {/* Stage Buttons */}
          <div className="flex gap-4">
            {/* Lisanslı */}
            <label className="relative flex-1">
              <div
                className={`relative border-2 rounded-lg p-6 flex items-center justify-start min-h-[60px] bg-white hover:cursor-pointer ${
                  formData.stage === "Lisanslı"
                    ? "border-primary-blue bg-blue-50"
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
                    ? "border-primary-blue bg-blue-50"
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
              onClick={handleNext}
              className="bg-primary-blue text-white rounded-xl px-10 py-3 text-lg font-medium hover:cursor-pointer"
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
  acceptanceInfo,

  currentAcceptance,
  setCurrentAcceptance,
  handleAddAcceptance,
  handleRemoveAcceptance,

}: {
  formData: ProjectFormData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectFormData>>;
  acceptanceInfo: AcceptanceInfo[];
  setAcceptanceInfo: React.Dispatch<React.SetStateAction<AcceptanceInfo[]>>;
  currentAcceptance: AcceptanceInfo;
  setCurrentAcceptance: React.Dispatch<React.SetStateAction<AcceptanceInfo>>;
  handleAddAcceptance: () => void;
  handleRemoveAcceptance: (index: number) => void;
  onSubmit: () => void;
}): React.ReactElement {
  const [activeTab, setActiveTab] = useState("Ana Kaynak");
  const navigate = useNavigate();

  // Add a submit handler
  const handleSubmit = async () => {
    try {
      const projects = client.collection("projects");

      // Create a new project
      const newProject = await projects.create({
        projectName: formData.projectName,
        description: formData.description,
        details: { ...formData, acceptanceInfo }, // Include acceptance info in details
      });


      if (newProject.data.documentId) {
        alert("Proje başarıyla gönderildi!");
        navigate("/");
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
        <span className="text-primary-blue font-medium">tesise</span> ilişkin
        bilgiler
      </h2>
      <div className="flex items-center gap-2 mb-8 ml-2">
        <button
          data-active={activeTab === "Ana Kaynak"}
          className={`tab px-8 py-8 rounded-tl-xl rounded-bl-xl text-white font-medium ${
            activeTab === "Ana Kaynak"
              ? "bg-primary-blue"
              : "bg-blue-100 text-primary-blue"
          }`}
          onClick={() => setActiveTab("Ana Kaynak")}
        >
          Ana Kaynak
        </button>
        <button
          data-active={activeTab === "Yardımcı Kaynak"}
          className={`tab px-8 py-8 font-medium ${
            activeTab === "Yardımcı Kaynak"
              ? "bg-primary-blue text-white"
              : "bg-blue-100 text-primary-blue"
          }`}
          onClick={() => setActiveTab("Yardımcı Kaynak")}
        >
          Yardımcı Kaynak
        </button>
        <button
          data-active={activeTab === "BESS"}
          className={`tab px-8 py-8 rounded-tr-xl rounded-br-xl font-medium ${
            activeTab === "BESS"
              ? "bg-primary-blue text-white"
              : "bg-blue-100 text-primary-blue"
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
                  <label className="block text-primary-gray font-medium mb-2">
                    Tesis/Proje Kaynak Türü
                  </label>
                  <select
                    value={formData.sourceType}
                    onChange={(e) =>
                      setFormData((f: any) => ({
                        ...f,
                        sourceType: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300"
                  >
                    <option value="Biyokütle/Biyogaz">Biyokütle/Biyogaz</option>
                    <option value="Güneş">Güneş</option>
                    <option value="Rüzgar">Rüzgar</option>
                    <option value="Hidroelektrik">Hidroelektrik</option>
                    <option value="Jeotermal">Jeotermal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-primary-gray font-medium mb-2">
                    Tesis/Proje Durumu{" "}
                    <span
                      className="text-primary-blue cursor-pointer"
                      title="Bilgi"
                    >
                      &#9432;
                    </span>
                  </label>
                  <select
                    value={formData.projectStatus}
                    onChange={(e) =>
                      setFormData((f: any) => ({
                        ...f,
                        projectStatus: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-lg border border-gray-300"
                  >
                    <option value="Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)">
                      Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)
                    </option>
                    <option value="İnşaat Halinde">İnşaat Halinde</option>
                    <option value="İşletmede">İşletmede</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <label className="block text-primary-gray font-medium mb-2">
                    Kurulu Güç
                  </label>
                  <div className="flex gap-2">
                    <input
                      value={formData.installedPower}
                      onChange={(e) =>
                        setFormData((f: any) => ({
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
                  <label className="block text-primary-gray font-medium mb-2">
                    İşletmedeki Güç{" "}
                    <span
                      className="text-primary-blue cursor-pointer"
                      title="Bilgi"
                    >
                      &#9432;
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      value={formData.operationalPower}
                      onChange={(e) =>
                        setFormData((f: any) => ({
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
              <div className="bg-white rounded-xl p-4 text-primary-gray text-sm border border-gray-200">
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
                <label className="block text-primary-gray font-medium mb-2">
                  Kabul Bilgileri
                </label>
                <select className="w-full p-3 rounded-lg border border-gray-300 mb-4">
                  <option>Kabul Bilgileri</option>
                  <option>Seçenek 1</option>
                </select>
                {/* Display existing acceptance info rows */}
                {acceptanceInfo.map((info, index) => (
                  <div key={index} className="flex gap-2 mb-4 items-center">
                    <input
                      type="date"
                      value={info.date}
                      disabled
                      className="p-3 rounded-lg border border-gray-300 bg-gray-50"
                    />
                    <input
                      value={info.mwe}
                      disabled
                      className="w-24 p-3 rounded-lg border border-gray-300 bg-gray-50"
                      placeholder="MWe"
                    />
                    <input
                      value={info.mwm}
                      disabled
                      className="w-24 p-3 rounded-lg border border-gray-300 bg-gray-50"
                      placeholder="MWm"
                    />
                    <button
                      onClick={() => handleRemoveAcceptance(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Sil
                    </button>
                  </div>
                ))}
                {/* Input row for new acceptance info */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="date"
                    value={currentAcceptance.date}
                    onChange={(e) =>
                      setCurrentAcceptance((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    className="p-3 rounded-lg border border-gray-300"
                  />
                  <input
                    value={currentAcceptance.mwe}
                    onChange={(e) =>
                      setCurrentAcceptance((prev) => ({
                        ...prev,
                        mwe: e.target.value,
                      }))
                    }
                    className="w-24 p-3 rounded-lg border border-gray-300"
                    placeholder="MWe"
                  />
                  <input
                    value={currentAcceptance.mwm}
                    onChange={(e) =>
                      setCurrentAcceptance((prev) => ({
                        ...prev,
                        mwm: e.target.value,
                      }))
                    }
                    className="w-24 p-3 rounded-lg border border-gray-300"
                    placeholder="MWm"
                  />
                  <button
                    onClick={handleAddAcceptance}
                    className="bg-primary-blue text-white rounded-lg px-6 py-2 font-medium hover:cursor-pointer"
                  >
                    Ekle
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-gray font-semibold text-right text-sm">
                    YEKDEM son yararlanma takvim yılı/dönemi
                  </span>
                  <select
                    className="p-3 rounded-lg border border-gray-300 w-32"
                    value={formData.yekdemSonTarihi}
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        yekdemSonTarihi: e.target.value,
                      }))
                    }
                  >
                    {Array.from(
                      { length: 21 },
                      (_, i) => new Date().getFullYear() + i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span className="text-primary-blue cursor-pointer" title="Bilgi">
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
                <span className="block text-primary-gray font-medium mb-2">
                  Elektrik Satışı
                </span>
                <label className="flex items-center gap-2 bg-white rounded-lg p-8">
                  <input
                    type="checkbox"
                    checked={formData.kapasiteArtisImkani}
                    onChange={(e) =>
                      setFormData((f: any) => ({
                        ...f,
                        kapasiteArtisImkani: e.target.checked,
                      }))
                    }
                    className="w-5 h-5 rounded border-2 border-gray-300"
                  />
                  <span className="text-primary-gray font-medium">
                    Kapasite Artış İmkanı
                  </span>
                </label>
              </div>
              <div>
                <span className="block text-primary-gray font-medium mb-2">
                  Katkı Payı
                </span>
                <div className="flex gap-4 bg-white rounded-lg p-8">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="katkiPayi"
                      value="Var"
                      checked={formData.katkiPayi === "Var"}
                      onChange={(e) =>
                        setFormData((f: any) => ({
                          ...f,
                          katkiPayi: e.target.value,
                        }))
                      }
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-primary-blue checked:border-primary-blue"
                    />
                    <span className="text-primary-gray font-medium ml-2">Var</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="katkiPayi"
                      value="Yok"
                      checked={formData.katkiPayi === "Yok"}
                      onChange={(e) =>
                        setFormData((f: any) => ({
                          ...f,
                          katkiPayi: e.target.value,
                        }))
                      }
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded checked:bg-primary-blue checked:border-primary-blue"
                    />
                    <span className="text-primary-gray font-medium ml-2">Yok</span>
                  </label>
                </div>
              </div>
              <div
                className={`${
                  formData.katkiPayi === "Var" ? "" : "opacity-50"
                }`}
              >
                <span className="block text-primary-gray font-medium mb-2">
                  Katkı Payı (varsa)
                </span>
                <input
                  className="w-40 p-3 rounded-lg border border-gray-300"
                  placeholder="Birim Seçin"
                  value={formData.katkiPayiValue}
                  onChange={(e) =>
                    setFormData((f: any) => ({
                      ...f,
                      katkiPayiValue: e.target.value,
                    }))
                  }
                  disabled={formData.katkiPayi !== "Var"}
                />
              </div>
            </div>
          </div>

          {/* 4th Section: Proje Lokasyonu, File Upload */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <span className="block text-primary-gray font-medium mb-4">
              Proje Lokasyonu
            </span>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="flex gap-4">
                <select
                  className="p-3 rounded-lg border border-gray-300 w-40"
                  value={formData.ilId}
                  onChange={(e) =>
                    setFormData((f: any) => ({
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
                  value={formData.ilceId}
                  onChange={(e) =>
                    setFormData((f: any) => ({
                      ...f,
                      ilceId: e.target.value,
                    }))
                  }
                >
                  <option value={""}>İlçe Seçin</option>
                  {/* ilce data */}
                  {ilceData
                    .filter((ilce) => ilce.il_id === formData.ilId)
                    .map((ilce) => (
                      <option key={ilce.id} value={ilce.id}>
                        {ilce.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-primary-gray font-medium mb-2">
                  Proje Lokasyon KMZ Yükleyin.
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-primary-blue rounded-xl p-6 cursor-pointer bg-white text-primary-blue hover:bg-blue-50">
                  <span className="mb-2">+ Add some files</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFormData((f: any) => ({
                        ...f,
                        kmzFile: e.target.files?.[0] || null,
                      }))
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* 5th Section: Proje Hakkında Kısa Açıklama, Teaser Yükleyin */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-primary-gray font-medium mb-2">
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
                <label className="block text-primary-gray font-medium mb-2">
                  Teaser Yükleyin
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-primary-blue rounded-xl p-6 cursor-pointer bg-white text-primary-blue hover:bg-blue-50">
                  <span className="mb-2">+ Add some files</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFormData((f: any) => ({
                        ...f,
                        teaserFile: e.target.files?.[0] || null,
                      }))
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Add a submit button at the end of the Ana Kaynak tab */}
          <div className="flex justify-end mt-8 mb-8">
            <button
              onClick={handleSubmit}
              className="bg-primary-blue text-white rounded-xl px-10 py-3 text-lg font-medium hover:bg-blue-600 hover:cursor-pointer"
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
  const [formData, setFormData] = useState<ProjectFormData>({
    // Basic Info fields
    projectName: "",
    facilityType: "",
    stage: "",
    description: "",

    // Ana Kaynak fields
    sourceType: "Biyokütle/Biyogaz",
    projectStatus: "Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)",
    installedPower: "",
    operationalPower: "",
    powerUnit: "MWe",
    katkiPayi: "Var",
    katkiPayiValue: "",
    ilId: "",
    ilceId: "",
    yekdemSonTarihi: new Date().getFullYear().toString(),
    kapasiteArtisImkani: false,

    // File fields
    kmzFile: null,
    teaserFile: null,
  });

  // Add new state for acceptance information
  const [acceptanceInfo, setAcceptanceInfo] = useState<AcceptanceInfo[]>([]);

  // Add new state for current input values
  const [currentAcceptance, setCurrentAcceptance] = useState<AcceptanceInfo>({
    date: "",
    mwe: "",
    mwm: "",
  });

  // Function to add new acceptance info
  const handleAddAcceptance = () => {
    if (
      currentAcceptance.date &&
      currentAcceptance.mwe &&
      currentAcceptance.mwm
    ) {
      setAcceptanceInfo([...acceptanceInfo, currentAcceptance]);
      setCurrentAcceptance({ date: "", mwe: "", mwm: "" });
    }
  };

  // Function to remove acceptance info
  const handleRemoveAcceptance = (index: number) => {
    setAcceptanceInfo(acceptanceInfo.filter((_, i) => i !== index));
  };


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
            acceptanceInfo={acceptanceInfo}
            setAcceptanceInfo={setAcceptanceInfo}
            currentAcceptance={currentAcceptance}
            setCurrentAcceptance={setCurrentAcceptance}
            handleAddAcceptance={handleAddAcceptance}
            handleRemoveAcceptance={handleRemoveAcceptance}
            onSubmit={() => setStep(3)}
          />
        )}
        {/* Add more steps here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectFormPage;
