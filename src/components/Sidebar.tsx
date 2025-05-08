import { MessageCircle, Home, Star, FileText, Phone } from "lucide-react";

export const Sidebar: React.FC = () => (
  <div className="fixed left-8 top-20 w-16 flex flex-col items-center rounded-xl bg-gray-100">
    <div className="flex flex-col items-center gap-6 mt-4">
      <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white">
        <Home size={20} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center text-blue-400">
        <Star size={20} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center text-blue-400">
        <MessageCircle size={20} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center text-blue-400">
        <FileText size={20} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center text-blue-400">
        <MessageCircle size={20} />
      </div>
      <div className="w-10 h-10 flex items-center justify-center text-blue-400">
        <Phone size={20} />
      </div>
    </div>
  </div>
);
