"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Magazin",
    h2: "Wissen & Einblicke.",
    allPosts: "Alle Beiträge",
    readArticle: "Artikel lesen",
    posts: [
      { slug: "digitaler-produktpass-climate-lab", category: "Digitaler Produktpass", date: "März 2026", title: "Der Digitale Produktpass (DPP) kommt: Einblicke aus dem Climate Lab", excerpt: "Beim Climate Lab Wien diskutierten Expert:innen aus PACE-DPP und PASSAT, wie RFID, QR und NFC im DPP zusammenspielen.", readTime: "6 Min." },
      { slug: "nachhaltigkeitsbericht-partner", category: "ESG Daten & Reporting", date: "Januar 2025", title: "Nachhaltigkeitsbericht: Ihr Partner für umfassende ESG-Analysen", excerpt: "Von der ESG-Datenerhebung nach GHG Protocol bis zur kommunizierbaren Nachhaltigkeitsstrategie.", readTime: "6 Min." },
      { slug: "top-berater-2025", category: "Einblicke & Praxis", date: "Juni 2025", title: "Sustainista unter den 'Top Berater 2025'", excerpt: "Das IMWF hat über 32 Millionen Datenpunkte ausgewertet. Sustainista wurde als führender Nachhaltigkeitsberater Österreichs ausgezeichnet.", readTime: "3 Min." },
    ],
  },
  en: {
    eyebrow: "Magazine",
    h2: "Knowledge & insights.",
    allPosts: "All articles",
    readArticle: "Read article",
    posts: [
      { slug: "digitaler-produktpass-climate-lab", category: "Digital Product Passport", date: "March 2026", title: "The Digital Product Passport (DPP) is coming: insights from the Climate Lab", excerpt: "At the Vienna Climate Lab, experts from PACE-DPP and PASSAT discussed how RFID, QR and NFC work together in the DPP.", readTime: "6 min." },
      { slug: "nachhaltigkeitsbericht-partner", category: "ESG Data & Reporting", date: "January 2025", title: "Sustainability report: your partner for comprehensive ESG analysis", excerpt: "From ESG data collection per GHG Protocol to a communicable sustainability strategy.", readTime: "6 min." },
      { slug: "top-berater-2025", category: "Insights & practice", date: "June 2025", title: "Sustainista among 'Top Advisors 2025'", excerpt: "IMWF evaluated over 32 million data points. Sustainista was recognised as Austria's leading sustainability consultant.", readTime: "3 min." },
    ],
  },
};

export default function MagazinTeaser() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05]">{t.h2}</h2>
          </div>
          <Link href="/magazin" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-secondary hover:text-ink transition-colors">
            {t.allPosts}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.posts.map((post) => (
            <Link key={post.slug} href={`/magazin/${post.slug}`}
              className="group bg-canvas rounded-card border border-border p-7 hover:-translate-y-0.5 hover:shadow-ambient-low transition-all block">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-btn border border-border bg-surface text-ink-tertiary">{post.category}</span>
                <span className="text-xs text-ink-tertiary">{post.date}</span>
              </div>
              <h3 className="text-base font-bold text-ink leading-snug mb-3 group-hover:text-brand-700 transition-colors">{post.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs font-medium text-brand-600 flex items-center gap-1.5">
                {t.readArticle}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
