# Auditoría de calidad web — TRIASO (TriasoMX)

**Fecha:** 2026-09-28 · **Rama auditada:** `preview` · **Stack:** Astro 5.9.3 (estático) + islas React 19, Tailwind 3, GSAP, Swiper, `@react-pdf/renderer` · **Hosting:** Vercel

**Método:** revisión del código fuente, `npm run build` y análisis del HTML generado en `dist/` (33 páginas, ver hallazgo B-1), `npm run astro check`, `npm audit --omit=dev`, `npm outdated`. **No se pudo consultar la URL de producción** (`https://triaso-dps0wbyls-triaso-s-projects.vercel.app/`) desde este entorno: todo lo que depende de cabeceras HTTP, compresión, caché y Core Web Vitals reales está marcado como **"requiere verificación en producción"**.

### Estado de las correcciones

| Hallazgo | Estado | Fecha | Notas |
|---|---|---|---|
| S-5 — Un solo `<h1>` por página | ✅ Resuelto (sin commit) | 2026-09-28 | 1,696 `<h1>` convertidos en 137 archivos; ver detalle en S-5 |
| S-2 — Idioma declarado | ✅ Resuelto (sin commit) | 2026-09-28 | `lang="es-MX"` en el Layout; páginas legales traducidas al español |
| P-3 — `@react-pdf/renderer` en el bundle inicial | ✅ Resuelto (sin commit) | 2026-09-28 | Import dinámico al descargar; chunk de la calculadora 1,516 KB → 23 KB |

Las puntuaciones y cifras del resumen reflejan el estado **antes** de las correcciones.

---

## 1. Resumen ejecutivo

El sitio tiene un diseño rico y un catálogo de producto extenso, pero hoy está **prácticamente sin infraestructura SEO**: no hay `robots.txt`, sitemap, canonical, Open Graph ni datos estructurados; 9 páginas comparten el título "TRIASOUS", el `lang` declarado era inglés con contenido en español (ya corregido, ver S-2) y había páginas con hasta 43 `<h1>` (ya corregido, ver S-5). Gran parte del contenido de producto se renderiza con `client:only` (115 usos), por lo que no llega en el HTML. En performance, el mayor problema son imágenes servidas **sin optimizar** (PNG de planos de 1–2 MB en el bundle, 17 MB de PNG/JPG en `dist/_astro`), un bundle de 1.5 MB por `@react-pdf/renderer` cargado de forma estática (ya corregido, ver P-3) y ~60 KB de scripts inline duplicados en cada página. En accesibilidad, el menú de escritorio no es operable con teclado y el gris de texto principal no alcanza 4.5:1. En buenas prácticas, **el build de producción falla en Windows** por un slug de noticia inválido, hay 34 errores de TypeScript, 18 vulnerabilidades (3 críticas) y datos de contacto contradictorios en el footer.

| Categoría | Puntuación (1–10) |
|---|---|
| SEO técnico | **3** |
| Performance | **3** |
| Accesibilidad | **5** |
| Buenas prácticas / seguridad | **4** |

---

## 2. Hallazgos por categoría

### 2.1 SEO técnico

**S-1. Layout sin metadatos SEO básicos** — `src/layouts/Layout.astro`
- Solo emite `<title>` y `<meta name="description">`. Faltan: `<link rel="canonical">`, `<meta name="robots">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`), Twitter Card, `theme-color`, `apple-touch-icon`/`manifest`.
- Ninguna de las 33 páginas analizadas en `dist/` tiene canonical, OG ni JSON-LD.
- **Por qué importa:** sin canonical, las variantes con/sin slash final y mayúsculas/minúsculas pueden indexarse como duplicados; sin OG, los enlaces compartidos en WhatsApp/LinkedIn/Facebook (canales que el sitio usa) salen sin imagen ni descripción.
- **Solución:** añadir `site: "https://<dominio-final>"` en `astro.config.mjs` y en el Layout aceptar props `title`, `description`, `image`, `noindex`, emitiendo:
  ```astro
  <link rel="canonical" href={new URL(Astro.url.pathname, Astro.site)} />
  <meta property="og:title" content={title} /> <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image ?? "/og-default.jpg", Astro.site)} />
  <meta property="og:url" content={new URL(Astro.url.pathname, Astro.site)} />
  <meta property="og:type" content="website" /> <meta property="og:locale" content="es_MX" />
  <meta name="twitter:card" content="summary_large_image" />
  ```
  Crear una imagen OG por defecto 1200×630 en `public/`.

**S-2. Idioma declarado incorrecto** — `src/layouts/Layout.astro:14` · ✅ **Resuelto el 2026-09-28**
- **Corrección aplicada:** `<html lang="es-MX">` en `src/layouts/Layout.astro`. Las páginas `/PrivacyPolicy` y `/TermsandConditions`, que estaban en inglés, se tradujeron al español (`src/components/Legal/Privacy.astro` y `Terms.astro`), con títulos iguales a los enlaces del footer ("Política de privacidad", "Términos y condiciones"). `astro check` sin errores nuevos.
- **Textos legales corregidos (2026-09-28):** en Términos, "Nortam" (restos de una plantilla) se cambió por "Triaso"; en Política de privacidad, la sección de contacto ahora habla de "este Aviso de Privacidad" en vez de "estos Términos y Condiciones".
- **Pendiente relacionado:** ambas páginas legales siguen usando `sales@triasous.com` como correo de contacto y para ejercer los derechos ARCO; se decidirá junto con B-6. Conviene que alguien con criterio legal revise la traducción. Los nombres de producto en inglés de los hero ("Ball Mills", "Jaw Crushers"…) se dejaron dentro del `lang` en español.
- *Diagnóstico original —* `<html lang="en">` pero el contenido es español. Afecta a Google (señal de idioma), traductores y lectores de pantalla (pronuncian el español con fonética inglesa).
- **Solución:** `<html lang="es-MX">`.

