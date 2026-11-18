"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/context";

interface Faq { q: string; a: string; }

const titles = { de: "Häufige Fragen", en: "Frequently asked questions" };

export default function HomepageFaq({ faqsDe, faqsEn }: { faqsDe: Faq[]; faqsEn: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const { locale } = useLanguage();
  const faqs = locale === "en" ? faqsEn : faqsDe;

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.05] mb-12">
          {titles[locale]}
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border border-border rounded-card bg-canvas overflow-hidden">
              <dt>
                <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
                  aria-controls={`hp-faq-answer-${i}`} id={`hp-faq-btn-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface transition-colors">
                  <span className="text-sm font-semibold text-ink leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-ink-tertiary flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </dt>
              {/* siehe ArticleFaqAccordion: immer rendern, geschlossen nur verbergen,
                  sonst fehlt die Antwort im ausgelieferten HTML, obwohl das
                  FAQPage-JSON-LD sie Google gegenüber behauptet. */}
              <dd
                id={`hp-faq-answer-${i}`}
                role="region"
                aria-labelledby={`hp-faq-btn-${i}`}
                hidden={open !== i}
                className="px-6 pb-5"
              >
                <p className="text-sm text-ink-secondary leading-relaxed">{faq.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
