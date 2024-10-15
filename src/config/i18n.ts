import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { i18nLangsEnabled } from './i18nLangsEnabled';

const supportedLangs = i18nLangsEnabled.map((lang) => lang.codeIso);

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-GB',
    // debug: process.env.NODE_ENV === 'development',
    debug: true,
    supportedLngs: supportedLangs,
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    backend: {
      loadPath: '/locales/translations/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
