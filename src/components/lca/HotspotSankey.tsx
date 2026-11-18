import { CONTRIBUTIONS, TOTAL, fmt } from "./data";

const PHASES = [
  { id: "A1–A3", label: "Herstellung", modules: ["A1", "A2", "A3"] },
  { id: "A4", label: "Lieferung", modules: ["A4"] },
  { id: "B6", label: "Nutzung", modules: ["B6"] },
  { id: "C", label: "Entsorgung", modules: ["C"] },
];

const W = 980;
const TOP = 24;
const SRC_GAP = 12;
const PH_GAP = 16;
const USABLE = 400;
const K = (USABLE - (CONTRIBUTIONS.length - 1) * SRC_GAP) / TOTAL; // px pro kg

const X_SRC = 236;
const X_PH = 556;
const X_TOT = 826;
const NODE_W = 12;

const pct = (kg: number) => Math.round((kg / TOTAL) * 100);

/** Hotspot-Sankey: Beiträge zum Klimawandel je Quelle → Lebenszyklusphase → Gesamtergebnis. */
const band = (x0: number, y0: number, x1: number, y1: number, h: number) => {
  const mx = (x0 + x1) / 2;
  return `M${x0} ${y0} C${mx} ${y0}, ${mx} ${y1}, ${x1} ${y1} L${x1} ${y1 + h} C${mx} ${y1 + h}, ${mx} ${y0 + h}, ${x0} ${y0 + h} Z`;
};

/** Reine Layoutberechnung, einmal beim Laden des Moduls. */
function computeLayout() {
  // Quellen in Phasenreihenfolge, innerhalb der Phase nach Größe
  const sources = PHASES.flatMap((p) =>
    CONTRIBUTIONS.filter((c) => (p.modules as readonly string[]).includes(c.module)).sort((a, b) => b.kg - a.kg),
  );
  let y = TOP;
  const src = sources.map((c) => {
    const h = c.kg * K;
    const node = { ...c, y, h };
    y += h + SRC_GAP;
    return node;
  });

  const phaseTotals = PHASES.map((p) => src.filter((s) => (p.modules as readonly string[]).includes(s.module)).reduce((a, s) => a + s.kg, 0));
  const phaseBlock = phaseTotals.reduce((a, t) => a + t * K, 0) + (PHASES.length - 1) * PH_GAP;
  let py = TOP + (y - SRC_GAP - TOP - phaseBlock) / 2;
  const ph = PHASES.map((p, i) => {
    const h = phaseTotals[i] * K;
    const node = { ...p, kg: phaseTotals[i], y: py, h };
    py += h + PH_GAP;
    return node;
  });

  const totH = TOTAL * K;
  const totY = TOP + (y - SRC_GAP - TOP - totH) / 2;
  const H = y - SRC_GAP + TOP;

  // Links Quelle → Phase, gestapelt in der Reihenfolge der Quellen
  const offsets = ph.map(() => 0);
  const links1 = src.map((s) => {
    const pi = PHASES.findIndex((p) => (p.modules as readonly string[]).includes(s.module));
    const y1 = ph[pi].y + offsets[pi];
    offsets[pi] += s.h;
    return { d: band(X_SRC + NODE_W, s.y, X_PH, y1, s.h), hot: s.kg >= 4, key: s.id, title: `${s.label} → ${ph[pi].label}: ${fmt(s.kg)} kg CO₂e` };
  });
  let toff = 0;
  const links2 = ph.map((p) => {
    const d = band(X_PH + NODE_W, p.y, X_TOT, totY + toff, p.h);
    toff += p.h;
    return { d, key: p.id, title: `${p.label}: ${fmt(p.kg)} kg CO₂e (${pct(p.kg)} %)` };
  });

  return { src, ph, links1, links2, totY, totH, H };
}

const LAYOUT = computeLayout();

export default function HotspotSankey() {
  const { src, ph, links1, links2, totY, totH, H } = LAYOUT;
  return (
    <figure>
      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full min-w-[720px] h-auto" role="img" aria-labelledby="sk-title">
          <title id="sk-title">Hotspot-Analyse: Beiträge zum Klimawandel je Quelle und Lebenszyklusphase</title>

          {links1.map((l) => (
            <path key={l.key} d={l.d} className={`lca-band ${l.hot ? "lca-band--hot" : ""}`}>
              <title>{l.title}</title>
            </path>
          ))}
          {links2.map((l) => (
            <path key={l.key} d={l.d} className="lca-band">
              <title>{l.title}</title>
            </path>
          ))}

          {src.map((s) => (
            <g key={s.id}>
              <rect x={X_SRC} y={s.y} width={NODE_W} height={Math.max(s.h, 2)} rx="3" fill={s.kg >= 4 ? "var(--color-brand-700)" : "var(--color-brand-500)"} />
              <text x={X_SRC - 10} y={s.y + s.h / 2} dy="0.35em" textAnchor="end" fontSize="13" fill="var(--color-ink)">
                <tspan fontWeight={s.kg >= 4 ? 700 : 500}>{s.label}</tspan>
                <tspan dx="8" fill="var(--color-ink-tertiary)" style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(s.kg)}</tspan>
              </text>
            </g>
          ))}

          {ph.map((p) => (
            <g key={p.id}>
              <rect x={X_PH} y={p.y} width={NODE_W} height={p.h} rx="3" fill="var(--color-brand-700)" />
              <text x={X_PH + NODE_W + 10} y={p.y + Math.min(p.h / 2, 18)} dy="0.35em" fontSize="13" fontWeight="700" fill="var(--color-ink)" className="lca-halo">
                {p.label} <tspan fontWeight="500" fill="var(--color-ink-secondary)">{p.id} · {pct(p.kg)} %</tspan>
              </text>
            </g>
          ))}

          <rect x={X_TOT} y={totY} width={14} height={totH} rx="3" fill="var(--color-brand-800)" />
          <text x={X_TOT + 26} y={totY + totH / 2 - 10} fontSize="30" fontWeight="800" fill="var(--color-ink)" style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(TOTAL)}</text>
          <text x={X_TOT + 26} y={totY + totH / 2 + 14} fontSize="13" fill="var(--color-ink-secondary)">kg CO₂e pro Stück</text>
        </svg>
      </div>

      <details className="mt-4 text-xs text-ink-secondary">
        <summary className="cursor-pointer font-semibold text-ink">Werte als Tabelle</summary>
        <table className="mt-3 w-full max-w-md tabular-nums">
          <thead>
            <tr className="border-b border-border text-left text-ink-tertiary">
              <th className="py-1.5 font-semibold">Quelle</th><th className="font-semibold">Modul</th><th className="text-right font-semibold">kg CO₂e</th><th className="text-right font-semibold">Anteil</th>
            </tr>
          </thead>
          <tbody>
            {src.map((s) => (
              <tr key={s.id} className="border-b border-border/60">
                <td className="py-1.5">{s.label}</td><td>{s.module}</td><td className="text-right">{fmt(s.kg)}</td><td className="text-right">{pct(s.kg)} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
