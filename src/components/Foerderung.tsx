"use client";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import { useLanguage } from "@/i18n/context";

const tx = {
  de: {
    eyebrow: "Geförderter Einstieg",
    h2a: "Zwei Programme",
    h2b: "fördern Schritt\u00A01.",
    desc: "Wir arbeiten mit genau zwei Förderprogrammen, die wir aus der Praxis kennen: ÖkoBusiness Wien und Ökomanagement Niederösterreich. Beide finanzieren Beratung mit, die messbare Umwelt- und Klimaschutzmaßnahmen im Betrieb umsetzt. Wir klären im Erstgespräch, welches Programm zu Ihnen passt.",
    cta: "Einstieg besprechen",
    faqTitle: "Häufige Fragen zur Förderung",
    programs: [
      {
        key: "wien",
        region: "Wien",
        title: "ÖkoBusiness Wien",
        sub: "Programm der Stadt Wien",
        highlight: "€ 1.000",
        highlightSub: "Eigenanteil",
        body: "ÖkoBusiness Wien kofinanziert die Beratung für Wiener Unternehmen. Ihr Eigenanteil beträgt € 1.000, Sustainista ist offizieller Programmpartner.",
        href: "https://unternehmen.oekobusiness.wien.at/",
        linkLabel: "Zum ÖkoBusiness-Unternehmensportal",
        logo: "/partner-oeko-business-wien.png",
      },
      {
        key: "noe",
        region: "Niederösterreich",
        title: "Ökomanagement NÖ",
        sub: "Programm des Landes Niederösterreich",
        highlight: "bis 50 %",
        highlightSub: "der Beratungskosten",
        body: "Ökomanagement NÖ fördert bis zu 20 Beratungstage für niederösterreichische Betriebe. Voraussetzung ist die Bereitschaft, messbare Maßnahmen über das gesetzliche Minimum hinaus umzusetzen.",
        href: "https://noe.gv.at/noe/Umweltschutz/Oekomanagement_NOe.html",
        linkLabel: "Zum Programm des Landes NÖ",
        logo: null,
      },
    ],
    oekb: {
      title: "OeKB ESG Data Hub",
      sub: "Daten einmal erheben, mehrfach nutzen",
      body: "Sustainista ist Partner im OeKB ESG Data Hub. Wir erstellen Ihren ESG-Bericht, befüllen die Daten im Hub und pflegen sie jedes Jahr nach, damit Banken und Kunden direkt darauf zugreifen können.",
      linkLabel: "Sustainista im OeKB ESG-Netzwerk ansehen",
    },
    note: "Fördersätze laut Programmangaben, Stand 2026. Die Zusage trifft die jeweilige Förderstelle.",
    faqs: [
      { q: "Welche Förderungen nutzt Sustainista?", a: "Wir konzentrieren uns bewusst auf zwei Programme: ÖkoBusiness Wien für Unternehmen in Wien und Ökomanagement Niederösterreich für Betriebe in Niederösterreich. Beide sind auf Umwelt- und Klimaschutzberatung in Betrieben ausgerichtet und passen zu unserem Einstiegsprojekt." },
      { q: "Was kostet der Einstieg über ÖkoBusiness Wien?", a: "Für Wiener Unternehmen kofinanziert ÖkoBusiness Wien die Beratung, Ihr Eigenanteil beträgt € 1.000. Sustainista ist offizieller Programmpartner und stimmt den Ablauf mit dem Programm ab." },
      { q: "Was fördert Ökomanagement NÖ?", a: "Das Land Niederösterreich fördert über Ökomanagement NÖ bis zu 20 Beratungstage, für Betriebe mit bis zu 50 % der Beratungskosten. Voraussetzung ist die Bereitschaft, messbare Umwelt- und Klimaschutzmaßnahmen umzusetzen, die über die gesetzlichen Mindestanforderungen hinausgehen." },
      { q: "Muss ich den Antrag selbst stellen?", a: "Nein. Wir bereiten Projektbeschreibung und Unterlagen vor und stimmen uns mit der Programmstelle ab. Ihr Aufwand: ein kurzes Abstimmungsgespräch und die Unterschrift." },
    ],
  },
  en: {
    eyebrow: "Funded entry",
    h2a: "Two programmes",
    h2b: "fund step\u00A01.",
    desc: "We work with exactly two funding programmes we know from practice: ÖkoBusiness Wien and Ökomanagement Lower Austria. Both co-finance consulting that implements measurable environmental and climate measures in your company. In the first call we clarify which one fits.",
    cta: "Discuss your entry",
    faqTitle: "Frequently asked questions about funding",
    programs: [
      {
        key: "wien",
        region: "Vienna",
        title: "ÖkoBusiness Wien",
        sub: "City of Vienna programme",
        highlight: "€ 1,000",
        highlightSub: "own contribution",
        body: "ÖkoBusiness Wien co-finances consulting for Vienna-based companies. Your own contribution is €1,000, and Sustainista is an official programme partner.",
        href: "https://unternehmen.oekobusiness.wien.at/",
        linkLabel: "Open the ÖkoBusiness business portal",
        logo: "/partner-oeko-business-wien.png",
      },
      {
        key: "noe",
        region: "Lower Austria",
        title: "Ökomanagement NÖ",
        sub: "State of Lower Austria programme",
        highlight: "up to 50%",
        highlightSub: "of consulting costs",
        body: "Ökomanagement NÖ funds up to 20 consulting days for companies in Lower Austria. The requirement is a commitment to measurable measures beyond the legal minimum.",
        href: "https://noe.gv.at/noe/Umweltschutz/Oekomanagement_NOe.html",
        linkLabel: "Open the Lower Austria programme",
        logo: null,
      },
    ],
    oekb: {
      title: "OeKB ESG Data Hub",
      sub: "Collect data once, use it many times",
      body: "Sustainista is a partner in the OeKB ESG Data Hub. We prepare your ESG report, enter the data in the hub and update it every year so banks and customers can access it directly.",
      linkLabel: "View Sustainista in the OeKB ESG Network",
    },
    note: "Funding rates as stated by the programmes, 2026. The funding body makes the final decision.",
    faqs: [
      { q: "Which funding programmes does Sustainista use?", a: "We deliberately focus on two programmes: ÖkoBusiness Wien for companies in Vienna and Ökomanagement Lower Austria for companies in Lower Austria. Both target environmental and climate consulting in companies and fit our entry project." },
      { q: "What does the entry via ÖkoBusiness Wien cost?", a: "For Vienna-based companies, ÖkoBusiness Wien co-finances the consulting and your own contribution is €1,000. Sustainista is an official programme partner and coordinates the process with the programme." },
      { q: "What does Ökomanagement NÖ fund?", a: "Through Ökomanagement NÖ, the State of Lower Austria funds up to 20 consulting days, covering up to 50% of consulting costs for companies. The requirement is a commitment to measurable environmental and climate measures beyond the legal minimum." },
      { q: "Do I have to submit the application myself?", a: "No. We prepare the project description and documents and coordinate with the programme office. Your effort: one short alignment call and the signature." },
    ],
  },
};

