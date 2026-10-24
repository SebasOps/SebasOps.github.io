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
    'nav.label': 'Navegación principal',
    'lang.label': 'Idioma',
    'skills.title': 'Habilidades',
    'skills.data': 'Datos',
    'skills.web': 'Web y backend',
    'skills.infra': 'Infraestructura',
    'skills.learning': 'aprendiendo',
    'skills.apis': 'Integración de APIs',
    'skills.servers': 'Administración de servidores',
    'skills.deploy': 'Despliegue en producción',
    'projects.view': 'Ver proyecto',
    'projects.inDev': 'En desarrollo',
    'cv.es': 'Descargar CV (ES)',
    'cv.en': 'Descargar CV (EN)',
  },
  en: {
    'meta.siteName': 'Sebastián Aguilar',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'home.title': 'Home',
    'nav.label': 'Main navigation',
    'lang.label': 'Language',
    'skills.title': 'Skills',
    'skills.data': 'Data',
    'skills.web': 'Web & backend',
    'skills.infra': 'Infrastructure',
    'skills.learning': 'learning',
    'skills.apis': 'API integration',
    'skills.servers': 'Server administration',
    'skills.deploy': 'Production deployment',
    'projects.view': 'View project',
    'projects.inDev': 'In development',
    'cv.es': 'Download CV (ES)',
    'cv.en': 'Download CV (EN)',
  },
} as const;
