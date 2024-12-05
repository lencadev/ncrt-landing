import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    tailwind(),
    react() // Añadimos la integración de React
  ],
  vite: {
    envPrefix: 'PUBLIC_'
  }
});