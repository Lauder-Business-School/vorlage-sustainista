import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import articlesData from "@/data/magazin-articles.json";
import { seoTitle } from "@/lib/seo";

type ArticleData = {
  category: string;
  categorySlug: string;
  date: string;
  updated: string;
  title: string;
  seoTitle: string;
  description: string;
  readTime: string;
  image?: string;
  author: { name: string; role: string; linkedin: string };
  intro: string;
  toc: { id: string; label: string }[];
  sections: { id: string; heading: string; content: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  sources: { label: string; url: string }[];
  cta?: { afterSection: string; heading: string; body: string; label: string; href: string };
};

const articles = articlesData as Record<string, ArticleData>;

// Unterstützt **fett** und [Text](/pfad) im Fließtext der Artikel.
// Externe Ziele bekommen rel="noopener noreferrer".
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  const pushBold = (chunk: string) => {
    chunk.split(/\*\*(.*?)\*\*/g).forEach((part, i) => {
      if (!part) return;
      out.push(
        i % 2 === 1
          ? <strong key={`b${key++}`} className="font-semibold text-ink">{part}</strong>
          : <React.Fragment key={`t${key++}`}>{part}</React.Fragment>
      );
    });
  };

  while ((m = linkPattern.exec(text)) !== null) {
    pushBold(text.slice(last, m.index));
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);
    out.push(
      external ? (
        <a
          key={`l${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
        >
          {label}
        </a>
      ) : (
        <Link
          key={`l${key++}`}
          href={href}
          className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2"
        >
          {label}
        </Link>
      )
    );
    last = m.index + m[0].length;
  }
  pushBold(text.slice(last));
  return out;
}


export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: seoTitle(article.seoTitle),
    description: article.description,
    alternates: { canonical: `https://www.example.invalid/magazin/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      locale: "de_AT",
      siteName: "Sustainista",
      url: `https://www.example.invalid/magazin/${slug}`,
      title: article.seoTitle,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [article.author.name],
      images: article.image
        ? [{ url: `https://www.example.invalid${article.image}`, width: 1184, height: 888, alt: article.title }]
        : [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1100, height: 280, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: article.image
        ? [`https://www.example.invalid${article.image}`]
        : ["https://www.example.invalid/angebot-sustainista.png"],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const relatedArticles = article.related.map((s) => articles[s]).filter(Boolean);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NewsArticle", "Article"],
        "@id": `https://www.example.invalid/magazin/${slug}`,
        "headline": article.title,
        "alternativeHeadline": article.seoTitle,
        "description": article.description,
        "datePublished": article.date,
        "dateModified": article.updated,
        "author": { "@id": "https://www.example.invalid/#stefan-bauer" },
        "publisher": { "@id": "https://www.example.invalid/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.example.invalid/magazin/${slug}` },
        "isPartOf": { "@id": "https://www.example.invalid/magazin" },
        "inLanguage": "de",
        "articleSection": article.category,
        "timeRequired": `PT${article.readTime.replace(" Min.", "")}M`,
        "url": `https://www.example.invalid/magazin/${slug}`,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".article-intro", ".speakable"],
        },
        ...(article.image ? {
          "image": {
            "@type": "ImageObject",
            "url": `https://www.example.invalid${article.image}`,
            "width": 1184,
            "height": 888,
          },
        } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Magazin", "item": "https://www.example.invalid/magazin" },
          { "@type": "ListItem", "position": 3, "name": article.category, "item": `https://www.example.invalid/magazin/kategorie/${article.categorySlug}` },
          { "@type": "ListItem", "position": 4, "name": article.title, "item": `https://www.example.invalid/magazin/${slug}` },
        ],
      },
      article.faqs.length > 0 ? {
        "@type": "FAQPage",
        "mainEntity": article.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      } : null,
    ].filter(Boolean),
  };

  const dateFormatted = new Date(article.date).toLocaleDateString("de-AT", {
    day: "2-digit", month: "long", year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        <article>

          {/* Hero */}
          <section className="relative page-header pt-28 pb-12">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-tertiary">
                  <li><Link href="/" className="hover:text-ink transition-colors">Startseite</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/magazin" className="hover:text-ink transition-colors">Magazin</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href={`/magazin/kategorie/${article.categorySlug}`} className="hover:text-ink transition-colors">{article.category}</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-ink-secondary font-medium line-clamp-1">{article.title}</li>
                </ol>
              </nav>

              <div className="flex items-center gap-3 mb-5">
                <Link href={`/magazin/kategorie/${article.categorySlug}`} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-brand-200 bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors">
                  {article.category}
                </Link>
              </div>

              <h1 className="font-black tracking-tight leading-[1.05] mb-6 text-ink max-w-3xl" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)" }}>
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-xs text-ink-tertiary mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {dateFormatted}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {article.readTime} Lesedauer
                </span>
                <span className="font-semibold text-ink">Verfasst von {article.author.name}</span>
              </div>

              <p className="text-base text-ink-secondary leading-relaxed max-w-2xl">
                {article.intro}
              </p>

              {article.image && (
                <div className="relative w-full mt-10 rounded-card overflow-hidden aspect-[16/9] max-w-3xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 800px"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Content layout: sidebar + main */}
          <section className="py-12 bg-surface">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Main content */}
                <div className="lg:col-span-8">

                  {/* Table of contents */}
                  <div className="mb-10 border border-border rounded-card bg-canvas p-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">Inhaltsverzeichnis</h2>
                    <ol className="space-y-2">
                      {article.toc.map((item, i) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-start gap-2.5 text-sm text-ink-secondary hover:text-brand-600 transition-colors"
                          >
                            <span className="font-mono text-xs text-ink-tertiary mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Article sections */}
                  <div className="space-y-10">
                    {article.sections.map((section) => (
                      <React.Fragment key={section.id}>
                        <div id={section.id}>
                          <h2 className="text-xl font-bold text-ink mb-4 leading-snug">{section.heading}</h2>
                          <div className="space-y-4">
                            {section.content.split("\n\n").map((para, i) => (
                              <p key={i} className="text-sm text-ink-secondary leading-relaxed">
                                {renderInline(para)}
                              </p>
                            ))}
                          </div>
                        </div>
                        {article.cta && article.cta.afterSection === section.id && (
                          <aside className="rounded-card border border-brand-200 bg-brand-50 p-6">
                            <h3 className="text-sm font-bold text-ink mb-1.5">{article.cta.heading}</h3>
                            <p className="text-sm text-ink-secondary leading-relaxed mb-4">{article.cta.body}</p>
                            <Link
                              href={article.cta.href}
                              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                            >
                              {article.cta.label}
                            </Link>
                          </aside>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* CTA Box */}
                  <div className="mt-12 rounded-card border border-brand-200 bg-brand-50 p-7">
                    <h3 className="text-base font-bold text-ink mb-2">Wir beraten zu diesem Thema</h3>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                      Sustainista begleitet Unternehmen beim Aufbau von ESG-Daten, Digitalem Produktpass und KI-Automatisierung. Erstes Gespräch kostenlos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/#kontakt"
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                      >
                        Kostenlos anfragen
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                      <Link
                        href="/produkte"
                        className="inline-flex items-center gap-2 border border-border bg-canvas text-ink-secondary hover:text-ink px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                      >
                        Produkte ansehen
                      </Link>
                    </div>
                  </div>

                  {/* Sources */}
                  {article.sources.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-border">
                      <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">Quellen</h3>
                      <ul className="space-y-2">
                        {article.sources.map((src) => (
                          <li key={src.label}>
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-brand-600 hover:text-brand-700 transition-colors"
                            >
                              {src.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* FAQs */}
                  {article.faqs.length > 0 && (
                    <div className="mt-12" id="faq">
                      <h2 className="text-xl font-bold text-ink mb-6">
                        Häufige Fragen zu {article.category}
                      </h2>
                      <ArticleFaqAccordion faqs={article.faqs} />
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-6">

                  {/* Author */}
                  <div className="bg-canvas border border-border rounded-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">Autor</h3>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/stefan-bauer.jpeg"
                          alt="Dr. Stefan Bauer"
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ink">{article.author.name}</p>
                        <p className="text-xs text-ink-tertiary leading-snug mt-0.5">{article.author.role}</p>
                      </div>
                    </div>
                    <a
                      href={article.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-brand-600 hover:text-brand-700 font-semibold transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn-Profil
                    </a>
                  </div>

                  {/* Share */}
                  <div className="bg-canvas border border-border rounded-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">Teilen</h3>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.example.invalid/magazin/${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-surface text-ink-secondary hover:text-ink px-4 py-2.5 rounded-btn text-xs font-semibold transition-colors w-full justify-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      Auf LinkedIn teilen
                    </a>
                  </div>

                  {/* Categories */}
                  <div className="bg-canvas border border-border rounded-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-4">Kategorien</h3>
                    <ul className="space-y-2">
                      {[
                        { label: "Digitaler Produktpass", slug: "digitaler-produktpass" },
                        { label: "ESG Daten & Reporting", slug: "esg-daten-reporting" },
                        { label: "Product Carbon Footprint", slug: "product-carbon-footprint" },
                        { label: "LCA-Berechnung", slug: "lca-berechnung" },
                        { label: "Einblicke & Praxis", slug: "einblicke-praxis" },
                      ].map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/magazin/kategorie/${cat.slug}`}
                            className={`text-sm transition-colors ${cat.slug === article.categorySlug ? "text-brand-600 font-semibold" : "text-ink-secondary hover:text-ink"}`}
                          >
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Search */}
                  <div className="bg-canvas border border-border rounded-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-ink-tertiary mb-3">Suche</h3>
                    <form action="/magazin" method="GET">
                      <input
                        type="search"
                        name="q"
                        placeholder="Artikel suchen …"
                        className="w-full bg-surface border border-border rounded-btn px-3 py-2 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 transition-colors"
                      />
                    </form>
                  </div>

                </aside>
              </div>
            </div>
          </section>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="py-20 bg-canvas">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <h2 className="text-xl font-black text-ink mb-8">Das könnte Sie auch interessieren</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles.map((related, i) => {
                    const relSlug = article.related[i];
                    return (
                      <Link
                        key={relSlug}
                        href={`/magazin/${relSlug}`}
                        className="group bg-surface border border-border rounded-card p-7 hover:-translate-y-0.5 hover:shadow-ambient-low transition-all block"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-border bg-canvas text-ink-tertiary inline-block mb-4">
                          {related.category}
                        </span>
                        <h3 className="text-base font-bold text-ink group-hover:text-brand-700 transition-colors leading-snug mb-2">
                          {related.title}
                        </h3>
                        <span className="text-xs font-semibold text-brand-600 flex items-center gap-1.5 mt-3">
                          Artikel lesen
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

        </article>
      </main>
      <Footer />
    </>
  );
}
