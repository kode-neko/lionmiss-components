import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  mainMenu as mainMenu_en,
  mainFooter as mainFooter_en,
  modal as modal_en,
  notification as notification_en,
  paths as paths_en,
} from "./en";
import {
  mainMenu as mainMenu_es,
  mainFooter as mainFooter_es,
  modal as modal_es,
  notification as notification_es,
  paths as paths_es,
} from "./es";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      mainMenu: mainMenu_en,
      paths: paths_en,
      mainFooter: mainFooter_en,
      modal: modal_en,
      notification: notification_en,
    },
    es: {
      mainMenu: mainMenu_es,
      paths: paths_es,
      mainFooter: mainFooter_es,
      modal: modal_es,
      notification: notification_es,
    },
  },
});
