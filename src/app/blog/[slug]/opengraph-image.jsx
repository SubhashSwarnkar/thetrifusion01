import { ImageResponse } from "next/og";
import { getBlogBySlug } from "data/blogData";

export const alt = "TheTriFusion Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// On-demand only — avoid generating 100+ PNG cards at build (Vercel OOM/timeout risk).
export const dynamic = "force-dynamic";

/** Deterministic accent colour from slug so each post card looks unique. */
function accentForSlug(slug = "") {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const hues = [222, 258, 280, 195, 340, 160, 30, 45];
  const hue = hues[hash % hues.length];
  return {
    from: `hsl(${hue} 55% 14%)`,
    mid: `hsl(${(hue + 28) % 360} 48% 22%)`,
    to: `hsl(${(hue + 55) % 360} 42% 28%)`,
    accent: `hsl(${hue} 80% 72%)`,
  };
}

export default async function OpenGraphImage({ params }) {
  const slug = params?.slug || "";
  const post = getBlogBySlug(slug);
  const title = post?.title || "TheTriFusion Blog";
  const category = post?.category || "Insights";
  const subtitle =
    post?.excerpt ||
    "Trends explainers, product notes & digital guides from TheTriFusion.";
  const colors = accentForSlug(slug);
  const titleSize = title.length > 72 ? 40 : title.length > 48 ? 48 : 56;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 60px",
          background: `linear-gradient(145deg, ${colors.from} 0%, ${colors.mid} 52%, ${colors.to} 100%)`,
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: colors.accent,
            fontWeight: 600,
          }}
        >
          <span>TheTriFusion Blog</span>
          <span
            style={{
              display: "flex",
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              color: "#e2e8f0",
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {String(category)}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#cbd5e1",
              maxWidth: 960,
              lineHeight: 1.4,
            }}
          >
            {subtitle.length > 160 ? `${subtitle.slice(0, 157)}…` : subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#94a3b8",
          }}
        >
          <span>thetrifusion.in/blog/{slug}</span>
          <span>Self-hosted · unique card</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
