"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-showcase.mp4";
const HERO_POSTER = "/images/Web.png";

export default function HeroVideo() {
  const wrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = wrapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {shouldLoad ? (
        <video
          className="relative z-10 w-full max-w-2xl rounded-2xl object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          width={1280}
          height={720}
          aria-label="TheTriFusion software development work showcase, filmed for our Jaipur studio"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_POSTER}
          alt="TheTriFusion software development work in Jaipur, Rajasthan"
          className="relative z-10 w-full max-w-2xl rounded-2xl object-cover"
          width={1280}
          height={720}
        />
      )}
    </div>
  );
}
