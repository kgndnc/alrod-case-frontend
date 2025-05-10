import { User } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

export const Header: React.FC = () => (
  <header className="w-full py-4 px-6 flex justify-end items-center bg-white">
    <Link to="/projects/new" className="text-blue-500  px-6 py-2 mr-4">
      Projeler
    </Link>
    <button className="bg-blue-500 text-white rounded-full px-6 py-2 mr-4">
      Sign In
    </button>
    <div className="w-12 h-12 border-blue-500 text-blue-500 border-2 rounded-full flex items-center justify-center">
      <User size={24} />
    </div>
  </header>
);
