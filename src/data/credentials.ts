// src/data/credentials.ts
/**
 * Formación, certificaciones e idiomas para la página "Sobre mí".
 * Los nombres propios (instituciones, cursos oficiales) no se traducen;
 * los títulos de carrera y los periodos sí, con una versión por idioma.
 */

import type { Localized } from '../i18n/utils';

export interface EducationEntry {
  id: string;
  title: Localized;
  institution: string;
  period: Localized;
}

export interface Certification {
  name: string; // título oficial del curso
  issuer: string;
}

export interface LanguageSkill {
  language: Localized;
  level: Localized;
}

export const education: EducationEntry[] = [
  {
    id: 'fidelitas',
    title: { es: 'Bachillerato en Ciencias de Datos', en: "Bachelor's Degree in Data Science" },
    institution: 'Universidad Fidélitas',
    period: { es: '2026 – Actualidad', en: '2026 – Present' },
  },
  {
    id: 'incoex',
    title: { es: 'Especialización en Ciencias de Datos', en: 'Data Science Specialization' },
    institution: 'INCOEX Instituto Técnico Profesional',
    period: { es: '2026', en: '2026' },
  },
  {
    id: 'ctp-alajuelita',
    title: {
      es: 'Técnico Medio en Desarrollo Web y Bachillerato en Educación Media',
      en: 'Medium Technical Degree in Web Development & High School Degree',
    },
    institution: 'Colegio Técnico Profesional de Alajuelita',
    period: { es: '2023 – 2025', en: '2023 – 2025' },
  },
];

export const certifications: Certification[] = [
  { name: 'Power BI Intermedio: Análisis y modelado de datos', issuer: 'Santander Open Academy' },
  { name: 'Power BI', issuer: 'Santander Open Academy' },
  { name: 'Fundamentos de Python 1', issuer: 'NetAcad' },
  { name: 'English for IT 1', issuer: 'NetAcad' },
];

export const languages: LanguageSkill[] = [
  { language: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { language: { es: 'Inglés', en: 'English' }, level: { es: 'B1', en: 'B1' } },
];
