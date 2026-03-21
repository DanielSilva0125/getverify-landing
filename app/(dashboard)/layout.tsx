"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard, FileText, Users, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/documents", label: "Documentos", icon: FileText },
  { href: "/dashboard/contractors", label: "Contratistas", icon: Users },
  { href: "/dashboard/settings", label: "Configuracion", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      {/* Sidebar */}
      <aside className="w-60 border-r border-dark-teal/[0.06] bg-white flex flex-col">
        <div className="px-5 py-5 border-b border-dark-teal/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-white font-semibold text-sm">
              V
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.01em] text-dark-teal">
              Verify
            </span>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] font-medium text-dark-teal/60 hover:text-dark-teal hover:bg-dark-teal/[0.04] transition-colors"
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-14 border-b border-dark-teal/[0.06] bg-white flex items-center justify-end px-6">
          <UserButton />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
