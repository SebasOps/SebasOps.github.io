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
    'meta.description.home': 'Portafolio de Sebastián Aguilar, estudiante de Ciencia de Datos y desarrollador web full stack.',
    'meta.description.projects': 'Proyectos de Sebastián Aguilar: plataformas web de comercio electrónico y reservas en línea.',
    'meta.description.about': 'Sobre Sebastián Aguilar: formación, habilidades y experiencia en ciencia de datos y desarrollo web.',

    // Navegación
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'lang.label': 'Idioma',

    // Inicio
    'home.title': 'Inicio',
    'home.greeting': 'Hola, soy',
    'home.role': 'Data Science Student | Full Stack Web Developer (Vue.js, Django)',
    'home.contact.label': 'Contacto',
    'projects.teicopos.title': 'E-commerce TeicoPOS',
    'projects.teicopos.description': 'Plataforma de comercio electrónico multi-comercio para tiendas y restaurantes. 10 comercios activos.',
    'projects.servicehub.title': 'service-hub',
    'projects.servicehub.description': 'Reservas en línea para negocios que manejan citas: calendario, integración con Google Calendar, reportes, gastos e ingresos.',
    'projects.next.title': 'Próximamente',
    'projects.next.description': 'Proyecto de datos con un negocio real.',

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
    'meta.description.home': 'Portfolio of Sebastián Aguilar, Data Science student and full stack web developer.',
    'meta.description.projects': 'Projects by Sebastián Aguilar: e-commerce and online booking web platforms.',
    'meta.description.about': 'About Sebastián Aguilar: education, skills and experience in data science and web development.',

    // Navigation
    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'lang.label': 'Language',

    // Home
    'home.title': 'Home',
    'home.greeting': "Hi, I'm",
    'home.role': 'Data Science Student | Full Stack Web Developer (Vue.js, Django)',
    'home.contact.label': 'Contact',
    'projects.teicopos.title': 'TeicoPOS E-commerce',
    'projects.teicopos.description': 'Multi-store e-commerce platform for shops and restaurants. 10 active stores.',
    'projects.servicehub.title': 'service-hub',
    'projects.servicehub.description': 'Online booking for appointment-based businesses: calendar, Google Calendar integration, reports, expenses and income.',
    'projects.next.title': 'Coming soon',
    'projects.next.description': 'Data project with a real business.',

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