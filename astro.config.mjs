// astro.config.mjs
/**
 * Configuración principal de Astro para el portafolio.
 * - site: URL pública (GitHub Pages, sitio de usuario: sin `base`).
 * - i18n: español (por defecto) e inglés, ambos con prefijo en la URL (/es/, /en/).
 * - fonts: tipografía descargada de Fontsource y servida desde el propio sitio.
 * - sitemap: genera sitemap-index.xml con las alternativas de idioma.
 */
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Única fuente de verdad de la URL pública 
const SITE = 'https://sebasops.github.io';

export default defineConfig({
  // Necesaria para URLs absolutas, sitemap y SEO. Sin `base`: el repo se llama
  // <usuario>.github.io, así que el sitio se sirve desde la raíz.
  site: SITE,

  build: {
    // Incrusta el CSS en cada página: elimina la petición de la hoja de estilos,
    // que bloquea el primer render. El CSS del sitio es pequeño.
    inlineStylesheets: 'always',
  },

  i18n: {
    locales: ['es', 'en'], // los nombres deben coincidir con las carpetas de src/pages
    defaultLocale: 'es', // idioma al que se envía la raíz "/"
    routing: {
      // Ambos idiomas llevan prefijo en la URL (/es/, /en/)
      prefixDefaultLocale: true,
      // false: la raíz "/" la maneja src/pages/index.astro, que elige el idioma
      // según el navegador (con true, Astro la reemplazaría por un redirect fijo a /es/)
      redirectToDefaultLocale: false,
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

  integrations: [
    sitemap({
      // Añade a cada URL sus versiones por idioma (hreflang) dentro del sitemap
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' }, // clave = carpeta, valor = código de idioma
      },
      // La raíz "/" solo redirige a /es/: no debe figurar como página propia
      filter: (page) => page !== `${SITE}/`,
    }),
  ],
});
