"use server";

import { z } from "zod";
import { createServiceClient } from "@/lib/supabase/server";
import { Resend } from "resend";

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

  const email = parsed.data.toLowerCase().trim();

  try {
    const supabase = createServiceClient();
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "duplicate",
          message: "¡Ya estás en la lista! Te avisaremos cuando lancemos.",
        };
      }
      console.error("Supabase insert error:", error);
      return {
        status: "error",
        message: "Algo salió mal. Intenta de nuevo.",
      };
    }

    sendConfirmationEmail(email).catch((err) =>
      console.error("Resend error:", err)
    );

    return {
      status: "success",
      message: "¡Estás en la lista! Te contactaremos pronto.",
    };
  } catch (err) {
    console.error("Waitlist action error:", err);
    return {
      status: "error",
      message: "Algo salió mal. Intenta de nuevo.",
    };
  }
}

async function sendConfirmationEmail(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Verify <no-reply@getverify.cl>",
    to: email,
    subject: "¡Estás en la lista de espera de Verify!",
    html: `
      <div style="font-family: 'Figtree', -apple-system, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #6581EA; border-radius: 8px; color: white; font-weight: 700; font-size: 18px;">V</div>
        </div>
        <h1 style="font-size: 24px; color: #15292F; text-align: center; margin-bottom: 16px;">
          ¡Bienvenido a la lista de espera!
        </h1>
        <p style="font-size: 16px; line-height: 1.6; color: #15292F99; text-align: center; margin-bottom: 32px;">
          Gracias por tu interés en Verify. Te notificaremos cuando estemos listos para que seas de los primeros en probarlo.
        </p>
        <div style="text-align: center; padding: 24px; background: #F1F1F1; border-radius: 16px;">
          <p style="font-size: 14px; color: #15292F80; margin: 0;">
            Mientras tanto, si tienes preguntas escríbenos a<br/>
            <a href="mailto:contacto@getverify.cl" style="color: #6581EA; text-decoration: none;">contacto@getverify.cl</a>
          </p>
        </div>
        <p style="font-size: 12px; color: #15292F40; text-align: center; margin-top: 32px;">
          &copy; ${new Date().getFullYear()} Verify. Todos los derechos reservados.
        </p>
      </div>
    `,
  });
}
