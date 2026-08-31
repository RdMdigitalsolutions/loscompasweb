import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // TODO: sustituir por el dominio definitivo
  vite: { plugins: [tailwindcss()] },
});
