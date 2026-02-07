"use client";

/**
 * =============================================================================
 * LANGUAGE CONTEXT
 * =============================================================================
 *
 * Provides language state and switching functionality to the entire app.
 * Persists language preference in localStorage.
 *
 * Usage:
 * const { locale, setLocale, t } = useLanguage();
 *
 * =============================================================================
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  Locale,
  defaultLocale,
  getStoredLocale,
  setStoredLocale,
} from "./config";
import { translations, t as translate } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (section: keyof typeof translations, key: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load stored locale on mount
  useEffect(() => {
    const stored = getStoredLocale();
    if (stored) {
      setLocaleState(stored);
    }
    setIsLoaded(true);
  }, []);

  // Update locale and persist to localStorage
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setStoredLocale(newLocale);

    // Update html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }
  }, []);

  // Translation function bound to current locale
  const t = useCallback(
    (section: keyof typeof translations, key: string) => {
      return translate(section, key, locale);
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

/**
 * Hook to get a specific translation
 */
export function useTranslation(section: keyof typeof translations) {
  const { locale } = useLanguage();

  return useCallback(
    (key: string) => translate(section, key, locale),
    [section, locale]
  );
}
