"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ScanLine } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import McpUrlKopieren from "@/components/plattform/McpUrlKopieren";
import { MCP_URL } from "@/lib/plattform";

/**
 * Startseiten-Einstieg in die zwei Software-Produkte und den KI-Zugang. Aussagen wie auf /plattform
 * (Quelle: lib/plattform.ts und produkte/nachhaltigkeitsbericht/content.ts), keine neuen Zusagen.
 */

const BERICHT_BILD = { src: "/produkte/nachhaltigkeitsbericht/01-uebersicht.webp", width: 1180, height: 900 };

const tx = {
  de: {
    eyebrow: "Software-Plattform",
    h2a: "Zwei Pflichten.",
    h2b: "Eine Plattform.",
    sub: "Produktpass und Nachhaltigkeitsbericht folgen derselben Logik: Daten sammeln, belegen, prüfen, freigeben. In unserer Software trägt jeder Wert seine Herkunft, und Menschen haben das letzte Wort.",
    alle: "Plattform ansehen",
    produkt: "Produkt",
    dpp: {
      marke: "live auf dpp.example.invalid",
      titel: "Digitaler Produktpass",
      text: "EU-Batteriepass und ESPR-Pässe für Hersteller, Importeure und Händler. Pflicht für Batterien ab 18. Februar 2027.",
      punkte: ["Anhang XIII und EN 18223", "QR-Code und GS1 Digital Link je Stück", "Schnittstelle nach EN 18222"],
      link: "Zum Produktpass",
      href: "/produkte/digitaler-produktpass",
      pass: { kopf: "Batteriepass · Entwurf", ok: "bestätigt", ki: "KI-Vorschlag", hinweis: "Gesperrt, bis ein Mensch den KI-Vorschlag bestätigt. Illustration mit Demodaten.", aria: "Illustration: Batteriepass mit Herkunft je Wert" },
      zeilen: [
        { feld: "Hersteller", wert: "Muster Batterien GmbH", ki: false },
        { feld: "Batteriechemie", wert: "LFP", ki: false },
        { feld: "CO₂-Fußabdruck", wert: "aus Datenblatt gelesen", ki: true },
      ],
    },
    bericht: {
      marke: "VS · GRI",
      titel: "Nachhaltigkeitsbericht",
      text: "Für Unternehmen, die von Kunden, Banken oder Versicherungen nach Nachhaltigkeitsangaben gefragt werden.",
      punkte: ["Jeder Wert mit Beleg", "Vier-Augen-Prüfung vor der Freigabe", "Export als PDF, DOCX und XBRL"],
      link: "Zum Nachhaltigkeitsbericht",
      href: "/produkte/nachhaltigkeitsbericht",
      alt: "Übersicht der GRI-Datenpunkte der Muster GmbH: je Zeile der aktuelle Wert und der Status bestätigt oder vorgeschlagen.",
      caption: "Aufnahme der Software. Demodaten der Muster GmbH.",
    },
    ki: {
      badge: "Neu",
      titel: "Ihr Assistent liest direkt aus der Plattform.",
      text: "Eine URL als Connector in Claude oder ChatGPT eintragen. Ohne Installation, ohne Schlüssel, nur lesend.",
      live: "Live ausprobieren",
      kopieren: "URL kopieren",
      kopiert: "Kopiert",
    },
  },
  en: {
    eyebrow: "Software platform",
    h2a: "Two obligations.",
    h2b: "One platform.",
    sub: "Product passport and sustainability report follow the same logic: collect data, evidence it, review it, sign it off. In our software every value carries its origin, and people have the final say.",
    alle: "View the platform",
    produkt: "Product",
    dpp: {
      marke: "live at dpp.example.invalid",
      titel: "Digital Product Passport",
      text: "EU battery passport and ESPR passports for manufacturers, importers and distributors. Mandatory for batteries from 18 February 2027.",
      punkte: ["Annex XIII and EN 18223", "QR code and GS1 Digital Link per item", "Interface under EN 18222"],
      link: "Product passport",
      href: "/produkte/digitaler-produktpass",
      pass: { kopf: "Battery passport · draft", ok: "confirmed", ki: "AI suggestion", hinweis: "Locked until a person confirms the AI suggestion. Illustration with demo data.", aria: "Illustration: battery passport with origin per value" },
      zeilen: [
        { feld: "Manufacturer", wert: "Muster Batterien GmbH", ki: false },
        { feld: "Battery chemistry", wert: "LFP", ki: false },
        { feld: "Carbon footprint", wert: "read from data sheet", ki: true },
      ],
    },
    bericht: {
      marke: "VS · GRI",
      titel: "Sustainability Report",
      text: "For companies that customers, banks or insurers ask for sustainability information.",
      punkte: ["Every value with evidence", "Four-eyes review before sign-off", "Export as PDF, DOCX and XBRL"],
      link: "Sustainability report",
      href: "/produkte/nachhaltigkeitsbericht/en",
      alt: "Overview of the GRI data points of Muster GmbH: each row shows the current value and the status confirmed or proposed.",
      caption: "Screenshot of the software. Demo data of Muster GmbH.",
    },
    ki: {
      badge: "New",
      titel: "Your assistant reads straight from the platform.",
      text: "Add one URL as a connector in Claude or ChatGPT. No installation, no key, read-only.",
      live: "Try it live",
      kopieren: "Copy URL",
      kopiert: "Copied",
    },
  },
};

