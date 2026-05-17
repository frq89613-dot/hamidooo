import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useLocale } from '../i18n/LocaleProvider';
import { LOCALE_LABELS, LOCALE_FLAGS, SUPPORTED_LOCALES, Locale } from '../i18n/i18n';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Select language"
        data-testid="button-language-switcher"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full mt-2 end-0 w-44 rounded-xl bg-background/95 backdrop-blur-xl border border-border shadow-xl z-50 overflow-hidden"
          >
            {SUPPORTED_LOCALES.map((lang: Locale) => (
              <button
                key={lang}
                onClick={() => {
                  setLocale(lang);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  locale === lang
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted'
                }`}
                data-testid={`button-lang-${lang}`}
              >
                <span className="text-base leading-none">{LOCALE_FLAGS[lang]}</span>
                <span>{LOCALE_LABELS[lang]}</span>
                {locale === lang && (
                  <span className="ms-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
