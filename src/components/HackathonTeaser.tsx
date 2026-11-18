"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Europe Tech Hackathon 2027",
    h2a: "7. & 8. Mai 2027.",
    // ­: Wort ist 208px breit, Spalte bei 280px nur 174px.
    h2b: "Echte Heraus­forderungen.",
    sub: "Zwei Tage in der ÖBB Open Innovation Factory Wien, als WarmUp Event der ViennaUP 2027. Mit dem AIT Austrian Institute of Technology als großem Partner 2027 und eigenen Unternehmens-Challenges.",
    tags: ["7. & 8. Mai 2027", "AIT Partner 2027", "ViennaUP 2027", "Open Innovation", "Wien"],
    cta: "Zum Hackathon",
    imgAlt: "Europe Tech Hackathon: zwei Tage Nachhaltigkeitstechnologie in Wien",
  },
  en: {
    eyebrow: "Europe Tech Hackathon 2027",
    h2a: "7 & 8 May 2027.",
    h2b: "Real challenges.",
    sub: "Two days at the ÖBB Open Innovation Factory in Vienna, as the warm-up event of ViennaUP 2027. With the AIT Austrian Institute of Technology as major partner 2027 and dedicated company challenges.",
    tags: ["7 & 8 May 2027", "AIT Partner 2027", "ViennaUP 2027", "Open Innovation", "Vienna"],
    cta: "To the hackathon",
    imgAlt: "Europe Tech Hackathon: two days of sustainability technology in Vienna",
  },
};

export default function HackathonTeaser() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section className="py-16 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-card overflow-hidden border border-border bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative h-56 lg:h-auto min-h-[220px]">
              <Image src="/hackathon-2026.jpg" alt={t.imgAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="lg:col-span-7 px-8 py-10 lg:px-12 lg:py-12">
              <p className="eyebrow mb-4">{t.eyebrow}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {t.h2a}<br /><span className="text-ink-tertiary">{t.h2b}</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-md">{t.sub}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-border bg-canvas text-xs text-ink-secondary font-medium">{tag}</span>
                ))}
              </div>
              <Link href="/hackathon" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors">
                {t.cta}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
