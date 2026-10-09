// Optimización de imágenes en build para usarlas como URL (islas React o atributos `src`).
// Solo debe importarse desde frontmatter de .astro: getImage corre en el servidor/build,
// nunca en el navegador. Para islas `client:*`, calcular aquí la URL y pasarla como prop.
import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/** Convierte a WebP limitando el ancho (nunca amplía). Devuelve la URL final. */
export async function webpUrl(
  src: ImageMetadata,
  maxWidth = 1200,
  quality = 85,
): Promise<string> {
  const img = await getImage({
    src,
    format: "webp",
    width: Math.min(src.width, maxWidth),
    quality,
  });
  return img.src;
}

/** Igual que webpUrl, para un objeto { nombre: imagen } → { nombre: url }. */
export async function webpUrls<K extends string>(
  images: Record<K, ImageMetadata>,
  maxWidth = 1200,
  quality = 85,
): Promise<Record<K, string>> {
  const entries = await Promise.all(
    (Object.entries(images) as [K, ImageMetadata][]).map(
      async ([key, src]) => [key, await webpUrl(src, maxWidth, quality)] as const,
    ),
  );
  return Object.fromEntries(entries) as Record<K, string>;
}
