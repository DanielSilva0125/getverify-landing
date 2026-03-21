"use client";

import { Search, Sun, Bell, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="h-[72px] bg-white border-b border-[#eef0f3] flex items-center justify-between px-6 shrink-0 transition-all">
      <div className="flex items-center gap-4">
        {/* Mobile hamburger */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[10px] border border-[#e2e5ea] text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#f8f9fb] rounded-[10px] px-3.5 py-[9px] border border-[#eef0f3] focus-within:border-blue-200 focus-within:bg-white transition-all w-[320px]">
          <Search className="w-[16px] h-[16px] text-[#b0b7c3] mr-2.5 shrink-0" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-[13px] font-medium w-full placeholder:text-[#b0b7c3] text-gray-800"
          />
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 h-[22px] border border-[#e2e5ea] rounded-[5px] text-[10px] font-medium text-[#b0b7c3] bg-white ml-2 shrink-0 shadow-[0_1px_0_#e2e5ea]">
            ⌘K
          </kbd>
        </div>
      </div>
      
      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button className="w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#eef0f3] hover:bg-[#f8f9fb] text-[#94a3b8] hover:text-gray-700 transition-colors">
          <Sun className="w-[18px] h-[18px]" strokeWidth={1.8} />
        </button>
        <button className="w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#eef0f3] hover:bg-[#f8f9fb] text-[#94a3b8] hover:text-gray-700 transition-colors relative">
          <Bell className="w-[18px] h-[18px]" strokeWidth={1.8} />
          <div className="absolute top-[9px] right-[10px] w-[8px] h-[8px] bg-[#fb7185] rounded-full ring-[2.5px] ring-white" />
        </button>
        <div className="ml-1 pl-1">
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-[42px] h-[42px] border border-[#eef0f3]" } }} />
        </div>
      </div>
    </header>
  );
}
