import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Telescope } from "lucide-react";
import TrendradarShell from "@/components/trendradar/TrendradarShell";
import TrendRadar from "@/components/trendradar/TrendRadar";
import { Cite, TrendLinks } from "@/components/trendradar/TrendCard";
import {
  EDITION_LABEL, PRODUCT_LINKS, PRODUCT_MAPPING_APPROVED, PRODUCT_PLAN, RADAR_VERSION, REGULATORY, RINGS, SECTORS, SOURCE_DATE, SOURCE_DATE_ISO,
  TRENDS, ringIndex, trendsForSector,
} from "@/lib/trendradar";

const URL = "https://www.example.invalid/trendradar";
const DESCRIPTION =
  "Der Sustainista Trendradar ordnet 28 konkrete Trends bis 2040 ein: Produktpässe, CO₂-Daten, Kreislaufwirtschaft und kontrollierte KI. Mit Filtern, Trendkarten und Quellen.";

export const metadata: Metadata = {
  title: "Trendradar 2026–2040: 28 Trends für Produktdaten",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    title: "Sustainista Trendradar 2026–2040",
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "Sustainista Trendradar" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  name: "Sustainista Trendradar 2026–2040",
  description: DESCRIPTION,
  url: URL,
  inLanguage: "de",
  dateModified: SOURCE_DATE_ISO,
  version: RADAR_VERSION,
  isPartOf: { "@id": "https://www.example.invalid/#website" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: TRENDS.length,
    itemListElement: TRENDS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: `${t.id} ${t.title}`, url: `${URL}#${t.anchor}` })),
  },
};

export default function TrendradarPage() {
  const counts = RINGS.map((_, i) => TRENDS.filter((t) => ringIndex(t) === i).length);
  return (
    <TrendradarShell
      current="/trendradar"
      eyebrow={`Sustainista Trendradar · ${EDITION_LABEL}`}
      title={<>28 Trends, die Produkt&shy;daten bis 2040 verändern</>}
      lead={
        <p>
          Welche Grundlagen tragen heute, was lohnt ab 2027 einen Pilot, und was bleibt Forschung? Der Radar ordnet 20 Kerntrends bis 2036 und
          acht Foresight-Felder für 2035–2040 ein, jeweils mit konkreter Anwendung, Gegenargument und Primärquellen.
        </p>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── So lesen Sie den Radar ── */}
      <section className="py-14 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="sr-only">So lesen Sie den Radar</h2>
          <ol className="grid grid-cols-2 md:grid-cols-5 gap-px overflow-hidden rounded-card border border-border bg-border">
            {RINGS.map((r, i) => (
              <li key={r.key} className={`bg-canvas p-4 sm:p-5 ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                <p className="flex items-baseline justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-[0.08em] ${i === 4 ? "text-ink-secondary" : "text-brand-700"}`}>
                    Ring {i + 1} · {r.key}
                  </span>
                  <span className="text-2xl font-black text-ink tabular-nums">{counts[i]}</span>
                </p>
                <p className="text-sm font-bold text-ink mb-1">{r.label.split(" · ")[1]}</p>
                <p className="text-xs text-ink-secondary leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-ink-tertiary max-w-[90ch]">
            Ringe zeigen unseren eingeschätzten praktischen Einsatz für die betrachteten Kunden, keine gesetzlichen Fristen und keine Marktanteile.
            Winkel und Punktgröße haben keine Bedeutung. Handlung, Attraktivität, Reife und Confidence stehen getrennt auf jeder Karte.{" "}
            <Link href="/trendradar/methodik" className="font-semibold text-brand-700 underline underline-offset-2">Methodik nachlesen</Link>
          </p>
        </div>
      </section>

      {/* ── Interaktiver Radar ── */}
      <section className="pb-20 bg-canvas" aria-labelledby="radar-h">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="radar-h" className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-6">Radar erkunden</h2>
          <TrendRadar />
        </div>
      </section>

      {/* ── Themenvertiefungen ── */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Themenvertiefungen</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-10">Fünf Themenfelder, ein Foresight-Ausblick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SECTORS.map((s) => {
              const ts = trendsForSector(s.slug);
              return (
                <Link key={s.slug} href={`/trendradar/${s.slug}`} className="group flex flex-col rounded-card border border-border bg-canvas p-6 hover:border-brand-600 hover:shadow-ambient-low transition-all">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-2">{ts.length} Trends · {ts.map((t) => t.id).join(", ")}</p>
                  <h3 className="text-lg font-extrabold text-ink mb-2">{s.short}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4 flex-1">{s.lead}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    {s.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
            <Link href="/trendradar/foresight-2035-2040" className="group flex flex-col rounded-card border-2 border-dashed border-brand-600 bg-canvas p-6 hover:bg-brand-50 transition-colors">
              <Telescope className="h-6 w-6 text-brand-700 mb-3" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-ink mb-2">Foresight 2035–2040</h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4 flex-1">
                Acht Anwendungshypothesen mit heutigem technischem Ausgangspunkt, Vorbereitung, Szenarien und Beobachtungssignalen.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Daten und Partner für langfristige Möglichkeiten prüfen <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Regulatorische Orientierung ── */}
      <section className="py-20 bg-canvas" id="regulatorik">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Regulatorische Orientierung</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-3">Fristen getrennt vom Radar</h2>
          <p className="text-ink-secondary max-w-[70ch] mb-10">
            Ein Radarring ist keine gesetzliche Frist. Pflichten hängen an Produktgruppe, Rolle und Rechtsakt. Rechtsstand: geprüfte EU-Quellen am {SOURCE_DATE};
            nationale Umsetzung und individuelle Anwendbarkeit sind vor einer Entscheidung zusätzlich zu prüfen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REGULATORY.map((r) => (
              <article key={r.title} className="rounded-card border border-border bg-canvas p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-extrabold text-ink">{r.title}</h3>
                  <span className="rounded-btn bg-brand-50 px-2 py-0.5 text-[11px] font-bold text-brand-800">{r.date}</span>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-tertiary mb-2">{r.status}</p>
                <p className="text-sm text-ink-secondary leading-relaxed"><Cite text={r.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Produktbezug ── */}
      <section className="py-20 bg-surface border-t border-border" id="produkte">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Produktbezug</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-3">Deine eigenen Ideen</h2>
          <p className="text-ink-secondary max-w-[70ch] mb-10">
            Die ursprüngliche Produktplanung ist nicht Teil dieser Kursvorlage. Ergänze hier eigene, fiktive Ideen.
          </p>
          <div className="overflow-x-auto rounded-card border border-border bg-canvas">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-brand-50 text-left">
                <tr>
                  {["Angebot", "Zuerst", "Nächster Ausbau", "Prüfbarer Nachweis"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-800">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {PRODUCT_PLAN.products.map((p) => (
                  <tr key={p.name} className="align-top">
                    <th scope="row" className="px-4 py-3 text-left">
                      <Link href={PRODUCT_LINKS[p.name]} className="font-bold text-ink hover:text-brand-700 underline decoration-border underline-offset-2">{p.name}</Link>
                    </th>
                    <td className="px-4 py-3 text-ink-secondary"><TrendLinks text={p.first} /></td>
                    <td className="px-4 py-3 text-ink-secondary"><TrendLinks text={p.next} /></td>
                    <td className="px-4 py-3 text-ink-secondary">{p.proof}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </TrendradarShell>
  );
}
