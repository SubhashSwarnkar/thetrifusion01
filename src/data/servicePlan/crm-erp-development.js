import { LIVE, NAP_LINE, TEAM } from "./_shared";

/**
 * /services/crm-erp-development
 * TODO OWNER: real CRM screenshots and one client outcome metric.
 * TODO OWNER: price range if you want bands beyond ₹3,00,000 / ₹6,00,000 / ₹11,00,000.
 */
export default {
  contentUpdatedAt: "2026-10-12",
  metaTitle: "Custom CRM & ERP Software Development Company in Jaipur",
  bannerTitle: "Custom CRM & ERP Software Development in Jaipur",
  metaDescription:
    "Custom CRM and ERP for Indian SMEs — leads, pipelines, inventory, GST billing, Tally sync and mobile apps. Built in Jaipur; you own the code.",
  keywords:
    "custom CRM software development company Jaipur, custom ERP software development India, CRM development cost India, Tally WhatsApp CRM",
  answerFirst: {
    id: "quick-answer",
    heading: "Custom CRM and ERP in Jaipur: the short answer",
    text:
      "TheTriFusion builds custom CRM and ERP-lite software in Jaipur for Indian SMEs: leads, pipelines, inventory, GST billing, Tally sync, WhatsApp and IndiaMART-style lead capture, plus mobile apps. You own the code. A single CRM module MVP starts from ₹3,00,000. If Salesforce already fits, use [Salesforce customization](/services/salesforce) instead.",
    facts: [
      { label: "Starting price", value: "From ₹3,00,000 (single CRM module MVP)" },
      { label: "You own", value: "Source code, after completion and payment" },
      { label: "India extras", value: "GST billing, Tally, WhatsApp — as scoped" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "crm-erp-modules",
      heading: "CRM modules and ERP modules",
      paragraphs: [
        "CRM: leads, accounts, pipeline, follow-ups, WhatsApp notes, IndiaMART or website lead capture. ERP-lite: inventory, GST invoices, Tally sync, basic stock. Network-marketing trees belong on [MLM software](/services/mlm-crm-development).",
      ],
      comparison: {
        heading: "Module map",
        rowHeader: " ",
        columns: ["CRM", "ERP-lite"],
        rows: [
          { label: "Typical modules", cells: ["Leads, pipeline, activities, reports", "Inventory, GST billing, Tally, stock"] },
          { label: "Mobile", cells: ["Field follow-ups", "Warehouse or delivery checks"] },
        ],
      },
    },
    {
      id: "crm-vs-zoho",
      heading: "Custom CRM vs Zoho / Salesforce / Odoo",
      paragraphs: [
        "Buy Zoho or Salesforce when the process is standard. Buy Odoo when you want a known ERP shape. Commission custom when commissions, GST+Tally, or a process those tools will not hold. Three-year seat maths depends on your headcount; we will not invent a TCO chart. Guide: [custom CRM vs Salesforce](/blog/custom-crm-vs-salesforce-mid-market-2026).",
      ],
      comparison: {
        heading: "How to choose",
        rowHeader: " ",
        columns: ["Zoho / Salesforce / Odoo", "Custom (this page)"],
        rows: [
          { label: "Best for", cells: ["Standard sales or ERP processes", "Rules those tools will not hold"] },
          { label: "Cost shape", cells: ["Seats + apps, forever", "From ₹3,00,000 MVP; you own the code"] },
          { label: "Integrations", cells: ["Marketplace apps", "Tally, WhatsApp, IndiaMART leads — as scoped"] },
        ],
      },
    },
    {
      id: "industry-crm",
      heading: "Industry CRMs",
      paragraphs: [
        "Real estate, education, distribution and manufacturing are common Indian briefs. We scope modules from the process, not from a fake “industry pack” logo wall.",
      ],
    },
    {
      id: "crm-cost",
      heading: "CRM development cost",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹3,00,000 / ₹6,00,000 / ₹11,00,000. Hosting on your server is a yes when the scope says so. Related: [ERP/CRM API playbook](/blog/erp-crm-api-integration-playbook-mid-market).",
      ],
      comparison: {
        heading: "Published CRM/ERP plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹3,00,000", "Single CRM module MVP"] },
          { label: "Standard", cells: ["₹6,00,000", "More modules / mobile"] },
          { label: "Premium", cells: ["₹11,00,000", "Broader ERP-lite programme"] },
        ],
      },
    },
    {
      id: "crm-live",
      heading: "Live operations we can name",
      paragraphs: [
        `${LIVE.dairy} is live fleet, role and P&L operations. ${LIVE.daily} is a live storefront plus POS-style admin. Outcome metrics are not in this repo.`,
      ],
    },
    {
      id: "crm-who-leads",
      heading: "Who leads the work",
      paragraphs: [
        `Named people on the [team page](/team): ${TEAM.backend}; ${TEAM.pm}; ${TEAM.mobile}.`,
      ],
    },
  ],
  faqs: [
    {
      question: "How much does custom CRM development cost in India?",
      answer:
        "TheTriFusion published plans start at ₹3,00,000, ₹6,00,000 and ₹11,00,000. A single module MVP is the Basic slice.",
    },
    {
      question: "Custom CRM or Zoho — which is better for a small business?",
      answer:
        "Zoho if it already fits. Custom if commissions, GST+Tally or a process Zoho will not hold. We say so even when that means “buy Zoho”.",
    },
    {
      question: "Can the CRM integrate with Tally, WhatsApp and IndiaMART leads?",
      answer:
        "Yes, when those are in the scope. Each has its own API or inbox constraints; we read those before we promise a sync.",
    },
    {
      question: "Do you build ERP with inventory and GST billing?",
      answer:
        "Yes, as ERP-lite modules: inventory, GST invoices, Tally sync. A full SAP replacement is a different conversation.",
    },
    {
      question: "How long does it take to build a CRM?",
      answer:
        "A single module MVP is often 6–12 weeks. Multi-module ERP is phased.",
    },
    {
      question: "Can we host it on our own server?",
      answer:
        "Yes. Accounts and servers should be in your company's name. [DevOps](/services/devops) covers the pipeline if you need it.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/salesforce",
      title: "Salesforce customization",
      text: "When you already pay for an org.",
    },
    {
      href: "/services/mlm-crm-development",
      title: "MLM software",
      text: "When the CRM is a compensation tree.",
    },
    {
      href: "/services/software-development",
      title: "Custom software development",
      text: "When CRM is one module of a larger product.",
    },
    {
      href: "/blog/custom-crm-vs-salesforce-mid-market-2026",
      title: "Custom CRM vs Salesforce",
      text: "A mid-market decision guide.",
    },
    {
      href: "/blog/erp-crm-api-integration-playbook-mid-market",
      title: "ERP and CRM API playbook",
      text: "How the integrations actually fail.",
    },
  ],
};
