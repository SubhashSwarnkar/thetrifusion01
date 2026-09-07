/**
 * Rajasthan city service-area landings (Jaipur office — no fake local storefronts).
 * Used by seoLandingPages.js.
 */
function cityWebsitePage({
  city,
  slugSuffix,
  industriesHint,
}) {
  const slug = `website-development-company-${slugSuffix}`;
  return {
    slug,
    title: `Website Development for ${city} Businesses | TheTriFusion Jaipur`,
    h1: `Website Development for ${city} — From Our Jaipur Office`,
    navLabel: `${city} websites (from Jaipur office)`,
    metaDescription: `Need a website in ${city}? TheTriFusion is a Jaipur-based software company serving ${city} clients remotely for websites, ecommerce, apps, and digital marketing.`,
    primaryKeyword: `website development company in ${city}`,
    secondaryKeywords: [
      `web development ${city} from Jaipur`,
      `website designer for ${city} businesses`,
      `ecommerce website ${city}`,
      `software company serving ${city}`,
      `IT services ${city} Rajasthan`,
    ],
    intro: `TheTriFusion (Trifusion Infotech Private Limited) is based in Jaipur and serves ${city} businesses remotely — websites, ecommerce stores, and mobile apps for ${industriesHint}. We are a service-area partner, not a ${city} storefront.`,
    sections: [
      {
        title: `Jaipur office, ${city} clients`,
        body: `Our registered base is Jaipur, Rajasthan. ${city} projects run on video calls, WhatsApp, and weekly demos. Hindi/English communication, GST invoicing, and UPI/Razorpay checkouts are standard. We can travel for kickoff when the project needs it.`,
      },
      {
        title: `What we build for ${city} businesses`,
        body: `Company websites, catalogue and wholesale portals, ecommerce for retail brands, school/college sites, booking systems, and custom software. We also handle on-page SEO, Google Business guidance, and lead forms that notify you on WhatsApp.`,
      },
      {
        title: "How a project typically runs",
        body: "Discovery (video or in person) → written scope and estimate → design approval → development with weekly demos → QA → launch on your domain. Most marketing websites ship in 3–8 weeks depending on pages and integrations.",
      },
    ],
    faqs: [
      {
        question: `Do you have an office in ${city}?`,
        answer: `No. Our office is in Jaipur. We serve ${city} as a service area — remote delivery with optional travel for discovery or launch.`,
      },
      {
        question: `Can ${city} clients still work with you?`,
        answer: `Yes. Most of our Rajasthan work is remote: shared boards, weekly demos, and WhatsApp. That is how we work with ${city}, Bhilwara, Kota, Udaipur, and Ajmer teams.`,
      },
      {
        question: `Do you do local SEO for ${city} searches?`,
        answer: `Yes. We can set up on-page SEO, sitemap, and Google Business guidance for a ${city} business. Rankings still depend on reviews, content, and competition.`,
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "software-development",
      "digital-marketing",
      "ui-ux-design",
    ],
    cta: `Get a free scoped estimate for a ${city} project`,
  };
}

export const cityServiceAreaPages = [
  cityWebsitePage({
    city: "Udaipur",
    slugSuffix: "udaipur",
    industriesHint: "tourism, hospitality, retail, education, and growing brands",
  }),
  cityWebsitePage({
    city: "Kota",
    slugSuffix: "kota",
    industriesHint: "education, coaching, retail, healthcare, and growing brands",
  }),
  cityWebsitePage({
    city: "Ajmer",
    slugSuffix: "ajmer",
    industriesHint: "retail, education, hospitality, and growing brands",
  }),
];
