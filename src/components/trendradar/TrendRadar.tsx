"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import TrendCard from "@/components/trendradar/TrendCard";
import {
  PRODUCT_NAMES, RINGS, SECTORS, TRENDS, type Trend,
  normalize, ringIndex, searchText, sectorOf,
} from "@/lib/trendradar";
import {
  CX, CY, DOT_SIZE, H, LAYOUT, RING_R, SECTOR_DEG, W, arcPath, polar, rad, sectorStart,
} from "@/lib/trendradar-geometry";

type Area = "all" | "core" | "foresight";
type Filters = { area: Area; sector: string; product: string; horizon: string; q: string };
const EMPTY: Filters = { area: "all", sector: "all", product: "all", horizon: "all", q: "" };

function matches(t: Trend, f: Filters) {
  if (f.area !== "all" && t.layer !== f.area) return false;
  if (f.sector !== "all" && sectorOf(t).slug !== f.sector) return false;
  if (f.product !== "all" && !t.products.includes(f.product)) return false;
  if (f.horizon !== "all" && t.horizon !== f.horizon) return false;
  const q = normalize(f.q.trim());
  if (q && !searchText(t).includes(q)) return false;
  return true;
}

const selectCls =
  "w-full rounded-btn border border-border-strong bg-canvas px-3 py-2 text-sm text-ink focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200";

