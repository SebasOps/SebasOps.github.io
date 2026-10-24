// src/i18n/ui.ts
/**
 * Diccionario de textos de la interfaz, uno por idioma.
 * Regla: es y en deben tener exactamente las mismas claves.
 * Las claves usan el formato "seccion.elemento" (ej. "nav.home").
 */
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export const ui = {
  es: {
    'meta.siteName': 'Sebastián Aguilar',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'home.title': 'Inicio',
  },
  en: {
    'meta.siteName': 'Sebastián Aguilar',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'home.title': 'Home',
  },
} as const;
