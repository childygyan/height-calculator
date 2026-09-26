export const SUPPORTED_LOCALES = [
  'en',
  'hi',
  'es',
  'fr',
  'de',
  'pt',
  'ja',
  'ko',
  'ar',
  'ru',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Active locales with 100% complete translations ready for sitemap indexing.
 * Other locales are supported via fallback infrastructure.
 */
export const ACTIVE_INDEXABLE_LOCALES: Locale[] = ['en', 'hi', 'ru', 'pt'];

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  hreflang: string;
  flag: string;
}

export const LOCALES: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    ogLocale: 'en_US',
    hreflang: 'en',
    flag: '🇺🇸',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    dir: 'ltr',
    ogLocale: 'hi_IN',
    hreflang: 'hi',
    flag: '🇮🇳',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    ogLocale: 'es_ES',
    hreflang: 'es',
    flag: '🇪🇸',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    ogLocale: 'fr_FR',
    hreflang: 'fr',
    flag: '🇫🇷',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    ogLocale: 'de_DE',
    hreflang: 'de',
    flag: '🇩🇪',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    dir: 'ltr',
    ogLocale: 'pt_BR',
    hreflang: 'pt-BR',
    flag: '🇧🇷',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr',
    ogLocale: 'ja_JP',
    hreflang: 'ja',
    flag: '🇯🇵',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    dir: 'ltr',
    ogLocale: 'ko_KR',
    hreflang: 'ko',
    flag: '🇰🇷',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    ogLocale: 'ar_AR',
    hreflang: 'ar',
    flag: '🇸🇦',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    dir: 'ltr',
    ogLocale: 'ru_RU',
    hreflang: 'ru',
    flag: '🇷🇺',
  },
};
