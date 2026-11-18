"use client";
import { useLanguage } from "@/i18n/context";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, FileText, Mic, Trophy, BookOpen } from "lucide-react";

const tx = {
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbCurrent: "Presse",
    eyebrow: "Presse & Medien",
    h1: "Sustainista in den Medien.",
    sub: "Pressemitteilungen, Medienerwähnungen, Vorträge, Auszeichnungen und Forschungskooperationen. Pressekontakt: stefan.bauer@example.invalid",
    pressContact: "Pressekontakt",
    sectionHeading: "Erwähnungen, Vorträge & Auszeichnungen",
    journalistSection: "Für Journalist:innen & Veranstalter:innen",
    journalistIntro:
      "Stefan Bauer steht als Experte für Interviews, Podiumsgespräche und Gastbeiträge zu folgenden Themen zur Verfügung:",
    topics: [
      "ESG-Regulierung und CSRD für KMU",
      "Digitaler Produktpass und EU ESPR",
      "KI-Automatisierung in der Nachhaltigkeitsberichterstattung",
      "Battery Passport und EU Battery Regulation",
      "Kreislaufwirtschaft und Circular Business Models",
    ],
    cardH3: "Presseanfrage senden",
    cardBody:
      "Für Interviewanfragen, Zitate und Hintergrundinformationen wenden Sie sich direkt an:",
    btnLabel: "Presseanfrage senden",
    items: [
      {
        type: "Auszeichnung",
        date: "Juni 2025",
        title: "Sustainista unter den 'Top Berater 2025'",
        source: "IMWF, Institut für Management- und Wirtschaftsforschung",
        desc: "Das IMWF hat im Rahmen seiner jährlichen Studie über 32 Millionen Datenpunkte ausgewertet. Sustainista wurde als einer der führenden Nachhaltigkeitsberater Österreichs ausgezeichnet.",
        linkLabel: "Mehr lesen",
      },
      {
        type: "Vortrag",
        date: "März 2025",
        title: "Panel: 'Panel Data for Sustainability' am Austrian Innovation Forum",
        source: "Austrian Innovation Forum, Wien",
        desc: "In Partnerschaft mit A-Trust und Ines Holzegger präsentierte Stefan Bauer das Konzept 'Sustainability as a Service': datenbasiert, skalierbar, prüfbar.",
        linkLabel: "Bericht lesen",
      },
      {
        type: "Forschungskooperation",
        date: "Juli 2025",
        title: "Sustainista beim Auftakt des Digitalen Produkt Passes in St. Pölten",
        source: "PACE-DPP Projekt, FH St. Pölten",
        desc: "Sustainista präsentierte beim PACE-DPP Networking Event an der FH St. Pölten, mit über 100 Gästen aus Industrie, Forschung und Politik.",
        linkLabel: "Bericht lesen",
      },
      {
        type: "Veranstaltung",
        date: "Mai 2025",
        title: "Europe Tech Hackathon bei ViennaUP",
        source: "ViennaUP 2025, ÖBB Open Innovation Factory",
        desc: "200+ Besucher:innen, 3 Challenges, 48 Stunden. Der von Sustainista organisierte Europe Tech Hackathon war ein Highlight bei Wiens größtem Startup-Festival.",
        linkLabel: "Rückblick lesen",
      },
    ],
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Press",
    eyebrow: "Press & media",
    h1: "Sustainista in the media.",
    sub: "Awards, talks and media coverage. Contact for interview requests: stefan.bauer@example.invalid",
    pressContact: "Press contact",
    sectionHeading: "Coverage, talks & awards",
    journalistSection: "For journalists & event organisers",
    journalistIntro:
      "Stefan Bauer is available as an expert for interviews, panel discussions and guest contributions on the following topics:",
    topics: [
      "ESG regulation and CSRD for SMEs",
      "Digital Product Passport and EU ESPR",
      "AI automation in sustainability reporting",
      "Battery Passport and EU Battery Regulation",
      "Circular economy and circular business models",
    ],
    cardH3: "Send press enquiry",
    cardBody:
      "For interview requests, quotes and background information, contact:",
    btnLabel: "Send press enquiry",
    items: [
      {
        type: "Award",
        date: "June 2025",
        title: "Sustainista among the 'Top Consultants 2025'",
        source: "IMWF, Institute for Management and Economic Research",
        desc: "IMWF analysed over 32 million data points as part of its annual study. Sustainista was recognised as one of Austria's leading sustainability consultancies.",
        linkLabel: "Read more",
      },
      {
        type: "Talk",
        date: "March 2025",
        title: "Panel: 'Panel Data for Sustainability' at the Austrian Innovation Forum",
        source: "Austrian Innovation Forum, Vienna",
        desc: "In partnership with A-Trust and Ines Holzegger, Stefan Bauer presented the concept 'Sustainability as a Service': data-driven, scalable, verifiable.",
        linkLabel: "Read report",
      },
      {
        type: "Research cooperation",
        date: "July 2025",
        title: "Sustainista at the launch of the Digital Product Passport in St. Pölten",
        source: "PACE-DPP Project, FH St. Pölten",
        desc: "Sustainista presented at the PACE-DPP Networking Event at FH St. Pölten, with over 100 guests from industry, research and politics.",
        linkLabel: "Read report",
      },
      {
        type: "Event",
        date: "May 2025",
        title: "Europe Tech Hackathon at ViennaUP",
        source: "ViennaUP 2025, ÖBB Open Innovation Factory",
        desc: "200+ attendees, 3 challenges, 48 hours. The Europe Tech Hackathon organised by Sustainista was a highlight at Vienna's largest startup festival.",
        linkLabel: "Read recap",
      },
    ],
  },
};

