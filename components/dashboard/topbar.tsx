"use client";

import { Search, Sun, Bell, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0 lg:ml-0 transition-all">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden text-gray-500 hover:text-gray-900 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Input - Hidden on mobile */}
        <div className="hidden md:flex items-center bg-gray-50/80 rounded-full px-4 py-2.5 border border-gray-100 focus-within:ring-2 focus-within:ring-blue-100 transition-all w-[320px]">
          <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-[13px] font-medium w-full placeholder:text-gray-400 text-gray-700"
          />
          <kbd className="hidden lg:inline-flex items-center justify-center gap-1 px-1.5 h-5 border border-gray-200 shadow-sm rounded text-[10px] font-medium text-gray-400 bg-white ml-2 shrink-0">
            ⌘<span className="text-[10px]">K</span>
          </kbd>
        </div>
      </div>
      
      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button className="w-[38px] h-[38px] flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors">
          <Sun className="w-5 h-5" />
        </button>
        <button className="w-[38px] h-[38px] flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 transition-colors relative">
          <Bell className="w-5 h-5" />
          <div className="absolute top-[8px] right-[8px] w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <div className="pl-1">
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9" } }} />
        </div>
      </div>
    </header>
  );
}
