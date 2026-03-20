import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
//
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
  title: "Verify — Cumplimiento documental centralizado",
  description:
    "Centraliza el cumplimiento documental de tus contratistas. Gestiona documentos, recibe alertas de vencimiento y visualiza el estado de cada proveedor en tiempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={figtree.className}>
      <body className={`${geistMono.variable} antialiased`}>
        <ClerkProvider localization={esES}>
          <Providers>{children}</Providers>
        </ClerkProvider>

      </body>
    </html>
  );
}
