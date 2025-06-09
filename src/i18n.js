import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";
import projetosEN from "./locales/en/projects/projetos.json";
import projetosPT from "./locales/pt/projects/projetos.json";
import aboutPT from "./locales/pt/about/about.json";
import aboutEN from "./locales/en/about/about.json";
import certificadosEN from "./locales/en/certificates/certificados.json";
import certificadosPT from "./locales/pt/certificates/certificados.json";

const resources = {
    en: {
        translation: translationEN,
        projects: {
            projetos: projetosEN,
        },
        about: aboutEN,
        certificados: certificadosEN,
    },
    pt: {
        translation: translationPT,
        projects: {
            projetos: projetosPT,
        },
        about: aboutPT,
        certificados: certificadosPT,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    ns: ["translation", "projects", "about", "certificados"],
    defaultNS: "translation",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
