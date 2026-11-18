/**
 * Datenkarte des Batteriepasses: Kategorien nach Anhang XIII × Zugriffsgruppen.
 * Vereinfachte Darstellung; "teilweise" heißt: Grundangaben öffentlich, Details nur für Berechtigte.
 */
type Access = "full" | "part" | "none";

const GROUPS = ["Öffentlich", "Berechtigtes Interesse", "Behörden & Kommission"];

const ROWS: { cat: string; ex: string; attrs: number; access: [Access, Access, Access]; dynamic?: boolean }[] = [
  { cat: "Allgemeine Informationen", ex: "Hersteller, Modell, Kategorie, Gewicht", attrs: 16, access: ["full", "full", "full"] },
  { cat: "Materialzusammensetzung", ex: "Chemie, kritische Rohstoffe, gefährliche Stoffe", attrs: 12, access: ["part", "full", "full"] },
  { cat: "CO₂-Fußabdruck", ex: "kg CO₂e/kWh, Leistungsklasse", attrs: 6, access: ["full", "full", "full"] },
  { cat: "Rezyklatanteil", ex: "Kobalt, Lithium, Nickel, Blei", attrs: 5, access: ["full", "full", "full"] },
  { cat: "Leistung & Haltbarkeit", ex: "Kapazität, State of Health, Ladezyklen", attrs: 22, access: ["part", "full", "full"], dynamic: true },
  { cat: "Sorgfaltspflicht Lieferkette", ex: "Due-Diligence-Bericht, Herkunft", attrs: 4, access: ["full", "full", "full"] },
  { cat: "Demontage & Sicherheit", ex: "Zerlegeschritte, Werkzeuge, Ersatzteile", attrs: 11, access: ["none", "full", "full"] },
  { cat: "Prüfberichte", ex: "Testergebnisse zur Konformität", attrs: 6, access: ["none", "none", "full"] },
];

const MAX_ATTRS = Math.max(...ROWS.map((r) => r.attrs));

function Dot({ a, decorative = false }: { a: Access; decorative?: boolean }) {
  const accessibilityProps = decorative
    ? { "aria-hidden": true as const }
    : { role: "img" as const, "aria-label": a === "full" ? "voll" : a === "part" ? "teilweise" : "kein Zugriff" };

  if (a === "full") return <span className="block w-4 h-4 rounded-full bg-brand-600" {...accessibilityProps} />;
  if (a === "part")
    return (
      <span className="block w-4 h-4 rounded-full border-2 border-brand-600 overflow-hidden" {...accessibilityProps}>
        <span className="block h-full w-1/2 bg-brand-600" />
      </span>
    );
  return <span className="block w-4 h-4 rounded-full border-2 border-border-strong" {...accessibilityProps} />;
}

export default function BatteryDataMap() {
  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
        <div>
          <p className="text-sm font-bold text-ink">Was im Batteriepass steht und wer es sieht</p>
          <p className="text-xs text-ink-tertiary">Datenkategorien nach Anhang XIII, Balken = Zahl der Attribute</p>
        </div>
        <ul className="flex gap-4 text-marke text-ink-secondary">
          <li className="flex items-center gap-1.5"><Dot a="full" decorative /> voll</li>
          <li className="flex items-center gap-1.5"><Dot a="part" decorative /> teilweise</li>
          <li className="flex items-center gap-1.5"><Dot a="none" decorative /> kein Zugriff</li>
        </ul>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[640px] border-separate border-spacing-y-1.5 text-left">
          <thead>
            <tr className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
              <th className="font-semibold pb-1">Kategorie</th>
              <th className="font-semibold pb-1 w-[22%]">Attribute</th>
              {GROUPS.map((g) => (
                <th key={g} className="font-semibold pb-1 text-center w-[13%]">{g}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.cat} className="group">
                <td className="rounded-l-btn bg-surface px-3 py-2.5 group-hover:bg-brand-50 transition-colors">
                  <p className="text-sm font-semibold text-ink flex items-center gap-2">
                    {r.cat}
                    {r.dynamic && <span className="rounded-btn bg-brand-700 px-1.5 py-0.5 text-marke font-bold uppercase tracking-[0.08em] text-canvas">laufend aktualisiert</span>}
                  </p>
                  <p className="text-marke text-ink-tertiary">{r.ex}</p>
                </td>
                <td className="bg-surface px-3 group-hover:bg-brand-50 transition-colors">
                  {/* Zellenbalken im Batterie-Look */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[2px]" aria-hidden="true">
                      {Array.from({ length: MAX_ATTRS }, (_, i) => (
                        <span key={i} className={`h-3 w-[5px] rounded-sm ${i < r.attrs ? "bg-brand-500" : "bg-border"}`} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-ink tabular-nums">{r.attrs}</span>
                  </div>
                </td>
                {r.access.map((a, i) => (
                  <td key={i} className={`bg-surface group-hover:bg-brand-50 transition-colors ${i === 2 ? "rounded-r-btn" : ""}`}>
                    <span className="flex justify-center"><Dot a={a} /></span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-4 text-marke text-ink-tertiary">
        Vereinfachte Darstellung mit gerundeten Attributzahlen. Maßgeblich sind Art. 77 und Anhang XIII der Batterieverordnung (EU) 2023/1542 sowie die delegierten Rechtsakte.
      </figcaption>
    </figure>
  );
}
