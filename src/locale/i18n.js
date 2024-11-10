import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resource = {
  en: {
    translation: require("./en.json"),
  },
  ta: {
    translation: require("./ta.json"),
  },
  jp: {
    translation: require("./jp.json"),
  },
};

const storedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: resource,
  lng: storedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
