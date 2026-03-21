"use client";
import { Button } from "@heroui/button";
import { SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="w-full border-b border-dark-teal/[0.06]">
      <nav className="w-full px-6 lg:px-10 py-4 flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-white">
            V
          </div>
          <span className="text-[17px] font-semibold tracking-[-0.01em] text-dark-teal">
            Verify
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">
          <SignInButton
            mode="redirect"
            fallbackRedirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "/dashboard"}
            forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "/dashboard"}
          >
            <Button
              as="a"
              href="#"
              variant="light"
              className="inline-flex text-[13px] font-medium text-dark-teal/50 hover:text-dark-teal rounded-2xl"
            >
              Iniciar sesión
            </Button>
          </SignInButton>
        </div>
      </nav>
    </header>
  );
}
