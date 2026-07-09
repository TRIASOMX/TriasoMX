---
description: Crea una pagina nueva siguiendo las convenciones del proyecto TriasoMX
argument-hint: [NombrePagina]
---

Crea una nueva pagina en `src/pages/$ARGUMENTS.astro` siguiendo las convenciones de este proyecto:

- Nombre de archivo en PascalCase (igual que las paginas existentes en `src/pages/`).
- Usa `Layout.astro` de `src/layouts/` como layout base.
- Si la pagina necesita componentes de seccion propios, crealos en `src/components/$ARGUMENTS/`; si son genericos y reutilizables, van en `src/components/unitComponents/`.
- Componentes estaticos -> `.astro`. Componentes con estado/interaccion -> `.tsx` (React) importado con la directiva `client:*` que corresponda.
- Colores via las variables Tailwind del proyecto (`blueMain`, `redBg`, `grisT`, etc.), nunca hex hardcodeados.
- Revisa 1-2 paginas existentes similares en `src/pages/` para replicar la estructura general.

Antes de crear componentes nuevos, preguntame que secciones/contenido debe llevar la pagina.
