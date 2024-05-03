import { type TranslationKey } from '../../../i18n/ui';

export interface Link {
    key: string;
    languageKey: TranslationKey;
    href?: string;
    ariaLabel?: string;
    icon?: string;
}


export interface MenuLink extends Link {
    links?: Array<Link>;
  }