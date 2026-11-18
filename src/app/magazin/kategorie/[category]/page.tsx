import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticlesByCategory, formatMonthYear } from "@/lib/magazin";

const categoryData: Record<string, {
  title: string;
  intro: string;
}> = {
  "digitaler-produktpass": {
    title: "Digitaler Produktpass",
    intro: "Die EU ESPR-Verordnung macht den Digitalen Produktpass (DPP) für zahlreiche Produktgruppen verpflichtend. In dieser Kategorie finden Sie Fachartikel, Praxisberichte und Analysen rund um die Implementierung, technische Standards und strategische Möglichkeiten des DPP.",
  },
  "esg-daten-reporting": {
    title: "ESG Daten & Reporting",
    intro: "CSRD, ESRS, GHG Protocol: die Anforderungen an Nachhaltigkeitsberichterstattung wachsen. Diese Kategorie enthält praxisnahe Artikel zu ESG-Datenaufbau, Berichtsstandards, Lieferantendaten und der Rolle von KI in der Berichterstattung.",
  },
  "product-carbon-footprint": {
    title: "Product Carbon Footprint",
    intro: "Der Product Carbon Footprint (PCF) misst die Treibhausgasemissionen eines Produkts über seinen gesamten Lebenszyklus. Hier finden Sie Artikel zur PCF-Berechnung nach ISO 14067, Scope 3-Emissionen und produktbezogener CO₂-Bilanzierung.",
  },
  "lca-berechnung": {
    title: "LCA-Berechnung",
    intro: "Life Cycle Assessment (LCA) nach ISO 14040/14044 ermöglicht die systematische Analyse von Umweltwirkungen über den gesamten Produktlebenszyklus. Hier finden Sie Fachartikel zu Methoden, Software-Tools und Anwendungsfällen der LCA.",
  },
  "einblicke-praxis": {
    title: "Einblicke & Praxis",
    intro: "Erfahrungsberichte, Veranstaltungsrückblicke, Auszeichnungen und praxisnahe Einblicke aus dem Sustainista-Alltag, aus erster Hand von unserem Team.",
  },
};

function getCategoryPosts(category: string) {
  return getArticlesByCategory(category).map((article) => ({
    slug: article.slug,
    date: article.date,
    title: article.title,
    excerpt: article.description,
    readTime: article.readTime,
  }));
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) return {};
  const posts = getCategoryPosts(category);
  const cleanDesc = `${posts.length} Fachartikel zu ${data.title} von Sustainista-Expert:innen. ${data.intro.slice(0, 120)}`;
  return {
    title: `${data.title}: Fachartikel & Praxiswissen`,
    description: cleanDesc,
    alternates: { canonical: `https://www.example.invalid/magazin/kategorie/${category}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "de_AT",
      siteName: "Sustainista",
      title: `${data.title} | Sustainista Magazin`,
      description: cleanDesc,
      url: `https://www.example.invalid/magazin/kategorie/${category}`,
      images: [
        {
          url: "https://www.example.invalid/angebot-sustainista.png",
          width: 1100,
          height: 280,
          alt: `Sustainista Magazin: ${data.title}`,
        },
      ],
    },
  };
}

export default async function KategoriePage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) notFound();
  const posts = getCategoryPosts(category);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://www.example.invalid/magazin/kategorie/${category}`,
        "name": `Sustainista Magazin: ${data.title}`,
        "description": data.intro,
        "url": `https://www.example.invalid/magazin/kategorie/${category}`,
        "isPartOf": { "@id": "https://www.example.invalid/magazin" },
        "inLanguage": "de",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
            { "@type": "ListItem", "position": 2, "name": "Magazin", "item": "https://www.example.invalid/magazin" },
            { "@type": "ListItem", "position": 3, "name": data.title, "item": `https://www.example.invalid/magazin/kategorie/${category}` },
          ],
        },
        "hasPart": posts.map((post, i) => ({
          "@type": "BlogPosting",
          "position": i + 1,
          "headline": post.title,
          "description": post.excerpt,
          "url": `https://www.example.invalid/magazin/${post.slug}`,
          "datePublished": post.date,
          "author": { "@id": "https://www.example.invalid/#stefan-bauer" },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>
        <section className="page-header relative min-h-[40vh] flex items-end pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/magazin" className="hover:text-ink transition-colors">Magazin</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{data.title}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">Kategorie</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
              {data.title}
            </h1>
            <p className="text-base text-ink-secondary font-normal leading-relaxed max-w-2xl">
              {data.intro}
            </p>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/magazin/${post.slug}`}
                  className="group bg-canvas border border-border rounded-card p-7 hover:-translate-y-0.5 hover:shadow-ambient-low transition-all block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-brand-200 bg-brand-50 text-brand-700">
                      {data.title}
                    </span>
                    <span className="text-xs text-ink-tertiary">{formatMonthYear(post.date)}</span>
                  </div>
                  <h2 className="text-base font-bold text-ink leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-tertiary">{post.readTime} Lesedauer</span>
                    <span className="text-xs font-semibold text-brand-600 flex items-center gap-1">
                      Lesen
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/magazin"
                className="inline-flex items-center gap-2 border border-border text-ink-secondary hover:text-ink hover:border-ink-secondary bg-canvas px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                Alle Kategorien
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
