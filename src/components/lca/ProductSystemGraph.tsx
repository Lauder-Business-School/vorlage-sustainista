import { CONTRIBUTIONS, CREDIT_D, EXAMPLE, TOTAL, fmt } from "./data";

type Kind = "material" | "process" | "energy" | "result";
type Node = { id: string; x: number; y: number; w: number; h: number; title: string; meta: string; kg?: number; kind: Kind };

const kg = (id: string) => CONTRIBUTIONS.find((c) => c.id === id)!.kg;

const W = 1120;
const H = 480;

const nodes: Node[] = [
  { id: "alu", x: 16, y: 16, w: 232, h: 76, title: "Aluminium, Gehäuse", meta: "A1 · ecoinvent", kg: kg("alu"), kind: "material" },
  { id: "cells", x: 16, y: 110, w: 232, h: 76, title: "Li-Ionen-Zellen, 4 Stk", meta: "A1 · ecoinvent", kg: kg("cells"), kind: "material" },
  { id: "pcb", x: 16, y: 204, w: 232, h: 76, title: "Elektronik & Motor", meta: "A1 · ecoinvent", kg: kg("pcb"), kind: "material" },
  { id: "plastic", x: 16, y: 298, w: 232, h: 76, title: "Kunststoffteile, PA6-GF", meta: "A1 · ecoinvent", kg: kg("plastic"), kind: "material" },
  { id: "power", x: 16, y: 392, w: 232, h: 72, title: "Strom, AT-Mix", meta: "0,152 kg CO₂e/kWh · UBA AT", kind: "energy" },
  { id: "assembly", x: 330, y: 150, w: 210, h: 96, title: "Montage", meta: "A2–A3 · Primärdaten", kg: kg("assembly") + kg("inbound"), kind: "process" },
  { id: "distribution", x: 610, y: 40, w: 210, h: 76, title: "Distribution, LKW", meta: "A4 · 850 km", kg: kg("distribution"), kind: "process" },
  { id: "use", x: 610, y: 176, w: 210, h: 76, title: "Nutzung, Laden", meta: "B6 · 18 kWh in 5 Jahren", kg: kg("use"), kind: "process" },
  { id: "eol", x: 610, y: 312, w: 210, h: 76, title: "Entsorgung, WEEE", meta: "C1–C4 · Recycling", kg: kg("eol"), kind: "process" },
  { id: "result", x: 880, y: 150, w: 224, h: 150, title: EXAMPLE.product, meta: EXAMPLE.unit, kind: "result" },
];

