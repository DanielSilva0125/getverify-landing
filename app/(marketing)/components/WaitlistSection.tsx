"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import ScrollReveal from "./ScrollReveal";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initialState: WaitlistState = { status: "idle", message: "" };

export default function WaitlistSection() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState);

  const showForm = state.status === "idle" || state.status === "error";
  const showSuccess = state.status === "success" || state.status === "duplicate";

  return (
    <section
      id="waitlist"
      className="bg-[#F7F8FE] px-6 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-20 sm:pb-24 relative overflow-hidden"
    >
      {/* Soft accent radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(101,129,234,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/[0.08] px-4 py-1.5 text-[13px] font-semibold text-accent mb-6">
            Acceso anticipado
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.025em] text-dark-teal leading-[1.15] mb-4">
            <span className="font-normal">Sé de los primeros </span>
            <span className="font-semibold">en probarlo.</span>
          </h2>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={0.15}>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 max-w-[480px] mx-auto mb-10">
            Únete a la lista de espera y te avisaremos cuando Verify esté listo
            para transformar tu gestión documental.
          </p>
        </ScrollReveal>

        {/* Form / Success State */}
        <ScrollReveal delay={0.2}>
          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Form
                  action={formAction}
                  validationErrors={
                    state.status === "error"
                      ? { email: state.message }
                      : undefined
                  }
                  className="flex flex-col sm:flex-row items-start gap-3 max-w-md mx-auto"
                >
                  <Input
                    isRequired
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    isDisabled={isPending}
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    errorMessage={({ validationDetails }) => {
                      if (validationDetails.typeMismatch) {
                        return "Ingresa un correo electrónico válido";
                      }
                      if (validationDetails.valueMissing) {
                        return "El correo es requerido";
                      }
                      return;
                    }}
                    classNames={{
                      inputWrapper:
                        "border-dark-teal/[0.08] hover:border-dark-teal/20 focus-within:!border-accent shadow-none bg-white",
                      input: "text-[14px] text-dark-teal placeholder:text-dark-teal/30",
                    }}
                  />
                  <Button
                    type="submit"
                    isLoading={isPending}
                    className="btn-glow bg-accent hover:bg-[#5570e0] text-white font-medium px-4 h-11 text-[14px] tracking-[-0.01em] rounded-2xl shrink-0 w-full sm:w-auto"
                  >
                    {!isPending && (
                      <>
                        Unirme
                        <ArrowRight className="ml-1 w-4 h-4 text-white/80" strokeWidth={2} />
                      </>
                    )}
                  </Button>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-accent/[0.08] flex items-center justify-center">
                  <Check className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>
                <p className="text-[17px] font-semibold text-dark-teal">
                  {state.status === "duplicate"
                    ? "¡Ya estás en la lista!"
                    : "¡Estás dentro!"}
                </p>
                <p className="text-[15px] text-dark-teal/50">
                  {state.message}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        {/* Privacy note */}
        <ScrollReveal delay={0.25}>
          <p className="text-[13px] text-dark-teal/30 mt-8">
            Sin spam. Solo una notificación cuando lancemos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
