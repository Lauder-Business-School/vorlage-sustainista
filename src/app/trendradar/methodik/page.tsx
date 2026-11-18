import type { Metadata } from "next";
import TrendradarShell from "@/components/trendradar/TrendradarShell";
import { Cite, Prose } from "@/components/trendradar/TrendCard";
import { EDITORIAL, PRODUCT_MAPPING_APPROVED, RADAR_VERSION, RINGS, SOURCES, SOURCE_DATE, TRENDS, ringIndex } from "@/lib/trendradar";

const URL = "https://www.example.invalid/trendradar/methodik";
const DESCRIPTION =
  "Wie der Sustainista Trendradar bewertet: Zeitringe, Attraktivität, Reife, Confidence, Handlungsempfehlungen, Review-Raster, Versionsarchiv und alle 49 Primärquellen.";

export const metadata: Metadata = {
  title: "Trendradar Methodik, Quellen und Versionsarchiv",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "de_AT", siteName: "Sustainista", title: "Trendradar: Methodik und Quellen", description: DESCRIPTION, url: URL },
};

const SCALES = [
  { name: "Attraktivität", levels: [
    ["Hoch", "Mehrere relevante Kundenprozesse oder ein konkreter Pflichtanlass werden unmittelbar unterstützt."],
    ["Mittel", "Nutzen für eine klar eingegrenzte Branche oder erst mit beteiligten Partnern."],
    ["Niedrig", "Ein Kundenvorgang oder eine wirtschaftliche Nachfrage ist noch nicht erkennbar."],
  ] },
  { name: "Technische Reife", levels: [
    ["Hoch", "Standards, Werkzeuge und eine eingegrenzte Implementierung sind verfügbar."],
    ["Mittel", "Bausteine sind verfügbar; Integration, Daten oder Anerkennung fehlen teilweise."],
    ["Niedrig", "Einschlägige Gesamtanwendungen sind überwiegend Forschungsfragen."],
  ] },
  { name: "Confidence", levels: [
    ["Hoch", "Primärquellen und konkret verfügbare Grundlagen tragen die Einordnung; Grenzen sind bestimmbar."],
    ["Mittel", "Plausible Quellenlage mit wesentlichen Partner-, Daten- oder Integrationsabhängigkeiten."],
    ["Niedrig", "Anwendung und Zeithorizont beruhen wesentlich auf einer Entwicklungshypothese."],
  ] },
] as const;

const ACTIONS = [
  ["Aufbauen", "Eine gemeinsame Grundlage priorisieren."],
  ["Pilotieren", "Einen begrenzten Anwendungsfall mit überprüfbaren Messgrößen durchführen."],
  ["Beobachten", "Verlangt einen definierten externen Auslöser."],
  ["Erkunden", "Eine Forschungsfrage ohne Produktzusage."],
] as const;

/** Review-Raster: Rollen aus dem Briefing; keine erfundene Prüfung, keine benannten Personen */
const REVIEW: { role: string; scope: string; open: string; date?: string; done?: boolean; reason?: string }[] = [
  { role: "Produktverantwortung", scope: "Portfolio und Kundennutzen", open: "Keine. Funktionsstatus je Angebot wird bei Pilotresultaten nachgetragen.", date: PRODUCT_MAPPING_APPROVED, done: true, reason: "Produktzuordnung der 28 Trendkarten intern bestätigt" },
  { role: "Fachperson Regulatorik", scope: "Rechtliche Aussagen und Termine", open: "Nationale Umsetzung und Detailakte nach dem Quellenstand nachziehen." },
  { role: "Technische Verantwortung", scope: "Machbarkeit und Datenrechte", open: "Dritte unabhängige Quellenfamilie für Produktidentität (T05) ergänzen." },
  { role: "Redaktion", scope: "Versionen, Links, Änderungsgründe", open: "Quellenlinks quartalsweise prüfen; Foresight-Felder jährlich neu bewerten." },
];

