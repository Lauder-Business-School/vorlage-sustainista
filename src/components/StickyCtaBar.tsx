"use client";
import { useState, useEffect } from "react";
import { X, CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { CALENDLY_URL as CALENDLY, trackEvent } from "@/lib/cta";

const DISMISS_KEY = "sustainista_sticky_dismissed";
const EXIT_KEY = "sustainista_exit_shown";
const VARIANT_KEY = "sustainista_sticky_variant";

type Ctx = "default" | "ansatz" | "batteriepass" | "foerderung" | "exit";
type Copy = { label: string; sub: string; cta: string };

const tx = {
  de: {
    dismiss: "Schließen",
    default: [
      { label: "Kostenloses Erstgespräch", sub: "30 Min · Förderung prüfen · Risiko reduzieren", cta: "Termin buchen" },
      { label: "Wo stehen Sie bei ESG-Daten?", sub: "30 Min kostenlos · Festpreisangebot danach", cta: "Gespräch buchen" },
    ] as Copy[],
    ansatz: { label: "Ergebnis besprechen?", sub: "Wir ordnen Ihr Radar-Ergebnis in 30 Min ein", cta: "Termin buchen" } as Copy,
    batteriepass: { label: "Batteriepass-Fahrplan", sub: "Frist 18.02.2027: in 30 Min klären, was fehlt", cta: "Termin buchen" } as Copy,
    foerderung: { label: "Förderung kostenlos prüfen", sub: "ÖkoBusiness Wien oder Ökomanagement NÖ für Ihr Projekt", cta: "Termin buchen" } as Copy,
    exit: { label: "Bevor Sie gehen", sub: "Förderprüfung und Erstgespräch sind kostenlos", cta: "Termin buchen" } as Copy,
  },
  en: {
    dismiss: "Close",
    default: [
      { label: "Free initial consultation", sub: "30 min · Check funding · Reduce risk", cta: "Book appointment" },
      { label: "Where do you stand on ESG data?", sub: "30 min free · Fixed-price offer afterwards", cta: "Book a call" },
    ] as Copy[],
    ansatz: { label: "Discuss your result?", sub: "We put your radar result in context in 30 min", cta: "Book appointment" } as Copy,
    batteriepass: { label: "Battery passport roadmap", sub: "Deadline 18 Feb 2027: clarify what is missing in 30 min", cta: "Book appointment" } as Copy,
    foerderung: { label: "Free funding check", sub: "ÖkoBusiness Wien or Ökomanagement NÖ for your project", cta: "Book appointment" } as Copy,
    exit: { label: "Before you go", sub: "Funding check and initial call are free", cta: "Book appointment" } as Copy,
  },
};

const SECTION_IDS = ["ansatz", "batteriepass", "foerderung", "kontakt"] as const;

function pickVariant(): 0 | 1 {
  if (typeof window === "undefined") return 0;
  const stored = sessionStorage.getItem(VARIANT_KEY);
  if (stored === "0" || stored === "1") return Number(stored) as 0 | 1;
  const v = Math.random() < 0.5 ? 0 : 1;
  sessionStorage.setItem(VARIANT_KEY, String(v));
  return v;
}

export default function StickyCtaBar() {
  const { locale } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [ctx, setCtx] = useState<Ctx>("default");
  const [atContact, setAtContact] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => typeof window !== "undefined" && !!sessionStorage.getItem(DISMISS_KEY)
  );
  const [variant] = useState<0 | 1>(pickVariant);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      setVisible(window.scrollY > 520);
      const mid = window.innerHeight / 2;
      let active: (typeof SECTION_IDS)[number] | null = null;
      for (const id of SECTION_IDS) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (r && r.top < mid && r.bottom > mid) active = id;
      }
      setAtContact(active === "kontakt");
      setCtx((prev) => (prev === "exit" ? prev : active && active !== "kontakt" ? active : "default"));
    };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0 || window.scrollY < 800 || sessionStorage.getItem(EXIT_KEY)) return;
      sessionStorage.setItem(EXIT_KEY, "1");
      setVisible(true);
      setCtx("exit");
      trackEvent("exit_intent_shown");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [dismissed]);

  function dismiss() {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
    trackEvent("sticky_dismiss", { context: ctx, variant: String(variant) });
  }

  if (dismissed || !visible || (atContact && ctx !== "exit")) return null;

  const t = tx[locale];
  const c: Copy = ctx === "default" ? t.default[variant] : t[ctx];
  const onCta = () => trackEvent("cta_click", { id: "calendly", location: "sticky", context: ctx, variant: String(variant) });

  return (
    <div
      role="complementary"
      aria-label={c.label}
      className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm animate-slide-up"
    >
      <div className="md:hidden flex items-center justify-between gap-3 bg-brand-800 px-5 py-3.5 shadow-ambient-heavy border-t border-brand-700">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-canvas leading-tight truncate">{c.label}</p>
          <p className="text-[10px] text-brand-300 mt-0.5 truncate">{c.sub}</p>
        </div>
        <a
          onClick={onCta}
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-brand-600 hover:bg-brand-500 text-canvas px-4 py-2 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
        >
          {c.cta}
        </a>
        <button type="button" onClick={dismiss} aria-label={t.dismiss} className="flex-shrink-0 p-1.5 text-brand-300 hover:text-canvas transition-colors">
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <div className="hidden md:flex flex-col gap-3 bg-brand-800 rounded-card px-5 py-4 shadow-ambient-heavy border border-brand-700">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-canvas leading-snug">{c.label}</p>
            <p className="text-xs text-brand-300 mt-0.5">{c.sub}</p>
          </div>
          <button type="button" onClick={dismiss} aria-label={t.dismiss} className="flex-shrink-0 p-1 text-brand-400 hover:text-canvas transition-colors mt-0.5">
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
        <a
          onClick={onCta}
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-canvas py-2.5 rounded-btn text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
        >
          <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
          {c.cta}
        </a>
      </div>
    </div>
  );
}
