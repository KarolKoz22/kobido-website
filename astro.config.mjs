// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set in CI (.github/workflows/deploy.yml) for GitHub Pages.
// Once a custom domain is used, set BASE_PATH to "/" (or remove it).
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
