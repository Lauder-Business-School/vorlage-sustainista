"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Zeigt die Connector-URL als Code und kopiert sie mit einem Klick. Ohne Clipboard-API bleibt die URL markierbar. */
export default function McpUrlKopieren({ url, label = "URL kopieren", kopiert = "Kopiert" }: { url: string; label?: string; kopiert?: string }) {
  const [ok, setOk] = useState(false);

  async function kopieren() {
    try {
      await navigator.clipboard.writeText(url);
      setOk(true);
      setTimeout(() => setOk(false), 2000);
    } catch {
      // Kein Zugriff auf die Zwischenablage (z. B. ohne HTTPS): die URL steht markierbar daneben.
    }
  }

  return (
    <div className="flex w-full max-w-xl items-stretch overflow-hidden rounded-btn border border-border-strong bg-canvas">
      <code className="flex-1 min-w-0 select-all truncate px-4 py-3 font-mono text-sm text-ink" title={url}>
        {url}
      </code>
      <button
        type="button"
        onClick={kopieren}
        className="inline-flex shrink-0 items-center gap-2 border-l border-border-strong bg-surface px-4 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
        aria-live="polite"
      >
        {ok ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        <span className="max-[420px]:sr-only">{ok ? kopiert : label}</span>
      </button>
    </div>
  );
}
