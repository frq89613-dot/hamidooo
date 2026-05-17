import { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isRTL, Locale, SUPPORTED_LOCALES } from './i18n';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => null,
  dir: 'ltr',
  isRTL: false,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  const detectInitialLocale = (): Locale => {
    const stored = localStorage.getItem('swebtools-lang') as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (SUPPORTED_LOCALES.includes(browserLang)) return browserLang;
    return 'en';
  };

  const [locale, setLocaleState] = useState<Locale>(
    () => detectInitialLocale()
  );

  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', locale);
    root.setAttribute('dir', dir);
    if (isRTL(locale)) {
      root.classList.add('rtl');
    } else {
      root.classList.remove('rtl');
    }
  }, [locale, dir]);

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('swebtools-lang', newLocale);
    setLocaleState(newLocale);
    i18n.changeLanguage(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dir, isRTL: isRTL(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
