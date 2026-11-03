import { LIVE, NAP_LINE, TEAM } from "./_shared";

/**
 * /services/crm-erp-development
 * CRM-first page. Full ERP (finance/GST, warehouse, MRP, multi-branch) lives on
 * /services/erp-software-development — keep copy distinct; do not re-describe ERP modules here.
 * TODO OWNER: real CRM screenshots and one client outcome metric.
 */
export default {
  contentUpdatedAt: "2026-11-03",
  metaTitle: "Custom CRM Software Development Company in Jaipur | TheTriFusion",
  bannerTitle: "Custom CRM Software Development in Jaipur",
  metaDescription:
    "Custom CRM for Indian SMEs — leads, pipelines, quotations, WhatsApp notes and IndiaMART-style capture. Built in Jaipur; you own the code. From ₹3,00,000.",
  keywords:
    "custom CRM software development company Jaipur, CRM development cost India, sales pipeline software Jaipur, Tally WhatsApp CRM, custom CRM vs Zoho Salesforce",
  answerFirst: {
    id: "quick-answer",
    heading: "Custom CRM in Jaipur: the short answer",
    text:
      "TheTriFusion builds custom CRM software in Jaipur for Indian SMEs: leads, accounts, pipelines, follow-ups, quotations, WhatsApp notes, and IndiaMART-style or website lead capture, plus a mobile companion when field sales need one. You own the code. A single CRM module MVP starts from ₹3,00,000. If Salesforce already fits, use [Salesforce customization](/services/salesforce) instead. Warehouse, GST books, manufacturing and multi-branch ERP modules live on our separate [ERP software development](/services/erp-software-development) page.",
    facts: [
      { label: "Starting price", value: "From ₹3,00,000 (single CRM module MVP)" },
      { label: "You own", value: "Source code, after completion and payment" },
      { label: "India extras", value: "WhatsApp notes, website/IndiaMART leads, quotation PDFs — as scoped" },
      { label: "Office", value: NAP_LINE },
    ],
  },
  extraSections: [
    {
      id: "crm-modules",
      heading: "CRM modules we build",
      paragraphs: [
        "CRM here means the sales operating system: lead capture, account and contact masters, pipeline stages your team already uses, activity logging, quotations, and manager dashboards. WhatsApp notes and website form capture sit next to the deal — not in a parallel inbox. Network-marketing trees belong on [MLM software](/services/mlm-crm-development).",
        "When the same company also needs inventory, GST ledgers, procurement or production, that is ERP work on [ERP software development](/services/erp-software-development). We can sequence CRM first and ERP second so sales does not wait for the warehouse go-live.",
      ],
      comparison: {
        heading: "CRM vs ERP on this site",
        rowHeader: " ",
        columns: ["This page (CRM)", "ERP page"],
        rows: [
          {
            label: "Typical modules",
            cells: [
              "Leads, pipeline, activities, quotations, reports",
              "Finance/GST, inventory, procurement, MRP, HR, branches",
            ],
          },
          {
            label: "Canonical URL",
            cells: [
              "/services/crm-erp-development",
              "/services/erp-software-development",
            ],
          },
        ],
      },
    },
    {
      id: "crm-vs-zoho",
      heading: "Custom CRM vs Zoho / Salesforce",
      paragraphs: [
        "Buy Zoho or Salesforce when the process is standard and seats are fine. Commission custom when commissions, unusual stages, GST-linked quotations, or a process those tools will not hold without weekly fighting. Three-year seat maths depends on your headcount; we will not invent a TCO chart. Odoo and SAP comparisons for warehouse/finance belong on the [ERP page](/services/erp-software-development).",
      ],
      comparison: {
        heading: "How to choose",
        rowHeader: " ",
        columns: ["Zoho / Salesforce", "Custom CRM (this page)"],
        rows: [
          { label: "Best for", cells: ["Standard sales processes", "Rules those tools will not hold"] },
          { label: "Cost shape", cells: ["Seats + apps, forever", "From ₹3,00,000 MVP; you own the code"] },
          { label: "Integrations", cells: ["Marketplace apps", "WhatsApp, website leads, quotation PDFs — as scoped"] },
        ],
      },
    },
    {
      id: "industry-crm",
      heading: "Industry CRMs",
      paragraphs: [
        "Real estate, education, distribution and B2B services are common Indian CRM briefs. We scope stages and fields from the process, not from a fake “industry pack” logo wall. Manufacturing shop-floor and godown depth are ERP — link those teams to [ERP software development](/services/erp-software-development).",
      ],
    },
    {
      id: "crm-cost",
      heading: "CRM development cost",
      paragraphs: [
        "Published plans on [pricing](/pricing): ₹3,00,000 / ₹6,00,000 / ₹11,00,000. A single CRM module MVP is the Basic slice. Multi-module programmes that add inventory and GST books are usually scoped on the [ERP page](/services/erp-software-development) from ₹6,00,000. Hosting on your server is a yes when the scope says so.",
      ],
      comparison: {
        heading: "Published CRM plans",
        rowHeader: "Plan",
        columns: ["Starting price", "Typical use"],
        rows: [
          { label: "Basic", cells: ["₹3,00,000", "Single CRM module MVP"] },
          { label: "Standard", cells: ["₹6,00,000", "More CRM modules / mobile companion"] },
          { label: "Premium", cells: ["₹11,00,000", "Broader CRM programme or CRM+ops when scoped together"] },
        ],
      },
    },
    {
      id: "crm-live",
      heading: "Live operations we can name",
      paragraphs: [
        `${LIVE.dairy} is live fleet, role and P&L operations. ${LIVE.daily} is a live storefront plus POS-style admin. Outcome metrics are not in this repo. Deeper warehouse and finance modules are described on [ERP software development](/services/erp-software-development).`,
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
        "Zoho if it already fits. Custom if commissions, unusual stages or a process Zoho will not hold. We say so even when that means “buy Zoho”.",
    },
    {
      question: "Can the CRM integrate with WhatsApp and IndiaMART leads?",
      answer:
        "Yes, when those are in the scope. Each has its own API or inbox constraints; we read those before we promise a sync.",
    },
    {
      question: "Do you still build ERP on this URL?",
      answer:
        "This page is CRM-first. Full ERP — finance with GST, inventory, procurement, manufacturing, HR and multi-branch — is on /services/erp-software-development. We cross-link both ways.",
    },
    {
      question: "How long does it take to build a CRM?",
      answer:
        "A single module MVP is often 6–12 weeks. Larger CRM programmes are phased.",
    },
    {
      question: "Can we host it on our own server?",
      answer:
        "Yes. Accounts and servers should be in your company's name. [DevOps](/services/devops) covers the pipeline if you need it.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/erp-software-development",
      title: "ERP software development",
      text: "Finance/GST, inventory, MRP, HR and multi-branch — the ERP companion page.",
    },
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
  ],
};
