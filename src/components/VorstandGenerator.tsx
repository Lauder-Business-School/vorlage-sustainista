"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, BookOpen, Copy, Check, Trash2, ChevronDown, Sparkles, Square, Mail, Download } from "lucide-react";

type Format = "5-saetze" | "executive-summary" | "warum-jetzt";
type Tab    = "generator" | "saved";
type Lang   = "de" | "en";

interface SavedText {
  id:       string;
  topic:    string;
  format:   Format;
  industry: string;
  text:     string;
  savedAt:  number;
}

interface GeneratedFor {
  topic:    string;
  format:   Format;
  industry: string;
}

const FORMATS: { id: Format; label: string; hint: string }[] = [
  { id: "5-saetze",          label: "5-Satz-Erklärung",  hint: "Für den Meeting-Einstieg"     },
  { id: "executive-summary", label: "Executive Summary",  hint: "Druckfertig, max. 120 Wörter" },
  { id: "warum-jetzt",       label: "Warum jetzt",        hint: "Dringlichkeit ohne Drama"     },
];

const INDUSTRIES = [
  { value: "alle",                       label: "Branche wählen (optional)"  },
  { value: "Handel",                     label: "Handel"                     },
  { value: "Produktion & Industrie",     label: "Produktion & Industrie"     },
  { value: "Logistik & Transport",       label: "Logistik & Transport"       },
  { value: "Bau & Immobilien",           label: "Bau & Immobilien"           },
  { value: "Lebensmittel & Gastronomie", label: "Lebensmittel & Gastronomie" },
  { value: "Finanzdienstleistung",       label: "Finanzdienstleistung"       },
  { value: "Tourismus & Freizeit",       label: "Tourismus & Freizeit"       },
  { value: "IT & Technologie",           label: "IT & Technologie"           },
];

const TOPICS = [
  "CSRD", "Scope 3", "Digital Product Pass", "EU-Taxonomie",
  "Product Carbon Footprint", "ESG-Bericht", "LCA-Berechnung", "Batteriepass",
];

const MAX_TOPIC       = 200;
const STORAGE_KEY     = "sustainista-vorstand-saved";
const LANG_KEY        = "sustainista-vorstand-lang";
const LAST_TOPIC_KEY  = "sustainista-vorstand-last-topic"; // Fix 3

function persistSaved(entries: SavedText[]): SavedText[] {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    return entries;
  } catch {
    const trimmed = entries.slice(0, entries.length - 1);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed)); } catch { /* ignore */ }
    return trimmed;
  }
}

function loadSaved(): SavedText[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); }
  catch { return []; }
}

function formatLabel(f: Format) {
  return FORMATS.find((x) => x.id === f)?.label ?? f;
}

