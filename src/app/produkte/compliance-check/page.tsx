import type { Metadata } from "next";
import BatteryPassDecisionTree from "@/components/compliance/BatteryPassDecisionTree";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import DeadlineClock from "@/components/compliance/DeadlineClock";
import ElektroShowcase from "@/components/ElektroShowcase";
import ProductTrends from "@/components/trendradar/ProductTrends";
import { CALENDLY_URL } from "@/lib/cta";
import { FAQS, LEGAL_STATE, MODULES, ONGOING, PRINCIPLES, TIMELINE } from "@/data/compliance-check";

const URL = "https://www.example.invalid/produkte/compliance-check";
const DESCRIPTION =
  "Compliance Check für Batteriepass, Digitalen Produktpass, PPWR und EPR: Readiness in rund vier Wochen, jedes Pflichtfeld geprüft, stichtagsfertige Pässe. Festpreis, keine Abnahmepflicht.";

export const metadata: Metadata = {
  title: { absolute: "Compliance Check Batteriepass & Produktpass | Sustainista" },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "de_AT", siteName: "Sustainista", url: URL, title: "Compliance Check: Batteriepass & Digitaler Produktpass", description: DESCRIPTION },
};

export const revalidate = 3600;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Compliance Check Batteriepass & Digitaler Produktpass",
      serviceType: "Compliance Check für Batteriepass, Digitalen Produktpass, PPWR und EPR",
      description: DESCRIPTION,
      url: URL,
      provider: { "@id": "https://www.example.invalid/#organization" },
      areaServed: ["AT", "DE", "CH", "EU"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Module des Compliance Checks",
        itemListElement: MODULES.map((m) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: m.name, description: `${m.short}. ${m.outcome}` } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.example.invalid" },
        { "@type": "ListItem", position: 2, name: "Produkte", item: "https://www.example.invalid/produkte" },
        { "@type": "ListItem", position: 3, name: "Compliance Check", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function ComplianceCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="page-header page-header--matrix relative pt-32 pb-16 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                  <li><Link href="/" className="hover:text-ink-secondary">Startseite</Link></li>
                  <li aria-hidden="true" className="text-border">/</li>
                  <li><Link href="/produkte" className="hover:text-ink-secondary">Produkte</Link></li>
                  <li aria-hidden="true" className="text-border">/</li>
                  <li className="text-ink-secondary" aria-current="page">Compliance Check</li>
                </ol>
              </nav>
              <p className="eyebrow mb-6">Compliance Check · Batteriepass, Produktpass, PPWR</p>
              <h1 className="font-black tracking-tight leading-[1.0] mb-6 text-ink" style={{ fontSize: "clamp(2.3rem,5.4vw,4rem)" }}>
                In vier Wochen wissen Sie, ob Ihr Pass zum Stichtag steht.
              </h1>
              <p className="text-lg text-ink-secondary leading-relaxed max-w-[60ch] mb-8">
                Der Compliance Check klärt Rolle, Datenlücken und Lieferantendaten, prüft jedes Pflichtfeld mit Beleg und macht daraus
                stichtagsfertige Pässe auf der sustainista DPP-Plattform. Modular, zum Festpreis, ohne Abnahmeverpflichtung.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-6 py-3 text-sm font-semibold text-canvas shadow-[4px_4px_0_var(--color-brand-900)] hover:bg-brand-700">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" /> Erstgespräch buchen
                </a>
                <a href="#module" className="inline-flex items-center gap-2 rounded-btn border border-border bg-canvas px-6 py-3 text-sm font-semibold text-ink-secondary hover:border-brand-400 hover:text-ink">
                  Module ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <DeadlineClock />
              <p className="mt-3 text-xs text-ink-tertiary">Pflicht für LMT-, EV- und Industriebatterien über 2 kWh. Für ESPR-Produktgruppen gilt der Check ab ihrem Rechtsakt oder freiwillig vorher.</p>
            </div>
          </div>
        </section>

        {/* Warum jetzt */}
        <section className="py-20 bg-white border-t border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Warum jetzt</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4 max-w-[24ch]">Der Kalender ist knapper, als er aussieht.</h2>
            <p className="text-ink-secondary max-w-[68ch] mb-10">
              Ohne gültigen Pass darf ab dem Stichtag keine betroffene Batterie mehr in Verkehr gebracht werden. Die Pflicht liegt beim
              Wirtschaftsakteur, die Daten kommen oft von Zell- und Komponentenlieferanten. Rechtsstand: 11. Oktober 2026.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {LEGAL_STATE.map((l) => (
                <div key={l.label} className="rounded-card border border-border bg-canvas p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-2">{l.label}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BatteryPassDecisionTree />

        {/* Module */}
        <section id="module" className="py-24 bg-surface scroll-mt-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Drei Module, einzeln oder kombiniert</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12 max-w-[26ch]">Was der Compliance Check konkret liefert</h2>
            <div className="space-y-6">
              {MODULES.map((m, i) => (
                <article key={m.id} id={m.id} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-card border border-border bg-canvas p-6 sm:p-8">
                  <div className="lg:col-span-4">
                    <p className="text-5xl font-black text-brand-500 tabular-nums mb-2" aria-hidden="true">0{i + 1}</p>
                    <h3 className="text-2xl font-black text-ink tracking-tight mb-1">{m.name}</h3>
                    <p className="text-sm font-semibold text-brand-700 mb-4">{m.short} · {m.duration}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-4"><b className="text-ink">Die Frage:</b> {m.question}</p>
                    <p className="rounded-btn bg-brand-50 border border-brand-200 p-3 text-sm text-ink leading-relaxed"><b>Ergebnis:</b> {m.outcome}</p>
                  </div>
                  <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3 content-start">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {ONGOING.map((o) => (
                <div key={o.name} className="rounded-card border border-dashed border-brand-600 bg-canvas p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-1">Danach, auf Wunsch</p>
                  <p className="font-bold text-ink mb-1">{o.name}</p>
                  <p className="text-sm text-ink-secondary">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zeitplan */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">Rückwärts vom Stichtag gerechnet</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">So kommen Sie bis 18. Februar 2027 ins Ziel</h2>
            <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
              {TIMELINE.map((t, i) => (
                <li key={t.when} className={`rounded-card border p-5 ${i === TIMELINE.length - 1 ? "border-brand-600 bg-brand-50" : "border-border bg-canvas"}`}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-2">{t.when}</p>
                  <p className="text-sm text-ink leading-relaxed">{t.what}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-ink-tertiary">Beispielhafter Ablauf bei Start im November 2026. Später starten geht, verkürzt aber die Zeit für Lieferantendaten.</p>
          </div>
        </section>

        {/* Prinzipien */}
        <section className="py-24 bg-brand-800 text-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-200 mb-4"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> So arbeiten wir</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] mb-12 max-w-[24ch]">Sie entscheiden ohne Risiko.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="rounded-card border border-white/15 bg-white/5 p-6">
                  <p className="text-lg font-extrabold mb-2">{p.title}</p>
                  <p className="text-sm text-brand-100 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-brand-200">Wir leisten Daten- und Prozessarbeit mit Rechtsgrundlage je Feld, keine Rechtsberatung. Die Meldung geben Sie als Wirtschaftsakteur ab.</p>
          </div>
        </section>

        <ElektroShowcase compact />

        <ProductTrends ids={["T05", "T06", "T13", "T15", "T01", "T02"]} label="dem Compliance Check" />

        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-10">Häufige Fragen zum Compliance Check</h2>
            <ArticleFaqAccordion faqs={FAQS} />
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link href="/produkte/batteriepass" className="font-semibold text-brand-700 underline underline-offset-2">Batteriepass</Link>
              <Link href="/produkte/digitaler-produktpass" className="font-semibold text-brand-700 underline underline-offset-2">Digitaler Produktpass</Link>
              <Link href="/produkte/ppwr-compliance" className="font-semibold text-brand-700 underline underline-offset-2">PPWR Compliance</Link>
              <Link href="/batteriepass-check" className="font-semibold text-brand-700 underline underline-offset-2">Kostenloser Batteriepass-Selbstcheck</Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
