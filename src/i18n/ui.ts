
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

    'footer.name': 'Alessandro Orsino',
    'footer.address': 'Nordstrasse 8',
    'footer.town': '8620 Wetzikon'

  },
  de: {
    'navigation.about': 'Über Uns',
    'navigation.fleet': 'Flotte',
    'navigation.book': 'Wagen buchen',
    'navigation.contact': 'Kontakt',

    'footer.name': 'Alessandro Orsino',
    'footer.address': 'Nordstrasse 8',
    'footer.town': '8620 Wetzikon'
  }
}
export type Language = keyof typeof ui;
export type TranslationKey = keyof typeof ui['de'];