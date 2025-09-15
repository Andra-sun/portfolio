import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";
import projetosEN from "./locales/en/projects/projetos.json";
import projetosPT from "./locales/pt/projects/projetos.json";
import navPT from "./locales/pt/nav/nav.json";
import aboutPT from "./locales/pt/about/about.json";
import aboutEN from "./locales/en/about/about.json";
import certificadosEN from "./locales/en/certificates/certificados.json";
import certificadosPT from "./locales/pt/certificates/certificados.json";
import navEN from "./locales/en/nav/nav.json";

const resources = {
    en: {
        translation: translationEN,
        projects: {
            projetos: projetosEN,
        },
        about: aboutEN,
        certificados: certificadosEN,
        nav: navEN
    },
    pt: {
        translation: translationPT,
        projects: {
            projetos: projetosPT,
        },
        about: aboutPT,
        certificados: certificadosPT,
        nav: navPT
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    ns: ["translation", "projects", "about", "certificados", "nav"],
    defaultNS: "translation",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