const n = (id: string) => nodes.find((x) => x.id === id)!;
const right = (a: Node) => [a.x + a.w, a.y + a.h / 2] as const;
const left = (a: Node) => [a.x, a.y + a.h / 2] as const;
const curve = ([x1, y1]: readonly [number, number], [x2, y2]: readonly [number, number]) => {
  const dx = (x2 - x1) * 0.5;
  return `M${x1} ${y1} C${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
};

const edges: { d: string; strong?: boolean }[] = [
  ...["alu", "cells", "pcb", "plastic"].map((id) => ({ d: curve(right(n(id)), left(n("assembly"))), strong: true })),
  { d: curve(right(n("power")), [n("assembly").x + 40, n("assembly").y + n("assembly").h]) },
  { d: curve(right(n("power")), [n("use").x, n("use").y + n("use").h - 14]) },
  { d: curve(right(n("assembly")), left(n("distribution"))), strong: true },
  { d: `M${n("distribution").x + 105} ${n("distribution").y + 76} V${n("use").y}`, strong: true },
  { d: `M${n("use").x + 105} ${n("use").y + 76} V${n("eol").y}`, strong: true },
  ...["distribution", "use", "eol"].map((id) => ({ d: curve(right(n(id)), left(n("result"))) })),
];

const kindStyle: Record<Kind, { band: string; bandText: string; label: string }> = {
  material: { band: "var(--color-brand-100)", bandText: "var(--color-brand-800)", label: "Material" },
  energy: { band: "#dbe8f5", bandText: "#1e4e80", label: "Energie" },
  process: { band: "var(--color-brand-50)", bandText: "var(--color-brand-700)", label: "Prozess" },
  result: { band: "var(--color-brand-700)", bandText: "var(--color-canvas)", label: "Produktsystem" },
};

export default function ProductSystemGraph() {
  return (
    <figure className="rounded-card border border-border-strong bg-canvas shadow-ambient-low overflow-hidden">
      {/* Fensterleiste wie im Modelleditor */}
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
        </span>
        <span className="text-xs font-semibold text-ink">Produktsystem · {EXAMPLE.product}</span>
        <span className="ml-auto text-[11px] text-ink-tertiary">Modellgraph</span>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block w-full min-w-[760px] h-auto"
          role="img"
          aria-labelledby="psg-title psg-desc"
        >
          <title id="psg-title">Produktsystem eines Akku-Bohrschraubers</title>
          <desc id="psg-desc">
            Materialien, Strom, Montage, Distribution, Nutzung und Entsorgung fließen in das Ergebnis von {fmt(TOTAL)} kg CO₂e pro Stück.
          </desc>
          <defs>
            <pattern id="psg-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--color-border-strong)" />
            </pattern>
            <marker id="psg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--color-brand-600)" />
            </marker>
          </defs>
          <rect width={W} height={H} fill="url(#psg-grid)" opacity="0.6" />

          {edges.map((e, i) => (
            <g key={i}>
              <path d={e.d} fill="none" stroke="var(--color-brand-300)" strokeWidth={e.strong ? 2.5 : 1.5} markerEnd="url(#psg-arrow)" />
              <path
                d={e.d}
                fill="none"
                stroke="var(--color-brand-700)"
                strokeWidth={e.strong ? 2.5 : 1.5}
                strokeLinecap="round"
                pathLength={100}
                className="lca-flow"
                style={{ animationDelay: `${-i * 0.35}s` }}
              />
            </g>
          ))}

          {nodes.map((node) => {
            const s = kindStyle[node.kind];
            const isResult = node.kind === "result";
            return (
              <g key={node.id}>
                <title>{`${node.title}: ${node.kg !== undefined ? `${fmt(node.kg)} kg CO₂e` : node.meta}`}</title>
                <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="8" fill={isResult ? "var(--color-brand-700)" : "var(--color-canvas)"} stroke={isResult ? "var(--color-brand-800)" : "var(--color-border-strong)"} strokeWidth="1.5" />
                {!isResult && <path d={`M${node.x} ${node.y + 8} a8 8 0 0 1 8 -8 h${node.w - 16} a8 8 0 0 1 8 8 v14 h-${node.w} z`} fill={s.band} />}
                <text x={node.x + 12} y={node.y + 16} fontSize="10" fontWeight="700" letterSpacing="0.08em" fill={isResult ? "var(--color-brand-200)" : s.bandText}>
                  {s.label.toUpperCase()}
                </text>
                {isResult ? (
                  <>
                    <text x={node.x + 12} y={node.y + 44} fontSize="17" fontWeight="800" fill="var(--color-canvas)">{node.title}</text>
                    <text x={node.x + 12} y={node.y + 64} fontSize="11.5" fill="var(--color-brand-100)">{node.meta}</text>
                    <text x={node.x + 12} y={node.y + 106} fontSize="34" fontWeight="800" fill="var(--color-canvas)" style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(TOTAL)}</text>
                    <text x={node.x + 104} y={node.y + 106} fontSize="13" fontWeight="600" fill="var(--color-brand-100)">kg CO₂e</text>
                    <text x={node.x + 12} y={node.y + 132} fontSize="11.5" fill="var(--color-brand-200)">Modul D separat: {fmt(CREDIT_D)} kg</text>
                  </>
                ) : (
                  <>
                    <text x={node.x + 12} y={node.y + 44} fontSize="14" fontWeight="700" fill="var(--color-ink)">{node.title}</text>
                    <text x={node.x + 12} y={node.y + 62} fontSize="11.5" fill="var(--color-ink-tertiary)">{node.meta}</text>
                    {node.kg !== undefined && (
                      <text x={node.x + node.w - 12} y={node.y + 16} fontSize="11" fontWeight="700" textAnchor="end" fill="var(--color-ink)" style={{ fontVariantNumeric: "tabular-nums" }}>
                        {fmt(node.kg)} kg
                      </text>
                    )}
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="border-t border-border px-4 py-2.5 text-[11px] text-ink-tertiary">
        Beispielmodell mit illustrativen Werten. Klimawandel nach EF 3.1, Module nach EN 15804.
      </figcaption>
    </figure>
  );
}
