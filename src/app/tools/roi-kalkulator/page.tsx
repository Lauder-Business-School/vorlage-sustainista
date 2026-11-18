import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import RoiKalkulator from "@/components/RoiKalkulator";
import StickyCtaBar from "@/components/StickyCtaBar";

export const metadata: Metadata = {
  title: "ROI-Kalkulator: Was kostet Inaction?",
  description: "Berechnen Sie die Opportunitätskosten fehlender Nachhaltigkeit: Lieferketten-Ausschluss und verpasste Förderungen für österreichische KMU.",
  alternates: { canonical: "https://www.example.invalid/tools/roi-kalkulator" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/tools/roi-kalkulator",
    title: "ROI-Kalkulator: Was kostet Inaction? | Sustainista",
    description: "Opportunitätskosten fehlender Nachhaltigkeit für österreichische KMU berechnen.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "ROI-Kalkulator Nachhaltigkeit | Sustainista" }],
  },
};

export default function RoiKalkulatorPage() {
  return (
    <>
      <Navigation />
      <main>
        <RoiKalkulator />
        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
