import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const DETECTION_OPTIONS = {
   order: ['navigator']
};


i18n
    .use(Backend) // Automatically detects translation files
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)  // Autommatically detects the browser's language
    .init({
        //resources,
        detection: DETECTION_OPTIONS, // Detection options
        lng: localStorage.getItem("language") || null, 
        //when 'lng:' NOT IN USE, BROWSER LANGUAGE DETECTION DOESN'T WORK IF THIS IS ENABLED // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        react: {
            useSuspense: true
          },  
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;