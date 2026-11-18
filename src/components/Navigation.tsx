"use client";

import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/context";

const CALENDLY = "#kontakt";

const t = {
  de: {
    produkte: "Produkte",
    allProducts: "Alle Produkte im Überblick →",
    toolsHeading: "Kostenlose Tools",
    hackathon: "Hackathon",
    magazin: "Magazin",
    projekte: "Projekte",
    ueber: "Über uns",
    glossar: "Glossar",
    cta: "Termin buchen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    platformHeading: "Software-Plattform",
    servicesHeading: "Beratung & Umsetzung",
    platform: [
      { label: "Plattform-Überblick", href: "/plattform", desc: "Produktpass und Nachhaltigkeitsbericht auf einen Blick" },
      { label: "Digitaler Produktpass", href: "/produkte/digitaler-produktpass", desc: "EU-konformer DPP für Produkte & Hersteller" },
      { label: "Batteriepass", href: "/produkte/batteriepass", desc: "EU-Pflicht ab 18.02.2027 für EV-, LMT- & Industriebatterien" },
      { label: "Nachhaltigkeitsbericht", href: "/produkte/nachhaltigkeitsbericht", desc: "Software für Berichte nach VS und GRI, jeder Wert mit Beleg" },
      { label: "KI-Zugang", href: "/plattform/ki-zugang", desc: "Sustainista als Connector in Claude und ChatGPT", badge: "Neu" },
    ],
    items: [
      { label: "Compliance Check", href: "/produkte/compliance-check", desc: "Batteriepass & Produktpass: Readiness in 4 Wochen" },
      { label: "ESG-Analyse & Bericht", href: "/produkte/esg-analyse", desc: "CO₂-Bilanz, CSRD-Readiness, ESG-Erstbericht" },
      { label: "KI-Automatisierung", href: "/produkte/ki-automatisierung", desc: "Datenpipelines, Rechnungsextraktion, Reporting" },
      { label: "PPWR Compliance", href: "/produkte/ppwr-compliance", desc: "Verpackungsdaten, ARA- & LUCID-Meldungen vorbereiten" },
      { label: "Circular Stock für Mode", href: "/produkte/circular-stock-management", desc: "Restbestände, Retouren & ESPR-Vernichtungsverbot" },
      { label: "Product Carbon Footprint", href: "/produkte/product-carbon-footprint", desc: "PCF-Berechnung nach ISO 14067 & GHG Protocol" },
      { label: "LCA-Berechnung", href: "/produkte/lca-berechnung", desc: "Life Cycle Assessment nach ISO 14040/14044" },
    ],
    tools: [
      { label: "CO₂-Rechner", href: "/tools/co2-rechner", desc: "Emissionen berechnen, kostenlos" },
      { label: "ROI-Kalkulator", href: "/tools/roi-kalkulator", desc: "Was kostet Inaction?" },
    ],
  },
  en: {
    produkte: "Products",
    allProducts: "All products overview →",
    toolsHeading: "Free Tools",
    hackathon: "Hackathon",
    magazin: "Magazine",
    projekte: "Projects",
    ueber: "About us",
    glossar: "Glossary",
    cta: "Book a call",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    platformHeading: "Software platform",
    servicesHeading: "Consulting & delivery",
    platform: [
      { label: "Platform overview", href: "/plattform", desc: "Product passport and sustainability report at a glance" },
      { label: "Digital Product Passport", href: "/produkte/digitaler-produktpass", desc: "EU-compliant DPP for products & manufacturers" },
      { label: "Battery Passport", href: "/produkte/batteriepass", desc: "EU requirement from 18 Feb 2027 for EV, LMT & industrial batteries" },
      { label: "Sustainability Report", href: "/produkte/nachhaltigkeitsbericht/en", desc: "Software for reports under VS and GRI, every value with evidence" },
      { label: "AI access", href: "/plattform/ki-zugang", desc: "Sustainista as a connector in Claude and ChatGPT", badge: "New" },
    ],
    items: [
      { label: "Compliance Check", href: "/produkte/compliance-check", desc: "Battery & product passport readiness in 4 weeks" },
      { label: "ESG Analysis & Report", href: "/produkte/esg-analyse", desc: "CO₂ accounting, CSRD readiness, first ESG report" },
      { label: "AI Automation", href: "/produkte/ki-automatisierung", desc: "Data pipelines, invoice extraction, reporting" },
      { label: "PPWR Compliance", href: "/produkte/ppwr-compliance", desc: "Packaging data, ARA & LUCID reporting prepared" },
      { label: "Circular Stock for Fashion", href: "/produkte/circular-stock-management", desc: "Unsold stock, returns & ESPR destruction ban" },
      { label: "Product Carbon Footprint", href: "/produkte/product-carbon-footprint", desc: "PCF calculation per ISO 14067 & GHG Protocol" },
      { label: "LCA Calculation", href: "/produkte/lca-berechnung", desc: "Life Cycle Assessment per ISO 14040/14044" },
    ],
    tools: [
      { label: "CO₂ Calculator", href: "/tools/co2-rechner", desc: "Calculate emissions, free" },
      { label: "ROI Calculator", href: "/tools/roi-kalkulator", desc: "What does inaction cost?" },
    ],
  },
};

