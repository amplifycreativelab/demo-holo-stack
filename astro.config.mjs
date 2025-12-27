// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://amplifycreativelab.github.io",
  base: "/demo-holo-stack",

  // Enable prefetching for instant navigation
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'load',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react({
      include: ['**/*.islands/*.tsx', '**/*.islands/*.jsx']
    })
  ]
});
