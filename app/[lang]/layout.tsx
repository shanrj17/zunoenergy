import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// ThemeProvider removed
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  return {
    title: lang === "es"
      ? "Calculadora de Factura Eléctrica de EE. UU. y Auditoría Energética"
      : "US Electric Bill Calculator & Home Energy Audit | ZunoEnergy",
    description: lang === "es"
      ? "Auditoría energética gratuita para el hogar en EE. UU. Calcule su factura eléctrica, compare con promedios nacionales y encuentre ahorros en su estado."
      : "Free US home energy audit tool. Calculate your electric bill, compare against national averages, and find savings in your state. No signup required.",
    metadataBase: new URL("https://www.zunoenergy.com"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZunoEnergy Electric Bill Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free tool to calculate electric bill savings and perform a home energy audit using US Department of Energy data."
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header lang={lang} dict={dict.header} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict.common} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}

import { GoogleAnalytics } from '@next/third-parties/google'
