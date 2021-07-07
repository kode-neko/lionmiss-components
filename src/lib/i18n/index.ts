import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { mainMenu as mainMenu_en, paths as paths_en } from "./en";
import { mainMenu as mainMenu_es, paths as paths_es } from "./es";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      mainMenu: mainMenu_en,
      paths: paths_en,
    },
    es: {
      mainMenu: mainMenu_es,
      paths: paths_es,
    },
  },
});
