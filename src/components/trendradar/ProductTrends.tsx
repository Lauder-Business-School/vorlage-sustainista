import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HorizonBadge } from "@/components/trendradar/TrendCard";
import { RadarMini } from "@/components/trendradar/TrendradarTeaser";
import { EDITORIAL, PRODUCT_MAPPING_APPROVED, TREND_BY_ID, TRENDS, trendsForProduct, type Trend } from "@/lib/trendradar";

/**
 * Produktseite → Trendradar. Zeigt die Trends mit Bezug zu diesem Angebot.
 * `product` nutzt die Produktzuordnung der Trendkarten; `ids` setzt eine eigene Auswahl
 * für Seiten ohne eigenen Radar-Produktnamen (PCF, PPWR).
 */
export default function ProductTrends({ product, ids, label }: { product?: string; ids?: string[]; label: string }) {
  const trends: Trend[] = ids ? ids.map((id) => TREND_BY_ID[id]).filter(Boolean) : product ? trendsForProduct(product) : [];
  if (!trends.length) return null;
  const sorted = [...trends].sort((a, b) => TRENDS.indexOf(a) - TRENDS.indexOf(b));
  const query = product ? `?produkt=${encodeURIComponent(product)}` : "";
  return (
    <section className="py-20 bg-surface border-t border-border" aria-labelledby="product-trends-h">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <RadarMini highlight={sorted.map((t) => t.id)} className="w-full max-w-[340px] h-auto mx-auto" />
        </div>
        <div className="lg:col-span-8">
          <h2 id="product-trends-h" className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
            {sorted.length} Trends mit Bezug zu {label}
          </h2>
          <p className="text-ink-secondary leading-relaxed mb-6 max-w-[62ch]">{EDITORIAL.productPageClaim.replace(/^Mögliche Formulierung für Produktseiten:\s*/, "")}</p>
          <ul className="divide-y divide-border border-y border-border">
            {sorted.slice(0, 3).map((t) => <TrendRow key={t.id} trend={t} />)}
          </ul>
          {sorted.length > 3 && (
            <details className="border-b border-border">
              <summary className="cursor-pointer py-4 text-base font-semibold text-brand-700">Weitere {sorted.length - 3} Trends anzeigen</summary>
              <ul className="divide-y divide-border border-t border-border">
                {sorted.slice(3).map((t) => <TrendRow key={t.id} trend={t} />)}
              </ul>
            </details>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={`/trendradar${query}`} className="inline-flex items-center gap-2 rounded-btn bg-brand-600 px-5 py-2.5 text-sm font-semibold text-canvas hover:bg-brand-700">
              Im Radar filtern <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <Link href="/trendradar/methodik" className="text-sm font-semibold text-brand-700 underline underline-offset-2">Wie wir einordnen</Link>
          </div>
          <p className="mt-4 text-xs text-ink-tertiary">Produktzuordnung intern bestätigt am {PRODUCT_MAPPING_APPROVED}. Sie beschreibt Entwicklungsrichtungen, keine bereits implementierten Funktionen.</p>
        </div>
      </div>
    </section>
  );
}

function TrendRow({ trend }: { trend: Trend }) {
  return (
    <li>
      <a href={`/trendradar#${trend.anchor}`} className="group flex flex-wrap items-center gap-x-3 gap-y-2 py-4 hover:text-brand-700">
        <span className="flex-1 min-w-[12rem] text-base font-semibold text-ink group-hover:text-brand-700">{trend.short}</span>
        <HorizonBadge trend={trend} />
        <span className="text-sm text-ink-secondary">{trend.action}</span>
      </a>
    </li>
  );
}