**S-3. Títulos ausentes, duplicados o poco descriptivos** — `src/pages/*.astro`
- 9 páginas renderizan el título por defecto **"TRIASOUS"**: AboutUs, BallMills, BeltConveyors, ConeCrushers, Example, Expo, IntegralCrushers, MiniCrushers, `news/[id]` (además, por código, Newsroom, PrivacyPolicy, TermsandConditions y VibratingScreens tampoco pasan `title`).
- "Tambor de contraflujo" se repite en `DrumMixers.astro`, `TamborMezcla/Contraflujo/ContraDesamaq.astro`, `ContraPlus.astro` y `TamborMezcla/Paralelo/ParaleloPro.astro` (esta última ni siquiera es contraflujo).
- Títulos en inglés con sufijo "Page" en un sitio en español: "BagHouses Page", "Burners Page", "ColdMix Page", "Oil Heaters Page", "Rap Bins Page", "Improvement in systems and designs Page", "Aesthetic Side Panels Page".
- Solo `index.astro` y `Maintenance.astro` pasan `description` (y la de Maintenance es "Maintenance page"); el resto hereda la descripción genérica en inglés del Layout → **descripciones duplicadas en todo el sitio**.
- **Solución:** hacer `title` y `description` obligatorios en el Layout (tipar `Props` sin default), y definir por página un título de 50–60 caracteres con patrón `"<Producto> | TRIASO"` y una descripción única de 140–160 caracteres en español.

**S-4. No existen `robots.txt` ni sitemap** — `public/`, `astro.config.mjs`
- No hay `public/robots.txt`, ni `@astrojs/sitemap`, ni `site` configurado.
- **Solución:** `npx astro add sitemap`, configurar `site`, y crear `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://<dominio-final>/sitemap-index.xml
  ```
  Excluir del sitemap `/Example` (ver S-8) con la opción `filter`.

**S-5. Jerarquía de encabezados rota (múltiples `<h1>`)** — varios componentes · ✅ **Resuelto el 2026-09-28**
- **Corrección aplicada:** se conservan 35 `<h1>` (los hero: `unitComponents/HeroComponent*.astro`, `AsphaltPlants/Hero.astro`, `*FirstSection*`, `LandinPage/MainSection.astro`, `ContactPage/FormSection.astro`, legales, noticias y videos). Cada uno aparece en una sola página. El resto: 321 → `<h2>` (títulos de sección), 702 → `<h3>` (títulos de cards, tabs y grupos de planos) y 673 → `<p>` (etiquetas de dato como "Longitud:", cifras y separadores/unidades de odómetros, que no eran encabezados). Solo cambió la etiqueta; clases, `id` y textos quedan igual, y Tailwind preflight hace que no haya cambio visual.
- **Verificación:** las 52 páginas tienen exactamente un `<h1>` al recorrer su árbol de componentes; las 32 páginas que se generan en el build (ver B-1) tienen 1 `<h1>` en `dist/`; etiquetas balanceadas en los 137 archivos; `astro check` sin errores nuevos (siguen los 34 previos, B-2). Pendiente: revisión visual en navegador.
- **Pendiente relacionado:** algunas secciones empiezan en `<h3>` sin un `<h2>` previo (la regla se basó en el tamaño de texto de cada título); WCAG lo permite, pero conviene ajustarlo al rediseñar cada sección.
- *Diagnóstico original —* conteo en `dist/`: Manufacture **43** h1, DrumMixers **33**, HotMix 27, ColdMix 25, Expo 25, BinUnits 24, AsphaltStorage 19, Advantages 12, Delivery 12, Burners 10. La home (por código) tiene 3: `LandinPage/MainSection.astro`, y dos en `LandingPage.astro` ("¡Apostemos por México!", "Somos expertos…"). `Example` tiene 0.
- **Por qué importa:** el `<h1>` indica el tema principal de la página; decenas de h1 diluyen la señal y rompen la navegación por encabezados de lectores de pantalla.
- **Solución:** un único `<h1>` por página (en el hero), secciones con `<h2>`, subsecciones `<h3>`. Los componentes reutilizables (cards, tabs, sliders) no deben usar `<h1>`; si se necesita el tamaño, usar clases, no la etiqueta.

**S-6. Contenido crítico renderizado solo en cliente (`client:only`)** — 115 usos en `src/components/**`
- Ejemplos: `AsphaltPlants/MainSection.astro`, `ProductSelector`, `CardSection`, `BallMills/FirstSectionBall.astro`, `ConeCrushers/FirstSectionCone.astro`, `JawCrushers/FirstSection.astro`, `MiniCrusher/FirstSectionMini.astro`, `IntegralCrushers/FirstSectionIntegral.astro`, `BeltConveyors/FirstSectionBelt.astro`, `Example/Section.tsx`.
- En páginas como BallMills, ConeCrushers o JawCrushers **todo** el cuerpo es una sola isla `client:only` → el HTML servido solo contiene navbar y footer (≈3–4 K caracteres de texto, casi todo del menú).
- **Por qué importa:** Google renderiza JS con retraso y no garantizado; otros buscadores y los previsualizadores sociales no lo hacen. Además empeora LCP (nada que pintar hasta hidratar) y CLS.
- **Solución:** cambiar a `client:visible` (o `client:idle`) para que Astro haga SSR del componente y lo hidrate después. `client:only` solo se justifica si el componente accede a `window` durante el render; en ese caso mover ese acceso a `useEffect`. Empezar por las secciones hero/"FirstSection".

