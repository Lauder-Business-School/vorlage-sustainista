"use client";

import { useLanguage } from "@/i18n/context";

export default function Trust() {
  const { locale } = useLanguage();
  const title = locale === "de" ? "Themen und Standards" : "Topics and standards";
  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {["GHG Protocol", "VSME / ESRS", "EU Battery Regulation", "ISO 14064", "ISO 14067", "Digitaler Produktpass"].map((item) => (
            <span key={item} className="rounded-card border border-border bg-surface px-4 py-3 text-sm font-semibold">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
