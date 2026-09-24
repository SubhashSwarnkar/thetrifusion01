"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-showcase.mp4";
const HERO_POSTER = "/images/Web.webp";
const HERO_POSTER_AVIF = "/images/Web.avif";

export default function HeroVideo() {
  const wrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Mobile keeps the poster only. The MP4 stays off the phone's network.
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const node = wrapRef.current;
    if (!node) return undefined;

    let fallbackTimer = 0;
    let idleId = 0;
    let intersecting = false;
    let armed = false;
    let loaded = false;

    const tryLoad = () => {
      if (loaded || !(intersecting && armed)) return;
      loaded = true;
      setShouldLoad(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        tryLoad();
        if (intersecting) observer.disconnect();
      },
      { rootMargin: "0px" }
    );
    observer.observe(node);

    const arm = () => {
      armed = true;
      tryLoad();
    };

    const armLater = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(arm, { timeout: 2500 });
      } else {
        arm();
      }
    };

    // Keep the 877KB MP4 off the LCP image's connection.
    fallbackTimer = window.setTimeout(armLater, 8000);
    const onInteract = () => {
      window.clearTimeout(fallbackTimer);
      armLater();
    };
    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("pointerdown", onInteract);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  const mediaClass =
    "absolute inset-0 h-full w-full rounded-2xl object-cover object-center";

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
    >
      {/* Poster is the homepage LCP. AVIF first, WebP if the browser needs it. */}
      <picture className="absolute inset-0">
        <source srcSet={HERO_POSTER_AVIF} type="image/avif" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_POSTER}
          alt="TheTriFusion software development work in Jaipur, Rajasthan"
          width={500}
          height={500}
          fetchPriority="high"
          className={mediaClass}
        />
      </picture>
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
      ) : null}
    </div>
  );
}
