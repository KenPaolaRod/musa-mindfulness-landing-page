// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://asme.example',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  ],
  integrations: [icon({ iconDir: 'src/icons' })],
  vite: {
    plugins: [tailwindcss()],
  },
});
