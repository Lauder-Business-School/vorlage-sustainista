import { CheckCircle2, CircleDashed, FileCheck2 } from "lucide-react";

/**
 * Illustrative Konzeptdarstellung eines Circular-Stock-Falls.
 * Reines HTML/CSS, keine realen Kundendaten, keine Interaktivität.
 */

const inputRows = [
  { k: "SKU", v: "TJ-4820-M" },
  { k: "Produktgruppe", v: "Übergangsjacken" },
  { k: "Menge", v: "3.200 Stück" },
  { k: "Gewicht", v: "2.240 kg" },
  { k: "Standort", v: "Zentrallager Ost" },
  { k: "Zustand", v: "Klassen A–C gemischt" },
  { k: "Aktueller Warenwert", v: "hinterlegt" },
  { k: "Bestandsgrund", v: "Saisonende" },
  { k: "Mögliche Märkte", v: "3 geprüft" },
  { k: "Partnerverfügbarkeit", v: "begrenzt" },
];

const checks = [
  "Wirtschaftliche Eignung",
  "Operative Machbarkeit",
  "Nachweisanforderungen",
  "Markenwirkung",
  "Kreislaufwirkung",
];

const rankedOptions = [
  { rank: "1", name: "Umlagerung / regulärer Abverkauf", note: "höchster Produkterhalt, Markt vorhanden" },
  { rank: "2", name: "Outlet", note: "Kanal verfügbar, Markenwirkung geprüft" },
  { rank: "3", name: "Reparatur + Resale", note: "abhängig von Zustandsklasse und Partnerkapazität" },
  { rank: "4", name: "Spende", note: "Nachweisanforderungen dokumentieren" },
  { rank: "5", name: "Remanufacturing", note: "nur für Teilmenge realistisch" },
];

export default function CircularStockShowcase() {
  return (
    <div className="relative">
      <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 bg-ink text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
        Illustratives Beispiel, keine realen Kundendaten
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4">
        {/* Eingabedaten */}
        <div className="bg-white border border-border rounded-card p-6 shadow-ambient-low">
          <p className="eyebrow mb-4">1 · Eingabedaten</p>
          <div className="border border-border rounded-card overflow-hidden">
            {inputRows.map((row, i) => (
              <div
                key={row.k}
                className={`flex justify-between items-center gap-3 px-3.5 py-2.5 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="text-[11px] text-ink-tertiary">{row.k}</span>
                <span className="text-[11px] font-semibold text-ink-secondary text-right">{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prüflogik */}
        <div className="bg-white border border-border rounded-card p-6 shadow-ambient-low">
          <p className="eyebrow mb-4">2 · Prüflogik</p>
          <ul className="space-y-3">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5 border border-border rounded-card px-3.5 py-3 bg-canvas">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium text-ink">{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-ink-tertiary leading-relaxed mt-4">
            Jede Option wird gegen dieselben Kriterien geprüft und die Prüfung dokumentiert.
          </p>
        </div>

        {/* Ergebnisdarstellung */}
        <div className="bg-white border border-border rounded-card p-6 shadow-ambient-low">
          <p className="eyebrow mb-4">3 · Ergebnis</p>
          <ol className="space-y-2 mb-4">
            {rankedOptions.map((o) => (
              <li key={o.rank} className="flex items-start gap-2.5 border border-border rounded-card px-3.5 py-2.5 bg-canvas">
                <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {o.rank}
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink">{o.name}</span>
                  <span className="block text-[11px] text-ink-tertiary leading-snug">{o.note}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="border border-brand-200 bg-brand-50 rounded-card p-3.5 space-y-1.5">
            <p className="flex items-center gap-2 text-[11px] text-ink-secondary">
              <FileCheck2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" aria-hidden="true" />
              Verantwortlich: Operations · Freigabe: Nachhaltigkeit/Compliance
            </p>
            <p className="flex items-center gap-2 text-[11px] text-ink-secondary">
              <CircleDashed className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" aria-hidden="true" />
              Offene Daten: Zustandsklassierung Teilmenge · Nachweise: Partnerbestätigung, Übergabe · Nächste Frist: definiert je Fall
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
