// Pricing Rules and Data

export const pricingRules = {
  industries: {
    gym: { basePrice: 15000, multiplier: 1.2, name: "Gym & Fitness" },
    restaurant: { basePrice: 20000, multiplier: 1.3, name: "Restaurant & Food" },
    education: { basePrice: 18000, multiplier: 1.25, name: "Education" },
    ecommerce: { basePrice: 35000, multiplier: 1.5, name: "E-commerce" },
    healthcare: { basePrice: 25000, multiplier: 1.4, name: "Healthcare" },
    realestate: { basePrice: 22000, multiplier: 1.35, name: "Real Estate" },
    technology: { basePrice: 30000, multiplier: 1.45, name: "Technology" },
    finance: { basePrice: 40000, multiplier: 1.6, name: "Finance & Banking" },
    default: { basePrice: 20000, multiplier: 1.0, name: "General Business" }
  },
  projectTypes: {
    website: { basePrice: 15000, name: "Website" },
    "mobile-app": { basePrice: 50000, name: "Mobile App" },
    "web-app": { basePrice: 35000, name: "Web Application" },
    design: { basePrice: 20000, name: "UI/UX Design" },
    branding: { basePrice: 30000, name: "Branding" },
    marketing: { basePrice: 15000, name: "Digital Marketing" }
  },
  timeline: {
    urgent: { multiplier: 1.5, days: 7, name: "Urgent (1 week)" },
    fast: { multiplier: 1.3, days: 14, name: "Fast (2 weeks)" },
    normal: { multiplier: 1.0, days: 30, name: "Normal (1 month)" },
    standard: { multiplier: 0.9, days: 45, name: "Standard (6 weeks)" },
    flexible: { multiplier: 0.8, days: 60, name: "Flexible (2 months)" }
  },
  features: {
    "basic-pages": { price: 2000, name: "Basic Pages (1-5 pages)" },
    "standard-pages": { price: 5000, name: "Standard Pages (6-10 pages)" },
    "premium-pages": { price: 10000, name: "Premium Pages (11-20 pages)" },
    "custom-pages": { price: 15000, name: "Custom Pages (20+ pages)" },
    "cms-integration": { price: 8000, name: "CMS Integration" },
    "payment-gateway": { price: 12000, name: "Payment Gateway" },
    "user-authentication": { price: 10000, name: "User Authentication" },
    "api-integration": { price: 15000, name: "Third-party API Integration" },
    "admin-panel": { price: 20000, name: "Admin Panel" },
    "mobile-responsive": { price: 5000, name: "Mobile Responsive" },
    "seo-optimization": { price: 8000, name: "SEO Optimization" },
    "analytics-integration": { price: 3000, name: "Analytics Integration" }
  }
};

export const calculatePrice = (industry, projectType, timeline, selectedFeatures = []) => {
  const industryData = pricingRules.industries[industry] || pricingRules.industries.default;
  const projectData = pricingRules.projectTypes[projectType] || pricingRules.projectTypes.website;
  const timelineData = pricingRules.timeline[timeline] || pricingRules.timeline.normal;

  let basePrice = projectData.basePrice;
  basePrice = basePrice * industryData.multiplier;
  basePrice = basePrice * timelineData.multiplier;

  // Add feature costs
  let featureCost = 0;
  selectedFeatures.forEach(feature => {
    if (pricingRules.features[feature]) {
      featureCost += pricingRules.features[feature].price;
    }
  });

  const totalPrice = basePrice + featureCost;

  return {
    basePrice: Math.round(basePrice),
    featureCost: Math.round(featureCost),
    totalPrice: Math.round(totalPrice),
    breakdown: {
      industry: industryData.name,
      projectType: projectData.name,
      timeline: timelineData.name,
      estimatedDays: timelineData.days
    }
  };
};

export const calculateTimeline = (projectType, complexity, features = []) => {
  const baseTimelines = {
    website: { simple: 14, medium: 30, complex: 60 },
    "mobile-app": { simple: 45, medium: 90, complex: 180 },
    "web-app": { simple: 30, medium: 60, complex: 120 },
    design: { simple: 7, medium: 14, complex: 30 },
    branding: { simple: 14, medium: 30, complex: 45 },
    marketing: { simple: 7, medium: 14, complex: 30 }
  };

  const projectTimeline = baseTimelines[projectType] || baseTimelines.website;
  let days = projectTimeline[complexity] || projectTimeline.medium;

  // Add days for additional features
  const featureDays = {
    "cms-integration": 7,
    "payment-gateway": 10,
    "user-authentication": 7,
    "api-integration": 14,
    "admin-panel": 21,
    "mobile-responsive": 5,
    "seo-optimization": 5,
    "analytics-integration": 2
  };

  features.forEach(feature => {
    if (featureDays[feature]) {
      days += featureDays[feature];
    }
  });

  const milestones = [
    { name: "Planning & Design", days: Math.round(days * 0.2) },
    { name: "Development", days: Math.round(days * 0.6) },
    { name: "Testing & Refinement", days: Math.round(days * 0.15) },
    { name: "Launch & Handover", days: Math.round(days * 0.05) }
  ];

  return {
    totalDays: days,
    weeks: Math.ceil(days / 7),
    months: Math.ceil(days / 30),
    milestones: milestones,
    estimatedCompletion: new Date(Date.now() + days * 24 * 60 * 60 * 1000)
  };
};