**S-7. Enlaces internos rotos** — `src/components/DrumMixers/Contraflujo/Desamaq/SliderUltimaSeccion.astro:21,29,37`
- `/Hot-mix-storage-silos`, `/RAP-bins`, `/PowderAdditives` no existen (las rutas reales son `/HotMix`, `/RapBins`, `/PowderAd`).
- **Solución:** corregir las URLs. Añadir un link-check al flujo de build (ver §4).

**S-8. URLs y rutas**
- URLs en PascalCase (`/AsphaltPlant`): en Vercel las rutas son sensibles a mayúsculas, así que `/asphaltplant` → 404 (**requiere verificación en producción**). Typo en ruta pública: `/IntegralAphaltPlant`.
- `/Example` (`src/pages/Example.astro`) es una página de prueba publicada e indexable.
- Slug de noticia inválido: `id: "Nuevo: Menos combustible"` en `src/components/AboutPages/Newsroom/data/news.*:175` genera la URL `/news/Nuevo: Menos combustible` (espacio y dos puntos). Ver también B-1.
- Sin `trailingSlash` configurado → `/AsphaltPlant` y `/AsphaltPlant/` pueden servirse ambas (**requiere verificación en producción**).
- **Solución:** slugs en minúsculas con guiones (`nuevo-menos-combustible`); fijar `trailingSlash: "never"` (o `"always"`) + canonical; eliminar o poner `noindex` a `/Example`. Cambiar las rutas a minúsculas es un cambio de mayor esfuerzo: si se hace, añadir redirecciones 301 en `vercel.json` desde las URLs antiguas.

**S-9. Internacionalización simulada** — `src/components/NavbarComp/LenguageSelector.astro`
- ES y EN apuntan ambos a `/`; la detección de idioma usa `window` dentro del frontmatter (que se ejecuta en build, donde `window` no existe), por lo que siempre resuelve "es".
- **Solución:** si no hay versión en inglés, retirar el selector. Si la hay en otro dominio (p. ej. triasous.com), enlazarlo y declarar `<link rel="alternate" hreflang="es-MX" …>` / `hreflang="en-US"` / `x-default` en ambos sitios.

**S-10. Sin datos estructurados**
- **Solución:** JSON-LD en el Layout (`Organization` con `logo`, `sameAs` a LinkedIn/Instagram/Facebook, `contactPoint`), `LocalBusiness`/`PostalAddress` en `/Contact`, `Product` en cada página de equipo (nombre, descripción, imagen, `brand`), `NewsArticle` en `news/[id].astro` (`headline`, `datePublished`, `image`) y `BreadcrumbList` en las páginas anidadas (`/TamborMezcla/...`, `/Casetas/...`).

**S-11. Textos alternativos** — varios
- 6 `<img>` sin atributo `alt` en `DrumMixers/BolsasSeccion.astro`, `DrumMixers/Contraflujo/Plus/BolsasSeccion.astro`, `DrumMixers/Contraflujo/Desamaq/BolsasSeccion.astro`.
- 161 `alt=""` en código; muchos son iconos decorativos (correcto), pero p. ej. `AsphaltPlants/CardSection.tsx:128` (`<img src={item.img.src} alt="">`) acompaña contenido informativo. En `dist/`, AsphaltPlantVideos tiene 18 `alt=""`, IncorporadoresHule 8.
- Los `alt` existentes están en inglés genérico ("Asphalt Plant", "Custom design equipment") en un sitio en español.
- **Solución:** `alt` descriptivo en español para imágenes de producto ("Planta de asfalto móvil TRIASO de 120 t/h"), `alt=""` solo para decorativas.

---

### 2.2 Performance

> Core Web Vitals (LCP, CLS, INP) reales: **requiere verificación en producción** (PageSpeed Insights / CrUX / pestaña Performance). Lo siguiente son estimaciones basadas en el código.

**P-1. Imágenes pesadas servidas sin optimizar (`.src` en React)** — 465 usos de `.src` en `src/components/**`
- Patrón: `import img from "…/foo.png"` + `<img src={img.src}>` en `.tsx`. `img.src` apunta al **archivo original**; Astro no lo redimensiona ni convierte a WebP/AVIF.
- Resultado medido en `dist/_astro`: **17 MB de PNG/JPG** sin transformar; los mayores: `obracivil2.png` 1.99 MB, `PlaFpPRO_VA.png` 1.97 MB, `PlaFpDes_TI_VA.png` 1.61 MB, `sedenaBG.jpg` 1.32 MB, `Bp_Pla_Cf_Plus_TM_VT.png` 0.86 MB. En `src/assets` hay 95 PNG que suman 157 MB (originales de 5–9 MB en `DrumMixers/**/Blueprint_*`).
- Archivos representativos: `DrumMixers/Paralelo/Plus/FPPlusPlanos.tsx`, `DrumMixers/Paralelo/Desamaq/PDPlanos.tsx`, `DrumMixers/Contraflujo/Plus/PlanosPlusCf.tsx`, `DrumMixers/Contraflujo/Desamaq/PlanosCf.tsx`, `AsphaltPlants/CardSection.tsx`, `AsphaltPlants/GallerySlider2.tsx`, `AboutPages/Manufacture/ManufactureGallery.tsx`.
- **Solución:** en el `.astro` padre, generar las variantes con `getImage()` de `astro:assets` y pasarlas como props a la isla:
  ```astro
  import { getImage } from "astro:assets";
  const blue = await getImage({ src: tolvaBlue, width: 1600, format: "webp" });
  <FPPlusPlanos client:visible blueSrc={blue.src} />
  ```
  o usar `<Image>`/`<Picture>` directamente en las partes estáticas. Para planos (líneas finas) probar WebP calidad 85–90 o AVIF; convertir los originales PNG de 5–9 MB antes de commitearlos.

