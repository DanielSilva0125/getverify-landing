"use server";

import { z } from "zod";

export type WaitlistState = {
  status: "idle" | "success" | "error" | "duplicate";
  message: string;
};

const emailSchema = z.string().email("Ingresa un correo electrónico válido");

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const rawEmail = formData.get("email");
  const parsed = emailSchema.safeParse(rawEmail);

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Correo inválido",
    };
  }

  // TODO: conectar con Supabase + Resend cuando el dev retome esto
  return {
    status: "success",
    message: "¡Estás en la lista! Te contactaremos pronto.",
  };
}
