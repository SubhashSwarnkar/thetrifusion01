import { ImageResponse } from "next/og";
import { getSeoLandingBySlug, seoLandingPages } from "data/seoLandingPages";

export const alt = "TheTriFusion solution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export default function OpenGraphImage({ params }) {
  const page = getSeoLandingBySlug(params.slug);
  const title = page?.h1 || "Digital solutions";
  const subtitle =
    page?.outcomeLine ||
    "Software, ecommerce, apps & marketing by TheTriFusion.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(145deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#a5b4fc",
            fontWeight: 600,
          }}
        >
          <span>TheTriFusion</span>
          <span>Solutions</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 48 ? 48 : 58,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#cbd5e1",
              maxWidth: 920,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
          www.thetrifusion.in/solutions/{params.slug}
        </div>
      </div>
    ),
    { ...size }
  );
}
