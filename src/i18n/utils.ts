// src/i18n/utils.ts
/**
 * Utilidades de internacionalización.
 * - useTranslations(lang): devuelve t(clave) con respaldo al idioma por defecto.
 * - localizedPath(lang, slug): construye la ruta de una página en un idioma.
 * - switchLangPath(pathname, target): cambia el prefijo de idioma de una ruta
 *   existente, para el selector ES | EN.
 */

import { ui, defaultLang, languages } from './ui';

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, slug = ''): string {
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

const langPrefix = new RegExp(`^/(${Object.keys(languages).join('|')})(?=/|$)`);

export function switchLangPath(pathname: string, target: Lang): string {
  return pathname.replace(langPrefix, `/${target}`);
}
