import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/rpa
 * TODO OWNER: any real automation delivered with hours saved.
 * TODO OWNER: UiPath / Power Automate certifications.
 */
export default {
  contentUpdatedAt: "2026-10-27",
  metaTitle: "RPA Services in India | Business Process Automation from Jaipur",
  bannerTitle: "RPA & Business Process Automation Services in India",
  metaDescription:
    "Automate invoice entry, report pulls and CRM updates with UiPath, Power Automate or custom bots — built in Jaipur with a human exception path.",
  keywords:
    "RPA services company India, RPA automation company Jaipur, UiPath Power Automate developer India, Tally GST automation",
  answerFirst: {
    id: "quick-answer",
    heading: "RPA services in India: the short answer",
    text:
      "TheTriFusion builds RPA and business-process bots in Jaipur for Indian SMEs: invoice entry, report pulls, CRM updates, Tally sync and portal work, with a human path when the bot should stop. Tools: UiPath, Power Automate, or custom Python/API. Published plans start from ₹50,000. We do not invent an ROI percentage.",
    facts: [
      { label: "Starting price", value: "From ₹50,000 (published Basic plan)" },
      { label: "Tools", value: "UiPath, Power Automate, Python / APIs" },
      { label: "Rule", value: "Human exception path, not a silent fail" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "rpa-processes",
      heading: "Processes we automate",
      paragraphs: [
        "GST invoice entry, Tally sync, bank-statement reconciliation, CRM field updates, and pulling reports from portals that have no API. Unstructured “AI that decides” belongs on [AI development](/services/ai-development). Spreadsheet replacement as a product belongs on [business modernization](/services/business-modernization).",
      ],
    },
    {
      id: "rpa-tools",
      heading: "UiPath vs Power Automate vs custom Python/API",
      paragraphs: [
        "UiPath when you already standardised on it. Power Automate when the work lives in Microsoft 365. Custom Python or an API when the portal is simple and a robot licence would cost more than the job.",
      ],
      comparison: {
        heading: "Tool choice",
        rowHeader: " ",
        columns: ["UiPath", "Power Automate", "Custom Python / API"],
        rows: [
          { label: "Best for", cells: ["Desktop + web processes you will keep", "Microsoft 365-centric offices", "A few endpoints and a cron job"] },
          { label: "Licence", cells: ["Vendor licence on your account", "Included in many M365 plans", "Hosting you already pay for"] },
        ],
      },
    },
    {
      id: "rpa-pricing",
      heading: "RPA pricing",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹50,000 / ₹1,00,000 / ₹2,00,000. A first bot is usually the Basic slice plus the time to sit with the person who currently does the job. Hours-saved ROI is not published until we have a named process.",
      ],
      comparison: {
        heading: "Published RPA plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic / pilot bot", cells: ["₹50,000", "One written process, human exception path"] },
          { label: "Standard", cells: ["₹1,00,000", "More processes or a tougher portal"] },
          { label: "Premium", cells: ["₹2,00,000", "Programme of bots"] },
        ],
      },
    },
    {
      id: "rpa-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}. Tool certifications are not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "What is RPA and how is it different from AI automation?",
      answer:
        "RPA follows a written path (open this screen, type this field). AI guesses. We use RPA when the steps are stable, and a model only where a human still reviews the output.",
    },
    {
      question: "How much does RPA cost in India?",
      answer:
        "TheTriFusion published RPA plans start at ₹50,000, ₹1,00,000 and ₹2,00,000. Vendor robot licences are extra if you need them.",
    },
    {
      question: "Which processes are best to automate first?",
      answer:
        "High-volume, rule-based, painful when a human typos: invoice entry, report pulls, CRM updates. Not the one-off judgement call.",
    },
    {
      question: "UiPath or Power Automate — which should we use?",
      answer:
        "Power Automate if you already live in Microsoft 365. UiPath if you need a dedicated robot platform. Custom code if a licence would dwarf the job.",
    },
    {
      question: "Can bots work with Tally and GST portals?",
      answer:
        "Often yes, via API, file drop, or a careful UI bot. GST portal changes can break UI bots; we say so in the scope.",
    },
    {
      question: "What happens when the bot fails?",
      answer:
        "It stops and a human gets the exception. Silent retries that post twice are worse than a queue.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/ai-development",
      title: "AI development",
      text: "When the next step is a model with a review tick.",
    },
    {
      href: "/services/business-modernization",
      title: "Legacy modernization",
      text: "When the spreadsheet should become software, not a bot on top of it.",
    },
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM & ERP",
      text: "When the bot is updating a system we also build.",
    },
  ],
};
