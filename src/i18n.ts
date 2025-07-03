import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar";
import en from "./locales/en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar,
      en,
    },
    lng: "ar",
    fallbackLng: "ar",
    defaultNS: "header",  // هذا يخلي namespace الافتراضي header
    ns: ["header","home","footer","form","step1","step2","step3","step4","step5","step6","pastRequests"],       // قائمة النيم سبيس
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