function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const min  = Math.floor(diff / 60_000);
  if (min < 2)  return "gerade eben";
  if (min < 60) return `vor ${min} Min.`;
  const h = Math.floor(min / 60);
  if (h < 24)   return `vor ${h} Std.`;
  return `vor ${Math.floor(h / 24)} Tagen`;
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function VorstandGenerator() {
  const [open,          setOpen]          = useState(false);
  const [tab,           setTab]           = useState<Tab>("generator");
  // Lazy initialisers read localStorage once on mount, avoids setState-in-effect lint errors
  const [topic,         setTopic]         = useState<string>(() => {
    if (typeof window === "undefined") return "";
    try { return localStorage.getItem(LAST_TOPIC_KEY) ?? ""; } catch { return ""; }
  });
  const [format,        setFormat]        = useState<Format>("5-saetze");
  const [industry,      setIndustry]      = useState("alle");
  const [lang,          setLang]          = useState<Lang>(() => {
    if (typeof window === "undefined") return "de";
    try {
      const s = localStorage.getItem(LANG_KEY);
      return s === "de" || s === "en" ? s : "de";
    } catch { return "de"; }
  });
  const [result,        setResult]        = useState("");
  const [generatedFor,  setGeneratedFor]  = useState<GeneratedFor | null>(null);
  const [loading,       setLoading]       = useState(false);
  const [saved,         setSaved]         = useState<SavedText[]>([]);
  const [error,         setError]         = useState("");
  const [savedConfirm,  setSavedConfirm]  = useState(false);
  const [dupConfirm,    setDupConfirm]    = useState(false);
  const [copiedId,      setCopiedId]      = useState<string | null>(null);
  const [generateCount, setGenerateCount] = useState(0);
  const [announcement,  setAnnouncement]  = useState("");
  const [clearConfirm,  setClearConfirm]  = useState(false);
  const [expandedIds,   setExpandedIds]   = useState<Set<string>>(new Set()); // Fix 4
  const [loadedId,      setLoadedId]      = useState<string | null>(null);    // Fix 6

  const abortRef        = useRef<AbortController | null>(null);
  const loadingRef      = useRef(false);
  const bodyRef         = useRef<HTMLDivElement>(null);
  const inputRef        = useRef<HTMLInputElement>(null);
  const triggerRef      = useRef<HTMLButtonElement>(null);
  const confirmTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null); // for savedConfirm
  const dupTimerRef     = useRef<ReturnType<typeof setTimeout> | null>(null); // Fix 9: separate timer for dupConfirm
  const copiedTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadedTimerRef  = useRef<ReturnType<typeof setTimeout> | null>(null); // Fix 6
  const announceTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultRef       = useRef<HTMLDivElement>(null);
  const textareaRef     = useRef<HTMLTextAreaElement>(null);
  const isMounted       = useRef(true);

  // Unmount guard
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  useEffect(() => { loadingRef.current = loading; }, [loading]);

  // Persist lang whenever it changes (initial value already read via lazy initialiser)
  useEffect(() => {
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  // Fix 2: auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [result]);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSaved(loadSaved());
    }
  }, [open, tab]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClearConfirm(false);
  }, [tab]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 310);
      return () => clearTimeout(t);
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Global keyboard shortcut Alt+Shift+V
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && (e.key === "V" || e.key === "v")) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSaved(loadSaved());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Cleanup all timers
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
      if (dupTimerRef.current)     clearTimeout(dupTimerRef.current);     // Fix 9
      if (copiedTimerRef.current)  clearTimeout(copiedTimerRef.current);
      if (loadedTimerRef.current)  clearTimeout(loadedTimerRef.current);  // Fix 6
      if (announceTimer.current)   clearTimeout(announceTimer.current);
    };
  }, []);

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    setLoading(false);
    loadingRef.current = false;
  }, []);

  const abortAndClearError = useCallback(() => {
    abortRef.current?.abort();
    setError("");
    setLoading(false);
    loadingRef.current = false;
    setSavedConfirm(false);
    setDupConfirm(false);
  }, []);

  const fullReset = useCallback(() => {
    abortRef.current?.abort();
    setResult("");
    setGeneratedFor(null);
    setError("");
    setLoading(false);
    loadingRef.current = false;
    setSavedConfirm(false);
    setDupConfirm(false);
  }, []);

  const generate = useCallback(async () => {
    if (!topic.trim() || loadingRef.current) return;
    setResult("");
    setGeneratedFor(null);
    setSavedConfirm(false);
    setDupConfirm(false);
    setError("In dieser Kursvorlage ist kein Backend/API-Endpunkt eingerichtet. Verbinde bei Bedarf deinen eigenen Dienst.");
  }, [topic]);

  const saveText = useCallback(() => {
    if (!result) return;

    const existing = loadSaved();
    const isDup = existing.some(
      (e) => e.topic === topic.trim() && e.format === format && e.text.slice(0, 80) === result.slice(0, 80)
    );
    if (isDup) {
      // Fix 9: use dedicated dupTimerRef, does not cancel savedConfirm
      if (dupTimerRef.current) clearTimeout(dupTimerRef.current);
      setDupConfirm(true);
      dupTimerRef.current = setTimeout(() => setDupConfirm(false), 3000);
      return;
    }

    const entry: SavedText = {
      id:      crypto.randomUUID(),
      topic:   topic.trim(),
      format,
      industry,
      text:    result,
      savedAt: Date.now(),
    };
    const updated = persistSaved([entry, ...existing].slice(0, 20));
    setSaved(updated);
    if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
    setSavedConfirm(true);
    confirmTimerRef.current = setTimeout(() => setSavedConfirm(false), 3000);
  }, [result, topic, format, industry]);

  const deleteEntry = useCallback((id: string) => {
    const updated = persistSaved(loadSaved().filter((x) => x.id !== id));
    setSaved(updated);
  }, []);

  const clearAll = useCallback(() => {
    persistSaved([]);
    setSaved([]);
    setClearConfirm(false);
  }, []);

  const copyText = useCallback((id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      setCopiedId(id);
      copiedTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const shareByEmail = useCallback((text: string, forTopic: string) => {
    const truncated = text.length > 1500 ? text.slice(0, 1500) + "\n\n[…]" : text;
    const subject = encodeURIComponent(`${forTopic}: Zusammenfassung für den Vorstand`);
    const body    = encodeURIComponent(
      `${truncated}\n\n---\nErstellt mit dem Sustainista Vorstand-Generator\nhttps://example.invalid`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  }, []);

  // Fix 6: loadEntry shows a brief "Geladen ✓" confirmation on the source entry
  const loadEntry = useCallback((entry: SavedText) => {
    setTopic(entry.topic);
    setFormat(entry.format);
    setIndustry(entry.industry);
    setResult(entry.text);
    setGeneratedFor({ topic: entry.topic, format: entry.format, industry: entry.industry });
    setSavedConfirm(false);
    setDupConfirm(false);
    setError("");
    if (loadedTimerRef.current) clearTimeout(loadedTimerRef.current);
    setLoadedId(entry.id);
    loadedTimerRef.current = setTimeout(() => {
      setLoadedId(null);
      setTab("generator");
    }, 900);
  }, []);

  // Fix 5: export all saved texts as a formatted .txt download
  const exportAll = useCallback(() => {
    const entries = loadSaved();
    if (!entries.length) return;
    const lines = entries.map((e, i) => {
      const parts = [
        `=== ${i + 1}. ${e.topic} ===`,
        `Format: ${formatLabel(e.format)}`,
      ];
      if (e.industry !== "alle") parts.push(`Branche: ${e.industry}`);
      parts.push("", e.text, "", "─".repeat(48));
      return parts.join("\n");
    }).join("\n\n");
    const header = `Sustainista Vorstand-Generator: gespeicherte Texte\n${"═".repeat(48)}\n\n`;
    const blob = new Blob([header + lines], { type: "text/plain;charset=utf-8" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "sustainista-vorstand-texte.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  // Fix 4: toggle expand/collapse for saved entry preview
  const toggleExpand = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }, []);

  const selectTag = useCallback((t: string) => {
    if (topic === t) return;
    setTopic(t);
    abortAndClearError();
  }, [topic, abortAndClearError]);

  const resultMismatch = result && generatedFor && (
    generatedFor.topic    !== topic.trim() ||
    generatedFor.format   !== format       ||
    generatedFor.industry !== industry
  );

  const showCta = result && !loading && generateCount >= 2;

  return (
    <>
      {/* Visually hidden aria-live */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>

      {/* Floating trigger */}
      <button type="button"
        ref={triggerRef}
        onClick={() => setOpen(true)}
        title="Vorstand überzeugen: KI-Text-Generator (Alt+Shift+V)"
        aria-label="Vorstand überzeugen: KI-Text-Generator öffnen (Alt+Shift+V)"
        aria-expanded={open}
        aria-haspopup="dialog"
        style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
        className={`fixed right-6 z-30 flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-canvas px-4 py-3 rounded-full shadow-lg transition-all duration-200 text-sm font-semibold ${
          open
            ? "opacity-0 pointer-events-none translate-y-2"
            : "opacity-100 hover:-translate-y-0.5 hover:shadow-xl"
        }`}
      >
        <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">Vorstand überzeugen</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Vorstand-Text Generator"
        inert={!open || undefined}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[480px] bg-canvas shadow-2xl flex flex-col transition-transform duration-300 ease-out will-change-transform overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div>
            <h2 className="text-base font-bold text-ink">Vorstand überzeugen</h2>
            <p className="text-xs text-ink-tertiary mt-0.5">ESG-Themen klar in Worte fassen</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button"
              onClick={() => setLang((l) => (l === "de" ? "en" : "de"))}
              aria-label={`Sprache wechseln zu ${lang === "de" ? "Englisch" : "Deutsch"}`}
              className="text-xs font-bold border border-border rounded-full px-2.5 py-1 text-ink-secondary hover:text-ink hover:border-brand-400 transition-colors tabular-nums"
            >
              {lang.toUpperCase()}
            </button>
            {saved.length > 0 && (
              <button type="button"
                onClick={() => setTab(tab === "saved" ? "generator" : "saved")}
                className="flex items-center gap-1.5 text-xs text-ink-secondary border border-border rounded-full px-3 py-1.5 hover:border-brand-400 hover:text-ink transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                {saved.length} gespeichert
              </button>
            )}
            <button type="button"
              onClick={() => setOpen(false)}
              aria-label="Generator schließen"
              className="p-2 rounded-btn text-ink-tertiary hover:text-ink hover:bg-surface transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border shrink-0" role="tablist">
          {(["generator", "saved"] as Tab[]).map((t) => (
            <button type="button"
              key={t}
              id={`vg-tab-${t}`}
              role="tab"
              aria-selected={tab === t}
              aria-controls={`vg-panel-${t}`}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-xs font-semibold uppercase tracking-[0.07em] transition-colors border-b-2 -mb-px ${
                tab === t
                  ? "text-brand-700 border-brand-600"
                  : "text-ink-tertiary border-transparent hover:text-ink"
              }`}
            >
              {t === "generator" ? "Generator" : `Gespeichert${saved.length > 0 ? ` (${saved.length})` : ""}`}
            </button>
          ))}
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          className="flex-1 overflow-y-auto"
          role="tabpanel"
          id={`vg-panel-${tab}`}
          aria-labelledby={`vg-tab-${tab}`}
        >
          {tab === "generator" ? (
            <div className="p-6 flex flex-col gap-5 pb-10">

              {/* Empty state hint, only before first interaction */}
              {!result && !topic && !loading && (
                <div className="rounded-card border border-dashed border-border p-5">
                  <p className="text-[10px] font-semibold text-ink-tertiary uppercase tracking-[0.1em] mb-3">
                    So funktioniert es
                  </p>
                  <ol className="space-y-2.5">
                    {[
                      "Thema eingeben oder ein Tag unten wählen",
                      "Format und Branche auswählen",
                      "Text generieren, fertig für Ihren nächsten Vorstandstermin",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-ink-secondary">
                        <span className="font-mono text-brand-500 font-semibold shrink-0 mt-px">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <p className="text-[10px] text-ink-tertiary mt-4 pt-3 border-t border-border">
                    Tipp: <kbd className="font-mono bg-surface border border-border rounded px-1 py-0.5">Alt+Shift+V</kbd> öffnet und schließt dieses Fenster.
                  </p>
                </div>
              )}

              {/* Topic input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="vg-topic" className="text-xs font-semibold text-ink uppercase tracking-[0.07em]">
                    Thema
                  </label>
                  {topic.length > MAX_TOPIC * 0.5 && (
                    <span className={`text-xs tabular-nums ${topic.length > MAX_TOPIC * 0.85 ? "text-amber-600" : "text-ink-tertiary"}`}>
                      {topic.length}/{MAX_TOPIC}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    ref={inputRef}
                    id="vg-topic"
                    type="text"
                    value={topic}
                    maxLength={MAX_TOPIC}
                    autoComplete="off" // Fix 7: prevent browser autofill dropdown
                    onChange={(e) => {
                      setTopic(e.target.value);
                      abortAndClearError();
                    }}
                    // Fix 2: placeholder reflects current language
                    placeholder={lang === "en"
                      ? "e.g. CSRD, Scope 3, Digital Product Pass…"
                      : "z.B. CSRD, Scope 3, Digital Product Pass…"}
                    className="w-full px-4 py-3 rounded-btn border border-border bg-surface text-sm text-ink placeholder:text-ink-tertiary focus:border-brand-500 transition-colors pr-9"
                    onKeyDown={(e) => e.key === "Enter" && !loading && generate()}
                  />
                  {topic && (
                    <button type="button"
                      onClick={() => { setTopic(""); fullReset(); inputRef.current?.focus(); }}
                      aria-label="Thema löschen"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded text-ink-tertiary hover:text-ink transition-colors"
                    >
                      <X className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2.5" aria-label="Schnellauswahl Themen">
                  {TOPICS.map((t) => (
                    <button type="button"
                      key={t}
                      onClick={() => selectTag(t)}
                      className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${
                        topic === t
                          ? "bg-brand-50 border-brand-500 text-brand-700 font-medium cursor-default"
                          : "border-border text-ink-tertiary hover:border-brand-300 hover:text-ink-secondary bg-canvas"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format selector */}
              <div>
                <p className="text-xs font-semibold text-ink mb-2 uppercase tracking-[0.07em]">Format</p>
                <div className="flex flex-col gap-2" role="radiogroup" aria-label="Textformat wählen">
                  {FORMATS.map((f) => (
                    <button type="button"
                      key={f.id}
                      role="radio"
                      aria-checked={format === f.id}
                      onClick={() => setFormat(f.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-btn border text-left transition-colors ${
                        format === f.id ? "border-brand-500 bg-brand-50" : "border-border bg-surface hover:border-brand-300"
                      }`}
                    >
                      <span className={`text-sm font-medium ${format === f.id ? "text-brand-800" : "text-ink-secondary"}`}>
                        {f.label}
                      </span>
                      <span className={`text-xs ${format === f.id ? "text-brand-600" : "text-ink-tertiary"}`}>
                        {f.hint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry selector */}
              <div>
                <label htmlFor="vg-industry" className="block text-xs font-semibold text-ink mb-2 uppercase tracking-[0.07em]">
                  Branche <span className="font-normal text-ink-tertiary normal-case tracking-normal">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="vg-industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full appearance-none px-4 py-3 pr-9 rounded-btn border border-border bg-surface text-sm text-ink focus:border-brand-500 transition-colors cursor-pointer"
                  >
                    {INDUSTRIES.map((i) => (
                      <option key={i.value} value={i.value}>{i.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* Generate / Cancel */}
              {loading ? (
                <button type="button"
                  onClick={cancel}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-btn text-sm font-semibold bg-surface text-ink-secondary border border-border hover:border-red-300 hover:text-red-600 transition-all group"
                >
                  <Square className="w-4 h-4 group-hover:text-red-500" aria-hidden="true" />
                  Generierung stoppen
                </button>
              ) : (
                <button type="button"
                  onClick={generate}
                  disabled={!topic.trim()}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-btn text-sm font-semibold transition-all ${
                    topic.trim()
                      ? "bg-brand-600 text-canvas hover:bg-brand-700 hover:-translate-y-px active:translate-y-0"
                      : "bg-surface text-ink-tertiary cursor-not-allowed border border-border"
                  }`}
                >
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  {result ? "Neu generieren" : "Text generieren"}
                </button>
              )}

              {/* Dismissable error */}
              {error && (
                <div role="alert" className="flex items-start gap-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-btn px-4 py-3">
                  <span className="flex-1">{error}</span>
                  <button type="button"
                    onClick={() => setError("")}
                    aria-label="Fehlermeldung schließen"
                    className="shrink-0 text-red-400 hover:text-red-700 transition-colors mt-px"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              )}

              {/* Fix 1: skeleton, visible while stream hasn't delivered first chunk yet */}
              {loading && !result && (
                <div className="rounded-card border border-border bg-surface p-5 space-y-3 animate-pulse" aria-hidden="true">
                  <div className="h-2.5 bg-border rounded-full w-3/4" />
                  <div className="h-2.5 bg-border rounded-full w-full" />
                  <div className="h-2.5 bg-border rounded-full w-5/6" />
                  <div className="h-2.5 bg-border rounded-full w-full" />
                  <div className="h-2.5 bg-border rounded-full w-2/3" />
                </div>
              )}

              {/* Section divider */}
              {result && (
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-tertiary">
                    Ihr Text
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
              )}

              {/* Result */}
              {result && (
                <div ref={resultRef} className="rounded-card border border-border bg-surface p-5">
                  {resultMismatch && (
                    <p className="text-[10px] text-ink-tertiary mb-3 pb-3 border-b border-border">
                      Generiert für:{" "}
                      <span className="font-semibold text-ink-secondary">{generatedFor!.topic}</span>
                      {generatedFor!.format !== format && (
                        <> · <span className="font-semibold text-ink-secondary">{formatLabel(generatedFor!.format)}</span></>
                      )}
                      {generatedFor!.industry !== "alle" && generatedFor!.industry !== industry && (
                        <> · <span className="font-semibold text-ink-secondary">{generatedFor!.industry}</span></>
                      )}
                    </p>
                  )}

                  <textarea
                    ref={textareaRef}
                    readOnly
                    value={result}
                    aria-label="Generierter Text"
                    className={`w-full resize-none bg-transparent text-sm text-ink leading-relaxed focus:outline-none transition-opacity overflow-hidden ${
                      loading ? "opacity-75" : "opacity-100"
                    }`}
                    style={{ minHeight: "4rem", height: "auto" }}
                  />
                  {loading && (
                    <span className="inline-block w-0.5 h-4 bg-brand-500 ml-0.5 animate-pulse align-text-bottom" aria-hidden="true" />
                  )}

                  {!loading && (
                    <>
                      <p className="text-xs text-ink-tertiary mt-2">{wordCount(result)} Wörter</p>
                      <div className="mt-3 pt-3 border-t border-border space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <button type="button"
                            onClick={() => copyText("result", result)}
                            className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink border border-border hover:border-ink-secondary rounded-btn px-3 py-2 transition-colors"
                          >
                            {copiedId === "result"
                              ? <><Check className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" /> Kopiert</>
                              : <><Copy className="w-3.5 h-3.5" aria-hidden="true" /> Kopieren</>}
                          </button>
                          <button type="button"
                            onClick={() => shareByEmail(result, generatedFor?.topic ?? topic)}
                            className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink border border-border hover:border-ink-secondary rounded-btn px-3 py-2 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                            Teilen
                          </button>
                          <button type="button"
                            onClick={saveText}
                            disabled={savedConfirm || dupConfirm}
                            className={`flex items-center gap-1.5 text-xs border rounded-btn px-3 py-2 transition-colors ${
                              savedConfirm
                                ? "text-brand-700 border-brand-300 bg-brand-50 cursor-default"
                                : dupConfirm
                                  ? "text-amber-700 border-amber-300 bg-amber-50 cursor-default"
                                  : "text-ink-secondary hover:text-ink border-border hover:border-ink-secondary"
                            }`}
                          >
                            {savedConfirm
                              ? <><Check className="w-3.5 h-3.5" aria-hidden="true" /> Gespeichert</>
                              : dupConfirm
                                ? <>Bereits gespeichert</>
                                : <><BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Speichern</>}
                          </button>
                        </div>
                        <button type="button"
                          onClick={generate}
                          className="w-full flex items-center justify-center gap-1.5 text-xs text-ink-secondary hover:text-ink border border-border hover:border-ink-secondary rounded-btn px-3 py-2.5 transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                          Neue Variante generieren
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Soft CTA */}
              {showCta && (
                <div className="rounded-card border border-brand-200 bg-brand-50 p-4">
                  <p className="text-xs text-brand-800 font-medium mb-1">Dieser Text ist ein Einstieg.</p>
                  <p className="text-xs text-brand-700 leading-relaxed">
                    Wenn Sie wissen wollen was das für Ihr Unternehmen konkret bedeutet, nehmen wir uns 30 Minuten Zeit.
                  </p>
                  <a
                    href="#kontakt"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-brand-700 hover:text-brand-900 underline underline-offset-2 transition-colors"
                  >
                    Kostenloses Gespräch vereinbaren →
                  </a>
                </div>
              )}
            </div>
          ) : (
            /* Saved tab */
            <div className="p-6 pb-10">
              {saved.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-5 h-5 text-ink-tertiary" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-ink mb-1">Noch keine gespeicherten Texte</p>
                  <p className="text-xs text-ink-tertiary mb-5 max-w-[220px] mx-auto leading-relaxed">
                    Generiere einen Text und speichere ihn für deine nächste Vorstandspräsentation.
                  </p>
                  <button type="button"
                    onClick={() => setTab("generator")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-brand-600 text-canvas hover:bg-brand-700 px-4 py-2.5 rounded-btn transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    Ersten Text generieren
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Toolbar: "Alle löschen" + Fix 5: "Alle exportieren" */}
                  <div className="flex items-center justify-between">
                    {/* Fix 5: export all as .txt */}
                    <button type="button"
                      onClick={exportAll}
                      className="flex items-center gap-1.5 text-xs text-ink-tertiary hover:text-ink transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                      Alle exportieren
                    </button>

                    {clearConfirm ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-ink-tertiary">Alle löschen?</span>
                        <button type="button"
                          onClick={clearAll}
                          className="text-xs font-semibold text-red-600 hover:text-red-800 border border-red-200 hover:border-red-400 rounded-btn px-3 py-1.5 transition-colors"
                        >
                          Ja, alle löschen
                        </button>
                        <button type="button"
                          onClick={() => setClearConfirm(false)}
                          className="text-xs text-ink-tertiary hover:text-ink border border-border rounded-btn px-3 py-1.5 transition-colors"
                        >
                          Abbrechen
                        </button>
                      </div>
                    ) : (
                      <button type="button"
                        onClick={() => setClearConfirm(true)}
                        className="text-xs text-ink-tertiary hover:text-red-600 transition-colors"
                      >
                        Alle löschen
                      </button>
                    )}
                  </div>

                  {saved.map((entry) => {
                    const isExpanded = expandedIds.has(entry.id);
                    return (
                      <div key={entry.id} className="rounded-card border border-border bg-surface p-4 hover:border-brand-200 transition-colors">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink truncate">{entry.topic}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-50 text-brand-700 border border-brand-100">
                                {formatLabel(entry.format)}
                              </span>
                              {entry.industry !== "alle" && (
                                <span className="text-xs text-ink-tertiary truncate">{entry.industry}</span>
                              )}
                            </div>
                          </div>
                          <span className="text-xs text-ink-tertiary shrink-0 mt-0.5">{timeAgo(entry.savedAt)}</span>
                        </div>

                        {/* Fix 4: expand/collapse preview */}
                        <p
                          className="text-sm text-ink-secondary leading-relaxed mt-2"
                          style={isExpanded ? undefined : {
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {entry.text}
                        </p>
                        <button type="button"
                          onClick={() => toggleExpand(entry.id)}
                          className="text-xs text-brand-600 hover:text-brand-800 mt-1.5 transition-colors"
                        >
                          {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                        </button>

                        <p className="text-xs text-ink-tertiary mt-2">{wordCount(entry.text)} Wörter</p>

                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border flex-wrap">
                          <button type="button"
                            onClick={() => copyText(entry.id, entry.text)}
                            className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink border border-border hover:border-ink-secondary rounded-btn px-3 py-2 transition-colors"
                          >
                            {copiedId === entry.id
                              ? <><Check className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" /> Kopiert</>
                              : <><Copy className="w-3.5 h-3.5" aria-hidden="true" /> Kopieren</>}
                          </button>
                          <button type="button"
                            onClick={() => shareByEmail(entry.text, entry.topic)}
                            className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink border border-border hover:border-ink-secondary rounded-btn px-3 py-2 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                            Teilen
                          </button>
                          {/* Fix 6: "In Generator laden" shows brief ✓ confirmation */}
                          <button type="button"
                            onClick={() => loadEntry(entry)}
                            className={`flex items-center gap-1.5 text-xs border rounded-btn px-3 py-2 transition-colors ${
                              loadedId === entry.id
                                ? "text-brand-700 border-brand-300 bg-brand-50 cursor-default"
                                : "text-ink-secondary hover:text-ink border-border hover:border-ink-secondary"
                            }`}
                          >
                            {loadedId === entry.id
                              ? <><Check className="w-3.5 h-3.5" aria-hidden="true" /> Geladen</>
                              : "In Generator laden"}
                          </button>
                          <button type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`"${entry.topic}" löschen`}
                            className="ml-auto p-2 text-ink-tertiary hover:text-red-600 transition-colors rounded-btn hover:bg-red-50"
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
