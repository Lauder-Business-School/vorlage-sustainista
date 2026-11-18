"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { trackEvent } from "@/lib/cta";
import LeadMagnet from "@/components/LeadMagnet";

const tx = {
  de: {
    eyebrow: "Selbst ausprobieren",
    h2a: "Tools, Wissen",
    h2b: "und Termine.",
    groups: [
      { title: "Kostenlose Checks", items: [
        { href: "/tools/co2-rechner", label: "CO₂-Rechner Österreich", sub: "Scope 1–3 mit UBA-Faktoren" },
        { href: "/tools/roi-kalkulator", label: "ROI-Kalkulator", sub: "Was kostet Inaction?" },
        { href: "/esg-check", label: "ESG-Datencheck", sub: "Wie belastbar sind Ihre Daten?" },
        { href: "/dpp-check", label: "DPP-Datencheck", sub: "Produktdaten bereit für den Pass?" },
        { href: "/batteriepass-check", label: "Batteriepass-Check", sub: "E-Autos und E-Bikes" },
      ] },
      { title: "Wissen & Netzwerk", items: [
        { href: "/magazin", label: "Magazin", sub: "ESG, CSRD und Produktpass erklärt" },
        { href: "/hackathon", label: "Europe Tech Hackathon 2027", sub: "7. & 8. Mai 2027" },
        { href: "https://dpp.example.invalid/de/dpp/beispiele", label: "sustainista DPP-Plattform", sub: "Musterpässe für Batterien und Produkte ansehen", external: true },
      ] },
    ],
  },
  en: {
    eyebrow: "Try it yourself",
    h2a: "Tools, knowledge",
    h2b: "and events.",
    groups: [
      { title: "Free checks", items: [
        { href: "/tools/co2-rechner", label: "CO₂ calculator Austria", sub: "Scope 1–3 with UBA factors" },
        { href: "/tools/roi-kalkulator", label: "ROI calculator", sub: "What does inaction cost?" },
        { href: "/esg-check", label: "ESG data check", sub: "How robust is your data?" },
        { href: "/dpp-check", label: "DPP data check", sub: "Is your product data passport-ready?" },
        { href: "/batteriepass-check", label: "Battery passport check", sub: "E-cars and e-bikes" },
      ] },
      { title: "Knowledge & network", items: [
        { href: "/magazin", label: "Magazine", sub: "ESG, CSRD and product passport explained" },
        { href: "/hackathon", label: "Europe Tech Hackathon 2027", sub: "7 & 8 May 2027" },
        { href: "https://dpp.example.invalid/de/dpp/beispiele", label: "sustainista DPP platform", sub: "See sample battery and product passports", external: true },
      ] },
    ],
  },
};

export default function Resources() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="py-24 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-10">
            {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          <div className="space-y-8">
            {t.groups.map((g) => (
              <div key={g.title}>
                <p className="text-marke font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1">{g.title}</p>
                <ul className="border-t border-border-strong">
                  {g.items.map((it) => {
                    const external = "external" in it && it.external;
                    const cls = "group flex items-baseline justify-between gap-4 border-b border-border py-3.5 hover:bg-brand-50 transition-colors";
                    const inner = (
                      <>
                        <span>
                          <span className="block text-base font-semibold text-ink">{it.label}</span>
                          <span className="block text-sm text-ink-secondary">{it.sub}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 shrink-0 text-ink-tertiary group-hover:text-brand-600" aria-hidden="true" />
                      </>
                    );
                    const onClick = () => trackEvent("resource_click", { href: it.href });
                    return (
                      <li key={it.href}>
                        {external ? (
                          <a href={it.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls}>{inner}</a>
                        ) : (
                          <Link href={it.href} onClick={onClick} className={cls}>{inner}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-4">
          <LeadMagnet embedded />
        </div>
      </div>
    </section>
  );
}
