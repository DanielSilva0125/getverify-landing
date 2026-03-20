import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden flex flex-col items-center justify-center selection:bg-accent/30">

      {/* Abstract Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] opacity-80 pointer-events-none flex justify-center items-center z-0">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] bg-dark-teal/10 rounded-full mix-blend-multiply filter blur-[100px]" />
        <div className="absolute top-[30%] left-[40%] w-[350px] h-[350px] bg-[#89a3fc]/20 rounded-full mix-blend-multiply filter blur-[100px]" />
      </div>

      {/* SVG Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-overlay z-0"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
      />

      {/* Header Back Button */}
      <header className="absolute top-0 left-0 w-full p-6 lg:p-10 z-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-dark-teal/60 hover:text-dark-teal transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
          <span>Volver al inicio</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full flex flex-col items-center px-4 pt-12 pb-24">
        {/* Brand & Greeting */}
        <div className="flex flex-col items-center mb-8 text-center">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20 group-hover:scale-105 group-hover:shadow-accent/30 transition-all duration-300">
              <span className="font-bold text-[20px]">V</span>
            </div>
          </Link>

          <h1 className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] text-dark-teal mb-2">
            Bienvenido a Verify
          </h1>
          <p className="text-[15px] sm:text-[16px] text-dark-teal/60 font-medium max-w-[340px]">
            Ingresa a tu cuenta para gestionar el cumplimiento de tus contratistas.
          </p>
        </div>

        {/* Clerk Component Wrapper */}
        <div className="w-full flex justify-center">
          <SignIn
            appearance={{
              elements: {
                cardBox: "shadow-xl! shadow-accent/10!",
                card: "shadow-none! border border-accent/10 ring-1 ring-accent/5",
              }
            }}
          />
        </div>
      </main>

    </div>
  );
}
