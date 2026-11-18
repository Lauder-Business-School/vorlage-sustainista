"use client";
import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { CALENDLY_URL, trackEvent } from "@/lib/cta";
import DeadlineClock from "@/components/compliance/DeadlineClock";
import { MODULES } from "@/data/compliance-check";

const SAMPLES_URL = "https://dpp.example.invalid/de/dpp/beispiele";

const tx = {
  de: {
    eyebrow: "Batteriepass · Stichtag 18. Februar 2027",
    h2a: "Ab 2027 gesetzlich",
    h2b: "verpflichtend.",
    desc: 'Die EU Battery Regulation (2023/1542) verlangt ab <strong>Februar 2027</strong> für Industriebatterien über 2 kWh, Fahrzeug- und E-Bike-Batterien einen digitalen Batteriepass. Ohne Batteriepass dürfen Produkte nicht mehr in der EU vermarktet werden.',
    features: [
      "Batteriepass nach EU Battery Regulation 2023/1542",
      // \u00AD: Kachel ist bei 280px innen nur 80px breit.
      "State of Health (SoH) Dokumen\u00ADtation",
      "QR-Code für Käufer:innen & Behörden",
      "Erhöhter Wieder\u00ADverkaufs\u00ADwert",
    ],
    cta1: "Batteriepass-Fahrplan besprechen",
    cta2: "Beispielpässe ansehen",
    cta3: "Förderung prüfen",
    check: { eyebrow: "Compliance Check", title: "In rund vier Wochen wissen Sie, ob Sie zum Stichtag fertig sind: Rolle klären, Datenlücken finden, Lieferanten rechtzeitig anfragen. Zum Festpreis.", cta: "Compliance Check ansehen" },
    sample: "Musterpass mit Beispieldaten",
    tabs: ["Pass", "QR-Ansicht"],
    scanHint: "So sehen Käufer:innen und Behörden den Pass: ein Scan, alle Pflichtangaben.",
    card: {
      label: "Digitaler Batteriepass",
      title: "E-Bike Pro 500 Wh",
      compliant: "Konform",
      soh: "State of Health",
      sohSub: "Sehr gut · 4,3 von 5 Jahren Nutzung",
      rows: [
        { k: "Ladezyklen", v: "312" },
        { k: "Kapazität", v: "435 Wh" },
        { k: "CO₂-Fußabdruck", v: "45 kg CO₂e" },
        { k: "Letzte Prüfung", v: "14.05.2026" },
      ],
      qrTitle: "QR-Code scannen",
      qrSub: "Vollständiger Pass für Käufer:innen & Behörden",
    },
  },
  en: {
    eyebrow: "Battery passport · deadline 18 February 2027",
    h2a: "Legally mandatory",
    h2b: "from 2027.",
    desc: 'EU Battery Regulation (2023/1542) requires a digital battery passport for all industrial, vehicle and e-bike batteries from <strong>February 2027</strong>. Without a battery passport, products can no longer be marketed in the EU.',
    features: [
      "Battery passport per EU Battery Regulation 2023/1542",
      "State of Health (SoH) documentation",
      "QR code for buyers & authorities",
      "Increased resale value",
    ],
    cta1: "Discuss your battery passport roadmap",
    cta2: "See sample passports",
    cta3: "Check funding",
    check: { eyebrow: "Compliance check", title: "In about four weeks you know whether you will be ready by the deadline: clarify your role, find data gaps, ask suppliers in time. At a fixed price.", cta: "View the compliance check" },
    sample: "Sample passport with example data",
    tabs: ["Passport", "QR view"],
    scanHint: "How buyers and authorities see the passport: one scan, all mandatory data.",
    card: {
      label: "Digital Battery Passport",
      title: "E-Bike Pro 500 Wh",
      compliant: "Compliant",
      soh: "State of Health",
      sohSub: "Very good · 4.3 of 5 years of use",
      rows: [
        { k: "Charge cycles", v: "312" },
        { k: "Capacity", v: "435 Wh" },
        { k: "CO₂ footprint", v: "45 kg CO₂e" },
        { k: "Last inspection", v: "14.05.2026" },
      ],
      qrTitle: "Scan QR code",
      qrSub: "Full passport for buyers & authorities",
    },
  },
};