**P-2. `<img>` sin dimensiones ni lazy loading** — 452 `<img>` crudos en código
- Solo 6 tienen `width`/`height` y 16 `loading`. En `dist/`: DrumMixers 42 imágenes sin `width`, Manufacture 40, AsphaltPlantVideos 36, HotMix 31, AboutUs 30, Expo 25.
- **Por qué importa:** sin dimensiones el navegador no reserva espacio → **CLS**; sin `loading="lazy"` se descargan todas al cargar la página.
- **Solución:** añadir `width`, `height` (o `aspect-ratio` en CSS), `loading="lazy"` y `decoding="async"` en todas las imágenes bajo el pliegue; `fetchpriority="high"` solo en la imagen LCP. Migrar las de `.astro` a `<Image>` (que lo hace automáticamente).

**P-3. `@react-pdf/renderer` en el bundle inicial (1.5 MB)** — `src/components/Calculadora/AnalisisInversion.tsx:10` · ✅ **Resuelto el 2026-09-28**
- **Corrección aplicada:** se quitaron los imports estáticos de `@react-pdf/renderer` e `InversionPDF`; `handleDownloadPdf` los carga con `Promise.all([import('@react-pdf/renderer'), import('./InversionPDF')])` al pulsar el botón. Mientras se genera, el botón muestra el estado deshabilitado existente ("Loading PDF...") para evitar clics dobles. También se simplificó `pdf([]) + updateContainer(doc)` a `pdf(<InversionPDF …/>).toBlob()`, lo que eliminó un error de TypeScript (B-2 pasa de 34 a 33).
- **Resultado medido en el build:** `AnalisisInversion.*.js` bajó de **1,516 KB a 23 KB**; `react-pdf.browser.*.js` (1,490 KB) e `InversionPDF.*.js` (8 KB) quedan como chunks aparte que solo se descargan al generar el PDF.
- **Pendiente:** probar la descarga del PDF en el navegador (`/RapRecycled`); la página no se genera en el build local por B-1. Montar la calculadora con `client:visible` en lugar de `client:only` se hará junto con S-6.
- *Diagnóstico original:*
- `import { pdf } from '@react-pdf/renderer'` estático → `dist/_astro/AnalisisInversion.*.js` = **1,516 KB** (sin comprimir) se descarga al hidratar la calculadora (montada en `RAPRecycled/RAPReFirst.astro`), aunque el usuario nunca genere el PDF.
- **Solución:** import dinámico en el handler:
  ```ts
  const onDownload = async () => {
    const [{ pdf }, { default: InversionPDF }] = await Promise.all([
      import("@react-pdf/renderer"), import("./InversionPDF"),
    ]);
    const blob = await pdf(<InversionPDF {...data} />).toBlob();
  };
  ```
  y montar la calculadora con `client:visible`.

**P-4. Scripts inline duplicados en cada página (~60 KB/página)** — `src/components/NavbarComp/MobileMenuItem.astro:55`, `MobileSubmenuWrapper.astro:29`
- `<script is:inline>` dentro de un componente que se renderiza por cada ítem del menú → la función `initSubmenuToggles` (988 bytes) aparece **~60 veces** en el HTML de cada página. Scripts inline totales ≈ 69 KB de los ~135 KB del HTML base.
- **Solución:** mover el script a `MobileMenu.astro` como `<script>` normal (sin `is:inline`, Astro lo deduplica y lo empaqueta) usando delegación de eventos sobre el contenedor del menú.

**P-5. Bundles JS grandes por componente de planos** — `dist/_astro`
- `DrumMixPlanos` 290 KB, `FPProPlanos` 201 KB, `PlanosPlusCf` 184 KB, `FPPlusPlanos` 174 KB, `BinPlanosSection` 158 KB, `BHPlanos` 124 KB, `PlanosCf` 120 KB, `PDPlanos` 111 KB. JS por página medido: DrumMixers 482 KB, BinUnits 362 KB, AsphaltPlant 337 KB. El tamaño sugiere datos/markup embebidos en JS.
- **Solución:** revisar si esos componentes embeben SVG/datos grandes que podrían ser `.astro` estático con un script pequeño para las pestañas; consolidar los ~8 componentes `*Planos*.tsx` en uno parametrizado (ya comparten patrón); usar `client:visible` para que carguen al hacer scroll.

**P-6. Vídeos** — `public/Videos/`
- Hero de la home (`LandinPage/MainSection.astro:53`): `<video autoplay preload="none">` con solo `HeroVideo.webm` (3.3 MB), sin fuente MP4 (Safari antiguo) ni `poster`. La imagen de fondo `/Gallery/customdes.webp` está en `public/` (sin `srcset`, un único tamaño para móvil y escritorio).
- `Stackscroll*.tsx` (FuelPreHeaters, Incorporadores, PowderAd) usan `autoPlay` sin `preload` ni `poster`. `CMVideo.webm` pesa 11.7 MB.
- `global.css`: `video { will-change: transform; transform: translate3d(0,0,0) }` fuerza una capa GPU por cada vídeo de la página.
- **Solución:** `poster` + `preload="none"` + reproducción con `IntersectionObserver` (ya existe `unitComponents/SmartVideo.tsx`, reutilizarlo); recomprimir a ≤2–3 MB (VP9/AV1, 720p para fondos); servir la imagen LCP con `<Image>`/`<Picture>` y `widths`; eliminar la regla global de `will-change`.

