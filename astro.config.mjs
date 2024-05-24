import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://traslocorsino.ch',
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), react(), icon(), sitemap({
    i18n: {
      defaultLocale: 'de',
      locales:  {
        de: 'de-CH',
        en: 'en'
      }
    }
  })]
});