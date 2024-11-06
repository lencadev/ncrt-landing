import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'http://localhost:4321', // Agrega esta línea con tu dominio
  integrations: [tailwind()],
  vite: {
    envPrefix: 'PUBLIC_'
  }
});