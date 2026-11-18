import { Globe, KeyRound, Landmark } from "lucide-react";

/**
 * Ein QR-Code, drei Sichten: Der Digitale Produktpass zeigt je nach Rolle unterschiedliche Daten.
 * Vereinfachte Darstellung des Zugriffskonzepts der ESPR.
 */
const TIERS = [
  {
    icon: Globe,
    title: "Öffentlich",
    who: "Kund:innen, Handel, Öffentlichkeit",
    attrs: ["Materialzusammensetzung", "CO₂-Fußabdruck", "Reparierbarkeit", "Rezyklatanteil", "Entsorgungshinweise"],
    tone: "border-brand-300 bg-brand-50",
    chip: "bg-canvas border-brand-200",
  },
  {
    icon: KeyRound,
    title: "Berechtigte Akteure",
    who: "Reparatur, Refurbishment, Recycling",
    attrs: ["Demontageanleitung", "Ersatzteilnummern", "Stoffliste nach Bauteil", "Sicherheitshinweise"],
    tone: "border-brand-500 bg-brand-100/60",
    chip: "bg-canvas border-brand-300",
  },
  {
    icon: Landmark,
    title: "Behörden",
    who: "Marktüberwachung, Zoll",
    attrs: ["Konformitätserklärung", "Prüfberichte", "Technische Dokumentation"],
    tone: "border-brand-700 bg-brand-700 text-canvas",
    chip: "bg-brand-800 border-brand-600 text-brand-50",
  },
];

// Deterministisches QR-Muster (21 × 21) mit drei Suchmustern
const N = 21;
const finder = (x: number, y: number) =>
  (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7);
const inFinder = (x: number, y: number) => {
  const fx = x < 7 ? x : x - (N - 7);
  const fy = y < 7 ? y : y - (N - 7);
  return fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4);
};
const CELLS: [number, number][] = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    const isSep = (x === 7 && (y < 8 || y >= N - 8)) || (y === 7 && (x < 8 || x >= N - 8)) || (x === N - 8 && y < 8) || (y === N - 8 && x < 8);
    const hash = (((x + 1) * 73856093) ^ ((y + 1) * 19349663)) >>> 0;
    const on = finder(x, y) ? inFinder(x, y) : !isSep && hash % 100 < 47;
    if (on) CELLS.push([x, y]);
  }
}

export default function DppAccessLayers() {
  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-8 shadow-ambient-low">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative p-4 rounded-card bg-white border-2 border-ink">
            <svg viewBox={`0 0 ${N} ${N}`} className="w-40 h-40" shapeRendering="crispEdges" role="img" aria-label="QR-Code des Produktpasses">
              {CELLS.map(([x, y]) => (
                <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--color-ink)" />
              ))}
            </svg>
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative h-3 w-3 rounded-full bg-brand-600" />
            </span>
          </div>
          <p className="mt-4 text-sm font-bold text-ink">Ein Code am Produkt</p>
          <p className="text-xs text-ink-tertiary">Die Rolle entscheidet, was sichtbar wird</p>
        </div>

        <ol className="relative space-y-3 lg:pl-8">
          {/* Verbindungslinie vom Code zu den Ebenen */}
          <span className="hidden lg:block absolute left-0 top-8 bottom-8 border-l-2 border-dashed border-brand-300" aria-hidden="true" />
          {TIERS.map(({ icon: Icon, title, who, attrs, tone, chip }, i) => (
            <li key={title} className={`relative rounded-card border p-4 sm:p-5 ${tone}`}>
              <span className="hidden lg:block absolute -left-8 top-1/2 w-8 border-t-2 border-dashed border-brand-300" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                <Icon className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                <p className="text-sm font-bold">{title}</p>
                <p className={`text-xs ${i === 2 ? "text-brand-100" : "text-ink-secondary"}`}>{who}</p>
                <span className={`ml-auto text-[10px] font-bold uppercase tracking-[0.08em] ${i === 2 ? "text-brand-200" : "text-ink-tertiary"}`}>
                  {i === 0 ? "ohne Login" : i === 1 ? "mit Berechtigung" : "auf Anfrage"}
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {attrs.map((a) => (
                  <li key={a} className={`rounded-btn border px-2 py-1 text-[11px] font-medium ${chip}`}>{a}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-6 text-[11px] text-ink-tertiary">
        Vereinfachte Darstellung. Welche Attribute je Produktgruppe Pflicht sind und wer sie sehen darf, legen die delegierten Rechtsakte der ESPR fest.
      </figcaption>
    </figure>
  );
}
