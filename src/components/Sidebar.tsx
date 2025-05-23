import { MessageCircle, Home, Star, FileText, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed left-8 top-20 w-16 flex flex-col items-center rounded-xl bg-gray-100">
      <nav className="flex flex-col items-center gap-6 my-4">
        <div
          className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center text-white cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("/")}
        >
          <Home size={20} />
        </div>
        <div
          className="w-10 h-10 flex items-center rounded-lg justify-center text-primary-blue cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("#")}
        >
          <Star size={20} />
        </div>
        <div
          className="w-10 h-10 flex items-center rounded-lg justify-center text-primary-blue cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("#")}
        >
          <MessageCircle size={20} />
        </div>
        <div
          className="w-10 h-10 flex items-center rounded-lg justify-center text-primary-blue cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("#")}
        >
          <FileText size={20} />
        </div>
        <div
          className="w-10 h-10 flex items-center rounded-lg justify-center text-primary-blue cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("#")}
        >
          <MessageCircle size={20} />
        </div>
        <div
          className="w-10 h-10 flex items-center rounded-lg justify-center text-primary-blue cursor-pointer hover:border-2 hover:border-primary-blue"
          onClick={() => navigate("#")}
        >
          <Phone size={20} />
        </div>
      </nav>
    </div>
  );
};