const navLinks = {
  de: [
    { label: "Hackathon", href: "/hackathon" },
    { label: "Magazin", href: "/magazin" },
    { label: "Trendradar", href: "/trendradar" },
    { label: "Projekte", href: "/projekte" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Glossar", href: "/glossar" },
  ],
  en: [
    { label: "Hackathon", href: "/hackathon" },
    { label: "Magazine", href: "/magazin" },
    { label: "Trend Radar", href: "/trendradar" },
    { label: "Projects", href: "/projekte" },
    { label: "About us", href: "/ueber-uns" },
    { label: "Glossary", href: "/glossar" },
  ],
};

const BANNER_KEY = "sustainista_banner_v2";

const bannerTx = {
  // Vorher stand hier "CSRD greift für mittelgroße Unternehmen ab 2026". Das ist seit der
  // Omnibus-Richtlinie (EU) 2026/470 falsch: berichtspflichtig sind nur Unternehmen mit mehr als
  // 1.000 Mitarbeitenden UND mehr als 450 Mio. Euro Umsatz, erstmals für das Geschäftsjahr 2027.
  // short: unter sm passt der volle Satz nicht in die 40px-Leiste. Zweizeilig würde den
  // Header verschieben, auf dessen 104px sich Decks und Claw-Seite verlassen.
  de: { text: "Batteriepass ab 18.02.2027: Lieferantendaten bis ca. 20.01. einholen. Compliance Check in 4 Wochen", short: "Batteriepass: Compliance Check", cta: "Mehr erfahren →", dismiss: "Schließen" },
  en: { text: "Battery passport from 18 Feb 2027: collect supplier data by ~20 Jan. Compliance Check in 4 weeks", short: "Battery passport: Compliance Check", cta: "Learn more →", dismiss: "Close" },
};

// Der Server kennt sessionStorage nicht und rendert die Leiste immer. Liest der
// useState-Initialisierer den Wert, hydriert der Client mit anderem HTML (React #418).
// useSyncExternalStore hydriert mit dem Server-Wert und zieht den gespeicherten nach.
const keinAbo = () => () => {};
const leisteGeschlossen = () => !!sessionStorage.getItem(BANNER_KEY);
const leisteOffenAufDemServer = () => false;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [produkteOpen, setProduktOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const bannerStored = useSyncExternalStore(keinAbo, leisteGeschlossen, leisteOffenAufDemServer);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuFirstItemRef = useRef<HTMLButtonElement>(null);
  const { locale, setLocale } = useLanguage();

  // Seiten, die ihren eigenen Umschalter im Seitenkopf tragen: zwei identische
  // Umschalter direkt übereinander sind schlechter als einer.
  const EIGENER_SPRACHUMSCHALTER = ["/produkte/nachhaltigkeitsbericht/praesentation"];
  const zeigeSprachumschalter = !EIGENER_SPRACHUMSCHALTER.includes(pathname);
  const tx = t[locale];
  const links = navLinks[locale];
  const banner = bannerTx[locale];
  const showBanner = !bannerStored && !bannerDismissed;

  function dismissBanner() {
    setBannerDismissed(true);
    sessionStorage.setItem(BANNER_KEY, "1");
  }

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProduktOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setProduktOpen(false), 150);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProduktOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (produkteOpen) setProduktOpen(false);
      if (menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [produkteOpen, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const t = setTimeout(() => menuFirstItemRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [menuOpen]);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const isProdActive = pathname.startsWith("/produkte") || pathname.startsWith("/plattform");

  return (
    <>
    {/*
      aside statt div: die Leiste stand als einziger Inhalt der Seite außerhalb
      jedes Landmarks — für einen Screenreader war sie damit über die
      Landmark-Navigation nicht erreichbar (axe: region).
    */}
    {showBanner && (
      <aside aria-label={banner.text} className="fixed top-0 left-0 right-0 z-[55] bg-brand-600 flex items-center justify-between gap-2 px-4 h-10">
        {/* Vorher kappte truncate den ganzen Absatz samt Link: mobil war der Link weg.
            Jetzt kürzt nur der Text, der Link schrumpft nie. */}
        <p className="flex min-w-0 flex-1 items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold text-canvas">
          <span className="min-w-0 truncate sm:hidden">{banner.short}</span>
          <span className="hidden min-w-0 truncate sm:block">{banner.text}</span>
          <a href="/produkte/compliance-check" className="shrink-0 underline underline-offset-2 hover:no-underline">{banner.cta}</a>
        </p>
        <button type="button"
          onClick={dismissBanner}
          aria-label={banner.dismiss}
          className="flex-shrink-0 text-brand-200 hover:text-canvas transition-colors p-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>
    )}
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-200 bg-canvas ${
        showBanner ? "top-10" : "top-0"
      } ${
        scrolled
          ? "border-b border-border shadow-ambient-medium"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/sustainista-logo.png"
              alt="Sustainista: Nachhaltigkeit als Service"
              width={1278}
              height={176}
              priority
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">

            {/* Produkte dropdown */}
            <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
              <div className="flex items-center">
                <Link
                  href="/produkte"
                  className={`px-2.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                    isProdActive ? "text-brand-600" : "text-ink-secondary hover:text-ink"
                  }`}
                  aria-current={pathname === "/produkte" ? "page" : undefined}
                >
                  {tx.produkte}
                </Link>
                <button
                  type="button"
                  aria-expanded={produkteOpen}
                  aria-haspopup="true"
                  aria-label={`${tx.produkte} Untermenü ${produkteOpen ? "schließen" : "öffnen"}`}
                  // Hover hat das Menü bei der Maus schon geöffnet: ein Umschalten würde es
                  // mit dem Klick wieder schließen. Nur die Tastatur (detail 0) schaltet um.
                  onClick={(e) => setProduktOpen((v) => (e.detail === 0 ? !v : true))}
                  className={`p-1.5 rounded transition-colors duration-150 ${isProdActive ? "text-brand-600" : "text-ink-secondary hover:text-ink"}`}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${produkteOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>

              {produkteOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-[min(46rem,calc(100vw-2rem))] max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain bg-canvas border border-border rounded-card shadow-ambient-medium z-50 grid grid-cols-2"
                >
                  <div className="bg-surface border-r border-border py-3">
                    <p className="px-4 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{tx.platformHeading}</p>
                    {tx.platform.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setProduktOpen(false)}
                          className={`block px-4 py-2.5 hover:bg-canvas transition-colors ${isActive ? "text-brand-600" : "text-ink"}`}
                        >
                          <span className="flex items-center gap-2 text-sm font-semibold leading-snug">
                            {item.label}
                            {"badge" in item && item.badge && (
                              <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{item.badge}</span>
                            )}
                          </span>
                          <span className="block text-xs text-ink-tertiary mt-0.5">{item.desc}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="py-3">
                  <p className="px-4 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{tx.servicesHeading}</p>
                  {tx.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProduktOpen(false)}
                        className={`block px-4 py-2 hover:bg-surface transition-colors ${isActive ? "text-brand-600" : "text-ink"}`}
                      >
                        <span className="block text-sm font-semibold leading-snug">{item.label}</span>
                        <span className="block text-xs text-ink-tertiary mt-0.5">{item.desc}</span>
                      </Link>
                    );
                  })}
                  <div className="mt-1 mx-3 pt-2 border-t border-border">
                    <Link
                      href="/produkte"
                      onClick={() => setProduktOpen(false)}
                      className="block px-1 py-2 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      {tx.allProducts}
                    </Link>
                  </div>
                  <div className="mx-3 pt-2 mt-1 border-t border-border">
                    <p className="px-1 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{tx.toolsHeading}</p>
                    {tx.tools.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProduktOpen(false)}
                        className="block px-1 py-2 hover:text-brand-600 transition-colors"
                      >
                        <span className="block text-sm font-semibold text-ink leading-snug">{item.label}</span>
                        <span className="block text-xs text-ink-tertiary mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>

            {links.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-pill${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            {zeigeSprachumschalter && (
            <div className="flex items-center gap-0.5 rounded-btn border border-border bg-surface p-0.5" role="group" aria-label="Language">
              <button type="button"
                onClick={() => setLocale("de")}
                className={`px-2.5 py-1 rounded-[4px] text-xs font-semibold transition-colors ${
                  locale === "de" ? "bg-canvas text-ink shadow-sm" : "text-ink-tertiary hover:text-ink"
                }`}
                aria-pressed={locale === "de"}
              >
                DE
              </button>
              <button type="button"
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-[4px] text-xs font-semibold transition-colors ${
                  locale === "en" ? "bg-canvas text-ink shadow-sm" : "text-ink-tertiary hover:text-ink"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
            )}

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] px-5 py-2.5 rounded-btn bg-brand-600 hover:bg-brand-700 text-canvas transition-colors duration-150"
            >
              {tx.cta}
            </a>
          </div>

          {/* Mobile toggle */}
          <button type="button"
            className="lg:hidden p-2 text-ink-secondary hover:text-ink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? tx.menuClose : tx.menuOpen}
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

      </div>
    </header>

    {/* Backdrop */}
    <div
      className={`fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-200 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setMenuOpen(false)}
      aria-hidden="true"
    />

    {/* Mobile Drawer */}
    <nav
      id="mobile-menu"
      aria-label="Mobile Navigation"
      {...(!menuOpen ? { inert: true } : {})}
      className={`fixed inset-x-0 z-40 lg:hidden bg-canvas border-t border-border shadow-ambient-medium overflow-y-auto transition-transform duration-300 ease-out ${
        showBanner ? "top-[104px] max-h-[calc(100dvh-104px)]" : "top-16 max-h-[calc(100dvh-4rem)]"
      } ${
        menuOpen ? "translate-y-0" : "-translate-y-[110%]"
      }`}
      aria-hidden={!menuOpen}
      inert={!menuOpen}
    >
      <div className="px-4 py-4 space-y-1">

        {/* Produkte accordion */}
        <button type="button"
          ref={menuFirstItemRef}
          onClick={() => setMobileProdOpen((v) => !v)}
          className={`w-full flex items-center justify-between rounded-btn px-4 py-3 text-sm font-semibold transition-colors ${
            isProdActive ? "bg-brand-50 text-brand-600" : "text-ink-secondary hover:text-ink hover:bg-surface"
          }`}
          aria-expanded={mobileProdOpen}
        >
          {tx.produkte}
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileProdOpen ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        {mobileProdOpen && (
          <div className="pl-4 pb-2 space-y-0.5 border-l-2 border-brand-100 ml-3">
            <p className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{tx.platformHeading}</p>
            {tx.platform.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 py-2.5 px-3 text-sm rounded-btn transition-colors ${
                  pathname === item.href ? "text-brand-600 font-semibold" : "text-ink-secondary hover:text-ink hover:bg-surface"
                }`}
              >
                {item.label}
                {"badge" in item && item.badge && (
                  <span className="rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{item.badge}</span>
                )}
              </Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-tertiary">{tx.servicesHeading}</p>
            {tx.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 px-3 text-sm rounded-btn transition-colors ${
                  pathname === item.href ? "text-brand-600 font-semibold" : "text-ink-secondary hover:text-ink hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/produkte"
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-3 text-sm font-semibold text-brand-600 hover:bg-brand-50 rounded-btn transition-colors"
            >
              {tx.allProducts}
            </Link>
          </div>
        )}

        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-btn px-4 py-3 text-sm font-medium transition-colors ${
                isActive ? "bg-brand-50 text-brand-600 font-semibold" : "text-ink-secondary hover:text-ink hover:bg-surface"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Mobile language switcher */}
        {zeigeSprachumschalter && (
        <div className="flex items-center gap-2 px-4 pt-2" role="group" aria-label="Language">
          <span className="text-xs text-ink-tertiary font-medium">Language:</span>
          <button type="button"
            onClick={() => setLocale("de")}
            aria-pressed={locale === "de"}
            className={`px-2.5 py-1 rounded-[4px] text-xs font-semibold border transition-colors ${
              locale === "de" ? "bg-brand-600 text-canvas border-brand-600" : "border-border text-ink-secondary hover:text-ink"
            }`}
          >
            DE
          </button>
          <button type="button"
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
            className={`px-2.5 py-1 rounded-[4px] text-xs font-semibold border transition-colors ${
              locale === "en" ? "bg-brand-600 text-canvas border-brand-600" : "border-border text-ink-secondary hover:text-ink"
            }`}
          >
            EN
          </button>
        </div>
        )}

        <div className="pt-4 border-t border-border mt-2">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-brand-600 hover:bg-brand-700 text-canvas py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
          >
            {tx.cta}
          </a>
        </div>
        <div className="pb-6" />
      </div>
    </nav>
  </>
  );
}
