import { defineConfig } from 'astro/config';

const pagesUrl = process.env.GITHUB_PAGES_URL
  ? new URL(process.env.GITHUB_PAGES_URL)
  : undefined;

export default defineConfig({
  site: pagesUrl?.origin,
  base: pagesUrl?.pathname ?? '/',
});