export default function MethodikPage() {
  const ringCounts = RINGS.map((_, i) => TRENDS.filter((t) => ringIndex(t) === i).length);
  return (
    <TrendradarShell
      current="/trendradar/methodik"
      eyebrow="Trendradar · Methodik"
      title="Wie wir einordnen, und was wir nicht behaupten"
      lead={<p>Ringe, Bewertungsmaßstäbe, Quellenregeln, Zuständigkeiten und Versionsarchiv. Damit jede Einordnung nachvollziehbar und widerlegbar bleibt.</p>}
      cta="Einordnung gemeinsam nachvollziehen"
    >
      <section className="py-16 bg-canvas">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-6">Entscheidungsfrage und Vorgehen</h2>
          <Prose paras={EDITORIAL.method} />
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-8">Bewertungsmaßstäbe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {SCALES.map((s) => (
              <div key={s.name} className="rounded-card border border-border bg-canvas p-5">
                <h3 className="text-base font-extrabold text-ink mb-4">{s.name}</h3>
                <dl className="space-y-3">
                  {s.levels.map(([l, d]) => (
                    <div key={l}>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700">{l}</dt>
                      <dd className="text-sm text-ink-secondary leading-relaxed">{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-extrabold text-ink mb-4">Handlungsempfehlungen</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {ACTIONS.map(([a, d]) => (
              <div key={a} className="rounded-btn border border-border bg-canvas p-4">
                <dt className="font-bold text-ink mb-1">{a}</dt>
                <dd className="text-sm text-ink-secondary">{d}</dd>
              </div>
            ))}
          </dl>
          <h3 className="text-lg font-extrabold text-ink mb-4">Die fünf Zeitringe</h3>
          <ul className="space-y-3">
            {RINGS.map((r, i) => (
              <li key={r.key} className="flex gap-4 rounded-btn border border-border bg-canvas p-4">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${i === 4 ? "border-2 border-dashed border-brand-600 text-brand-700" : "bg-brand-600 text-canvas"}`}>{ringCounts[i]}</span>
                <span>
                  <span className="block font-bold text-ink">{r.label}</span>
                  <span className="block text-sm text-ink-secondary leading-relaxed">{r.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-3">Review-Raster</h2>
          <p className="text-ink-secondary max-w-[72ch] mb-6">
            {EDITORIAL.reviewRhythm} Die Rollen sind vorgeschlagen; konkrete Personen werden intern festgelegt. Eine erfolgte Fachprüfung wird erst eingetragen, wenn sie stattgefunden hat.
          </p>
          <div className="overflow-x-auto rounded-card border border-border">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-brand-50 text-left">
                <tr>
                  {["Verantwortungsrolle", "Prüfbereich", "Prüfdatum", "Status", "Offene Frage", "Änderungsgrund"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-800">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {REVIEW.map((r) => (
                  <tr key={r.role} className="align-top">
                    <th scope="row" className="px-4 py-3 text-left font-bold text-ink">{r.role}</th>
                    <td className="px-4 py-3 text-ink-secondary">{r.scope}</td>
                    <td className={`px-4 py-3 ${r.date ? "text-ink" : "text-ink-tertiary"}`}>{r.date ?? "noch offen"}</td>
                    <td className="px-4 py-3">
                      {r.done ? (
                        <span className="rounded-btn bg-brand-100 px-2 py-0.5 text-[11px] font-semibold text-brand-800">Zugestimmt</span>
                      ) : (
                        <span className="rounded-btn border border-dashed border-ink-tertiary px-2 py-0.5 text-[11px] font-semibold text-ink-secondary">Ausstehend</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-secondary">{r.open}</td>
                    <td className="px-4 py-3 text-ink-tertiary">{r.reason ?? "Erstveröffentlichung"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-ink tracking-tight mb-5">Versionsarchiv</h2>
            <ol className="space-y-4">
              <li className="rounded-card border border-brand-600 bg-canvas p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700 mb-1">Aktuell · Quellenstand {SOURCE_DATE}</p>
                <p className="font-extrabold text-ink mb-1">{RADAR_VERSION}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Erweiterung von 20 Kerntrends bis 2036 auf 28 Trends bis 2040: acht Foresight-Felder (T21–T28) im zusätzlichen Ring 2037–2040.
                  Keine Änderung der Ringzuordnung von T01–T20. Erste öffentliche Fassung auf example.invalid. Produktzuordnung am {PRODUCT_MAPPING_APPROVED} intern bestätigt.
                </p>
              </li>
              <li className="rounded-card border border-border bg-canvas p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1">Nächstes Review</p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Quartalsweise sowie bei relevanten Rechtsakten, Standardänderungen oder Pilotresultaten. Für jede Änderung werden Datum, Quelle,
                  alter und neuer Ring sowie Begründung gespeichert.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-black text-ink tracking-tight mb-5">Offene Annahmen und Grenzen</h2>
            <Prose paras={EDITORIAL.assumptions} className="[&_p]:text-sm" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-canvas" id="quellen">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-3">Quellenregister</h2>
          <p className="text-ink-secondary max-w-[72ch] mb-8">
            {SOURCES.length} Primärquellen, geprüft mit Stand {SOURCE_DATE}. Die Kennungen S01–S{SOURCES.length} verweisen aus Karten, Magazin und Themenseiten hierher.
            Hinweise zum Quellenzugang bleiben erhalten.
          </p>
          <ol className="divide-y divide-border rounded-card border border-border">
            {SOURCES.map((s) => (
              <li key={s.id} id={`quelle-${s.id.toLowerCase()}`} className="scroll-mt-32 grid grid-cols-[3.5rem_1fr] gap-3 p-4 target:bg-brand-50">
                <span className="text-sm font-black text-brand-700 tabular-nums">{s.id}</span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink leading-snug">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700 underline decoration-border underline-offset-2 break-words">{s.title}</a>
                  </p>
                  <p className="text-xs text-ink-secondary mt-0.5">{s.publisher} · {s.type}</p>
                  {s.note && <p className="text-xs text-ink-tertiary mt-1 leading-relaxed"><Cite text={s.note} /></p>}
                  {s.altUrl && (
                    <p className="text-xs mt-1">
                      <a href={s.altUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline underline-offset-2 break-all">Weiterer Fundort</a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </TrendradarShell>
  );
}
