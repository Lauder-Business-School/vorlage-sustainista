"use client";

import StandardWegweiser from "@/components/plattform/StandardWegweiser";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, FileCheck, Layers, MessageSquareText, MinusCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleFaqAccordion from "@/components/ArticleFaqAccordion";
import ProductProof from "@/components/ProductProof";
import { useLanguage } from "@/i18n/context";
import { DE_PATH, EN_PATH, type BerichtContent } from "./content";

const PRAESENTATION_PATH = `${DE_PATH}/praesentation`;

/**
 * Produktseite Nachhaltigkeitsbericht. Die Sprache steht in der URL (DE unter DE_PATH, EN unter
 * EN_PATH), damit beide Fassungen eigene Metadaten haben. Der Sprachumschalter der Navigation
 * (useLanguage) führt hier auf die andere URL, statt nur Navigation und Footer zu wechseln.
 */
export default function NachhaltigkeitsberichtView({ c }: { c: BerichtContent }) {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    setLocale(c.lang);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSynced(true);
    // setLocale ist nicht stabil (neue Funktion je Render des Providers), nur die Sprache zählt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c.lang]);

  useEffect(() => {
    if (synced && locale !== c.lang) router.replace(locale === "en" ? EN_PATH : DE_PATH);
  }, [synced, locale, c.lang, router]);

  return (
    <>
      <Navigation />
      <main lang={c.lang}>
        {/* Kopf */}
        {/* Ohne Motiv: alle vorhandenen Kopfmotive tragen fremde Beschriftung (Produktpass, KI, Scope 3), N9 Nachtrag 1 B3 */}
        <section className="page-header relative pt-32 pb-20 overflow-hidden" style={{ "--page-header-motif": "none" } as React.CSSProperties}>
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs text-ink-tertiary flex-wrap">
                <li><Link href="/" className="hover:text-ink-secondary transition-colors">{c.breadcrumb.home}</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li><Link href="/produkte" className="hover:text-ink-secondary transition-colors">{c.breadcrumb.produkte}</Link></li>
                <li aria-hidden="true" className="text-border">/</li>
                <li className="text-ink-secondary" aria-current="page">{c.breadcrumb.current}</li>
              </ol>
            </nav>
            <span className="eyebrow mb-8 block">{c.hero.eyebrow}</span>
            <h1 className="font-black tracking-tight leading-[0.95] mb-6 text-ink hyphens-manual" style={{ fontSize: "clamp(2.25rem,6vw,4.5rem)" }}>
              {c.hero.h1a}<br />
              <span className="text-brand-600">{c.hero.h1b}</span>
            </h1>
            <div className="max-w-[68ch] space-y-3 mb-8">
              {c.hero.lead.map((p) => (
                <p key={p} className="text-lg text-ink-secondary leading-relaxed">{p}</p>
              ))}
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mb-8">
              {c.hero.fuerWen.map((f) => (
                <div key={f.k} className="min-w-0 border-l-[3px] border-brand-400 bg-canvas/70 pl-4 py-2">
                  <dt className="text-sm font-bold text-ink">{f.k}</dt>
                  <dd className="text-xs text-ink-secondary leading-snug">{f.v}</dd>
                </div>
              ))}
            </dl>
            <ul className="flex flex-wrap gap-2 mb-10">
              {c.hero.chips.map((chip) => (
                <li key={chip} className="text-xs font-semibold text-brand-700 bg-brand-50 border border-border rounded-full px-3 py-1.5">
                  {chip}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 transition-colors text-white px-6 py-3 rounded-btn font-semibold text-sm">
                {c.hero.ctaDemo}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#ablauf" className="inline-flex items-center gap-2 border border-border hover:border-brand-300 text-ink-secondary hover:text-ink px-6 py-3 rounded-btn text-sm transition-all bg-canvas">
                {c.hero.ctaAblauf}
              </a>
              {/* Präsentation: gleiche Adresse für DE und EN, die Sprache kommt aus dem gespeicherten Locale */}
              <Link href={PRAESENTATION_PATH} className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600">
                {c.hero.ctaPraesentation}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bild der Übersicht unter dem Kopf: im Kopf läge es unter dem Motiv rechts */}
        <section className="pt-14 bg-white">
          <figure className="max-w-6xl mx-auto px-5 sm:px-8">
            <Bildrahmen bild={c.hero.bild} priority />
            <figcaption className="mt-3 text-xs text-ink-tertiary">{c.hero.caption}</figcaption>
          </figure>
        </section>

        {/* Nutzen: Muster der DPP-Seite, ohne Kundenstimme und Logos */}
        <ProductProof
          eyebrow={c.nutzen.eyebrow}
          titleA={c.nutzen.h2a}
          titleB={c.nutzen.h2b}
          values={c.nutzen.items.map((it, i) => ({ icon: [MessageSquareText, Layers, FileCheck][i], title: it.titel, body: it.text }))}
          logos={false}
        />

        {/* Produkttour */}
        <section id="ablauf" className="py-24 bg-surface border-y border-border scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.ablauf.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
              {c.ablauf.h2a}<br />
              <span className="text-ink-tertiary">{c.ablauf.h2b}</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-10">{c.ablauf.intro}</p>
            <Produkttour c={c} />
          </div>
        </section>

        {/* Standards und Ausgaben */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 min-w-0">
              <p className="eyebrow mb-4">{c.standards.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {c.standards.h2a}<br />
                <span className="text-ink-tertiary">{c.standards.h2b}</span>
              </h2>
              <div className="mb-8" />
              <dl className="space-y-3">
                {c.standards.items.map((it) => (
                  <div key={it.label} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 border border-border rounded-card p-4 bg-canvas">
                    <dt className="text-sm font-bold text-ink">{it.label}</dt>
                    <dd className="text-sm text-ink-secondary leading-relaxed min-w-0">{it.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* Unter 640 px wäre die Tabelle im Bild nicht lesbar (N9 Nachtrag 1, B5): dort nur der Text */}
            <figure className="hidden sm:block lg:col-span-6 min-w-0">
              <Bildrahmen bild={c.standards.bild} />
              <figcaption className="mt-3 text-xs text-ink-tertiary">{c.standards.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* Was die Software nicht macht */}
        <section id="grenzen" className="py-24 bg-surface border-t border-border scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{c.grenzen.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {c.grenzen.h2a}<br />
                <span className="text-ink-tertiary">{c.grenzen.h2b}</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed">{c.grenzen.intro}</p>
            </div>
            <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.grenzen.items.map((it) => (
                <div key={it.titel} className="min-w-0 rounded-card border border-border bg-canvas p-6">
                  <dt className="flex items-center gap-2 text-base font-bold text-ink mb-2">
                    <MinusCircle className="w-4 h-4 shrink-0 text-ink-tertiary" strokeWidth={1.75} aria-hidden="true" />
                    {it.titel}
                  </dt>
                  <dd className="text-sm text-ink-secondary leading-relaxed">{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Nachvollziehbarkeit */}
        <section className="py-24 bg-canvas border-t border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.nachweis.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              {c.nachweis.h2a}<br />
              <span className="text-ink-tertiary">{c.nachweis.h2b}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {c.nachweis.items.map((it) => (
                <div key={it.titel} className="border border-border rounded-card p-6 bg-canvas min-w-0">
                  <h3 className="text-base font-bold text-ink mb-2">{it.titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>
            <figure className="hidden sm:block max-w-4xl">
              <Bildrahmen bild={c.nachweis.bild} />
              <figcaption className="mt-3 text-xs text-ink-tertiary">{c.nachweis.caption}</figcaption>
            </figure>
          </div>
        </section>

        {/* Wie wir sicherstellen, dass es stimmt: jede Zahl mit Quelle in N9-bericht.md (Nachtrag 5) */}
        <section id="qualitaet" className="py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.pruefung.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
              {c.pruefung.h2a}<br />
              <span className="text-ink-tertiary">{c.pruefung.h2b}</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-12">{c.pruefung.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {c.pruefung.zahlen.map((z) => (
                <li key={z.titel} className="min-w-0 rounded-card border border-border bg-canvas p-6">
                  <p className="text-4xl font-black text-brand-600 tracking-tight tabular-nums mb-2">{z.zahl}</p>
                  <h3 className="text-base font-bold text-ink mb-2">{z.titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{z.text}</p>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-ink mb-4">{c.pruefung.behobenTitel}</h3>
            <ul className="space-y-3 max-w-[80ch]">
              {c.pruefung.behoben.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-brand-600 mt-px" strokeWidth={1.5} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Rechtslage kompakt */}
        <section className="py-24 bg-surface border-y border-border">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{c.rechtslage.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {c.rechtslage.h2a}<br />
                <span className="text-ink-tertiary">{c.rechtslage.h2b}</span>
              </h2>
              <div className="mt-6 rounded-card border border-border bg-canvas p-4">
                <p className="text-sm font-bold text-ink mb-1">{c.rechtslage.standTitel}</p>
                <p className="text-xs text-ink-secondary leading-relaxed">{c.rechtslage.hinweis}</p>
              </div>
            </div>
            <ol className="lg:col-span-8 border-l-2 border-brand-200 space-y-8 pl-6">
              {c.rechtslage.items.map((it) => (
                <li key={it.titel} className="relative min-w-0">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-600 ring-4 ring-surface" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 mb-1">{it.wann}</p>
                  <h3 className="text-base font-bold text-ink mb-1">{it.titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <StandardWegweiser lang={c.lang} />

        {/* Quellen und Grundlagen */}
        <section id="quellen" className="py-24 bg-white scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.quellen.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
              {c.quellen.h2a}<br />
              <span className="text-ink-tertiary">{c.quellen.h2b}</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-12">{c.quellen.intro}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.quellen.items.map((q) => (
                <li key={q.titel} className="min-w-0 rounded-card border border-border bg-canvas p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 mb-2">{q.gruppe}</p>
                  <h3 className="text-base font-bold text-ink mb-2">{q.titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-3">{q.text}</p>
                  <p className="flex flex-wrap gap-x-4 gap-y-1">
                    {q.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600 [overflow-wrap:anywhere]">
                        {l.label}
                      </a>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fachlicher Hintergrund: nur Angaben aus /ueber-uns und Impressum (Nachtrag 5, W-23) */}
        <section id="hintergrund" className="py-24 bg-canvas border-t border-border scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{c.hintergrund.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {c.hintergrund.h2a}<br />
                <span className="text-ink-tertiary">{c.hintergrund.h2b}</span>
              </h2>
            </div>
            <div className="lg:col-span-8 min-w-0">
              <h3 className="text-xl font-black text-ink">{c.hintergrund.name}</h3>
              <p className="text-sm font-semibold text-brand-700 mb-4">{c.hintergrund.rolle}</p>
              {c.hintergrund.text.map((t) => (
                <p key={t} className="text-sm text-ink-secondary leading-relaxed mb-3 max-w-[68ch]">{t}</p>
              ))}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-6">
                {c.hintergrund.team.map((m) => (
                  <li key={m.name} className="min-w-0 border-t border-border pt-4">
                    <p className="text-sm font-bold text-ink">{m.name}</p>
                    <p className="text-xs font-semibold text-brand-700 mb-1">{m.rolle}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed">{m.text}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-tertiary mb-4">{c.hintergrund.firma}</p>
              <Link href="/ueber-uns" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600">
                {c.hintergrund.link} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* So arbeiten wir zusammen */}
        <section id="zusammenarbeit" className="py-24 bg-surface border-y border-border scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.zusammenarbeit.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-12">
              {c.zusammenarbeit.h2a}<br />
              <span className="text-ink-tertiary">{c.zusammenarbeit.h2b}</span>
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {c.zusammenarbeit.schritte.map((st, i) => (
                <li key={st.titel} className="min-w-0 rounded-card border border-border bg-canvas p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700 mb-3 tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-base font-bold text-ink mb-2">{st.titel}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{st.text}</p>
                </li>
              ))}
            </ol>
            <a href="#pakete" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600">
              {c.zusammenarbeit.paketeLink} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="mt-6 text-sm text-ink-secondary leading-relaxed">
              {c.zusammenarbeit.praesentationText}{" "}
              <Link href={PRAESENTATION_PATH} className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600">
                {c.zusammenarbeit.praesentationLink}
              </Link>
            </p>
          </div>
        </section>

        {/* Was Sie mitbringen */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">{c.mitbringen.eyebrow}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-4">
                {c.mitbringen.h2a}<br />
                <span className="text-ink-tertiary">{c.mitbringen.h2b}</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed">{c.mitbringen.intro}</p>
            </div>
            <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {c.mitbringen.items.map((it) => (
                <div key={it.titel} className="min-w-0 border-t border-border pt-4">
                  <dt className="text-sm font-bold text-ink mb-1">{it.titel}</dt>
                  <dd className="text-sm text-ink-secondary leading-relaxed">{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Pakete: Aufbau wie DppPricing, ohne Beträge */}
        <section id="pakete" className="py-24 bg-surface border-y border-border scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.pakete.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-6">
              {c.pakete.h2a}<br />
              <span className="text-ink-tertiary">{c.pakete.h2b}</span>
            </h2>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-[68ch] mb-14">{c.pakete.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {c.pakete.items.map((t) => (
                <div key={t.name} className={`rounded-card p-8 border flex flex-col min-w-0 ${t.highlight ? "bg-brand-700 border-brand-600 shadow-ambient-medium" : "bg-canvas border-border"}`}>
                  <h3 className={`text-marke font-bold uppercase tracking-[0.08em] mb-6 ${t.highlight ? "text-brand-200" : "text-ink-tertiary"}`}>{t.name}</h3>
                  <p className={`text-base font-bold mb-2 ${t.highlight ? "text-white" : "text-ink"}`}>{t.subline}</p>
                  <p className={`text-sm leading-relaxed mb-6 ${t.highlight ? "text-brand-100" : "text-ink-secondary"}`}>{t.audience}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${t.highlight ? "bg-brand-300" : "bg-brand-500"}`} aria-hidden="true" />
                        <span className={t.highlight ? "text-brand-100" : "text-ink-secondary"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`text-sm font-bold mb-4 ${t.highlight ? "text-white" : "text-ink"}`}>{c.pakete.preis}</p>
                  <a
                    href="#demo"
                    className={`inline-flex items-center justify-center gap-2 py-3 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${t.highlight ? "bg-canvas text-brand-700 hover:bg-brand-50" : "bg-brand-600 hover:bg-brand-700 text-white"}`}
                  >
                    {c.pakete.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-surface border border-border rounded-card p-6 max-w-[68ch]">
              <p className="text-base font-bold text-ink mb-2">{c.pakete.hinweisTitel}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{c.pakete.hinweisText}</p>
            </div>
          </div>
        </section>

        <BeispielAnfrage c={c} />

        {/* Häufige Fragen */}
        <section className="py-24 bg-canvas">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="eyebrow mb-4">{c.faq.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-12">{c.faq.h2}</h2>
            <ArticleFaqAccordion faqs={c.faq.items} />

            <p className="eyebrow mt-16 mb-4">{c.weiter.eyebrow}</p>
            <h2 className="text-xl font-bold text-ink mb-6">{c.weiter.h2}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.weiter.links.map((l) => (
                <Link key={l.href} href={l.href} className="group border border-border rounded-card p-5 bg-canvas hover:border-brand-300 transition-colors">
                  <span className="flex items-center gap-2 text-sm font-bold text-ink mb-1">
                    {l.titel}
                    <ArrowRight className="w-4 h-4 text-brand-600 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="block text-sm text-ink-secondary leading-relaxed">{l.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DemoAnfrage c={c} />
      </main>
      <Footer />
    </>
  );
}

/**
 * Produkttour als Reiter nach dem WAI-ARIA-Muster „Tabs“: Pfeiltasten links und rechts, Pos1 und Ende
 * wechseln den Reiter, Tab springt in das Panel. Alle Panels stehen im HTML (hidden), damit der Text
 * auch ohne Klick ausgeliefert wird.
 */
function Produkttour({ c }: { c: BerichtContent }) {
  const [aktiv, setAktiv] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = c.ablauf.schritte.length;

  function onKey(e: React.KeyboardEvent, i: number) {
    const ziel =
      e.key === "ArrowRight" ? (i + 1) % n :
      e.key === "ArrowLeft" ? (i - 1 + n) % n :
      e.key === "Home" ? 0 :
      e.key === "End" ? n - 1 : null;
    if (ziel === null) return;
    e.preventDefault();
    setAktiv(ziel);
    tabs.current[ziel]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label={c.ablauf.tablistLabel} className="flex flex-wrap gap-2 mb-10">
        {c.ablauf.schritte.map((s, i) => (
          <button
            key={s.reiter}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`tour-tab-${i}`}
            aria-selected={aktiv === i}
            aria-controls={`tour-panel-${i}`}
            tabIndex={aktiv === i ? 0 : -1}
            onClick={() => setAktiv(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`inline-flex items-center gap-2 rounded-btn border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
              aktiv === i ? "bg-brand-700 border-brand-700 text-white" : "bg-canvas border-border text-ink-secondary hover:border-brand-300 hover:text-ink"
            }`}
          >
            <span className={`tabular-nums text-xs ${aktiv === i ? "text-brand-200" : "text-brand-700"}`}>{String(i + 1).padStart(2, "0")}</span>
            {s.reiter}
          </button>
        ))}
      </div>
      {c.ablauf.schritte.map((s, i) => (
        <div
          key={s.reiter}
          role="tabpanel"
          id={`tour-panel-${i}`}
          aria-labelledby={`tour-tab-${i}`}
          hidden={aktiv !== i}
          tabIndex={0}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 rounded-card"
        >
          <div className="lg:col-span-4 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4">{s.titel}</h3>
            {s.text.map((p) => (
              <p key={p} className="text-sm text-ink-secondary leading-relaxed mb-3 [overflow-wrap:anywhere]">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-8 min-w-0">
            <Bildrahmen bild={s.bild} />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Beispielbericht gegen E-Mail, Muster PpwrGuideForm: /api/leads, Quelle in notes. */
function BeispielAnfrage({ c }: { c: BerichtContent }) {
  const t = c.beispiel;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) return;
    setStatus("error");
  }

  const inputClass =
    "w-full bg-canvas border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5";

  return (
    <section id="beispielbericht" className="py-24 bg-surface border-y border-border scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight leading-[1.05] mb-5">
            {t.h2a}<br />
            <span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          {t.text.map((p) => (
            <p key={p} className="text-sm text-ink-secondary leading-relaxed mb-3">{p}</p>
          ))}
        </div>
        <div className="lg:col-span-7">
          {status === "done" ? (
            <div className="bg-canvas border border-border rounded-card p-8" role="status">
              <CheckCircle2 className="w-6 h-6 text-brand-600 mb-3" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-base font-bold text-ink mb-2">{t.dankeTitel}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{t.dankeText}</p>
              <p className="mt-4 text-xs text-ink-tertiary">
                {t.sofortLink} (In dieser Kursvorlage nicht enthalten)
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-canvas border border-border rounded-card p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="beispiel-name" className={labelClass}>{t.felder.name}</label>
                  <input id="beispiel-name" name="name" type="text" required maxLength={200} autoComplete="name" placeholder={t.platzhalter.name} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="beispiel-email" className={labelClass}>{t.felder.email}</label>
                  <input id="beispiel-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder={t.platzhalter.email} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="beispiel-company" className={labelClass}>
                  {t.felder.firma} <span className="normal-case tracking-normal font-normal text-ink-tertiary">{t.felder.optional}</span>
                </label>
                <input id="beispiel-company" name="company" type="text" maxLength={200} autoComplete="organization" placeholder={t.platzhalter.firma} className={inputClass} />
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-ink-secondary [overflow-wrap:anywhere]">In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-colors text-white px-5 py-3 rounded-btn font-semibold text-sm"
              >
                {status === "sending" ? t.sendet : t.senden}
                {status !== "sending" && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </button>
              <p className="text-xs text-ink-tertiary leading-relaxed">
                {c.demo.datenschutzA}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink-secondary">{c.demo.datenschutzLink}</Link>
                {c.demo.datenschutzB}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Bildrahmen({ bild, priority }: { bild: BerichtContent["hero"]["bild"]; priority?: boolean }) {
  // Unter 640 px ist der Desktop-Ausschnitt zu klein zum Lesen: dort die Handy-Aufnahme (375 px breit),
  // randlos über die volle Breite, damit sie auf einem 375-px-Gerät im Maßstab 1:1 steht (N9 Nachtrag 1, W-12).
  // display:none lädt ein lazy Bild nicht, es kommt also nur eine Datei.
  const randlos = bild.mobil ? "-mx-5 sm:mx-0 rounded-none sm:rounded-card border-x-0 sm:border-x" : "rounded-card";
  return (
    <div className={`${randlos} border border-border bg-canvas overflow-hidden shadow-ambient-low`}>
      {bild.mobil && (
        <Image
          src={bild.mobil.src}
          alt={bild.alt}
          width={bild.mobil.width}
          height={bild.mobil.height}
          sizes="100vw"
          className="w-full h-auto sm:hidden"
        />
      )}
      <Image
        src={bild.src}
        alt={bild.alt}
        width={bild.width}
        height={bild.height}
        sizes="(min-width: 1024px) 1100px, 100vw"
        className={`w-full h-auto ${bild.mobil ? "hidden sm:block" : ""}`}
        priority={priority}
      />
    </div>
  );
}

type Status = "idle" | "sending" | "done" | "error";

/** Demo-Anfrage über das bestehende /api/leads. Die Quelle steht in notes, wie bei PpwrForms. */
function DemoAnfrage({ c }: { c: BerichtContent }) {
  const t = c.demo;
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const mail = String(data.get("email") ?? "").trim();
    if (!name || !mail) return;
    setEmail(mail);
    setStatus("error");
  }

  const inputClass =
    "w-full bg-canvas border border-border rounded-field px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-brand-600 focus:border-[1.5px] transition-all";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.08em] text-ink-secondary mb-1.5";

  return (
    <section id="demo" className="py-28 bg-surface scroll-mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{t.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05] mb-5">
            {t.h2a}<br />
            <span className="text-ink-tertiary">{t.h2b}</span>
          </h2>
          {t.text.map((p) => (
            <p key={p} className="text-sm text-ink-secondary leading-relaxed mb-3">{p}</p>
          ))}
        </div>
        <div className="lg:col-span-7">
          {status === "done" ? (
            <div className="bg-canvas border border-border rounded-card p-8" role="status">
              <CheckCircle2 className="w-6 h-6 text-brand-600 mb-3" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-base font-bold text-ink mb-2">{t.dankeTitel}</p>
              <p className="text-sm text-ink-secondary leading-relaxed [overflow-wrap:anywhere]">{t.dankeText} ({email})</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-canvas border border-border rounded-card p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="demo-name" className={labelClass}>{t.felder.name}</label>
                  <input id="demo-name" name="name" type="text" required maxLength={200} autoComplete="name" placeholder={t.platzhalter.name} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-email" className={labelClass}>{t.felder.email}</label>
                  <input id="demo-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder={t.platzhalter.email} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="demo-company" className={labelClass}>
                  {t.felder.firma} <span className="normal-case tracking-normal font-normal text-ink-tertiary">{t.felder.optional}</span>
                </label>
                <input id="demo-company" name="company" type="text" maxLength={200} autoComplete="organization" placeholder={t.platzhalter.firma} className={inputClass} />
              </div>
              <div>
                <label htmlFor="demo-nachricht" className={labelClass}>
                  {t.felder.nachricht} <span className="normal-case tracking-normal font-normal text-ink-tertiary">{t.felder.optional}</span>
                </label>
                <textarea id="demo-nachricht" name="nachricht" rows={4} maxLength={1800} placeholder={t.platzhalter.nachricht} className={`${inputClass} resize-y`} />
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-ink-secondary [overflow-wrap:anywhere]">In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-colors text-white px-5 py-3 rounded-btn font-semibold text-sm"
              >
                {status === "sending" ? t.sendet : t.senden}
                {status !== "sending" && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </button>
              <p className="text-xs text-ink-tertiary leading-relaxed">
                {t.datenschutzA}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink-secondary">{t.datenschutzLink}</Link>
                {t.datenschutzB}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
