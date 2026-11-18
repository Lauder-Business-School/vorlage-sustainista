"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";
import { bilder } from "../content";
import { de, en, type Deck, type Folie } from "./content";

/**
 * Verkaufspräsentation, 17 Folien (Spec N9 Nachtrag 7). Ab 768 px ist jede Folie eine Bühne von 1280 x 720 px (16:9),
 * die per transform auf das Fenster unter der Navigation skaliert wird; nichts scrollt innerhalb
 * einer Folie. Darunter fließt der Inhalt und darf scrollen. Gestaltung ohne Karten, Kästen oder
 * Flächen hinter Text: nur Weißraum, Schriftgröße, Ausrichtung.
 * Druck: eine Folie je Seite, A4 quer, Bühne fest auf 0,82 skaliert.
 */

const COUNT = de.folien.length;
const NAV = 104; // Startwert bis zur Messung des Headers (Hinweisleiste und Navigation)
const MIN_SKALA = 0.3; // niedrige Fenster: Folie bleibt sichtbar, dann darf gescrollt werden
const OBEN = 44; // Platz für Sprachumschalter und Drucken
const UNTEN = 76; // Platz für den Weiter-Knopf
const SEITE = 24;

const DECK_CSS = `
@media (min-width: 768px) {
  .deck-sec { height: calc(var(--vh, 100vh) - var(--nav, ${NAV}px)); min-height: calc(720px * var(--s, 0.7) + ${OBEN + UNTEN}px); padding: ${OBEN}px ${SEITE}px ${UNTEN}px; display: flex; align-items: center; justify-content: center; }
  .deck-wrap { position: relative; width: calc(1280px * var(--s, 0.7)); height: calc(720px * var(--s, 0.7)); }
  .deck-stage { position: absolute; left: 0; top: 0; width: 1280px; height: 720px; transform: scale(var(--s, 0.7)); transform-origin: 0 0; padding: 52px 72px 48px; display: flex; flex-direction: column; overflow: hidden; }
}
@media print {
  @page { size: A4 landscape; margin: 8mm; }
  main { --s: 0.82 !important; padding-top: 0 !important; }
  .fixed, footer, [data-druck="aus"] { display: none !important; }
  .deck-sec { height: auto !important; padding: 0 !important; display: block !important; border: 0 !important; break-after: page; break-inside: avoid; }
  .deck-sec:last-of-type { break-after: auto; }
  a { color: inherit; }
}`;

