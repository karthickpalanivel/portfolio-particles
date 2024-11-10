import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resource = {
  en: {
    translation: {
      ...require("./en.json"),
      ...require("../data/Events.json"),
      ...require("../data/Experience.json"),
      ...require("../data/SkillsImages.json"),
      ...require("../data/Works.json"),
    },
  },
  ta: {
    translation: {
      ...require("./ta.json"),
      ...require("./events/taEvents.json"),
      ...require("./skills/taSkills.json"),
      ...require("./work/taWorks.json"),
    },
  },
  jp: {
    translation: {
      ...require("./jp.json"),
      ...require("./events/jpEvents.json"),
      ...require("./skills/jpSkill.json"),
      ...require("./work/jpWorks.json"),
    },
  },
};

const storedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
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
