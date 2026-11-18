import Link from "next/link";
import { Fragment } from "react";
import {
  ACTION_TEXT, PRODUCT_LINKS, RINGS, SOURCE_BY_ID, type Trend,
  ringIndex, sectorOf, sourceHref, splitCitations,
} from "@/lib/trendradar";

/** Fließtext mit verlinkten Quellenkennungen wie [S04, S05] */
export function Cite({ text }: { text: string }) {
  return (
    <>
      {splitCitations(text).map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>
            {part.split(/\*\*(.*?)\*\*/g).map((chunk, k) =>
              k % 2 ? <strong key={k} className="font-semibold text-ink">{chunk}</strong> : chunk,
            )}
          </Fragment>
        ) : (
          <span key={i} className="whitespace-nowrap">
            [
            {part.ids.map((id, j) => (
              <Fragment key={id}>
                {j > 0 && ", "}
                <a
                  href={sourceHref(id)}
                  className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:decoration-brand-700"
                  title={SOURCE_BY_ID[id] ? `${SOURCE_BY_ID[id].publisher}: ${SOURCE_BY_ID[id].title}` : id}
                >
                  {id}
                </a>
              </Fragment>
            ))}
            ]
          </span>
        ),
      )}
    </>
  );
}

export function HorizonBadge({ trend }: { trend: Trend }) {
  const r = RINGS[ringIndex(trend)];
  const today = trend.horizon === "2026";
  const foresight = trend.layer === "foresight";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-btn px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.06em] ${
        today ? "bg-brand-700 text-canvas" : foresight ? "border border-dashed border-ink-tertiary text-ink-secondary" : "bg-brand-100 text-brand-800"
      }`}
      title={r.label}
    >
      {today ? "Heute nutzbar" : foresight ? "Foresight 2037–2040" : r.badge}
    </span>
  );
}

/** Verlinkt Trendkennungen wie "T05" im Fließtext auf ihre Karte im Radar */
export function TrendLinks({ text }: { text: string }) {
  return (
    <>
      {text.split(/\b(T\d\d)\b/g).map((part, i) =>
        i % 2 ? (
          <a key={i} href={`/trendradar#trend-${part.slice(1)}`} className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:decoration-brand-700">
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Absätze mit Belegen; für Methodik, Foresight-Text und Themenseiten */
export function Prose({ paras, className = "" }: { paras: string[]; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {paras.map((p, i) => (
        <p key={i} className="text-base text-ink-secondary leading-relaxed"><Cite text={p} /></p>
      ))}
    </div>
  );
}

const Rating = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{label}</dt>
    <dd className="text-xs font-semibold text-ink leading-snug">{value}</dd>
  </div>
);

const Block = ({ title, children, tone }: { title: string; children: React.ReactNode; tone?: "counter" }) => (
  <div className={tone === "counter" ? "rounded-btn border-l-4 border-caution bg-[color-mix(in_srgb,var(--color-caution)_6%,var(--color-canvas))] p-3" : ""}>
    <h4 className={`text-[11px] font-bold uppercase tracking-[0.08em] mb-1 ${tone === "counter" ? "text-caution" : "text-brand-700"}`}>{title}</h4>
    <p className="text-sm text-ink-secondary leading-relaxed">{children}</p>
  </div>
);

/**
 * Vollständige Trendkarte. Kopf mit Kurztitel, Horizont und Bewertung; darunter alle Inhalte des Briefings.
 * `open` steuert das <details>; auf Themenseiten sind Karten standardmäßig offen.
 */
