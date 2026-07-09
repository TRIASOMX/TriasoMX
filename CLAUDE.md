# TriasoMX — CLAUDE.md

Sitio web informativo de TRIASO, construido con Astro.

## Stack

- **Framework**: Astro 5 (islas de React para partes interactivas)
- **UI interactiva**: React 19 (`.tsx`) montado dentro de páginas `.astro`
- **Estilos**: Tailwind CSS 3 (config en `tailwind.config.mjs`, colores custom vía variables CSS `--azul-bg1`, `--rojo-btn`, etc.)
- **Animación**: GSAP, `scrollAnimations.tsx` por sección
- **Carruseles/sliders**: Swiper, keen-slider
- **PDF**: `@react-pdf/renderer` (usado en la Calculadora de inversión)
- **TypeScript**: modo `strict` (extiende `astro/tsconfigs/strict`)

## Comandos

```bash
npm install       # instalar dependencias
npm run dev        # servidor local en localhost:4321
npm run build       # build de producción a ./dist/
npm run preview     # preview del build
npm run astro check  # chequeo de tipos de Astro/TS
```

No hay suite de tests configurada en este proyecto todavía.

## Estructura

```
src/
├── pages/          # rutas del sitio, un .astro por página (PascalCase, ej. BeltConveyors.astro)
├── layouts/
│   └── Layout.astro  # layout base compartido
├── components/
│   ├── <Feature>/    # componentes agrupados por sección/producto (AsphaltPlants, DrumMixers, BagHouses, etc.)
│   ├── unitComponents/  # componentes reutilizables genéricos (Card, Separator, ModalButton...)
│   ├── NavbarComp/    # navbar y menú móvil
│   ├── Calculadora/    # calculadora de inversión (formularios React + generación de PDF)
│   └── lib/         # utilidades compartidas (formatNumber, formatCurrency, pmt, animaciones scroll)
public/
├── Gallery/         # imágenes de producto
└── Videos/          # mp4/webm por sección
```

## Convenciones

- Las páginas en `src/pages/` usan **PascalCase** (`ConeCrushers.astro`, no `cone-crushers.astro`) — mantener esa convención al agregar páginas nuevas.
- Los componentes se agrupan por feature/producto en su propia carpeta dentro de `src/components/`; si un componente es genérico y reutilizable en varias secciones, va en `unitComponents/`.
- Componentes puramente de contenido/estáticos → `.astro`. Componentes con estado, interacción o hooks → `.tsx` (React), importados dentro del `.astro` correspondiente con la directiva `client:*` que corresponda (`client:load`, `client:visible`, etc.).
- Colores y variables de marca se definen como variables CSS globales y se referencian en Tailwind (`blueMain`, `redBg`, `grisT`...) — no hardcodear hex codes nuevos, agregar la variable si hace falta un color nuevo.
- Formateo de números/moneda: usar las utilidades de `src/components/lib/utils.tsx` (`formatNumber`, `formatCurrency`, `parseNumber`) en vez de reimplementar.

## Verificación

- Después de modificar `.astro` o `.tsx`, correr `npm run astro check` antes de dar por terminado el cambio.
- Antes de cerrar una tarea grande (nueva página, refactor de un componente compartido), correr también `npm run build` para confirmar que el sitio compila.
- No hay tests automatizados; `astro check` + `build` son la única red de seguridad, así que no te los saltes.

## Notas / advertencias

- El repo tiene assets pesados (videos mp4/webm, imágenes) en `public/` — evitar subir archivos grandes adicionales sin necesidad.
- `.env` y `.env.production` están en `.gitignore` — nunca commitear credenciales ahí.
- El README raíz tiene contenido duplicado/residual (un merge sin limpiar); no es representativo del estado actual del proyecto — confiar en este archivo y en el código.