const itemIcons = [Trophy, Mic, BookOpen, FileText];
const itemLinks = [
  "/magazin/top-berater-2025",
  "/magazin/panel-data-sustainability",
  "/magazin/sustainista-st-poelten-dpp",
  "/magazin/europe-tech-hackathon-viennaup",
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.example.invalid/presse",
      "name": "Sustainista: Presse & Medien",
      "url": "https://www.example.invalid/presse",
      "isPartOf": { "@id": "https://www.example.invalid/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.example.invalid" },
          { "@type": "ListItem", "position": 2, "name": "Presse", "item": "https://www.example.invalid/presse" },
        ],
      },
    },
    {
      "@type": "NewsArticle",
      "headline": "Sustainista unter den Top Berater 2025",
      "datePublished": "2025-06-01",
      "author": { "@id": "https://www.example.invalid/#stefan-bauer" },
      "publisher": { "@id": "https://www.example.invalid/#organization" },
      "about": { "@id": "https://www.example.invalid/#organization" },
      "url": "https://www.example.invalid/magazin/top-berater-2025",
      "description": "Das IMWF Institut für Management- und Wirtschaftsforschung zeichnet Sustainista als einen der führenden Nachhaltigkeitsberater Österreichs aus.",
    },
    {
      "@type": "Event",
      "name": "Panel: Panel Data for Sustainability am Austrian Innovation Forum",
      "startDate": "2025-03-01",
      "location": { "@type": "Place", "name": "Austrian Innovation Forum", "address": { "@type": "PostalAddress", "addressLocality": "Wien", "addressCountry": "AT" } },
      "organizer": { "@type": "Organization", "name": "Austrian Innovation Forum" },
      "performer": { "@id": "https://www.example.invalid/#stefan-bauer" },
      "url": "https://www.example.invalid/magazin/panel-data-sustainability",
    },
    {
      "@type": "Event",
      "name": "PACE-DPP Networking Event: Auftakt Digitaler Produktpass",
      "startDate": "2025-07-03",
      "location": { "@type": "Place", "name": "FH St. Pölten", "address": { "@type": "PostalAddress", "addressLocality": "St. Pölten", "addressCountry": "AT" } },
      "organizer": { "@type": "Organization", "name": "PACE-DPP" },
      "performer": { "@id": "https://www.example.invalid/#stefan-bauer" },
      "url": "https://www.example.invalid/magazin/sustainista-st-poelten-dpp",
    },
  ],
};

export default function Presse() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Navigation />
      <main>

        {/* Hero */}
        <section className="page-header relative min-h-[40vh] flex items-end pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ink-tertiary">
                <li><Link href="/" className="hover:text-ink transition-colors">{t.breadcrumbHome}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-secondary font-medium">{t.breadcrumbCurrent}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-6 block">{t.eyebrow}</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-5 text-ink" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              {t.h1}
            </h1>
            <p className="text-lg text-ink-secondary font-normal leading-relaxed max-w-2xl">
              {t.sub}
            </p>
          </div>
        </section>

        {/* Pressekontakt */}
        <section className="py-10 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <p className="text-sm font-bold text-ink mb-1">{t.pressContact}</p>
                <p className="text-sm text-ink-secondary">
                  Dr. Stefan Bauer · Gründer & CEO
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:stefan.bauer@example.invalid"
                  className="inline-flex items-center gap-2 border border-border bg-canvas text-ink-secondary hover:text-ink px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  stefan.bauer@example.invalid
                </a>
                <a
                  href="https://www.linkedin.com/in/stefan-bauer-innovator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-canvas text-ink-secondary hover:text-ink px-5 py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  LinkedIn
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press items */}
        <section className="py-24 bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-2xl font-black text-ink mb-10">{t.sectionHeading}</h2>
            <div className="space-y-4">
              {t.items.map(({ type, date, title, source, desc, linkLabel }, idx) => {
                const Icon = itemIcons[idx];
                const link = itemLinks[idx];
                return (
                  <div key={title} className="border border-border rounded-card p-7 bg-surface hover:shadow-ambient-low transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-btn border border-border bg-canvas flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4.5 h-4.5 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest border border-border bg-canvas text-ink-tertiary px-2.5 py-1 rounded-btn">
                            {type}
                          </span>
                          <span className="text-xs text-ink-tertiary">{date}</span>
                        </div>
                        <h3 className="text-base font-bold text-ink mb-1">{title}</h3>
                        <p className="text-xs text-brand-600 font-semibold mb-3">{source}</p>
                        <p className="text-sm text-ink-secondary leading-relaxed mb-4">{desc}</p>
                        <Link
                          href={link}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-ink transition-colors"
                        >
                          {linkLabel}
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Für Journalist:innen */}
        <section className="py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black text-ink mb-4">{t.journalistSection}</h2>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {t.journalistIntro}
                </p>
                <ul className="space-y-2">
                  {t.topics.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-canvas border border-border rounded-card p-7">
                <h3 className="text-base font-bold text-ink mb-4">{t.cardH3}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {t.cardBody}
                </p>
                <a
                  href="mailto:stefan.bauer@example.invalid?subject=Presseanfrage"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-canvas px-6 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                >
                  {t.btnLabel}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
