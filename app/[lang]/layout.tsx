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
      ? "EnergySaver Pro | Plataforma Avanzada de Ahorro de Energía"
      : "EnergySaver Pro | Advanced Energy Savings Platform",
    description: lang === "es"
      ? "Calcule sus ahorros de energía, estime el retorno de inversión solar y obtenga consejos personalizados para reducir su huella de carbono."
      : "Calculate your energy savings, estimate solar ROI, and get personalized tips to reduce your carbon footprint.",
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

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Header lang={lang} dict={dict.header} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict.common} />
      </body>
    </html>
  );
}
