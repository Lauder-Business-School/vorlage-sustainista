"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

export default function ArticleFaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-border">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="border-b border-border">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left"
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            <span className="text-base font-semibold text-ink pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-4 h-4 text-ink-tertiary flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          {/* Immer gerendert, geschlossen nur per hidden verborgen: die Antwort muss im
              ausgelieferten HTML stehen, sonst verspricht das FAQPage-JSON-LD Text,
              den Crawler auf der Seite nicht finden. */}
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            hidden={open !== i}
            className="pb-6"
          >
            <p className="text-base text-ink-secondary leading-relaxed max-w-[68ch]">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
