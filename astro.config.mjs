import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://centrattic.github.io',
  trailingSlash: 'never',
  build: {
    format: 'file'
  }
});