**P-7. Peso de `public/` y assets sin referencia**
- `public/` = 309 MB. **Ningún archivo de `public/Videos/Mp4/` (21 archivos, ≈150 MB) está referenciado** en `src/`, ni 9 `.webm` (incluido `landingVideo2.webm`, 50 MB). Se despliegan igualmente y aumentan tiempo de build/deploy.
- Posters importados desde `public/` (`import poster from "../../../public/Videos/Webm/Posters/…"` en `BagHouses/BHImgSelector.astro`, `ColdMix/CMIntroSection.astro`, `DrumMixers/**/HotspotSection.astro`) → el archivo se sirve dos veces (copia de `public/` + versión procesada).
- **Solución:** eliminar o archivar fuera del repo los vídeos no usados (confirmar primero con el equipo); mover los posters a `src/assets/`.

**P-8. CSS y fuentes**
- CSS global `AboutUs.*.css` = 118 KB sin comprimir, compartido por todas las páginas; un único `<link rel="stylesheet">` bloqueante (aceptable). Revisar clases arbitrarias no usadas si crece más.
- Fuentes: solo Helvetica/Arial del sistema → sin coste de webfonts (**positivo**). La clase `font-display` usada en `AboutPages/AboutUs/timelineBar.tsx` y `timelineContent.tsx` no está definida en `tailwind.config.mjs` (no tiene efecto).
- Banderas del selector de idioma: `mxIcon` 506×505 px y `usaIcon` 225×225 mostradas a 16 px (`w-4`) → pasar `width={32}` a `<Image>`.

**P-9. Compresión, caché, CDN** — **requiere verificación en producción**
- Vercel sirve por defecto con CDN, Brotli/gzip y `cache-control: public, max-age=31536000, immutable` para `/_astro/*` (hasheados). Los archivos de `public/` (vídeos, `Gallery/`) **no** tienen hash, por lo que Vercel los sirve con caché corta por defecto. Verificar con `curl -I` y, si procede, añadir en `vercel.json` `headers` con `max-age` largo para `/Videos/(.*)` y `/Gallery/(.*)`.

---

### 2.3 Accesibilidad (aprox. WCAG 2.1 AA)

**A-1. Menú de escritorio no operable con teclado** — `src/components/NavbarComp/LinkNavbarItem.astro`
- Los submenús se muestran solo con `.nav-item:hover > .submenu` (visibility: hidden). Con Tab, el foco entra en enlaces invisibles; no hay `aria-expanded` ni `aria-haspopup`. Incumple 2.1.1 (Teclado) y 2.4.7 (Foco visible).
- **Solución:** añadir `.nav-item:focus-within > .submenu { opacity:1; visibility:visible }`, un `<button aria-expanded>` para desplegar, cierre con `Esc`, y envolver la barra en `<header>` + `<nav aria-label="Principal">`.

**A-2. Contraste insuficiente** — `src/styles/global.css` (`--gris-textos: #727272`)
- `#727272` sobre el fondo `#f4f5f6` (`--bg-main`) ≈ **4.4:1** (< 4.5:1 para texto normal). Se usa como `text-grisP` en párrafos (p. ej. `ContactPage/FormSection.astro`). En el footer (`bg-[#111827]`), `hover:text-gray-400` es aceptable, pero verificar textos `text-gray-500` si los hay.
- **Solución:** oscurecer `--gris-textos` a `#6b6b6b` o menos (≥4.6:1). Verificar el resto de combinaciones con axe/Lighthouse (**requiere verificación en navegador**).

**A-3. Indicadores de foco eliminados** — 53 `focus:outline-none` en `src/components/**`
- En varios casos se sustituye por `focus:ring-2`, pero no en todos (p. ej. `AsphaltPlants/CasetaSection.astro` ×6, `Burners/BTabSection.astro` ×3, `Calculadora/CostosFijos.tsx` ×3).
- **Solución:** usar `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueMain` como patrón único; añadir un "Saltar al contenido" (`<a href="#main" class="sr-only focus:not-sr-only">`) en el Layout y `id="main"` al `<main>`.

**A-4. Movimiento sin respetar `prefers-reduced-motion`**
- Solo `ReliefPage/*`, `TipsAsphalt/ConsejosGuide.astro`, `CookieBanner.astro` y parte de `global.css` lo respetan. Las animaciones GSAP de `components/lib` y los vídeos autoplay del resto no. Incumple 2.3.3 (AAA) y afecta a usuarios con trastornos vestibulares; los vídeos autoplay en bucle > 5 s sin control de pausa incumplen **2.2.2 (AA)**.
- **Solución:** en la utilidad de animación de `components/lib`, salir temprano si `matchMedia('(prefers-reduced-motion: reduce)').matches`; en vídeos, no hacer autoplay en ese caso y ofrecer botón de pausa.

**A-5. Enlaces externos y footer** — `src/components/Main/Footer.astro`
- `target="_blank"` sin `rel="noopener noreferrer"` ni aviso de "se abre en nueva pestaña" (WhatsApp, LinkedIn, Instagram, Facebook).
- El SVG de WhatsApp incluye `<title>whatsapp</title>` junto al texto "WhatsApp" → lectura duplicada; añadir `aria-hidden="true"` al SVG.

