// Templates Data for Marketplace

// Helper function to generate individual template entries
const generateIndividualTemplates = (category, industry, basePath, projectNumbers, basePrice, priceVariation = 500) => {
  const templates = [];
  const categoryNames = {
    restaurant: "Restaurant",
    photography: "Photography",
    agency: "Digital Agency"
  };
  const categoryName = categoryNames[industry] || category;
  
  projectNumbers.forEach((num, index) => {
    // Vary prices based on project number and index
    const priceMultiplier = 1 + (index % 5) * 0.1; // Vary by 10% increments
    const price = Math.round(basePrice * priceMultiplier);
    const originalPrice = Math.round(price * 1.5);
    
    // Determine if popular or new based on index
    const isPopular = index % 7 === 0 || index % 11 === 0;
    const isNew = index < 5 || index % 13 === 0;
    
    templates.push({
      id: `${industry}-individual-${num}`,
      name: `${categoryName} Template #${num}`,
      industry: industry,
      category: category,
      price: price,
      originalPrice: originalPrice,
      demoUrl: "#",
      previewUrl: `/templates-preview/${basePath.replace("templets/", "")}/${num}/index.html`,
      previewImage: `/assets/images/templates/${industry}-${num}.jpg`,
      description: `Professional ${category.toLowerCase()} website template #${num} with modern design, fully responsive layout, and all essential features for your business.`,
      features: [
        "Fully Responsive Design",
        "Modern UI/UX",
        "Cross-browser Compatible",
        "Easy to Customize",
        "Well Documented",
        "Source Files Included",
        "Free Updates"
      ],
      tags: [industry, category.toLowerCase().replace(/\s+/g, "-"), "template", "website"],
      isPopular: isPopular,
      isNew: isNew,
      templatePath: `${basePath}/${num}`,
      downloadAvailable: true
    });
  });
  
  return templates;
};

// Generate individual restaurant templates (1-46)
const restaurantProjects = Array.from({ length: 46 }, (_, i) => i + 1);
const restaurantIndividualTemplates = generateIndividualTemplates(
  "Restaurant & Food",
  "restaurant",
  "templets/Restaurant/Restaurant",
  restaurantProjects,
  3999, // Base price
  300
);

// Generate individual photography templates (1-33)
const photographyProjects = Array.from({ length: 33 }, (_, i) => i + 1);
const photographyIndividualTemplates = generateIndividualTemplates(
  "Photography & Portfolio",
  "photography",
  "templets/Photography/Photography",
  photographyProjects,
  3499, // Base price
  250
);

// Generate individual digital agency templates
// Based on the folder listing, these are the actual project numbers
const agencyProjects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77];
const agencyIndividualTemplates = generateIndividualTemplates(
  "Digital Agency",
  "agency",
  "templets/Digital_Agency/Digital_Agency",
  agencyProjects,
  4499, // Base price
  350
);

export const templates = [
  {
    id: "restaurant-template-full",
    name: "Restaurant Template Collection",
    industry: "restaurant",
    category: "Restaurant & Food",
    price: 9999,
    originalPrice: 14999,
    demoUrl: "#",
    previewUrl: "/templates-preview/Restaurant/Restaurant/1/index.html",
    previewImage: "/assets/images/templates/restaurant-collection.jpg",
    description: "Complete restaurant website template collection with multiple designs, menu displays, online reservations, and gallery showcase.",
    features: [
      "Multiple Restaurant Designs",
      "Menu Display System",
      "Online Reservations",
      "Photo Gallery",
      "Location Maps",
      "Reviews Section",
      "Event Booking",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["restaurant", "food", "dining", "cafe", "collection"],
    isPopular: true,
    isNew: true,
    templatePath: "templets/Restaurant/Restaurant",
    downloadAvailable: true
  },
  {
    id: "photography-template-full",
    name: "Photography Portfolio Collection",
    industry: "photography",
    category: "Photography & Portfolio",
    price: 8999,
    originalPrice: 12999,
    demoUrl: "#",
    previewUrl: "/templates-preview/Photography/Photography/1/index.html",
    previewImage: "/assets/images/templates/photography-collection.jpg",
    description: "Professional photography portfolio template collection with stunning galleries, portfolio showcases, and client booking features.",
    features: [
      "Multiple Portfolio Designs",
      "Image Gallery System",
      "Portfolio Showcase",
      "Client Booking",
      "Contact Forms",
      "Social Media Integration",
      "Blog Section",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["photography", "portfolio", "gallery", "collection"],
    isPopular: true,
    isNew: true,
    templatePath: "templets/Photography/Photography",
    downloadAvailable: true
  },
  {
    id: "digital-agency-template-full",
    name: "Digital Agency Template Collection",
    industry: "agency",
    category: "Digital Agency",
    price: 11999,
    originalPrice: 17999,
    demoUrl: "#",
    previewUrl: "/templates-preview/Digital_Agency/Digital_Agency/1/index.html",
    previewImage: "/assets/images/templates/digital-agency-collection.jpg",
    description: "Complete digital agency website template collection with modern designs, service showcases, case studies, and team sections.",
    features: [
      "Multiple Agency Designs",
      "Service Showcases",
      "Case Studies",
      "Team Sections",
      "Portfolio Display",
      "Testimonials",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["agency", "digital", "business", "collection"],
    isPopular: true,
    isNew: true,
    templatePath: "templets/Digital_Agency/Digital_Agency",
    downloadAvailable: true
  },
  // Individual Restaurant Templates
  ...restaurantIndividualTemplates,
  // Individual Photography Templates
  ...photographyIndividualTemplates,
  // Individual Digital Agency Templates
  ...agencyIndividualTemplates
];

export const industries = [
  { id: "all", name: "All Templates", count: templates.length },
  { id: "restaurant", name: "Restaurant & Food", count: templates.filter(t => t.industry === "restaurant").length },
  { id: "photography", name: "Photography & Portfolio", count: templates.filter(t => t.industry === "photography").length },
  { id: "agency", name: "Digital Agency", count: templates.filter(t => t.industry === "agency").length }
];

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id);
};

export const getTemplatesByIndustry = (industry) => {
  if (industry === "all") return templates;
  return templates.filter(template => template.industry === industry);
};

export const getPopularTemplates = () => {
  return templates.filter(template => template.isPopular);
};

export const getNewTemplates = () => {
  return templates.filter(template => template.isNew);
};