export default function Foerderung() {
  const { locale } = useLanguage();
  const t = tx[locale];

  return (
    // Teil des Abschnitts „Drei Schritte" (ServicePackages): kein eigenes Band, keine eigene H2.
    <div id="foerderung" className="mt-20 scroll-mt-24 border-t border-border pt-16">
      <div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-[1.1] mb-5">
              {t.h2a} <span className="text-ink-tertiary">{t.h2b}</span>
            </h3>
            <p className="text-ink-secondary text-base leading-relaxed mb-8 max-w-[52ch]">{t.desc}</p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-border text-ink-secondary hover:text-ink hover:border-ink-secondary bg-canvas px-5 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-all"
            >
              {t.cta}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.programs.map((p) => (
              <a
                key={p.key}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-border rounded-card p-6 bg-surface hover:border-ink-secondary transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-5 min-h-10">
                  <p className="text-marke font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{p.region}</p>
                  {p.logo && (
                    <Image src={p.logo} alt="" width={340} height={156} className="h-9 w-auto object-contain" />
                  )}
                </div>
                <p className="text-3xl font-black text-brand-600 leading-none tabular-nums">{p.highlight}</p>
                <p className="text-xs text-ink-tertiary font-semibold mt-1 mb-5">{p.highlightSub}</p>
                <h4 className="text-lg font-extrabold text-ink tracking-tight">{p.title}</h4>
                <p className="text-xs text-ink-tertiary font-semibold uppercase tracking-[0.08em] mb-3">{p.sub}</p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-5 flex-1">{p.body}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                  {p.linkLabel}
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>
            ))}
            <div className="sm:col-span-2 border border-border rounded-card p-6 bg-canvas">
              <p className="text-lg font-extrabold text-ink tracking-tight">{t.oekb.title}</p>
              <p className="text-xs text-ink-tertiary font-semibold uppercase tracking-[0.08em] mb-3">{t.oekb.sub}</p>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">{t.oekb.body}</p>
              <a
                href="https://www.oekb.at/en/oekb-esg-data-hub/esg-netzwerk/sustainista.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                {t.oekb.linkLabel}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
            <p className="sm:col-span-2 text-klein text-ink-tertiary">{t.note}</p>
          </div>

        </div>

        <div className="mt-14">
          <h4 className="text-xl font-extrabold text-ink tracking-tight mb-6">{t.faqTitle}</h4>
          <ArticleFaqAccordion faqs={t.faqs} />
        </div>

      </div>
    </div>
  );
}
