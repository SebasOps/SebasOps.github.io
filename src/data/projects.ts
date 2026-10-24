// src/data/projects.ts
/**
 * Proyectos que se muestran en la tarjeta de proyectos del Inicio.
 * - slug: identificador (se usará en la URL de la página de detalle).
 * - titleKey / descriptionKey: claves del diccionario i18n.
 * - placeholder: texto del marcador mientras no hay captura de pantalla.
 * - inDevelopment: muestra la etiqueta "En desarrollo".
 */

import type { UiKey } from '../i18n/utils';

export interface ProjectSummary {
  slug: string;
  titleKey: UiKey;
  descriptionKey: UiKey;
  placeholder: string;
  inDevelopment?: boolean;
}

export const projects: ProjectSummary[] = [
  {
    slug: 'teicopos',
    titleKey: 'projects.teicopos.title',
    descriptionKey: 'projects.teicopos.description',
    placeholder: 'Captura de TeicoPOS',
  },
  {
    slug: 'service-hub',
    titleKey: 'projects.servicehub.title',
    descriptionKey: 'projects.servicehub.description',
    placeholder: 'Captura de service-hub',
    inDevelopment: true,
  },
];
