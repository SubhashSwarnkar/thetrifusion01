import {
  NAP,
  UPDATED,
  PRICES,
  officeFaq,
  gstFaq,
  siblingCitySlugs,
} from "./_shared";

const PARENT = "/services/software-development";
const PRICE = PRICES.software;

export const softwareCityLandings = [
  {
    slug: "custom-software-development-jaipur",
    serviceAreaCity: "Jaipur",
    serviceAreaRegion: "Rajasthan",
    title: "Custom Software Development Company in Jaipur | From ₹1,00,000",
    h1: "Custom Software Development in Jaipur — Built at Patrakar Colony",
    navLabel: "Jaipur custom software (HQ)",
    metaDescription:
      "Custom software in Jaipur for jewellers, hotels, exporters and SMEs: portals, CRM modules and APIs from ₹1,00,000. Studio at Patrakar Colony.",
    primaryKeyword: "custom software development company in Jaipur",
    secondaryKeywords: [
      "software development company Jaipur studio",
      "dealer portal Jaipur jewellers",
      "hotel operations software Jaipur",
      "custom CRM Jaipur exporters",
      "API development Patrakar Colony",
    ],
    outcomeLine:
      "A Jaipur exporter, jeweller or hotel can sit with the Patrakar Colony team and leave with a written module list — dealer login, inventory, or GST-ready ops — not a boxed SaaS with a logo swap.",
    intro: `TheTriFusion builds custom software in Jaipur: dealer portals for gems and handicrafts, hotel and coaching ops tools, inventory for Sitapura units, and APIs that talk to Tally or a website you already have. The studio is ${NAP}. This URL is the Jaipur service-area page. The India-wide capability write-up is the parent software development service. Published starter MVPs start from ${PRICE.basic}. We do not use the redirected slug software-development-company-jaipur.`,
    sections: [
      {
        title: "Jaipur workflows we actually automate",
        body: `Jewellery wholesalers need a dealer login that shows weight, certification and rate only to logged-in buyers. Hotels need room status that is not a WhatsApp group. Sitapura and VKI units need dispatch and quality photos tied to a lot number. Coaching needs batch and fee records that are not a shared spreadsheet. We write those modules down before we design a screen. We will not claim an ERP that replaces SAP in twelve weeks.`,
      },
      {
        title: "Custom vs SaaS for a Jaipur SME",
        body: `Buy Zoho or a hotel PMS when it already fits. Commission custom software when commissions, karigar payments, or stone-lot tracking will not fit a boxed product without fighting it every week. The first release is often one module in 6–12 weeks after discovery. Broader platforms are phased. You own the code after completion and payment.`,
      },
      {
        title: "Published INR plans",
        body: `Basic ${PRICE.basic}, Standard ${PRICE.standard}, Premium ${PRICE.premium} on the pricing page. Those are starting project fees, ex-GST, after a written scope. A dealer portal with rate lists is not the same quote as a two-screen enquiry tool. Connect Dairy (connectdairy.in) is a live operations platform we can show; it is not a jewellery-ERP case study.`,
      },
      {
        title: "Kickoff at the studio or on a video call",
        body: `Jaipur clients can visit by appointment. Shop-floor owners often prefer evening WhatsApp and a Saturday demo. Hindi and English are both fine. We sign an NDA before detailed discovery when you ask.`,
      },
      {
        title: "Parent page and other cities",
        body: `Stack, Tally integration FAQs, and India buyers live on custom software development. Delhi, Mumbai, Bangalore and Jodhpur have their own software city pages so this copy stays about Jaipur industries.`,
      },
    ],
    faqs: [
      officeFaq("Jaipur"),
      {
        question: "How much does custom software cost in Jaipur?",
        answer: `Published starter plans begin at ${PRICE.basic}. Standard ${PRICE.standard}. Premium ${PRICE.premium}. The written scope sets the number.`,
      },
      {
        question: "Can you replace our Tally + Excel dispatch?",
        answer:
          "We can wrap a portal around Tally or replace the spreadsheet first. We read your current files before promising a sync.",
      },
      {
        question: "Do we own the source code?",
        answer:
          "Yes, after completion and payment, as written in the contract.",
      },
      gstFaq("Jaipur"),
    ],
    deliverables: [
      "Written module list before design",
      "Weekly staging demos in Jaipur IST",
      "Source you own after payment",
      "Optional Tally / website API",
      "GST invoice from this company",
    ],
    audiences: [
      "Jaipur jewellers and gem exporters",
      "Hotels and coaching ops",
      "Sitapura manufacturers",
      "SMEs replacing spreadsheet dispatch",
    ],
    timelineRange:
      "A focused Jaipur MVP module is often 6–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I want custom software scoped at your Jaipur studio.",
    relatedPortfolioIds: ["connect-dairy-supply-chain"],
    relatedServiceSlugs: [
      "software-development",
      "crm-erp-development",
      "business-modernization",
      "website-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "software",
      "custom-software-development-jaipur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Custom software development company in India (parent page)" },
    ],
    cta: "Get a scoped Jaipur software estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "software-development-company-delhi",
    serviceAreaCity: "Delhi",
    serviceAreaRegion: "Delhi",
    title: "Software Development Company in Delhi NCR | From Jaipur, ₹1,00,000",
    h1: "Custom Software for Delhi NCR — From Our Jaipur Office",
    navLabel: "Delhi NCR software (from Jaipur)",
    metaDescription:
      "Custom software for Delhi, Gurgaon and Noida firms from TheTriFusion in Jaipur: e-invoice workflows, vendor portals, APIs from ₹1,00,000. No Delhi office.",
    primaryKeyword: "software development company in Delhi",
    secondaryKeywords: [
      "custom software Delhi NCR from Jaipur",
      "GST e-invoice software Gurgaon",
      "vendor portal Noida",
      "API development Delhi",
      "SME software Okhla",
    ],
    outcomeLine:
      "An NCR vendor or manufacturer gets a portal, e-invoice helper or API layer from Jaipur — written scope, IST demos, no invented Nehru Place office.",
    intro: `Delhi NCR software briefs we take are vendor portals for GSTN-facing suppliers, e-invoice and RCM helpers that sit beside the IRP (not a replacement for GSTN), logistics trackers for Okhla/Noida units, and internal tools for Gurgaon services firms. TheTriFusion has no Delhi office. Delivery is from ${NAP}. Published MVPs start from ${PRICE.basic}.`,
    sections: [
      {
        title: "GSTN-adjacent tools without pretending we are GSTN",
        body: `If your NCR accounts team still pastes IRP JSON into a sheet, we can wrap a validated form and a retry around the APIs you are allowed to use. We do not issue GST credentials, we do not host a shadow GSTN, and we do not promise a filing product. The GSTN RCM and e-invoice guides on this site are the buyer-facing explanation; this page is the NCR service-area path into a scoped build.`,
      },
      {
        title: "Vendor portals for ministry-adjacent and PSU work",
        body: `NCR suppliers often need a login where a buyer uploads a PO and you return a dispatch photo and invoice PDF. That is custom software, not a website. We will not print empanelment you do not have. Roles, audit logs and a Hindi/English UI are ordinary scope items.`,
      },
      {
        title: "Why Jaipur delivery still works in NCR",
        body: `IST overlap is complete. Kickoff is video; travel is optional and written. Metro agency rates are not a reason to skip a written module list. Invoices are GST invoices from Jaipur. We will not list a Cyber City PIN for TheTriFusion.`,
      },
      {
        title: "Published INR plans",
        body: `From ${PRICE.basic}, then ${PRICE.standard} and ${PRICE.premium}. A one-form e-invoice helper is not a multi-branch ERP. We say which in the estimate.`,
      },
      {
        title: "Parent page",
        body: `Tally, Zoho, NDA and ownership FAQs live on custom software development in India.`,
      },
    ],
    faqs: [
      officeFaq("Delhi"),
      {
        question: "Do you build GST filing software?",
        answer:
          "No. We build helpers and portals around the APIs and files you already use. GSTN and your CA remain the system of record.",
      },
      {
        question: "Can Gurgaon product teams hire you for an internal tool?",
        answer:
          "Yes. Dedicated hours are the on-demand developers page. A fixed first module is this software page.",
      },
      {
        question: "How much does custom software cost for an NCR SME?",
        answer: `Published starters from ${PRICE.basic}. Scope, not the NCR PIN, sets the number.`,
      },
      gstFaq("Delhi"),
    ],
    deliverables: [
      "Written module list for the NCR workflow",
      "IST weekly demos",
      "Roles and audit logs when the brief needs them",
      "Source you own after payment",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "GSTN-facing NCR vendors",
      "Okhla and Noida manufacturers",
      "Gurgaon services firms",
      "Logistics teams in the NCR belt",
    ],
    timelineRange:
      "A focused NCR module is often 6–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I have a Delhi NCR workflow and want custom software from Jaipur.",
    relatedServiceSlugs: [
      "software-development",
      "crm-erp-development",
      "business-modernization",
      "rpa",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "software",
      "software-development-company-delhi"
    ),
    relatedLinks: [
      { href: PARENT, label: "Custom software development company in India (parent page)" },
    ],
    cta: "Get a scoped Delhi NCR software estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "software-development-company-mumbai",
    serviceAreaCity: "Mumbai",
    serviceAreaRegion: "Maharashtra",
    title: "Software Development Company in Mumbai | From Jaipur, ₹1,00,000",
    h1: "Custom Software for Mumbai — From Our Jaipur Office",
    navLabel: "Mumbai software (from Jaipur)",
    metaDescription:
      "Custom software for Mumbai D2C, trading and ops teams from TheTriFusion in Jaipur. Portals and APIs from ₹1,00,000. No Mumbai office.",
    primaryKeyword: "software development company in Mumbai",
    secondaryKeywords: [
      "custom software Mumbai from Jaipur",
      "D2C operations software Mumbai",
      "trading house portal Maharashtra",
      "BFSI ops tool Mumbai",
      "API development Andheri",
    ],
    outcomeLine:
      "A Mumbai D2C or trading ops team gets a portal or API from Jaipur — INR pricing, IST demos, no pretended BKC office and no invented banking licence.",
    intro: `Mumbai software work we take is D2C operations (orders, returns, B2B rate lists), trading-house deal rooms, media production trackers, and internal tools for services firms. We are not a bank, NBFC or payment aggregator. TheTriFusion has no Mumbai office. Delivery is from ${NAP}. Published MVPs start from ${PRICE.basic}.`,
    sections: [
      {
        title: "D2C ops that Instagram does not run",
        body: `When the Bio link is a store but restocking, B2B rates and returns live in a sheet, that sheet is the product. We replace it with roles, SKU photos and a GST invoice PDF. Checkout itself belongs on ecommerce. This page is the operations layer behind the store.`,
      },
      {
        title: "Trading, diamonds, and discreet portals",
        body: `Diamond and commodities desks often need a login, not a marketing site. We build rate visibility for named dealers and leave public SEO off those URLs. We will not publish a turnover or a “Mumbai diamond bourse” claim you did not approve.`,
      },
      {
        title: "What we will not build as “fintech” on this page",
        body: `A lending app, a UPI app, or a BBPS panel is the fintech Mumbai city page, and you still bring the bank or API partner. Custom software here is ops, not a licence.`,
      },
      {
        title: "INR plans and Jaipur delivery",
        body: `From ${PRICE.basic}. Demos fit Mumbai office hours. Travel is optional. No WeWork pin for TheTriFusion.`,
      },
      {
        title: "Parent page",
        body: `Ownership, NDA and Tally FAQs: custom software development.`,
      },
    ],
    faqs: [
      officeFaq("Mumbai"),
      {
        question: "Can you build a lending or UPI app for our Mumbai NBFC?",
        answer:
          "That is a fintech brief, and you bring the regulated partner. This page is operations software, not a licence.",
      },
      {
        question: "Do you work with Marathi-speaking ops teams?",
        answer:
          "Hindi and English are standard. Marathi UI is in scope when copy is provided.",
      },
      {
        question: "How much does custom software cost in Mumbai?",
        answer: `Published starters from ${PRICE.basic}. We do not add a metro surcharge; modules do.`,
      },
      gstFaq("Mumbai"),
    ],
    deliverables: [
      "Ops portal or API for the Mumbai workflow",
      "Dealer or staff roles",
      "IST weekly demos",
      "Source you own after payment",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Mumbai D2C operations teams",
      "Trading and diamond houses",
      "Production studios",
      "Services firms replacing shared drives",
    ],
    timelineRange:
      "A focused Mumbai module is often 6–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I have a Mumbai ops workflow and want custom software from Jaipur.",
    relatedServiceSlugs: [
      "software-development",
      "crm-erp-development",
      "fintech-app-development",
      "business-modernization",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "software",
      "software-development-company-mumbai"
    ),
    relatedLinks: [
      { href: PARENT, label: "Custom software development company in India (parent page)" },
    ],
    cta: "Get a scoped Mumbai software estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "software-development-company-bangalore",
    serviceAreaCity: "Bengaluru",
    serviceAreaRegion: "Karnataka",
    title: "Software Development Company in Bangalore | From Jaipur, ₹1,00,000",
    h1: "Custom Software for Bangalore — From Our Jaipur Office",
    navLabel: "Bangalore software (from Jaipur)",
    metaDescription:
      "Custom software and SaaS MVPs for Bangalore product teams from TheTriFusion in Jaipur. From ₹1,00,000, IST overlap, you own the code. No Bengaluru office.",
    primaryKeyword: "software development company in Bangalore",
    secondaryKeywords: [
      "SaaS MVP development Bangalore from Jaipur",
      "custom software Whitefield",
      "API development Koramangala",
      "internal tools Electronic City",
      "product engineering Karnataka INR",
    ],
    outcomeLine:
      "A Bangalore product team gets a SaaS slice or internal tool from Jaipur — written first-release cut, IST overlap, INR, no fake Manyata office.",
    intro: `Bangalore software briefs we take are SaaS MVPs, internal tools for product companies, and API layers that sit under a Next.js site. TheTriFusion is not a staffing marketplace and not a Bangalore GCC. The office is ${NAP}. Published starters from ${PRICE.basic}. Dedicated hours, if you want a named developer inside your sprint, are the on-demand page.`,
    sections: [
      {
        title: "A first-release cut, not an infinite backlog",
        body: `We write the first slice: who logs in, what they can do, what we will not build yet. That is how a Jaipur team stays cheaper than a local body shop without dumping an undocumented repo. You own the code. We do not keep your AWS account.`,
      },
      {
        title: "How we sit next to a Bangalore product org",
        body: `Standups can join your existing call in IST. We will not pretend to be in Koramangala. If you need someone in your office every day, hire locally; we will say so. If you need a module shipped with weekly demos, this page is the path.`,
      },
      {
        title: "Stack we will actually name",
        body: `Typical: Node.js, PostgreSQL or MongoDB, React/Next.js, and a cloud you already pay for. We match your stack when you have one. We will not print “AI-powered” on a CRUD admin.`,
      },
      {
        title: "INR plans",
        body: `From ${PRICE.basic}. A SaaS billing engine or a multi-tenant admin is not a starter module. We say so in the estimate.`,
      },
      {
        title: "Parent page",
        body: `India-wide process, NDA and Tally FAQs: custom software development.`,
      },
    ],
    faqs: [
      officeFaq("Bangalore"),
      {
        question: "Can you join our existing GitHub and Jira?",
        answer:
          "Yes, when the contract says so. On-demand developers is the better page if you want hours inside your sprint rather than a fixed module.",
      },
      {
        question: "Do you sign Bangalore-style MSA / SOC language?",
        answer:
          "We can work from your MSA after legal review. We do not invent a SOC 2 we have not completed.",
      },
      {
        question: "How much does a Bangalore SaaS MVP cost with you?",
        answer: `Published starters from ${PRICE.basic}. Multi-tenant billing is a later phase.`,
      },
      gstFaq("Bangalore"),
    ],
    deliverables: [
      "Written first-release cut",
      "Repo and cloud credentials in your name",
      "IST demos / optional standup join",
      "Source you own after payment",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Bangalore SaaS founders",
      "Product companies needing an internal tool",
      "GCCs who want a fixed module, not a vendor logo",
      "SMEs in Karnataka who want INR pricing",
    ],
    timelineRange:
      "A focused Bangalore MVP slice is often 6–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I have a Bangalore product brief and want a module from your Jaipur team.",
    relatedServiceSlugs: [
      "software-development",
      "on-demand",
      "ai-development",
      "devops",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "software",
      "software-development-company-bangalore"
    ),
    relatedLinks: [
      { href: PARENT, label: "Custom software development company in India (parent page)" },
    ],
    cta: "Get a scoped Bangalore software estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "software-development-company-jodhpur",
    serviceAreaCity: "Jodhpur",
    serviceAreaRegion: "Rajasthan",
    title: "Software Development Company in Jodhpur | From Jaipur, ₹1,00,000",
    h1: "Custom Software for Jodhpur — From Our Jaipur Office",
    navLabel: "Jodhpur software (from Jaipur)",
    metaDescription:
      "Custom software for Jodhpur handicraft exporters, hotels and solar EPCs from TheTriFusion in Jaipur. Portals from ₹1,00,000. No Jodhpur office.",
    primaryKeyword: "software development company in Jodhpur",
    secondaryKeywords: [
      "exporter portal Jodhpur",
      "hotel operations software Jodhpur",
      "solar project tracker Jodhpur",
      "custom software Rajasthan from Jaipur",
      "inventory software handicraft Jodhpur",
    ],
    outcomeLine:
      "A Jodhpur exporter or hotel replaces a WhatsApp-and-Excel dispatch with a portal built in Jaipur — travel when the workshop needs to see the yard.",
    intro: `Jodhpur software briefs are inventory and dealer logins for furniture and handicraft exporters, stay operations for heritage hotels, and project trackers for solar EPCs. TheTriFusion has no Jodhpur office. We drive from Jaipur (${NAP}) when a kickoff needs to be in the workshop. Published MVPs from ${PRICE.basic}.`,
    sections: [
      {
        title: "Exporter inventory that matches the crate",
        body: `Furniture and metalware exporters in Jodhpur need SKU, wood, finish, crate status, and which dealer may see the rate. A public website is the catalogue; this page is the login behind it. We will not show a “buy now” on a made-to-order piece unless you write the lead time. Heritage-hotel ops are a different module: room status and vendor payments a night manager will use in Hindi — not a global PMS pitch. Solar EPCs need site photos, net-metering papers and vendor bills with roles; we do not file MNRE paperwork. Kickoff is video by default, a workshop visit when the scope includes it. Published MVPs from ${PRICE.basic}. GST invoices from Jaipur. TheTriFusion has no Sojati Gate office.`,
      },
      {
        title: "Hotel ops without a global PMS pitch",
        body: `If a boxed hotel PMS already fits, buy it. If you need room status, vendor payments and a Hindi staff UI that a night manager will use, that is a small custom module. We do not claim a Marriott-grade PMS.`,
      },
      {
        title: "Solar project files",
        body: `EPCs juggle site photos, net-metering papers and vendor bills. A tracker with roles is custom software. We do not file MNRE paperwork.`,
      },
      {
        title: "Jaipur–Jodhpur delivery",
        body: `Video by default. A workshop visit when the scope includes it. Hindi-first UIs are common. GST invoices from Jaipur.`,
      },
      {
        title: "Parent page",
        body: `India process and ownership: custom software development.`,
      },
    ],
    faqs: [
      officeFaq("Jodhpur"),
      {
        question: "Can the software be Hindi-first for the yard staff?",
        answer:
          "Yes. Hindi, English, or both. Labels are yours to approve.",
      },
      {
        question: "Is this the same as a Jodhpur website?",
        answer:
          "No. The website sells. Custom software is the login, stock and dispatch.",
      },
      {
        question: "How much does custom software cost for a Jodhpur exporter?",
        answer: `Published starters from ${PRICE.basic}. A dealer rate-list portal is scoped after we see SKUs.`,
      },
      gstFaq("Jodhpur"),
    ],
    deliverables: [
      "Dealer or staff login",
      "Inventory or stay module as scoped",
      "Hindi UI option",
      "Optional on-site workshop",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Handicraft and furniture exporters",
      "Heritage hotels",
      "Solar EPCs",
      "Jodhpur SMEs with spreadsheet ops",
    ],
    timelineRange:
      "A focused Jodhpur module is often 6–12 weeks after discovery.",
    whatsappMessage:
      "Hi TriFusion, I have a Jodhpur operations brief and want software from Jaipur.",
    relatedServiceSlugs: [
      "software-development",
      "crm-erp-development",
      "website-development",
      "business-modernization",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "software",
      "software-development-company-jodhpur"
    ),
    relatedLinks: [
      { href: PARENT, label: "Custom software development company in India (parent page)" },
    ],
    cta: "Get a scoped Jodhpur software estimate",
    updatedAt: UPDATED,
  },
];
