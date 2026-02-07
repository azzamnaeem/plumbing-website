/**
 * =============================================================================
 * INTERNATIONALIZATION (i18n) CONFIGURATION
 * =============================================================================
 *
 * Language configuration for the website.
 * Currently supports: Spanish (es) and English (en)
 *
 * To add a new language:
 * 1. Add the locale code to the Locale type
 * 2. Add the language to the languages array
 * 3. Create translations in translations/[locale].ts
 *
 * =============================================================================
 */

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const languages = [
  { code: "es" as Locale, name: "Español", flag: "🇪🇸" },
  { code: "en" as Locale, name: "English", flag: "🇬🇧" },
] as const;

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

/**
 * Get the browser's preferred language
 */
export function getBrowserLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "en" || browserLang === "es") {
    return browserLang as Locale;
  }
  return defaultLocale;
}

/**
 * Get stored locale from localStorage
 */
export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "es") {
    return stored as Locale;
  }
  return null;
}

/**
 * Store locale in localStorage
 */
export function setStoredLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("locale", locale);
}
