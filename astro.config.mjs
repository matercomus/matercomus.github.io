// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages uses root domain, GitLab Pages uses project path
  // GitLab CI sets CI_PROJECT_NAME and CI_PAGES_URL environment variables
  site: process.env.CI_PAGES_URL 
    ? process.env.CI_PAGES_URL 
    : 'https://matercomus.github.io',
  base: process.env.CI_PROJECT_NAME 
    ? `/${process.env.CI_PROJECT_NAME}/` 
    : undefined,
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});