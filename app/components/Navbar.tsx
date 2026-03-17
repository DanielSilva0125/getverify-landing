"use client";

import { Button } from "@heroui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-dark-teal/[0.06]">
      <nav className="w-full px-6 lg:px-10 py-4 flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 4.5L6.5 11.5L2.5 7.5"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[17px] font-semibold tracking-[-0.01em] text-dark-teal">
            Verify
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">
          <Button
            as="a"
            href="#"
            variant="light"
            className="hidden sm:inline-flex text-[13px] font-medium text-dark-teal/50 hover:text-dark-teal rounded-2xl"
          >
            Iniciar sesion
          </Button>
          {/* <Button
            as="a"
            href="#waitlist"
            size="sm"
            radius="lg"
            className="btn-glow text-[13px] font-medium text-white bg-accent hover:bg-[#5570e0] px-4"
          >
            Unirse a la lista
          </Button> */}
        </div>
      </nav>
    </header>
  );
}
