type Boundary = "gate" | "grave" | "full";

const MODULES = [
  { code: "A1–A3", title: "Herstellung", body: "Rohstoffe, Transport ins Werk, Produktion", grow: 3 },
  { code: "A4–A5", title: "Lieferung", body: "Transport zum Kunden, Einbau", grow: 2 },
  { code: "B1–B7", title: "Nutzung", body: "Energie, Wartung, Reparatur, Ersatz", grow: 3 },
  { code: "C1–C4", title: "Entsorgung", body: "Rückbau, Sortierung, Recycling, Deponie", grow: 2.5 },
  { code: "D", title: "Gutschriften", body: "Recyclingpotenzial jenseits der Systemgrenze", grow: 2 },
];

const INCLUDED: Record<Boundary, number> = { gate: 1, grave: 4, full: 5 };
const BOUNDARY_MODULES: Record<Boundary, string> = { gate: "A1–A3", grave: "A–C", full: "A–D" };
const BOUNDARY_LABEL: Record<Boundary, string> = {
  gate: "Cradle-to-Gate",
  grave: "Cradle-to-Grave",
  full: "Cradle-to-Grave + Modul D",
};

/** Lebenszyklusmodule nach EN 15804 mit markierter Systemgrenze. */
export default function LifecycleBand({ boundary = "full", compact = false }: { boundary?: Boundary; compact?: boolean }) {
  const included = INCLUDED[boundary];

  if (compact) {
    return (
      <div aria-label={`Systemgrenze: ${BOUNDARY_LABEL[boundary]}`}>
        <div className="flex gap-0.5" aria-hidden="true">
          {MODULES.map((m, i) => (
            <span
              key={m.code}
              className={`h-2 rounded-sm ${i < included ? (i === 4 ? "bg-brand-400" : "bg-brand-600") : "bg-border"}`}
              style={{ flexGrow: m.grow, flexBasis: 0 }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">
          <span>{BOUNDARY_LABEL[boundary]}</span>
          <span>{BOUNDARY_MODULES[boundary]}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
      <div className="min-w-[720px]">
        {/* Systemgrenze als Klammer. flexBasis gleicht die fehlenden Spaltabstände aus, damit sie exakt über den Modulen sitzt. */}
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700">Systemgrenze · {BOUNDARY_LABEL[boundary]}</p>
        <div className="flex gap-2 mb-3" aria-hidden="true">
          <span
            className="h-3 rounded-t-md border-2 border-b-0 border-brand-600"
            style={{ flexGrow: MODULES.slice(0, included).reduce((s, m) => s + m.grow, 0), flexBasis: (included - 1) * 8 }}
          />
          {MODULES.slice(included).map((m) => (
            <span key={m.code} style={{ flexGrow: m.grow, flexBasis: 0 }} />
          ))}
        </div>

        <ol className="flex gap-2">
          {MODULES.map((m, i) => {
            const inside = i < included;
            const isD = i === 4;
            return (
              <li
                key={m.code}
                style={{ flexGrow: m.grow, flexBasis: 0 }}
                className={`relative rounded-card border p-4 ${
                  inside
                    ? isD
                      ? "border-dashed border-brand-400 bg-brand-50"
                      : "border-brand-600/40 bg-gradient-to-b from-brand-50 to-canvas"
                    : "border-border bg-surface opacity-80"
                }`}
              >
                <span className={`inline-block rounded-btn px-2 py-0.5 text-[11px] font-bold tabular-nums ${inside ? "bg-brand-700 text-canvas" : "bg-border text-ink-secondary"}`}>
                  {m.code}
                </span>
                <p className="mt-3 text-sm font-bold text-ink">{m.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink">{m.body}</p>
                {i < MODULES.length - 1 && (
                  <span className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-brand-600" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
