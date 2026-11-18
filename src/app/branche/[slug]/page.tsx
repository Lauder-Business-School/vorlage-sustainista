import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import StickyCtaBar from "@/components/StickyCtaBar";
import { BRANCHEN, BRANCHEN_MAP } from "@/data/branchen";
import { seoTitle } from "@/lib/seo";
import { CheckCircle2, CalendarDays, ArrowRight } from "lucide-react";

const CALENDLY = "#kontakt";

export function generateStaticParams() {
  return BRANCHEN.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = BRANCHEN_MAP[slug];
  if (!b) return {};
  return {
    title: seoTitle(b.seoTitleDe),
    description: b.seoDescDe,
    alternates: { canonical: `https://www.example.invalid/branche/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "de_AT",
      siteName: "Sustainista",
      url: `https://www.example.invalid/branche/${slug}`,
      title: b.seoTitleDe,
      description: b.seoDescDe,
      images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: b.seoTitleDe }],
    },
  };
}

export default async function BranchePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = BRANCHEN_MAP[slug];
  if (!b) notFound();

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": b.seoTitleDe,
    "description": b.seoDescDe,
    "provider": { "@type": "Organization", "name": "Sustainista", "url": "https://www.example.invalid" },
    "areaServed": ["AT", "DE", "CH"],
  });

  return (
    <>
      {/* JSON-LD: own static data, no user input, no XSS risk */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navigation />

      {/* Hero */}
      <section className="relative page-header pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow mb-4 justify-center">Branchenlösung</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-5">
            {b.heroHeadlineDe}
          </h1>
          <p className="text-ink-secondary text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {b.heroSubDe}
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-7 py-4 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px"
          >
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            {b.heroCta}
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {b.statsDe.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tight text-brand-600 mb-1">{s.value}</p>
                <p className="text-xs text-ink-tertiary leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-canvas">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Herausforderungen</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-[1.05] mb-8">
            Was {b.name} heute<br />
            <span className="text-ink-tertiary">unter Druck setzt.</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {b.challengesDe.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-card border border-border bg-surface p-4">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-4">Unsere Leistungen</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-[1.05] mb-8">
            So löst Sustainista<br />
            <span className="text-ink-tertiary">Ihre Branchenaufgaben.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {b.solutionsDe.map((s) => (
              <div key={s.title} className="rounded-card border border-border bg-canvas p-6">
                <p className="text-sm font-bold text-ink mb-2">{s.title}</p>
                <p className="text-xs text-ink-secondary leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-canvas leading-[1.05] mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-canvas text-sm mb-8">Erstes Gespräch kostenlos und unverbindlich. Förderprüfung inklusive.</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-canvas text-brand-700 hover:bg-brand-50 px-7 py-4 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-px"
          >
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            Erstgespräch buchen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="py-8 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Link href="/#loesungen" className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors">
            ← Alle Lösungen
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
      <StickyCtaBar />
    </>
  );
}
