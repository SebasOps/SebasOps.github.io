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
    'home.role': 'Estudiante de Ciencia de Datos | Desarrollador Web Full Stack (Vue.js, Django)',
    'home.contact.label': 'Contacto',
    'projects.teicopos.title': 'E-commerce TeicoPOS',
    'projects.teicopos.description': 'Plataforma de comercio electrónico multi-comercio para tiendas y restaurantes. Más de 10 comercios en producción.',
    'projects.servicehub.title': 'Sitio de reservas (service-hub)',
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
    'skills.servers': 'Manejo de servidores',
    'skills.deploy': 'Despliegue en producción',

    // Proyectos y CV
    'projects.view': 'Ver proyecto',
    'projects.inDev': 'En desarrollo',
    'cv.es': 'Descargar CV (ES)',
    'cv.en': 'Descargar CV (EN)',

    // Sobre mí
    'about.intro': 'Soy estudiante de Ciencia de Datos y desarrollador web. He desplegado plataformas de e-commerce y reservas en línea en producción y hago análisis de datos con Python, SQL y Power BI. Busco mi primer rol como junior en datos y también tomo proyectos freelance de web y datos.',
    'about.experience.title': 'Trayectoria',
    'about.experience.hint': 'Abre cada experiencia para ver el detalle.',
    'about.education.title': 'Formación',
    'about.certifications.title': 'Certificaciones',
    'about.languages.title': 'Idiomas',
    'about.cta.title': '¿Quieres un proyecto web o de datos?',
    'about.cta.text': 'Cuéntame qué necesitas y vemos cómo ayudarte.',
    'about.cta.email': 'Escríbeme',
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
    'projects.teicopos.description': 'Multi-store e-commerce platform for shops and restaurants. 10+ stores in production.',
    'projects.servicehub.title': 'Booking site (service-hub)',
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
    'skills.servers': 'Server management',
    'skills.deploy': 'Production deployment',

    // Projects and CV
    'projects.view': 'View project',
    'projects.inDev': 'In development',
    'cv.es': 'Download CV (ES)',
    'cv.en': 'Download CV (EN)',

    // About 
    'about.intro': "I'm a Data Science student and web developer. I've deployed e-commerce and online booking platforms to production and I work with data analysis using Python, SQL and Power BI. I'm looking for my first junior data role, and I also take on freelance web and data projects.",
    'about.experience.title': 'Experience',
    'about.experience.hint': 'Open each role to see the details.',
    'about.education.title': 'Education',
    'about.certifications.title': 'Certifications',
    'about.languages.title': 'Languages',
    'about.cta.title': 'Do you need a web or data project?',
    'about.cta.text': "Tell me what you need and let's see how I can help.",
    'about.cta.email': 'Email me',
  },
} as const;