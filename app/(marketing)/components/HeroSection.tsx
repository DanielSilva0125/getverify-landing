"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import MacWindowMockup from "./MacWindowMockup";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
});

const mockupVariant = {
  initial: { opacity: 0, y: 32, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.7,
    delay: 0.45,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
};

export default function HeroSection() {
  return (
    <main className="relative flex flex-col items-center px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-16">
      {/* Badge */}
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.06] px-3.5 py-1.5 text-[13px] text-accent mb-8"
      >
        <span className="font-semibold">Nuevo</span>
        <span className="text-accent/30">|</span>
        <span className="font-medium text-accent/70 inline-flex items-center gap-1">
          Cumplimiento documental simplificado
          <ChevronRight className="w-3.5 h-3.5 text-accent/70" strokeWidth={2.5} />
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.1)}
        className="max-w-[790px] text-center text-[36px] leading-[1.15] sm:text-[48px] sm:leading-[1.12] lg:text-[56px] lg:leading-[1.04] font-semibold tracking-[-0.025em] text-dark-teal mb-5"
      >
        Controla el cumplimiento <br />de contratistas{" "}<br />
        <em className="text-accent italic">desde un solo lugar.</em>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        className="max-w-[540px] text-center text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 font-normal mb-10"
      >
        Centraliza documentos, recibe alertas de vencimiento y visualiza el
        estado de cada proveedor en tiempo real.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.3)}
        className="flex flex-col sm:flex-row items-center gap-3 mb-20 sm:mb-16"
      >
        <Button
          as="a"
          href="#waitlist"
          className="btn-glow bg-accent hover:bg-[#5570e0] text-white font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl"
        >
          Unirse a la lista de espera
          <ArrowRight className="ml-1 w-4 h-4 text-white/80" strokeWidth={2} />
        </Button>
        <Button
          as="a"
          href="#learn-more"
          variant="bordered"
          className="border-dark-teal/12 hover:border-dark-teal/25 bg-white hover:bg-dark-teal/[0.02] text-dark-teal/70 font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl"
        >
          Conocer mas
        </Button>
      </motion.div>

      {/* Mac Window Mockup */}
      <motion.div {...mockupVariant} className="w-full">
        <MacWindowMockup />
      </motion.div>
    </main>
  );
}
