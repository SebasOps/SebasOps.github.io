// src/data/tools.ts
/**
 * Herramientas que se muestran como iconos en los carruseles laterales.
 * Los SVG viven en public/icons/ y se sirven tal cual, con ruta absoluta
 * (el sitio está en la raíz del dominio, sin `base`).
 *
 * Campos:
 *  - name: nombre de la herramienta (solo referencia; los iconos son decorativos).
 *  - icon: ruta pública del archivo SVG.
 *  - wide: true para logos apaisados (con texto), que necesitan otro tamaño.
 *  - source: origen del archivo, para revisar su licencia.
 */

export interface Tool {
  name: string;
  icon: string;
  wide?: boolean;
  source: string;
}

export const tools: Tool[] = [
  { name: 'Python', icon: '/icons/python.svg', source: 'SVG Repo' },
  { name: 'SQL', icon: '/icons/sql.svg', source: 'SVG Repo' },
  { name: 'SQL Server', icon: '/icons/sql-server.svg', source: 'devicons' },
  { name: 'Vue.js', icon: '/icons/vue.svg', source: 'SVG Repo' },
  { name: 'Django', icon: '/icons/django.svg', source: 'SVG Repo' },
  { name: 'pandas', icon: '/icons/pandas.svg', source: 'devicons' },
  { name: 'Power BI', icon: '/icons/power-bi.svg', source: 'Streamline Icon' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg', source: 'devicons' },
  { name: 'MLflow', icon: '/icons/mlflow.svg', wide: true, source: 'Brandfetch' },
];
