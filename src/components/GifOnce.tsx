'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders an animated GIF that plays once then freezes on its last visible frame.
 * The parent element must be `position: relative` with defined dimensions.
 *
 * How it works: after `gifDurationMs` the current frame is drawn onto a canvas,
 * the img.src is replaced with the resulting PNG data-URL, and the animation stops.
 *
 * Note: canvas snapshot requires the image to be same-origin (no CORS restriction).
 * The temporary Figma asset URL will silently fall back to continuous looping until
 * replaced with a same-origin asset.
 *
 * @param gifDurationMs - Duration of one full GIF loop in ms. Adjust to match the
 *                        actual GIF length (default: 4000ms).
 */
export default function GifOnce({
  src,
  alt,
  className = 'object-cover',
  gifDurationMs = 4000,
}: {
  src: string;
  alt: string;
  className?: string;
  gifDurationMs?: number;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const freeze = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        // Swapping src to a static PNG data-URL stops all animation
        img.src = canvas.toDataURL('image/png');
      } catch {
        // CORS-blocked image — silently keep playing until replaced with same-origin src
      }
    };

    const timer = setTimeout(freeze, gifDurationMs);
    return () => clearTimeout(timer);
  }, [src, gifDurationMs]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      crossOrigin="anonymous"
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
