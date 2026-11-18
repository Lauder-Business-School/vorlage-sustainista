import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowRight, FileText, BarChart3, Package, Leaf, Recycle, ExternalLink } from "lucide-react";
import articlesData from "@/data/magazin-articles.json";
import { getArticlesByCategory } from "@/lib/magazin";

export const metadata: Metadata = {
  title: "Magazin: ESG, Digitaler Produktpass, PCF, LCA & KI",
  description:
    "Fachwissen zu ESG-Reporting, Digitalem Produktpass (DPP), Product Carbon Footprint (PCF), LCA-Berechnung und KI-Automatisierung. Verfasst von Dr. Stefan Bauer und dem Sustainista-Team.",
  alternates: {
    canonical: "https://www.example.invalid/magazin",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Sustainista",
    url: "https://www.example.invalid/magazin",
    title: "Magazin: ESG, Digitaler Produktpass, PCF, LCA & KI | Sustainista",
    description:
      "Fachwissen zu ESG-Reporting, Digitalem Produktpass (DPP), Product Carbon Footprint (PCF), LCA-Berechnung und KI-Automatisierung. Verfasst von Dr. Stefan Bauer und dem Sustainista-Team.",
    images: [{ url: "https://www.example.invalid/angebot-sustainista.png", width: 1920, height: 613, alt: "Sustainista Magazin: ESG, DPP, PCF, LCA & KI" }],
  },
};

const categories = [
  {
    icon: Package,
    slug: "digitaler-produktpass",
    title: "Digitaler Produktpass",
    desc: "EU ESPR-Verordnung, IDTA-Standard, Implementierung und Best Practices für Hersteller, Händler und Zulieferer.",
  },
  {
    icon: BarChart3,
    slug: "esg-daten-reporting",
    title: "ESG Daten & Reporting",
    desc: "CSRD, ESRS, GHG Protocol und ESG-Berichterstattung für KMU, praxisnah und ohne unnötige Komplexität.",
  },
  {
    icon: Leaf,
    slug: "product-carbon-footprint",
    title: "Product Carbon Footprint",
    desc: "PCF-Berechnung nach ISO 14067 und GHG Protocol, Scope 3-Emissionen und produktbezogene CO₂-Bilanzierung.",
  },
  {
    icon: Recycle,
    slug: "lca-berechnung",
    title: "LCA-Berechnung",
    desc: "Life Cycle Assessment (LCA) nach ISO 14040/14044: Methoden, Pakete, Anwendungsfälle und was Unternehmen bei der Berechnung von Umweltwirkungen wissen müssen.",
  },
  {
    icon: FileText,
    slug: "einblicke-praxis",
    title: "Einblicke & Praxis",
    desc: "Erfahrungsberichte, Veranstaltungsrückblicke, News zu Sustainista und praxisnahe Einblicke aus dem Alltag.",
  },
].map((category) => {
  const posts = getArticlesByCategory(category.slug);
  return {
    ...category,
    count: posts.length,
    recent: posts.slice(0, 2).map(({ slug, title }) => ({ slug, title })),
  };
});

const featured = {
  slug: "digitaler-produktpass-climate-lab",
  category: "Digitaler Produktpass",
  categorySlug: "digitaler-produktpass",
  date: "März 2026",
  title: "Der Digitale Produktpass (DPP) kommt: Einblicke und Learnings aus dem Climate Lab",
  excerpt:
    "Beim Climate Lab Wien diskutierten Expert:innen aus PACE-DPP und PASSAT, wie RFID, QR und NFC im DPP zusammenspielen. Das wichtigste Learning: Start small, keep it simple.",
  readTime: "6 Min.",
  author: "Dr. Stefan Bauer",
};

type ArticleEntry = { title: string; description: string; date: string };
const articles = articlesData as Record<string, ArticleEntry>;

