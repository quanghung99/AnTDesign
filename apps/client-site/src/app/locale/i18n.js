import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './en.json';
import VI from './vi.json';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: EN,
    },
    vi: {
      translations: VI,
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});
export default i18n;
