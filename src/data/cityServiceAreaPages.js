/**
 * Rajasthan city service-area landings (Jaipur office — no fake local storefronts).
 * Used by seoLandingPages.js. Each city needs distinct intro/sections so pages
 * are not near-identical templates.
 */
function cityWebsitePage({
  city,
  slugSuffix,
  industriesHint,
  introExtra,
  buildFocus,
  localSeoNote,
  faqExtra,
}) {
  const slug = `website-development-company-${slugSuffix}`;
  return {
    slug,
    title: `Website Development for ${city} Businesses | TheTriFusion Jaipur`,
    h1: `Website Development for ${city} — From Our Jaipur Office`,
    navLabel: `${city} websites (from Jaipur office)`,
    metaDescription: `Website development for ${city} businesses from TheTriFusion in Jaipur — ${industriesHint}. Remote delivery, GST invoices, UPI/Razorpay, Hindi/English support.`,
    primaryKeyword: `website development company in ${city}`,
    secondaryKeywords: [
      `web development ${city} from Jaipur`,
      `website designer for ${city} businesses`,
      `ecommerce website ${city}`,
      `software company serving ${city}`,
      `IT services ${city} Rajasthan`,
    ],
    intro: `TheTriFusion (Trifusion Infotech Private Limited) is based in Jaipur and serves ${city} businesses remotely — websites, ecommerce stores, and mobile apps for ${industriesHint}. We are a service-area partner, not a ${city} storefront. ${introExtra}`,
    sections: [
      {
        title: `Jaipur office, ${city} clients`,
        body: `Our registered base is Jaipur, Rajasthan. ${city} projects run on video calls, WhatsApp, and weekly demos. Hindi/English communication, GST invoicing, and UPI/Razorpay checkouts are standard. We can travel for kickoff when the project needs it.`,
      },
      {
        title: `What we build for ${city} businesses`,
        body: buildFocus,
      },
      {
        title: `${city}-focused SEO and lead capture`,
        body: localSeoNote,
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
      ...(faqExtra || []),
    ],
    relatedServiceSlugs: [
      "website-development",
      "software-development",
      "digital-marketing",
      "ui-ux-design",
    ],
    cta: `Get a free scoped estimate for a ${city} project`,
    updatedAt: "2026-09-24",
  };
}

export const cityServiceAreaPages = [
  cityWebsitePage({
    city: "Udaipur",
    slugSuffix: "udaipur",
    industriesHint: "tourism, hospitality, retail, education, and growing brands",
    introExtra:
      "Udaipur briefs often need bilingual (English/Hindi) marketing sites, hotel or resort enquiry flows, and gallery-heavy pages that still load fast on mobile data.",
    buildFocus:
      "For Udaipur we commonly ship hotel/resort sites with enquiry and WhatsApp booking, tourism operator catalogues, jewellery/retail ecommerce, school sites, and corporate sites for lakeside and industrial clients. Image performance and Core Web Vitals matter because galleries are large.",
    localSeoNote:
      "We structure title tags and service pages around how travellers and local buyers search (Udaipur hotels, Udaipur wedding vendors, Udaipur retailers), wire Google Business Profile guidance to the real Udaipur address when you have one, and keep NAP consistent — without inventing a fake Udaipur office for TheTriFusion.",
    faqExtra: [
      {
        question: "Can you build a hotel or resort website for Udaipur?",
        answer:
          "Yes. Typical scope includes room/package pages, gallery, enquiry forms, WhatsApp click-to-chat, and optional booking-widget integration. We host for speed and handle basic on-page SEO.",
      },
    ],
  }),
  cityWebsitePage({
    city: "Kota",
    slugSuffix: "kota",
    industriesHint: "education, coaching, retail, healthcare, and growing brands",
    introExtra:
      "Kota projects frequently centre on coaching institutes and education brands that need lead forms, batch/fee pages, and student-parent WhatsApp follow-ups — plus retailers who want simple ecommerce.",
    buildFocus:
      "For Kota we build coaching and institute websites (courses, results, admissions CTAs), clinic/hospital brochure sites, retail ecommerce with UPI/COD, and custom portals when batch enrolment or test-series needs software beyond WordPress.",
    localSeoNote:
      "Education queries in Kota are competitive. We recommend clear course landing pages, FAQ schema, fast mobile pages near campus Wi-Fi/data constraints, and Google Business setup for the institute’s real Kota address — separate from our Jaipur company NAP.",
    faqExtra: [
      {
        question: "Do you build coaching institute websites for Kota?",
        answer:
          "Yes. Common features: course catalogue, faculty pages, result highlights, admission enquiry forms, WhatsApp alerts, and optional student login when you already have an LMS — we integrate rather than lock you into one CMS.",
      },
    ],
  }),
  cityWebsitePage({
    city: "Ajmer",
    slugSuffix: "ajmer",
    industriesHint: "retail, education, hospitality, pilgrimage services, and growing brands",
    introExtra:
      "Ajmer briefs often mix local retail, schools, and hospitality or pilgrimage-related services that need trustworthy Hindi/English pages and phone/WhatsApp conversion — not heavy animation.",
    buildFocus:
      "For Ajmer we deliver business brochure sites, school/college sites, retail and wholesale catalogues, hotel/guesthouse pages, and lead-gen sites for local services. Checkout and GST invoicing are available when you sell online.",
    localSeoNote:
      "We align copy with Ajmer search intent (local services, education, hospitality) and keep structured data honest about your Ajmer business location. TheTriFusion remains a Jaipur-based delivery partner serving Ajmer remotely.",
    faqExtra: [
      {
        question: "Can Ajmer clients get Hindi content on the website?",
        answer:
          "Yes. We can ship bilingual pages or Hindi-first sections where your customers expect it, with clear CTAs for call and WhatsApp.",
      },
    ],
  }),
];
