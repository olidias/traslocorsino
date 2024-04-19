
export const defaultLang = {
  key: 'de',
  label: 'Deutsch',
  icon: 'emojione:flag-for-switzerland',
};

export const languages = [
  {
    key: 'en',
    label: 'English',
    icon: 'emojione:flag-for-united-kingdom',
  },
  defaultLang
];
export const defaultLangKey = 'de';

export const ui = {
  en: {
    'navigation.about': 'About',
    'navigation.fleet': 'Our Fleet',
    'navigation.book': 'Book Van',
    'navigation.contact': 'Contact',

  },
  de: {
    'navigation.about': 'Über Uns',
    'navigation.fleet': 'Flotte',
    'navigation.book': 'Wagen buchen',
    'navigation.contact': 'Kontakt',

  }
}
export type Language = keyof typeof ui;
export type TranslationKey = keyof typeof ui['de'];