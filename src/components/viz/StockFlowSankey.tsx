/**
 * Bestand → Zustandsklasse → Verwertungsweg, am Fall der Seite (3.200 Übergangsjacken).
 * Verteilung illustrativ; Summen sind konsistent (3.200 Stück).
 */
const CLASSES = [
  { id: "A", label: "A · neuwertig", n: 1900 },
  { id: "B", label: "B · leichte Mängel", n: 820 },
  { id: "C", label: "C · reparaturbedürftig", n: 360 },
  { id: "D", label: "D · nicht verkaufsfähig", n: 120 },
];
const PATHS = [
  { id: "move", label: "Umlagerung in andere Märkte" },
  { id: "outlet", label: "Outlet" },
  { id: "resale", label: "Resale" },
  { id: "repair", label: "Reparatur & Wiederverkauf" },
  { id: "donate", label: "Spende" },
  { id: "reman", label: "Remanufacturing" },
];
const LINKS: [string, string, number][] = [
  ["A", "move", 1100], ["A", "outlet", 800],
  ["B", "outlet", 420], ["B", "resale", 400],
  ["C", "repair", 300], ["C", "donate", 60],
  ["D", "donate", 40], ["D", "reman", 80],
];

const TOTAL = CLASSES.reduce((a, c) => a + c.n, 0);
const W = 980;
const TOP = 16;
const USABLE = 360;
const GAP = 14;
const K = (USABLE - (PATHS.length - 1) * GAP) / TOTAL;
const X0 = 130;
const X1 = 430;
const X2 = 740;
const NW = 12;
const fmt = (n: number) => n.toLocaleString("de-AT");

const band = (x0: number, y0: number, x1: number, y1: number, h: number) => {
  const m = (x0 + x1) / 2;
  return `M${x0} ${y0} C${m} ${y0}, ${m} ${y1}, ${x1} ${y1} L${x1} ${y1 + h} C${m} ${y1 + h}, ${m} ${y0 + h}, ${x0} ${y0 + h} Z`;
};

function layout() {
  const pathTotals = PATHS.map((p) => LINKS.filter((l) => l[1] === p.id).reduce((a, l) => a + l[2], 0));
  const H = TOP * 2 + TOTAL * K + (PATHS.length - 1) * GAP;
  const classBlock = TOTAL * K + (CLASSES.length - 1) * GAP;
  let y = TOP + (H - 2 * TOP - classBlock) / 2;
  const cls = CLASSES.map((c) => {
    const n = { ...c, y, h: c.n * K };
    y += n.h + GAP;
    return n;
  });
  y = TOP;
  const pth = PATHS.map((p, i) => {
    const n = { ...p, n: pathTotals[i], y, h: pathTotals[i] * K };
    y += n.h + GAP;
    return n;
  });
  const srcY = TOP + (H - 2 * TOP - TOTAL * K) / 2;
  let sOff = 0;
  const first = cls.map((c) => {
    const d = band(X0 + NW, srcY + sOff, X1, c.y, c.h);
    sOff += c.h;
    return { d, key: c.id, title: `Bestand → ${c.label}: ${fmt(c.n)} Stück` };
  });
  const outOff: Record<string, number> = {};
  const inOff: Record<string, number> = {};
  const second = LINKS.map(([from, to, n]) => {
    const c = cls.find((x) => x.id === from)!;
    const p = pth.find((x) => x.id === to)!;
    const h = n * K;
    const d = band(X1 + NW, c.y + (outOff[from] ?? 0), X2, p.y + (inOff[to] ?? 0), h);
    outOff[from] = (outOff[from] ?? 0) + h;
    inOff[to] = (inOff[to] ?? 0) + h;
    return { d, key: `${from}-${to}`, cls: from, title: `${c.label} → ${p.label}: ${fmt(n)} Stück` };
  });
  return { cls, pth, first, second, srcY, H };
}

const L = layout();
const TONE: Record<string, string> = { A: "var(--color-brand-700)", B: "var(--color-brand-500)", C: "var(--color-brand-400)", D: "var(--color-ink-tertiary)" };

export default function StockFlowSankey() {
  const { cls, pth, first, second, srcY, H } = L;
  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
      <div className="mb-4">
        <p className="text-sm font-bold text-ink">3.200 Jacken, sechs Wege</p>
        <p className="text-xs text-ink-tertiary">Bestand nach Zustandsklasse und dem Weg, den die Entscheidungslogik je Klasse vorschlägt</p>
      </div>
      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full min-w-[700px] h-auto" role="img" aria-label="Sankey: 3.200 Stück verteilen sich auf vier Zustandsklassen und sechs Verwertungswege; der größte Teil geht in Umlagerung und Outlet.">
          {first.map((l) => (
            <path key={l.key} d={l.d} className="lca-band"><title>{l.title}</title></path>
          ))}
          {second.map((l) => (
            <path key={l.key} d={l.d} className="lca-band" style={{ fill: TONE[l.cls], fillOpacity: 0.28 }}><title>{l.title}</title></path>
          ))}

          <rect x={X0} y={srcY} width={NW} height={TOTAL * K} rx="3" fill="var(--color-brand-800)" />
          <text x={X0 - 12} y={srcY + (TOTAL * K) / 2 - 8} textAnchor="end" fontSize="26" fontWeight="800" fill="var(--color-ink)" style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(TOTAL)}</text>
          <text x={X0 - 12} y={srcY + (TOTAL * K) / 2 + 14} textAnchor="end" fontSize="12" fill="var(--color-ink-secondary)">Stück im Lager</text>

          {cls.map((c) => (
            <g key={c.id}>
              <rect x={X1} y={c.y} width={NW} height={c.h} rx="3" fill={TONE[c.id]} />
              <text x={X1 + NW + 8} y={c.y + Math.min(c.h / 2, 16)} dy="0.35em" fontSize="12.5" fontWeight="700" fill="var(--color-ink)" className="lca-halo">
                {c.label} <tspan fontWeight="500" fill="var(--color-ink-secondary)">{fmt(c.n)}</tspan>
              </text>
            </g>
          ))}

          {pth.map((p) => (
            <g key={p.id}>
              <rect x={X2} y={p.y} width={NW} height={Math.max(p.h, 3)} rx="3" fill="var(--color-brand-700)" />
              <text x={X2 + NW + 10} y={p.y + p.h / 2} dy="0.35em" fontSize="13" fill="var(--color-ink)">
                <tspan fontWeight="700">{p.label}</tspan>
                <tspan dx="8" fill="var(--color-ink-tertiary)" style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(p.n)}</tspan>
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-4 text-[11px] text-ink-tertiary">
        Illustrative Verteilung. Im Pilot ergibt sich die Aufteilung aus Ihren Zustandsdaten, Marktpreisen und Partnerkapazitäten, und jede Zuordnung bleibt begründet nachvollziehbar.
      </figcaption>
    </figure>
  );
}
