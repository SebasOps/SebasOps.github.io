// src/i18n/utils.ts
/**
 * Utilidades de internacionalización (i18n).
 * - useTranslations(lang): devuelve t(clave) con respaldo al idioma por defecto.
 * - localizedPath(lang, slug): construye la ruta de una página en un idioma.
 * - switchLangPath(pathname, target): cambia el prefijo de idioma de una ruta
 *   existente, para el selector ES | EN.
 */

import { ui, defaultLang, languages } from './ui';

/* Idioma soportado ('es' | 'en'), derivado de las claves de `ui`. */
export type Lang = keyof typeof ui;

/* Clave válida del diccionario; se toma del idioma por defecto. */
export type UiKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Crea la función de traducción para un idioma.
 * @param lang - Idioma de la página actual.
 * @returns Función `t(clave)` que devuelve el texto en ese idioma.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key]; // Respaldo: si la clave falta en `lang`, se usa el idioma por defecto.
  };
}

/**
 * Contenido con una versión por idioma, para textos largos que viven junto a sus
 * datos (trayectoria, formación). TypeScript exige ambos idiomas: si falta uno, no compila.
 */
export type Localized<T = string> = Record<Lang, T>;

/**
 * Elige la versión de un contenido localizado.
 * @param lang - Idioma de la página.
 * @param value - Contenido con una versión por idioma.
 * @returns El contenido en el idioma pedido.
 */
export function localize<T>(lang: Lang, value: Localized<T>): T {
  return value[lang];
}

/**
 * Construye la ruta de una página dentro de un idioma.
 * @param lang - Idioma destino.
 * @param slug - Segmento de la página ('' = inicio, 'projects', 'about').
 * @returns Ruta con barra final, p. ej. `/es/projects/`.
 */
export function localizedPath(lang: Lang, slug = ''): string {
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

// Detecta el prefijo de idioma al inicio de una ruta (/es o /en).
// El lookahead (?=/|$) exige que después venga "/" o el fin de la ruta,
// para no confundir un prefijo con una página que empiece igual (ej. "/espacio").
const langPrefix = new RegExp(`^/(${Object.keys(languages).join('|')})(?=/|$)`);

/**
 * Cambia el prefijo de idioma de una ruta, conservando el resto.
 * @param pathname - Ruta actual, p. ej. `/es/projects/`.
 * @param target - Idioma al que se quiere cambiar.
 * @returns La misma página en el otro idioma, p. ej. `/en/projects/`.
 */
export function switchLangPath(pathname: string, target: Lang): string {
  return pathname.replace(langPrefix, `/${target}`);
}
