/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.calendly.com" },
    ],
  },
  async rewrites() {
    return [
      // Extra blog urlsets when sitemap-blog.xml exceeds 1000 URLs.
      {
        source: "/sitemap-blog-:chunk(\\d+).xml",
        destination: "/internal-blog-sitemap/:chunk",
      },
    ];
  },
  async redirects() {
    return [
      // Apex .in is the ONLY canonical host. permanent:true is 308 in Next.js.
      // If www still returns 307 in production, change the Vercel Domains
      // "Redirect www to apex" setting — that hop runs before this config.
      // Explicit GSC-flagged money URLs first so www cannot self-canonicalize.
      {
        source: "/solutions/ecommerce-website-development",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination:
          "https://thetrifusion.in/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination: "https://thetrifusion.in/services/digital-marketing",
        permanent: true,
      },
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
        source: "/portfolio/atharv-narayan-wellness-website",
        destination: "/portfolio/atharv-narayan-dairy-logistics-website",
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
        source: "/services/web-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/discuss",
        destination: "/discuss-project",
        permanent: true,
      },
      {
        source: "/services/ecommerce-development",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/ecommerce-development",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      // Near-duplicate blog posts → one canonical each
      {
        source: "/blog/iphone-18-india-features-apps-businesses",
        destination: "/blog/iphone-18-india-price-launch-ios-apps-business",
        permanent: true,
      },
      {
        source: "/blog/iphone-18-apple-intelligence-business-apps-india",
        destination: "/blog/iphone-18-india-price-launch-ios-apps-business",
        permanent: true,
      },
      {
        source: "/blog/salesforce-koa-crm-reasoning-model-nvidia-nemotron-explained",
        destination:
          "/blog/salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch",
        permanent: true,
      },
      {
        source: "/blog/salesforce-nvidia-koa-vs-frontier-ai-labs",
        destination:
          "/blog/salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch",
        permanent: true,
      },
      {
        source: "/blog/nse-ipo-digital-presence-india-companies",
        destination: "/blog/ipo-ready-website-digital-presence-india",
        permanent: true,
      },
      {
        source: "/blog/fashion-d2c-ecommerce-website-cost-india",
        destination: "/blog/ecommerce-website-development-cost-india",
        permanent: true,
      },
      // Same service and intent as the /services twin. Keep in sync with
      // src/lib/solutionRedirects.js. City pages, ecommerce, MSP, the buyer
      // guide, and software-company-rajasthan stay as distinct landings.
      {
        source: "/solutions/android-app-development-company-jaipur",
        destination: "/services/android-app-development",
        permanent: true,
      },
      {
        source: "/solutions/web-development-company-jaipur",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/web-development-company-india",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/custom-software-development-company",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/solutions/crm-erp-software-development",
        destination: "/services/crm-erp-development",
        permanent: true,
      },
      {
        source: "/solutions/ui-ux-design-agency",
        destination: "/services/ui-ux-design",
        permanent: true,
      },
      {
        source: "/solutions/digital-marketing-agency",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/solutions/mobile-app-development-company",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/solutions/software-development-company-jaipur",
        destination: "/services/software-development",
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
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
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
