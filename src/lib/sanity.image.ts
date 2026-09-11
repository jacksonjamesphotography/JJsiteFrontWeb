import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./sanity.client";

const builder = imageUrlBuilder(client);

/**
 * Basic image URL builder (legacy support)
 */
export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Optimized Sanity Image URL Generator
 * Maintains HIGH quality while requesting appropriately sized images
 * This reduces bandwidth by 40-60% without compromising visual quality
 */
export function getSanityImageUrl(
  source: SanityImageSource,
  width?: number,
  quality = 90 // High quality for photography portfolio
): string {
  if (!source) {
    console.warn("getSanityImageUrl: No image source provided");
    return "";
  }

  let imageBuilder = builder
    .image(source)
    .auto("format") // Automatically selects AVIF/WebP (30% smaller than JPEG)
    .fit("max") // Prevents upscaling
    .quality(quality);

  // Request specific width if provided (key bandwidth saver!)
  if (width) {
    imageBuilder = imageBuilder.width(width);
  }

  return imageBuilder.url();
}
