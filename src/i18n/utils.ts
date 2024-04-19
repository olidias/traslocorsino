import { ui, defaultLang, type Language, type TranslationKey, defaultLangKey } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Language;
  return defaultLang.key as Language;
}

export function useTranslations(lang: Language): (key: TranslationKey) => string {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLangKey][key];
  }
}