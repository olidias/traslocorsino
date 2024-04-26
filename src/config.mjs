const CONFIG = {
    name: 'Traslocorsino',
  
    origin: 'https://traslocorsino.ch',
    basePathname: '/',
    trailingSlash: false,
  
    title: 'Traslocorsino - Lieferwagenvermietung',
    description:
      'Lieferwagenvermietung einfach, günstig und unkompliziert.',
  
    defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  
    language: 'de',
    textDirection: 'ltr',
  
    dateFormatter: new Intl.DateTimeFormat('de', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }),
  };
  
  export const SITE = { ...CONFIG, blog: undefined };
  export const DATE_FORMATTER = CONFIG.dateFormatter;
  