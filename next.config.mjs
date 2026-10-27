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
    // Blog sitemap chunks removed — blogs are 410 Gone from the live site.
    return [];
  },
  async redirects() {
    return [
      // Apex .in is the ONLY canonical host. permanent:true is 308 in Next.js.
      // If www still returns 307 in production, change the Vercel Domains
      // "Redirect www to apex" setting — that hop runs before this config.
      // Explicit GSC-flagged money URLs first so www cannot self-canonicalize.
      // One-hop www → apex+canonical path avoids GSC "Redirect error" chains.
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
        source: "/services/website-development",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination: "https://thetrifusion.in/services/website-development",
        permanent: true,
      },
      {
        source: "/services/mlm-crm-development",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination: "https://thetrifusion.in/services/mlm-crm-development",
        permanent: true,
      },
      {
        // GSC Redirect error: www hop + path hop. Land on the services URL.
        source: "/solutions/web-development-company-jaipur",
        has: [{ type: "host", value: "www.thetrifusion.in" }],
        destination: "https://thetrifusion.in/services/website-development",
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
      // Legacy ads landings → indexed /services twins (was 200 + noindex).
      {
        source: "/web-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/android-app-development",
        destination: "/services/android-app-development",
        permanent: true,
      },
      {
        source: "/ios-app-development",
        destination: "/services/ios-app-development",
        permanent: true,
      },
      {
        source: "/ai-development",
        destination: "/services/ai-development",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/services/graphic-design",
        permanent: true,
      },
      // Legacy hashed OG image URLs (route-group hash) → stable opengraph-image.
      {
        source: "/solutions/:slug/opengraph-image-:hash",
        destination: "/solutions/:slug/opengraph-image",
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
      // Same service and intent as the /services twin. Keep in sync with
      // src/lib/solutionRedirects.js. Jaipur HQ city pages, ecommerce, MSP,
      // the buyer guide, and software-company-rajasthan stay live.
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
      // Non-Jaipur city landings → matching service / ecommerce money page.
      // Keep in sync with src/lib/citySolutionRedirects.js.
      {
        source: "/solutions/website-development-company-delhi",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-mumbai",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-bangalore",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-jodhpur",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-bhilwara",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-udaipur",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-kota",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/website-development-company-ajmer",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/solutions/software-development-company-delhi",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/solutions/software-development-company-mumbai",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/solutions/software-development-company-bangalore",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/solutions/software-development-company-jodhpur",
        destination: "/services/software-development",
        permanent: true,
      },
      {
        source: "/solutions/mobile-app-development-company-delhi",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/solutions/mobile-app-development-company-mumbai",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/solutions/mobile-app-development-company-bangalore",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/solutions/mobile-app-development-company-jodhpur",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/solutions/ecommerce-website-development-delhi",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/solutions/ecommerce-website-development-mumbai",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/solutions/ecommerce-website-development-bangalore",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/solutions/ecommerce-website-development-jodhpur",
        destination: "/solutions/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/solutions/digital-marketing-company-delhi",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/solutions/digital-marketing-company-mumbai",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/solutions/digital-marketing-company-bangalore",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/solutions/digital-marketing-company-jodhpur",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/solutions/fintech-app-development-delhi",
        destination: "/services/fintech-app-development",
        permanent: true,
      },
      {
        source: "/solutions/fintech-app-development-mumbai",
        destination: "/services/fintech-app-development",
        permanent: true,
      },
      {
        source: "/solutions/fintech-app-development-bangalore",
        destination: "/services/fintech-app-development",
        permanent: true,
      },
      {
        source: "/solutions/fintech-app-development-jodhpur",
        destination: "/services/fintech-app-development",
        permanent: true,
      },
      // All /blog and /blog-1 URLs return 410 via middleware (not 301).
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
