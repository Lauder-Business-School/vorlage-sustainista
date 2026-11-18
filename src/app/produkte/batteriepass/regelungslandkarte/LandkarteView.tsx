import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { css, type LandkarteContent } from "./content";

/**
 * Regelungslandkarte Batteriepass. Alle Bilder sind statisches SVG bzw. HTML, das
 * build_visualisierung.py (CLAUDE-OUTPUTS/elektro/regulatorik-matrix-2026-09-11) zur Bauzeit
 * erzeugt und in content.ts ablegt. Kein Nutzerinhalt fließt hier hinein; die Seite rendert
 * nur, damit DE und EN nicht auseinanderlaufen können.
 */
export default function LandkarteView({ c }: { c: LandkarteContent }) {
  const isDe = c.lang === "de";
  return (
    <>
      <Navigation />
      <main className="lk" lang={c.lang}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <section className="relative page-header page-header--batterie pt-28 pb-12">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li>
                  <Link href="/" className="hover:text-ink transition-colors">
                    {isDe ? "Startseite" : "Home"}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/produkte/batteriepass" className="hover:text-ink transition-colors">
                    {isDe ? "Batteriepass" : "Battery passport"}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{c.title}</li>
              </ol>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{c.eyebrow}</p>
              <Link
                href={c.switchHref}
                hrefLang={isDe ? "en" : "de"}
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2"
              >
                {c.switchLabel}
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mt-3 mb-5">{c.title}</h1>
            <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">{c.lead}</p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs text-ink-tertiary">
              {c.meta.map(([k, v]) => (
                <div key={k}>
                  <dt className="inline">{k} </dt>
                  <dd className="inline font-semibold text-ink-secondary">{v}</dd>
                </div>
              ))}
            </dl>
            <nav aria-label={isDe ? "Abschnitte" : "Sections"} className="mt-8 flex flex-wrap gap-2">
              {c.nav.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-white text-ink-secondary hover:border-brand-600 hover:text-brand-700 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {c.sections.map((s) => (
          <section key={s.id} id={s.id} className="py-12 bg-canvas border-t border-border scroll-mt-24">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 mb-2">{s.eyebrow}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight mb-3">{s.title}</h2>
              {s.lead ? <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl mb-4">{s.lead}</p> : null}
              {s.plain ? (
                <div dangerouslySetInnerHTML={{ __html: s.fig }} />
              ) : (
                <div className="fig" dangerouslySetInnerHTML={{ __html: s.fig }} />
              )}
              {s.cap ? <p className="cap max-w-3xl" dangerouslySetInnerHTML={{ __html: s.cap }} /> : null}
            </div>
          </section>
        ))}

        <section id="lesart" className="py-12 bg-canvas border-t border-border scroll-mt-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 mb-2">{c.noteTitle}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{c.note}</p>
              <p className="mt-4 text-xs text-ink-tertiary">
                {isDe ? "Erzeugt am" : "Generated on"} {c.stand}.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700 mb-2">{c.ctaTitle}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{c.ctaText}</p>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex items-center rounded-lg bg-surface border border-border px-5 py-2.5 text-sm font-semibold text-ink-tertiary cursor-not-allowed"
              >
                {c.ctaLabel} (In dieser Kursvorlage nicht enthalten)
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
