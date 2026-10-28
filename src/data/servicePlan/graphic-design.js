import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/graphic-design
 * TODO OWNER: real design samples (this page lives or dies on portfolio).
 * TODO OWNER: monthly social package prices if they differ from /pricing project plans.
 */
export default {
  contentUpdatedAt: "2026-10-28",
  metaTitle: "Graphic Design Company in Jaipur | Social, Ads, Brochures & Packaging",
  bannerTitle: "Graphic Design Services in Jaipur",
  metaDescription:
    "Social media creatives, ad visuals, brochures, catalogues and packaging designed in Jaipur to match your brand and website. Monthly or per-pack pricing.",
  keywords:
    "graphic design company in Jaipur, logo design in Jaipur, social media post design services India, brochure packaging design Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Graphic design company in Jaipur: the short answer",
    text:
      "TheTriFusion designs social creatives, ad sets, brochures, catalogues, packaging and presentations in Jaipur so they match the website or app we also build. This is campaign and marketing visual work — not product UI (see UI/UX) and not a full brand identity (see branding). Published packs start from ₹10,000.",
    facts: [
      { label: "Starting price", value: "From ₹10,000 (published Basic plan)" },
      { label: "Includes", value: "Social, ads, brochures, catalogues, packaging, presentations" },
      { label: "Source files", value: "AI / PSD / Figma as scoped" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "graphic-services",
      heading: "Graphic design services",
      paragraphs: [
        "Social media creatives, paid-ad visual sets, brochures and catalogues, packaging and labels, and presentation decks. Logo and identity systems live on [branding](/services/branding). Product screens live on [UI/UX](/services/ui-ux-design). Campaigns that need media buying live on [digital marketing](/services/digital-marketing).",
      ],
    },
    {
      id: "graphic-packages",
      heading: "Design packages",
      paragraphs: [
        "Published project plans on [pricing](/pricing). Monthly social retainers are scoped in writing if you need a calendar, not a one-off pack.",
      ],
      comparison: {
        heading: "Published graphic plans",
        rowHeader: "Plan",
        columns: ["Starting price", "What the plan lists"],
        rows: [
          { label: "Basic", cells: ["₹10,000", "Starter campaign or social set"] },
          { label: "Standard", cells: ["₹25,000", "Broader campaign kit"] },
          { label: "Premium", cells: ["₹50,000", "Larger kit / catalogue territory"] },
        ],
      },
    },
    {
      id: "turnaround-revisions",
      heading: "Turnaround and revisions",
      paragraphs: [
        "The Basic plan lists one revision round. Extra rounds are written into the scope. Turnaround depends on how complete the brief and brand files are; we put a date on the estimate, not a slogan.",
      ],
    },
    {
      id: "graphic-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named person on the [team page](/team): ${TEAM.design}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does graphic design cost in Jaipur?",
      answer:
        "TheTriFusion published graphic plans start at ₹10,000, ₹25,000 and ₹50,000. Monthly calendars are scoped separately.",
    },
    {
      question: "Do you offer monthly social media design packages?",
      answer:
        "Yes, as a written retainer when you need a calendar. The published figures on /pricing are project packs.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "The Basic plan lists one revision round. We write extra rounds into the scope rather than arguing later.",
    },
    {
      question: "Do I get the source files (AI/PSD/Figma)?",
      answer:
        "Yes, when the contract says so. Source files are a deliverable, not a surprise.",
    },
    {
      question: "Do you design packaging and labels?",
      answer:
        "Yes. Print-ready packaging and labels are in scope when dielines and print specs are provided.",
    },
    {
      question: "How fast is turnaround?",
      answer:
        "A small social set can be days; a catalogue is weeks. The estimate carries the date.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/branding",
      title: "Branding agency",
      text: "Logo and guidelines these creatives should follow.",
    },
    {
      href: "/services/digital-marketing",
      title: "Digital marketing",
      text: "When the creatives also need ads and SEO.",
    },
  ],
};
