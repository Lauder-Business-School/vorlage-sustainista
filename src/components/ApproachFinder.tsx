"use client";
import { useState } from "react";
import Link from "next/link";
import { BarChart3, Bot, Package, BatteryCharging, ArrowRight, CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Ansatzfinder",
    h2a: "Welcher Sustainista-Ansatz",
    h2b: "passt zu Ihrem Unternehmen?",
    hint: "Wählen Sie die Aussage, die Ihre aktuelle Situation am besten beschreibt.",
    directCta: "Direkt anfragen",
    bookCta: "Erstgespräch buchen",
    approaches: [
      { id: "esg", trigger: "Wir erhalten Nachhaltigkeitsanfragen von Kunden oder Banken.", title: "ESG Ready", subtitle: "CO₂-Bilanz, ESG-Erstbericht, CSRD-Readiness", desc: "Sie brauchen einen validen, bankentauglichen ESG-Bericht, ohne eigene Nachhaltigkeitsabteilung. In 4 bis 6 Wochen.", cta: { label: "ESG-Analyse kennenlernen", href: "/produkte/esg-analyse" }, badge: "Häufigster Einstieg" },
      { id: "ki", trigger: "Wir erfassen viele Nachhaltigkeitsdaten manuell.", title: "KI-Automatisierung", subtitle: "Datenpipelines, Rechnungsextraktion, Reporting", desc: "KI liest Rechnungen, PDFs und Lieferantenanfragen automatisch aus. Sie prüfen nur noch die Ergebnisse.", cta: { label: "KI-Automatisierung entdecken", href: "/produkte/ki-automatisierung" }, badge: "Zeit & Ressourcen sparen" },
      { id: "dpp", trigger: "Unsere Produkte brauchen digitale Nachweise oder Produktpässe.", title: "Digitaler Produktpass", subtitle: "EU ESPR, Circular Business, Produktdaten", desc: "Produktdaten strukturiert erfassen und als EU-konformen Digitalen Produktpass bereitstellen, für Händler, Hersteller und Zulieferer.", cta: { label: "DPP-Lösung ansehen", href: "/produkte/digitaler-produktpass" }, badge: "ESPR: je Produktgruppe" },
      { id: "battery", trigger: "Wir handeln, verleihen oder refurbishen Batterieprodukte.", title: "Battery Passport Light", subtitle: "EU Battery Regulation, State of Health, QR-Code", desc: "Ohne Batteriepass dürfen Industrie-, Fahrzeug- und E-Bike-Batterien ab 2027 nicht mehr in der EU vermarktet werden. Pragmatische Lösung für Händler.", cta: { label: "Battery Passport kennenlernen", href: "/produkte/digitaler-produktpass#battery" }, badge: "Ab 2027 gesetzlich Pflicht" },
    ],
  },
  en: {
    eyebrow: "Approach finder",
    h2a: "Which Sustainista approach",
    h2b: "fits your company?",
    hint: "Select the statement that best describes your current situation.",
    directCta: "Contact directly",
    bookCta: "Book initial call",
    approaches: [
      { id: "esg", trigger: "We receive sustainability requests from customers or banks.", title: "ESG Ready", subtitle: "CO₂ accounting, first ESG report, CSRD readiness", desc: "You need a valid, bank-grade ESG report without an in-house sustainability department. In 4 to 6 weeks.", cta: { label: "Explore ESG analysis", href: "/produkte/esg-analyse" }, badge: "Most common entry" },
      { id: "ki", trigger: "We collect a lot of sustainability data manually.", title: "AI Automation", subtitle: "Data pipelines, invoice extraction, reporting", desc: "AI reads invoices, PDFs and supplier requests automatically. You only review the results.", cta: { label: "Discover AI automation", href: "/produkte/ki-automatisierung" }, badge: "Save time & resources" },
      { id: "dpp", trigger: "Our products need digital evidence or product passports.", title: "Digital Product Passport", subtitle: "EU ESPR, circular business, product data", desc: "Capture product data in a structured way and provide it as an EU-compliant Digital Product Passport, for retailers, manufacturers and suppliers.", cta: { label: "View DPP solution", href: "/produkte/digitaler-produktpass" }, badge: "EU obligation from 2026" },
      { id: "battery", trigger: "We sell, lease or refurbish battery products.", title: "Battery Passport Light", subtitle: "EU Battery Regulation, State of Health, QR code", desc: "Without a battery passport, industrial, vehicle and e-bike batteries can no longer be marketed in the EU from 2027. Pragmatic solution for retailers.", cta: { label: "Learn about Battery Passport", href: "/produkte/digitaler-produktpass#battery" }, badge: "Legally mandatory from 2027" },
    ],
  },
};

export default function ApproachFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const { locale } = useLanguage();
  const t = tx[locale];
  const result = t.approaches.find((a) => a.id === selected);

  return (
    <section id="ansatz" className="py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4 justify-center">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-sm text-ink-secondary max-w-md mx-auto">{t.hint}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {t.approaches.map(({ id, trigger }) => {
            const icons = [BarChart3, Bot, Package, BatteryCharging];
            const Icon = icons[t.approaches.findIndex(a => a.id === id)];
            return (
              <button type="button" key={id} onClick={() => setSelected(id === selected ? null : id)}
                className={`flex items-start gap-3 text-left p-5 rounded-card border transition-all ${selected === id ? "border-brand-600 bg-brand-50 shadow-ambient-low" : "border-border bg-canvas hover:border-brand-300 hover:bg-brand-50"}`}
                aria-pressed={selected === id}>
                <div className={`mt-0.5 w-8 h-8 rounded-btn flex items-center justify-center flex-shrink-0 ${selected === id ? "bg-brand-600" : "bg-surface border border-border"}`}>
                  <Icon className={`w-4 h-4 ${selected === id ? "text-canvas" : "text-brand-600"}`} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className={`text-sm font-medium leading-snug ${selected === id ? "text-brand-700" : "text-ink-secondary"}`}>{trigger}</span>
              </button>
            );
          })}
        </div>

        {result && (
          <div className="rounded-card border border-brand-200 bg-canvas p-8 shadow-ambient-low animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest border border-brand-200 bg-brand-50 text-brand-700 px-2.5 py-1 rounded-btn">{result.badge}</span>
            </div>
            <h3 className="text-2xl font-bold text-ink mb-1">{result.title}</h3>
            <p className="text-sm text-brand-600 font-semibold mb-4">{result.subtitle}</p>
            <p className="text-sm text-ink-secondary leading-relaxed mb-7 max-w-xl">{result.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                {t.bookCta}
              </a>
              <Link href={result.cta.href} className="inline-flex items-center justify-center gap-2 border border-border bg-canvas text-ink-secondary hover:text-ink hover:border-ink-secondary px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors">
                {result.cta.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
