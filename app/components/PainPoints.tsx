import { FileText, CircleCheck, Clock } from "lucide-react";

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
    <section className="px-6 pt-10 pb-20 sm:pt-4 sm:pb-28">
      <div className="mx-auto max-w-4xl text-center mb-14">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.025em] text-dark-teal leading-[1.15] mb-4 font-normal">
          El cumplimiento no se supone.{" "}
          <br className="hidden sm:block" />
          <span className="font-bold">Se verifica.</span>
        </h2>
        <p className="text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 max-w-[540px] mx-auto">
          Sin un sistema claro, la documentacion se dispersa y el riesgo se
          detecta tarde.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-light-gray border border-dark-teal/[0.06] rounded-2xl p-7"
          >
            <div className="w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow-sm border border-dark-teal/[0.06] mb-5">
              <Icon className="w-5 h-5 text-dark-teal" strokeWidth={1.8} />
            </div>
            <h3 className="text-[17px] font-semibold text-dark-teal mb-2">
              {title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-dark-teal/50">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
