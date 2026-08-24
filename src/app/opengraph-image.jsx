import { ImageResponse } from "next/og";

export const alt = "TheTriFusion — IT Solutions, Websites & Mobile Apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #312e81 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          TheTriFusion
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            IT Solutions, Websites & Mobile Apps
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            Software, ecommerce, apps & digital marketing from Jaipur,
            Rajasthan.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
          www.thetrifusion.in
        </div>
      </div>
    ),
    { ...size }
  );
}
