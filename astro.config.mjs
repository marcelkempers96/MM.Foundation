import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mimaji.org',
  integrations: [sitemap()],
  output: 'static',
});
