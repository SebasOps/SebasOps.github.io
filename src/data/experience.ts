// src/data/experience.ts
/**
 * Trayectoria laboral para la línea de tiempo de "Sobre mí".
 * Orden: del más reciente al más antiguo (invertir el arreglo para cronológico).
 * Campos:
 *  - role / kind / period / summary: textos con una versión por idioma.
 *  - org: nombre propio de la organización (no se traduce).
 *  - details: viñetas del detalle desplegable (opcional; sin ellas la entrada no se despliega).
 * Decisión: no se publican cifras exactas de clientes ni de facturación.
 */

import type { Localized } from '../i18n/utils';

export interface ExperienceEntry {
  id: string;
  role: Localized;
  org: string;
  kind: Localized;
  period: Localized;
  summary: Localized;
  details?: Localized<string[]>;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'teico-work',
    role: { es: 'Desarrollador web', en: 'Web developer' },
    org: 'Teico Solutions',
    kind: { es: 'Empleo formal', en: 'Employment' },
    period: { es: 'Ene 2026 – Actualidad', en: 'Jan 2026 – Present' },
    summary: {
      es: 'Plataforma de e-commerce en producción desde hace más de 6 meses.',
      en: 'E-commerce platform in production for over 6 months.',
    },
    details: {
      es: [
        'Desarrollé y desplegué en solitario una plataforma de e-commerce multi-comercio, hoy en producción con más de 10 comercios, algunos con millones de colones en pedidos.',
        'Diseñé la integración bidireccional con el sistema POS: sincronización de productos cada 2 minutos y envío automático de documentos electrónicos (proformas, tiquetes o facturas electrónicas según corresponda).',
        'Implementé mejoras posteriores al lanzamiento: nuevas pasarelas de pago, validación automática de pagos SINPE e integración con Meta Pixel para el seguimiento de eventos de usuario.',
      ],
      en: [
        'Independently developed and deployed a multi-store e-commerce platform, now in production with 10+ merchants, some of them with millions of colones in orders.',
        'Designed the bidirectional integration with the POS system: product synchronization every 2 minutes and automatic submission of electronic documents (proformas, receipts or electronic invoices as applicable).',
        'Implemented post-launch improvements: new payment gateways, automatic SINPE payment validation and Meta Pixel integration for user event tracking.',
      ],
    },
  },
  {
    // Sin `details`: la entrada se muestra sin desplegable
    id: 'teico-internship',
    role: { es: 'Desarrollador web', en: 'Web developer' },
    org: 'Teico Solutions',
    kind: { es: 'Práctica profesional', en: 'Internship' },
    period: { es: 'Oct 2025 – Nov 2025', en: 'Oct 2025 – Nov 2025' },
    summary: {
      es: 'Práctica profesional como desarrollador web.',
      en: 'Internship as a web developer.',
    },
  },
  {
    id: 'clinica',
    role: { es: 'Asistente de soporte técnico', en: 'Technical support assistant' },
    org: 'Clínica Dr. Marcial Fallas Díaz',
    kind: { es: 'Pasantía', en: 'Internship' },
    period: { es: 'Sep 2024 – Oct 2024', en: 'Sep 2024 – Oct 2024' },
    summary: {
      es: 'Soporte técnico y mejoras al sitio web de la clínica.',
      en: "Technical support and improvements to the clinic's website.",
    },
    details: {
      es: [
        'Propuse mejoras y actualizaciones al sitio web de la empresa, mejorando la usabilidad y la estructura visual.',
        'Realicé mantenimiento preventivo y correctivo en equipos de escritorio y resolví incidencias técnicas reportadas por los usuarios, asegurando el correcto funcionamiento y la continuidad de la operación.',
      ],
      en: [
        "Proposed improvements and updates to the company's website, enhancing usability and visual structure.",
        'Performed preventive and corrective maintenance on desktop equipment and resolved user-reported technical issues, ensuring proper functioning and continuity of operations.',
      ],
    },
  },
];
