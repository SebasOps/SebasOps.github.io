// src/i18n/ui.ts
/**
 * Diccionario de textos de la interfaz, uno por idioma.
 * Regla: es y en deben tener exactamente las mismas claves.
 * Las claves usan el formato "seccion.elemento" (ej. "nav.home").
 * Los textos largos de contenido (Sobre mí, proyectos) se añadirán aquí también.
 */

/** Idiomas soportados y el nombre con el que se muestran. */
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

/** Idioma de respaldo cuando falta una traducción. */
export const defaultLang = 'es' as const;

// `as const` conserva los textos como tipos literales: de ahí se derivan
// los tipos Lang y UiKey (src/i18n/utils.ts) y TypeScript detecta claves inexistentes.
export const ui = {
  es: {
    // Metadatos
    'meta.siteName': 'Sebastián Aguilar',

    // Navegación
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'lang.label': 'Idioma',

    // Inicio
    'home.title': 'Inicio',

    // Habilidades
    'skills.title': 'Habilidades',
    'skills.data': 'Datos',
    'skills.web': 'Web y backend',
    'skills.infra': 'Infraestructura',
    'skills.learning': 'aprendiendo',
    'skills.apis': 'Integración de APIs',
    'skills.servers': 'Administración de servidores',
    'skills.deploy': 'Despliegue en producción',

    // Proyectos y CV
    'projects.view': 'Ver proyecto',
    'projects.inDev': 'En desarrollo',
    'cv.es': 'Descargar CV (ES)',
    'cv.en': 'Descargar CV (EN)',
  },
  en: {
    // Metadata
    'meta.siteName': 'Sebastián Aguilar',

    // Navigation
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'lang.label': 'Language',

    // Home
    'home.title': 'Home',

    // Skills
    'skills.title': 'Skills',
    'skills.data': 'Data',
    'skills.web': 'Web & backend',
    'skills.infra': 'Infrastructure',
    'skills.learning': 'learning',
    'skills.apis': 'API integration',
    'skills.servers': 'Server administration',
    'skills.deploy': 'Production deployment',

    // Projects and CV
    'projects.view': 'View project',
    'projects.inDev': 'In development',
    'cv.es': 'Download CV (ES)',
    'cv.en': 'Download CV (EN)',
  },
} as const;