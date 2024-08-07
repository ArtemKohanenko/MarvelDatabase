import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "data-provided": "Data provided by Marvel. @{{year}} MARVEL",
      "characters-link": "Characters",
      "comics-link": "Comics",
      "search-button": "SEARCH",
      "comics-title": "Comics",
      "characters-title": "Characters",
      "favourites-title": "Favoutites",
      "page-not-exist-text": "Page doesn't exist.",
      "search-character-placeholder": "Search for Characters by Name",
      "search-comics-placeholder": "Search for Comics by Title",
    },
  },
  ru: {
    translation: {
      "data-provided": "Данные предоставлены Marvel. @{{year}} MARVEL",
      "characters-link": "Персонажи",
      "comics-link": "Комиксы",
      "search-button": "ПОИСК",
      "comics-title": "Комиксы",
      "characters-title": "Персонажи",
      "favourites-title": "Избранное",
      "page-not-exist-text": "Страница не существует.",
      "search-placeholder": "Поиск персонажа по имени",
      "search-comics-placeholder": "Поиск комикса по названию",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
