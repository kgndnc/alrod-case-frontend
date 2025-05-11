// Project details interface
export interface ProjectDetails {
  projectName: string;
  facilityType: "Üretim Tesis" | "Müstakil Batarya Tesis";
  stage: "Lisanslı" | "Lisanssız";
  description: string;
  sourceType:
    | "Biyokütle/Biyogaz"
    | "Güneş"
    | "Rüzgar"
    | "Hidroelektrik"
    | "Jeotermal";
  projectStatus:
    | "Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)"
    | "İnşaat Halinde"
    | "İşletmede";
  installedPower: string;
  operationalPower: string;
  powerUnit: "MWe" | "MWm";
  katkiPayi: "Var" | "Yok";
  katkiPayiValue: string;
  ilId: string;
  ilceId: string;
  yekdemSonTarihi: string;
  kapasiteArtisImkani: boolean;
  kmzFile: File | null;
  teaserFile: File | null;
  acceptanceInfo: AcceptanceInfo[];
}

// Acceptance info interface
export interface AcceptanceInfo {
  date: string;
  mwe: string;
  mwm: string;
}

// Strapi response attributes interface
export interface ProjectAttributes {
  projectName: string;
  description: string;
  details: ProjectDetails;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Strapi response data interface
export interface ProjectData extends ProjectAttributes {
  id: number;
  documentId: string;
}

// Strapi response interface
export interface StrapiResponse {
  data: ProjectData;
  meta: any;
}

// Form data interface (for the form state)
export interface ProjectFormData {
  // Basic Info fields
  projectName: string;
  facilityType: "Üretim Tesis" | "Müstakil Batarya Tesis" | "";
  stage: "Lisanslı" | "Lisanssız" | "";
  description: string;

  // Ana Kaynak fields
  sourceType:
    | "Biyokütle/Biyogaz"
    | "Güneş"
    | "Rüzgar"
    | "Hidroelektrik"
    | "Jeotermal";
  projectStatus:
    | "Proje (sadece Lisans ya da Çağrı Mektubu alınmıştır)"
    | "İnşaat Halinde"
    | "İşletmede";
  installedPower: string;
  operationalPower: string;
  powerUnit: "MWe" | "MWm";
  katkiPayi: "Var" | "Yok";
  katkiPayiValue: string;
  ilId: string;
  ilceId: string;
  yekdemSonTarihi: string;
  kapasiteArtisImkani: boolean;

  // File fields
  kmzFile: File | null;
  teaserFile: null;
}
