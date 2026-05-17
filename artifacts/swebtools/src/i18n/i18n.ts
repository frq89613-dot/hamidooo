import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ar from './locales/ar';
import tr from './locales/tr';
import ru from './locales/ru';

export const SUPPORTED_LOCALES = ['en', 'ar', 'tr', 'ru'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const RTL_LOCALES: Locale[] = ['ar'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
  ru: 'Русский',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  ar: '🇸🇦',
  tr: '🇹🇷',
  ru: '🇷🇺',
};

export function isRTL(locale: string): boolean {
  return RTL_LOCALES.includes(locale as Locale);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      tr: { translation: tr },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LOCALES,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'swebtools-lang',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
