import i18n from "i18next";

const en = require("./locales/en/translation.json");
const fr = require("./locales/fr/translation.json");

const fallbackLng = ["en"];
const availableLanguages = ["en", "fr"];

const resources = {
  en: { translation: { ...en } },
  fr: { translation: { ...fr } },
};

const options = {
  resources,
  fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
  whitelist: availableLanguages,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  saveMissing: false,
  // keySeparator: false,
  // nsSeparator: false
};

// eslint-disable-next-line
export default () => {
  i18n.init(options);

  return i18n;
};
