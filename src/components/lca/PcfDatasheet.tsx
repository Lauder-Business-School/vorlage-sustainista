import Image from "next/image";
import { CONTRIBUTIONS, CREDIT_D, EXAMPLE, TOTAL, fmt } from "./data";

const GATE = Math.round(CONTRIBUTIONS.filter((c) => ["A1", "A2", "A3"].includes(c.module)).reduce((a, c) => a + c.kg, 0) * 10) / 10;

const ROWS = [
  ["Funktionelle Einheit", EXAMPLE.unit],
  ["Norm", "ISO 14067, GHG Product Standard"],
  ["Systemgrenze", "Cradle-to-Grave, A–C"],
  ["Charakterisierung", "IPCC AR6, GWP100"],
  ["Hintergrunddaten", "ecoinvent, UBA AT Strommix"],
  ["Software", "openLCA"],
];

/** PCF-Ergebnis als Datenblatt, so wie es in Ausschreibungen und im Produktpass landet. */
export default function PcfDatasheet() {
  return (
    <figure className="relative rounded-card border-2 border-ink bg-canvas p-6 shadow-ambient-low">
      <div className="flex items-start justify-between gap-4 border-b-4 border-ink pb-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-tertiary">Product Carbon Footprint</p>
          <p className="text-xl font-extrabold text-ink">{EXAMPLE.product}</p>
        </div>
        <Image src="/openlca-logo.png" alt="Berechnet mit openLCA" width={520} height={317} className="h-9 w-auto" />
      </div>

      <div className="grid grid-cols-2 gap-4 border-b border-ink/30 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Gesamt, A–C</p>
          <p className="text-5xl font-extrabold tracking-tight text-ink tabular-nums leading-none mt-1">{fmt(TOTAL)}</p>
          <p className="text-xs text-ink-secondary mt-1">kg CO₂e pro Stück</p>
        </div>
        <div className="border-l border-ink/20 pl-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">Cradle-to-Gate</p>
          <p className="text-2xl font-extrabold text-ink tabular-nums mt-1">{fmt(GATE)}</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary mt-3">Modul D, separat</p>
          <p className="text-lg font-bold text-brand-700 tabular-nums">{fmt(CREDIT_D)}</p>
        </div>
      </div>

      {/* Anteil je Modul als gestapelter Balken */}
      <div className="py-4 border-b border-ink/30">
        <div className="flex h-3 gap-0.5 overflow-hidden rounded-sm" aria-hidden="true">
          {[
            { k: "A1–A3", v: GATE, c: "bg-brand-700" },
            { k: "A4", v: 0.9, c: "bg-brand-500" },
            { k: "B6", v: 2.7, c: "bg-brand-400" },
            { k: "C", v: 0.8, c: "bg-brand-200" },
          ].map((s) => (
            <span key={s.k} className={s.c} style={{ flexGrow: s.v, flexBasis: 0 }} title={`${s.k}: ${fmt(s.v)} kg`} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-ink-secondary tabular-nums">
          <span><b className="text-ink">A1–A3</b> {Math.round((GATE / TOTAL) * 100)} %</span>
          <span><b className="text-ink">A4</b> 4 %</span>
          <span><b className="text-ink">B6</b> 12 %</span>
          <span><b className="text-ink">C</b> 3 %</span>
        </div>
      </div>

      <dl className="divide-y divide-ink/10 text-xs">
        {ROWS.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2">
            <dt className="text-ink-tertiary">{k}</dt>
            <dd className="font-semibold text-ink text-right">{v}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-3 text-[11px] text-ink-tertiary">Muster mit illustrativen Werten.</figcaption>
    </figure>
  );
}
