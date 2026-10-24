// src/data/site.ts
/**
 * Datos de contacto y archivos públicos del sitio.
 * Es el único lugar donde se editan el correo, los enlaces y las rutas de los CV.
 */

export const site = {
  name: 'Sebastián Aguilar',
  email: 'aguilarsebastian093@gmail.com', // correo público
  linkedin: 'https://www.linkedin.com/in/sebasti%C3%A1n-aguilarb/',
  github: 'https://github.com/SebasOps',
  // CV de ciencia de datos, uno por idioma; los PDF viven en public/cv/
  cv: {
    es: '/cv/cv-datos-es.pdf',
    en: '/cv/cv-datos-en.pdf',
  },
} as const;
