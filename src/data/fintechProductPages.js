import { NAP_LINE, SOURCES } from "./servicePlan/_shared";

export const FINTECH_HUB_PATH = "/services/fintech-app-development";

/**
 * Dedicated BBPS / AEPS / DMT / recharge pages.
 * Each page is written as a standalone brief for that rail — not a cloned
 * template with the product name swapped. Prices are the published fintech
 * Basic / Standard / Premium plans (₹99,999 / ₹1,99,999 / ₹3,99,999).
 * No fabricated volumes, clients, reviews, licences, or certifications.
 */
export const fintechProductPages = [
  {
    slug: "bbps-software",
    path: `${FINTECH_HUB_PATH}/bbps-software`,
    breadcrumbName: "BBPS software",
    contentUpdatedAt: "2026-11-23",
    metaTitle: "BBPS Software Development India | Bharat BillPay Panels from Jaipur",
    h1: "Bharat BillPay (BBPS) software for Indian retailer networks",
    metaDescription:
      "Build white-label Bharat BillPay panels in Jaipur: bill fetch/pay, biller categories, retailer wallets and BBPOU reconciliation. From ₹99,999. You bring BBPOU access.",
    keywords:
      "BBPS software development India, Bharat BillPay retailer app, BBPOU bill payment software Jaipur, white label BBPS panels",
    serviceType: "BBPS software development",
    answer:
      "Bharat BillPay (BBPS) is NPCI’s common rail for collecting payments against enrolled billers — electricity, water, gas, broadband, education fees and other categories your BBPOU enables. TheTriFusion builds the white-label software layer from Jaipur: a retailer counter flow for fetch and pay, distributor wallets that fund those counters, and an admin that reconciles attempts against BBPOU reports. You arrange BBPOU or aggregator credentials on Bharat BillPay; we do not issue NPCI permissions or act as a BBPOU. Published fintech plans start at ₹99,999 (Basic), with Standard at ₹1,99,999 and Premium at ₹3,99,999. Partner fees, settlement windows and complaint SLAs stay on your BBPOU contract. Primary product overview: [NPCI Bharat BillPay](" +
      SOURCES.npciBbps +
      ").",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "BBPOU / Bharat BillPay API access" },
      { label: "We build", value: "Fetch/pay UI, wallet hierarchy, reconciliation admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "What Bharat BillPay software is for",
        paragraphs: [
          "This page is for operators whose first product is bill collection on Bharat BillPay — not Aadhaar cash services, not domestic remittance, and not prepaid airtime. Typical buyers are distributors and CSP-style networks in Rajasthan and across India that already sell utilities through agents and want a branded retailer app instead of a partner’s generic portal. If you need several rails in one ship, start at the [fintech app development](/services/fintech-app-development) hub and lock modules in one brief.",
          "Indian households still pay many recurring dues at a neighbourhood counter. BBPS software is the stack that lets that counter fetch the exact outstanding amount, take cash or digital payment, and return a receipt tied to a BBPOU reference — without the retailer typing an invented bill total.",
        ],
      },
      {
        heading: "How a BBPS transaction moves from counter to biller",
        paragraphs: [
          "A retailer picks a biller category, enters the consumer identifier the biller expects, and calls fetch. The BBPOU returns the payable amount and due metadata. The retailer confirms, collects from the customer, and submits pay. The software must show a stable reference id, print or share a receipt, and write a ledger row the distributor and admin can see. Fetch failures (wrong consumer id, biller downtime) are not the same as pay failures (wallet short, partner timeout); reports should separate them so finance is not guessing.",
          `Biller catalogues, complaint windows and settlement T+N rules come from your BBPOU — not from this marketing page. Read the product overview on [NPCI Bharat BillPay](${SOURCES.npciBbps}) and keep [NPCI](${SOURCES.npci}) and [RBI](${SOURCES.rbi}) bookmarked for circulars. We cite those sources so you can verify; we do not paraphrase them into a fake “BBPS licence included” claim.`,
        ],
      },
      {
        heading: "BBPOU integrations and biller categories that matter in scope",
        paragraphs: [
          "Scope starts with which biller categories you will enable on day one — power DISCOMs, water, piped gas, broadband, education, insurance premiums, FASTag or others your partner lists. We wire the fetch/pay, status and complaint endpoints the BBPOU documents. We do not hard-code a public biller roster that will go stale when a DISCOM changes consumer-number rules.",
          "Complaint handling is BBPS-specific. Billers and BBPOUs run their own dispute windows. The admin should surface partner status fields and reference ids so your support desk can raise a complaint through the channel your contract names — not invent a parallel ombudsman inside the UI. Train retailers to keep consumer numbers and receipt ids; those are what the BBPOU investigates.",
        ],
      },
      {
        heading: "Retailer, distributor and admin surfaces for bill pay",
        paragraphs: [
          "The retailer screen stays deliberately short: category → consumer id → amount confirmation → status. Offline-friendly retries and plain-language failure codes matter more than charts. When the same Android login also hosts [AEPS](/services/fintech-app-development/aeps-software), [DMT](/services/fintech-app-development/dmt-software) or [recharge](/services/fintech-app-development/recharge-software), BBPS keeps its own menu and wallet rules so a failed bill pay is never mistaken for a failed Aadhaar withdrawal.",
          "Distributors fund retailer wallets and set commission slabs you define. Admin owns hierarchy, biller enablement flags the partner allows, ledger exports and complaint ticket status when the API exposes it. White-label branding (logo, colours, domain) is part of the fintech package scoped on the [hub](/services/fintech-app-development).",
        ],
      },
      {
        heading: "Typical BBPS build process from Jaipur",
        paragraphs: [
          "Week one maps partner docs, sandbox keys and roles (retailer / distributor / admin). Next we implement fetch/pay on staging, demo the happy path and the failure path, connect distributor funding, then harden reconciliation exports. Go-live waits on your BBPOU production credentials and checklist — software can be ready while partner onboarding is still open; we do not control that clock.",
          "Android is the usual counter device; we align with [Android app development](/services/android-app-development) when you need a store listing or versioned APKs for distributors. Web admin stays browser-based for finance. Broader custom glue (CRM onboarding, multilevel payouts) sits on [software development](/services/software-development) or [MLM CRM development](/services/mlm-crm-development) — a bill-pay module is not a compensation engine.",
        ],
      },
      {
        heading: "What you receive at BBPS handover",
        paragraphs: [
          "At handover you get the branded retailer app build (or store package as scoped), distributor and admin access, environment notes for staging and production, API credential slots documented without secrets in git, and a short ops sheet: how to read fetch vs pay failures, where reference ids appear, and how finance exports match BBPOU settlement files. Source code handover follows the signed contract — same rule as other TheTriFusion software work.",
          "We do not hand over NPCI membership, a BBPOU agreement, or invented uptime SLAs that belong to Bharat BillPay. Post-launch change requests (new categories your partner enables, commission tweaks, export formats) are scoped separately.",
        ],
      },
      {
        heading: "Honest scoping questions before we quote BBPS",
        paragraphs: [
          "Which BBPOU or aggregator will issue credentials, and when does sandbox land? Which biller categories must work on day one? Who owns customer complaints in your org chart? Will BBPS share a retailer login with AEPS, DMT or recharge in the first release? Do you need Hindi copy on failure states? Is the admin export format already defined by your accountant?",
          "If you are still shopping for a BBPOU, finish that commercial conversation first — building against a missing credential wastes scope. Published plans on [pricing](/pricing) and the [fintech hub](/services/fintech-app-development) are ₹99,999 / ₹1,99,999 / ₹3,99,999 for the software packages; BBPOU commercial terms are separate. Request a written estimate via [contact](/contact) with partner name and target go-live.",
        ],
      },
      {
        heading: "BBPS is not recharge, AEPS or DMT",
        paragraphs: [
          "BBPS settles an enrolled biller’s invoice after fetch. [Recharge software](/services/fintech-app-development/recharge-software) tops up prepaid mobile and DTH through a recharge aggregator — different catalogue, different pending rules. [AEPS software](/services/fintech-app-development/aeps-software) needs bank-accepted biometrics for Aadhaar-authenticated cash services. [DMT software](/services/fintech-app-development/dmt-software) sends money to a beneficiary account under remitter KYC — it does not clear a DISCOM bill.",
          "One white-label app can host all four menus. Four partner contracts still sit behind them. Merging the names on a brochure does not merge the rails.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does BBPS software include for a retailer network?",
        answer:
          "A branded fetch/pay flow, distributor wallet funding, admin reconciliation and white-label chrome. The BBPOU supplies biller data and settlement; TheTriFusion builds the panels from Jaipur.",
      },
      {
        question: "Who provides Bharat BillPay / BBPOU access?",
        answer:
          "You do. We integrate the APIs your BBPOU or aggregator documents. We are not a BBPOU and we do not sell NPCI permissions.",
      },
      {
        question: "Which biller categories can the software show?",
        answer:
          "Whatever categories your BBPOU enables and the brief lists for day one. We do not publish a frozen public biller list on this site.",
      },
      {
        question: "How are BBPS complaints handled in the admin?",
        answer:
          "We surface partner reference ids and status fields. The complaint channel itself follows your BBPOU contract — the software does not replace that channel.",
      },
      {
        question: "What is the published price for BBPS panels?",
        answer:
          "Fintech plans are ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium). BBPOU fees and per-bill partner charges are separate.",
      },
      {
        question: "Can electricity bills and prepaid mobile share one app?",
        answer:
          "Yes when both modules are in the locked brief. Electricity on BBPS and prepaid mobile on recharge should stay separate menus so retailers pick the right rail.",
      },
      {
        question: "Do you guarantee Bharat BillPay uptime?",
        answer:
          "No. Uptime and biller availability belong to NPCI and your BBPOU. We support the panels we build and help you read partner error codes.",
      },
      {
        question: "Where should I send sandbox docs for an estimate?",
        answer:
          "Use the contact page with partner name, sandbox timeline and whether other rails share the first release. Office: Jaipur, Rajasthan — details in the facts box above.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar-enabled cash services on a sponsor-bank stack." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic money transfer with remitter KYC." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Prepaid mobile and DTH via your aggregator." },
      { href: FINTECH_HUB_PATH, title: "Fintech app development hub", text: "Multi-rail BBPS, AEPS, DMT and recharge overview." },
      { href: "/blog/fintech-app-development-india", title: "Operator buyer guide", text: "What still sits outside the software quote." },
      { href: "/pricing", title: "Pricing", text: "Published Basic, Standard and Premium fintech plans." },
      { href: "/contact", title: "Contact", text: "Send BBPOU docs for a scoped BBPS estimate." },
    ],
  },
  {
    slug: "aeps-software",
    path: `${FINTECH_HUB_PATH}/aeps-software`,
    breadcrumbName: "AEPS software",
    contentUpdatedAt: "2026-11-23",
    metaTitle: "AEPS Software Development India | AePS Retailer App from Jaipur",
    h1: "AePS software for Aadhaar-enabled payments at Indian counters",
    metaDescription:
      "White-label AePS software from Jaipur: biometric capture, cash withdrawal and balance flows, distributor panel and admin. From ₹99,999. You bring sponsor-bank AePS access.",
    keywords:
      "AEPS software development India, AePS retailer app Jaipur, Aadhaar enabled payment system software, white label AePS biometric",
    serviceType: "AEPS software development",
    answer:
      "AePS (Aadhaar Enabled Payment System) lets an authorised retailer authenticate a customer with Aadhaar biometrics and offer cash withdrawal, balance enquiry, mini statement and related services the sponsor bank enables. TheTriFusion builds white-label AePS software from Jaipur: the retailer capture flow against devices your bank already accepts, distributor hierarchy and admin reports. You arrange sponsor-bank / NPCI AePS access and the certified device list that bank requires. We do not certify sensors, issue bank permissions or sell a micro-ATM licence. Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Sponsor bank AePS access + bank-accepted devices" },
      { label: "We build", value: "Biometric retailer flow, hierarchy, admin reports" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "Who needs AePS software (and who does not)",
        paragraphs: [
          "Choose this URL when the product is Aadhaar-authenticated banking at a physical counter — CSPs, kirana agents and rural service points in Jaipur, Rajasthan and wider India that serve customers without a nearby branch. Skip this page if you only need bill fetch ([BBPS](/services/fintech-app-development/bbps-software)), send-money ([DMT](/services/fintech-app-development/dmt-software)) or prepaid top-up ([recharge](/services/fintech-app-development/recharge-software)).",
          "AePS is hardware-heavy compared with bill pay. If your network will not buy and train on fingerprint or iris devices the sponsor bank lists, AePS is the wrong first module — start elsewhere on the [fintech hub](/services/fintech-app-development).",
        ],
      },
      {
        heading: "Biometric capture, sponsor banks and NPCI AePS",
        paragraphs: [
          `AePS is an NPCI product. Authentication rules, daily limits and allowed service codes follow the sponsor bank and NPCI — not a slogan on a studio site. Primary overview: [NPCI AePS](${SOURCES.npciAeps}). Keep [NPCI](${SOURCES.npci}) and [RBI](${SOURCES.rbi}) for circulars. TheTriFusion implements panels against the APIs and device SDKs your partner documents.`,
          "Capture follows the partner RD/SDK path. We do not design a side database of biometric templates for analytics. Exact retention belongs in the contract and partner rules. Encryption in transit, audit logs of attempts (without storing forbidden biometric data) and a VAPT scope can be written into the engagement — we do not print a fake audit certificate or CERT-In badge. Security teams can also review [CERT-In](" +
            SOURCES.certIn +
            ") for incident-reporting context.",
        ],
      },
      {
        heading: "Device SDKs and field realities at the counter",
        paragraphs: [
          "We integrate biometric devices your AePS partner already lists — USB, Bluetooth or manufacturer SDKs as their docs describe. We will not publish a marketing roster of sensor brands that pretends every device works with every bank. When the approved list changes, the integration brief updates.",
          "Field ops matter as much as code: who ships sensors, who installs the RD service, who teaches finger placement, who replaces a failed device. Software can show health flags when the SDK exposes them; it cannot replace distributor training. Plan that staffing before you scale retailer count across districts.",
        ],
      },
      {
        heading: "Retailer sequence and cash-drawer risk unique to AePS",
        paragraphs: [
          "The counter sequence is deliberate: pick service (withdrawal, balance, mini statement) → capture Aadhaar details as the partner requires → drive the device → show bank response → dispense cash or show balance → acknowledge. “Finger not detected” and bank decline states need plain Hindi/English copy, not a spinner that hides the real error.",
          "Successful cash withdrawal means physical cash left the drawer. End-of-day reconciliation against the successful-withdrawal list is an AePS muscle that [BBPS](/services/fintech-app-development/bbps-software) and recharge do not create the same way. Admin reports emphasise biometric success vs failure, bank decline codes and device-linked terminals — not only rupee totals.",
        ],
      },
      {
        heading: "How we build and ship an AePS module",
        paragraphs: [
          "After a locked brief and sandbox access, we map auth, capture, service codes and status callbacks, then build the Android-first retailer UI (device SDKs almost always land there). Distributor funding and admin exports follow. UAT uses partner test credentials and a real approved device on a staging build. Production cut-over waits on bank go-live steps we do not own.",
          "Play Store packaging, versioned APKs and tablet layouts sit next to [Android app development](/services/android-app-development) and [mobile app development](/services/mobile-app-development) when scoped. iOS is rarely the primary AePS counter — say so if your network is an exception. Keep Aadhaar flows isolated in UX and access lists from marketing CRM data if you also run [software development](/services/software-development) or [MLM CRM](/services/mlm-crm-development) on the same programme.",
        ],
      },
      {
        heading: "Handover package for AePS operators",
        paragraphs: [
          "You receive the retailer build wired to your partner’s capture path, distributor and admin logins, a device-setup checklist drafted from partner docs, and an ops note covering morning device health, mid-day decline handling and end-of-day cash match. Credentials stay in your vault — not in a shared WhatsApp chat.",
          "We will not claim we are an NPCI member, a sponsor bank or a biometric OEM. We will not invent “X lakh AePS merchants live.” Demos, when available, are labelled demos — not your production bank certification.",
        ],
      },
      {
        heading: "Scoping questions that change an AePS estimate",
        paragraphs: [
          "Which sponsor bank or aggregator issues AePS credentials? Which devices are on their approved list today? Which service codes are in the first release (withdrawal only, or balance and mini statement too)? Will AePS share a login with DMT or BBPS? Who trains retailers on capture quality? Is night-time or velocity blocking required by the bank API?",
          "Published software plans remain ₹99,999 / ₹1,99,999 / ₹3,99,999 on [pricing](/pricing). Bank fees, device purchase and aggregator charges are separate invoices. Bring sponsor-bank docs to [contact](/contact) for a written scope — not a scraped competitor phone quote.",
        ],
      },
      {
        heading: "AePS for Jaipur and Rajasthan agent networks",
        paragraphs: [
          "Rajasthan CSP and kirana networks often need Hindi decline messages, intermittent connectivity handling, and distributor staff who can reinstall an RD service without flying in a developer. We design those realities into the brief when you name them — we do not invent a statewide deployment case study we have not published.",
          "Remote demos cover operators elsewhere in India; in-person device debugging can be scheduled at the Jaipur office when a sensor must be on the table. The product page stays honest: software studio first, not a bank branch replacement.",
          "Support after go-live is about readable bank decline codes, device health flags and admin lock tools — not promising that every fingerprint will match on the first try. Capture quality is still a human and device problem; software can only surface it clearly.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is AePS software in practical terms?",
        answer:
          "The retailer app and admin that drive Aadhaar biometric authentication and the bank services your sponsor enables — withdrawal, balance, mini statement and related codes. TheTriFusion builds those panels; the bank owns the rail.",
      },
      {
        question: "Which fingerprint devices will the app support?",
        answer:
          "Only devices your AePS partner already certifies. We integrate that list; we do not invent a public device catalogue here.",
      },
      {
        question: "Do you store customer fingerprints?",
        answer:
          "Capture follows the partner RD/SDK flow. We do not build a marketing-side biometric archive. Retention follows partner rules and the written contract.",
      },
      {
        question: "Why can’t AePS run on a phone with no sensor?",
        answer:
          "AePS authenticates with Aadhaar biometrics at the counter. Without a bank-accepted sensor, the capture step cannot complete. Bill pay and recharge do not have that hardware requirement.",
      },
      {
        question: "How much does white-label AePS software cost?",
        answer:
          "Published fintech plans are ₹99,999, ₹1,99,999 and ₹3,99,999. Sponsor-bank, aggregator and device-vendor fees are separate.",
      },
      {
        question: "Is this the same as buying a micro-ATM licence?",
        answer:
          "No. We build software against the AePS services your sponsor bank enables. We do not sell licences or bank memberships.",
      },
      {
        question: "How long until AePS can go live?",
        answer:
          "Software readiness follows the locked brief and sandbox. Bank onboarding, device procurement and retailer training run on separate clocks.",
      },
      {
        question: "Can AePS and DMT use one retailer login?",
        answer:
          "Yes when the brief says so. Keep menus and limits separate so cash withdrawal is never confused with send-money in reports.",
      },
      {
        question: "What service codes are usually in a first AePS release?",
        answer:
          "Often cash withdrawal plus balance enquiry; mini statement and deposit follow when the sponsor bank enables them and the brief lists them. We do not invent service codes the partner API does not expose.",
      },
      {
        question: "Who pays for biometric devices?",
        answer:
          "Device purchase and replacement normally sit on your distributor or device-vendor invoice. Our software quote does not silently include a sensor kit unless a separate hardware line is written into the contract.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bharat BillPay fetch/pay without biometrics." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic remittance for the same agent network." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Prepaid top-ups on a separate aggregator rail." },
      { href: "/services/android-app-development", title: "Android app development", text: "Store packaging for device-linked retailer apps." },
      { href: FINTECH_HUB_PATH, title: "Fintech hub", text: "All rails: BBPS, AEPS, DMT, recharge." },
      { href: "/blog/fintech-app-development-india", title: "How operators buy fintech software", text: "Hierarchy, KYC and what sits outside the quote." },
      { href: "/contact", title: "Contact", text: "Share sponsor-bank docs for a scoped AePS estimate." },
    ],
  },
  {
    slug: "dmt-software",
    path: `${FINTECH_HUB_PATH}/dmt-software`,
    breadcrumbName: "DMT software",
    contentUpdatedAt: "2026-11-23",
    metaTitle: "DMT Software Development India | Domestic Money Transfer Panels",
    h1: "DMT software for domestic money transfer retailer networks",
    metaDescription:
      "White-label DMT / XDMT software from Jaipur: remitter KYC, beneficiary accounts, IMPS/NEFT status and distributor float. From ₹99,999. You bring the bank or aggregator contract.",
    keywords:
      "DMT software development India, domestic money transfer retailer app, XDMT software Jaipur, IMPS NEFT remittance panels",
    serviceType: "DMT software development",
    answer:
      "Domestic money transfer (DMT) — and partner-branded XDMT variants — lets a retailer collect a send-money request, apply remitter KYC rules, pick or add a beneficiary, and push funds through the bank or aggregator you contract (typically IMPS or NEFT as that partner exposes). TheTriFusion builds the white-label DMT software from Jaipur: sender onboarding, beneficiary handling, charge breakup, distributor float and admin reconciliation. DMT is not an NPCI-branded product in the same way Bharat BillPay and AePS are; your commercial rail is the bank or aggregator. Published plans start at ₹99,999. We do not issue RBI licences or invent per-transaction payout rates on this page.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Bank or aggregator DMT / remittance contract" },
      { label: "We build", value: "Remitter KYC UI, beneficiaries, transfer status, float admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "Domestic money transfer for agent networks in India",
        paragraphs: [
          "This page is for operators whose customers walk into a retailer to send money to a bank account — migrant workers, small traders and families across Rajasthan and India who use an agent as the channel. It is not bill settlement ([BBPS](/services/fintech-app-development/bbps-software)), not Aadhaar cash-out ([AEPS](/services/fintech-app-development/aeps-software)), and not prepaid airtime ([recharge](/services/fintech-app-development/recharge-software)).",
          "If your first release mixes remittance with other rails, lock the module list on the [fintech app development](/services/fintech-app-development) hub. Each rail still needs its own partner paper.",
        ],
      },
      {
        heading: "Remitter KYC, beneficiaries and IMPS / NEFT rails",
        paragraphs: [
          "DMT UIs spend more time on sender onboarding than bill-pay screens do. Expect OTP or partner auth, remitter registration tiers, beneficiary account entry, and verification where the API offers it. Monthly caps and cooling periods are the partner’s rules — the software should show remaining limit when the partner returns it, not invent a local cap that disagrees with the rail.",
          `Transfer initiation typically lands on IMPS for near-real-time credit or NEFT where the partner routes that way. Status polling, callbacks and pending states must be first-class: a debited wallet with a pending bank credit is the classic support ticket. For payment-system context that may apply to your model, start at [RBI](${SOURCES.rbi}) and [NPCI](${SOURCES.npci}) — reading primary sources beats trusting a vendor who says “licence included.”`,
        ],
      },
      {
        heading: "What XDMT means in a locked brief",
        paragraphs: [
          "XDMT naming varies by partner marketing. We treat XDMT as whatever that partner’s API documents — often a faster or alternate domestic transfer product on the same commercial relationship. TheTriFusion does not invent a separate “XDMT licence SKU” with its own fake price. If both DMT and XDMT endpoints exist, the brief lists which button calls which API and how settlement files distinguish them.",
          "Commission slabs by amount tier are configuration you supply, not a promised “earn ₹X per remittance” claim on this site. No page here publishes fabricated remittance volumes or agent income.",
        ],
      },
      {
        heading: "Float, pending transfers and ops playbooks",
        paragraphs: [
          "DMT ops watch retailer float continuously: an empty wallet cannot send, and customers waiting with cash create shop-floor conflict. Escalation for stuck transactions (local debit, partner pending) needs named partner support contacts. End-of-day is ledger match against settlement files — not cash-drawer count the way AePS cash-out is.",
          "Fraud patterns differ from bill pay: mule accounts, rapid beneficiary churn, shared sender identity. We implement velocity rules the API and brief allow. We do not sell a mythical AI that replaces partner monitoring. Operator policy must forbid “helping” with someone else’s KYC on a DMT form — that is not a CSS fix.",
        ],
      },
      {
        heading: "Build rhythm for a DMT panel",
        paragraphs: [
          "Early work maps auth, remitter, beneficiary, transfer, status poll and callback. Then retailer confirmation screens with charge breakup, distributor funding, and admin exports finance can read without a developer. UAT uses sandbox amounts. Production waits on the partner’s go-live checklist.",
          "Networks that also run multilevel payout trees should keep remittance compliance separate from compensation logic — see [MLM CRM development](/services/mlm-crm-development) and [software development](/services/software-development). Field apps lean Android; [mobile app development](/services/mobile-app-development) covers store builds when needed.",
        ],
      },
      {
        heading: "What handover looks like for DMT",
        paragraphs: [
          "You get the branded send-money app flow, distributor float tools, admin with partner reference search, a pending-transaction playbook drafted against partner status codes, and credential slots documented for your vault. Idempotent submit rules are part of the build so retailers are blocked from blind double-send after a timeout.",
          "NAP for visits and calls: " +
            NAP_LINE +
            ". Bring redacted partner contract summaries when you want a serious estimate. Sandbox keys should travel through agreed channels.",
        ],
      },
      {
        heading: "Scoping questions that decide DMT cost and shape",
        paragraphs: [
          "Which bank or aggregator holds the remittance contract? Are both IMPS and NEFT in scope? Is XDMT a separate endpoint or a marketing name? What remitter KYC tiers exist on day one? Will DMT share wallets with BBPS or AePS? Do accountants already have a settlement file format they expect?",
          "Published software plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [pricing](/pricing). Partner fees, bank rail costs and SMS OTP charges are separate. Tell us the module mix on [contact](/contact) — module count changes the brief more than adjectives do.",
        ],
      },
      {
        heading: "Compliance posture we will and will not take",
        paragraphs: [
          "We implement the KYC steps, limits and beneficiary caps your partner API exposes. We document audit logs for admin actions. We will not file your regulatory applications, draft a legal opinion, or market DMT software as “RBI approved.” If your counsel needs a data-flow diagram for the remitter journey, we can produce that as a scoped deliverable.",
          "Operators selling remittance to the public should read current circulars on the [RBI](" +
            SOURCES.rbi +
            ") site before go-live. Software readiness is not the same as permission to operate.",
          "When remitter OTP SMS fees, beneficiary verification charges or night-time transfer blocks appear in partner docs, call them out in the brief early. Surfacing those costs in the retailer confirmation screen prevents “the app ate my customer’s cash” arguments that are really commercial terms.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is DMT software for retailers?",
        answer:
          "Panels that let an agent register a remitter, manage beneficiaries, submit a domestic transfer and show status — backed by the bank or aggregator you contract. We build the software from Jaipur.",
      },
      {
        question: "Do you move the money yourselves?",
        answer:
          "No. Funds move on your partner’s IMPS/NEFT (or documented) rail. We integrate their APIs and status model.",
      },
      {
        question: "Is an RBI licence included with the software?",
        answer:
          "No. Operators need the relationships and registrations their model requires. TheTriFusion is a software studio, not a licence bureau.",
      },
      {
        question: "How do you handle a transfer stuck in pending?",
        answer:
          "The UI shows partner status and reference ids and blocks blind resubmit. Ops follow the partner’s pending playbook. Software cannot force a bank credit.",
      },
      {
        question: "What does XDMT cost as a TheTriFusion product?",
        answer:
          "There is no separate invented XDMT SKU. XDMT is scoped as endpoints on your partner under the same published fintech plans (₹99,999 / ₹1,99,999 / ₹3,99,999).",
      },
      {
        question: "How is DMT different from AePS cash withdrawal?",
        answer:
          "DMT credits a beneficiary account through a transfer partner. AePS cash withdrawal authenticates with Aadhaar biometrics and dispenses cash under AePS rules.",
      },
      {
        question: "Can DMT wallets sit beside an MLM payout tree?",
        answer:
          "Only with a clear brief separating remittance compliance from compensation. See the MLM CRM page for trees; keep partner DMT rules intact.",
      },
      {
        question: "Do you publish average remittance volumes?",
        answer:
          "No. We do not invent transaction volumes, client counts or reviews on this page.",
      },
      {
        question: "What does the retailer see before confirming a transfer?",
        answer:
          "Amount, partner-returned charges when available, beneficiary details the brief requires, and a clear confirm step. After submit they see a reference id and status — including pending — not a fake instant-success animation.",
      },
      {
        question: "Can beneficiaries be reused across visits?",
        answer:
          "Yes when the partner model allows saved beneficiaries. Cooling periods and caps still follow the rail; the UI should not let a retailer bypass a partner block with a local workaround.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bill payments on Bharat BillPay." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar biometric cash services." },
      { href: "/services/fintech-app-development/recharge-software", title: "Recharge software", text: "Mobile and DTH top-ups." },
      { href: "/services/mlm-crm-development", title: "MLM CRM development", text: "Compensation trees kept separate from remittance." },
      { href: FINTECH_HUB_PATH, title: "Fintech hub", text: "Multi-module retailer stack overview." },
      { href: "/blog/fintech-app-development-india", title: "Buyer guide for operators", text: "Hierarchy and compliance outside the quote." },
      { href: "/contact", title: "Contact", text: "Send aggregator docs for a scoped DMT estimate." },
    ],
  },
  {
    slug: "recharge-software",
    path: `${FINTECH_HUB_PATH}/recharge-software`,
    breadcrumbName: "Recharge software",
    contentUpdatedAt: "2026-11-23",
    metaTitle: "Recharge Software Development India | Mobile & DTH Panels from Jaipur",
    h1: "Recharge software for mobile and DTH retailer networks in India",
    metaDescription:
      "White-label mobile and DTH recharge software from Jaipur: operator APIs, plan fetch, commission slabs and high-volume status handling. From ₹99,999. You bring the recharge aggregator.",
    keywords:
      "recharge software development India, mobile DTH recharge panel Jaipur, white label recharge aggregator software, prepaid top-up retailer app",
    serviceType: "Recharge software development",
    answer:
      "Recharge software lets a retailer sell prepaid mobile, DTH and similar top-ups through a branded app — operator lists, plans and denominations come from the recharge API partner you contract. TheTriFusion builds the retailer flow, distributor stock and admin from Jaipur. We do not hold telecom inventory, resell airtime as an operator, or claim TRAI channel partnerships. Published fintech plans start at ₹99,999 (Basic), ₹1,99,999 (Standard) and ₹3,99,999 (Premium). Margins, reserve balances and operator downtime stay on the aggregator’s side of the ledger.",
    facts: [
      { label: "Starting price", value: "From ₹99,999 (published Basic fintech plan)" },
      { label: "You bring", value: "Recharge aggregator API and commercial margin sheet" },
      { label: "We build", value: "Operator/plan UI, commission config, high-volume status admin" },
      { label: "Office", value: NAP_LINE },
    ],
    sections: [
      {
        heading: "Prepaid top-ups as a product (not Bharat BillPay)",
        paragraphs: [
          "Use this page when the first release is prepaid mobile and DTH (and similar top-ups) through a recharge aggregator — the high-frequency, small-ticket work kirana counters across Jaipur, Rajasthan and India already know. Postpaid mobile, electricity and many utilities belong on [BBPS software](/services/fintech-app-development/bbps-software) when your BBPOU offers them. AePS and DMT remain separate rails.",
          "Some aggregators expose both bill-pay and recharge under one credential set. That convenience does not make the products identical in UX or settlement. The locked brief must say which SKU uses which rail.",
        ],
      },
      {
        heading: "Operator APIs, plan fetch and commission models",
        paragraphs: [
          "Live operators, circles, packs and promotional denominations arrive from the partner API. We implement recharge, plan-fetch (when offered), status poll and balance endpoints. We do not hard-code a public operator logo wall on this marketing site that will rot after the next tariff cycle.",
          "Commission and margin models are yours to define: flat fee, percentage, operator-wise slabs or distributor overrides. Admin configures what your commercial sheet specifies. We do not invent retailer earnings or publish “unlimited lifetime recharge licence” claims. Prefer aggregators that provide sandbox numbers that actually complete, clear pending codes and a reconciliation file — scraped HTML portals are a different risk conversation.",
        ],
      },
      {
        heading: "Retailer UX for packs, repeats and failures",
        paragraphs: [
          "Retailers think in operator logos, amounts customers say aloud, and “same as last recharge for this number.” Plan fetch reduces wrong-pack disputes on DTH. For amount recharge, validate lightly and let the partner be the source of truth on circle. Show connectivity honestly — recharge rails are online-only.",
          "Pending, partial success and “customer says not received” are normal. Good software makes those states obvious and stops a second cash collection while the first attempt is open. Blind retry can double-recharge; retry policy must be partner-safe.",
        ],
      },
      {
        heading: "Ops for high volume, small tickets",
        paragraphs: [
          "Recharge desks see more attempts per hour than DMT or AePS, more operator-side outages on a single brand for an afternoon, and more status disputes. Support needs lookup by transaction id and mobile number. Morning checks watch partner balance and error rate — not biometric USB ports.",
          "When BBPS bills and prepaid recharge share one app, train staff to pick the right menu. Paying a postpaid bill as a prepaid amount is a process failure the UI should make hard. End of day matches aggregator statements to internal success rows filtered by operator and failure reason.",
        ],
      },
      {
        heading: "Delivery from sandbox top-up to live retailers",
        paragraphs: [
          "We start with credential check and a day-one operator matrix for UX scoping (not for us to scrape). Then recharge/status/balance wiring, retailer and distributor UI, admin reconciliation. UAT uses small sandbox amounts. Production often waits on partner KYC and reserve funding — their clock.",
          "Android dominates counter devices; [Android app development](/services/android-app-development) and [mobile app development](/services/mobile-app-development) cover store distribution when scoped. Larger platforms that also need inventory or CRM glue use [software development](/services/software-development). The [fintech hub](/services/fintech-app-development) explains how recharge sits beside BBPS, AEPS and DMT without pretending they share one regulator product page.",
        ],
      },
      {
        heading: "Handover for a recharge panel",
        paragraphs: [
          "At handover you receive the branded retailer recharge flow, distributor balance tools, admin with operator filters and failure-reason reports, a short pending-retry policy aligned to partner codes, and notes on how plan-fetch updates when the aggregator changes pack APIs. Source and environments follow the contract.",
          "We refuse invented client logos, star ratings, “crore recharges monthly” banners, and any claim that we are a telecom or hold TRAI licences. Operator brands belong to those operators; listing them as if we were an official channel is misleading when we only build software on your aggregator.",
        ],
      },
      {
        heading: "Scoping questions for recharge software",
        paragraphs: [
          "Which aggregator issues the API, and do they offer plan fetch? Which operators must work on week one? How are margins defined (flat, percent, per-operator)? Will recharge share an app with BBPS or DMT? Who funds the aggregator reserve? Do you need SMS or print receipts at the counter?",
          "Published plans: ₹99,999 / ₹1,99,999 / ₹3,99,999 on [pricing](/pricing). Aggregator setup fees and margin share are separate. Send docs via [contact](/contact). Prefer a short written brief over demanding an instant WhatsApp quote without partner constraints.",
        ],
      },
      {
        heading: "Margin maths without fantasy earnings claims",
        paragraphs: [
          "Distributor networks care about margin waterfall: aggregator price → master margin → distributor margin → retailer margin. The software should show the slab the logged-in role is allowed to see — not a public “earn lakhs” banner. When a promotional operator pack temporarily changes commission, admin needs a way to update that row without a code deploy.",
          "We configure what your commercial sheet specifies. If the sheet does not exist yet, finish commercial talks with the aggregator before polishing retailer dashboards that display invented numbers.",
          "High-volume days (salary week, festival evenings) stress status polling and partner balance. Build alerts for low aggregator reserve into ops practice; the nicest UI will not top up a depleted partner wallet by itself.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does recharge software actually sell?",
        answer:
          "A branded way for retailers to submit prepaid mobile, DTH and similar top-ups through your aggregator API — plus distributor stock and admin reports. We do not hold operator inventory.",
      },
      {
        question: "Do you provide operator connections?",
        answer:
          "By default you bring the aggregator. We integrate their documented API. We only supply a rail when a specific contract says so in writing.",
      },
      {
        question: "How are retailer commissions set?",
        answer:
          "Admin configures slabs from your commercial sheet — flat, percentage or operator-wise when the data model allows. We do not invent margins.",
      },
      {
        question: "Why not list supported operators on this page?",
        answer:
          "Operator and pack catalogues change on the partner side. A frozen marketing list misleads retailers within weeks.",
      },
      {
        question: "How should pending recharges be treated?",
        answer:
          "Status polling and callbacks drive the UI; ops use reference ids with the aggregator; blind double-submit is blocked in the flow we build.",
      },
      {
        question: "When should I use BBPS instead of recharge?",
        answer:
          "For enrolled billers and many postpaid or utility dues on Bharat BillPay. Prepaid packs usually stay on the recharge aggregator. The brief assigns each SKU to a rail.",
      },
      {
        question: "What is the software price for a recharge panel?",
        answer:
          "Published fintech plans are ₹99,999, ₹1,99,999 and ₹3,99,999. Partner and operator-side fees are separate.",
      },
      {
        question: "Can distributors set different margins per operator?",
        answer:
          "Yes when the brief and data model allow it. Configuration follows your commercial rules, not a hidden rate we market as guaranteed income.",
      },
      {
        question: "Do you build a consumer-facing recharge website?",
        answer:
          "This page is the retailer–distributor–admin stack. A public consumer recharge site is a different product shape — say so in the brief and we scope it under website or custom software instead of assuming the agent panel is enough.",
      },
      {
        question: "What receipts can the retailer share?",
        answer:
          "Printable or shareable last-transaction details with partner reference ids, as scoped. Receipts are for counter disputes; they are not a substitute for aggregator settlement files in admin.",
      },
      {
        question: "How often do plan catalogues change?",
        answer:
          "Often enough that hard-coding packs in the app is a bad idea. When the aggregator offers plan fetch, we use it; when packs change via their API, maintenance updates follow under a support agreement.",
      },
      {
        question: "Is utility bill pay part of recharge software?",
        answer:
          "Usually no — enrolled utility bills belong on Bharat BillPay via the BBPS page. Recharge software here is prepaid mobile, DTH and similar top-ups on your aggregator.",
      },
    ],
    related: [
      { href: "/services/fintech-app-development/bbps-software", title: "BBPS software", text: "Bharat BillPay for postpaid and utility bills." },
      { href: "/services/fintech-app-development/aeps-software", title: "AEPS software", text: "Aadhaar-enabled payments at the counter." },
      { href: "/services/fintech-app-development/dmt-software", title: "DMT software", text: "Domestic money transfer for the same network." },
      { href: "/services/mobile-app-development", title: "Mobile app development", text: "Dedicated store builds for retailer counters." },
      { href: FINTECH_HUB_PATH, title: "Fintech hub", text: "BBPS, AEPS, DMT and recharge together." },
      { href: "/blog/fintech-app-development-india", title: "Operator buying guide", text: "Modules, hierarchy and realistic MVP cost." },
      { href: "/contact", title: "Contact", text: "Share aggregator docs for a scoped recharge estimate." },
    ],
  },
];

export const FINTECH_PRODUCT_SLUGS = fintechProductPages.map((page) => page.slug);

export function getFintechProductBySlug(slug) {
  return fintechProductPages.find((page) => page.slug === slug) || null;
}