**A-6. Elementos semánticos y ARIA**
- Positivo: 330 `aria-label`, tabs con `role="tablist"/"tab"/"tabpanel"`, iframes con `title`, inputs de la calculadora con `<label>` envolvente.
- Mejorable: `role="tabpanel"` solo 5 vs 28 `role="tab"` (paneles sin rol ni `aria-labelledby`); un solo `aria-live` (los resultados de la calculadora deberían anunciarse con `aria-live="polite"`); `<head class="font-sans">` (atributo sin efecto en `<head>`).

---

### 2.4 Buenas prácticas, seguridad y mantenimiento

**B-1. El build falla (Windows)** — `src/components/AboutPages/Newsroom/data/news.*:175`, `src/pages/news/[id].astro`
- `npm run build` aborta con `ENOENT: mkdir 'dist\news\Nuevo: Menos combustible'` (los `:` no son válidos en rutas de Windows). Las páginas posteriores (Newsroom, OilHeaters, PowderAd, RapBins, Relief, Spare, TamborMezcla/*, index…) no se generan localmente; por eso el `dist/` previo estaba incompleto. En Vercel (Linux) probablemente compila, pero genera una URL con espacio y dos puntos.
- **Solución:** cambiar el `id` a un slug (`nuevo-menos-combustible`) y, a futuro, generar slugs con una función `slugify` en `getStaticPaths`.

**B-2. 34 errores de TypeScript** (33 tras la corrección de P-3) (`npm run astro check`)
- Principalmente en `Incorporadores/SeccionAnimacion.astro` (9), `BinUnits/BinGallery.astro` (8), `RAPRecycled/RBDropdown2.astro` (6), `AsphaltPlants/ProductSelector.tsx` (2) y uno en `Calculadora/AnalisisInversion.tsx`, `Calculadora/ValorPlanta.tsx`, `Burners/BurnerOdometer.tsx`, `DrumMixers/**/HotspotSection.astro`.
- Tipos: `'track'/'slider' is possibly 'null'`, `offsetWidth does not exist on type 'Element'`, `string | null` no asignable, tipos `CardData[]` incompatibles.
- **Por qué importa:** son posibles `TypeError` en tiempo de ejecución (consola) si el elemento no existe, y el proyecto declara `astro check` como su única red de seguridad.
- **Solución:** `querySelector<HTMLElement>(…)` + guardas `if (!track) return;`.

**B-3. Dependencias vulnerables** (`npm audit --omit=dev`: 18 — 3 críticas, 12 altas, 1 moderada, 2 bajas)
- Críticas: `astro <=7.2.7` (X-Forwarded-Host reflejado), `swiper 6.5.1–12.1.1` (prototype pollution), `tar`. Altas: `vite`, `rollup`, `sharp` (libvips), `postcss`, `devalue`, `h3`, `picomatch`, etc. Como el sitio es estático, la mayoría afectan al entorno de desarrollo/build, no a visitantes; **swiper** sí se ejecuta en el navegador.
- **Solución:** `npm audit fix`; actualizar dentro del mayor: `astro 5.9.3 → 5.18.x`, `swiper 12.1.1 → 12.2.0`, `@astrojs/react 4.3 → 4.4`, `@react-pdf/renderer 4.3 → 4.9`, `react/react-dom 19.1 → 19.3`, `gsap 3.13 → 3.15`. Evaluar después Astro 7 por separado.

**B-4. Dependencias sin uso / conflictivas** — `package.json`
- `keen-slider`, `iconoir` y `@tailwindcss/vite` (Tailwind **v4**) no se importan en ningún archivo; el proyecto usa Tailwind **v3** vía `@astrojs/tailwind`. `@types/react*` están en `dependencies` en lugar de `devDependencies`.
- **Solución:** `npm uninstall keen-slider iconoir @tailwindcss/vite` y mover los `@types` a dev.

**B-5. Cabeceras de seguridad** — **requiere verificación en producción**
- No hay `vercel.json`, por lo que no se configuran CSP, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy` ni `X-Content-Type-Options`. Vercel añade HSTS en sus dominios por defecto.
- **Solución propuesta** (`vercel.json`, ajustar CSP a los orígenes reales: Zoho Forms, Google Maps, YouTube si se usa en las galerías de vídeo):
  ```json
  { "headers": [{ "source": "/(.*)", "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
    { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
    { "key": "Content-Security-Policy", "value": "frame-ancestors 'self'; frame-src https://forms.zohopublic.com https://www.google.com https://www.youtube-nocookie.com" }
  ]}]}
  ```
- Nota: la URL facilitada (`triaso-dps0wbyls-…vercel.app`) es un *deployment* de Vercel; estas URLs suelen servirse con `X-Robots-Tag: noindex` y no representan el dominio de producción final. Repetir la verificación sobre el dominio definitivo.

**B-6. Datos de contacto contradictorios** — `src/components/Main/Footer.astro:110–125`
- El enlace `href=" tel:+12486134885"` (con espacio inicial) marca un número de EE. UU., pero el texto visible es **+52 (618)-109-7672**.
- El enlace `mailto:sales@triasous.com` muestra el texto **triaso.informes@gmail.com**; en `/Contact` se usa `mailto:triaso.informes@gmail.com`.
- **Pendiente (anotado 2026-09-28):** las páginas legales (`src/components/Legal/Privacy.astro`, en "Derechos ARCO" y "Contacto", y `src/components/Legal/Terms.astro`, en "Contacto") también indican `sales@triasous.com`. Se dejaron así a propósito; cuando se decida el correo oficial, actualizarlo en footer, `/Contact` y ambas páginas legales.
- **Por qué importa:** el usuario llama/escribe a un destino distinto del que ve; además, datos NAP inconsistentes perjudican el SEO local. **Confirmar con el negocio** cuál es el dato correcto antes de corregir.

**B-7. Página 404 y errores**
- No existe `src/pages/404.astro`; Vercel muestra su 404 genérico sin navegación ni marca.
- **Solución:** crear `404.astro` con el Layout, mensaje en español, enlaces a la home y a productos, y `noindex`.

**B-8. HTML sin sanitizar** — `news/[id].astro:31` (`set:html={item.content}`), `DrumMixers/QuemadorSlider.tsx:186`, `IntegralAsphalt/SlidersCarrusel.tsx:168` (`dangerouslySetInnerHTML`)
- Riesgo **bajo** hoy porque el contenido proviene de archivos locales. Si en el futuro las noticias vienen de un CMS, sanitizar (p. ej. `sanitize-html`) antes de renderizar.

**B-9. Consentimiento de cookies sin analytics real** — `src/components/AboutPages/Banner/Trackedscripts.tsx`
- El único script "rastreado" es un `console.log('Cargo de script')` de prueba; no hay analytics real ni medición de CWV de campo.
- **Solución:** sustituir por la herramienta de analytics elegida (p. ej. Vercel Web Analytics/Speed Insights o GA4) respetando el consentimiento; eliminar el `console.log`.

**B-10. Consistencia de código**
- Colores hardcodeados contra la convención del proyecto: `bg-[#111827]` y `bg-[#075e54]` en el footer, colores de cards en `LandingPage.astro` (`#595959`, `#00840d`). Clase inexistente `max-w-screen` en `Main/Navbar.astro:10`.
- Error de ortografía en nombres de componente (`LenguageSelector`, `LandinPage/`) — cosmético.
- Responsive: viewport correcto y clases mobile-first en general; revisar manualmente en 360 px las secciones con `min-h-[720px]` (iframe de contacto) (**requiere verificación en navegador**).

---

## 3. Tabla de priorización

| # | Tarea | Categoría | Impacto | Esfuerzo | Prioridad | Archivo(s) afectado(s) |
|---|---|---|---|---|---|---|
| 1 | Corregir slug de noticia que rompe el build | Buenas prácticas | Alto | Bajo | 1 | `AboutPages/Newsroom/data/news.*`, `pages/news/[id].astro` |
| 2 | Verificar y unificar teléfono/email del footer | Buenas prácticas / SEO local | Alto | Bajo | 1 | `Main/Footer.astro` |
| 3 | ✅ **Resuelto 2026-09-28** — `lang="es-MX"` | SEO / A11y | Alto | Bajo | 1 | `layouts/Layout.astro` |
| 4 | Añadir `site`, `robots.txt` y `@astrojs/sitemap` | SEO | Alto | Bajo | 1 | `astro.config.mjs`, `public/robots.txt` |
| 5 | Títulos y descripciones únicos por página (props obligatorios) | SEO | Alto | Bajo | 1 | `layouts/Layout.astro`, `pages/*.astro` |
| 6 | Canonical + Open Graph + Twitter Card en Layout | SEO | Alto | Bajo | 1 | `layouts/Layout.astro`, `public/og-default.jpg` |
| 7 | Corregir 3 enlaces internos rotos | SEO | Medio | Bajo | 1 | `DrumMixers/Contraflujo/Desamaq/SliderUltimaSeccion.astro` |
| 8 | ✅ **Resuelto 2026-09-28** — Import dinámico de `@react-pdf/renderer` (−1.5 MB) | Performance | Alto | Bajo | 1 | `Calculadora/AnalisisInversion.tsx` |
| 9 | Deduplicar scripts inline del menú móvil (−60 KB/página) | Performance | Medio | Bajo | 2 | `NavbarComp/MobileMenuItem.astro`, `MobileSubmenuWrapper.astro`, `MobileMenu.astro` |
| 10 | `npm audit fix` + actualizar astro/swiper en el mismo mayor | Seguridad | Alto | Bajo | 2 | `package.json`, `package-lock.json` |
| 11 | Submenú accesible por teclado (`:focus-within`, `aria-expanded`, Esc) | A11y | Alto | Bajo | 2 | `NavbarComp/LinkNavbarItem.astro` |
| 12 | Oscurecer `--gris-textos` a ≥4.5:1 | A11y | Medio | Bajo | 2 | `styles/global.css` |
| 13 | Crear `404.astro` | Buenas prácticas | Medio | Bajo | 2 | `pages/404.astro` |
| 14 | Eliminar/`noindex` `/Example`; quitar selector de idioma falso | SEO | Medio | Bajo | 2 | `pages/Example.astro`, `NavbarComp/LenguageSelector.astro`, `Main/Navbar.astro` |
| 15 | Cabeceras de seguridad y caché en `vercel.json` | Seguridad / Performance | Medio | Bajo | 2 | `vercel.json` (nuevo) |
| 16 | `rel="noopener noreferrer"` + `aria-hidden` en SVG del footer; skip-link | A11y | Bajo | Bajo | 3 | `Main/Footer.astro`, `layouts/Layout.astro` |
| 17 | Desinstalar deps sin uso (`keen-slider`, `iconoir`, `@tailwindcss/vite`) | Buenas prácticas | Bajo | Bajo | 3 | `package.json` |
| 18 | ✅ **Resuelto 2026-09-28** — Un solo `<h1>` por página; resto a `<h2>/<h3>` | SEO / A11y | Alto | Medio | 2 | `LandingPage.astro`, `LandinPage/MainSection.astro`, componentes de Manufacture, DrumMixers, HotMix, ColdMix, Expo, BinUnits, AsphaltStorage… |
| 19 | Pasar imágenes `.src` de `.tsx` por `getImage()`/`<Image>` (WebP, anchos) | Performance | Alto | Medio | 2 | `DrumMixers/**/*Planos*.tsx`, `AsphaltPlants/CardSection.tsx`, `GallerySlider2.tsx`, `Manufacture/ManufactureGallery.tsx`… |
| 20 | `width/height` + `loading="lazy"` en `<img>` crudos | Performance (CLS) | Alto | Medio | 2 | 452 `<img>` en `src/components/**` |
| 21 | Cambiar `client:only` → `client:visible` en secciones de contenido/hero | SEO / Performance | Alto | Medio | 2 | `*/FirstSection*.astro`, `AsphaltPlants/MainSection.astro`, `ProductSelector.tsx`, `CardSection.tsx` |
| 22 | Corregir 34 errores de `astro check` | Buenas prácticas | Medio | Medio | 3 | `Incorporadores/SeccionAnimacion.astro`, `BinUnits/BinGallery.astro`, `RAPRecycled/RBDropdown2.astro`… |
| 23 | JSON-LD (Organization, LocalBusiness, Product, NewsArticle, Breadcrumb) | SEO | Medio | Medio | 3 | `layouts/Layout.astro`, `pages/Contact.astro`, páginas de producto, `news/[id].astro` |
| 24 | Vídeos: poster, IntersectionObserver (`SmartVideo`), recompresión, quitar `will-change` global | Performance | Medio | Medio | 3 | `LandinPage/MainSection.astro`, `*/Stackscroll*.tsx`, `styles/global.css` |
| 25 | `prefers-reduced-motion` en GSAP y vídeos autoplay; botón de pausa | A11y | Medio | Medio | 3 | `components/lib/*`, componentes con vídeo |
| 26 | `alt` descriptivos en español; completar los 6 faltantes | SEO / A11y | Medio | Medio | 3 | `DrumMixers/**/BolsasSeccion.astro`, `CardSection.tsx`, galerías |
| 27 | Eliminar vídeos/assets sin referencia (~200 MB) y mover posters a `src/assets` | Performance / Mantenimiento | Medio | Medio | 3 | `public/Videos/Mp4/*`, `public/Videos/Webm/landingVideo2.webm`… |
| 28 | Consolidar componentes `*Planos*.tsx` y reducir su JS | Performance | Medio | Alto | 4 | `DrumMixers/**`, `BinUnits/BinPlanosSection.tsx`, `BagHouses/BHPlanos.tsx` |
| 29 | Analytics real con consentimiento + medición de CWV de campo | Buenas prácticas | Medio | Medio | 4 | `AboutPages/Banner/Trackedscripts.tsx` |
| 30 | Normalizar URLs a minúsculas + redirecciones 301 + `trailingSlash` | SEO | Medio | Alto | 4 | `src/pages/**`, `vercel.json`, todos los `href` |
| 31 | i18n real (versión EN + hreflang) si se requiere | SEO | Bajo | Alto | 5 | `astro.config.mjs` (i18n), `src/pages/en/**` |
| 32 | Sustituir hex hardcodeados por variables CSS | Mantenimiento | Bajo | Bajo | 5 | `Main/Footer.astro`, `LandingPage.astro` |

---

## 4. Plan de acción sugerido

### Fase 1 — Corto plazo (1–2 semanas): quick wins
- Desbloquear el build (#1) y confirmar/corregir datos de contacto (#2).
- Base SEO en el Layout: ~~`lang`~~ (✅ hecho 2026-09-28), canonical, OG, títulos/descripciones por página, `robots.txt`, sitemap, enlaces rotos, `/Example` (#3–#7, #14).
- Performance inmediata: ~~import dinámico de react-pdf~~ (✅ hecho 2026-09-28), deduplicar scripts del menú (#8, #9).
- Seguridad: `npm audit fix` y actualizaciones menores; `vercel.json` con cabeceras (#10, #15).
- Accesibilidad: menú por teclado, contraste, 404, footer (#11–#13, #16, #17).
- **Verificar en producción** (sobre el dominio final): `curl -I` de `/`, `/robots.txt`, `/sitemap-index.xml`, una ruta inexistente, `/asphaltplant` vs `/AsphaltPlant`, un `.webm` y un `.js` de `/_astro/`; ejecutar PageSpeed Insights (móvil) en `/`, `/AsphaltPlant` y `/DrumMixers` para tener la línea base de LCP/CLS/INP.

### Fase 2 — Mediano plazo (1–2 meses)
- ~~Jerarquía de encabezados (#18).~~ ✅ Hecho el 2026-09-28 (falta revisión visual en navegador).
- Optimización de imágenes y CLS (#19, #20) empezando por DrumMixers, Manufacture y HotMix (las de más imágenes).
- SSR del contenido con `client:visible` (#21), empezando por las páginas de trituradoras donde todo es `client:only`.
- Errores de TypeScript (#22), JSON-LD (#23), vídeos (#24), reduced-motion (#25), `alt` (#26), limpieza de assets (#27).
- Añadir al flujo de verificación del proyecto: `astro check` sin errores + `build` + un link-check sobre `dist/` y Lighthouse CI (`@lhci/cli`) con presupuestos (p. ej. JS ≤ 250 KB por página, LCP ≤ 2.5 s).

### Fase 3 — Largo plazo (trimestre)
- Refactor de los componentes de planos (#28).
- Analytics con consentimiento y monitoreo de CWV de campo (#29).
- Decisión sobre URLs en minúsculas con 301 (#30) e i18n real (#31).
- Evaluar la migración a Astro 7 / Tailwind 4 como proyecto separado, con verificación completa del sitio.
- Limpieza de consistencia (#32) y README.
