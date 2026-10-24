// astro.config.mjs
/**
 * Configuración principal de Astro para el portafolio.
 * - site: URL pública (GitHub Pages, sitio de usuario: sin `base`).
 * - i18n: español (por defecto) e inglés, ambos con prefijo en la URL (/es/, /en/).
 * - fonts: tipografía descargada de Fontsource y servida desde el propio sitio.
 */
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Necesaria para URLs absolutas, sitemap y SEO.
  site: 'https://sebasops.github.io',

  i18n: {
    locales: ['es', 'en'],  // los nombres deben coincidir con las carpetas de src/pages
    defaultLocale: 'es',    // idioma al que redirige la raíz "/"
    routing: {
      // Ambos idiomas llevan prefijo (/es/, /en/); además activa el redirect automático de "/" hacia /es/.
      prefixDefaultLocale: true,
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',  // variable CSS que se usa en global.css
      weights: ['100 900'],         // rango completo: fuente variable
      styles: ['normal'],
      fallbacks: ['sans-serif'],    // respaldo mientras carga la fuente
    },
  ],
});
