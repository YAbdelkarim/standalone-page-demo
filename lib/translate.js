import enTranslations from "./locale/en.json";
import arTranslations from "./locale/ar.json";

const en = enTranslations || {};
const ar = arTranslations || {};

let selectedLanguage = "en";

export const setSelectedLanguage = (lang) => {
  selectedLanguage = lang.toLowerCase();
};

export const translate = (label) => {
  const browserLang =
    typeof navigator !== "undefined"
      ? (navigator.language || "").toLowerCase()
      : "en";

  const lang = selectedLanguage || (browserLang.startsWith("ar") ? "ar" : "en");

  if (lang === "ar") {
    return ar[label] || en[label] || label;
  }
  return en[label] || ar[label] || label;
};

export const placeholderImage = (e) => {
  e.target.style.opacity = "0.5";
  e.target.style.backgroundColor = "#f5f5f5";
};
