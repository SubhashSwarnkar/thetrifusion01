/**
 * AdSense display slots — ONLY used on /blog/[slug] article pages.
 *
 * Jab AdSense approve kare aur ad unit de:
 * 1) AdSense → Ads → By ad unit → Display ads → Create
 * 2) Code me `data-ad-slot="XXXXXXXXXX"` wali number yahan paste karo
 * 3) Save → mujhe bolo "push" (ya khud commit)
 *
 * Example:
 *   top: "1234567890",
 *   sidebar: "2345678901",
 *   bottom: "3456789012",
 *
 * Empty string = woh unit abhi nahi dikhega (Auto ads blog pe phir bhi chal sakti hai).
 */
export const adsenseSlots = {
  /** In-article / top of post (below title) */
  top: "",
  /** Desktop right sticky sidebar (+ mobile below article) */
  sidebar: "",
  /** After article body, before CTA */
  bottom: "",
};
