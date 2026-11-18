"use client";
import { Factory, BatteryCharging, RefreshCw } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Zielgruppen",
    h2a: "Für KMU,",
    h2b: "die ESG ernst nehmen.",
    groups: [
      "KMU-Geschäftsführung", "Einkauf & Beschaffung", "Qualitätsmanagement",
      "Nachhaltigkeitsverantwortliche", "Office Management", "Fahrzeughandel",
      "E-Bike-Handel", "Agenturen & Dienstleister", "Verleihbetriebe",
      "Produzenten & Zulieferer", "Verpackungsunternehmen", "Kunststoff & Materialien",
    ],
    cards: [
      {
        title: "Produzenten & Zulieferer",
        label: "Häufigste Anfrage",
        description: "Wenn Ihr Großkunde CSRD-pflichtig ist, fragt er seit 2025 Emissionsdaten von Ihnen an. Verpackungs-, Kunststoff-, Holz- und Komponentenunternehmen sind de facto bereits betroffen, auch ohne eigene Berichtspflicht.",
      },
      {
        title: "Fahrzeug- & E-Bike-Handel",
        label: "Ab 2027 Pflicht",
        description: "Ab 2027 ist ohne EU-Batteriepass keine Vermarktung von Industriebatterien in der EU möglich. Händler, Verleihbetriebe und Refurbishment-Anbieter, die heute handeln, sichern morgen ihre Marktposition.",
      },
      {
        title: "Dienstleister & Agenturen",
        label: "Wachstumsmarkt",
        description: "Beratungsunternehmen, IT-Dienstleister und Agenturen, die für Großkunden tätig sind, werden zunehmend nach ESG-Daten gefragt. Sustainista hilft, diese Anforderung in einen Wettbewerbsvorteil zu verwandeln.",
      },
    ],
  },
  en: {
    eyebrow: "Target groups",
    h2a: "For SMEs",
    h2b: "who take ESG seriously.",
    groups: [
      "SME management", "Procurement & purchasing", "Quality management",
      "Sustainability officers", "Office management", "Vehicle retail",
      "E-bike retail", "Agencies & service providers", "Rental businesses",
      "Producers & suppliers", "Packaging companies", "Plastics & materials",
    ],
    cards: [
      {
        title: "Producers & suppliers",
        label: "Most common request",
        description: "If your largest customer is CSRD-obligated, they have been requesting your emission data since 2025. Packaging, plastics, wood and component companies are de facto already affected, even without their own reporting obligation.",
      },
      {
        title: "Vehicle & e-bike retail",
        label: "Mandatory from 2027",
        description: "From 2027, industrial batteries cannot be marketed in the EU without an EU battery passport. Retailers, rental businesses and refurbishment providers who act today secure their market position for tomorrow.",
      },
      {
        title: "Service providers & agencies",
        label: "Growth market",
        description: "Consulting firms, IT service providers and agencies working for large clients are increasingly asked for ESG data. Sustainista helps turn this requirement into a competitive advantage.",
      },
    ],
  },
};

const cardIcons = [Factory, BatteryCharging, RefreshCw];

export default function TargetGroups() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <section id="zielgruppen" className="py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-4">
            {t.h2a}<br />
            <span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
        </div>

        <div className="relative mb-16 overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden="true" />
          <div className="flex animate-marquee whitespace-nowrap gap-3" aria-label={t.eyebrow}>
            {[...t.groups, ...t.groups].map((g, i) => (
              <span key={i} className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-surface text-sm text-ink-secondary font-medium flex-shrink-0">{g}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.cards.map(({ title, label, description }, i) => {
            const Icon = cardIcons[i];
            return (
              <div key={title} className="bg-surface rounded-card p-7 border border-border hover:-translate-y-0.5 hover:shadow-ambient-low transition-all">
                <div className="mb-5"><Icon className="w-6 h-6 text-brand-600" strokeWidth={1.5} aria-hidden="true" /></div>
                <span className="inline-flex items-center gap-1.5 border border-border rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-secondary bg-canvas mb-4">{label}</span>
                <h3 className="text-base font-semibold text-ink mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
