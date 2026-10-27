import { NAP_LINE, SOURCES } from "./servicePlan/_shared";

export const FINTECH_HUB_PATH = "/services/fintech-app-development";

/**
 * Dedicated BBPS / AEPS / DMT / recharge pages. Prices are the published
 * fintech Basic / Standard / Premium plans (₹99,999 / ₹1,99,999 / ₹3,99,999)
 * — not invented module SKUs. No fabricated transaction volumes, client
 * counts, reviews, licences, or certifications.
 */
export const fintechProductPages = [
  {
    slug: "bbps-software",
    path: `${FINTECH_HUB_PATH}/bbps-software`,
    breadcrumbName: "BBPS software",
    contentUpdatedAt: "2026-10-27",
    metaTitle: "BBPS Software Provider India | White-Label Bharat BillPay",
    h1: "BBPS software for retailers and distributors in India",
    metaDescription:
      "White-label BBPS (Bharat BillPay) software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring BBPOU/NPCI access; we build the panels.",
    keywords:
      "BBPS software provider India, Bharat BillPay software, white label BBPS, bill payment software Jaipur",
    serviceType: "BBPS software development",
    answer:
      "BBPS (Bharat BillPay) is an NPCI product for collecting biller payments through a common rail. TheTriFusion builds white-label BBPS software from Jaipur — retailer app, distributor panel and admin — so operators can brand the bill-pay stack their network already knows. You arrange BBPOU or aggregator access on Bharat BillPay; we do not issue NPCI permissions or act as a BBPOU. Published fintech plans start at ₹99,999, with Standard at ₹1,99,999 and Premium at ₹3,99,999. BBPOU fees, biller settlement and complaint SLAs stay with your partner. Read the product overview on [NPCI Bharat BillPay](" +
      SOURCES.npciBbps +
      ").",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "BBPOU / NPCI Bharat BillPay access" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What BBPS software actually does",
        paragraphs: [
          "Bharat BillPay is the NPCI bill-payment system. Software on top of it lets a retailer fetch a bill, collect payment for electricity, water, gas, broadband, education and other enrolled billers, and push the receipt back through the BBPOU you contracted. The biller catalogue, fetch/pay APIs, settlement windows and complaint handling follow that BBPOU — not a marketing page on this site. TheTriFusion’s job is the branded retailer flow, the distributor hierarchy that funds wallets, and the admin that reconciles attempts against partner reports.",
          `Product overview for operators who need the primary source: [NPCI Bharat BillPay](${SOURCES.npciBbps}). For circulars that sit next to bill pay, start at [NPCI](${SOURCES.npci}) and [RBI](${SOURCES.rbi}). We cite those pages so you can check rules yourself; we do not paraphrase them into a fake licence claim.`,
        ],
      },
      {
        heading: "BBPS is a different rail from AEPS, DMT and recharge",
        paragraphs: [
          "BBPS is bill fetch and pay against enrolled billers. [AEPS software](/services/fintech-app-development/aeps-software) is Aadhaar-authenticated cash services on a sponsor bank’s AePS stack and usually needs a certified biometric device at the counter. [DMT software](/services/fintech-app-development/dmt-software) moves money to a beneficiary account through a bank or aggregator contract — send-money, not bill settlement. [Recharge software](/services/fintech-app-development/recharge-software) tops up prepaid mobile and DTH through a recharge API partner; denominations and operator lists live on that partner, not on BBPS.",
          "Many operators run all four on one retailer app. That is a product decision in the locked brief, not proof that the rails are the same. Each module still needs its own partner access. Merging them into one invented product name on a brochure does not change who settles the money.",
        ],
      },
      {
        heading: "What you must already have before we code BBPS",
        paragraphs: [
          "A BBPOU (Bharat Bill Payment Operating Unit) relationship, or an aggregator that already sits on BBPS and will give you API credentials, sandbox docs and production cut-over steps. You also need a clear view of which biller categories you will offer on day one, who owns customer complaints, and how retailer wallets get funded from distributor stock. KYC and onboarding policy for your retailer network is your compliance work; we model roles and checks the brief names, we do not invent a regulator-approved KYC product.",
          "We integrate the APIs that partner documents describe. We do not onboard you to NPCI, we do not apply for BBPOU status on your behalf, and we do not sell “BBPS licence in seven days.” If you are still choosing a partner, finish that commercial conversation first — software against a missing credential is wasted scope.",
        ],
      },
      {
        heading: "Retailer app, distributor panel and admin we build",
        paragraphs: [
          "The retailer app is where the shopkeeper searches a biller, fetches the outstanding amount, takes payment and prints or shares a receipt. Screens stay simple: category, consumer number, amount confirmation, status. Offline-friendly retries and clear failure codes matter more than decorative charts. When the same app also hosts AEPS, DMT or recharge, BBPS keeps its own menu and wallet rules so a failed bill pay does not look like a failed Aadhaar withdrawal.",
          "The distributor and master-distributor panels fund retailers, set commission slabs the operator defines, and pull downline reports. Admin owns user hierarchy, biller enablement flags your partner allows, ledger views, complaint ticket status when the API exposes it, and export for finance. Branding — logo, colours, domain — sits in the white-label package scoped under [fintech app development](/services/fintech-app-development).",
        ],
      },
      {
        heading: "Ops workflow unique to Bharat BillPay",
        paragraphs: [
          "A typical BBPS day is fetch → pay → reconcile. Fetch failures (wrong consumer id, biller downtime) are different from pay failures (wallet short, partner timeout). Your ops team needs reports that separate those, plus a path to raise complaints through the BBPOU channel your contract names. Settlement is usually T+N as the partner defines; the software shows attempts and partner reference ids so finance can match bank statements without guessing.",
          "Complaint handling is a BBPS-specific muscle. Billers and BBPOUs have their own dispute windows. We surface status fields the API returns; we do not invent a parallel ombudsman inside the admin. Train retailers to capture consumer numbers and receipt ids — those ids are how your BBPOU investigates, not a screenshot of a pretty UI.",
        ],
      },
      {
        heading: "Mobile delivery for retailer counters",
        paragraphs: [
          "Most BBPS volume at kirana and CSC-style counters runs on Android. We ship the retailer experience as part of the fintech stack and can align with [Android app development](/services/android-app-development) and [mobile app development](/services/mobile-app-development) when you want a dedicated store listing, push for failure alerts, or a companion build for distributors. Web admin stays browser-based for finance and support.",
          "If BBPS is one slice of a larger custom product — CRM for onboarding retailers, inventory, or a network that also runs multilevel payouts — see [software development](/services/software-development) and [MLM CRM development](/services/mlm-crm-development). Wallet trees and compensation plans are separate scopes; we do not pretend a bill-pay module is an MLM engine.",
        ],
      },
      {
        heading: "Published pricing — no invented BBPS SKU",
        paragraphs: [
          "Published plans on [fintech app development](/services/fintech-app-development) and [pricing](/pricing): Basic ₹99,999, Standard ₹1,99,999, Premium ₹3,99,999. Those figures are software build packages for the white-label retailer / distributor / admin stack. BBPOU or aggregator commercial terms, per-transaction charges, device costs and cloud hosting are separate and come from your partners — we do not publish a fake per-bill rate on this site.",
          "Scope inside a plan is locked in a written brief: which modules (BBPS alone or with siblings), role depth, branding, and environments. If you need only API wiring into an existing UI, say so early; that is a different engagement shape than a full white-label app. Request a scoped estimate from [contact](/contact) with partner name, sandbox access timeline and target go-live.",
        ],
      },
      {
        heading: "How a Jaipur BBPS project typically runs",
        paragraphs: [
          "We start with partner API docs, sandbox keys and a one-page map of roles. Then wire fetch/pay in a staging build, demo the retailer happy path and the failure path, connect distributor funding, and harden admin reports. Go-live waits on your BBPOU production credentials and checklist — software can be ready while partner onboarding is still open; we do not control that clock.",
          "After launch we can stay on for change requests: new biller categories your partner enables, commission rule tweaks, export formats finance asks for. We do not promise uptime SLAs that belong to NPCI or the BBPOU. Honest support means fixing our panels and helping you read partner error codes — not claiming we “guarantee BBPS availability.”",
        ],
      },
      {
        heading: "What we will not claim on a BBPS page",
        paragraphs: [
          "No invented client logos, star ratings, daily transaction volumes or “approved by NPCI” badges. TheTriFusion is a software studio in Jaipur; approval language belongs to NPCI, BBPOUs and banks. No fabricated certifications or VAPT seals — encryption, audit logs and a VAPT scope can be written into the contract when you ask; printing a fake certificate is not part of delivery.",
          "If a vendor promises BBPS access bundled with software as if they were the same product, treat that as a commercial claim you must verify with the BBPOU. Our contract line is clear: you bring access, we build software. That split keeps scope honest when something fails in production.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is BBPS software?",
        answer:
          "Software for retailers and distributors to offer Bharat BillPay (BBPS) bill payments — fetch bill, collect payment, show receipt and reconcile. BBPS is an NPCI product. The operator needs BBPOU or aggregator access; TheTriFusion builds the branded panels from Jaipur.",
      },
      {
        question: "How much does white-label BBPS software cost?",
        answer:
          "Published fintech plans are ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium). BBPOU or aggregator fees are separate. There is no invented BBPS-only price list beyond those plans.",
      },
      {
        question: "Do you provide BBPS or NPCI access?",
        answer:
          "No. Only software. You bring the BBPOU or aggregator API. Read NPCI primary pages for product rules; we are not a licence bureau.",
      },
      {
        question: "How is BBPS different from recharge software?",
        answer:
          "BBPS is bill fetch/pay on Bharat BillPay for enrolled billers. Recharge software tops up prepaid mobile and DTH through a recharge API partner. Some utility bills belong on BBPS; prepaid top-ups usually do not. The locked brief says which rail each SKU uses.",
      },
      {
        question: "Can BBPS sit on the same retailer app as AEPS or DMT?",
        answer:
          "Yes when those modules are in the same locked brief. Each still needs its own partner access. See AEPS software, DMT software and recharge software under fintech app development.",
      },
      {
        question: "Who handles BBPS customer complaints?",
        answer:
          "Complaint paths follow your BBPOU contract. The software can show partner status and reference ids; it does not replace the BBPOU complaint channel.",
      },
      {
        question: "Do you hard-code a public biller list?",
        answer:
          "No. Biller catalogues come from the BBPOU or aggregator API and change over time. Hard-coding a public roster on a marketing site goes stale and misleads retailers.",
      },
      {
        question: "Where is TheTriFusion based?",
        answer:
          "Jaipur, Rajasthan. Delivery is remote with demos for operators across India. Share partner docs and a target date on the contact page to start a scoped estimate.",
      },
      {
        question: "Is BBPS the same as UPI?",
        answer:
          "No. UPI is a different NPCI product for account-to-account payments. BBPS is bill payment. They can share a retailer app if scoped; they are not interchangeable rails.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software development", text: "Aadhaar-enabled payments on the same retailer stack." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software development", text: "Domestic money transfer for the retailer network." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software development", text: "Mobile and DTH recharge on the partner you contract." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
      { href: "/services/software-development", title: "Custom software development", text: "When bill pay sits inside a broader ops product." },
      { href: "/pricing", title: "Pricing", text: "Published Basic, Standard and Premium fintech plans." },
      { href: "/contact", title: "Contact", text: "Send partner docs and ask for a scoped BBPS estimate." },
    ],
  },
  {
    slug: "aeps-software",
    path: `${FINTECH_HUB_PATH}/aeps-software`,
    breadcrumbName: "AEPS software",
    contentUpdatedAt: "2026-10-27",
    metaTitle: "AEPS Software India | White-Label AePS Retailer App",
    h1: "AEPS software for Aadhaar-enabled payments in India",
    metaDescription:
      "White-label AEPS (AePS) software from Jaipur: retailer app, biometric flow and admin. From ₹99,999. You bring sponsor-bank / NPCI AePS access; we build the software.",
    keywords:
      "AEPS software India, AePS software provider, Aadhaar enabled payment software, white label AEPS Jaipur",
    serviceType: "AEPS software development",
    answer:
      "AePS (Aadhaar Enabled Payment System) is an NPCI product that lets a retailer offer Aadhaar-authenticated banking services when a sponsor bank relationship exists. TheTriFusion builds white-label AEPS software from Jaipur: retailer app with biometric capture against devices your sponsor bank already certifies, distributor panel and admin. You arrange sponsor-bank / NPCI AePS access and the device vendor list that bank accepts. We do not certify biometric devices, issue bank permissions or print a fake micro-ATM licence. Published fintech plans start at ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium).",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Sponsor bank / NPCI AePS access + certified devices" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What AEPS software actually does",
        paragraphs: [
          "AePS lets an authorised retailer authenticate a customer with Aadhaar biometrics and offer cash withdrawal, balance enquiry, mini statement and related services the sponsor bank enables. The software is the retailer flow, role hierarchy, wallet or settlement views and reports. Authentication rules, daily limits and allowed service codes follow the bank and NPCI — not a slogan on this page. TheTriFusion implements panels against the APIs and device SDKs your partner documents.",
          `Primary product page: [NPCI AePS](${SOURCES.npciAeps}). Keep [NPCI](${SOURCES.npci}) and [RBI](${SOURCES.rbi}) bookmarked for circulars. We link them so you can verify; we do not rewrite regulator text into a software brochure claim.`,
        ],
      },
      {
        heading: "Why AEPS is not BBPS, DMT or recharge",
        paragraphs: [
          "AEPS is biometric, Aadhaar-linked banking at a physical counter. [BBPS software](/services/fintech-app-development/bbps-software) collects biller payments through Bharat BillPay with no fingerprint sensor requirement. [DMT software](/services/fintech-app-development/dmt-software) sends money to a beneficiary account using sender KYC and partner limits — typically OTP or partner auth, not AePS biometric. [Recharge software](/services/fintech-app-development/recharge-software) posts prepaid top-ups; it does not touch Aadhaar authentication.",
          "Hardware is the obvious tell: AEPS needs a bank-accepted biometric device (fingerprint or iris as the partner lists). BBPS and recharge can run on a phone alone. DMT needs strong sender/beneficiary controls but not the AePS device stack. Treating all four as “same app, same risk” is how operators buy the wrong partner contract.",
        ],
      },
      {
        heading: "Devices, SDKs and what we will not invent",
        paragraphs: [
          "We integrate biometric devices your AEPS partner already lists — RD services, device SDKs and capture flows as their docs describe. We do not publish a public device roster that pretends every sensor works with every bank. If your sponsor bank changes the approved list, the integration brief updates; marketing pages should not freeze a device brand list that will go stale.",
          "Encryption in transit, audit logs of capture attempts (without storing biometrics beyond what the partner flow allows) and a VAPT scope can be written into the contract. We do not print a fake audit certificate or “CERT-In approved” badge. For current biometric and fraud circulars, read NPCI and RBI primary pages — and [CERT-In](" +
            SOURCES.certIn +
            ") when your security team needs the incident-reporting side.",
        ],
      },
      {
        heading: "Partner types for AePS — sponsor bank first",
        paragraphs: [
          "AePS access usually means a sponsor bank (or an aggregator that sits on that bank’s AePS programme). Your commercial paper with them defines merchant onboarding, device rules, settlement and chargebacks. TheTriFusion is not that bank. We build after credentials and sandbox exist. If you only have a verbal promise of “API soon,” wait — AEPS UIs without a live capture path are demos, not products.",
          "Distributor networks for AEPS care about device logistics as much as wallet top-up: who ships sensors, who trains the retailer on finger placement, who replaces a failed RD service install. Software can show device health flags when the SDK exposes them; it cannot replace field training. Plan ops staffing before you scale retailer count.",
        ],
      },
      {
        heading: "Retailer biometric flow and admin controls",
        paragraphs: [
          "The retailer screen sequence is deliberate: identify the service (cash withdrawal, balance, etc.), capture Aadhaar number as the partner requires, drive the device capture, show bank response, dispense cash or show balance, print or share acknowledgement. Timeout and “finger not detected” states need plain Hindi/English copy — not a spinner that hides the partner error. Admin should let support look up reference ids without exposing raw biometric templates.",
          "Role hierarchy mirrors other fintech modules — retailer, distributor, master, admin — but AEPS reports emphasise successful vs failed biometric attempts, bank decline codes and device-linked terminals. Fraud controls your bank mandates (velocity checks, night blocks) belong in the brief when the API supports them; we do not invent a proprietary “AI fraud engine” claim.",
        ],
      },
      {
        heading: "Ops workflow that only AEPS has",
        paragraphs: [
          "Morning checklist: device connected, RD service running, retailer logged in, float or settlement mode understood. Mid-day: handle declines (biometric mismatch, bank limit, Aadhaar lock) without blaming the app when the bank said no. End of day: cash reconciliation against successful withdrawal list — AEPS cash-out means physical cash left the drawer; BBPS and recharge do not create that cash risk the same way.",
          "Incident response differs too. A suspected compromise of a terminal is a bank and device-vendor conversation, not only a password reset in admin. Document who your partner wants called. We can add admin notes and lock flags; we cannot run the bank’s fraud desk.",
        ],
      },
      {
        heading: "Building AEPS into Android retailer apps",
        paragraphs: [
          "AePS retailer apps are almost always Android-first because device SDKs and USB/OTG or Bluetooth sensors land there. Our [Android app development](/services/android-app-development) and [mobile app development](/services/mobile-app-development) work sits next to the fintech brief when you need Play Store packaging, versioned APKs for distributors, or tablet layouts for busy counters. iOS is rarely the primary AePS counter device; say so if your network is an exception.",
          "When AEPS is one module beside CRM onboarding or multilevel wallets, pair this page with [software development](/services/software-development) and [MLM CRM development](/services/mlm-crm-development). Keep Aadhaar flows isolated in UX and logging from marketing CRM data — different sensitivity, different access lists.",
        ],
      },
      {
        heading: "Published AEPS software pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Bank, device vendor and aggregator fees are separate. We do not publish a per-withdrawal software royalty or invent a “device included” bundle price unless a specific hardware SKU is separately contracted — and device retail is normally your vendor’s invoice, not ours.",
          "Basic often covers a starting retailer app + admin slice; Standard deepens distributor layers and modules; Premium is the broader white-label stack. Exact inclusions are written per project. Bring sponsor-bank docs to [contact](/contact) for a scoped estimate — not a phone number scraped from a competitor ad.",
        ],
      },
      {
        heading: "Honest limits of a Jaipur software studio on AePS",
        paragraphs: [
          "We will not claim we are an NPCI member, a sponsor bank or a biometric OEM. We will not invent transaction volumes or “X lakh AePS merchants live.” Live demos, when available, are labelled as demos — not as your production bank certification. Go-live timing splits into software readiness (our clock after a locked brief) and bank/device onboarding (their clock).",
          "If you need the hub view of BBPS, AEPS, DMT and recharge together, use [fintech app development](/services/fintech-app-development). Sibling pages stay separate so searchers who need biometric cash services do not get a bill-pay essay by mistake.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is AEPS software?",
        answer:
          "Software for retailers to offer Aadhaar-enabled payments (AePS): biometric capture, bank response and admin reports. AePS is an NPCI product. The operator needs a sponsor bank; TheTriFusion builds the panels.",
      },
      {
        question: "Which AEPS biometric devices are supported?",
        answer:
          "Devices your AEPS partner already certifies. We integrate what that partner lists; we do not invent a public device roster on this site.",
      },
      {
        question: "How much does white-label AEPS software cost?",
        answer:
          "Published fintech plans are ₹99,999, ₹1,99,999 and ₹3,99,999. Bank, aggregator and device-vendor fees are separate.",
      },
      {
        question: "Do you provide the AEPS API or a licence?",
        answer:
          "Only software. You bring the sponsor bank or aggregator. We are not a licence bureau. Read RBI and NPCI primary sites for operator obligations.",
      },
      {
        question: "Why does AEPS need hardware when BBPS does not?",
        answer:
          "AePS authenticates with Aadhaar biometrics at the counter, so a bank-accepted sensor is required. BBPS bill pay does not use that biometric rail.",
      },
      {
        question: "Can AEPS and DMT share one retailer login?",
        answer:
          "Yes when the brief says so. Keep menus and limit rules separate so a cash withdrawal is not confused with a send-money transaction in reports.",
      },
      {
        question: "Do you store fingerprints in your database?",
        answer:
          "Capture follows the partner RD/SDK flow. We do not design a side store of biometric templates for marketing analytics. Exact retention follows partner and law — scoped in the contract, not in a slogan.",
      },
      {
        question: "How long before AEPS can go live?",
        answer:
          "Software can be weeks after a locked brief and sandbox access. Bank onboarding, device procurement and retailer training run on separate clocks we do not control.",
      },
      {
        question: "Is micro-ATM the same as AEPS software?",
        answer:
          "People use the words loosely. We build software against the AePS services your sponsor bank enables. We do not sell a vague “micro-ATM licence” product.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software development", text: "Bharat BillPay on the same retailer hierarchy." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software development", text: "Domestic money transfer for the retailer network." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software development", text: "Mobile and DTH recharge modules." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
      { href: "/services/android-app-development", title: "Android app development", text: "Android packaging for device-linked retailer apps." },
      { href: "/pricing", title: "Pricing", text: "Published Basic, Standard and Premium plans." },
      { href: "/contact", title: "Contact", text: "Share sponsor-bank docs for a scoped estimate." },
    ],
  },
  {
    slug: "dmt-software",
    path: `${FINTECH_HUB_PATH}/dmt-software`,
    breadcrumbName: "DMT software",
    contentUpdatedAt: "2026-10-27",
    metaTitle: "DMT Software India | White-Label Domestic Money Transfer",
    h1: "DMT and XDMT software for retailer networks in India",
    metaDescription:
      "White-label DMT / XDMT software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring the bank or aggregator contract; we build the software.",
    keywords:
      "DMT software India, XDMT software, domestic money transfer software, white label DMT Jaipur",
    serviceType: "DMT software development",
    answer:
      "DMT (domestic money transfer) and XDMT sit on the bank or aggregator you contract — they are not an NPCI-branded product in the same way Bharat BillPay and AePS are. TheTriFusion builds white-label DMT software from Jaipur: retailer send-money flow, beneficiary handling, distributor panel and admin. You bring the partner that moves the funds and sets KYC and limits. Published fintech plans start at ₹99,999, with Standard ₹1,99,999 and Premium ₹3,99,999. We do not issue RBI licences and we do not invent a per-transaction payout rate on this page.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Bank or aggregator DMT contract" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What DMT software actually does",
        paragraphs: [
          "The retailer collects a send-money request: sender details as the partner requires, beneficiary account or the partner’s beneficiary model, amount and charges. The partner rail moves the funds; the admin shows wallets, limits, success and failure codes and settlement views. Limits, KYC tiers, beneficiary caps and cooling periods are the partner’s rules. We implement the panels against those APIs and make failures readable for a shopkeeper who is not a banker.",
          `For payment-system circulars and PPI or remittance context that may apply to your model, start at [RBI](${SOURCES.rbi}) and [NPCI](${SOURCES.npci}). Reading primary sources beats trusting a software vendor’s paraphrase of “licence included.”`,
        ],
      },
      {
        heading: "DMT vs BBPS vs AEPS vs recharge — different jobs",
        paragraphs: [
          "[BBPS software](/services/fintech-app-development/bbps-software) pays enrolled billers after a bill fetch — the money settles a bill, not an arbitrary beneficiary. [AEPS software](/services/fintech-app-development/aeps-software) is Aadhaar biometric banking at the counter with certified devices. [Recharge software](/services/fintech-app-development/recharge-software) buys prepaid airtime or DTH packs. DMT is person-to-account (or partner-defined) domestic transfer for customers who use a retailer as the channel.",
          "Partner type differs too: BBPS needs BBPOU access; AEPS needs sponsor-bank AePS; recharge needs a top-up aggregator; DMT needs a bank or money-transfer aggregator contract with its own KYC stack. One white-label app can host all four menus; four contracts still sit behind them.",
        ],
      },
      {
        heading: "Sender KYC, beneficiaries and limit engines",
        paragraphs: [
          "DMT UIs spend more time on sender onboarding and beneficiary management than BBPS screens do. Expect OTP or partner auth steps, beneficiary account verification where the API offers it, and hard stops when monthly caps hit. The software should show remaining limit when the partner returns it — inventing a local limit that disagrees with the rail creates support nightmares.",
          "XDMT naming varies by partner marketing. We treat XDMT as whatever that partner’s API documents — often an extended or alternate domestic transfer product on the same commercial relationship. We do not invent a separate “XDMT licence SKU” on TheTriFusion pricing. If both DMT and XDMT endpoints exist, the locked brief lists which buttons call which API.",
        ],
      },
      {
        heading: "Retailer send-money flow we build",
        paragraphs: [
          "Happy path: identify or register sender → add or pick beneficiary → enter amount → show charge breakup the partner returns → confirm → display reference id. Unhappy path matters more in production: insufficient wallet, beneficiary rejected, bank downtime, duplicate submit. Idempotent retries and clear “do not take cash again” states protect the retailer when the network blips.",
          "Distributor panels fund retailer wallets used for DMT float. Admin reconciles partner settlement files against internal ledgers. Commission can be slab-based on amount tiers the operator configures — configuration, not a hidden rate we market as guaranteed income. No page on this site publishes fake “earn ₹X per remittance” claims.",
        ],
      },
      {
        heading: "Ops workflow for domestic money transfer desks",
        paragraphs: [
          "DMT ops watch float continuously: a retailer out of wallet cannot send, and customers waiting with cash create shop-floor conflict. Escalation paths for stuck transactions (debited locally, pending at partner) need a playbook with partner support contacts. End-of-day is ledger match, not cash-in-drawer count the way AEPS cash-out is.",
          "Fraud patterns differ from bill pay: mule accounts, rapid beneficiary churn, sender sharing. Your partner may mandate velocity rules; we implement what the API and brief allow. We do not sell a mythical AI that replaces partner monitoring. Train retailers to refuse incomplete KYC instead of “helping” with someone else’s Aadhaar on a DMT form — that is an operator policy issue, not a CSS fix.",
        ],
      },
      {
        heading: "Where DMT sits in the wider product map",
        paragraphs: [
          "Networks that already run multilevel marketing or distributor trees often want DMT wallets next to payout logic. That is two products glued carefully: see [MLM CRM development](/services/mlm-crm-development) for compensation trees and [software development](/services/software-development) for custom glue. Do not assume an MLM CRM “includes DMT licence” — it does not.",
          "Field apps for retailers lean Android; distributors may prefer web. [Mobile app development](/services/mobile-app-development) and [Android app development](/services/android-app-development) cover store builds when the fintech brief needs them. The hub for module mix remains [fintech app development](/services/fintech-app-development).",
        ],
      },
      {
        heading: "Published DMT software pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Partner fees, IMPS/NEFT costs the bank charges, and SMS OTP fees are separate. No invented per-transaction software royalty is published here.",
          "Tell us in [contact](/contact) whether you need DMT only, DMT+XDMT, or DMT beside BBPS/AEPS/recharge. Module count changes the brief more than a marketing adjective does. We return a written range against a locked list of screens and APIs — not a fake one-price “unlimited remittance platform.”",
        ],
      },
      {
        heading: "Licences: what we say and what we refuse to say",
        paragraphs: [
          "Operators need the relationships and registrations RBI requires for their model. TheTriFusion is a Jaipur software studio. We are not a licence bureau, we do not file your applications, and we do not sell “RBI approval” as a line item. If a salesperson bundles software with a promised licence, verify that promise with counsel and the regulator’s primary site — not with our repo.",
          "NAP for visits and calls: " +
            NAP_LINE +
            ". Bring partner contract summaries (redact secrets) when you want a serious estimate. Sandbox keys should travel through agreed channels, not WhatsApp forwards to unknown numbers.",
        ],
      },
      {
        heading: "Delivery rhythm from brief to production",
        paragraphs: [
          "Week-one work is usually API mapping: auth, sender, beneficiary, transfer, status poll, callback. Then UI states, wallet funding, and admin exports. UAT uses partner sandbox amounts. Production cut-over waits on their go-live checklist. We keep a failure log format finance can read without opening a developer laptop.",
          "After go-live, expect partner API version changes. Budget a maintenance conversation; payment rails evolve. We can retain for upgrades under a support agreement — we do not claim eternal compatibility without updates.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is DMT software?",
        answer:
          "Software for a retailer network to offer domestic money transfer. The rail is the bank or aggregator you contract. We build the retailer, distributor and admin panels from Jaipur.",
      },
      {
        question: "Is a licence required to run DMT?",
        answer:
          "Operators need the relationships and registrations RBI requires for their model. We are not a licence bureau. Read circulars on the RBI site before you sell remittance to the public.",
      },
      {
        question: "How much does DMT software cost?",
        answer:
          "Published fintech plans are ₹99,999, ₹1,99,999 and ₹3,99,999. Bank or aggregator fees are separate. No invented per-transaction rate is listed here.",
      },
      {
        question: "Can DMT and XDMT share one admin?",
        answer:
          "Yes when the partner APIs and the locked brief say so. We do not invent XDMT as a separate TheTriFusion SKU with its own fake price.",
      },
      {
        question: "How is DMT different from AEPS cash withdrawal?",
        answer:
          "DMT sends funds to a beneficiary through a transfer partner. AEPS cash withdrawal authenticates with Aadhaar biometrics and dispenses cash under AePS rules. Different rails, devices and risk.",
      },
      {
        question: "Do you provide the DMT API?",
        answer:
          "By default you bring the bank or aggregator API. We integrate what the contract names. We do not quietly resell a hidden rail as if it were ours.",
      },
      {
        question: "What happens when a transfer is pending?",
        answer:
          "The UI should show partner status and reference ids, and block blind double-submit. Ops follow the partner’s pending playbook. Software cannot force a bank to complete a delayed credit.",
      },
      {
        question: "Can DMT sit next to an MLM payout wallet?",
        answer:
          "Only with a clear brief separating remittance compliance from compensation trees. See MLM CRM development for trees; keep DMT partner rules intact.",
      },
      {
        question: "Do you publish average remittance volumes?",
        answer:
          "No. We do not invent transaction volumes, client counts or reviews on this page.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software development", text: "Bill payments through Bharat BillPay." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software development", text: "Aadhaar-enabled payments at the retailer." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software development", text: "Mobile and DTH recharge on the same stack." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
      { href: "/services/mlm-crm-development", title: "MLM CRM development", text: "When payout trees sit beside wallet modules." },
      { href: "/pricing", title: "Pricing", text: "Published Basic, Standard and Premium plans." },
      { href: "/contact", title: "Contact", text: "Send aggregator docs for a scoped DMT estimate." },
    ],
  },
  {
    slug: "recharge-software",
    path: `${FINTECH_HUB_PATH}/recharge-software`,
    breadcrumbName: "Recharge software",
    contentUpdatedAt: "2026-10-27",
    metaTitle: "Recharge Software India | White-Label Mobile & DTH Recharge",
    h1: "Recharge software for mobile, DTH and utility top-ups in India",
    metaDescription:
      "White-label recharge software from Jaipur: retailer app, distributor panel and admin. From ₹99,999. You bring the recharge API partner; we build the software.",
    keywords:
      "recharge software India, mobile recharge software, DTH recharge software, white label recharge Jaipur",
    serviceType: "Recharge software development",
    answer:
      "Recharge software lets a retailer offer mobile, DTH and similar prepaid top-ups through a branded app and admin. Live operators, plans and denominations come from the API partner you contract — TheTriFusion does not hold operator inventory or resell airtime as a telecom. We build the retailer flow, distributor stock and admin from Jaipur. Published fintech plans start at ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium). Partner margins and operator downtime stay on the partner’s side of the ledger.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Recharge / bill-pay API partner" },
      { label: "We build", value: "Retailer app, distributor panel, admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What recharge software actually does",
        paragraphs: [
          "The retailer picks an operator and circle or plan as the partner UI model requires, enters a mobile or subscriber number, chooses an amount or pack, and submits. The partner API posts the top-up; the admin shows commission, success, failures and retries. Operator lists, plan catalogues and promotional packs change on the partner side. We do not hard-code a public operator roster on this marketing site that will go stale next tariff cycle.",
          "Refunds, partial success and “pending” states are normal in recharge. Good software makes those states obvious and stops the retailer from taking a second cash payment while a first attempt is still open. Pretty dashboards matter less than a reliable status poll and a printable last transaction list for the counter argument that starts with “the recharge did not come.”",
        ],
      },
      {
        heading: "Recharge vs BBPS — which rail for which product",
        paragraphs: [
          `Postpaid mobile, electricity and many utility bills belong on [BBPS / Bharat BillPay](${SOURCES.npciBbps}) when your BBPOU offers them — see [BBPS software](/services/fintech-app-development/bbps-software). Prepaid mobile and DTH packs usually sit on a recharge aggregator API. Some partners expose both bill-pay and recharge in one credential set; that still does not make the products identical in UX or settlement.`,
          "The locked brief must say which SKU uses which rail. We do not merge them into one invented product name to sound larger. [AEPS software](/services/fintech-app-development/aeps-software) and [DMT software](/services/fintech-app-development/dmt-software) remain separate: biometrics and remittance are not top-ups.",
        ],
      },
      {
        heading: "Partner types for recharge — aggregators, not NPCI membership",
        paragraphs: [
          "Recharge access is typically a commercial API from a recharge or multi-service aggregator, not an NPCI membership like BBPS or AePS. You negotiate margin, reserve, circle coverage and support SLAs with that aggregator. TheTriFusion integrates their documented endpoints. We are not your silent reseller of operator balance unless a specific supply contract says so in writing — default is you bring the partner.",
          "Ask partners for sandbox numbers that actually complete, status codes for pending, and a reconciliation file format. Without those, admin reports become guesswork. If a partner only offers a scraped portal without API, that is a different automation risk conversation; we prefer documented APIs for production retailer networks.",
        ],
      },
      {
        heading: "Retailer UX for packs, amounts and failures",
        paragraphs: [
          "Retailers think in operator logos, amounts customers speak aloud, and whether last recharge for a number can be repeated. Plan fetches (when the API supports them) reduce wrong-amount disputes on DTH. For plain amount recharge, validate number length lightly and let the partner be the source of truth on circle. Offline-first wishful thinking does not help when the rail is online-only — show connectivity honestly.",
          "Commission display can motivate retailers; do not invent commissions the partner does not pay. Configure slabs in admin from your commercial sheet. Distributor panels move balance down the hierarchy the same way other fintech modules do, but recharge velocity is often higher and ticket size smaller — reports should filter by operator and failure reason, not only by rupee total.",
        ],
      },
      {
        heading: "Ops workflow: high volume, small tickets",
        paragraphs: [
          "Recharge ops differ from DMT and AEPS: many more attempts per hour, more “customer says not received” calls, more operator-side outages on a single brand for an afternoon. Your support desk needs a status checker by transaction id and mobile number. Retry policy must be partner-safe — blind retry can double-recharge.",
          "Morning health checks watch partner balance and error rate, not biometric device USB ports. End of day matches aggregator statements to internal success rows. When BBPS bills and prepaid recharge share one app, train staff to pick the right menu; a postpaid bill paid as a prepaid amount is a human process failure the UI should make hard.",
        ],
      },
      {
        heading: "Mobile apps and multi-module retailer stacks",
        paragraphs: [
          "Android dominates kirana recharge counters. We align retailer builds with [Android app development](/services/android-app-development) and [mobile app development](/services/mobile-app-development) when you need store distribution, deep links from distributor SMS, or tablet mode. Web admin remains the finance cockpit.",
          "If recharge is one surface of a larger custom platform — inventory, CRM, or network compensation — use [software development](/services/software-development) and [MLM CRM development](/services/mlm-crm-development) for those scopes. The fintech hub at [fintech app development](/services/fintech-app-development) explains how recharge sits beside BBPS, AEPS and DMT without pretending they share one regulator product page.",
        ],
      },
      {
        heading: "Published recharge software pricing",
        paragraphs: [
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [fintech app development](/services/fintech-app-development) and [pricing](/pricing). Aggregator setup fees, margin share and SMS costs are separate. We do not publish a fake “unlimited recharge lifetime licence” or invent operator-wise software royalties.",
          "Basic / Standard / Premium map to breadth of white-label stack and modules in the written brief, same as other fintech pages. Send aggregator docs and a target operator list (for scoping UX, not for us to scrape) via [contact](/contact). We reply with what we will build — not with a fabricated success-story volume.",
        ],
      },
      {
        heading: "What we refuse to invent on a recharge page",
        paragraphs: [
          "No client logos we do not have permission to show, no star ratings, no “2 crore recharges monthly” banners, no claim that we are a telecom or that we hold TRAI licences. Operator brands belong to those operators; listing them as if we were their official channel is misleading when we only build software on your aggregator.",
          "Office line for humans: " +
            NAP_LINE +
            ". Prefer emailing a short brief over demanding an instant WhatsApp quote without partner constraints. Honest scope is faster than rewriting a fantasy proposal later.",
        ],
      },
      {
        heading: "From sandbox top-up to production retailers",
        paragraphs: [
          "Delivery starts with credential check and a matrix of operators you care about on day one. We implement recharge, status and balance endpoints, then retailer and distributor UI, then admin reconciliation. UAT uses small sandbox amounts. Production wait often equals partner KYC and reserve funding — again, their clock.",
          "Post-launch work includes plan-fetch updates when partners change pack APIs, new failure codes, and export tweaks for accountants. Keep a maintenance retainer in mind; recharge catalogues move faster than AePS device lists. We stay useful by shipping those changes — not by claiming the catalogue never breaks.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is recharge software?",
        answer:
          "Software for retailers to sell mobile, DTH and similar top-ups through a partner API. We build the retailer, distributor and admin panels. We do not hold operator inventory.",
      },
      {
        question: "How much does recharge software cost?",
        answer:
          "Published fintech plans are ₹99,999, ₹1,99,999 and ₹3,99,999. Partner and operator-side fees are separate.",
      },
      {
        question: "Do you provide the recharge API?",
        answer:
          "Only when a specific integration is named in the contract. By default you bring the aggregator API and we integrate it.",
      },
      {
        question: "Can recharge share the BBPS / AEPS / DMT retailer app?",
        answer:
          "Yes when those modules are in the same brief. Keep menus clear so prepaid top-up is not confused with BBPS bill pay or AEPS cash-out.",
      },
      {
        question: "Do you publish a list of supported operators?",
        answer:
          "No permanent public roster. Operators and packs come from your partner API and change. Hard-coding them on a marketing page misleads retailers.",
      },
      {
        question: "How do pending recharges get handled?",
        answer:
          "Status polling and partner callbacks drive the UI. Ops use reference ids with the aggregator. Blind double-submit is blocked in the flow we build.",
      },
      {
        question: "Is recharge the same as BBPS?",
        answer:
          "No. BBPS is Bharat BillPay for enrolled billers. Recharge is prepaid top-up via an aggregator. Some bills should use BBPS instead of a recharge-style amount entry.",
      },
      {
        question: "Can distributors set different margins per operator?",
        answer:
          "When the brief and data model allow slab or operator-wise commission, admin can configure what your commercial sheet specifies. We do not invent margins.",
      },
      {
        question: "Where do I start a scoped estimate?",
        answer:
          "Use the contact page with aggregator name, sandbox timeline and whether BBPS or DMT will share the app. Office hours and phone are on the NAP line in the facts above.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software development", text: "Bharat BillPay for postpaid and utility bills." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software development", text: "Aadhaar-enabled payments at the retailer." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software development", text: "Domestic money transfer for the same network." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development", text: "The hub for BBPS, AEPS, DMT, recharge and UPI." },
      { href: "/services/mobile-app-development", title: "Mobile app development", text: "When the retailer counter needs a dedicated app build." },
      { href: "/pricing", title: "Pricing", text: "Published Basic, Standard and Premium plans." },
      { href: "/contact", title: "Contact", text: "Share aggregator docs for a scoped recharge estimate." },
    ],
  },
];

export const FINTECH_PRODUCT_SLUGS = fintechProductPages.map((page) => page.slug);

export function getFintechProductBySlug(slug) {
  return fintechProductPages.find((page) => page.slug === slug) || null;
}