export default function BatteryPassport() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const [tab, setTab] = useState(0);
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const nextIndex =
      event.key === "ArrowRight" ? (index + 1) % t.tabs.length :
      event.key === "ArrowLeft" ? (index - 1 + t.tabs.length) % t.tabs.length :
      event.key === "Home" ? 0 :
      event.key === "End" ? t.tabs.length - 1 :
      null;

    if (nextIndex === null) return;

    event.preventDefault();
    setTab(nextIndex);
    document.getElementById(`battery-passport-tab-${nextIndex}`)?.focus();
  };
  return (
    <section id="batteriepass" className="py-24 sm:py-28 bg-brand-700 text-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-4 text-brand-200">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {t.h2a}<br /><span className="text-brand-200">{t.h2b}</span>
          </h2>

          {/* Zwei Fristen statt einer: die Lieferantendaten sind der engere Termin. */}
          <div className="mb-6">
            <DeadlineClock tone="dark" locale={locale} />
          </div>

          <p className="text-brand-100 text-sm leading-relaxed mb-6 max-w-[58ch]" dangerouslySetInnerHTML={{ __html: t.desc }} />
          <ul className="mb-8 max-w-[58ch]">
            {t.features.map((item) => (
              <li key={item} className="flex items-baseline gap-3 border-b border-brand-600 py-2.5 text-sm text-canvas">
                <span className="text-brand-200" aria-hidden="true">✦</span>
                <span className="sm:hyphens-none">{item}</span>
              </li>
            ))}
          </ul>

          {/* Compliance Check: stand bis 11.11.2026 als eigenes Band auf der Startseite, mit derselben Frist. */}
          <div className="mb-8 max-w-[58ch] rounded-card border border-brand-600 bg-brand-800/40 p-5">
            <p className="mb-1 flex items-center gap-2 text-marke font-bold uppercase tracking-[0.08em] text-brand-200">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" /> {t.check.eyebrow}
            </p>
            <p className="mb-4 text-base font-semibold leading-snug text-canvas">{t.check.title}</p>
            <ul className="mb-4 flex flex-wrap gap-2">
              {MODULES.map((m) => (
                <li key={m.id}>
                  <a href={`/produkte/compliance-check#${m.id}`} className="inline-flex rounded-btn border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-canvas hover:bg-white/10">
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/produkte/compliance-check"
              onClick={() => trackEvent("cta_click", { id: "compliance_check", location: "battery_passport" })}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-100 underline underline-offset-4 hover:text-canvas"
            >
              {t.check.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_click", { id: "calendly", location: "battery_passport" })}
              className="inline-flex items-center justify-center gap-2 bg-canvas hover:bg-brand-50 text-brand-700 px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
            >
              {t.cta1} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={SAMPLES_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_click", { id: "battery_samples", location: "battery_passport" })}
              className="inline-flex items-center gap-2 px-2 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-100 hover:text-canvas"
            >
              {t.cta2} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a href="#foerderung" className="px-2 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-brand-100 hover:text-canvas underline underline-offset-4">
              {t.cta3}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-6">
          <div className="rounded-card bg-canvas text-ink p-6 sm:p-8">
            <div role="tablist" aria-label={t.card.label} className="flex gap-1 mb-6 border-b border-border">
              {t.tabs.map((label, i) => (
                <button
                  key={label}
                  id={`battery-passport-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={tab === i}
                  aria-controls="battery-passport-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onKeyDown={(event) => handleTabKeyDown(event, i)}
                  onClick={() => { setTab(i); trackEvent("passport_tab", { tab: i === 0 ? "pass" : "qr" }); }}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] -mb-px border-b-2 transition-colors ${tab === i ? "border-brand-600 text-brand-700" : "border-transparent text-ink-tertiary hover:text-ink"}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === 0 ? (
              <div id="battery-passport-panel" role="tabpanel" aria-labelledby={`battery-passport-tab-${tab}`} tabIndex={0}>
                <div className="flex items-start justify-between mb-7">
                  <div>
                    <p className="text-marke text-ink-tertiary uppercase tracking-[0.08em] font-semibold mb-1">{t.card.label}</p>
                    <p className="text-lg font-bold">{t.card.title}</p>
                    <p className="text-klein text-ink-tertiary font-mono mt-0.5">BP-2026-DE-00312</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-brand-50 border border-border rounded-btn px-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                    <span className="text-marke font-bold text-brand-700">{t.card.compliant}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-marke font-semibold text-ink-tertiary uppercase tracking-[0.08em]">{t.card.soh}</span>
                    <span className="text-3xl font-extrabold tabular-nums">87<span className="text-base text-ink-tertiary font-normal">%</span></span>
                  </div>
                  <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-brand-600" style={{ width: "87%" }} />
                  </div>
                  <p className="text-klein text-ink-tertiary mt-1.5">{t.card.sohSub}</p>
                </div>
                <dl>
                  {t.card.rows.map((row) => (
                    <div key={row.k} className="flex justify-between items-center border-t border-border py-3">
                      <dt className="text-xs text-ink-tertiary">{row.k}</dt>
                      <dd className="text-xs font-semibold tabular-nums">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <div id="battery-passport-panel" role="tabpanel" aria-labelledby={`battery-passport-tab-${tab}`} tabIndex={0} className="flex flex-col items-center text-center py-4">
                <div className="w-44 h-44 bg-ink rounded-btn flex items-center justify-center mb-5">
                  <svg className="w-36 h-36 text-canvas" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm8-2h7v7h-7V3zm2 2v3h3V5h-3zm-10 8h7v7H3v-7zm2 2v3h3v-3H5zm8 0h2v2h-2v-2zm2-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 4h2v2h-2v-2zm4-2h2v2h-2v-2zm-2 2h2v2h-2v-2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold mb-1">{t.card.qrTitle}</p>
                <p className="text-sm text-ink-secondary max-w-[34ch]">{t.scanHint}</p>
              </div>
            )}
            <p className="mt-6 border-t border-border pt-3 text-klein text-ink-tertiary">{t.sample}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
