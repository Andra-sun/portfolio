import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import projetosEN from './locales/en/projects/projetos.json';
import projetosPT from './locales/pt/projects/projetos.json';

const resources = {
  en: {
    translation: translationEN,
    projects: {
      projetos: projetosEN
    }
  },
  pt: {
    translation: translationPT,
    projects: {
      projetos: projetosPT
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    ns: ['translation', 'projects'], 
    defaultNS: 'translation',   
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
