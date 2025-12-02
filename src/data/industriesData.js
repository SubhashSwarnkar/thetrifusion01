// Industries Data

export const industries = [
  {
    id: "gym",
    name: "Gym & Fitness",
    icon: "💪",
    description: "Fitness centers, gyms, personal trainers, and wellness centers",
    color: "bg-red-500"
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    icon: "🍽️",
    description: "Restaurants, cafes, food delivery, and catering services",
    color: "bg-orange-500"
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    description: "Schools, colleges, online courses, and training institutes",
    color: "bg-blue-500"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: "🛒",
    description: "Online stores, marketplaces, and retail businesses",
    color: "bg-green-500"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description: "Hospitals, clinics, medical practices, and health services",
    color: "bg-pink-500"
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "🏠",
    description: "Property listings, real estate agencies, and construction",
    color: "bg-yellow-500"
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    description: "IT services, software companies, and tech startups",
    color: "bg-purple-500"
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: "💰",
    description: "Banks, financial services, and investment firms",
    color: "bg-indigo-500"
  },
  {
    id: "default",
    name: "General Business",
    icon: "🏢",
    description: "General business websites and corporate sites",
    color: "bg-gray-500"
  }
];

export const getIndustryById = (id) => {
  return industries.find(industry => industry.id === id) || industries.find(industry => industry.id === "default");
};

export const getAllIndustries = () => {
  return industries.filter(industry => industry.id !== "default");
};