export default function BerichtDeck() {
  const { locale, setLocale } = useLanguage();
  const c: Deck = locale === "en" ? en : de;
  const [cur, setCur] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  // Maßstab der Bühne: so groß wie möglich, ohne über Breite oder Höhe des freien Fensters zu gehen.
  // Gemessen werden die Unterkante des fixierten Headers (ändert sich, wenn die Hinweisleiste
  // schließt) und die Breite der Punkteleiste; Änderungen gebündelt je Frame.
  useEffect(() => {
    let frame = 0;
    function fit() {
      const main = mainRef.current;
      if (!main) return;
      const header = document.querySelector("header");
      const nav = header ? Math.max(0, Math.round(header.getBoundingClientRect().bottom)) : NAV;
      const punkte = main.querySelector<HTMLElement>("nav[data-punkte]");
      const pr = punkte?.getBoundingClientRect();
      const rechts = pr && pr.width > 0 ? window.innerWidth - pr.left : 0;
      const breit = window.innerWidth - 2 * SEITE - 2 * rechts;
      const hoch = window.innerHeight - nav - OBEN - UNTEN;
      main.style.setProperty("--nav", `${nav}px`);
      main.style.setProperty("--vh", `${window.innerHeight}px`);
      main.style.setProperty("--s", String(Math.max(MIN_SKALA, Math.min(breit / 1280, hoch / 720))));
    }
    function planen() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    }
    fit();
    window.addEventListener("resize", planen);
    const header = document.querySelector("header");
    const ro = new ResizeObserver(planen);
    if (header) ro.observe(header);
    // Hinweisleiste schließen: Header wechselt die Klasse (top) und fährt per Übergang nach oben.
    const mo = new MutationObserver(planen);
    if (header) mo.observe(header, { attributes: true, attributeFilter: ["class"] });
    header?.addEventListener("transitionend", planen);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", planen);
      ro.disconnect();
      mo.disconnect();
      header?.removeEventListener("transitionend", planen);
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const all = document.querySelectorAll<HTMLElement>("section[data-i]");
    all[Math.max(0, Math.min(COUNT - 1, i))]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCur(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const sec of document.querySelectorAll("section[data-i]")) obs.observe(sec);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.altKey || e.metaKey || e.ctrlKey) return;
      const el = document.activeElement;
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(cur + 1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(cur - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cur, goTo]);

  return (
    <main ref={mainRef} className="bg-white pt-[var(--nav,104px)]" lang={c.lang}>
      <style dangerouslySetInnerHTML={{ __html: DECK_CSS }} />

      {/* Fortschritt als feine Linie */}
      <div className="fixed left-0 top-[var(--nav,104px)] z-50 h-px w-full bg-border">
        <div className="h-full bg-brand-600 transition-all duration-500" style={{ width: `${((cur + 1) / COUNT) * 100}%` }} />
      </div>

      {/* Sprache und Drucken, nur Text */}
      <div className="fixed right-5 top-[calc(var(--nav,104px)+10px)] z-50 flex items-center gap-4 text-xs font-semibold sm:right-8">
        <button type="button" onClick={() => window.print()} className="hidden text-ink-secondary underline-offset-4 hover:text-ink hover:underline md:block">
          {c.ui.drucken}
        </button>
        <span className="hidden h-3 w-px bg-border md:block" aria-hidden="true" />
        <div className="flex items-center gap-3" role="group" aria-label="Language">
          {(["de", "en"] as const).map((l) => (
            <button
              type="button"
              key={l}
              onClick={() => setLocale(l)}
              aria-pressed={locale === l}
              className={`underline-offset-4 ${locale === l ? "text-ink underline decoration-2 decoration-brand-600" : "text-ink-secondary hover:text-ink"}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Weiter-Knopf (Bedienung, nicht Teil der Folie) */}
      {cur < COUNT - 1 && (
        <button
          type="button"
          onClick={() => goTo(cur + 1)}
          aria-label={`${c.ui.weiterZu} ${cur + 2}`}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
        >
          {c.ui.weiter}
          <span className="tabular-nums text-white">{cur + 2} / {COUNT}</span>
          <Arrow />
        </button>
      )}

      {/* Punkteleiste */}
      <nav data-punkte aria-label={c.ui.springen} className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-0 lg:flex">
        {Array.from({ length: COUNT }, (_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goTo(i)}
            aria-label={`${c.ui.folie} ${i + 1}`}
            aria-current={cur === i}
            className="group flex h-6 w-6 items-center justify-center"
          >
            <span className={`block rounded-full transition-all duration-300 ${cur === i ? "h-6 w-1.5 bg-brand-600" : "h-1.5 w-1.5 bg-border group-hover:bg-brand-300"}`} />
          </button>
        ))}
      </nav>

      {c.folien.map((f, i) => (
        <Slide key={i} i={i} eyebrow={f.eyebrow} title={f.title} h1={i === 0} gross={f.art === "titel"} quelle={f.quelle}>
          <Inhalt f={f} c={c} />
        </Slide>
      ))}
    </main>
  );
}

const BODY = "text-[15px] leading-relaxed text-ink-secondary md:text-[18px]";
const KLEIN = "text-sm leading-snug text-ink-secondary md:text-[15px]";
const TITEL = "text-[15px] font-bold text-ink md:text-[17px]";
const LABEL = "mb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink-tertiary";
const CAPTION = "mt-2 text-xs text-ink-tertiary md:text-[13px]";
const ZAHL = "font-black leading-none tracking-tight text-brand-600 tabular-nums";

function Inhalt({ f, c }: { f: Folie; c: Deck }) {
  const s = c.seite;
  switch (f.art) {
    case "titel":
      return (
        <div className="flex flex-1 flex-col">
          <p className={`${BODY} max-w-[880px] md:text-[22px]`}>{f.unter}</p>
          <div className="mt-10 flex items-center gap-4 md:mt-auto">
            <Image src="/stefan-bauer.jpeg" alt="" width={200} height={200} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className={TITEL}>{f.person}</p>
              <p className="text-sm text-ink-secondary">{f.rolle}</p>
            </div>
          </div>
          <p className={`${CAPTION} mt-6`}>{f.hinweis}</p>
        </div>
      );
    case "zahlen":
      return (
        <div className="md:my-auto">
          <dl className="grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
            {f.zahlen.map((z) => (
              <div key={z.zahl} className="min-w-0">
                <dt className={`${ZAHL} text-4xl md:text-[52px]`}>{z.zahl}</dt>
                <dd className={`${KLEIN} mt-3`}>{z.text}</dd>
              </div>
            ))}
          </dl>
          {f.text && <p className={`${BODY} mt-10 max-w-[960px] text-ink`}>{f.text}</p>}
        </div>
      );
    case "gross":
      return (
        <div className="grid grid-cols-1 gap-8 md:my-auto md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div className="min-w-0">
            <p className={`${ZAHL} text-5xl md:text-[96px]`}>{f.zahl}</p>
            <p className={`${BODY} mt-4`}>{f.zahlText}</p>
          </div>
          <div className="min-w-0 space-y-5">
            {f.text.map((t) => (
              <p key={t} className={BODY}>{t}</p>
            ))}
          </div>
        </div>
      );
    case "wege":
      return (
        <div className="md:my-auto">
          <dl className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-[1fr_1.15fr_1fr]">
            {f.wege.map((w) => (
              <div key={w.titel} className="min-w-0">
                <dt className="text-xl font-black text-ink md:text-[26px]">{w.titel}</dt>
                <dd className={`${KLEIN} mt-3`}>{w.text}</dd>
              </div>
            ))}
          </dl>
          <p className={`${BODY} mt-10 max-w-[960px] text-ink`}>{f.text}</p>
        </div>
      );
    case "bild": {
      const b = bilder[f.bild];
      return (
        <div className="grid grid-cols-1 gap-12 md:my-auto md:grid-cols-[1fr_1.15fr] md:items-center">
          <div className="min-w-0 space-y-4">
            {f.text?.map((t) => (
              <p key={t} className={KLEIN}>{t}</p>
            ))}
            {f.beispiel && <p className={`${KLEIN} text-ink`}>{f.beispiel}</p>}
            {f.punkte && (
              <dl className="space-y-4">
                {f.punkte.map((p) => (
                  <div key={p.titel}>
                    <dt className={TITEL}>{p.titel}</dt>
                    <dd className={KLEIN}>{p.text}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <figure className="hidden min-w-0 md:block">
            <Image src={b.src} alt={f.alt} width={b.width} height={b.height} sizes="640px" className="h-auto max-h-[400px] w-full object-contain object-left-top" />
            <figcaption className={CAPTION}>{f.caption}</figcaption>
          </figure>
        </div>
      );
    }
    case "liste":
      return (
        <dl className="grid grid-cols-1 gap-x-14 gap-y-6 md:my-auto md:grid-cols-2">
          {f.items.map((it) => (
            <div key={it.titel} className="min-w-0">
              <dt className={TITEL}>{it.titel}</dt>
              <dd className={`${KLEIN} mt-1`}>{it.text}</dd>
            </div>
          ))}
        </dl>
      );
    case "qualitaet":
      return (
        <div className="md:my-auto">
          <dl className="grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
            {s.pruefung.zahlen.map((z) => (
              <div key={z.titel} className="min-w-0">
                <dt>
                  <span className={`${ZAHL} block text-4xl md:text-[44px]`}>{z.zahl}</span>
                  <span className={`${TITEL} mt-2 block`}>{z.titel}</span>
                </dt>
                <dd className="mt-1 text-[13px] leading-snug text-ink-secondary md:text-sm">{z.text}</dd>
              </div>
            ))}
          </dl>
          <p className={`${KLEIN} mt-8 max-w-[1000px] text-ink`}>{f.text} {f.beispiel}</p>
        </div>
      );
    case "quellen":
      return (
        <div className="md:my-auto">
          <ul className="grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
            {s.quellen.items.map((q) => (
              <li key={q.titel} className="min-w-0">
                <p className="text-sm font-bold leading-snug text-ink md:text-[15px]">{q.titel}</p>
                <p className="flex flex-wrap gap-x-4 text-[13px] md:text-sm">
                  {q.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600">
                      {l.label}
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p className={`${CAPTION} mt-6`}>{f.hinweis}</p>
        </div>
      );
    case "schritte":
      return (
        <ol className="grid grid-cols-1 gap-x-12 gap-y-8 md:my-auto md:grid-cols-4">
          {s.zusammenarbeit.schritte.map((st, i) => (
            <li key={st.titel} className="min-w-0">
              <p className={`${ZAHL} text-4xl md:text-[52px]`}>{String(i + 1).padStart(2, "0")}</p>
              <p className={`${TITEL} mt-4`}>{st.titel}</p>
              <p className={`${KLEIN} mt-2`}>{st.text}</p>
            </li>
          ))}
        </ol>
      );
    case "pakete":
      return (
        <div className="md:my-auto">
          <p className={`${BODY} max-w-[960px] text-ink`}>{f.pilot}</p>
          <p className={`${LABEL} mt-10`}>{f.paketeTitel}</p>
          <dl className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3">
            {s.pakete.items.map((t) => (
              <div key={t.name} className="min-w-0">
                <dt className="text-xl font-black text-ink md:text-[24px]">{t.name}</dt>
                <dd className={`${KLEIN} mt-1`}>{t.subline} {t.audience}</dd>
                <dd className="mt-2 text-[13px] leading-snug text-ink-tertiary md:text-sm">{t.features.join(", ")}.</dd>
              </div>
            ))}
          </dl>
          <p className={`${KLEIN} mt-8 text-ink`}>{f.preis}</p>
        </div>
      );
    case "kontakt": {
      const h = s.hintergrund;
      return (
        <div className="grid grid-cols-1 gap-12 md:my-auto md:grid-cols-[1.3fr_1fr] md:gap-20">
          <div className="min-w-0">
            <Image src="/stefan-bauer.jpeg" alt="" width={200} height={200} className="mb-4 h-20 w-20 rounded-full object-cover" />
            <p className="text-xl font-black text-ink md:text-[26px]">{h.name}</p>
            <p className="mb-4 text-sm font-semibold text-brand-700">{h.rolle}</p>
            {h.text.map((t) => (
              <p key={t} className={`${KLEIN} mb-2`}>{t}</p>
            ))}
            <p className="mt-4 text-[15px] md:text-[17px]"><a href="mailto:stefan.bauer@example.invalid?subject=Nachhaltigkeitsbericht" className="text-ink hover:text-brand-600">stefan.bauer@example.invalid</a></p>
            <p className="text-[15px] md:text-[17px] text-ink-secondary">Telefon: Kontakt nicht verbunden</p>
            <a data-druck="aus" href="#kontakt" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600">
              {f.termin}
              <Arrow />
            </a>
          </div>
          <div className="min-w-0">
            <p className={LABEL}>{f.teamTitel}</p>
            <dl className="space-y-5">
              {h.team.map((m) => (
                <div key={m.name}>
                  <dt className={TITEL}>{m.name}</dt>
                  <dd className="text-sm font-semibold text-brand-700">{m.rolle}</dd>
                  <dd className={KLEIN}>{m.text}</dd>
                </div>
              ))}
            </dl>
            <p className={`${CAPTION} mt-8`}>{f.adresse}</p>
          </div>
        </div>
      );
    }
  }
}

function Arrow() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

type SlideProps = { i: number; eyebrow: string; title: string; h1?: boolean; gross?: boolean; quelle?: string; children: React.ReactNode };

function Slide({ i, eyebrow, title, h1, gross, quelle, children }: SlideProps) {
  const Tag = h1 ? "h1" : "h2";
  return (
    <section data-i={i} className="deck-sec scroll-mt-[var(--nav,104px)] border-b border-border bg-white px-5 py-10 last:border-b-0 md:border-b-0">
      <div className="deck-wrap">
        <div className="deck-stage">
          <div className="mb-6 flex items-center justify-between gap-4 md:mb-7">
            <p className="text-xs font-bold tabular-nums tracking-[0.2em] text-ink-tertiary">
              {String(i + 1).padStart(2, "0")} / {COUNT}
            </p>
            <Image src="/sustainista-logo.png" alt="Sustainista" width={1278} height={176} className="h-4 w-auto md:h-5" />
          </div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <Tag className={`max-w-[1080px] font-black leading-[1.08] tracking-tight text-ink ${gross ? "text-[2rem] md:text-[60px]" : "text-[1.6rem] md:text-[40px]"}`}>{title}</Tag>
          <div className="mt-8 flex min-h-0 flex-1 flex-col md:mt-8">{children}</div>
          {quelle && <p className="mt-4 text-[11px] leading-snug text-ink-tertiary md:text-xs">{quelle}</p>}
        </div>
      </div>
    </section>
  );
}
