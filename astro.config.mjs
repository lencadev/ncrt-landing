import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // site: 'http://localhost:4321',
  site: 'https://ncrtlanding.netlify.app',
  integrations: [
    tailwind(),
  ],
  vite: {
    envPrefix: 'PUBLIC_'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      
    }
  }
});