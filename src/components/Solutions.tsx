"use client";
import Link from "next/link";
import { BarChart3, Bot, Package, BatteryCharging, Recycle } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Angebot",
    h2a: "Fünf Lösungen.",
    h2b: "Ein System.",
    sub: "Keine Einmalberichte. Wiederverwendbare Nachhaltigkeitssysteme, die mit Ihrem Unternehmen wachsen.",
    learnMore: "Mehr erfahren",
    card1: {
      tag: "01 ESG Ready",
      title: "Nachhaltigkeit verstehen,\nmessen und berichten.",
      sub: "CO₂-Bilanz nach GHG Protocol mit österreichischen UBA-Emissionsfaktoren, und ESG-Erstbericht nach VSME, ohne eigenes ESG-Team. Erste Ergebnisse in 4 bis 6 Wochen, für Wiener und niederösterreichische Betriebe gefördert möglich.",
      features: ["CO₂-Bilanz nach GHG Protocol", "ESG-Erstbericht für Banken & Kund:innen", "VSME-Bericht für Kund:innen & Banken", "Lieferantenfragebogen & Datenabfrage"],
    },
    card2: {
      tag: "02 KI Automation",
      title: "KI automatisiert Ihre Daten.",
      sub: "Rechnungen, Lieferantenmails, PDFs: KI liest, klassifiziert und berechnet CO₂-Emissionen automatisch: Scope 3 ohne manuelle Dateneingabe.",
      rows: [
        // \u00AD: Label und Status passen bei 280px nicht nebeneinander, das Label darf trennen.
        { label: "Eingangs\u00ADrechnung", status: "→ CO₂ extrahiert" },
        { label: "Lieferanten\u00ADmail", status: "→ Daten strukturiert" },
        { label: "Produktdatenblatt", status: "→ DPP befüllt" },
      ],
      features: ["Systemintegration (ERP, SAP, Buchhaltung)", "Automatische Scope-3-Erfassung aus Belegen", "Reporting-Pipelines ohne manuellen Aufwand"],
    },
    card3: {
      tag: "03 Circular Business",
      // \u00AD: Wort ist bei 280px 202px breit, Karte 174px. sm:hyphens-none am h3 hält den Desktop.
      title: "Digitaler Produktpass & Kreislauf\u00ADwirtschaft.",
      sub: "Produktdaten strukturiert erfassen, als Digitalen Produktpass bereitstellen und für Banken, Käufer:innen und Lieferantenportale verfügbar machen, Grundlage für ESPR-Konformität ab 2027.",
      features: ["Materialzusammensetzung & CO₂-Fußabdruck", "ESPR-konformes Datenformat", "API-Anbindung für Händler & Portale"],
      stock: {
        eyebrow: "Neu für Modeunternehmen",
        title: "Unverkaufte Ware: entscheiden, dokumentieren, Wert erhalten.",
        sub: "Sustainista Circular Stock verbindet klare Prozesse, belastbare Nachweise und datenbasierte Entscheidungen für Restbestände, Retouren und nicht konforme Ware.",
        cta: "Circular Stock ansehen",
      },
    },
    card4: {
      tag: "04 Battery Passport Light",
      title: "Ab 2027 Pflicht.",
      titleSub: "Jetzt vorbereiten.",
      sub: "EU Battery Regulation: Ab 2027 ist ohne Batteriepass keine Vermarktung von Industriebatterien in der EU möglich. Pragmatische Lösung für Händler, Verleih und Refurbishment, inkl. State-of-Health-Berechnung und QR-Code-Integration.",
      soh: "State of Health",
      badge: "EU konform",
    },
    card5: {
      tag: "05 LCA-Berechnung",
      // \u00AD: Wort ist bei 280px 187px breit, Karte 174px.
      title: "Umwelt\u00ADwirkungen sichtbar machen.",
      titleSub: "Über den gesamten Lebenszyklus.",
      sub: "Life Cycle Assessment nach ISO 14040/14044, vom pragmatischen Quick LCA Check bis zur wissenschaftlich fundierten Vollanalyse. Grundlage für Produktentwicklung, ESG-Berichte und den Digitalen Produktpass.",
      packages: [
        { label: "Quick LCA Check", sub: "1 bis 2 Wochen · Orientierung" },
        { label: "Product Impact Assessment", sub: "3 bis 5 Wochen · Strukturiert" },
        { label: "Scientific LCA", sub: "6 bis 12 Wochen · ISO 14040/14044" },
      ],
    },
  },
  en: {
    eyebrow: "Services",
    h2a: "Five solutions.",
    h2b: "One system.",
    sub: "No one-off reports. Reusable sustainability systems that grow with your business.",
    learnMore: "Learn more",
    card1: {
      tag: "01 ESG Ready",
      title: "Understand, measure\nand report sustainability.",
      sub: "CO₂ accounting per GHG Protocol using official Austrian UBA emission factors, and a first ESG report based on VSME, without an in-house ESG team. First results in 4 to 6 weeks, with funding available for companies in Vienna and Lower Austria.",
      features: ["CO₂ accounting per GHG Protocol", "First ESG report for banks & customers", "VSME report for customers & banks", "Supplier questionnaire & data collection"],
    },
    card2: {
      tag: "02 AI Automation",
      title: "AI automates your data.",
      sub: "Invoices, supplier emails, PDFs: AI reads, classifies and calculates CO₂ emissions automatically: Scope 3 without manual data entry.",
      rows: [
        { label: "Incoming invoice", status: "→ CO₂ extracted" },
        { label: "Supplier email", status: "→ Data structured" },
        { label: "Product data sheet", status: "→ DPP filled" },
      ],
      features: ["System integration (ERP, SAP, accounting)", "Automatic Scope 3 capture from documents", "Reporting pipelines without manual effort"],
    },
    card3: {
      tag: "03 Circular Business",
      title: "Digital Product Passport & circular economy.",
      sub: "Capture product data in a structured format, make it available as a Digital Product Passport and share it with banks, buyers and supplier portals, the basis for ESPR compliance from 2027.",
      features: ["Material composition & CO₂ footprint", "ESPR-compliant data format", "API integration for retailers & portals"],
      stock: {
        eyebrow: "New for fashion companies",
        title: "Unsold goods: decide, document, preserve value.",
        sub: "Sustainista Circular Stock combines clear processes, reliable documentation and data-based decisions for residual stock, returns and non-compliant goods.",
        cta: "View Circular Stock",
      },
    },
    card4: {
      tag: "04 Battery Passport Light",
      title: "Mandatory from 2027.",
      titleSub: "Prepare now.",
      sub: "EU Battery Regulation: From 2027, industrial batteries cannot be marketed in the EU without a battery passport. Pragmatic solution for retailers, rental and refurbishment, including state-of-health calculation and QR code integration.",
      soh: "State of Health",
      badge: "EU compliant",
    },
    card5: {
      tag: "05 LCA Calculation",
      title: "Make environmental impacts visible.",
      titleSub: "Across the entire lifecycle.",
      sub: "Life Cycle Assessment per ISO 14040/14044: from a pragmatic Quick LCA Check to a scientifically sound full analysis. Foundation for product development, ESG reports and the Digital Product Passport.",
      packages: [
        { label: "Quick LCA Check", sub: "1 to 2 weeks · Orientation" },
        { label: "Product Impact Assessment", sub: "3 to 5 weeks · Structured" },
        { label: "Scientific LCA", sub: "6 to 12 weeks · ISO 14040/14044" },
      ],
    },
  },
};

