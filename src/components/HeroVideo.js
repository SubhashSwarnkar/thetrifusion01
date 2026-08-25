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

  const mediaClass =
    "w-full h-full rounded-2xl object-cover object-center shadow-xl";

  return (
    <div
      ref={wrapRef}
      className="w-full aspect-[16/10] overflow-hidden rounded-2xl bg-gray-900"
    >
      {shouldLoad ? (
        <video
          className={mediaClass}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          width={1280}
          height={800}
          aria-label="TheTriFusion software development work showcase, filmed for our Jaipur studio"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_POSTER}
          alt="TheTriFusion software development work in Jaipur, Rajasthan"
          className={mediaClass}
          width={1280}
          height={800}
        />
      )}
    </div>
  );
}
