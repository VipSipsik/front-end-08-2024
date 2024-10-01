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

const resources = {
    ru: {
        translation: {
            "page-not-found": "Страница не найдена",
            "Cart": "Корзина",
            "Homepage": "Домашняя страница",
            "Contact": "Свяжитесь c нами",
            "Shops": "Наши магазины",
            "Login": "Логин",
            "Signup": "Зарегистрируйтесь",
            "Signing up": "",
            "Maintain": "Поддерживайте",
            "Logging in": "", 
            "Enter email": "Enter email",
            "Enter password": "Enter password",

            "Product ID": "ID продукта",
            "Product title": "Название продукта",
            "Product price": "Цена",
            "Product image": "Изображение продукта",
            "Product description": "Описание продукта",
            "Product category": "Категория продукта",
            "Product rating": "Рейтинг продукции",
            "Product rating rate": "Скорость подъема",
            "Product rating count": "Счетчик рейтов",

            "Add product": "Добавить продукт",
            "Edit product": "Редактировать продукт",
            "Delete product": "Удалить продукт",
            "Edit": "Редактировать",

            "Duplicate":"",

            "Maintain shops": "",
            "Maintain categories": "",
            "Maintain products": "",
            "Add new product": "",
        }
    },

   lv : {
        translation: {
            "page-not-found": "Lapa nav atrasta",
            "Cart": "Grozs",
            "Homepage": "Mājaslapa",
            "Contact": "Sazinieties ar mums",
            "Shops": "Mūsu veikali",
            "Login": "Pieteikšanās",
            "Signup": "Reģistrēšanās",
            "Signing up": "",
            "Maintain": "Uzturēt",
            "Logging in": "", 
            "Enter email": "",
            "Enter password": "",

            "Product ID": "Produkta ID",
            "Product title": "Produkta nosaukums",
            "Product price": "Produkta cena",
            "Product image": "Produkta attēls",
            "Product description": "Produkta apraksts",
            "Product category": "Produkta kategorija",
            "Product rating": "Produkta vērtējums",
            "Product rating rate": "Vērtējuma likme",
            "Product rating count": "Vērtējumu skaits",

            "Add product": "Pievienot produktu",
            "Edit product": "Rediģēt produktu",
            "Delete product": "Dzēst preci",
            "Edit": "Rediģēt",

            "Duplicate":"",

            "Maintain shops": "",
            "Maintain categories": "",
            "Maintain products": "",
            "Add new product": "",
        }
    }
};

i18n
    .use(Backend) // Automatically detects translation files
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)  // Autommatically detects the browser's language
    .init({
        detection: DETECTION_OPTIONS, // Detection options
        //lng: "en", // NOT IN USE, BROWSER LANGUAGE DETECTION DOESN'T WORK IF THIS IS ENABLED // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
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