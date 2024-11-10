// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { NSLocales } from "@root/locales";
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    ns: NSLocales, // Namespaces corresponding to sections
    defaultNS: NSLocales[0],

    interpolation: {
      escapeValue: false, // React handles XSS prevention
    },
  });

export default i18n;
