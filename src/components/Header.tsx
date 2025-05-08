import { User } from "lucide-react";
import type React from "react";

export const Header: React.FC = () => (<header className='w-full py-4 px-6 flex justify-end items-center bg-white'>
    <button className='bg-blue-500 text-white rounded-full px-6 py-2 mr-4'>
        Sign In
    </button>
    <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
        <User size={18} />
    </div>
</header>)