import type { Metadata } from "next";
import TrendradarShell from "@/components/trendradar/TrendradarShell";
import TrendCard, { Cite, Prose, TrendLinks } from "@/components/trendradar/TrendCard";
import { EDITORIAL, FORESIGHT, SOURCE_DATE_ISO, TRENDS } from "@/lib/trendradar";
import { seoTitle } from "@/lib/seo";

const URL = "https://www.example.invalid/trendradar/foresight-2035-2040";
const DESCRIPTION =
  "Acht Zukunftsfelder im Sustainista Trendradar bis 2040: Zustandsbelege, Demontagerobotik, Recycling, Materialforschung und lokale Umweltwirkungen.";

export const metadata: Metadata = {
  title: seoTitle("Foresight 2035–2040: Produktdaten und physische Welt"),
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { type: "article", locale: "de_AT", siteName: "Sustainista", title: "Trendradar Foresight 2035–2040", description: DESCRIPTION, url: URL, modifiedTime: SOURCE_DATE_ISO },
};

export default function ForesightPage() {
  const foresight = TRENDS.filter((t) => t.layer === "foresight");
  return (
    <TrendradarShell
      current="/trendradar/foresight-2035-2040"
      eyebrow="Trendradar · Foresight 2035–2040"
      title="Wenn Produktdaten bis 2040 mit der physischen Welt zusammenarbeiten"
      lead={<Prose paras={EDITORIAL.foresightText.intro} className="[&_p]:text-lg" />}
      cta="Daten und Partner für langfristige Möglichkeiten prüfen"
    >
      <section className="py-16 bg-canvas">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="mb-10 rounded-card border-2 border-dashed border-brand-600 bg-brand-50 p-5 text-sm text-ink leading-relaxed">
            <b>Planungshorizont, keine Erfolgswahrscheinlichkeit.</b> Alle acht Felder sind Entwicklungshypothesen mit niedriger Confidence für den
            langfristigen Einsatz. Einzelne Bausteine existieren heute; die Jahre 2035 und 2040 in den Szenarien sind keine Fristen und keine zugesagten Einführungsdaten.
          </p>
          <div className="space-y-12">
            {EDITORIAL.foresightText.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl font-black text-ink tracking-tight mb-4">{s.heading}</h2>
                <Prose paras={s.paras} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-3">Die acht Foresight-Karten</h2>
          <p className="text-ink-secondary max-w-[72ch] mb-8">
            Je Karte: technischer Ausgangspunkt, eigene Erweiterungshypothese, Gegenargument, heutige Prüfung mit Beobachtungssignalen und beide Szenarien.
          </p>
          <div className="space-y-3">
            {foresight.map((t) => <TrendCard key={t.id} trend={t} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-3">Heute sinnvoll vorbereiten</h2>
          <p className="text-ink-secondary max-w-[72ch] mb-8">
            Vorbereitungsvorschläge. Zuständigkeit und Aufwand werden anhand realer Kundenfälle festgelegt; ein langfristiger Trend begründet allein keine aktuelle Investitionsentscheidung.
          </p>
          <div className="overflow-x-auto rounded-card border border-border">
            <table className="w-full min-w-[820px] text-sm">
              <thead className="bg-brand-50 text-left">
                <tr>
                  {["Trend", "Möglicher Beitrag von Sustainista", "Heute sinnvoll vorbereiten", "Wesentliche Partnerabhängigkeit"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-800">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {FORESIGHT.preparation.map((p) => (
                  <tr key={p.id} className="align-top">
                    <th scope="row" className="px-4 py-3 text-left font-bold text-ink whitespace-nowrap"><TrendLinks text={p.id} /></th>
                    <td className="px-4 py-3 text-ink-secondary">{p.contribution}</td>
                    <td className="px-4 py-3 text-ink-secondary">{p.prepare}</td>
                    <td className="px-4 py-3 text-ink-secondary">{p.partners}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-8">Drei Entwicklungsszenarien statt einer sicheren Vorhersage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {FORESIGHT.scenarios.map((s, i) => (
              <article key={s.title} className="rounded-card border border-border bg-canvas p-6">
                <p className="text-5xl font-black text-brand-500 mb-2 tabular-nums" aria-hidden="true">0{i + 1}</p>
                <h3 className="text-lg font-extrabold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed"><Cite text={s.text} /></p>
              </article>
            ))}
          </div>
          <p className="text-sm text-ink-secondary max-w-[80ch] leading-relaxed"><Cite text={FORESIGHT.scenarioOutro} /></p>
          <p className="mt-8 text-base font-semibold text-ink max-w-[70ch]">{EDITORIAL.foresightText.cta}</p>
        </div>
      </section>
    </TrendradarShell>
  );
}
