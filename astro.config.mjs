import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://comparacaodealtura.com',
  trailingSlash: 'always',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'ar'],
    routing: 'manual',
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  build: {
    format: 'directory'
  }
});
