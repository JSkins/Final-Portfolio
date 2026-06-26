'use client';

import { useEffect, useRef } from 'react';

export default function PlayOnceVideo({
  src,
  poster,
  muted = true,
  controls = false,
  className = 'w-full h-full object-cover',
}: {
  src: string;
  poster?: string;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted={muted}
      controls={controls}
      playsInline
      className={className}
    />
  );
}
