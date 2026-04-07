import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/pyrebound-website/',
  integrations: [
    icon({
      include: {
        pixel: ['linkedin', 'youtube', 'instagram', 'bluesky', 'steam', 'twitch', 'times'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
