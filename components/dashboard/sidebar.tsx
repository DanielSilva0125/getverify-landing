"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, FileText, Bell, 
  BarChart3, Settings, HelpCircle, X, Copy, PanelLeft, Box
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const mainNav = [
  { href: "/dashboard", label: "Panel", icon: LayoutDashboard },
  { href: "/contractors", label: "Contratistas", icon: Users },
  { href: "/documents", label: "Documentos", icon: FileText },
  { href: "/alerts", label: "Alertas", icon: Bell },
  { href: "/reports", label: "Reportes", icon: BarChart3 },
];

const bottomNav = [
  { href: "/settings", label: "Preferencias", icon: Settings },
  { href: "#", label: "Soporte", icon: HelpCircle, disabled: true },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-white z-50 w-[250px] border-r border-[#eef0f3] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Logo */}
        <div className="flex items-center justify-between px-6 h-[72px] shrink-0">
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/logo-icon.png"
              alt="Verify"
              width={180}
              height={180}
              className="size-8 shrink-0 object-cover"
            />
            <span className="text-[17px] font-bold tracking-[-0.01em] text-[#1a1a2e]">Verify</span>
          </div>
          <div className="flex items-center">
            <button className="hidden lg:flex w-7 h-7 items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
              <PanelLeft className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button onClick={() => setIsOpen(false)} className="lg:hidden p-1 text-gray-400 hover:text-gray-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 pt-5 pb-2">
          <div className="space-y-[4px]">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative flex items-center gap-3 px-3.5 py-[10px] rounded-xl text-[14px] transition-all duration-150 ${
                    isActive
                      ? "bg-[#EEF4FF] text-[#3B6BF5] font-semibold"
                      : "text-[#64748b] hover:text-[#1e293b] hover:bg-[#f8f8fa] font-medium"
                  }`}
                >
                  {isActive && (
                    <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-[3px] h-[65%] bg-[#3B6BF5] rounded-full" />
                  )}
                  <item.icon
                    className={`w-5 h-5 shrink-0 ${isActive ? "text-accent" : "text-[#94a3b8]"}`}
                    strokeWidth={1.8}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="px-4 pb-6 pt-2 shrink-0">
          <div className="space-y-0.5 mb-6">
            {bottomNav.map((item) => {
              if ("disabled" in item && item.disabled) {
                return (
                  <span
                    key={item.label}
                    aria-disabled="true"
                    className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-[13px] text-gray-400/90 cursor-not-allowed select-none"
                  >
                    <item.icon
                      className="w-[18px] h-[18px] shrink-0 text-gray-300"
                      strokeWidth={2}
                    />
                    {item.label}
                  </span>
                );
              }
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-[13px] transition-colors group ${isActive
                      ? "bg-blue-50/70 text-blue-600"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/80"
                    }`}
                >
                  <item.icon
                    className={`w-[18px] h-[18px] ${isActive ? "text-accent" : "text-gray-400 group-hover:text-gray-600"}`}
                    strokeWidth={2}
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Premium Badge */}
          <div className="bg-gradient-to-br from-[#1b2f4f] to-[#0a1529] rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="w-7 h-7 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                <Box className="w-4 h-4 text-blue-400" />
              </div>
              <h4 className="font-semibold text-[15px] mb-1.5">Upgrade to Premium!</h4>
              <p className="text-[12px] text-blue-100/70 mb-4 leading-relaxed pr-2">
                Upgrade your account and unlock all of the benefits.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium py-2 rounded-xl transition-colors shadow-sm shadow-blue-900">
                Upgrade premium
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
