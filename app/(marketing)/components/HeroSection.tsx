"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import MacWindowMockup from "./MacWindowMockup";
import { ShiningText } from "@/components/ui/shining-text";

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
    <main className="relative flex flex-col px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-16">
      {/* Top row: text left, CTAs right */}
      <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20 sm:mb-16">
        {/* Left: Heading */}
        <div className="flex flex-col items-start max-w-[620px]">
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[36px] leading-[0.98] sm:text-[48px] sm:leading-[0.95] lg:text-[56px] lg:leading-[0.88] font-normal tracking-[-0.025em] text-dark-teal mb-5"
          >
            Controla el cumplimiento<br />de <ShiningText text="contratistas" duration={10} className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-[-0.025em]" /> desde<br />
            <span className="text-[#15292f]">un solo lugar.</span>
          </motion.h1>
        </div>

        {/* Right: CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col items-start lg:items-end gap-3 lg:shrink-0"
        >
          <Button
            as="a"
            href="#waitlist"
            className="btn-glow bg-[#67b4c1] hover:bg-[#55a0ad] text-white font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl"
          >
            Unirse a la lista de espera
            <ArrowRight className="ml-1 w-4 h-4 text-white/80" strokeWidth={2} />
          </Button>
          <Button
            as="a"
            href="#learn-more"
            variant="bordered"
            className="btn-glow border-dark-teal/12 hover:border-[#15292f] bg-white hover:bg-[#15292f] text-dark-teal/70 hover:text-white font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl transition-all duration-300"
          >
            Conocer más
          </Button>
        </motion.div>
      </div>

      {/* Mac Window Mockup */}
      <motion.div {...mockupVariant} className="mx-auto max-w-6xl w-full">
        <MacWindowMockup />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.5)}
        className="text-center text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 font-normal mt-8"
      >
        Centraliza documentos, recibe alertas de vencimiento y visualiza el
        estado de cada proveedor en tiempo real.
      </motion.p>
    </main>
  );
}
