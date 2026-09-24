import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://idahofallswaterheaterrepair.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/services/water-heater-installation/': '/services/water-heater-replacement/',
    '/services/electric-water-heater-repair-installation/': '/services/electric-water-heater-repair/',
    '/services/gas-water-heater-repair-installation/': '/services/gas-water-heater-repair/',
    '/services/tankless-water-heater-repair-installation/': '/services/tankless-water-heater-repair/'
  }
});
