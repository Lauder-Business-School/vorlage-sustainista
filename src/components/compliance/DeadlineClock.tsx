"use client";
import { useSyncExternalStore } from "react";
import { DEADLINE_ISO, SUPPLIER_CUTOFF_ISO } from "@/data/compliance-check";

const noopSubscribe = () => () => {};
const daysUntil = (iso: string) => Math.max(0, Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000));

/** Zwei Countdowns: Lieferantendaten vor dem chinesischen Neujahr und Stichtag Batteriepass */
const TEXT = {
  de: { cutoff: "Tage bis Lieferantendaten", cutoffSub: "bis ca. 20. Jänner 2027, vor den Neujahrsfeiertagen in China", deadline: "Tage bis Stichtag", deadlineSub: "Batteriepass ab 18. Februar 2027" },
  en: { cutoff: "Days until supplier data", cutoffSub: "by around 20 January 2027, before the New Year holidays in China", deadline: "Days until the deadline", deadlineSub: "Battery passport from 18 February 2027" },
};

export default function DeadlineClock({ tone = "light", locale = "de" }: { tone?: "light" | "dark"; locale?: "de" | "en" }) {
  const t = TEXT[locale];
  const cutoff = useSyncExternalStore(noopSubscribe, () => daysUntil(SUPPLIER_CUTOFF_ISO), () => null);
  const deadline = useSyncExternalStore(noopSubscribe, () => daysUntil(DEADLINE_ISO), () => null);
  const dark = tone === "dark";
  const box = dark ? "border-white/15 bg-white/5" : "border-border bg-canvas";
  const label = dark ? "text-brand-200" : "text-ink-tertiary";
  const num = dark ? "text-canvas" : "text-ink";
  return (
    <dl className="grid grid-cols-2 gap-3" aria-live="off">
      <div className={`rounded-card border p-4 ${box}`}>
        <dt className={`text-[11px] font-bold uppercase tracking-[0.08em] ${label}`}>{t.cutoff}</dt>
        <dd className={`text-4xl font-black tabular-nums ${num}`}>{cutoff ?? "–"}</dd>
        <dd className={`text-xs ${label}`}>{t.cutoffSub}</dd>
      </div>
      <div className={`rounded-card border p-4 ${dark ? "border-brand-300 bg-brand-700/40" : "border-brand-600 bg-brand-50"}`}>
        <dt className={`text-[11px] font-bold uppercase tracking-[0.08em] ${dark ? "text-brand-200" : "text-brand-700"}`}>{t.deadline}</dt>
        <dd className={`text-4xl font-black tabular-nums ${num}`}>{deadline ?? "–"}</dd>
        <dd className={`text-xs ${label}`}>{t.deadlineSub}</dd>
      </div>
    </dl>
  );
}
