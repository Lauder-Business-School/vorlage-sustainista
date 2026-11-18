"use client";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";

const labels = {
  de: { eyebrow: "16 Partner & Institutionen", sub: "Vertraut von führenden Unternehmen, Fördergebern und Institutionen" },
  en: { eyebrow: "16 partners & institutions", sub: "Trusted by leading companies, funders and institutions" },
};

type Partner = {
  src: string;
  alt: string;
  href?: string;
  width: number;
  height: number;
};

const partners: Partner[] = [
  { src: "/partner-ait.svg",                alt: "AIT Austrian Institute of Technology", href: "https://www.ait.ac.at",                                                width: 150, height: 40 },
  { src: "/partner-vba.png",                alt: "Vienna Business Agency",   href: "https://viennabusinessagency.at",                                                   width: 100, height: 40 },
  { src: "/partner-microsoft.jpg",          alt: "Microsoft for Startups",   href: "https://www.microsoft.com/en-us/startups",                                          width: 140, height: 40 },
  { src: "/partner-google.png",             alt: "Google",                                                                                                               width: 80,  height: 40 },
  { src: "/partner-infineon.png",           alt: "Infineon",                 href: "https://www.infineon.com",                                                          width: 110, height: 40 },
  { src: "/partner-oebb.jpeg",              alt: "ÖBB",                      href: "https://www.oebb.at",                                                               width: 80,  height: 40 },
  { src: "/partner-atrust.png",             alt: "A-Trust",                  href: "https://www.a-trust.at",                                                            width: 120, height: 40 },
  { src: "/partner-research-studios.png",   alt: "Research Studios Austria", href: "https://www.researchstudio.at",                                                     width: 130, height: 40 },
  { src: "/partner-ai-factory.png",         alt: "AI Factory Austria",       href: "https://aifactory.at",                                                              width: 120, height: 40 },
  { src: "/partner-bka.png",                alt: "Bundeskanzleramt",         href: "https://www.bundeskanzleramt.gv.at",                                                width: 80,  height: 40 },
  { src: "/partner-oeko-business-wien.png", alt: "Ökobusiness Wien",         href: "https://www.wien.gv.at/wirtschaft/oekobusiness",                                    width: 130, height: 40 },
  { src: "/partner-acredia.jpeg",           alt: "ACREDIA",                  href: "https://www.acredia.at",                                                            width: 120, height: 40 },
  { src: "/partner-oekb.png",               alt: "OeKB ESG Data Hub",        href: "https://www.oekb.at/en/oekb-esg-data-hub/esg-netzwerk/sustainista.html",           width: 140, height: 40 },
  { src: "/bij-logo.png",                   alt: "Bund Europäischer Jugend",                                                                                             width: 100, height: 40 },
  { src: "/partner-viennaup.png",           alt: "ViennaUP",                 href: "https://www.viennaup.com",                                                          width: 130, height: 40 },
  { src: "/partner-oegig.png",              alt: "ÖGIG",                     href: "https://www.oegig.at",                                                              width: 110, height: 40 },
];

export default function Partners() {
  const { locale } = useLanguage();
  const t = labels[locale];

  return (
    <section className="py-12 border-y border-border bg-canvas overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-7 flex flex-col items-center gap-1">
        <p className="eyebrow">{t.eyebrow}</p>
        <p className="text-xs text-ink-tertiary">{t.sub}</p>
      </div>

      <div
        className="relative group"
        role="marquee"
        aria-label={locale === "de" ? "Partner und Institutionen" : "Partners and institutions"}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-canvas to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-canvas to-transparent pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {partners.map((partner) => (
            <PartnerLogo key={partner.alt} partner={partner} />
          ))}
          <span aria-hidden="true" className="flex items-center">
            {partners.map((partner) => (
              <PartnerLogo key={`dup-${partner.alt}`} partner={partner} interactive={false} />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ partner, interactive = true }: { partner: Partner; interactive?: boolean }) {
  const img = (
    <Image
      src={partner.src}
      alt={partner.alt}
      width={partner.width * 3}
      height={partner.height * 3}
      className="h-10 w-auto max-w-[10rem] object-contain opacity-70 mix-blend-multiply grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 motion-reduce:transition-none sm:h-11"
    />
  );

  if (partner.href && interactive) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        title={partner.alt}
        className="mx-8 inline-flex sm:mx-10 items-center justify-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
      >
        {img}
      </a>
    );
  }

  return (
    <div title={partner.alt} className="mx-8 inline-flex sm:mx-10 items-center justify-center flex-shrink-0">
      {img}
    </div>
  );
}