// Top 10 most recent articles for schema
const recentArticleSlugs = Object.entries(articles)
  .sort(([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 10)
  .map(([slug]) => slug);

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.example.invalid/magazin",
      "name": "Sustainista Magazin",
      "description": "Fachwissen zu ESG-Reporting, Digitalem Produktpass, Product Carbon Footprint und KI-Automatisierung.",
      "url": "https://www.example.invalid/magazin",
      "publisher": { "@id": "https://www.example.invalid/#organization" },
      "inLanguage": "de",
      "hasPart": recentArticleSlugs.map((slug) => ({
        "@type": "BlogPosting",
        "headline": articles[slug].title,
        "description": articles[slug].description,
        "url": `https://www.example.invalid/magazin/${slug}`,
        "datePublished": articles[slug].date,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
        { "@type": "ListItem", "position": 2, "name": "Magazin", "item": "https://www.example.invalid/magazin" },
      ],
    },
  ],
};

export default function MagazinOverview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>

        {/* Hero */}
        <section className="page-header relative min-h-[45vh] flex items-end pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">Magazin</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">Wissen & Einblicke</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              Magazin
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl">
              Fachwissen zu ESG, Digitalem Produktpass, Product Carbon Footprint und KI-Automatisierung,
              verfasst von Praktiker:innen für Unternehmen, die Nachhaltigkeit aktiv angehen.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-6">Aktuell empfohlen</p>
            <Link
              href={`/magazin/${featured.slug}`}
              className="group block bg-canvas border border-border rounded-card p-8 sm:p-10 hover:shadow-ambient-medium transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-brand-200 bg-brand-50 text-brand-700">
                  {featured.category}
                </span>
                <span className="text-xs text-ink-tertiary">{featured.date}</span>
                <span className="text-xs text-ink-tertiary">· {featured.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-tight mb-4 group-hover:text-brand-700 transition-colors max-w-2xl">
                {featured.title}
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Artikel lesen
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-2xl font-black text-ink mb-10">Kategorien</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map(({ icon: Icon, slug, title, desc, count, recent }) => (
                <div key={slug} className="border border-border rounded-card bg-surface overflow-hidden hover:shadow-ambient-low transition-all">
                  <div className="p-7 pb-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-btn bg-brand-50 border border-border flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">{title}</h3>
                        <span className="text-xs text-ink-tertiary">{count} Beiträge</span>
                      </div>
                    </div>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-5">{desc}</p>
                    <ul className="space-y-2 mb-5">
                      {recent.map((post) => (
                        <li key={post.slug}>
                          <Link
                            href={`/magazin/${post.slug}`}
                            className="text-sm text-ink-secondary hover:text-brand-600 transition-colors flex items-start gap-2"
                          >
                            <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-ink-tertiary" aria-hidden="true" />
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-7 pb-6">
                    <Link
                      href={`/magazin/kategorie/${slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Alle Beiträge zu {title}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In den Medien & YouTube */}
        <section className="py-24 bg-white border-t border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">In den Medien & auf YouTube</p>
            <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-[1.05] mb-10">
              Sustainista in der Öffentlichkeit.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* YouTube Channel */}
              <a
                href="https://www.youtube.com/@Sustainista"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-btn bg-[#FF0000]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4.5 h-4.5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">YouTube</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">@Sustainista auf YouTube</p>
                <p className="text-xs text-ink-secondary leading-relaxed flex-1">Einblicke, Eventmitschnitte und Wissen zu ESG, Digitalem Produktpass und Nachhaltigkeit für KMU, alle Videos auf unserem Kanal.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c00000] mt-5">
                  Kanal öffnen <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

              {/* Data Intelligence */}
              <a
                href="https://dataintelligence.at/wir-bei-sustainista-glauben-dass-daten-die-welt-veraendern-koennen-willkommen-im-netzwerk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-btn bg-brand-50 border border-border flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">Data Intelligence</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">&bdquo;Wir glauben, dass Daten die Welt ver&auml;ndern k&ouml;nnen&ldquo;</p>
                <p className="text-xs text-ink-secondary leading-relaxed flex-1">Sustainista im Data Intelligence Netzwerk: Über unsere Mission, datengetriebene Nachhaltigkeit für KMU zugänglich zu machen.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 mt-5">
                  Artikel lesen <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

              {/* Green Tech Valley */}
              <a
                href="https://www.greentech.at/goodies/green-tech-startups-austria/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-btn bg-brand-50 border border-border flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">Green Tech Valley</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">Green Tech Startups Austria</p>
                <p className="text-xs text-ink-secondary leading-relaxed flex-1">Sustainista in der offiziellen Übersicht der Green Tech Valley Green Tech Startups Austria, gemeinsam mit Österreichs führenden GreenTech-Unternehmen.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 mt-5">
                  Zur Übersicht <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

              {/* DPP Austria */}
              <a
                href="https://dpp-austria.at/project/sustainista-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-btn bg-brand-50 border border-border flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">DPP Austria</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">Sustainista bei DPP Austria</p>
                <p className="text-xs text-ink-secondary leading-relaxed flex-1">Sustainista als Projektpartner im DPP Austria Netzwerk, dem österreichischen Ökosystem für den Digitalen Produktpass.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 mt-5">
                  Zum Profil <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

              {/* Innovationskonferenz Wien */}
              <a
                href="https://innovationskonferenz-wien.at/participants/3315832"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-card p-6 bg-surface hover:border-ink-secondary hover:-translate-y-0.5 hover:shadow-ambient-low transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-btn bg-brand-50 border border-border flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-tertiary">Innovationskonferenz Wien</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">Sustainista bei der Innovationskonferenz Wien</p>
                <p className="text-xs text-ink-secondary leading-relaxed flex-1">Sustainista als Teilnehmer der Innovationskonferenz Wien, dem zentralen Treffpunkt für Wiens Innovationsökosystem.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 mt-5">
                  Zum Profil <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow mb-4 justify-center">Newsletter</p>
            <h2 className="text-2xl font-black text-ink mb-3">Neue Artikel direkt ins Postfach</h2>
            <p className="text-sm text-ink-secondary mb-6 max-w-md mx-auto leading-relaxed">
              Kein Spam. Praxisnahe Einblicke zu ESG, DPP und Kreislaufwirtschaft, maximal 1× pro Monat.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
            >
              Newsletter abonnieren
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
