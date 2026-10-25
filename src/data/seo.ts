// src/data/seo.ts
/**
 * Datos compartidos del SEO: imagen para redes sociales (Open Graph).
 * La imagen vive en public/og-image.png (1200x630) y está en inglés a propósito:
 * una sola imagen para ambos idiomas.
 */

export const ogImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Sebastián Aguilar, Data Science Student and Full Stack Web Developer',
} as const;
