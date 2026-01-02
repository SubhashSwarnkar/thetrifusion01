// Templates Data for Marketplace

// Import extracted template info (images and names from actual projects)
import templateInfo from './templateInfo.json';

// Helper function to generate individual template entries
const generateIndividualTemplates = (category, industry, basePath, projectNumbers, basePrice, priceVariation = 500) => {
  const templates = [];
  const categoryNames = {
    restaurant: "Restaurant",
    photography: "Photography",
    agency: "Digital Agency",
    education: "Education",
    "fashion-designer": "Fashion Designer",
    "law-firm": "Law Firm",
    "medical-doctor": "Medical Doctor",
    "music-concert": "Music Concert",
    ngo: "NGO",
    pet: "Pet",
    "real-estate": "Real Estate",
    "titan-master": "Titan Master",
    "tour-travels": "Tour Travels",
    "webapp-app": "Web App",
    yoga: "Yoga",
    "e-book": "E-Book"
  };
  const categoryName = categoryNames[industry] || category;
  
  // Varied description patterns to avoid repetition
  const descriptionPatterns = [
    "Elevate your {category} business with {name}. This modern template features a fully responsive design, ensuring your site looks stunning on all devices.",
    "{name} is a premium solution for {category} websites. It comes packed with essential features, clean code, and a user-friendly interface.",
    "Create a professional online presence with {name}. Designed specifically for {category}, it offers a sleek layout and easy customization options.",
    "Stand out from the competition with {name}, a high-quality {category} template. Perfect for showcasing your services and attracting new clients.",
    "Looking for a unique {category} website? {name} delivers a creative design with smooth animations and robust functionality.",
    "Launch your {category} site in minutes with {name}. This template combines aesthetic appeal with practical features for maximum impact.",
    "{name} offers a sophisticated design for {category} professionals. Fully optimized for speed and SEO to help you grow your audience."
  ];

  projectNumbers.forEach((num, index) => {
    // Vary prices based on project number and index
    const price = 299;
    const originalPrice = 3000;
    
    // Determine if popular or new based on index
    const isPopular = index % 7 === 0 || index % 11 === 0;
    const isNew = index < 5 || index % 13 === 0;
    
    // Get extracted info from templateInfo.json
    const templateId = `${industry}-individual-${num}`;
    const extractedInfo = templateInfo[templateId] || {};
    
    // Use extracted name or fallback to default
    const templateName = extractedInfo.name || `${categoryName} Template #${num}`;
    
    // Use extracted image or fallback to default
    const templateImage = extractedInfo.image || `/assets/images/templates/${industry}-${num}.jpg`;
    
    // Generate unique description
    const patternIndex = index % descriptionPatterns.length;
    let description = descriptionPatterns[patternIndex]
      .replace(/{category}/g, categoryName) // Use display name
      .replace(/{name}/g, templateName);

    // Generate SEO Keywords
    const keywords = [
      templateName,
      categoryName,
      industry,
      `${categoryName} website template`,
      `${industry} html template`,
      "responsive website",
      "bootstrap template",
      "premium template",
      "web design",
      "downloadable template"
    ].join(", ");

    templates.push({
      id: templateId,
      name: templateName,
      industry: industry,
      category: category,
      price: price,
      originalPrice: originalPrice,
      demoUrl: "#",
      previewUrl: `/templates-preview/${basePath.replace("templets/", "")}/${num}/index.html`,
      previewImage: templateImage,
      description: description,
      keywords: keywords,
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

// Generate individual education templates (1-41)
const educationProjects = Array.from({ length: 41 }, (_, i) => i + 1);
const educationIndividualTemplates = generateIndividualTemplates(
  "Education",
  "education",
  "templets/Education/Education",
  educationProjects,
  3799, // Base price
  300
);

// Generate individual fashion-designer templates (1-4)
const fashionDesignerProjects = Array.from({ length: 4 }, (_, i) => i + 1);
const fashionDesignerIndividualTemplates = generateIndividualTemplates(
  "Fashion Designer",
  "fashion-designer",
  "templets/Fashion-designer/Fashion-designer",
  fashionDesignerProjects,
  3299, // Base price
  250
);

// Generate individual law-firm templates (1-19)
const lawFirmProjects = Array.from({ length: 19 }, (_, i) => i + 1);
const lawFirmIndividualTemplates = generateIndividualTemplates(
  "Law Firm",
  "law-firm",
  "templets/Law-firm/Law-firm",
  lawFirmProjects,
  4299, // Base price
  350
);

// Generate individual medical-doctor templates (1-27)
const medicalDoctorProjects = Array.from({ length: 27 }, (_, i) => i + 1);
const medicalDoctorIndividualTemplates = generateIndividualTemplates(
  "Medical Doctor",
  "medical-doctor",
  "templets/Medical-Doctor/Medical-Doctor",
  medicalDoctorProjects,
  4099, // Base price
  350
);

// Generate individual music-concert templates (1-10)
const musicConcertProjects = Array.from({ length: 10 }, (_, i) => i + 1);
const musicConcertIndividualTemplates = generateIndividualTemplates(
  "Music Concert",
  "music-concert",
  "templets/Music-Concert/Music-Concert",
  musicConcertProjects,
  3499, // Base price
  300
);

// Generate individual ngo templates (1-11)
const ngoProjects = Array.from({ length: 11 }, (_, i) => i + 1);
const ngoIndividualTemplates = generateIndividualTemplates(
  "NGO",
  "ngo",
  "templets/NGo/NGo",
  ngoProjects,
  3199, // Base price
  250
);

// Generate individual pet templates (1-4)
const petProjects = Array.from({ length: 4 }, (_, i) => i + 1);
const petIndividualTemplates = generateIndividualTemplates(
  "Pet",
  "pet",
  "templets/Pet/Pet",
  petProjects,
  2999, // Base price
  200
);

// Generate individual real-estate templates (1-31)
const realEstateProjects = Array.from({ length: 31 }, (_, i) => i + 1);
const realEstateIndividualTemplates = generateIndividualTemplates(
  "Real Estate",
  "real-estate",
  "templets/RReal-estate/RReal-estate",
  realEstateProjects,
  4399, // Base price
  350
);

// Generate individual titan-master templates (1)
const titanMasterProjects = [1];
const titanMasterIndividualTemplates = generateIndividualTemplates(
  "Titan Master",
  "titan-master",
  "templets/Titan-master/Titan-master",
  titanMasterProjects,
  4999, // Base price
  500
);

// Generate individual tour-travels templates (1-25)
const tourTravelsProjects = Array.from({ length: 25 }, (_, i) => i + 1);
const tourTravelsIndividualTemplates = generateIndividualTemplates(
  "Tour Travels",
  "tour-travels",
  "templets/Tour Travels/Tour Travels",
  tourTravelsProjects,
  3899, // Base price
  300
);

// Generate individual webapp-app templates (1-30)
const webappAppProjects = Array.from({ length: 30 }, (_, i) => i + 1);
const webappAppIndividualTemplates = generateIndividualTemplates(
  "Web App",
  "webapp-app",
  "templets/Webapp-APp/Webapp-APp",
  webappAppProjects,
  4599, // Base price
  400
);

// Generate individual yoga templates (1-7)
const yogaProjects = Array.from({ length: 7 }, (_, i) => i + 1);
const yogaIndividualTemplates = generateIndividualTemplates(
  "Yoga",
  "yoga",
  "templets/Yoga/Yoga",
  yogaProjects,
  3399, // Base price
  250
);

// Generate individual e-book templates (1-4)
const ebookProjects = Array.from({ length: 4 }, (_, i) => i + 1);
const ebookIndividualTemplates = generateIndividualTemplates(
  "E-Book",
  "e-book",
  "templets/e-book/e-book",
  ebookProjects,
  2799, // Base price
  200
);

// Helper function to get collection template info
const getCollectionTemplateInfo = (industry, categoryName) => {
  const collectionId = `${industry}-template-full`;
  const firstTemplateId = `${industry}-individual-1`;
  const extractedInfo = templateInfo[collectionId] || templateInfo[firstTemplateId] || {};
  
  return {
    name: extractedInfo.name || `${categoryName} Template Collection`,
    image: extractedInfo.image || `/assets/images/templates/${industry}-collection.jpg`
  };
};

export const templates = [
  (() => {
    const info = getCollectionTemplateInfo("restaurant", "Restaurant");
    return {
      id: "restaurant-template-full",
      name: info.name,
      industry: "restaurant",
      category: "Restaurant & Food",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Restaurant/Restaurant/1/index.html",
      previewImage: info.image,
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
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("photography", "Photography Portfolio");
    return {
      id: "photography-template-full",
      name: info.name,
      industry: "photography",
      category: "Photography & Portfolio",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Photography/Photography/1/index.html",
      previewImage: info.image,
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
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("agency", "Digital Agency");
    return {
      id: "digital-agency-template-full",
      name: info.name,
      industry: "agency",
      category: "Digital Agency",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Digital_Agency/Digital_Agency/1/index.html",
      previewImage: info.image,
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
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("education", "Education");
    return {
      id: "education-template-full",
      name: info.name,
      industry: "education",
      category: "Education",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Education/Education/1/index.html",
      previewImage: info.image,
    description: "Complete education website template collection with course displays, student portals, event calendars, and faculty sections.",
    features: [
      "Multiple Education Designs",
      "Course Display System",
      "Student Portal",
      "Event Calendar",
      "Faculty Sections",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["education", "school", "university", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Education/Education",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("fashion-designer", "Fashion Designer");
    return {
      id: "fashion-designer-template-full",
      name: info.name,
      industry: "fashion-designer",
      category: "Fashion Designer",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Fashion-designer/Fashion-designer/1/index.html",
      previewImage: info.image,
    description: "Stylish fashion designer website template collection with portfolio showcases, lookbook displays, and e-commerce integration.",
    features: [
      "Multiple Fashion Designs",
      "Portfolio Showcase",
      "Lookbook Display",
      "E-commerce Ready",
      "Gallery System",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["fashion", "designer", "portfolio", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/Fashion-designer/Fashion-designer",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("law-firm", "Law Firm");
    return {
      id: "law-firm-template-full",
      name: info.name,
      industry: "law-firm",
      category: "Law Firm",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Law-firm/Law-firm/1/index.html",
      previewImage: info.image,
    description: "Professional law firm website template collection with attorney profiles, case studies, practice areas, and consultation booking.",
    features: [
      "Multiple Law Firm Designs",
      "Attorney Profiles",
      "Case Studies",
      "Practice Areas",
      "Consultation Booking",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["law", "firm", "legal", "attorney", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Law-firm/Law-firm",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("medical-doctor", "Medical Doctor");
    return {
      id: "medical-doctor-template-full",
      name: info.name,
      industry: "medical-doctor",
      category: "Medical Doctor",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Medical-Doctor/Medical-Doctor/1/index.html",
      previewImage: info.image,
    description: "Complete medical doctor website template collection with appointment booking, patient portals, service displays, and health blogs.",
    features: [
      "Multiple Medical Designs",
      "Appointment Booking",
      "Patient Portal",
      "Service Display",
      "Health Blog",
      "Doctor Profiles",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["medical", "doctor", "health", "hospital", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Medical-Doctor/Medical-Doctor",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("music-concert", "Music Concert");
    return {
      id: "music-concert-template-full",
      name: info.name,
      industry: "music-concert",
      category: "Music Concert",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Music-Concert/Music-Concert/1/index.html",
      previewImage: info.image,
    description: "Dynamic music concert website template collection with event calendars, ticket booking, artist profiles, and media galleries.",
    features: [
      "Multiple Music Designs",
      "Event Calendar",
      "Ticket Booking",
      "Artist Profiles",
      "Media Gallery",
      "Social Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["music", "concert", "event", "entertainment", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/Music-Concert/Music-Concert",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("ngo", "NGO");
    return {
      id: "ngo-template-full",
      name: info.name,
      industry: "ngo",
      category: "NGO",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/NGo/NGo/1/index.html",
      previewImage: info.image,
    description: "Compassionate NGO website template collection with donation systems, volunteer registration, project showcases, and impact stories.",
    features: [
      "Multiple NGO Designs",
      "Donation System",
      "Volunteer Registration",
      "Project Showcase",
      "Impact Stories",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["ngo", "nonprofit", "charity", "donation", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/NGo/NGo",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("pet", "Pet");
    return {
      id: "pet-template-full",
      name: info.name,
      industry: "pet",
      category: "Pet",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Pet/Pet/1/index.html",
      previewImage: info.image,
    description: "Adorable pet website template collection with service displays, pet profiles, appointment booking, and gallery showcases.",
    features: [
      "Multiple Pet Designs",
      "Service Display",
      "Pet Profiles",
      "Appointment Booking",
      "Gallery Showcase",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["pet", "animal", "veterinary", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/Pet/Pet",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("real-estate", "Real Estate");
    return {
      id: "real-estate-template-full",
      name: info.name,
      industry: "real-estate",
      category: "Real Estate",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/RReal-estate/RReal-estate/1/index.html",
      previewImage: info.image,
    description: "Complete real estate website template collection with property listings, search filters, agent profiles, and virtual tours.",
    features: [
      "Multiple Real Estate Designs",
      "Property Listings",
      "Search Filters",
      "Agent Profiles",
      "Virtual Tours",
      "Contact Forms",
      "Map Integration",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["real-estate", "property", "housing", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/RReal-estate/RReal-estate",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("titan-master", "Titan Master");
    return {
      id: "titan-master-template-full",
      name: info.name,
      industry: "titan-master",
      category: "Titan Master",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Titan-master/Titan-master/1/index.html",
      previewImage: info.image,
    description: "Premium Titan Master website template with advanced features, modern design, and comprehensive functionality.",
    features: [
      "Premium Design",
      "Advanced Features",
      "Modern UI/UX",
      "Comprehensive Functionality",
      "Customizable Layout",
      "Well Documented",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["titan", "master", "premium", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Titan-master/Titan-master",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("tour-travels", "Tour Travels");
    return {
      id: "tour-travels-template-full",
      name: info.name,
      industry: "tour-travels",
      category: "Tour Travels",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Tour Travels/Tour Travels/1/index.html",
      previewImage: info.image,
    description: "Complete tour and travel website template collection with destination showcases, booking systems, itinerary displays, and gallery features.",
    features: [
      "Multiple Travel Designs",
      "Destination Showcase",
      "Booking System",
      "Itinerary Display",
      "Gallery Features",
      "Testimonials",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["tour", "travel", "tourism", "booking", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Tour Travels/Tour Travels",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("webapp-app", "Web App");
    return {
      id: "webapp-app-template-full",
      name: info.name,
      industry: "webapp-app",
      category: "Web App",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Webapp-APp/Webapp-APp/1/index.html",
      previewImage: info.image,
    description: "Complete web application template collection with modern interfaces, dashboard designs, and comprehensive functionality.",
    features: [
      "Multiple Web App Designs",
      "Modern Interfaces",
      "Dashboard Designs",
      "User Management",
      "API Integration",
      "Responsive Layout",
      "Source Files Included",
      "Fully Customizable"
    ],
    tags: ["webapp", "app", "application", "dashboard", "collection"],
    isPopular: true,
    isNew: true,
      templatePath: "templets/Webapp-APp/Webapp-APp",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("yoga", "Yoga");
    return {
      id: "yoga-template-full",
      name: info.name,
      industry: "yoga",
      category: "Yoga",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/Yoga/Yoga/1/index.html",
      previewImage: info.image,
    description: "Peaceful yoga website template collection with class schedules, instructor profiles, meditation guides, and booking systems.",
    features: [
      "Multiple Yoga Designs",
      "Class Schedules",
      "Instructor Profiles",
      "Meditation Guides",
      "Booking System",
      "Blog Integration",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["yoga", "wellness", "meditation", "fitness", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/Yoga/Yoga",
      downloadAvailable: true
    };
  })(),
  (() => {
    const info = getCollectionTemplateInfo("e-book", "E-Book");
    return {
      id: "e-book-template-full",
      name: info.name,
      industry: "e-book",
      category: "E-Book",
      price: 299,
      originalPrice: 3000,
      demoUrl: "#",
      previewUrl: "/templates-preview/e-book/e-book/1/index.html",
      previewImage: info.image,
    description: "Complete e-book website template collection with book showcases, author profiles, reading previews, and purchase integration.",
    features: [
      "Multiple E-Book Designs",
      "Book Showcase",
      "Author Profiles",
      "Reading Previews",
      "Purchase Integration",
      "Review System",
      "Contact Forms",
      "Fully Responsive",
      "Source Files Included"
    ],
    tags: ["ebook", "book", "author", "publishing", "collection"],
    isPopular: false,
    isNew: true,
      templatePath: "templets/e-book/e-book",
      downloadAvailable: true
    };
  })(),
  // Individual Restaurant Templates
  ...restaurantIndividualTemplates,
  // Individual Photography Templates
  ...photographyIndividualTemplates,
  // Individual Digital Agency Templates
  ...agencyIndividualTemplates,
  // Individual Education Templates
  ...educationIndividualTemplates,
  // Individual Fashion Designer Templates
  ...fashionDesignerIndividualTemplates,
  // Individual Law Firm Templates
  ...lawFirmIndividualTemplates,
  // Individual Medical Doctor Templates
  ...medicalDoctorIndividualTemplates,
  // Individual Music Concert Templates
  ...musicConcertIndividualTemplates,
  // Individual NGO Templates
  ...ngoIndividualTemplates,
  // Individual Pet Templates
  ...petIndividualTemplates,
  // Individual Real Estate Templates
  ...realEstateIndividualTemplates,
  // Individual Titan Master Templates
  ...titanMasterIndividualTemplates,
  // Individual Tour Travels Templates
  ...tourTravelsIndividualTemplates,
  // Individual Web App Templates
  ...webappAppIndividualTemplates,
  // Individual Yoga Templates
  ...yogaIndividualTemplates,
  // Individual E-Book Templates
  ...ebookIndividualTemplates
];

export const industries = [
  { id: "all", name: "All Templates", count: templates.length },
  { id: "restaurant", name: "Restaurant & Food", count: templates.filter(t => t.industry === "restaurant").length },
  { id: "photography", name: "Photography & Portfolio", count: templates.filter(t => t.industry === "photography").length },
  { id: "agency", name: "Digital Agency", count: templates.filter(t => t.industry === "agency").length },
  { id: "education", name: "Education", count: templates.filter(t => t.industry === "education").length },
  { id: "fashion-designer", name: "Fashion Designer", count: templates.filter(t => t.industry === "fashion-designer").length },
  { id: "law-firm", name: "Law Firm", count: templates.filter(t => t.industry === "law-firm").length },
  { id: "medical-doctor", name: "Medical Doctor", count: templates.filter(t => t.industry === "medical-doctor").length },
  { id: "music-concert", name: "Music Concert", count: templates.filter(t => t.industry === "music-concert").length },
  { id: "ngo", name: "NGO", count: templates.filter(t => t.industry === "ngo").length },
  { id: "pet", name: "Pet", count: templates.filter(t => t.industry === "pet").length },
  { id: "real-estate", name: "Real Estate", count: templates.filter(t => t.industry === "real-estate").length },
  { id: "titan-master", name: "Titan Master", count: templates.filter(t => t.industry === "titan-master").length },
  { id: "tour-travels", name: "Tour Travels", count: templates.filter(t => t.industry === "tour-travels").length },
  { id: "webapp-app", name: "Web App", count: templates.filter(t => t.industry === "webapp-app").length },
  { id: "yoga", name: "Yoga", count: templates.filter(t => t.industry === "yoga").length },
  { id: "e-book", name: "E-Book", count: templates.filter(t => t.industry === "e-book").length }
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

