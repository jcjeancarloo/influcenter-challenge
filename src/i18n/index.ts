import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUsTranslations from "./en-us";
import ptBrTranslations from "./pt-br";

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "pt-BR",
  ns: ["translations"],
  resources: {
    "pt-BR": ptBrTranslations,
    "en-US": enUsTranslations,
  },
});

export default i18n;
