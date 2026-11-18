"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { useInView } from "@/lib/useInView";
import { trackEvent } from "@/lib/cta";

type Step = { year: string; title: string; desc: string; tag: string; urgent?: boolean };

const tx = {
  de: {
    eyebrow: "Fristen",
    h2a: "Direkt pflichtig sind wenige,",
    h2b: "betroffen sind viele.",
    sub: "Seit dem Omnibus-Paket (Richtlinie (EU) 2026/470) fällt die direkte CSRD-Pflicht für KMU weg. Der Druck über Kunden, Banken und Lieferketten bleibt.",
    note: "Rechtsstand: Richtlinie (EU) 2026/470, Umsetzung in nationales Recht bis 19.03.2027. Keine Rechtsberatung.",
    cta: "Prüfen, ob Sie betroffen sind",
    steps: [
      { year: "Jetzt", urgent: true, tag: "Betrifft Sie heute", title: "Indirekt über Ihre Kunden", desc: "Berichtspflichtige Kunden brauchen Emissionsdaten ihrer Lieferanten für Scope 3. Auch ohne eigene Pflicht fragen Großkunden und Banken diese Daten an. Zulieferer ohne belastbare Daten verlieren Aufträge." },
      { year: "2027", tag: "Neuer Anwendungsbereich", title: "Nur noch sehr große Unternehmen", desc: "Direkt berichtspflichtig sind künftig Unternehmen mit mehr als 1.000 Mitarbeitenden und mehr als 450 Mio. € Umsatz. Börsennotierte KMU sind nicht mehr erfasst." },
      { year: "VSME", tag: "Freiwilliger Standard", title: "Einfacher Bericht für KMU", desc: "Für Unternehmen außerhalb der Pflicht gilt der freiwillige KMU-Standard VSME als Antwort auf Kunden- und Bankenanfragen: schlank, aber belastbar." },
      { year: "2027", tag: "Gesetzliche Pflicht", title: "Digitaler Batteriepass", desc: "Ab 18. Februar 2027 brauchen Industrie-, Fahrzeug- und E-Bike-Batterien einen digitalen Batteriepass. Diese Frist gilt unabhängig vom Omnibus." },
    ] as Step[],
  },
  en: {
    eyebrow: "Deadlines",
    h2a: "Few are directly obliged,",
    h2b: "many are affected.",
    sub: "Since the Omnibus package (Directive (EU) 2026/470), the direct CSRD obligation no longer covers SMEs. Pressure from customers, banks and supply chains remains.",
    note: "Legal status: Directive (EU) 2026/470, national transposition due by 19 March 2027. Not legal advice.",
    cta: "Check if you are affected",
    steps: [
      { year: "Now", urgent: true, tag: "Affects you today", title: "Indirectly through your customers", desc: "Reporting customers need supplier emission data for Scope 3. Even without your own obligation, large customers and banks request it. Suppliers without reliable data lose business." },
      { year: "2027", tag: "New scope", title: "Only very large companies", desc: "Direct reporting duty now applies to companies with more than 1,000 employees and more than €450m turnover. Listed SMEs are no longer covered." },
      { year: "VSME", tag: "Voluntary standard", title: "A simple report for SMEs", desc: "For companies outside the mandatory scope, the voluntary SME standard VSME answers customer and bank requests: lean, but reliable." },
      { year: "2027", tag: "Legal obligation", title: "Digital battery passport", desc: "From 18 February 2027, industrial, vehicle and e-bike batteries need a digital battery passport. This deadline applies independently of the Omnibus." },
    ] as Step[],
  },
};

export default function CsrdTimeline() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const { ref, inView } = useInView<HTMLOListElement>(0.2);

  return (
    <section className="py-24 sm:py-28 bg-canvas overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-[60ch]">{t.sub}</p>
        </div>

        <ol ref={ref} className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-12">
          {t.steps.map((s, i) => (
            <li
              key={s.year + s.title}
              className={`relative transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: inView ? `${i * 160}ms` : "0ms", ["--step" as string]: i }}
            >
              <div className="relative h-4 mb-6" aria-hidden="true">
                <span className="absolute left-0 right-0 top-1/2 h-px bg-border-strong" />
                <span
                  className={`absolute left-0 right-0 top-1/2 h-px bg-ink origin-left transition-transform duration-[900ms] ease-out motion-reduce:transition-none motion-reduce:scale-x-100 ${inView ? "scale-x-100" : "scale-x-0"}`}
                  style={{ transitionDelay: inView ? `${i * 160 + 200}ms` : "0ms" }}
                />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 block w-3 h-3 rounded-full ${s.urgent ? "bg-brand-600" : "bg-canvas border border-ink"}`}>
                  {s.urgent && <span className="absolute inset-0 rounded-full bg-brand-600 animate-ping motion-reduce:hidden" />}
                </span>
              </div>
              <div className="lg:[margin-top:calc(var(--step)*2rem)]">
                <p
                  className={`text-6xl sm:text-7xl font-black tracking-tighter tabular-nums leading-none mb-4 ${s.urgent ? "text-brand-600" : "text-ink"}`}
                >
                  {s.year}
                </p>
                <p className={`inline-block text-marke font-bold uppercase tracking-[0.08em] mb-3 px-2 py-1 rounded-btn ${s.urgent ? "bg-brand-700 text-canvas" : "bg-brand-50 text-brand-700"}`}>{s.tag}</p>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-16 text-klein text-ink-tertiary max-w-[70ch]">{t.note}</p>

        <a
          href="#ansatz"
          onClick={() => trackEvent("cta_click", { id: "radar_anchor", location: "deadlines" })}
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 hover:text-ink underline underline-offset-4"
        >
          {t.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
