// Service Pricing Plans Data
import { services } from "./servicesData";

// Format price to Indian Rupees
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

// Generate pricing plans for each service
export const getAllServicePricingPlans = () => {
  return services.map(service => {
    const pricing = service.pricing || { basic: 0, standard: 0, premium: 0 };
    
    // Generate features based on service type
    const getFeatures = (planType) => {
      const baseFeatures = {
        "software-development": {
          basic: [
            "Basic software solution",
            "Up to 3 modules",
            "Standard UI/UX",
            "Basic documentation",
            "1 month support",
            "Email support"
          ],
          standard: [
            "Custom software solution",
            "Up to 7 modules",
            "Advanced UI/UX",
            "Comprehensive documentation",
            "3 months support",
            "Priority email support",
            "API integration",
            "Database setup"
          ],
          premium: [
            "Enterprise software solution",
            "Unlimited modules",
            "Premium UI/UX design",
            "Complete documentation",
            "6 months support",
            "24/7 priority support",
            "Advanced API integration",
            "Cloud deployment",
            "Performance optimization",
            "Security audit"
          ]
        },
        "website-development": {
          basic: [
            "Up to 5 pages",
            "Responsive design",
            "Contact form",
            "Basic SEO",
            "1 month support",
            "Mobile friendly"
          ],
          standard: [
            "Up to 10 pages",
            "CMS integration",
            "Payment gateway",
            "Advanced SEO",
            "3 months support",
            "Analytics setup",
            "Social media integration"
          ],
          premium: [
            "Unlimited pages",
            "Custom features",
            "Admin panel",
            "API integration",
            "6 months support",
            "Priority support",
            "Performance optimization",
            "E-commerce functionality"
          ]
        },
        "mobile-app-development": {
          basic: [
            "Single platform (iOS or Android)",
            "Basic features",
            "Standard UI/UX",
            "App store submission",
            "1 month support"
          ],
          standard: [
            "Cross-platform app",
            "Advanced features",
            "Custom UI/UX",
            "Push notifications",
            "3 months support",
            "Analytics integration",
            "Backend integration"
          ],
          premium: [
            "Native iOS & Android",
            "Premium features",
            "Advanced UI/UX",
            "Real-time updates",
            "6 months support",
            "24/7 support",
            "Cloud backend",
            "Advanced analytics",
            "App optimization"
          ]
        },
        "ui-ux-design": {
          basic: [
            "Up to 5 screens",
            "Wireframing",
            "Basic prototyping",
            "Design guidelines",
            "1 revision round"
          ],
          standard: [
            "Up to 15 screens",
            "Detailed wireframing",
            "Interactive prototyping",
            "Design system",
            "3 revision rounds",
            "User testing"
          ],
          premium: [
            "Unlimited screens",
            "Complete wireframing",
            "Advanced prototyping",
            "Full design system",
            "Unlimited revisions",
            "Comprehensive user testing",
            "Design handoff",
            "Developer collaboration"
          ]
        },
        "graphic-design": {
          basic: [
            "Logo design",
            "Business card",
            "Basic brand colors",
            "1 revision round",
            "Standard file formats"
          ],
          standard: [
            "Logo + brand identity",
            "Business cards & letterhead",
            "Brand guidelines",
            "3 revision rounds",
            "All file formats",
            "Social media templates"
          ],
          premium: [
            "Complete brand identity",
            "All marketing materials",
            "Comprehensive guidelines",
            "Unlimited revisions",
            "All file formats",
            "Packaging design",
            "Brand strategy consultation"
          ]
        },
        "digital-marketing": {
          basic: [
            "SEO optimization",
            "Social media setup",
            "Basic content creation",
            "Monthly reporting",
            "1 month campaign"
          ],
          standard: [
            "Advanced SEO",
            "Social media management",
            "Content marketing",
            "PPC campaigns",
            "3 months campaign",
            "Analytics & reporting",
            "Email marketing"
          ],
          premium: [
            "Complete SEO strategy",
            "Full social media management",
            "Content strategy",
            "Multi-channel campaigns",
            "6 months campaign",
            "Advanced analytics",
            "Marketing automation",
            "Conversion optimization"
          ]
        },
        "branding": {
          basic: [
            "Logo design",
            "Brand colors",
            "Typography selection",
            "Basic guidelines",
            "1 revision round"
          ],
          standard: [
            "Complete brand identity",
            "Brand guidelines",
            "Brand voice & messaging",
            "3 revision rounds",
            "Brand assets",
            "Application examples"
          ],
          premium: [
            "Full brand strategy",
            "Complete brand system",
            "Brand guidelines book",
            "Unlimited revisions",
            "All brand assets",
            "Brand implementation",
            "Brand consultation"
          ]
        },
        "rpa": {
          basic: [
            "Process analysis",
            "Basic automation",
            "1-2 processes",
            "Standard documentation",
            "1 month support"
          ],
          standard: [
            "Comprehensive analysis",
            "Advanced automation",
            "3-5 processes",
            "Detailed documentation",
            "3 months support",
            "Integration support"
          ],
          premium: [
            "Complete process audit",
            "Enterprise automation",
            "Unlimited processes",
            "Full documentation",
            "6 months support",
            "24/7 support",
            "Advanced integrations",
            "Performance monitoring"
          ]
        },
        "business-modernization": {
          basic: [
            "Assessment & strategy",
            "Basic modernization",
            "1-2 systems",
            "Standard documentation",
            "1 month support"
          ],
          standard: [
            "Comprehensive assessment",
            "Advanced modernization",
            "3-5 systems",
            "Detailed documentation",
            "3 months support",
            "Training & support"
          ],
          premium: [
            "Complete transformation",
            "Enterprise modernization",
            "All systems",
            "Full documentation",
            "6 months support",
            "24/7 support",
            "Change management",
            "Ongoing optimization"
          ]
        },
        "salesforce": {
          basic: [
            "Basic setup",
            "Standard configuration",
            "Up to 10 users",
            "Basic training",
            "1 month support"
          ],
          standard: [
            "Custom configuration",
            "Advanced features",
            "Up to 25 users",
            "Comprehensive training",
            "3 months support",
            "Integration support"
          ],
          premium: [
            "Complete implementation",
            "Enterprise features",
            "Unlimited users",
            "Advanced training",
            "6 months support",
            "24/7 support",
            "Custom development",
            "Ongoing optimization"
          ]
        },
        "ai-development": {
          basic: [
            "Basic AI solution",
            "Standard algorithms",
            "Basic training",
            "Standard documentation",
            "1 month support"
          ],
          standard: [
            "Advanced AI solution",
            "Custom algorithms",
            "Advanced training",
            "Detailed documentation",
            "3 months support",
            "Model optimization"
          ],
          premium: [
            "Enterprise AI solution",
            "Advanced ML models",
            "Deep learning",
            "Complete documentation",
            "6 months support",
            "24/7 support",
            "Continuous learning",
            "Performance optimization"
          ]
        },
        "devops": {
          basic: [
            "Basic CI/CD setup",
            "Standard automation",
            "Basic monitoring",
            "Standard documentation",
            "1 month support"
          ],
          standard: [
            "Advanced CI/CD",
            "Comprehensive automation",
            "Advanced monitoring",
            "Detailed documentation",
            "3 months support",
            "Infrastructure as code"
          ],
          premium: [
            "Enterprise DevOps",
            "Complete automation",
            "Full monitoring suite",
            "Complete documentation",
            "6 months support",
            "24/7 support",
            "Cloud infrastructure",
            "Performance optimization"
          ]
        },
        "on-demand": {
          basic: [
            "20 hours/month",
            "Standard developer",
            "Email support",
            "Basic project management",
            "Monthly reporting"
          ],
          standard: [
            "40 hours/month",
            "Senior developer",
            "Priority support",
            "Advanced project management",
            "Weekly reporting",
            "Dedicated manager"
          ],
          premium: [
            "80+ hours/month",
            "Expert developers",
            "24/7 support",
            "Full project management",
            "Daily reporting",
            "Dedicated team",
            "Flexible scaling"
          ]
        }
      };

      const serviceFeatures = baseFeatures[service.id] || baseFeatures["website-development"];
      return serviceFeatures[planType] || serviceFeatures.basic;
    };

    return {
      serviceId: service.id,
      serviceTitle: service.title,
      serviceSlug: service.slug,
      serviceIcon: service.icon,
      serviceDescription: service.shortDescription,
      plans: [
        {
          name: "Basic",
          price: formatPrice(pricing.basic),
          rawPrice: pricing.basic,
          description: `Perfect for small projects and getting started with ${service.title}`,
          features: getFeatures("basic"),
          popular: false
        },
        {
          name: "Standard",
          price: formatPrice(pricing.standard),
          rawPrice: pricing.standard,
          description: `Ideal for growing businesses and medium-scale projects`,
          features: getFeatures("standard"),
          popular: true
        },
        {
          name: "Premium",
          price: formatPrice(pricing.premium),
          rawPrice: pricing.premium,
          description: `Complete solution for enterprise-level requirements`,
          features: getFeatures("premium"),
          popular: false
        }
      ]
    };
  });
};

export const getServicePricingBySlug = (slug) => {
  const allPlans = getAllServicePricingPlans();
  return allPlans.find(plan => plan.serviceSlug === slug);
};

export const getServicePricingById = (id) => {
  const allPlans = getAllServicePricingPlans();
  return allPlans.find(plan => plan.serviceId === id);
};

