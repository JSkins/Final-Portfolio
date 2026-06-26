'use client';

import { useEffect, useRef } from 'react';

export default function VideoOnView({
  src,
  className = 'object-contain',
  muted = false,
  controls = true,
  loop = true,
}: {
  src: string;
  className?: string;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
