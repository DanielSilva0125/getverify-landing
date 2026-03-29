"use client";

import { FileText, CircleCheck, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ShiningText } from "@/components/ui/shining-text";

const cards = [
  {
    icon: FileText,
    title: "Informacion dispersa",
    description:
      "Correos, planillas y mensajes no dan visibilidad real.",
  },
  {
    icon: CircleCheck,
    title: "Brechas invisibles",
    description:
      "No siempre se sabe que esta vigente, vencido o incompleto.",
  },
  {
    icon: Clock,
    title: "Riesgo tardio",
    description:
      "Los problemas aparecen cuando ya impactan la operacion.",
  },
];

export default function PainPoints() {
  return (
    <section id="learn-more" aria-label="Problemas que resuelve Verify" className="px-6 pt-10 pb-12 sm:pt-4 sm:pb-14">
      <ScrollReveal className="mx-auto max-w-4xl text-center mb-14">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.025em] leading-[1.15] mt-10 mb-4 font-normal">
          <span className="text-[#f1f1f1]">El cumplimiento no se supone.</span>
          <br />
          <ShiningText text="Se verifica." className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold tracking-[-0.025em] [background-image:linear-gradient(110deg,#fff,35%,#a8dce5,50%,#fff,75%,#fff)]" />
        </h2>
      </ScrollReveal>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map(({ icon: Icon, title, description }, i) => (
          <ScrollReveal key={title} delay={i * 0.1} className="h-full">
            <div className="bg-[#f1f1f1] border border-dark-teal/[0.06] rounded-2xl p-7 h-full">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl mb-5 border border-dark-teal/10">
                <Icon className="w-5 h-5 text-[#67b4c1]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[17px] font-semibold text-dark-teal mb-2">
                {title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-dark-teal/50">
                {description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
