import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "page-not-found": "Page not found",
      "Cart": "Cart",
      "Homepage": "Homepage",
      "Contact": "Contact Us",
      "Shops": "Our Shops",
      "Login": "Login",
      "Signup": "Signup"
    }
  },
  et: {
    translation: {
      "Welcome to React": "Teretulemast Reacti",
      "page-not-found": "Lehekülge ei leitud",
      "Cart": "Ostukorv ",
      "Homepage": "Avaleht",
      "Contact": "Võta meiega ühendust",
      "Shops": "Meie esindused",
      "Login": "Logi sisse",
      "Signup": "Registreeru"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;