"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const marketingHome = process.env.NEXT_PUBLIC_MARKETING_URL || "/";

export default function Page() {
  const [phase, setPhase] = useState<1 | 2>(1);

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
      <motion.header
        className="absolute top-0 left-0 w-full p-6 lg:p-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      >
        <Link
          href={marketingHome}
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-dark-teal/60 hover:text-dark-teal transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
          <span>Volver al inicio</span>
        </Link>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center px-4">

        {/* Wrapper — holds brand + clerk as one unit, shifts up on phase 2 */}
        <motion.div
          className="relative flex flex-col items-center text-center"
          initial={{ y: 30 }}
          animate={{ y: phase === 2 ? -190 : 30 }}
          transition={{ duration: 1.4, ease }}
        >
          {/* Brand & Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            onAnimationComplete={() => setTimeout(() => setPhase(2), 200)}
          >
            <Link href={marketingHome} className="flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20 group-hover:scale-105 group-hover:shadow-accent/30 transition-all duration-300">
                <span className="font-bold text-[20px]">V</span>
              </div>
            </Link>
          </motion.div>

          <motion.h1
            className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] text-dark-teal mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            Bienvenido a Verify
          </motion.h1>

          <motion.p
            className="text-[15px] sm:text-[16px] text-dark-teal/60 font-medium max-w-[340px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            Ingresa a tu cuenta para gestionar el cumplimiento de tus contratistas.
          </motion.p>

          {/* Clerk — absolutely positioned so async mount doesn't cause layout shift */}
          <motion.div
            className="w-full flex justify-center absolute left-0 right-0 mt-4"
            style={{ top: "100%", paddingTop: 16 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{
              opacity: phase === 2 ? 1 : 0,
              y: phase === 2 ? 0 : 24,
            }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <SignIn
              appearance={{
                elements: {
                  cardBox: "shadow-xl! shadow-accent/10!",
                  card: "shadow-none! border border-accent/10 ring-1 ring-accent/5",
                }
              }}
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
