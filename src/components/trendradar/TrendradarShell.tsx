import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CALENDLY_URL } from "@/lib/cta";
import { EDITION_LABEL, RADAR_VERSION, SECTORS, SOURCE_DATE } from "@/lib/trendradar";

export const TRENDRADAR_PAGES = [
  { href: "/trendradar", label: "Radar" },
  ...SECTORS.map((s) => ({ href: `/trendradar/${s.slug}`, label: s.short })),
  { href: "/trendradar/foresight-2035-2040", label: "Foresight 2035–2040" },
  { href: "/trendradar/methodik", label: "Methodik & Quellen" },
  { href: "/magazin/trendradar-2026-2040", label: "Magazinartikel" },
];

/** Gemeinsamer Rahmen aller Trendradar-Seiten: Kopf mit Version, Unternavigation, CTA */
export default function TrendradarShell({
  current, eyebrow, title, lead, children, cta = "Passende Trends für Ihr Produkt prüfen",
}: {
  current: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children: React.ReactNode;
  cta?: string;
}) {
  const page = TRENDRADAR_PAGES.find((p) => p.href === current);
  const crumbs = [
    { name: "Startseite", item: "https://www.example.invalid" },
    { name: "Trendradar", item: "https://www.example.invalid/trendradar" },
    ...(current !== "/trendradar" && page ? [{ name: page.label, item: `https://www.example.invalid${current}` }] : []),
  ];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navigation />
      <main>
        <section className="relative page-header page-header--netz pt-28 pb-12 sm:pb-16">
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h1 className="font-black tracking-tight leading-[1.04] text-ink mb-6 max-w-[22ch]" style={{ fontSize: "clamp(2.2rem,5.2vw,3.9rem)" }}>
              {title}
            </h1>
            <div className="text-lg text-ink-secondary leading-relaxed max-w-[64ch]">{lead}</div>
            <p className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-btn border border-border bg-canvas/80 px-3 py-1.5 text-xs font-semibold text-ink-secondary backdrop-blur">
              <span className="text-brand-700">{EDITION_LABEL}</span>
              <span aria-hidden="true">·</span>
              <span>Quellenstand {SOURCE_DATE}</span>
              <span aria-hidden="true">·</span>
              <span>Version {RADAR_VERSION}</span>
            </p>
          </div>
        </section>

        <nav aria-label="Trendradar-Bereiche" className="sticky top-16 z-30 border-y border-border bg-canvas/95 backdrop-blur">
          <ul className="max-w-6xl mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
            {TRENDRADAR_PAGES.map((p) => (
              <li key={p.href} className="shrink-0">
                <Link
                  href={p.href}
                  aria-current={p.href === current ? "page" : undefined}
                  className={`block rounded-btn px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    p.href === current ? "bg-brand-700 text-canvas" : "text-ink-secondary hover:bg-brand-50 hover:text-brand-800"
                  }`}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {children}

        <section className="py-20 bg-brand-800 text-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-200 mb-3">Nächster Schritt</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">{cta}</h2>
              <p className="text-brand-100 leading-relaxed max-w-[60ch]">
                Wir prüfen neue Technologien anhand konkreter Anwendungen, verfügbarer Daten und nachvollziehbarer Ergebnisse.
                In 30 Minuten klären wir, welcher Trend für Ihr Produkt der nächste sinnvolle Schritt ist und welcher noch warten kann.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-canvas px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-brand-800 shadow-[4px_4px_0_var(--color-brand-900)] hover:-translate-y-px transition-transform"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" /> Erstgespräch buchen
              </a>
              <Link href="/trendradar" className="inline-flex items-center justify-center gap-2 rounded-btn border border-brand-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-canvas hover:bg-brand-700">
                Zum Radar <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
