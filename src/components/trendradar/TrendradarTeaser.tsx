import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EDITION_LABEL, RINGS, SECTORS, SOURCE_DATE, TRENDS, ringIndex } from "@/lib/trendradar";
import { CX, CY, LAYOUT, RING_R, polar, sectorStart } from "@/lib/trendradar-geometry";

/** Kompakter, statischer Radar als Einstieg auf Startseite und Unterseiten */
export function RadarMini({ highlight = [] as string[], className = "" }) {
  const hl = new Set(highlight);
  return (
    <svg viewBox="270 130 860 860" className={className} role="img" aria-label="Sustainista Trendradar: 28 Trends in fünf Themenfeldern und fünf Zeitringen">
      {RING_R.map((r, i) => (
        <circle key={r} cx={CX} cy={CY} r={r} fill={i === 0 ? "var(--color-brand-100)" : "none"} stroke={i === 4 ? "var(--color-ink-tertiary)" : "var(--color-brand-300)"} strokeWidth={2} strokeDasharray={i === 4 ? "10 8" : undefined} />
      ))}
      {SECTORS.map((s, si) => {
        const [x, y] = polar(RING_R[4], sectorStart(si));
        return <line key={s.slug} x1={CX} y1={CY} x2={x} y2={y} stroke="var(--color-brand-300)" strokeWidth={2} />;
      })}
      {LAYOUT.map(({ t, x, y }) => {
        const on = hl.size === 0 || hl.has(t.id);
        const core = t.layer === "core";
        return (
          <a key={t.id} href={`/trendradar#${t.anchor}`} aria-label={`${t.num} ${t.short}`}>
            <circle cx={x} cy={y} r={17} opacity={on ? 1 : 0.25} fill={core ? "var(--color-brand-600)" : "var(--color-canvas)"} stroke={core ? "var(--color-brand-800)" : "var(--color-brand-600)"} strokeWidth={core ? 2 : 3} strokeDasharray={core ? undefined : "4 3"} />
            <text x={x} y={y + 6} textAnchor="middle" fontSize={16} fontWeight={800} opacity={on ? 1 : 0.3} fill={core ? "var(--color-canvas)" : "var(--color-brand-800)"} pointerEvents="none">{t.num}</text>
          </a>
        );
      })}
    </svg>
  );
}

export default function TrendradarTeaser() {
  const counts = RINGS.map((_, i) => TRENDS.filter((t) => ringIndex(t) === i).length);
  const next = TRENDS.filter((t) => t.horizon === "2027–2028");
  return (
    <section className="py-24 bg-canvas border-t border-border" aria-labelledby="trendradar-teaser-h">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <RadarMini className="w-full max-w-[460px] mx-auto h-auto" />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow mb-4">Sustainista Trendradar · {EDITION_LABEL}</p>
          <h2 id="trendradar-teaser-h" className="text-3xl sm:text-5xl font-black text-ink tracking-tight leading-[1.05] mb-5">
            Was heute trägt, was ab 2027 kommt, was 2040 möglich wird.
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6 max-w-[58ch]">
            28 konkrete Trends für Produktpässe, CO₂-Daten, Kreislaufwirtschaft und kontrollierte KI. Jede Karte mit Anwendung, Gegenargument und Primärquellen.
          </p>
          <dl className="grid grid-cols-5 gap-2 mb-6">
            {RINGS.map((r, i) => (
              <div key={r.key} className={`rounded-btn border p-2.5 ${i === 1 ? "border-brand-600 bg-brand-50" : "border-border"} ${i === 4 ? "border-dashed" : ""}`}>
                <dt className="text-[10px] font-bold uppercase tracking-[0.04em] text-ink-tertiary leading-tight">{r.key === "2026" ? "Heute" : r.key}</dt>
                <dd className="text-2xl font-black text-ink tabular-nums">{counts[i]}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm font-bold text-ink mb-2">Ab 2027 im nächsten Ausbau:</p>
          <ul className="flex flex-wrap gap-1.5 mb-8">
            {next.map((t) => (
              <li key={t.id}>
                <a href={`/trendradar#${t.anchor}`} className="inline-block rounded-btn border border-border px-2.5 py-1 text-xs font-semibold text-ink-secondary hover:border-brand-600 hover:text-brand-800">
                  {t.id} {t.short}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/trendradar" className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-canvas shadow-[4px_4px_0_var(--color-brand-900)] hover:bg-brand-700">
              Radar erkunden <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/magazin/trendradar-2026-2040" className="text-sm font-semibold text-brand-700 underline underline-offset-2">Magazinartikel lesen</Link>
            <span className="text-xs text-ink-tertiary">Quellenstand {SOURCE_DATE}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
