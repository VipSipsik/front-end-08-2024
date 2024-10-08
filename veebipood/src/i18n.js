import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "page-not-found": "Page not found",
      "calculate-salary": "While you go to the right page, calculate your salary",
      "nav.giftcards": "Buy giftcard",
      "nav.shops": "Look our shops",
      "nav.haldama": "Admini view",
      
    }
  },
  et: {
    translation: {
      "page-not-found": "Lehekülge ei leitud",
      "calculate-salary":"Senimaani kuni õigele lehele lähed, arvuta oma palk:",
      "nav.giftcards": "Osta kinkekaart",
      "nav.shops": "Vaata meie esindusi",
      "nav.haldama": "Admini vaade",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    
    // <> parempoolne alt
    // võta localStoragest  (parem klõps -> inspect -> application -> Local storage -> localhost:3000)
    // Kui ei ole localStorages sellist võtit, siis võta || parempoolne

    lng: localStorage.getItem("keel") || "et", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;