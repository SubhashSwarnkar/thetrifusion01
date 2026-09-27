import { ImageResponse } from "next/og";

export const alt = "TheTriFusion Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const PALETTES = [
  { from: "#0f172a", mid: "#1e1b4b", to: "#312e81", accent: "#a5b4fc" },
  { from: "#042f2e", mid: "#134e4a", to: "#0f766e", accent: "#5eead4" },
  { from: "#1c1917", mid: "#7c2d12", to: "#9a3412", accent: "#fdba74" },
  { from: "#0c1a2e", mid: "#1e3a5f", to: "#1d4ed8", accent: "#93c5fd" },
  { from: "#1a0a1e", mid: "#4a044e", to: "#86198f", accent: "#f0abfc" },
  { from: "#052e16", mid: "#14532d", to: "#166534", accent: "#86efac" },
  { from: "#1a1008", mid: "#78350f", to: "#a16207", accent: "#fde68a" },
  { from: "#1e1033", mid: "#4c1d95", to: "#6d28d9", accent: "#c4b5fd" },
];

function paletteForSlug(slug = "") {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return PALETTES[hash % PALETTES.length];
}

function titleFromSlug(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function OpenGraphImage({ params }) {
  const slug = params?.slug || "";
  const title = titleFromSlug(slug) || "TheTriFusion Blog";
  const colors = paletteForSlug(slug);
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
            Editorial
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
            Unique self-hosted card · thetrifusion.in
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