export default function Solutions() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section id="loesungen" className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05]">
              {t.h2a}<br />
              <span className="text-ink-tertiary">{t.h2b}</span>
            </h2>
            <p className="text-base text-ink-secondary max-w-sm leading-relaxed">{t.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Card 1: ESG Ready */}
          <div className="md:col-span-7 bg-canvas rounded-card p-8 group hover:-translate-y-0.5 hover:shadow-ambient-low transition-all border border-border">
            <div className="flex items-center gap-2.5 mb-6">
              <BarChart3 className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.card1.tag}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight mb-4 whitespace-pre-line">
              {t.card1.title}
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-8 max-w-sm">{t.card1.sub}</p>
            <ul className="space-y-2.5 mb-8">
              {t.card1.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/produkte/esg-analyse" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors group-hover:gap-2">
              {t.learnMore}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Card 2: AI Automation */}
          <div className="md:col-span-5 bg-canvas rounded-card p-8 group hover:-translate-y-0.5 hover:shadow-ambient-low transition-all border border-border">
            <div className="flex items-center gap-2.5 mb-6">
              <Bot className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.card2.tag}</span>
            </div>
            <h3 className="text-2xl font-bold text-ink tracking-tight leading-tight mb-4">{t.card2.title}</h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6">{t.card2.sub}</p>
            <div className="space-y-2 mb-6">
              {t.card2.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between bg-surface rounded-btn px-3.5 py-2.5 border border-border">
                  <span className="text-xs text-ink-tertiary">{row.label}</span>
                  <span className="text-xs text-brand-600 font-semibold">{row.status}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {t.card2.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-secondary">
                  <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Circular Business */}
          <div className="md:col-span-5 bg-canvas rounded-card p-8 group hover:-translate-y-0.5 hover:shadow-ambient-low transition-all border border-border">
            <div className="flex items-center gap-2.5 mb-6">
              <Package className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.card3.tag}</span>
            </div>
            <h3 className="text-2xl font-bold text-ink tracking-tight leading-tight mb-4 sm:hyphens-none">{t.card3.title}</h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6">{t.card3.sub}</p>
            <div className="bg-surface rounded-card p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-400" aria-hidden="true" />
                <span className="text-xs text-ink-tertiary font-mono">product.<wbr />passport.json</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                <div><span className="text-brand-600">&quot;material&quot;</span><span className="text-ink-tertiary">: </span><span className="text-brand-700">&quot;Recycled ABS 78%&quot;</span></div>
                <div><span className="text-brand-600">&quot;co2e&quot;</span><span className="text-ink-tertiary">: </span><span className="text-brand-700">12.4</span></div>
                <div><span className="text-brand-600">&quot;repairability&quot;</span><span className="text-ink-tertiary">: </span><span className="text-brand-700">&quot;A&quot;</span></div>
              </div>
            </div>
            {/* Circular Stock teaser */}
            <div className="mt-5 pt-5 border-t border-border">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-600 mb-2">{t.card3.stock.eyebrow}</p>
              <h4 className="text-sm font-bold text-ink leading-snug mb-2">{t.card3.stock.title}</h4>
              <p className="text-xs text-ink-secondary leading-relaxed mb-4">{t.card3.stock.sub}</p>
              <Link href="/produkte/circular-stock-management" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-600 hover:text-brand-700 transition-colors">
                {t.card3.stock.cta}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4: Battery Passport */}
          <div className="md:col-span-7 bg-canvas rounded-card p-8 group hover:-translate-y-0.5 hover:shadow-ambient-low transition-all border border-border">
            <div className="flex items-center gap-2.5 mb-6">
              <BatteryCharging className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.card4.tag}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight mb-4">
              {t.card4.title}<br />
              <span className="text-ink-tertiary">{t.card4.titleSub}</span>
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-sm">{t.card4.sub}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 bg-surface rounded-card p-4 border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-ink-tertiary">{t.card4.soh}</span>
                  <span className="text-sm font-bold text-brand-600">87%</span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: "87%" }} />
                </div>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 bg-brand-50 border border-border rounded-btn px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  <span className="text-xs font-semibold text-brand-700">{t.card4.badge}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: LCA */}
          <div className="md:col-span-12 bg-canvas rounded-card p-8 group hover:-translate-y-0.5 hover:shadow-ambient-low transition-all border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Recycle className="w-5 h-5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.card5.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight mb-4 sm:hyphens-none">
                  {t.card5.title}<br />
                  <span className="text-ink-tertiary">{t.card5.titleSub}</span>
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-md">{t.card5.sub}</p>
                <Link href="/produkte/lca-berechnung" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors group-hover:gap-2">
                  {t.learnMore}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              {/* Drei Spalten erst ab sm: darunter sind die Kästen innen nur 16 bis 61px breit, der Text lief über die Rahmen. */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t.card5.packages.map((pkg) => (
                  <div key={pkg.label} className="bg-surface rounded-btn px-4 py-3 border border-border">
                    <span className="block text-xs font-semibold text-ink leading-snug mb-1">{pkg.label}</span>
                    <span className="block text-[11px] text-ink-tertiary leading-snug">{pkg.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
