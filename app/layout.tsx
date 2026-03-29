import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Figtree, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { SITE_URL } from "@/lib/site-config";
import Providers from "./providers";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Verify — Cumplimiento documental centralizado para contratistas",
    template: "%s | Verify",
  },
  description:
    "Centraliza el cumplimiento documental de tus contratistas. Gestiona documentos, recibe alertas de vencimiento y visualiza el estado de cada proveedor en tiempo real.",
  keywords: [
    "cumplimiento documental",
    "gestión de contratistas",
    "control documental Chile",
    "alertas vencimiento documentos",
    "software gestión proveedores",
    "fiscalización documental",
    "subcontratación Chile",
    "auditoría documental",
    "plataforma cumplimiento",
    "gestión documental contratistas",
  ],
  authors: [{ name: "Verify", url: SITE_URL }],
  creator: "Verify",
  publisher: "Verify",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "Verify",
    title: "Verify — Cumplimiento documental centralizado para contratistas",
    description:
      "Controla documentos, recibe alertas de vencimiento y visualiza el estado de cada proveedor en tiempo real. Menos supuestos, más certezas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verify — plataforma de cumplimiento documental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify — Cumplimiento documental centralizado",
    description:
      "Controla el cumplimiento de contratistas desde un solo lugar. Alertas automáticas, dashboards en tiempo real y reportes accionables.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={figtree.className}>
      <body className={`${geistMono.variable} antialiased`}>
        <ClerkProvider
          localization={esES}
          allowedRedirectOrigins={[
            "http://app.getverify.local:3000",
            "https://app.getverify.cl",
          ]}
          afterSignOutUrl="https://www.getverify.cl"
        >
          <Providers>{children}</Providers>
        </ClerkProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
