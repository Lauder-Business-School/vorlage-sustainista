import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import DeadlineClock from "@/components/compliance/DeadlineClock";
import { MODULES } from "@/data/compliance-check";

const COPY = {
  home: {
    eyebrow: "Neu · Compliance Check",
    title: "Batteriepass oder Produktpass zum Stichtag fertig? In vier Wochen wissen Sie es.",
    text: "Rolle klären, Datenlücken finden, Lieferanten rechtzeitig anfragen, jedes Pflichtfeld prüfen: modular, zum Festpreis, ohne Abnahmeverpflichtung.",
  },
  battery: {
    eyebrow: "Compliance Check Batteriepass",
    title: "Stichtag 18. Februar 2027: Ihre Lieferantendaten brauchen Sie schon im Jänner.",
    text: "Der Readiness-Check klärt in rund vier Wochen, was zu tun ist; der Meldedaten-Check prüft jedes Pflichtfeld und macht daraus stichtagsfertige Pässe.",
  },
  dpp: {
    eyebrow: "Compliance Check Produktpass",
    title: "Wissen, welche Daten Ihr Produktpass braucht, bevor die Pflicht kommt.",
    text: "Rollenmatrix, Gap-Analyse und Musterpass mit Ihren heutigen Daten. Für Batterien mit Stichtag 18. Februar 2027, für ESPR-Produktgruppen ab ihrem Rechtsakt oder freiwillig vorher.",
  },
  ppwr: {
    eyebrow: "PPWR- & EPR-Check",
    title: "Verpackung, Elektrogeräte, Batterien: melden Sie zu viel oder zu wenig?",
    text: "Wir rechnen die letzte Meldeperiode nach, zeigen die Abweichung in Euro und den PPWR-Fahrplan je Verpackung. Dieselbe Datenbasis versorgt später den Batteriepass.",
  },
} as const;

/** Prominenter Einstieg in den Compliance Check; Variante je Seite */
export default function ComplianceCheckTeaser({ variant = "home" }: { variant?: keyof typeof COPY }) {
  const c = COPY[variant];
  const modules = variant === "ppwr" ? MODULES.filter((m) => m.id === "ppwr-epr") : MODULES;
  return (
    <section className="relative overflow-hidden bg-brand-800 text-canvas py-16 sm:py-20" aria-labelledby={`cc-teaser-${variant}`}>
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-200 mb-4">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" /> {c.eyebrow}
          </p>
          <h2 id={`cc-teaser-${variant}`} className="font-black tracking-tight leading-[1.05] mb-4" style={{ fontSize: "clamp(1.8rem,3.6vw,2.8rem)" }}>
            {c.title}
          </h2>
          <p className="text-brand-100 leading-relaxed max-w-[60ch] mb-6">{c.text}</p>
          <ul className="flex flex-wrap gap-2 mb-8">
            {modules.map((m) => (
              <li key={m.id}>
                <a href={`/produkte/compliance-check#${m.id}`} className="inline-flex items-center gap-1.5 rounded-btn border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-canvas hover:bg-white/10">
                  {m.name} <span className="text-brand-200 font-normal">· {m.short}</span>
                </a>
              </li>
            ))}
          </ul>
          <Link href="/produkte/compliance-check" className="inline-flex items-center gap-2 rounded-btn bg-canvas px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-800 shadow-[4px_4px_0_var(--color-brand-900)] hover:-translate-y-px transition-transform">
            Compliance Check ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:col-span-5">
          {variant === "ppwr" ? (
            <ul className="space-y-3">
              {["Rollenmatrix je Regime und Land", "Nachrechnung der letzten Meldeperiode", "Abweichung in Euro: nachzahlen oder Guthaben", "PPWR-Fahrplan je Verpackung mit Fristen"].map((t) => (
                <li key={t} className="rounded-card border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold">{t}</li>
              ))}
            </ul>
          ) : (
            <DeadlineClock tone="dark" />
          )}
        </div>
      </div>
    </section>
  );
}