export default function TrendRadar() {
  const [f, setF] = useState<Filters>(EMPTY);
  const [active, setActive] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const visible = useMemo(() => new Set(TRENDS.filter((t) => matches(t, f)).map((t) => t.id)), [f]);
  const filtered = visible.size < TRENDS.length;

  /** Öffnet die Karte, scrollt hin und setzt bei Bedarf Filter zurück */
  const openTrend = useCallback((anchor: string, scroll = true) => {
    const t = TRENDS.find((x) => x.anchor === anchor);
    if (!t) return;
    setF((cur) => (matches(t, cur) ? cur : EMPTY));
    setActive(t.id);
    requestAnimationFrame(() => {
      const el = document.getElementById(anchor) as HTMLDetailsElement | null;
      if (!el) return;
      el.open = true;
      if (scroll) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  /* Direktlinks (#trend-07) und Startfilter (?thema=, ?produkt=, ?bereich=) */
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (/^trend-\d\d$/.test(h)) openTrend(h);
    };
    const init = requestAnimationFrame(() => {
      const p = new URLSearchParams(window.location.search);
      const sector = p.get("thema");
      const product = p.get("produkt");
      const area = p.get("bereich");
      if (sector || product || area) {
        setF({
          ...EMPTY,
          sector: SECTORS.some((s) => s.slug === sector) ? sector! : "all",
          product: product && PRODUCT_NAMES.includes(product) ? product : "all",
          area: area === "core" || area === "foresight" ? area : "all",
        });
      }
      fromHash();
    });
    window.addEventListener("hashchange", fromHash);
    return () => {
      cancelAnimationFrame(init);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [openTrend]);

  const select = (t: Trend) => {
    if (window.location.hash !== `#${t.anchor}`) history.replaceState(null, "", `#${t.anchor}`);
    openTrend(t.anchor);
  };

  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setF((cur) => ({ ...cur, [k]: v }));
  const focusTrend = hover ? TRENDS.find((t) => t.id === hover) : null;

  return (
    <div>
      {/* ── Filter ── */}
      <div className="rounded-card border border-border bg-surface p-4 sm:p-5" role="search" aria-label="Trends filtern">
        <div className="flex flex-wrap gap-1.5 mb-4" role="radiogroup" aria-label="Bereich">
          {([
            ["all", "Alle"],
            ["core", "Kerntrends bis 2036"],
            ["foresight", "Foresight 2035–2040"],
          ] as [Area, string][]).map(([k, label]) => (
            <button
              key={k}
              type="button"
              role="radio"
              aria-checked={f.area === k}
              onClick={() => set("area", k)}
              className={`rounded-btn px-3.5 py-2 text-sm font-semibold transition-colors ${
                f.area === k ? "bg-brand-700 text-canvas" : "bg-canvas text-ink-secondary border border-border hover:border-brand-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">Suche</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-tertiary" aria-hidden="true" />
              <input
                type="search"
                value={f.q}
                onChange={(e) => set("q", e.target.value)}
                placeholder="z. B. CO2, Batterie, KI"
                className={`${selectCls} pl-9`}
              />
            </span>
          </label>
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">Thema</span>
            <select value={f.sector} onChange={(e) => set("sector", e.target.value)} className={selectCls}>
              <option value="all">Alle Themen</option>
              {SECTORS.map((s) => <option key={s.slug} value={s.slug}>{s.short}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">Produkt</span>
            <select value={f.product} onChange={(e) => set("product", e.target.value)} className={selectCls}>
              <option value="all">Alle Produkte</option>
              {PRODUCT_NAMES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">Einsatzhorizont</span>
            <select value={f.horizon} onChange={(e) => set("horizon", e.target.value)} className={selectCls}>
              <option value="all">Alle Horizonte</option>
              {RINGS.map((r) => <option key={r.key} value={r.key}>{r.label}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink" aria-live="polite">
            {visible.size} von {TRENDS.length} Trends
          </p>
          {filtered && (
            <button type="button" onClick={() => setF(EMPTY)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Filter zurücksetzen
            </button>
          )}
        </div>
      </div>

      {/* ── Radar ── */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <figure className="lg:col-span-8 rounded-card border border-border bg-canvas p-2 sm:p-4">
          <svg viewBox={`40 50 ${W - 80} ${H - 110}`} className="w-full h-auto" role="group" aria-label="Sustainista Trendradar: 28 Trends in fünf Themenfeldern und fünf Zeitringen">
            <defs>
              <radialGradient id="tr-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-brand-100)" />
                <stop offset="100%" stopColor="var(--color-canvas)" />
              </radialGradient>
            </defs>
            <circle cx={CX} cy={CY} r={RING_R[4]} fill="url(#tr-bg)" />
            {/* Sektorflächen, abwechselnd getönt */}
            {SECTORS.map((s, si) => {
              const on = f.sector === "all" || f.sector === s.slug;
              return (
                <path
                  key={s.slug}
                  d={arcPath(0.01, RING_R[3], sectorStart(si), sectorStart(si) + SECTOR_DEG)}
                  fill={si % 2 ? "var(--color-brand-50)" : "var(--color-canvas)"}
                  fillOpacity={on ? 0.55 : 0.15}
                />
              );
            })}
            {/* Ringe; der äußere Foresight-Ring gestrichelt */}
            {RING_R.map((r, i) => (
              <circle
                key={r}
                cx={CX}
                cy={CY}
                r={r}
                fill="none"
                stroke={i === 4 ? "var(--color-ink-tertiary)" : "var(--color-brand-300)"}
                strokeWidth={i === 4 ? 2 : 1.5}
                strokeDasharray={i === 4 ? "10 8" : undefined}
              />
            ))}
            {/* Sektorgrenzen */}
            {SECTORS.map((s, si) => {
              const [x, y] = polar(RING_R[4], sectorStart(si));
              return <line key={s.slug} x1={CX} y1={CY} x2={x} y2={y} stroke="var(--color-brand-300)" strokeWidth={1.5} />;
            })}
            {/* Ringbeschriftung entlang der senkrechten Grenze unten */}
            {RINGS.map((r, i) => {
              const y = CY + RING_R[i];
              const label = i === 0 ? "2026" : r.key === "2037–2040" ? "2037–40" : r.key.replace(/20(\d\d)$/, "$1");
              return (
                <g key={r.key}>
                  <rect x={CX - 36} y={y - 12} width={72} height={24} rx={12} fill="var(--color-canvas)" stroke="var(--color-border)" />
                  <text x={CX} y={y + 5} textAnchor="middle" fontSize={14} fontWeight={700} fill="var(--color-ink-secondary)">{label}</text>
                </g>
              );
            })}
            {/* Sektortitel außerhalb des Radars */}
            {SECTORS.map((s, si) => {
              const mid = sectorStart(si) + SECTOR_DEG / 2;
              const [x, y] = polar(RING_R[4] + 44, mid);
              const c = Math.cos(rad(mid));
              const anchor = Math.abs(c) < 0.2 ? "middle" : c > 0 ? "start" : "end";
              const words = s.short.split(" & ");
              const on = f.sector === "all" || f.sector === s.slug;
              return (
                <text key={s.slug} x={x} y={y - (words.length - 1) * 15} textAnchor={anchor} fontSize={27} fontWeight={800} fill={on ? "var(--color-brand-800)" : "var(--color-ink-tertiary)"}>
                  {words.map((w, wi) => (
                    <tspan key={w} x={x} dy={wi === 0 ? 0 : 31}>{wi === 0 && words.length > 1 ? `${w} &` : w}</tspan>
                  ))}
                </text>
              );
            })}
            {/* Trendpunkte */}
            {LAYOUT.map(({ t, x, y }) => {
              const on = visible.has(t.id);
              const core = t.layer === "core";
              const isActive = active === t.id || hover === t.id;
              return (
                <g
                  key={t.id}
                  role={on ? "button" : undefined}
                  tabIndex={on ? 0 : -1}
                  aria-hidden={on ? undefined : true}
                  aria-label={on ? `${t.num} ${t.short}, ${t.horizon}, ${t.action}` : undefined}
                  onClick={on ? () => select(t) : undefined}
                  onKeyDown={on ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(t); } } : undefined}
                  onMouseEnter={() => on && setHover(t.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => on && setHover(t.id)}
                  onBlur={() => setHover(null)}
                  opacity={on ? 1 : 0.18}
                  className={on ? "cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-[var(--color-ink)]" : ""}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? DOT_SIZE + 4 : DOT_SIZE}
                    fill={core ? "var(--color-brand-600)" : "var(--color-canvas)"}
                    stroke={isActive ? "var(--color-ink)" : core ? "var(--color-brand-800)" : "var(--color-brand-600)"}
                    strokeWidth={core ? 2 : 3}
                    strokeDasharray={core ? undefined : "4 3"}
                    style={{ transition: "r .15s" }}
                  />
                  <text x={x} y={y + 5.5} textAnchor="middle" fontSize={16} fontWeight={800} fill={core ? "var(--color-canvas)" : "var(--color-brand-800)"} pointerEvents="none">
                    {t.num}
                  </text>
                  <title>{`${t.id} ${t.short} · ${t.horizon}`}</title>
                </g>
              );
            })}
            {/* Hover-Beschriftung */}
            {focusTrend && (() => {
              const p = LAYOUT.find((l) => l.t.id === focusTrend.id)!;
              const label = `${focusTrend.id} · ${focusTrend.short}`;
              const w = label.length * 9.2 + 28;
              const left = p.x + w + 30 > W ? p.x - w - 24 : p.x + 24;
              return (
                <g pointerEvents="none">
                  <rect x={left} y={p.y - 18} width={w} height={36} rx={8} fill="var(--color-ink)" />
                  <text x={left + 14} y={p.y + 6} fontSize={17} fontWeight={700} fill="var(--color-canvas)">{label}</text>
                </g>
              );
            })()}
          </svg>
          <figcaption className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 px-2 text-xs text-ink-secondary">
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-brand-600 ring-2 ring-brand-800" aria-hidden="true" /> Kerntrend bis 2036
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-dashed border-brand-600 bg-canvas" aria-hidden="true" /> Foresight 2037–2040: Planungshorizont, keine Erfolgswahrscheinlichkeit
            </span>
            <span>Ring = Einsatzhorizont, nicht Wichtigkeit.</span>
          </figcaption>
        </figure>

        {/* ── Kompakte Liste nach Ring: funktioniert auch ohne Grafik ── */}
        <nav aria-label="Trends nach Einsatzhorizont" className="lg:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto rounded-card border border-border bg-canvas p-4">
          {visible.size === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm font-semibold text-ink mb-2">Kein Trend passt zu dieser Kombination.</p>
              <button type="button" onClick={() => setF(EMPTY)} className="text-sm font-semibold text-brand-700 underline underline-offset-2">Filter zurücksetzen</button>
            </div>
          ) : (
            RINGS.map((r, ri) => {
              const items = TRENDS.filter((t) => ringIndex(t) === ri && visible.has(t.id));
              if (!items.length) return null;
              return (
                <div key={r.key} className="mb-4 last:mb-0">
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-700">{r.label}</p>
                  <ul className="space-y-0.5">
                    {items.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.anchor}`}
                          onClick={(e) => { e.preventDefault(); select(t); }}
                          onMouseEnter={() => setHover(t.id)}
                          onMouseLeave={() => setHover(null)}
                          className={`flex items-center gap-2.5 rounded-btn px-2 py-1.5 text-sm transition-colors hover:bg-brand-50 ${active === t.id ? "bg-brand-50 font-semibold" : ""}`}
                        >
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tabular-nums ${
                            t.layer === "core" ? "bg-brand-600 text-canvas" : "border-2 border-dashed border-brand-600 text-brand-700"
                          }`}>{t.num}</span>
                          <span className="min-w-0 flex-1 text-ink leading-snug">{t.short}</span>
                          <span className="shrink-0 text-[10px] font-semibold uppercase text-ink-tertiary">{t.action}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </nav>
      </div>

      {/* ── Alle Trendkarten ── */}
      <div className="mt-14">
        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-2">Alle Trendkarten</h2>
        <p className="text-sm text-ink-secondary mb-6">Karte öffnen für Einordnung, Anwendung, Regulatorik, Daten, Gegenargument und Quellen.</p>
        <div className="space-y-3">
          {TRENDS.map((t) => (
            <TrendCard key={t.id} trend={t} hidden={!visible.has(t.id)} highlight={active === t.id} />
          ))}
        </div>
        {visible.size === 0 && (
          <div className="rounded-card border border-dashed border-border-strong p-8 text-center">
            <p className="font-semibold text-ink mb-2">Kein Trend passt zu dieser Filterkombination.</p>
            <button type="button" onClick={() => setF(EMPTY)} className="inline-flex items-center gap-1.5 rounded-btn bg-brand-700 px-4 py-2 text-sm font-semibold text-canvas">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Alle 28 Trends zeigen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
