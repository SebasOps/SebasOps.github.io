// src/data/skills.ts
/**
 * Habilidades agrupadas para la sección "Habilidades".
 * - label: nombre propio que no se traduce (Python, Vue.js...).
 * - labelKey: clave del diccionario i18n cuando el nombre sí se traduce.
 * - learning: marca lo que todavía se está aprendiendo.
 */

import type { UiKey } from '../i18n/utils';

export type SkillItem =
  | { label: string; learning?: boolean }
  | { labelKey: UiKey; learning?: boolean };

export interface SkillGroupData {
  titleKey: UiKey;
  items: SkillItem[];
}

export const skillGroups: SkillGroupData[] = [
  {
    titleKey: 'skills.data',
    items: [
      { label: 'Python' },
      { label: 'pandas' },
      { label: 'SQL' },
      { label: 'SQL Server' },
      { label: 'Power BI' },
      { label: 'MLflow', learning: true },
    ],
  },
  {
    titleKey: 'skills.web',
    items: [
      { label: 'Vue.js' },
      { label: 'Django' },
      { label: 'FastAPI' },
      { labelKey: 'skills.apis' },
    ],
  },
  {
    titleKey: 'skills.infra',
    items: [{ labelKey: 'skills.servers' }, { labelKey: 'skills.deploy' }],
  },
];
