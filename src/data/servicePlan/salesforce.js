import { NAP_LINE, TEAM } from "./_shared";

/**
 * /services/salesforce
 * TODO OWNER: Salesforce certifications / partner status (Summit etc.).
 * TODO OWNER: any Salesforce project delivered (named, with permission).
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "Salesforce Customization & Integration in Jaipur | TheTriFusion",
  bannerTitle: "Salesforce Customization & Integration Services in Jaipur",
  metaDescription:
    "Flows, custom objects, Apex and website/ERP integrations on your existing Salesforce org, from a Jaipur team. Share your org for a scoped plan.",
  keywords:
    "Salesforce consulting partner Jaipur, Salesforce implementation partner India, Salesforce developer for hire India, Salesforce vs custom CRM",
  answerFirst: {
    id: "quick-answer",
    heading: "Salesforce customization in Jaipur: the short answer",
    text:
      "TheTriFusion customises and integrates Salesforce orgs you already pay for: admin, Flows, Apex/LWC, data migration, and website or ERP connections. We are not listed in this repo as a Salesforce consulting partner, and we do not claim Summit-partner status. If a custom commissions CRM is cheaper long-term, we say so and point you to [CRM/ERP development](/services/crm-erp-development). Published work starts from ₹80,000.",
    facts: [
      { label: "Starting price", value: "From ₹80,000 (published Basic plan)" },
      { label: "Partner status", value: "Not claimed — not in this repo" },
      { label: "Best for", value: "Orgs you already pay for" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "salesforce-services",
      heading: "Salesforce services",
      paragraphs: [
        "Admin and user setup, Flows, custom objects, Apex and Lightning Web Components, website / Tally / WhatsApp integrations, and data migration. We work inside your org with the access you grant.",
      ],
    },
    {
      id: "salesforce-vs-custom",
      heading: "Salesforce vs custom CRM",
      paragraphs: [
        "Keep Salesforce when sales process fits Sales Cloud. Build custom when commissions trees, network marketing, or ops modules will not fit without fighting the platform. Decision notes: [custom CRM vs Salesforce](/services/crm-erp-development).",
      ],
      comparison: {
        heading: "Which path",
        rowHeader: " ",
        columns: ["Salesforce (this page)", "Custom CRM (/services/crm-erp-development)"],
        rows: [
          { label: "Best for", cells: ["You already pay for an org", "Commissions, inventory, GST billing that will not fit"] },
          { label: "Starting price here", cells: ["From ₹80,000", "From ₹3,00,000 for a CRM module MVP"] },
          { label: "You own", cells: ["Configuration in your org", "The source code"] },
        ],
      },
    },
    {
      id: "salesforce-engagement",
      heading: "Engagement models",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹80,000 / ₹2,00,000 / ₹4,00,000. Hourly or monthly admin support is written after we see the org. Named certifications are not listed until the owner supplies them.",
      ],
    },
    {
      id: "salesforce-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}. Salesforce certs are not in this repo.`,
      ],
    },
  ],
  faqs: [
    {
      question: "Are you a Salesforce consulting partner?",
      answer:
        "This repo does not list a Salesforce partner tier. We customise and integrate orgs you already pay for. We will not put a Summit logo on the page without a partner listing.",
    },
    {
      question: "How much does Salesforce customization cost?",
      answer:
        "TheTriFusion published plans start at ₹80,000, ₹2,00,000 and ₹4,00,000. Licences are paid to Salesforce on your account.",
    },
    {
      question: "Can you integrate Salesforce with our website / Tally / WhatsApp?",
      answer:
        "Yes, via APIs and middleware in a written scope. Tally and WhatsApp each have their own constraints; we read those before we promise a sync.",
    },
    {
      question: "Do you offer Salesforce admin support monthly?",
      answer:
        "Yes, as a written retainer after we see the org. It is not a 24/7 helpdesk claim.",
    },
    {
      question: "Salesforce or custom CRM — which is cheaper long term?",
      answer:
        "Salesforce is cheaper when it already fits. Custom is cheaper when you would otherwise buy seats plus three ISV apps and still write Apex. Read /blog/custom-crm-vs-salesforce-mid-market-2026.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM & ERP",
      text: "When Salesforce is the wrong shape.",
    },
    {
      href: "/services/crm-erp-development",
      title: "Custom CRM vs Salesforce",
      text: "A mid-market decision guide.",
    },
  ],
};
