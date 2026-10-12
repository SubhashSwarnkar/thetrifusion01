import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/business-modernization
 * TODO OWNER: one real spreadsheet→software migration story with permission.
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "Legacy Software Modernization & Excel-to-Software | Jaipur",
  bannerTitle: "Business & Legacy Software Modernization Services",
  metaDescription:
    "Replace spreadsheets, WhatsApp workflows and old desktop software with phased web apps, CRM and mobile — without stopping operations. Jaipur team.",
  keywords:
    "legacy application modernization services India, replace Excel with software for business, digital transformation company Jaipur, Excel to software Jaipur",
  answerFirst: {
    id: "quick-answer",
    heading: "Legacy software modernization: the short answer",
    text:
      "TheTriFusion modernises how Indian SMEs actually run: Excel, WhatsApp groups and old desktop tools, replaced in phases with web apps, CRM modules and mobile — without a big-bang cutover. Published work starts from ₹1,50,000. If you need a greenfield product, see [custom software](/services/software-development). If you need bots on top of the old process, see [RPA](/services/rpa).",
    facts: [
      { label: "Starting price", value: "From ₹1,50,000 (published Basic plan)" },
      { label: "Method", value: "Phased; operations stay up" },
      { label: "Typical first slice", value: "The spreadsheet everyone is afraid to break" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "six-signs-legacy",
      heading: "Six signs you have outgrown Excel or the legacy tool",
      paragraphs: [
        "Two people cannot edit the file at once. WhatsApp is the workflow. Month-end is a copy-paste ritual. The desktop app only runs on one Windows 7 box. Nobody knows which sheet is true. A new GST or Tally rule means rewriting macros. Those are reasons to modernise, not slogans.",
      ],
    },
    {
      id: "six-rs",
      heading: "The 6 Rs, in plain language",
      paragraphs: [
        "Rehost (lift the old app). Replatform (same logic, better host). Refactor (clean the code). Rearchitect (new modules). Rebuild (new product). Replace (buy SaaS). We pick one per system after discovery — not all six as a poster.",
      ],
    },
    {
      id: "phased-roadmap",
      heading: "Phased roadmap",
      paragraphs: [
        "Inventory the real process → pick the first slice that can go live without stopping the rest → migrate data with a check, not a hope → run old and new in parallel until the new one is boring → cut over. Related: [CRM/ERP](/services/crm-erp-development).",
      ],
    },
    {
      id: "modernization-cost",
      heading: "Modernization cost ranges in India",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹1,50,000 / ₹3,50,000 / ₹7,00,000. We do not copy a competitor’s ₹3–12 lakh rehost grid. The signed number follows the 6R choice and the data mess.",
      ],
      comparison: {
        heading: "Published modernization plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹1,50,000", "First spreadsheet or desktop slice"] },
          { label: "Standard", cells: ["₹3,50,000", "Several modules, parallel run"] },
          { label: "Premium", cells: ["₹7,00,000", "Broader programme"] },
        ],
      },
    },
    {
      id: "modernization-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.pm}; ${TEAM.backend}; ${TEAM.frontend}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How do I replace Excel with custom software?",
      answer:
        "Write down the real columns and the people who touch them. We ship the first slice as a web app, migrate that data, and keep Excel for the rest until the new slice is boring. Then the next sheet.",
    },
    {
      question: "What does legacy modernization cost in India?",
      answer:
        "TheTriFusion published plans start at ₹1,50,000, ₹3,50,000 and ₹7,00,000. Data cleanup is often the quiet cost.",
    },
    {
      question: "Can you migrate our old VB/FoxPro/Access software?",
      answer:
        "Often yes, as a rebuild or a wrap, after we see the data files. We do not promise a bit-for-bit clone of a 1998 form.",
    },
    {
      question: "Will our data be migrated safely?",
      answer:
        "We migrate with a mapped check, not a hope. You keep a copy of the old files. Parallel run until the numbers match.",
    },
    {
      question: "Can we modernize in phases without downtime?",
      answer:
        "That is the point of this page. Big-bang cutovers are how weekends get ruined.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "Greenfield products when there is no legacy to carry.",
    },
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM & ERP",
      text: "When the spreadsheet is actually sales and stock.",
    },
    {
      href: "/services/rpa",
      title: "RPA",
      text: "When a bot on the old process is the honest first step.",
    },
  ],
};
