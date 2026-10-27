/**
 * Valid /portfolio/[slug] ids. Keep in sync with json/landingPageData Portfolios.
 * Middleware uses this (edge-safe, no image imports) so unknown/junk slugs
 * 308 to https://thetrifusion.in/portfolio in one hop.
 */
export const PORTFOLIO_SLUGS = new Set([
  "plugone-ev-charging-platform",
  "connect-dairy-supply-chain",
  "atharv-narayan-dairy-logistics-website",
  "dailyconcepts-ecommerce-pos",
  "meditative-yoga-platform",
  "pet-sitting-services-website",
  "podcast-landing-page",
  "resto-restaurant-website",
  "alime-photography-website",
  "applab-mobile-app",
  "dentista-dental-clinic",
  "travelix-travel-booking-website",
  "dentacare-dental-clinic",
  "macro-photography-website",
  "shopnova-ecommerce-platform",
  "payswift-fintech-payment-gateway",
  "fittrack-ios-android-fitness-app",
  "dataforge-dsa-visualizer",
  "realnest-real-estate-app",
  "eduspark-edtech-learning-platform",
  "cryptovault-crypto-tracker-app",
  "medconnect-telemedicine-app",
  "clouddesk-saas-project-management",
  "foodrush-food-delivery-app",
]);
