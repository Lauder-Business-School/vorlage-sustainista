"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button type="button"
      onClick={() => {
        const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      }}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-600 hover:bg-brand-700 text-canvas shadow-ambient-medium flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-medium"
      aria-label="Zurück nach oben"
    >
      <ChevronUp className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
