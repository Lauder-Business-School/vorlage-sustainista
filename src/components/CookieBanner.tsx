"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sustainista-cookie-consent");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("sustainista-cookie-consent", "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("sustainista-cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-canvas border-t border-border shadow-ambient-medium"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-ink mb-1">Datenschutz & Cookies</p>
          <p className="text-xs text-ink-secondary leading-relaxed max-w-2xl">
            Diese Website verwendet technisch notwendige Cookies für den Betrieb. Analytische Cookies setzen wir nur mit Ihrer Zustimmung ein.
            Mehr dazu in unserer{" "}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink transition-colors">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button type="button"
            onClick={reject}
            className="px-4 py-2 rounded-btn text-xs font-semibold border border-border text-ink-secondary hover:text-ink hover:border-ink-secondary bg-canvas transition-colors"
          >
            Ablehnen
          </button>
          <button type="button"
            onClick={accept}
            className="px-4 py-2 rounded-btn text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-canvas transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
