import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://thresholdsungames.com',
  integrations: [
    icon({
      include: {
        pixel: [
          'linkedin',
          'youtube',
          'instagram',
          'bluesky',
          'steam',
          'twitch',
          'times',
          'envelope-solid',
          'gaming',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
