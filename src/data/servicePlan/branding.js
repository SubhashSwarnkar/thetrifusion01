import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/branding
 * TODO OWNER: real brand projects (logo before/after) with permission.
 * TODO OWNER: package prices if they differ from /pricing ₹30,000 / ₹60,000 / ₹1,20,000.
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "Branding Agency in Jaipur | Logo, Brand Identity & Guidelines",
  bannerTitle: "Branding Agency in Jaipur",
  metaDescription:
    "Brand strategy, naming, logo, colour, typography and brand guidelines from Jaipur — plus a website that uses them. Get a scoped branding package.",
  keywords:
    "branding agency in Jaipur, brand identity design company India, logo and brand identity design cost India, brand guidelines Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Branding agency in Jaipur: the short answer",
    text:
      "TheTriFusion is a branding agency in Jaipur. We do brand strategy, naming when you need it, a logo suite, colour, typography and a guidelines PDF — then a [website](/services/website-development) that actually uses them. Published branding packs start from ₹30,000. This is not a poster shop (see graphic design) and not product UI (see UI/UX).",
    facts: [
      { label: "Starting price", value: "From ₹30,000 (published Basic plan)" },
      { label: "You get", value: "Logo suite, palette, type, guidelines PDF" },
      { label: "Next step", value: "A website or UI that uses the same system" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "brand-deliverables",
      heading: "Brand identity deliverables",
      paragraphs: [
        "Strategy notes, naming when scoped, logo suite (primary, reverse, mark), colour palette, typography, and a guidelines PDF the website team can follow. Campaign kits after the identity exist are [graphic design](/services/graphic-design). Product screens are [UI/UX](/services/ui-ux-design).",
      ],
      included: [
        "Brand strategy notes",
        "Naming (when scoped)",
        "Logo suite",
        "Colour palette and type",
        "Brand guidelines PDF",
      ],
    },
    {
      id: "branding-process",
      heading: "Branding process",
      paragraphs: [
        "Discovery (who it is for, what it must not look like) → directions → one chosen direction → lock logo, colour and type → guidelines → handoff to the website or campaign kit. You approve the direction before we polish.",
      ],
    },
    {
      id: "branding-packages",
      heading: "Branding packages and cost",
      paragraphs: [
        "Published plans on [pricing](/pricing).",
      ],
      comparison: {
        heading: "Published branding plans",
        rowHeader: "Plan",
        columns: ["Starting price", "What the plan lists"],
        rows: [
          { label: "Basic", cells: ["₹30,000", "Starter identity"] },
          { label: "Standard", cells: ["₹60,000", "Broader identity + guidelines"] },
          { label: "Premium", cells: ["₹1,20,000", "Full identity programme"] },
        ],
      },
    },
    {
      id: "branding-plus-website",
      heading: "Branding + website bundle",
      paragraphs: [
        "The usual reason this page exists: a new mark that the [website](/services/website-development) will use the same week. We keep one Jaipur team so the logo does not die in a ZIP while the site launches in a different typeface.",
      ],
    },
    {
      id: "branding-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named person on the [team page](/team): ${TEAM.design}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does branding cost in India?",
      answer:
        "TheTriFusion published branding plans start at ₹30,000, ₹60,000 and ₹1,20,000. Naming, photography and a full website are extra when they are extra.",
    },
    {
      question: "What is included in a brand identity package?",
      answer:
        "Strategy notes, logo suite, colour, type and a guidelines PDF. Naming is included when the scope says so.",
    },
    {
      question: "How long does a branding project take?",
      answer:
        "A focused identity is often a few weeks of reviews. We put dates on the estimate.",
    },
    {
      question: "Do you do brand naming?",
      answer:
        "Yes, when it is in the scope. We do not run a trademark search unless you hire counsel for that.",
    },
    {
      question: "Do I get a brand guidelines document?",
      answer:
        "Yes. A PDF (and Figma tokens when useful) so the website and ads stay on-system.",
    },
    {
      question: "Branding vs logo design — what's the difference?",
      answer:
        "A logo is one mark. Branding here is the system: mark, colour, type, voice notes and rules the site can obey.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/graphic-design",
      title: "Graphic design",
      text: "Campaign kits after the identity is locked.",
    },
    {
      href: "/services/website-development",
      title: "Website development",
      text: "The site that should use the new system.",
    },
    {
      href: "/services/ui-ux-design",
      title: "UI/UX design",
      text: "Product UI on top of the same type and colour.",
    },
  ],
};
