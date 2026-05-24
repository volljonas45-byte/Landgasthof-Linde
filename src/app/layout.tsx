import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Landgasthof Linde Niederhofen",
  description:
    "Herzlich willkommen im Landgasthof Linde in Niederhofen. Schwäbische Küche, gemütliche Atmosphäre und herzliche Gastfreundschaft. Reservierungen unter 0176 62960837.",
  keywords:
    "Landgasthof Linde, Niederhofen, Schwaigern, Restaurant, schwäbische Küche, Mittagstisch, Reservierung",
  openGraph: {
    title: "Landgasthof Linde Niederhofen",
    description: "Schwäbische Küche mit Herzblut – frische Zutaten, hausgemachte Gerichte.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-only {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          .hero-eyebrow { animation: fade-in-only 0.8s ease 0.2s both; }
          .hero-title   { animation: fade-up 1s cubic-bezier(0.25,0.1,0.25,1) 0.4s both; }
          .hero-divider { animation: fade-in-only 0.7s ease 1.9s both; }
          .hero-sub     { animation: fade-up 0.9s ease 2.1s both; }
          .hero-cta     { animation: fade-up 0.9s ease 2.3s both; }
          .hero-info    { animation: fade-up 0.9s ease 2.5s both; }
          [data-fade] {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s cubic-bezier(0.25,0.1,0.25,1), transform 0.8s cubic-bezier(0.25,0.1,0.25,1);
          }
          [data-fade].is-visible { opacity: 1; transform: translateY(0); }
          [data-fade="scale"] {
            opacity: 0;
            transform: scale(1.04) translateY(12px);
            transition: opacity 1.1s cubic-bezier(0.25,0.1,0.25,1), transform 1.1s cubic-bezier(0.25,0.1,0.25,1);
          }
          [data-fade="scale"].is-visible { opacity: 1; transform: scale(1) translateY(0); }
          [data-delay="1"] { transition-delay: 0.1s; }
          [data-delay="2"] { transition-delay: 0.2s; }
          [data-delay="3"] { transition-delay: 0.3s; }
          [data-delay="4"] { transition-delay: 0.4s; }
          [data-delay="5"] { transition-delay: 0.5s; }
          [data-delay="6"] { transition-delay: 0.6s; }
          [data-delay="7"] { transition-delay: 0.7s; }
          [data-delay="8"] { transition-delay: 0.8s; }
        `}} />
      </head>
      <body className="flex flex-col min-h-screen">
        <ScrollAnimator />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
