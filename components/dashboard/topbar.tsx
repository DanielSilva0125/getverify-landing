"use client";

import { Search, Sun, Bell, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

interface TopbarProps {
  onMenuClick: () => void;
}

const topbarBtnSurface =
  "flex items-center justify-center border border-[#eef0f3] bg-[#fbfcff] text-dark-teal/80 hover:bg-accent/12 hover:border-accent/45 hover:text-accent transition-colors duration-200";

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="h-[72px] bg-white border-b border-[#eef0f3] flex items-center justify-between px-6 shrink-0 transition-all">
      <div className="flex items-center gap-4">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={onMenuClick}
          className={`lg:hidden w-10 h-10 rounded-[10px] ${topbarBtnSurface}`}
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#fafbfc] rounded-full px-3.5 py-[9px] border border-[#eef0f3] focus-within:border-accent focus-within:bg-white transition-colors w-[320px]">
          <Search className="w-[16px] h-[16px] text-dark-teal/40 mr-2.5 shrink-0" strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Buscar" 
            className="bg-transparent border-none outline-none text-[13px] font-medium w-full placeholder:text-[#b0b7c3] text-gray-800"
          />
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 h-[22px] border border-dark-teal/15 rounded-[5px] text-[10px] font-semibold text-dark-teal/50 bg-white ml-2 shrink-0">
            ⌘K
          </kbd>
        </div>
      </div>
      
      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button type="button" className={`w-[42px] h-[42px] rounded-full ${topbarBtnSurface}`} aria-label="Theme">
          <Sun className="w-[18px] h-[18px]" strokeWidth={2} />
        </button>
        <button type="button" className={`w-[42px] h-[42px] rounded-full ${topbarBtnSurface} relative`} aria-label="Notifications">
          <Bell className="w-[18px] h-[18px]" strokeWidth={2} />
          <span
            className="absolute top-[8px] right-[9px] size-[10px] rounded-full bg-white flex items-center justify-center"
            aria-hidden
          >
            <span className="size-[7px] rounded-full bg-[#d64555]" />
          </span>
        </button>
        <div className="[&_.cl-userButtonTrigger]:!h-[42px] [&_.cl-userButtonTrigger]:!w-[42px] [&_.cl-userButtonAvatarBox]:!h-[42px] [&_.cl-userButtonAvatarBox]:!w-[42px]">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "border border-[#eef0f3]",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
