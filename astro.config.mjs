// astro.config.mjs
/**
 * Configuración principal de Astro para el portafolio.
 * - site: URL pública (GitHub Pages, sitio de usuario: sin `base`).
 * - i18n: español (por defecto) e inglés, ambos con prefijo en la URL (/es/, /en/).
 */
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebasops.github.io',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
