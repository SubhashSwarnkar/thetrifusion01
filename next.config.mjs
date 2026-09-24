/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.calendly.com" },
    ],
  },
  async redirects() {
    return [
      // Apex .in is the ONLY canonical host — permanent single-hop redirects
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination: "https://thetrifusion.in/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "thetrifusion.com" }],
        destination: "https://thetrifusion.in/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thetrifusion.com" }],
        destination: "https://thetrifusion.in/:path*",
        permanent: true,
      },
      // Collapse /project → /portfolio in one hop (also covers www after host rewrite)
      {
        source: "/project",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/project/:path*",
        destination: "/portfolio/:path*",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/solutions/online-store-development",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/services/ecommerce-development",
        destination: "/ecommerce-development",
        permanent: true,
      },
      // Retired 2024 archive posts → /blog (drop soft-200 noindex URLs)
      {
        source: "/blog/generative-ai-revolution",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/web3-decentralized-future",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/quantum-computing-leap",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/cybersecurity-zero-trust",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/rise-of-edge-computing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/green-tech-sustainable-coding",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/5g-6g-connectivity",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/metaverse-business-impact",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/rust-programming-rise",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/future-of-devops",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/fintech-embedded-finance",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/ethical-ai-challenges",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/cloud-native-security",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/low-code-no-code",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/biotech-crispr-software",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/autonomous-vehicles-status",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/smart-cities-iot",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/space-tech-commercial",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      type: "asset/resource",
    });
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
