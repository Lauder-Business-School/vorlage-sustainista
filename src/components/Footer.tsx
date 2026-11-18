"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    tagline: "KI- und Automatisierungspartner für Nachhaltigkeitsdaten.\nWiederverwendbare Systeme für KMU.",
    claim: "✦ Sustainability as a Service",
    linkedin: "Sustainista auf LinkedIn",
    youtube: "Sustainista auf YouTube",
    sections: {
      products: "Produkte",
      tools: "Kostenlose Tools",
      branchen: "Branchen",
      company: "Unternehmen",
      legal: "Rechtliches",
      contact: "Kontakt",
    },
    products: [
      { label: "ESG-Analyse & Bericht", href: "/produkte/esg-analyse" },
      { label: "KI-Automatisierung", href: "/produkte/ki-automatisierung" },
      { label: "Digitaler Produktpass", href: "/produkte/digitaler-produktpass" },
      { label: "Circular Stock für Mode", href: "/produkte/circular-stock-management" },
      { label: "Product Carbon Footprint", href: "/produkte/product-carbon-footprint" },
      { label: "LCA-Berechnung", href: "/produkte/lca-berechnung" },
      { label: "Alle Produkte", href: "/produkte" },
    ],
    tools: [
      { label: "CO₂-Rechner", href: "/tools/co2-rechner" },
      { label: "ROI-Kalkulator", href: "/tools/roi-kalkulator" },
    ],
    branchen: [
      { label: "Metallverarbeitung", href: "/branche/metallverarbeitung" },
      { label: "Einzelhandel", href: "/branche/einzelhandel" },
      { label: "Produktion & Fertigung", href: "/branche/produktion" },
      { label: "Lebensmittel & Agrar", href: "/branche/lebensmittel" },
    ],
    company: [
      { label: "Über uns & Team", href: "/ueber-uns" },
      { label: "Projekte & Cases", href: "/projekte" },
      { label: "Hackathon", href: "/hackathon" },
      { label: "Magazin", href: "/magazin" },
      { label: "Trendradar 2026–2040", href: "/trendradar" },
      { label: "Presse", href: "/presse" },
      { label: "Glossar", href: "/glossar" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
    copyright: "Alle Rechte vorbehalten.",
    madeFor: "Made for circular economy",
    ctaStrip: { label: "Noch Fragen?", cta: "30 Min. kostenlos buchen →" },
  },
  en: {
    tagline: "AI and automation partner for sustainability data.\nReusable systems for SMEs.",
    claim: "✦ Sustainability as a Service",
    linkedin: "Sustainista on LinkedIn",
    youtube: "Sustainista on YouTube",
    sections: {
      products: "Products",
      tools: "Free Tools",
      branchen: "Industries",
      company: "Company",
      legal: "Legal",
      contact: "Contact",
    },
    products: [
      { label: "ESG Analysis & Report", href: "/produkte/esg-analyse" },
      { label: "AI Automation", href: "/produkte/ki-automatisierung" },
      { label: "Digital Product Passport", href: "/produkte/digitaler-produktpass" },
      { label: "Circular Stock for Fashion", href: "/produkte/circular-stock-management" },
      { label: "Product Carbon Footprint", href: "/produkte/product-carbon-footprint" },
      { label: "LCA Calculation", href: "/produkte/lca-berechnung" },
      { label: "All Products", href: "/produkte" },
    ],
    tools: [
      { label: "CO₂ Calculator", href: "/tools/co2-rechner" },
      { label: "ROI Calculator", href: "/tools/roi-kalkulator" },
    ],
    branchen: [
      { label: "Metal Processing", href: "/branche/metallverarbeitung" },
      { label: "Retail", href: "/branche/einzelhandel" },
      { label: "Manufacturing", href: "/branche/produktion" },
      { label: "Food & Agriculture", href: "/branche/lebensmittel" },
    ],
    company: [
      { label: "About us & Team", href: "/ueber-uns" },
      { label: "Projects & Cases", href: "/projekte" },
      { label: "Hackathon", href: "/hackathon" },
      { label: "Magazine", href: "/magazin" },
      { label: "Trend Radar 2026–2040", href: "/trendradar" },
      { label: "Press", href: "/presse" },
      { label: "Glossary", href: "/glossar" },
    ],
    legal: [
      { label: "Imprint", href: "/impressum" },
      { label: "Privacy Policy", href: "/datenschutz" },
      { label: "Terms", href: "/agb" },
    ],
    copyright: "All rights reserved.",
    madeFor: "Made for circular economy",
    ctaStrip: { label: "Still have questions?", cta: "Book 30 min. free →" },
  },
};

export default function Footer() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <footer className="bg-brand-800 py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/sustainista-logo-white.png"
                alt="Sustainista: Sustainability as a Service"
                width={1278}
                height={176}
                className="h-7 w-auto max-w-none"
              />
            </div>
            <p className="text-sm text-brand-200 leading-relaxed mb-4 whitespace-pre-line">
              {t.tagline}
            </p>
            <p className="text-xs text-brand-300 font-semibold uppercase tracking-[0.08em] mb-5">
              {t.claim}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/sustainista-innovation-meets-sustainability/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-canvas transition-colors"
                aria-label={t.linkedin}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t.linkedin}
              </a>
              <a
                href="https://www.youtube.com/@Sustainista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-canvas transition-colors"
                aria-label={t.youtube}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t.youtube}
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-4">{t.sections.products}</h3>
            <ul className="space-y-2.5">
              {t.products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-canvas transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools + Branchen */}
          <div>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-4">{t.sections.tools}</h3>
            <ul className="space-y-2.5 mb-6">
              {t.tools.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-canvas transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-4">{t.sections.branchen}</h3>
            <ul className="space-y-2.5">
              {t.branchen.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-canvas transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-4">{t.sections.company}</h3>
            <ul className="space-y-2.5">
              {t.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-canvas transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-4">{t.sections.legal}</h3>
            <ul className="space-y-2.5 mb-6">
              {t.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-200 hover:text-canvas transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-semibold text-brand-300 uppercase tracking-[0.08em] mb-3">{t.sections.contact}</h3>
            <a
              href="mailto:stefan.bauer@example.invalid"
              className="text-sm text-brand-200 hover:text-canvas transition-colors block"
            >
              stefan.bauer@example.invalid
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 rounded-card border border-brand-700 bg-brand-700/40 px-6 py-5">
          <p className="text-sm font-semibold text-canvas">{t.ctaStrip.label}</p>
          <a
            href="#kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-canvas px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
          >
            {t.ctaStrip.cta}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-brand-700">
          <p className="text-xs text-brand-300">
            © {new Date().getFullYear()} Sustainista GmbH. {t.copyright}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-brand-300">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            {t.madeFor}
          </div>
        </div>
      </div>
    </footer>
  );
}
