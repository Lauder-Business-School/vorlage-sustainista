/**
 * Variantenvergleich über acht Wirkungskategorien nach EF 3.1.
 * Variante A ist die Referenz (= 100 %), Variante B relativ dazu. Werte illustrativ.
 * Farben: Fern Green (#4f772d) gegen kühles Blau (#2b6cb0), geprüft mit dem
 * Palettenvalidator (alle Checks bestanden); A zusätzlich gestrichelt.
 */
const CATS = [
  { label: "Klimawandel", b: 68 },
  { label: "Versauerung", b: 74 },
  { label: "Eutrophierung", b: 86 },
  { label: "Feinstaub", b: 71 },
  { label: "Wassernutzung", b: 93 },
  { label: "Mineralien & Metalle", b: 58 },
  { label: "Fossile Ressourcen", b: 66 },
  { label: "Landnutzung", b: 97 },
];

const BLUE = "#2b6cb0";
const SIZE = 560;
const C = SIZE / 2;
const R = 140;
const MAX = 120;

const point = (i: number, v: number) => {
  const a = (Math.PI * 2 * i) / CATS.length - Math.PI / 2;
  const r = (v / MAX) * R;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
};
const poly = (vals: number[]) => vals.map((v, i) => point(i, v).join(",")).join(" ");

export default function ImpactRadar() {
  const a = CATS.map(() => 100);
  const b = CATS.map((c) => c.b);

  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-6 shadow-ambient-low">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
          <p className="text-sm font-bold text-ink">Wirkungsprofil im Variantenvergleich</p>
          <p className="text-xs text-ink-tertiary">8 Kategorien nach EF 3.1, Variante A = 100 %</p>
        </div>
        <ul className="flex flex-col gap-1 text-xs text-ink-secondary">
          <li className="flex items-center gap-2">
            <svg width="22" height="8" aria-hidden="true"><line x1="0" y1="4" x2="22" y2="4" stroke={BLUE} strokeWidth="2" strokeDasharray="4 3" /></svg>
            A · Primäraluminium, Netzstrom
          </li>
          <li className="flex items-center gap-2">
            <svg width="22" height="8" aria-hidden="true"><line x1="0" y1="4" x2="22" y2="4" stroke="var(--color-brand-600)" strokeWidth="3" /></svg>
            B · Rezyklat, Ökostrom
          </li>
        </ul>
      </div>

      <svg viewBox={`${C - 268} ${C - 192} 536 386`} className="block w-full max-w-[560px] mx-auto h-auto" role="img" aria-label="Netzdiagramm: Variante B liegt in allen acht Kategorien unter Variante A, am deutlichsten bei Mineralien und Metallen sowie beim Klimawandel.">
        {[40, 80, 120].map((v) => (
          <polygon key={v} points={poly(CATS.map(() => v))} fill="none" stroke="var(--color-border)" strokeWidth="1" />
        ))}
        {CATS.map((_, i) => {
          const [x, y] = point(i, MAX);
          return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="var(--color-border)" strokeWidth="1" />;
        })}
        <text x={C + 4} y={C - (100 / MAX) * R - 4} fontSize="10" fill="var(--color-ink-tertiary)">100 %</text>

        <polygon points={poly(a)} fill={BLUE} fillOpacity="0.06" stroke={BLUE} strokeWidth="2" strokeDasharray="6 4" />
        <polygon points={poly(b)} fill="var(--color-brand-500)" fillOpacity="0.22" stroke="var(--color-brand-600)" strokeWidth="2.5" strokeLinejoin="round" />
        {b.map((v, i) => {
          const [x, y] = point(i, v);
          return (
            <circle key={i} cx={x} cy={y} r="5" fill="var(--color-brand-600)" stroke="var(--color-canvas)" strokeWidth="2">
              <title>{`${CATS[i].label}: B ${v} % von A`}</title>
            </circle>
          );
        })}

        {CATS.map((c, i) => {
          const [x, y] = point(i, MAX + 14);
          const anchor = Math.abs(x - C) < 8 ? "middle" : x > C ? "start" : "end";
          return (
            <text key={c.label} x={x} y={y - 6} textAnchor={anchor} fontSize="13" fill="var(--color-ink-secondary)">
              {c.label}
              <tspan x={x} dy="16" fontWeight="700" fill="var(--color-ink)">−{100 - c.b} %</tspan>
            </text>
          );
        })}
      </svg>

      <figcaption className="mt-2 text-[11px] text-ink-tertiary">
        Illustratives Beispiel. Die Verlagerung auf Rezyklat senkt die Klimawirkung, bewertet aber auch Wasser und Landnutzung mit, damit keine Wirkung unbemerkt in eine andere Kategorie wandert.
      </figcaption>
    </figure>
  );
}
