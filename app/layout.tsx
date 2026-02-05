import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEYMAT Seguridad Privada | Años de experiencia al servicio de las empresas",
  description:
    "LEYMAT Seguridad Privada - Empresa chilena de seguridad con años de experiencia. Servicios de guardias, vigilancia y protección empresarial.",
  keywords: [
    "seguridad privada",
    "Chile",
    "guardias de seguridad",
    "vigilancia",
    "LEYMAT",
    "protección empresarial",
  ],
  authors: [{ name: "LEYMAT Seguridad Privada" }],
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
    apple: "/logo.png",
  },
  generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