export default function TrendCard({ trend: t, open = false, hidden = false, highlight = false }: {
  trend: Trend; open?: boolean; hidden?: boolean; highlight?: boolean;
}) {
  const core = t.layer === "core";
  return (
    <details
      id={t.anchor}
      open={open}
      hidden={hidden}
      className={`group scroll-mt-28 rounded-card border bg-canvas transition-shadow open:shadow-ambient-low ${
        highlight ? "border-brand-600 ring-2 ring-brand-300" : "border-border"
      } ${core ? "" : "border-dashed"}`}
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${
            core ? "bg-brand-600 text-canvas" : "border-2 border-dashed border-brand-600 bg-canvas text-brand-700"
          }`}
          aria-hidden="true"
        >
          {String(t.num).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{t.id} · {sectorOf(t).short}</span>
            <HorizonBadge trend={t} />
            <span className="rounded-btn border border-border px-2 py-0.5 text-[11px] font-semibold text-ink-secondary">{t.action}</span>
          </span>
          <span className="block text-base font-extrabold text-ink leading-snug">{t.short}</span>
          <span className="block text-sm text-ink-secondary leading-snug">{t.title}</span>
        </span>
        <span className="mt-2 text-ink-tertiary transition-transform group-open:rotate-180" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
        </span>
      </summary>

      <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5 space-y-5">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 rounded-btn bg-surface p-3">
          <Rating label="Einsatzhorizont" value={t.planningWindow ? `${t.horizon} (Fenster ${t.planningWindow})` : t.horizon} />
          <Rating label="Attraktivität" value={t.attractiveness} />
          <Rating label="Technische Reife" value={t.maturity} />
          <Rating label={core ? "Confidence" : "Confidence (Langfrist)"} value={t.confidence} />
        </dl>
        <p className="text-xs text-ink-tertiary">
          <b className="text-ink-secondary">{t.action}:</b> {ACTION_TEXT[t.action]}{" "}
          {!core && <span className="font-semibold text-ink-secondary">Foresight: Planungshorizont, keine Erfolgswahrscheinlichkeit.</span>}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Block title="Begründete Einordnung"><Cite text={t.rationale} /></Block>
          {t.trend && <Block title="Konkreter Trend"><Cite text={t.trend} /></Block>}
          {t.startingPoint && <Block title="Belegter technischer Ausgangspunkt"><Cite text={t.startingPoint} /></Block>}
          <Block title="Vorgeschlagene Anwendung"><Cite text={t.application} /></Block>
          <Block title="Regulatorik und Grenzen"><Cite text={t.regulation} /></Block>
          <Block title="Daten und Technik"><Cite text={t.dataTech} /></Block>
          <Block title="Gegenargument" tone="counter"><Cite text={t.counter} /></Block>
          {t.pilot && <Block title="Pilot und vorgeschlagene Messgrößen"><Cite text={t.pilot} /></Block>}
          {t.watchSignals && <Block title="Heutige Prüfung und Beobachtungssignale"><Cite text={t.watchSignals} /></Block>}
          {t.scenario2035 && <Block title="Bedingtes Szenario 2035"><Cite text={t.scenario2035} /></Block>}
          {t.scenario2040 && <Block title="Bedingtes Szenario 2040"><Cite text={t.scenario2040} /></Block>}
          {t.difference && <Block title="Unterschied zu bisherigen Trends"><Cite text={t.difference} /></Block>}
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1.5">Produktbezug (intern bestätigt)</p>
            <ul className="flex flex-wrap gap-1.5">
              {t.products.map((p) => (
                <li key={p}>
                  <Link href={PRODUCT_LINKS[p]} className="inline-block rounded-btn border border-brand-200 bg-brand-50 px-2 py-1 text-[11px] font-semibold text-brand-800 hover:border-brand-600">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-1.5">Quellen</p>
            <p className="text-xs">
              {t.sources.map((id, i) => (
                <Fragment key={id}>
                  {i > 0 && " · "}
                  <a href={sourceHref(id)} className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2" title={SOURCE_BY_ID[id]?.title}>{id}</a>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-ink-tertiary">
          Letzte fachliche Prüfung: Quellenstand 11. Oktober 2026 · Version 2026.10-Foresight-2040 · Direktlink:{" "}
          <a href={`/trendradar#${t.anchor}`} className="underline underline-offset-2">/trendradar#{t.anchor}</a>
        </p>
      </div>
    </details>
  );
}
