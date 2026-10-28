import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/digital-marketing
 * TODO OWNER: real campaign results (CPL/ROAS) with screenshots and permission.
 * TODO OWNER: monthly retainer prices if they differ from /pricing ₹15,000 / ₹30,000 / ₹60,000.
 * TODO OWNER: Google Partner / Meta Partner badges if held.
 */
export default {
  contentUpdatedAt: "2026-10-28",
  metaTitle: "Digital Marketing Agency in Jaipur | SEO, Google Ads & Meta Ads",
  bannerTitle: "Digital Marketing Agency in Jaipur",
  metaDescription:
    "SEO, Google Ads, Meta Ads and landing-page CRO for Indian brands, run from Jaipur with monthly reports. Plans from ₹15,000 (ad spend separate).",
  keywords:
    "digital marketing agency in Jaipur, SEO company in Jaipur, Google Ads agency Jaipur, Meta Ads Jaipur, performance marketing India",
  answerFirst: {
    id: "quick-answer",
    heading: "Digital marketing agency in Jaipur: the short answer",
    text:
      "TheTriFusion runs SEO, local SEO / Google Business Profile work, Google Ads, Meta Ads and landing-page CRO from Jaipur for Indian brands that already have a site or store. Published plans start from ₹15,000. Ad spend is separate. We do not guarantee first-page rankings.",
    facts: [
      { label: "Starting price", value: "From ₹15,000 (published Basic plan)" },
      { label: "Ad spend", value: "Billed to your Ads/Meta account, not included in the fee" },
      { label: "Reports", value: "Monthly, against the metrics in the scope" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "dm-services",
      heading: "Digital marketing services",
      paragraphs: [
        "SEO, local SEO and Google Business Profile help, Google Ads, Meta (Facebook and Instagram) Ads, conversion work on [landing pages and websites](/services/website-development), and social creatives with [graphic design](/services/graphic-design). We do not invent ROAS on this page.",
      ],
    },
    {
      id: "dm-pricing",
      heading: "Monthly and project pricing",
      paragraphs: [
        "Published plans on [pricing](/pricing) start at ₹15,000, ₹30,000 and ₹60,000. Treat them as starting fees. Media spend is paid to Google or Meta on your account. A monthly retainer is written after we see the site, the offer and the budget.",
      ],
      comparison: {
        heading: "Published digital marketing plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Note"],
        rows: [
          { label: "Basic", cells: ["₹15,000", "Starting fee on /pricing; ad spend extra"] },
          { label: "Standard", cells: ["₹30,000", "Broader SEO + ads scope"] },
          { label: "Premium", cells: ["₹60,000", "Larger programme"] },
        ],
      },
    },
    {
      id: "dm-90-day",
      heading: "90-day plan",
      paragraphs: [
        "Days 1–30: baseline, Search Console, ads account hygiene, one landing-page fix if the site leaks. Days 31–60: first content or ads iteration against the metric in the scope. Days 61–90: keep or kill each channel in writing. No ranking guarantee.",
      ],
    },
    {
      id: "dm-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.pm}; ${TEAM.frontend} for landing pages. Partner badges are not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does digital marketing cost per month in Jaipur?",
      answer:
        "TheTriFusion published plans start at ₹15,000, ₹30,000 and ₹60,000. Monthly retainers are written after we see the site and budget. Ad spend is extra.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical fixes can show in weeks. Competitive keywords in Jaipur take longer. Anyone who guarantees a date is selling a story.",
    },
    {
      question: "Is ad spend included in your fee?",
      answer:
        "No. Media spend goes to Google or Meta on your account. Our fee is the work.",
    },
    {
      question: "Do you manage Google Business Profile?",
      answer:
        "Yes, when local SEO is in the scope. Categories and NAP must match the website.",
    },
    {
      question: "What reports will I get?",
      answer:
        "A monthly written report against the metrics in the scope (leads, qualified enquiries, or revenue if you share access). We do not invent a dashboard we cannot show you.",
    },
    {
      question: "Do you sign long-term contracts?",
      answer:
        "The first period is written in the estimate. We do not hide a 12-month lock in the footer.",
    },
    {
      question: "Can you guarantee first-page rankings?",
      answer:
        "No. Anyone who does is not being honest. We can fix the site, the listings and the campaigns; Google decides the rest.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/website-development",
      title: "Website development",
      text: "The site traffic has to land on.",
    },
    {
      href: "/services/graphic-design",
      title: "Graphic design",
      text: "Creatives for ads and social.",
    },
  ],
};
