import { CONTRIBUTIONS, CREDIT_D, EXAMPLE, TOTAL, fmt } from "./data";

const sum = (mods: string[]) =>
  Math.round(CONTRIBUTIONS.filter((c) => mods.includes(c.module)).reduce((a, c) => a + c.kg, 0) * 10) / 10;

type Step = { code: string; label: string; kg: number; kind: "step" | "subtotal" | "total" | "credit" };

const GATE = sum(["A1", "A2", "A3"]);
const STEPS: Step[] = [
  { code: "A1", label: "Rohstoffe", kg: sum(["A1"]), kind: "step" },
  { code: "A2", label: "Transport ins Werk", kg: sum(["A2"]), kind: "step" },
  { code: "A3", label: "Herstellung", kg: sum(["A3"]), kind: "step" },
  { code: "A1–A3", label: "Cradle-to-Gate", kg: GATE, kind: "subtotal" },
  { code: "A4", label: "Lieferung", kg: sum(["A4"]), kind: "step" },
  { code: "B6", label: "Nutzung", kg: sum(["B6"]), kind: "step" },
  { code: "C", label: "Entsorgung", kg: sum(["C"]), kind: "step" },
  { code: "A–C", label: "Cradle-to-Grave", kg: TOTAL, kind: "total" },
  { code: "D", label: "Gutschrift", kg: CREDIT_D, kind: "credit" },
];

const W = 940;
const H = 400;
const PAD_L = 44;
const BASE = 330;
const TOP = 40;
const SCALE = (BASE - TOP) / 24;
const COL = (W - PAD_L - 10) / STEPS.length;
const BAR = COL * 0.62;

/** PCF als Wasserfall: Module bauen den Fußabdruck schrittweise auf, Zwischensummen als volle Säulen. */
/** Reine Layoutberechnung, einmal beim Laden des Moduls. */
function computeBars() {
  let running = 0;
  const bars = STEPS.map((s, i) => {
    const x = PAD_L + i * COL + (COL - BAR) / 2;
    let y0: number;
    let y1: number;
    if (s.kind === "step") {
      y0 = running;
      running += s.kg;
      y1 = running;
    } else if (s.kind === "credit") {
      y0 = TOTAL + s.kg;
      y1 = TOTAL;
    } else {
      y0 = 0;
      y1 = s.kg;
    }
    return { ...s, x, top: BASE - y1 * SCALE, h: Math.max((y1 - y0) * SCALE, 2), end: y1 };
  });

  return bars;
}

const BARS = computeBars();

export default function PcfWaterfall() {
  const bars = BARS;
  return (
    <figure className="rounded-card border border-border bg-canvas p-5 sm:p-7 shadow-ambient-low">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
        <div>
          <p className="text-sm font-bold text-ink">Product Carbon Footprint, Modul für Modul</p>
          <p className="text-xs text-ink-tertiary">{EXAMPLE.product}, {EXAMPLE.unit} · kg CO₂e · ISO 14067</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Cradle-to-Gate</p>
            <p className="text-2xl font-extrabold text-ink tabular-nums">{fmt(GATE)}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Cradle-to-Grave</p>
            <p className="text-2xl font-extrabold text-brand-700 tabular-nums">{fmt(TOTAL)}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full min-w-[640px] h-auto" role="img" aria-label={`Wasserfall: Rohstoffe tragen ${fmt(STEPS[0].kg)} von ${fmt(TOTAL)} kg CO₂e bei, Cradle-to-Gate ${fmt(GATE)} kg, Gutschrift Modul D ${fmt(CREDIT_D)} kg separat.`}>
          <defs>
            <pattern id="wf-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill="var(--color-brand-50)" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="var(--color-brand-400)" strokeWidth="2" />
            </pattern>
          </defs>

          {[0, 5, 10, 15, 20].map((v) => (
            <g key={v}>
              <line x1={PAD_L} x2={W - 10} y1={BASE - v * SCALE} y2={BASE - v * SCALE} stroke="var(--color-border)" strokeWidth="1" />
              <text x={PAD_L - 8} y={BASE - v * SCALE} dy="0.35em" textAnchor="end" fontSize="11" fill="var(--color-ink-tertiary)">{v}</text>
            </g>
          ))}

          {bars.map((b, i) => {
            const next = bars[i + 1];
            const fill =
              b.kind === "subtotal" ? "var(--color-brand-700)" :
              b.kind === "total" ? "var(--color-brand-800)" :
              b.kind === "credit" ? "url(#wf-hatch)" :
              i === 0 ? "var(--color-brand-600)" : "var(--color-brand-400)";
            return (
              <g key={b.code}>
                <title>{`${b.code} ${b.label}: ${fmt(b.kg)} kg CO₂e`}</title>
                <rect x={b.x} y={b.top} width={BAR} height={b.h} rx="4" fill={fill} stroke={b.kind === "credit" ? "var(--color-brand-500)" : "none"} strokeDasharray={b.kind === "credit" ? "4 3" : undefined} />
                {next && next.kind === "step" && b.kind !== "credit" && (
                  <line x1={b.x + BAR} x2={next.x} y1={BASE - b.end * SCALE} y2={BASE - b.end * SCALE} stroke="var(--color-ink-tertiary)" strokeWidth="1" strokeDasharray="3 3" />
                )}
                <text x={b.x + BAR / 2} y={b.top - 8} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--color-ink)" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {b.kind === "step" ? `+${fmt(b.kg)}` : fmt(b.kg)}
                </text>
                <text x={b.x + BAR / 2} y={BASE + 20} textAnchor="middle" fontSize="12" fontWeight="700" fill={b.kind === "step" ? "var(--color-ink-secondary)" : "var(--color-ink)"}>{b.code}</text>
                <text x={b.x + BAR / 2} y={BASE + 36} textAnchor="middle" fontSize="11" fill="var(--color-ink-tertiary)">{b.label}</text>
              </g>
            );
          })}
          <line x1={PAD_L} x2={W - 10} y1={BASE} y2={BASE} stroke="var(--color-ink-tertiary)" strokeWidth="1.5" />
        </svg>
      </div>
      <figcaption className="mt-3 text-[11px] text-ink-tertiary">
        Illustratives Beispiel, modelliert in openLCA. Modul D wird nach ISO 14067 und EN 15804 getrennt ausgewiesen und nicht vom Ergebnis abgezogen.
      </figcaption>
    </figure>
  );
}
