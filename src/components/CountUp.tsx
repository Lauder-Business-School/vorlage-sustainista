"use client";
import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "@/lib/useInView";
import { useLanguage } from "@/i18n/context";

/** Zaehlt beim ersten Sichtbarwerden hoch. Ohne JS und bei Reduced-Motion steht sofort der Endwert da. */
export default function CountUp({ to, decimals = 0, duration = 1100, className }: { to: number; decimals?: number; duration?: number; className?: string }) {
  const { locale } = useLanguage();
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [val, setVal] = useState(to);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const text = new Intl.NumberFormat(locale === "en" ? "en-GB" : "de-AT", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {text}
    </span>
  );
}
