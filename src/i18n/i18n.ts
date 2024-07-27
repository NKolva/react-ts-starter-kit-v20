import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/en.json';
import ua from './locales/ua/ua.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en,
    ua
  },
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
