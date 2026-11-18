"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "de" | "en";

interface LangContext {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const Context = createContext<LangContext>({ locale: "de", setLocale: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const saved = localStorage.getItem("sustainista_lang") as Locale | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "de" || saved === "en") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("sustainista_lang", l);
    document.documentElement.lang = l;
  }

  return <Context.Provider value={{ locale, setLocale }}>{children}</Context.Provider>;
}

export function useLanguage() {
  return useContext(Context);
}
