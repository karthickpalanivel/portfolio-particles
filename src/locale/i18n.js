import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resource = {
  en: {
    translation: {
      ...require("./en.json"),
    },
  },
  ta: {
    translation: {
      ...require("./ta.json"),
    },
  },
  jp: {
    translation: {
      ...require("./jp.json"),
    },
  },
};

const storedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: resource,
    lng: storedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
};
