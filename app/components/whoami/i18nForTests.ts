import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Ініціалізація i18n для тестів
i18n.use(initReactI18next).init({
  lng: "en", // мова за замовчуванням
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        whoami: "whoami",
        name: "Marina Khrystyyanyn",
        webdev: "Web Developer",
      },
    },
    de: {
      translation: {
        whoami: "wer bin ich",
        name: "arina Khrystyyanyn",
        webdev: "Webentwicklerin",
      },
    },
    ua: {
      translation: {
        whoami: "хто я",
        name: "арина Християнин",
        webdev: "Веб-розробниця",
      },
    },
  },
  interpolation: {
    escapeValue: false, // React вже робить екранування
  },
  react: {
    useSuspense: false, // щоб не чекати lazy loading
  },
});

export default i18n;