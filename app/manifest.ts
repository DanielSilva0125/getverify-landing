import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verify — Cumplimiento documental centralizado",
    short_name: "Verify",
    description:
      "Centraliza el cumplimiento documental de tus contratistas. Gestiona documentos, recibe alertas de vencimiento y visualiza el estado de cada proveedor en tiempo real.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };
}
