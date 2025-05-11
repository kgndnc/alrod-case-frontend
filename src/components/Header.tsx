import { User } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

export const Header: React.FC = () => (
  <header className="w-full py-4 px-6 flex justify-end items-center bg-white">
    <Link to="/projects/example" className="text-primary-blue px-6 py-2 mr-4">
      Örnek Proje
    </Link>
    <Link to="/projects/new" className="text-primary-blue px-6 py-2 mr-6">
      Proje Ekle
    </Link>
    <button className="bg-primary-blue text-white rounded-full px-6 py-2 mr-4">
      Sign In
    </button>
    <div className="w-12 h-12 border-primary-blue text-primary-blue border-2 rounded-full flex items-center justify-center">
      <User size={24} />
    </div>
  </header>
);
