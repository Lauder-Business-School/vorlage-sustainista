"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoSectionProps {
  videoId: string;
  title: string;
  eyebrow?: string;
}

export default function VideoSection({ videoId, title, eyebrow }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-canvas">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {eyebrow && (
          <div className="flex justify-center mb-4">
            <p className="eyebrow">{eyebrow}</p>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight leading-[1.05] text-center mb-8">
          {title}
        </h2>
        <div className="relative w-full rounded-card overflow-hidden border border-border shadow-ambient-low" style={{ paddingTop: "56.25%" }}>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink px-6 text-canvas transition-colors hover:bg-ink-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-300"
            >
              <Play className="h-10 w-10" aria-hidden="true" />
              <span className="font-semibold">Video abspielen<span className="sr-only">: {title}.</span></span>
              <span className="text-xs text-canvas/70">Beim Start wird eine Verbindung zu YouTube hergestellt.</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
