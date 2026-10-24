// src/i18n/utils.ts
/**
 * Utilidades de internacionalización.
 * - useTranslations(lang): devuelve una función t(clave) que entrega el texto
 *   en el idioma pedido, con respaldo al idioma por defecto si falta la clave.
 */
import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
