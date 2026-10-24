// astro.config.mjs
/**
 * Configuración principal de Astro para el portafolio.
 * - site: URL pública (GitHub Pages, sitio de usuario: sin `base`).
 * - i18n: español (por defecto) e inglés, ambos con prefijo en la URL (/es/, /en/).
 * - fonts: tipografía descargada de Fontsource y servida desde el propio sitio.
 */
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://sebasops.github.io',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
  ],
});