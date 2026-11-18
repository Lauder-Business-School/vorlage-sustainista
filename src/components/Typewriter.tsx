"use client";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
};

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1900;
const PAUSE_MS = 350;

/**
 * Schreibt die Begriffe Zeichen für Zeichen, hält kurz und löscht sie wieder.
 * Screenreader und Suchmaschinen bekommen die vollständige Liste als Text,
 * die Animation selbst ist aria-hidden. Bei reduzierter Bewegung steht der
 * erste Begriff still.
 */
export default function Typewriter({ words, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const word = words[index % words.length];
    let delay: number;
    let next: () => void;

    if (!deleting && text === word) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = PAUSE_MS;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    } else if (deleting) {
      delay = DELETE_MS;
      next = () => setText(word.slice(0, text.length - 1));
    } else {
      delay = TYPE_MS;
      next = () => setText(word.slice(0, text.length + 1));
    }

    const id = window.setTimeout(next, delay);
    return () => window.clearTimeout(id);
  }, [text, deleting, index, words, reduced]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="typewriter">
        {reduced ? words[0] : text}
        {/* ​ hält die Zeilenhöhe, auch wenn das Wort gerade leer ist */}
        {"​"}
      </span>
    </span>
  );
}
