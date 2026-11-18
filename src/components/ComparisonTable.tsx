import { CheckCircle2, XCircle } from "lucide-react";

type CellValue = string | "check" | "cross";

interface Row {
  feature: string;
  sustainista: CellValue;
  glacier: CellValue;
  watershed: CellValue;
}

const rows: Row[] = [
  {
    feature: "Entwickelt für",
    sustainista: "KMU 10–250 MA, Österreich & DACH",
    glacier: "Konzerne (Andritz, Voestalpine, A1)",
    watershed: "Fortune 500 (FedEx, Dell, BlackRock)",
  },
  {
    feature: "Sprache & Support",
    sustainista: "Deutsch-first, Wien-basiertes Team",
    glacier: "Englisch/Deutsch",
    watershed: "Englisch only, US-Zeitzone",
  },
  {
    feature: "CO₂-Faktoren",
    sustainista: "UBA Österreich: 0,152 kg/kWh Strom",
    glacier: "EU-Durchschnitt",
    watershed: "US-EPA-Faktoren",
  },
  {
    feature: "CSRD für KMU",
    sustainista: "check",
    glacier: "cross",
    watershed: "cross",
  },
  {
    feature: "Scope 3 automatisiert",
    sustainista: "check",
    glacier: "Manuell & beratergestützt",
    watershed: "check",
  },
  {
    feature: "Österr. Förderprüfung",
    sustainista: "check",
    glacier: "cross",
    watershed: "cross",
  },
  {
    feature: "Erste Ergebnisse",
    sustainista: "4–6 Wochen",
    glacier: "3–6 Monate",
    watershed: "6–12 Monate",
  },
  {
    feature: "KMU-Einstiegspaket",
    sustainista: "Verfügbar, förderfähig",
    glacier: "Enterprise only",
    watershed: "Enterprise only",
  },
];

/* Desktop und Mobil greifen auf dieselben drei Spalten zu, in derselben
   Reihenfolge, das Array hält die Reihenfolge einmal fest, statt sie an
   drei Stellen zu wiederholen. */
const COLUMNS = [
  { key: "sustainista", label: "Sustainista" },
  { key: "glacier", label: "Glacier AI (AT)" },
  { key: "watershed", label: "Watershed (USA)" },
] as const;

function CellContent({ value, own }: { value: CellValue; own: boolean }) {
  if (value === "check") {
    return (
      <span className="flex items-center justify-center sm:justify-start gap-1.5">
        <CheckCircle2 className="text-brand-600 shrink-0" size={18} strokeWidth={1.5} />
        {own && <span className="text-sm text-brand-700 font-medium hidden sm:inline">Ja</span>}
      </span>
    );
  }
  if (value === "cross") {
    return <XCircle className="text-ink-tertiary mx-auto sm:mx-0" size={18} strokeWidth={1.5} />;
  }
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Marktvergleich</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Speziell für österreichische KMU gebaut
          </h2>
          <p className="text-base text-ink-secondary max-w-2xl mx-auto leading-relaxed">
            Glacier AI arbeitet mit Andritz, Voestalpine und A1. Watershed mit Fortune-500-Konzernen.
            Sustainista ist das einzige Tool, das speziell für KMU in Österreich entwickelt wurde.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 text-sm font-semibold text-ink-secondary w-[28%]">
                  Feature
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className={`py-4 px-4 text-sm font-semibold w-[24%] ${
                      col.key === "sustainista"
                        ? "text-brand-700 bg-brand-50 rounded-t-[6px]"
                        : "text-ink-secondary"
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-canvas"}`}>
                  <td className="py-3.5 pr-6 text-sm font-medium text-ink">{row.feature}</td>
                  {COLUMNS.map((col) => (
                    <td
                      key={col.key}
                      className={`py-3.5 px-4 text-sm ${
                        col.key === "sustainista"
                          ? "text-brand-700 font-medium bg-brand-50"
                          : "text-ink-secondary"
                      }`}
                    >
                      <CellContent value={row[col.key]} own={col.key === "sustainista"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {rows.map((row) => (
            <div key={row.feature} className="rounded-card border border-border bg-white overflow-hidden">
              <div className="bg-surface px-4 py-2.5 border-b border-border">
                <span className="text-sm font-semibold text-ink">{row.feature}</span>
              </div>
              <div className="divide-y divide-border">
                {COLUMNS.map((col) => (
                  <div
                    key={col.key}
                    className={`flex items-center justify-between px-4 py-3 ${
                      col.key === "sustainista" ? "bg-brand-50" : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-medium uppercase tracking-wide ${
                        col.key === "sustainista" ? "text-brand-700 font-semibold" : "text-ink-tertiary"
                      }`}
                    >
                      {col.label}
                    </span>
                    <span
                      className={`text-sm text-right max-w-[60%] ${
                        col.key === "sustainista" ? "text-brand-700 font-medium" : "text-ink-secondary"
                      }`}
                    >
                      <CellContent value={row[col.key]} own={col.key === "sustainista"} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-tertiary text-center">
          *Marktanalyse Sustainista, Stand Juni 2026. Glacier AI und Watershed sind eingetragene Marken ihrer jeweiligen Eigentümer.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-btn bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
          >
            Kostenlose CSRD-Beratung anfragen
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
