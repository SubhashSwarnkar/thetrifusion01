import {
  NAP,
  PHONE,
  HOURS,
  UPDATED,
  PRICES,
  officeFaq,
  gstFaq,
  siblingCitySlugs,
} from "./_shared";

const PARENT = "/services/website-development";
const PRICE = PRICES.website;

export const websiteCityLandings = [
  {
    slug: "website-development-company-jaipur",
    serviceAreaCity: "Jaipur",
    serviceAreaRegion: "Rajasthan",
    title: "Website Development Company in Jaipur | From ₹15,000",
    h1: "Website Development Company in Jaipur — Patrakar Colony Studio",
    navLabel: "Jaipur websites (HQ)",
    metaDescription:
      "Website development company in Jaipur for jewellers, hotels, exporters and SMEs. React/Next.js or WordPress from ₹15,000. Studio at Patrakar Colony.",
    primaryKeyword: "website development company in Jaipur",
    secondaryKeywords: [
      "web development company Jaipur Patrakar Colony",
      "jewellery website Jaipur",
      "hotel website Jaipur",
      "business website cost Jaipur",
      "website design Sitapura exporters",
    ],
    outcomeLine:
      "A Jaipur jeweller, hotel, exporter or coaching firm can brief the Patrakar Colony studio in person and leave with a site that names the product the way a buyer in Johari Bazaar or on Google actually searches it.",
    intro: `TheTriFusion (Trifusion Infotech Private Limited) is a website development company in Jaipur. The studio is at ${NAP}. Phone ${PHONE}. Hours: ${HOURS}. This page is for businesses that sit in Jaipur — gems and jewellery, hotels around Amer and C-Scheme, Sitapura and Vishwakarma exporters, hospitals, and coaching — and want a company site, catalogue or lead funnel built here, not a generic “India agency” brochure. Published plans start at ${PRICE.basic} for up to five pages.`,
    sections: [
      {
        title: "What Jaipur businesses actually put on a website",
        body: `Jewellery firms around Johari Bazaar and the Sitapura SEZ need a catalogue that states metal, stone and certification the way a buyer asks — not a stock photo of a ring. Hotels and homestays need rooms, a real address that matches Google Business Profile, and a WhatsApp or call path that reaches the duty manager. Exporters in Vishwakarma and Sitapura need product pages in English, sometimes Hindi, with a GST-ready enquiry. Coaching and colleges want batch facts they can unpublish when the session ends. We will not invent a “Pink City rank” or a tourist-footfall number to pad a homepage.`,
      },
      {
        title: "How a Jaipur kickoff runs from Patrakar Colony",
        body: `You can visit the studio by appointment, Monday to Saturday. Many Jaipur briefs still start on a video call because the owner is on the shop floor. After kickoff, photos, SKUs and copy move on a shared board and WhatsApp. Hindi and English are both fine. Weekly staging demos show the site, not a slide. GST invoices come from this Jaipur company. If you already have a Google Business Profile for the shop or hotel, that NAP stays yours — we do not merge it with ours.`,
      },
      {
        title: "Published website prices in INR",
        body: `These are the starting prices on the pricing page, not a ranking guarantee. Basic ${PRICE.basic} (up to 5 pages, contact form, basic SEO, one month of support). Standard ${PRICE.standard} (up to 10 pages, CMS, payment gateway, analytics, three months). Premium ${PRICE.premium} (unlimited pages, admin, APIs, ecommerce functionality, six months). A jewellery catalogue with hundreds of SKUs, a hotel with live rates, or a bilingual export site is quoted after we see the inventory. Ecommerce storefronts start from ₹25,000 on the ecommerce page.`,
      },
      {
        title: "A Jaipur reference you can open",
        body: `Atharv Narayan Dairy Solutions is a live bilingual dairy-logistics website covering Jaipur and Bhilwara (atharvnarayan.in). DailyConcepts India is a live storefront with POS-style admin (dailyconceptsindia.com). Those URLs are public. They are not a claim that we run jewellery factories or hotels, and they do not come with traffic numbers we have not published.`,
      },
      {
        title: "When to use this page vs the India service page",
        body: `Use this Jaipur city page when the search and the brief are local: a shop in C-Scheme, a factory in Sitapura, a hotel that wants a visit. Use the parent website development service page when the buyer is anywhere in India and wants the full capability write-up, stack comparison and related guides. Both URLs are real pages. We do not 308 this slug into the service page — it is a different query from “web development company Jaipur” which already redirects.`,
      },
    ],
    faqs: [
      officeFaq("Jaipur"),
      {
        question: "Can I visit the studio before we start?",
        answer: `Yes. The office is at ${NAP}. Book a slot Monday to Saturday, 10:00 AM to 7:00 PM IST. Discovery can also be a video call if you cannot leave the shop.`,
      },
      {
        question: "How much does a Jaipur business website cost?",
        answer: `Published plans start at ${PRICE.basic} for up to five pages, ${PRICE.standard} for Standard, and ${PRICE.premium} for Premium. Jewellery catalogues, hotels with booking, and bilingual export sites are scoped after we see pages and photos.`,
      },
      {
        question: "Do you build Hindi sites for Jaipur buyers?",
        answer:
          "Yes. Hindi, English, or both, when copy is provided or scoped. The office works in both languages.",
      },
      gstFaq("Jaipur"),
    ],
    deliverables: [
      "Company, catalogue or hotel site structure",
      "Hindi and English option",
      "WhatsApp and GST-ready enquiry",
      "Titles, sitemap and Search Console at launch",
      "GST invoice from the Jaipur company",
    ],
    audiences: [
      "Jaipur jewellers and gem exporters",
      "Hotels and homestays",
      "Sitapura and VKI manufacturers",
      "Clinics, coaching and local retail",
    ],
    timelineRange:
      "A focused Jaipur marketing site is often 3–8 weeks after photos and an approver are ready. Catalogues and booking take longer.",
    whatsappMessage:
      "Hi TriFusion, I run a Jaipur business and want a website from the Patrakar Colony team.",
    relatedPortfolioIds: ["atharv-narayan-dairy-logistics-website"],
    relatedServiceSlugs: [
      "website-development",
      "digital-marketing",
      "ui-ux-design",
      "branding",
    ],
    relatedSolutionSlugs: siblingCitySlugs("website", "website-development-company-jaipur"),
    relatedLinks: [
      { href: PARENT, label: "Website development company in India (parent page)" },
      {
        href: "/solutions/ecommerce-website-development-jaipur",
        label: "Ecommerce website development in Jaipur",
      },
    ],
    cta: "Get a scoped Jaipur website estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "website-development-company-delhi",
    serviceAreaCity: "Delhi",
    serviceAreaRegion: "Delhi",
    title: "Website Development Company in Delhi NCR | From Jaipur, ₹15,000",
    h1: "Website Development for Delhi NCR — From Our Jaipur Office",
    navLabel: "Delhi NCR websites (from Jaipur)",
    metaDescription:
      "Website development for Delhi, Gurgaon and Noida firms from TheTriFusion in Jaipur. GST-ready company sites from ₹15,000. No Delhi office.",
    primaryKeyword: "website development company in Delhi",
    secondaryKeywords: [
      "website development company Delhi NCR from Jaipur",
      "Gurgaon company website",
      "Noida exporter website",
      "GST-ready business website Delhi",
      "web development Okhla manufacturers",
    ],
    outcomeLine:
      "A Delhi NCR manufacturer, exporter or services firm gets a GST-ready company site from a Jaipur team — without paying metro-agency overhead or pretending we have a Connaught Place storefront.",
    intro: `Delhi NCR is a different brief from Jaipur: GSTN-facing vendors, Okhla and Noida manufacturers, Gurgaon services firms, and exporters who need an English company site that survives a procurement check. TheTriFusion does not have a Delhi office. We are in Jaipur (${NAP}) and take Delhi, Gurgaon and Noida website work by video, WhatsApp and weekly demos. Published plans start at ${PRICE.basic}.`,
    sections: [
      {
        title: "What NCR companies put on a first site",
        body: `Vendors who sell to ministries, PSUs or large NCR buyers usually need a capability page, GST details, and a PDF the procurement team can download — not a tourism slider. Okhla and Noida units want product names that match the invoice, not invented capacity figures. Gurgaon SaaS and services firms want a hiring-safe careers URL and a contact that is not a generic Gmail. We write titles around the product you actually sell in NCR, and we leave “top Delhi agency” slogans off the page.`,
      },
      {
        title: "GST, CIN and what belongs on the footer",
        body: `NCR buyers look at the footer. We put your legal name, GSTIN and a Delhi NCR address that is yours — factory, registered office, or coworking you actually rent. We will not print TheTriFusion at a Delhi PIN. If you file e-invoices, the public site should not contradict the IRP name. A privacy notice and a contact path that reaches accounts, not only sales, is part of a Standard or Premium plan when you ask for it.`,
      },
      {
        title: "Delivery from Jaipur into NCR time",
        body: `Kickoff is a video call on a weekday the NCR office can spare. We can travel for a first workshop when the project needs it; that travel is written in the scope, not implied. Demos are IST, which matches NCR hours. Hindi and English are both fine. Invoices are GST invoices from Jaipur. We will not list a Nehru Place or Cyber City address for this company.`,
      },
      {
        title: "Published prices (same INR as the rest of India)",
        body: `Basic ${PRICE.basic}, Standard ${PRICE.standard}, Premium ${PRICE.premium}. Metro copy, bilingual legal pages, or a careers microsite is extra only when it is in the written scope. Ecommerce for an NCR D2C brand is a different page (ecommerce website development in Delhi).`,
      },
      {
        title: "Parent service and related city pages",
        body: `The India-wide capability write-up is website development. Jaipur HQ, Mumbai, Bangalore and Jodhpur have their own city pages so we do not clone this NCR copy. If your factory is in Rajasthan and only the buyer sits in Delhi, start with the city where the photos and GSTIN live.`,
      },
    ],
    faqs: [
      officeFaq("Delhi"),
      {
        question: "Can you work with a Gurgaon or Noida registered company?",
        answer:
          "Yes. The contract and GST invoice come from Jaipur. Your registered-office address stays on your site and your MCA filings.",
      },
      {
        question: "Will the site mention GST and CIN?",
        answer:
          "If you give the numbers, yes. We do not invent a CIN or a Delhi GSTIN.",
      },
      {
        question: "How much does a Delhi company website cost?",
        answer: `The same published plans as Jaipur: from ${PRICE.basic}. Scope, not the PIN code, changes the number.`,
      },
      gstFaq("Delhi"),
    ],
    deliverables: [
      "Capability and product pages for NCR buyers",
      "Footer with your GSTIN and real NCR address",
      "IST weekly demos from Jaipur",
      "Sitemap and titles",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Okhla and Noida manufacturers",
      "Gurgaon services and SaaS firms",
      "GSTN-facing vendors",
      "NCR exporters",
    ],
    timelineRange:
      "A focused NCR company site is often 3–8 weeks after brand files and an approver are ready.",
    whatsappMessage:
      "Hi TriFusion, I have a Delhi NCR company and want a website scoped from your Jaipur team.",
    relatedServiceSlugs: [
      "website-development",
      "software-development",
      "digital-marketing",
      "business-modernization",
    ],
    relatedSolutionSlugs: siblingCitySlugs("website", "website-development-company-delhi"),
    relatedLinks: [
      { href: PARENT, label: "Website development company in India (parent page)" },
    ],
    cta: "Get a scoped Delhi NCR website estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "website-development-company-mumbai",
    serviceAreaCity: "Mumbai",
    serviceAreaRegion: "Maharashtra",
    title: "Website Development Company in Mumbai | From Jaipur, ₹15,000",
    h1: "Website Development for Mumbai — From Our Jaipur Office",
    navLabel: "Mumbai websites (from Jaipur)",
    metaDescription:
      "Website development for Mumbai D2C brands, trading houses and studios from TheTriFusion in Jaipur. Company sites from ₹15,000. No Mumbai office.",
    primaryKeyword: "website development company in Mumbai",
    secondaryKeywords: [
      "website development Mumbai from Jaipur",
      "D2C brand website Mumbai",
      "Bandra company website",
      "trading house website Maharashtra",
      "film studio website Mumbai",
    ],
    outcomeLine:
      "A Mumbai D2C brand, trading house or production studio gets a fast company site from Jaipur — IST overlap, INR pricing, and no invented Bandra office.",
    intro: `Mumbai briefs we see are D2C labels that ship pan-India, trading and diamond houses, production and media studios, and services firms in BKC or Andheri that need a site a procurement team will open. TheTriFusion is not in Mumbai. The office is ${NAP}. We run Mumbai website projects remotely with weekly demos. Published plans start at ${PRICE.basic}.`,
    sections: [
      {
        title: "D2C, trading, and why a five-page site still matters",
        body: `A Mumbai D2C brand often already has Instagram. The website still has to state legal name, pickup/returns, and a checkout or a “shop” that is not a broken Bio link. Trading houses and diamond dealers want a discreet capability page and an enquiry that is not a public comment thread. Production studios want a showreel page that does not autoplay five 4K files on a phone in a local train. We size the first release to what you will actually update.`,
      },
      {
        title: "Payments, GST and Maharashtra shipping copy",
        body: `If the site sells, Razorpay or UPI and your GSTIN belong in the scope. Shipping copy should name the courier you actually use, not a generic “all India delivery” line copied from a competitor. We do not invent a Mumbai FSSAI or IEC. Those stay on your certificates. Store builds sit on the Mumbai ecommerce city page when the catalogue is the product.`,
      },
      {
        title: "Working around Mumbai office hours from Jaipur",
        body: `Demos are late morning or early afternoon IST so Andheri and BKC teams can join before the commute home. WhatsApp is fine for asset drops. We can fly in for a kickoff when the scope says so. We will not rent a WeWork pin and call it TheTriFusion Mumbai.`,
      },
      {
        title: "INR starting prices",
        body: `Basic ${PRICE.basic}, Standard ${PRICE.standard}, Premium ${PRICE.premium}. A showreel-heavy studio site or a bilingual Marathi/English SME site is quoted after we see the media list. Marathi copy is in scope when you supply it or commission it; we do not machine-translate legal pages.`,
      },
      {
        title: "Parent page",
        body: `Stack, WordPress vs Next.js, and India-wide FAQs live on website development. This page is only the Mumbai service-area write-up.`,
      },
    ],
    faqs: [
      officeFaq("Mumbai"),
      {
        question: "Can you add Marathi to the site?",
        answer:
          "Yes, when copy is provided or scoped. We do not auto-translate legal or jewellery-grade product specs.",
      },
      {
        question: "Do you build D2C brand sites or only company brochures?",
        answer:
          "Both. A brand site with a shop should use the ecommerce Mumbai page if checkout is the job. A brand story plus enquiry can stay on this website brief.",
      },
      {
        question: "How much does a Mumbai company website cost?",
        answer: `Published plans start at ${PRICE.basic}. The city does not add a surcharge; pages, CMS and payments do.`,
      },
      gstFaq("Mumbai"),
    ],
    deliverables: [
      "D2C, trading or studio site structure",
      "Mobile-first media that does not stall on 4G",
      "GST-ready footer with your Maharashtra details",
      "Weekly IST demos",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Mumbai D2C brands",
      "Trading and diamond houses",
      "Production and media studios",
      "BKC and Andheri services firms",
    ],
    timelineRange:
      "A focused Mumbai marketing site is often 3–8 weeks after brand files are in hand.",
    whatsappMessage:
      "Hi TriFusion, I have a Mumbai business and want a website from your Jaipur team.",
    relatedServiceSlugs: [
      "website-development",
      "digital-marketing",
      "branding",
      "ui-ux-design",
    ],
    relatedSolutionSlugs: siblingCitySlugs("website", "website-development-company-mumbai"),
    relatedLinks: [
      { href: PARENT, label: "Website development company in India (parent page)" },
      {
        href: "/solutions/ecommerce-website-development-mumbai",
        label: "Ecommerce website development in Mumbai",
      },
    ],
    cta: "Get a scoped Mumbai website estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "website-development-company-bangalore",
    serviceAreaCity: "Bengaluru",
    serviceAreaRegion: "Karnataka",
    title: "Website Development Company in Bangalore | From Jaipur, ₹15,000",
    h1: "Website Development for Bangalore — From Our Jaipur Office",
    navLabel: "Bangalore websites (from Jaipur)",
    metaDescription:
      "Website development for Bangalore SaaS, product and SME teams from TheTriFusion in Jaipur. Next.js marketing sites from ₹15,000. No Bengaluru office.",
    primaryKeyword: "website development company in Bangalore",
    secondaryKeywords: [
      "website development company Bengaluru from Jaipur",
      "SaaS marketing website Bangalore",
      "startup website Whitefield",
      "Next.js website Koramangala",
      "product company website Karnataka",
    ],
    outcomeLine:
      "A Bangalore SaaS or product team gets a Next.js marketing site from Jaipur — docs-ready IA, IST overlap, INR pricing — without a fake Koramangala address.",
    intro: `Bangalore (Bengaluru) briefs we take are SaaS marketing sites, product-company pages, and SME sites for teams in Whitefield, Koramangala, HSR and Electronic City who want engineering-quality front-end without a local agency retainer. TheTriFusion has no Bangalore office. We work from ${NAP}. Published website plans start at ${PRICE.basic}.`,
    sections: [
      {
        title: "SaaS and product sites, not brochure templates",
        body: `A product site has to explain the job the software does, name the stack honestly, and send a trial or a “talk to sales” into a form you actually read. We structure docs, changelog and careers as separate URLs when you have them — we do not fake a docs subdomain. If the “product” is still a Notion page, we say so and scope a five-page site, not a design system.`,
      },
      {
        title: "Next.js, speed, and what we will not claim",
        body: `Most Bangalore product sites we ship are Next.js because the same team may later add a logged-in app. WordPress is still right when editors must change pages without a deploy. We will not print a Core Web Vitals score we have not measured on your hosting. Titles, sitemap and Search Console are part of launch. Schema matches visible text.`,
      },
      {
        title: "GCC and startup procurement",
        body: `If you sell into a GCC or an Indian enterprise from Bangalore, the site needs legal name, a Karnataka address that is yours, and a security or privacy page that does not contradict the contract. We will not list TheTriFusion in Manyata or Bagmane. Your PIN, your profile.`,
      },
      {
        title: "INR prices, no USD retainers on this page",
        body: `Basic ${PRICE.basic}, Standard ${PRICE.standard}, Premium ${PRICE.premium}. A changelog, docs and careers set is extra only when it is in the scope. Custom software and mobile apps for the same product are separate service pages.`,
      },
      {
        title: "Parent service",
        body: `WordPress vs Next.js vs Shopify, and India FAQs, live on website development. This page is the Bangalore service-area copy.`,
      },
    ],
    faqs: [
      officeFaq("Bangalore"),
      {
        question: "Do you only build Next.js sites for Bangalore startups?",
        answer:
          "No. Next.js when the site is a product or needs tight SEO. WordPress when editors must publish without a developer. Shopify lives on the ecommerce Bangalore page.",
      },
      {
        question: "Can you match our existing design system?",
        answer:
          "Yes, when you share Figma or CSS tokens. Design-only work is UI/UX. This page is the build.",
      },
      {
        question: "How much does a Bangalore marketing website cost?",
        answer: `Published plans start at ${PRICE.basic}. Docs, changelog and auth are scoped separately.`,
      },
      gstFaq("Bangalore"),
    ],
    deliverables: [
      "SaaS or SME marketing IA",
      "Next.js or WordPress, chosen in the scope",
      "Titles, sitemap, Search Console",
      "IST weekly demos",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Bangalore SaaS and product teams",
      "SME sites in Whitefield and HSR",
      "GCC vendors who need a clean company URL",
      "Founders who want INR pricing with IST overlap",
    ],
    timelineRange:
      "A focused Bangalore marketing site is often 3–8 weeks after copy and product facts are ready.",
    whatsappMessage:
      "Hi TriFusion, I have a Bangalore product/SME and want a website from your Jaipur team.",
    relatedServiceSlugs: [
      "website-development",
      "software-development",
      "ui-ux-design",
      "ai-development",
    ],
    relatedSolutionSlugs: siblingCitySlugs(
      "website",
      "website-development-company-bangalore"
    ),
    relatedLinks: [
      { href: PARENT, label: "Website development company in India (parent page)" },
    ],
    cta: "Get a scoped Bangalore website estimate",
    updatedAt: UPDATED,
  },
  {
    slug: "website-development-company-jodhpur",
    serviceAreaCity: "Jodhpur",
    serviceAreaRegion: "Rajasthan",
    title: "Website Development Company in Jodhpur | From Jaipur, ₹15,000",
    h1: "Website Development for Jodhpur — From Our Jaipur Office",
    navLabel: "Jodhpur websites (from Jaipur)",
    metaDescription:
      "Website development for Jodhpur handicraft exporters, hotels and solar firms from TheTriFusion in Jaipur. Catalogues from ₹15,000. No Jodhpur office.",
    primaryKeyword: "website development company in Jodhpur",
    secondaryKeywords: [
      "handicraft website Jodhpur",
      "hotel website Jodhpur from Jaipur",
      "solar EPC website Jodhpur",
      "blue pottery catalogue Jodhpur",
      "IT services Jodhpur Rajasthan",
    ],
    outcomeLine:
      "A Jodhpur handicraft exporter, heritage hotel or solar EPC gets a catalogue or booking site from Jaipur — travel when needed, no fake Sojati Gate office.",
    intro: `Jodhpur’s public economy is handicrafts and furniture export, heritage hotels around the fort, sandstone, and a growing solar and defence-adjacent supplier base. TheTriFusion does not have a Jodhpur office. We are two cities away in Jaipur (${NAP}) and take Jodhpur website work by video, with travel when a photoshoot or launch needs to be on site. Published plans start at ${PRICE.basic}.`,
    sections: [
      {
        title: "Handicraft and furniture catalogues",
        body: `Exporters of furniture, metalware and textiles need SKU photos, wood or metal called out, and a wholesale enquiry — not a tourism landing page with a “add to cart” on a piece you only make to order. We structure made-to-order vs stock so a US or Delhi buyer does not see a checkout you cannot honour. Blue pottery and smaller craft units get a shorter catalogue plus WhatsApp. We do not invent an export turnover.`,
      },
      {
        title: "Hotels, homestays, and Mehrangarh-adjacent stays",
        body: `A Jodhpur stay site needs rooms, a real address, and photos of that property. We will not borrow a competitor’s rooftop shot. Booking can be a form, WhatsApp, or a provider you already pay for — we do not force a PMS. Peak wedding and tourist dates should be copy you can edit, not hardcoded in a template.`,
      },
      {
        title: "Solar, sandstone, and defence-adjacent suppliers",
        body: `Solar EPCs and sandstone yards want a capability page, project photos you own, and a tender or dealer enquiry. Defence-adjacent suppliers get a discreet site: no invented empanelment, no copied BIS licence. If you cannot show the certificate, the page does not claim it.`,
      },
      {
        title: "Jaipur delivery for a Jodhpur brief",
        body: `Kickoff is usually video; we can drive from Jaipur for a first workshop or a product shoot when the scope includes it. Hindi and English are both fine. GST invoices come from Jaipur. We will not list a Jodhpur PIN for TheTriFusion. Your factory or haveli keeps its own Google profile.`,
      },
      {
        title: "Prices and parent page",
        body: `Basic ${PRICE.basic}, Standard ${PRICE.standard}, Premium ${PRICE.premium}. The India-wide stack write-up is on website development. Udaipur hotels and Bhilwara mills have their own city pages so this Jodhpur copy stays about handicrafts, stays and solar.`,
      },
    ],
    faqs: [
      officeFaq("Jodhpur"),
      {
        question: "Can you photograph our Jodhpur workshop?",
        answer:
          "When the scope includes a visit, yes. Otherwise you share photos and we will not replace them with stock interiors.",
      },
      {
        question: "Do you build export catalogues in English only?",
        answer:
          "English is the default for export. Hindi can sit beside it. We do not invent HS codes or shipping rates.",
      },
      {
        question: "How much does a Jodhpur business website cost?",
        answer: `Published plans start at ${PRICE.basic}. Large furniture catalogues and booking engines are scoped after we see SKUs.`,
      },
      gstFaq("Jodhpur"),
    ],
    deliverables: [
      "Handicraft, hotel or capability catalogue",
      "Wholesale or booking enquiry",
      "Hindi and English option",
      "Optional Jaipur–Jodhpur visit when scoped",
      "GST invoice from Jaipur",
    ],
    audiences: [
      "Handicraft and furniture exporters",
      "Heritage hotels and homestays",
      "Solar EPCs and sandstone yards",
      "Jodhpur SMEs who want a Jaipur team",
    ],
    timelineRange:
      "A Jodhpur catalogue or stay site is often a few weeks after photos and an approver are ready.",
    whatsappMessage:
      "Hi TriFusion, I have a Jodhpur business and want a website from your Jaipur team.",
    relatedServiceSlugs: [
      "website-development",
      "digital-marketing",
      "ui-ux-design",
      "branding",
    ],
    relatedSolutionSlugs: siblingCitySlugs("website", "website-development-company-jodhpur"),
    relatedLinks: [
      { href: PARENT, label: "Website development company in India (parent page)" },
    ],
    cta: "Get a scoped Jodhpur website estimate",
    updatedAt: UPDATED,
  },
];
