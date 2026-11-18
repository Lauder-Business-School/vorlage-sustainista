"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YoutubeFacadeProps {
  videoId: string;
  title: string;
  playLabel: string;
  consentNote: string;
}

/** Lädt YouTube erst nach Klick, damit beim Seitenaufruf keine Drittanbieter-Cookies gesetzt werden. */
export default function YoutubeFacade({ videoId, title, playLabel, consentNote }: YoutubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink px-6 text-canvas transition-colors hover:bg-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-300"
    >
      <Play className="h-10 w-10" aria-hidden="true" />
      <span className="font-semibold">
        {playLabel}
        <span className="sr-only">: {title}.</span>
      </span>
      <span className="text-xs text-canvas/70">{consentNote}</span>
    </button>
  );
}
