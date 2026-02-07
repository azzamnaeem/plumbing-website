/**
 * =============================================================================
 * I18N MODULE EXPORTS
 * =============================================================================
 *
 * Central export point for internationalization utilities.
 *
 * Usage:
 * import { useLanguage, LanguageProvider, Locale } from "@/lib/i18n";
 *
 * =============================================================================
 */

export { LanguageProvider, useLanguage, useTranslation } from "./LanguageContext";
export { translations, t } from "./translations";
export {
  type Locale,
  defaultLocale,
  languages,
  getStoredLocale,
  setStoredLocale,
} from "./config";