function Punkte({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((p) => (
        <li key={p} className="flex gap-2.5 text-sm text-ink leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export default function PlattformTeaser() {
  const { locale } = useLanguage();
  const t = tx[locale];
  const karte = "group flex flex-col rounded-card border border-border bg-canvas transition-shadow hover:shadow-ambient-low focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

  return (
    <section className="py-20 sm:py-28 border-y border-border bg-surface" aria-labelledby="plattform-teaser">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5 block">{t.eyebrow}</span>
            <h2 id="plattform-teaser" className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.05]">
              {t.h2a} <span className="text-brand-600">{t.h2b}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-ink-secondary leading-relaxed mb-4">{t.sub}</p>
            <Link href="/plattform" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
              {t.alle} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Digitaler Produktpass */}
          <Link href={t.dpp.href} className={karte}>
            <div className="p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.produkt} 01</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                  {t.dpp.marke}
                </span>
              </div>
              <h3 className="mb-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand-700">{t.dpp.titel}</h3>
              <p className="mb-5 text-sm text-ink-secondary leading-relaxed">{t.dpp.text}</p>
              <Punkte items={t.dpp.punkte} />
            </div>
            <div className="mt-auto border-t border-border bg-surface/60 px-7 pt-6 sm:px-8" role="img" aria-label={t.dpp.pass.aria}>
              <div className="rounded-t-card border border-b-0 border-border bg-canvas px-5 pt-4">
                <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.dpp.pass.kopf}</p>
                    <p className="font-mono text-sm font-semibold text-ink">ATDEMODEMO0002</p>
                  </div>
                  <ScanLine className="h-7 w-7 text-brand-600" aria-hidden="true" />
                </div>
                {t.dpp.zeilen.map((z) => (
                  <div key={z.feld} className="flex items-center justify-between gap-3 border-b border-border py-2.5 last:border-b-0">
                    <div className="min-w-0">
                      <p className="text-xs text-ink-tertiary">{z.feld}</p>
                      <p className="truncate text-sm font-medium text-ink">{z.wert}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${z.ki ? "border border-caution/40 text-caution" : "bg-brand-50 text-brand-700"}`}>
                      {z.ki ? t.dpp.pass.ki : t.dpp.pass.ok}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="flex flex-col gap-3 border-t border-border px-7 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8">
              <span className="text-xs text-ink-tertiary leading-relaxed">{t.dpp.pass.hinweis}</span>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700">
                {t.dpp.link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </p>
          </Link>

          {/* Nachhaltigkeitsbericht */}
          <Link href={t.bericht.href} className={karte}>
            <div className="p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.produkt} 02</span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-ink-secondary">{t.bericht.marke}</span>
              </div>
              <h3 className="mb-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand-700">{t.bericht.titel}</h3>
              <p className="mb-5 text-sm text-ink-secondary leading-relaxed">{t.bericht.text}</p>
              <Punkte items={t.bericht.punkte} />
            </div>
            <div className="mt-auto border-t border-border bg-surface/60 px-7 pt-6 sm:px-8">
              <div className="h-[13.25rem] overflow-hidden rounded-t-card border border-b-0 border-border bg-canvas">
                <Image
                  src={BERICHT_BILD.src}
                  width={BERICHT_BILD.width}
                  height={BERICHT_BILD.height}
                  alt={t.bericht.alt}
                  sizes="(min-width: 1024px) 500px, 92vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <p className="flex flex-col gap-3 border-t border-border px-7 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8">
              <span className="text-xs text-ink-tertiary leading-relaxed">{t.bericht.caption}</span>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700">
                {t.bericht.link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </p>
          </Link>
        </div>

        {/* KI-Zugang */}
        <div className="mt-5 grid gap-6 rounded-card border border-border bg-canvas p-7 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="min-w-0 lg:col-span-6">
            <p className="mb-2 flex items-center gap-2.5">
              <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{t.ki.badge}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Claude · ChatGPT · MCP</span>
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-ink">{t.ki.titel}</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">{t.ki.text}</p>
          </div>
          <div className="min-w-0 lg:col-span-6">
            <McpUrlKopieren url={MCP_URL} label={t.ki.kopieren} kopiert={t.ki.kopiert} />
            <Link href="/plattform/ki-zugang#live" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
              <Play className="h-4 w-4" aria-hidden="true" /> {t.ki.live}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
