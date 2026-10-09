/**
 * Daily organic batch — 9 October 2026.
 * Ids 434–435 only. Two tech/business posts.
 * Do not reuse these ids in other blog data files.
 */
export const dailyOrganicBatch20261009Posts = [
  {
    id: 434,
    slug: "csms-rfp-checklist-ocpp-platform-evaluation",
    title: "CSMS RFP Checklist: How to Evaluate an OCPP Platform",
    metaTitle: "CSMS RFP Checklist: How to Evaluate an OCPP Platform",
    excerpt:
      "A CSMS RFP that only says OCPP support fails on a mixed fleet. Use this 12-row scorecard, and a Vendor A versus B example, before you shortlist a platform.",
    keywords:
      "CSMS RFP checklist, OCPP platform evaluation, CPMS procurement, OCPP 1.6 and 2.0.1 mixed fleet, charge point operator",
    content: `
<p>The protocol line in a regional operator's tender was one sentence: the platform must support OCPP. Three vendors ticked it. The motorway DC stalls still would not boot, because they spoke OCPP 2.0.1 and the only lab certificate in the file was for OCPP 1.6. <strong>A charging station management system, the CSMS, is the back office a charger talks to. OCPP is that conversation. An RFP that never names the version, the certificate, or a mixed-fleet test has bought a slogan.</strong></p>
<p>A fleet depot and a property owner hit the same gap. The depot cares which vans leave full. The property owner cares that tenants are billed from separate logins. The scorecard is the shortlist. Building the back office, once the rows are honest, is <a href="/services/ev-charging-app-development">EV charging software</a>. Work that is wider than chargers sits on <a href="/services/software-development">custom software</a>.</p>
<h2>What is a CSMS, in plain language?</h2>
<p>A charger has a meter, a connector, and a network link. It does not know your tariff or your accountant. The CSMS is the server that does. The charger identifies itself, reports status and meter values, and accepts start, stop, reset, and unlock. Operators also say CPMS. OCPP 1.6 calls the server a Central System. From 2.0.1 the Open Charge Alliance's name is CSMS.</p>
<p>OCPI is a different conversation: your platform to a roaming partner or an e-mobility service provider, not the stall. The driver app is how a person finds a charger and reads a receipt. Scoring only the app funds a map that cannot start a session. Terms are in the <a href="/blog/ev-charging-software-glossary">glossary</a>. Roaming roles are in <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI for CPOs and eMSPs</a>. Build, white-label, or SaaS is a separate decision, in <a href="/blog/build-vs-buy-ev-charging-csms">build versus buy</a>.</p>
<h2>Why do RFPs fail when they only ask for OCPP support?</h2>
<p>The same tick can mean a certified 1.6 stack, a 2.0.1 core with 2.1 still on a slide, or a private binary that only boots in the vendor's lab.</p>
<p>The Alliance states that OCPP 1.6 is not compatible with 2.0.1, and not with 2.1. A charger that speaks only 1.6 will not boot onto a backend that speaks only 2.0.1. A platform that claims both must run both stacks, with the version chosen per charger. A real test names the model, the firmware, the version string, and a finished session with energy on the meter.</p>
<p>The 2.0.1 certification program opened in 2023. Core is mandatory and includes basic security, profiles 1 and 2, so TLS with basic authentication is in that mark. Client-certificate TLS, Smart Charging, and ISO 15118 are optional profiles. The device model is optional inside Core. Ask for the certificate, the lab, the date, and the PICS. A Core mark does not prove smart charging or Plug and Charge.</p>
<h2>Which OCPP version should the RFP name?</h2>
<p>Name a version string. OCPP 2.0 and OCPP 2.0.1 are different documents. The Alliance treats 1.6 (2015, still widely used), 2.0.1 (2020), and 2.1 (January 2025) as the versions to plan against. Edition 3 of 2.0.1 was approved as IEC 63584 in 2024. The January 2025 note says 2.1 extends 2.0.1 and that 1.6 stays supported. Support does not make a 1.6 charger speak 2.0.1.</p>
<p>For a new stall, write 2.0.1 as the baseline, and require TLS rather than hoping for it. Keep 1.6, including the JSON binding operators call 1.6J, on chargers that already speak it. Ask for 2.1 for the additions in the Alliance's January 2025 note: ISO 15118-20 bidirectional power, V2X, DER control, battery swapping, and local cost on the station. IEC 63584-210:2026, published on 22 September 2026, replaces the 2025 edition of that text. Those pages set no universal switch-over date. Protocol detail is in <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6, 2.0.1, and 2.1</a>.</p>
<h2>What belongs on a 12-row evaluation scorecard?</h2>
<p>Score the written answer. A pass is evidence you can file. A fail is a slogan, a roadmap, or a test on the wrong version.</p>
<table>
<thead>
<tr><th>Criterion</th><th>What to ask</th><th>Pass or fail</th></tr>
</thead>
<tbody>
<tr><td>OCA or lab evidence</td><td>Certificate, version, profiles, lab, date, and the PICS.</td><td>Pass: version matches the fleet and the PICS lists what you need. Fail: "compliant," or a 1.6 certificate for 2.0.1 stalls.</td></tr>
<tr><td>Mixed 1.6 and 2.0.1</td><td>One account, two named models, boot, remote start, energy, stop.</td><td>Pass: a dated report on those models. Fail: no report.</td></tr>
<tr><td>Smart charging profiles</td><td>Which profiles were lab-tested, and a limit set during a live session.</td><td>Pass: Smart Charging on the certificate, or a 1.6 profile test on your hardware. Fail: a roadmap bullet.</td></tr>
<tr><td>Remote commands</td><td>Who may start, stop, reset, and unlock, and where the reply is logged.</td><td>Pass: both versions, with the user on the log. Fail: only vendor staff can reset.</td></tr>
<tr><td>Session and CDR export</td><td>Charge detail records by file and API, plus a column list.</td><td>Pass: finance receives them without a screen download. Fail: no export until you leave.</td></tr>
<tr><td>OCPI roaming</td><td>Version, modules, and a sandbox on a named hub.</td><td>Pass: locations, tariffs, sessions, and CDRs for year one. Fail: "we will introduce a partner."</td></tr>
<tr><td>Multi-tenant and white-label</td><td>How a second brand sees only its sites and money, and whose name is on the receipt.</td><td>Pass: a tenant export and a branded receipt in the trial. Fail: one shared login.</td></tr>
<tr><td>API and webhooks</td><td>Session start, session end, status, fault, a sandbox key, and retries.</td><td>Pass: a written list and a working key. Fail: "API available," and no document.</td></tr>
<tr><td>Billing flexibility</td><td>Energy, time, occupancy, a session fee, a member price, and an ad-hoc price.</td><td>Pass: your shapes are configurable and the receipt shows them. Fail: one opaque session price.</td></tr>
<tr><td>Staged migration and rollback</td><td>Move one site, leave the rest, and restore a failed site.</td><td>Pass: rollback without a firmware gamble. Fail: one weekend for every stall.</td></tr>
<tr><td>Uptime monitoring</td><td>Is "down" a missed heartbeat, a failed start, a fault, or a session with no energy?</td><td>Pass: alerts on failed starts, with a person named. Fail: a green map because the modem answered.</td></tr>
<tr><td>Support SLA</td><td>Hours, response when a stall cannot start, who may reset, and whether hardware support is included.</td><td>Pass: exclusions are in the contract, including power, mobile network, and planned work. Fail: "24/7" only on a slide.</td></tr>
</tbody>
</table>
<h2>How does a mid-size operator score two vendors?</h2>
<p>A fictional operator, not a named vendor: about 80 connectors, 50 AC on OCPP 1.6 JSON and 30 DC on 2.0.1, one OCPI hub next year, and three landlord sites that need their own export. Score Vendor A and Vendor B on five rows.</p>
<table>
<thead>
<tr><th>Row</th><th>Vendor A</th><th>Vendor B</th></tr>
</thead>
<tbody>
<tr><td>Lab evidence</td><td>A 1.6 Core certificate. 2.0.1 is described as next year's roadmap. Fail for the DC stalls.</td><td>A 2.0.1 certificate with Core and Smart Charging, PICS attached, plus a 1.6 certificate for the AC models. No claim of client-certificate TLS. Pass for this scope.</td></tr>
<tr><td>Mixed fleet</td><td>"Protocol agnostic." No model names. Fail.</td><td>A dated report: the AC model on 1.6 JSON and the DC model on 2.0.1, same account, remote start and energy on each. Pass.</td></tr>
<tr><td>CDR export</td><td>A CSV from the session screen. No column list, no API. Fail against a nightly finance file.</td><td>An API and a nightly file, a column dictionary, and a 20-session sample. Pass.</td></tr>
<tr><td>OCPI</td><td>"We can introduce a roaming partner." No modules, no sandbox. Fail.</td><td>A sandbox on a named hub for locations, tariffs, sessions, and CDRs. Tokens and commands written as a later phase, in the answer, not hidden. Pass for year one.</td></tr>
<tr><td>Migration</td><td>A weekend cutover of all 22 sites. No rollback. Fail.</td><td>Site by site. 1.6 stalls stay on the old central system until that site passes. Rollback is an endpoint change, not a firmware flash. Pass.</td></tr>
</tbody>
</table>
<p>Vendor B meets the tender. Vendor A is comparable only if 2.0.1, roaming, export, and rollback leave the scope. A lower platform fee does not rescue four failed rows. A depot would weight smart charging above the landlord portal. A property owner would invert that. The rows stay. The pass mark moves.</p>
<h2>Which commercial red flags should stop a signature?</h2>
<p>If sessions live only in a database you cannot export, the charger is a tenant of someone else's server. Rehearse the export while you are still a prospect. A file "on termination, in a reasonable format" is how the tariff column disappears.</p>
<p>A roadmap for 2.0.1, smart charging, or the OCPI module you need this year fails that row. Sign a later phase as a later phase. Fee surprises are categories, not a percentage invented here: per connector or site, per session, a share of energy or of the tariff, white-label, roaming, and payment processing outside the CSMS. The bad pattern is a platform fee now and an energy share after go-live. The base of any share belongs on the page you sign.</p>
<h2>When is a product enough, and when is custom work the job?</h2>
<p>A productised CSMS fits when your models are on that vendor's tested list, tariffs are shapes it already configures, you are one brand, and the OCPI hub is one it already speaks. Custom work fits a quirky 1.6 firmware, a missing landlord portal, a depot rule tied to the clock, or a roaming partner they do not speak. <a href="/blog/build-vs-buy-ev-charging-csms">Build versus buy</a> comes before this tender. The tender stops the buy from being a black box.</p>
<p>Published EV ranges on this site start at ₹4,50,000 for an eMSP or CPO MVP, then ₹9,00,000 and ₹18,00,000. Indian rupees, ex-GST, after discovery. Not an 80-connector quote, a seat, or hardware. The figure moves with how many models you test, whether both protocol versions ship first, and whether OCPI and a driver app are in scope. See <a href="/blog/ev-charging-cms-software-cost-guide">the CMS cost guide</a> and <a href="/blog/ev-charging-app-ocpi-ocpp-guide">the OCPI and OCPP guide</a>. Market notes, if you need them, are <a href="/blog/ev-charging-csms-india-cpo-guide">India</a> and <a href="/blog/ev-charging-csms-uk-europe-cpo-guide">the UK and Europe</a>. For a pack built from these twelve rows, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>What is a CSMS?</h3>
<p>The server a charger talks to over OCPP: status, meter values, and commands. OCPI and the driver app are separate.</p>
<h3>Why is a line that says OCPP support not enough?</h3>
<p>1.6 does not speak 2.0.1. Without a version, a certificate, and a test on your models, every vendor can tick the same box.</p>
<h3>Which version should a new deployment ask for?</h3>
<p>2.0.1 for new stalls, 1.6 where chargers already speak it, and 2.1 for bidirectional charging, DER control, or ISO 15118-20.</p>
<h3>Does an OCA Core certificate prove smart charging?</h3>
<p>No. On 2.0.1, Smart Charging is an optional profile. Read the PICS.</p>
<h3>Can one platform run 1.6 and 2.0.1 chargers?</h3>
<p>Only if it runs both stacks and you test both. The versions are not compatible.</p>
<h3>What should the fee schedule show?</h3>
<p>Per connector or site, per session, any share of energy or of the tariff, white-label, roaming, and payment processing.</p>
`,
    category: "casestudy",
    tags: ["csms", "ocpp", "rfp", "ev charging"],
    imageUrl: "/images/blog-og/csms-rfp-checklist-ocpp-platform-evaluation.svg",
    date: "2026-10-09",
    updatedAt: "2026-10-09T09:00:00+05:30",
    readTime: "12 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development", "software-development"],
    faqs: [
      {
        question: "What is a CSMS?",
        answer:
          "It is the back office a charger talks to: status, meter values, tariffs, and commands such as start, stop, and reset. OCPP is the open protocol for that link. OCPI and the driver app are different jobs.",
      },
      {
        question: "Why is a line that says OCPP support not enough?",
        answer:
          "1.6, 2.0.1, and 2.1 are different specifications, and 1.6 does not speak 2.0.1. Without a version, a certificate, and a test on your charger models, every vendor can tick the same box.",
      },
      {
        question: "Which version should a new deployment ask for?",
        answer:
          "2.0.1 is the usual baseline for new stalls. Keep 1.6 where the installed chargers speak 1.6. Ask for 2.1 when you need ISO 15118-20, bidirectional charging, or DER control.",
      },
      {
        question: "Does an OCA Core certificate prove smart charging?",
        answer:
          "No. For OCPP 2.0.1, Core is mandatory and Smart Charging is an optional profile. The device model is an optional feature inside Core. Read the PICS.",
      },
      {
        question: "Can one platform run 1.6 and 2.0.1 chargers?",
        answer:
          "Yes, if it runs both stacks and you test both. The Open Charge Alliance is explicit that 1.6 and 2.0.1 are not compatible.",
      },
      {
        question: "What should the fee schedule show?",
        answer:
          "Every category you will pay: per connector or site, per session, any share of energy or of the tariff, white-label, roaming, and payment processing. A protocol pass does not waive a missing fee.",
      },
    ],
  },
  {
    id: 435,
    slug: "custom-crm-vs-salesforce-mid-market-2026",
    title: "Custom CRM vs Salesforce for Mid-Market Teams (2026)",
    metaTitle: "Custom CRM vs Salesforce for Mid-Market Teams (2026)",
    excerpt:
      "Salesforce wins when the sales process is standard. A custom CRM wins when the ERP and WhatsApp are the real system. A scored distributor example.",
    keywords:
      "custom CRM vs Salesforce 2026, mid-market CRM decision, Salesforce or custom build, ERP WhatsApp quoting",
    content: `
<p>Tuesday's sales meeting opened on two printouts and no prices. One was a Salesforce edition grid with the seat column covered, because nobody had opened the current price list. The other was a custom-build proposal: one screen for stock, credit, and the WhatsApp thread reps already use as a quote. Both said "single view of the customer." The reps were still typing prices into a phone. <strong>Salesforce, or another major SaaS CRM, wins when the way you sell already looks like its standard objects and you will staff an admin. A custom system wins when the ERP, the warehouse, and the field visit are the real system. Most mid-market teams land between them: a hybrid, with one place a price is allowed to be born.</strong></p>
<p>Building around the process is <a href="/services/crm-erp-development">CRM and ERP development</a>. Configuring, integrating, or extending the platform is <a href="/services/salesforce">Salesforce implementation</a>. TheTriFusion does not sell Salesforce licences.</p>
<h2>When does Salesforce, or a major SaaS CRM, win?</h2>
<p>It wins when accounts, contacts, and opportunities already describe the week. A services firm with a pipeline and a forecast can live on standard objects, an admin, and the vendor's reports. It also wins when the pain is discipline: deals stuck in inboxes, or a quote that is only price times quantity. Buy the product. Spend the project on clean data and the integration that stops the Friday spreadsheet.</p>
<h2>When does a custom system win?</h2>
<p>It wins when the rep's question is not the stage name. It is whether this quantity can be promised, at a price the ERP still stands behind, against live stock and a credit hold, in the channel the buyer already uses. If that answer exists only in the ERP, people update the CRM after the decision and the licence is still due. Agencies whose job numbers are not opportunity stages hit the same wall. So does a distributor whose ERP price moves through the week: a second price list in the CRM is wrong by Thursday. An unfamiliar layout is not this problem. An admin can move fields. An admin cannot invent a credit engine.</p>
<h2>Which factors actually move the decision?</h2>
<p>Integration is the factor teams under-scope. The ERP, the warehouse, the phone system, and WhatsApp are separate projects. A nightly file is not a live credit hold, and a call log does not know the stock. A personal WhatsApp thread is not a record. A proper link uses the WhatsApp Business Platform, with templates and a log of what was sent. Meta publishes message pricing on its own card. Read that card when you model cost.</p>
<p>Licences sprawl when a warehouse login that only views a hold is priced like a seller. Reps, managers, view-only staff, and an integration user for the ERP are different access. Check Salesforce's current price list and edition comparison. Seat prices are not printed here. The year-two risk is skills: a platform without an admin, or a custom system without a developer, both rot. Offline is a test, not a brochure. Create a quote with no signal, price it from the last list the phone may store, and sync it later. Office wifi passes a different product. Put the hosting country on the order form, and ask counsel which law covers customer phone numbers. If prices move in the ERP every week, the CRM must not keep a copy.</p>
<h2>How do buy, hybrid, and custom compare?</h2>
<p>Read across the row that hurts you. A column that looks friendly on time-to-value and hostile on the data you need is not a win.</p>
<table>
<thead>
<tr><th>Factor</th><th>Buy Salesforce</th><th>Hybrid</th><th>Custom</th></tr>
</thead>
<tbody>
<tr><td>Time to value</td><td>Weeks, if you accept standard objects. The ERP link sets the date.</td><td>Two go-lives: the CRM, then the quote service.</td><td>Slower to a first screen, then one app.</td></tr>
<tr><td>Licence versus build</td><td>Check Salesforce's price list for seats. Delivery here starts at ₹80,000, then ₹2,00,000 and ₹4,00,000. Not seats.</td><td>Seats plus a smaller build.</td><td>No CRM seat. Custom ranges start at ₹3,00,000, then ₹6,00,000 and ₹11,00,000, ex-GST, after discovery.</td></tr>
<tr><td>Customization ceiling</td><td>Flows and layouts, until a quote must reserve stock against a credit hold.</td><td>Fails if both systems own the price.</td><td>The ceiling is the scope you fund.</td></tr>
<tr><td>Who owns the records</td><td>You own the records. The exit is a tested export.</td><td>Quote data can be yours. Activity stays on the platform.</td><td>You own the tables and, if the contract says so, the code.</td></tr>
<tr><td>AI add-ons</td><td>Often a separate product. Read the current SKU.</td><td>Put the assistant on the system that holds the fact.</td><td>You choose the model. Assistant builds here start at ₹2,00,000, not the model bill.</td></tr>
<tr><td>Reporting</td><td>Strong on data in the org. Weak if stock is only in the ERP.</td><td>Name one official number.</td><td>You build the report. Empty charts are the default.</td></tr>
<tr><td>Mobile and offline</td><td>Test a quote with no signal, not an office demo.</td><td>The quote app works offline. The CRM catches up.</td><td>Same test. Custom does not pass by default.</td></tr>
<tr><td>Integrations</td><td>A nightly file is not a live credit hold.</td><td>ERP keeps stock and credit. CRM keeps the visit.</td><td>One screen can read the ERP. Plan for downtime.</td></tr>
<tr><td>Vendor lock-in</td><td>Lower once you have rehearsed an export.</td><td>Two vendors. Write which one you could leave.</td><td>Lock-in is the team. The repository is the exit.</td></tr>
<tr><td>Hiring</td><td>Without an admin the org decays.</td><td>A light admin, plus an owner for the quote service.</td><td>Hire for the stack you chose.</td></tr>
</tbody>
</table>
<h2>How does a distributor with 40 reps score it?</h2>
<p>Score one mid-size industrial distributor, not an industry average: 40 field reps, a small inside-sales desk, an ERP that already holds stock, prices, and credit holds, quotes mostly on WhatsApp, no Salesforce admin, and one IT generalist.</p>
<table>
<thead>
<tr><th>Factor</th><th>What this firm actually has</th><th>Lean</th></tr>
</thead>
<tbody>
<tr><td>Quote</td><td>A price cannot go out until stock and the credit hold have been checked.</td><td>Away from a CRM-only buy.</td></tr>
<tr><td>ERP</td><td>Already live, and it is the source of stock, price, and credit.</td><td>Integration is mandatory, not a phase-two slide.</td></tr>
<tr><td>Logins</td><td>Forty reps, plus warehouse staff who only need to see a hold.</td><td>Check licence types on the current price list before anyone models a cost.</td></tr>
<tr><td>Field</td><td>Shop visits and weak signal. The quote starts in WhatsApp.</td><td>An offline test is a gate, not a nice-to-have.</td></tr>
<tr><td>Admin</td><td>No platform admin. One generalist.</td><td>Hybrid needs a partner admin or a hire. Custom needs a developer either way.</td></tr>
<tr><td>Price changes</td><td>The ERP price list moves through the week.</td><td>The CRM must not keep a second price list.</td></tr>
</tbody>
</table>
<p>Buy-only loses: the opportunity would be typed after the price was already sent. Hybrid fits when the forecast stays on Salesforce and a thin service reads stock and credit, then writes the outcome back. Custom fits when the rep will carry one app and the firm will not hire a platform admin. Decide after the current price list for that licence mix, and after a week of quotes created with no signal.</p>
<h2>What are the four ways to implement?</h2>
<p>Out of the box, plus an admin, configures objects, layouts, and simple automation. Upgrades stay with the vendor. A quote that does not fit stays in WhatsApp. That is the right shape for the services firm above, and the wrong shape for the distributor.</p>
<p>AppExchange plus a partner adds packages for telephony, WhatsApp, or an ERP connector. You write less code and collect more contracts. Every platform release is a week of retesting. Ask whether the ERP package checks credit live or only drops a nightly file.</p>
<p>Custom work on the platform, with custom objects and Lightning web components, keeps the rep in one org. You pay licences and a build, inside the platform's limits. Published Salesforce delivery ranges on this site are ₹80,000, ₹2,00,000, and ₹4,00,000. Indian rupees, ex-GST, after discovery. Not seats. Configuration and a quoting application inside the org are different lines.</p>
<p>A greenfield CRM is your tables and your screen. You own uptime and the reports. Published custom ranges start at ₹3,00,000 for a single module, then ₹6,00,000 and ₹11,00,000, ex-GST, after discovery. A pipeline and a stock reservation are not the same line.</p>
<h2>Where does AI sit, and what about compliance?</h2>
<p>AI in the CRM sits on records you already trust. Salesforce has been adding that layer, including Agentforce and Koa. Those are product-news pages: <a href="/blog/salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch">what teams watch</a> and <a href="/blog/salesforce-koa-crm-reasoning-model-nvidia-nemotron-explained">Koa in plain language</a>. A reasoning feature does not clear a credit hold, and it does not know a price that lives in the ERP. If you build the assistant, cost drivers are on <a href="/blog/ai-app-development-cost-india-2026">the AI app cost guide</a>. The ₹2,00,000 starting range on this site is an assistant engagement, ex-GST, after discovery, not a model invoice.</p>
<p>Ask counsel which law applies to customer phone numbers and order history, and put the hosting country on the order form. Keep a privacy notice and a retention rule whichever column you pick.</p>
<h2>Who does the work after the decision?</h2>
<p>Either path can be delivered from Jaipur. How that engagement is shaped is in <a href="/blog/software-development-company-jaipur-guide">the Jaipur software guide</a>. Named capacity after the first release, for UK and Australian teams, is in <a href="/blog/hire-dedicated-developers-cost-guide-uk-australia">the dedicated developer guide</a>. That page is capacity, not a salary survey and not a seat price. Bring the price list, the ERP record that owns stock and credit, and one WhatsApp quote. Start from <a href="/services/salesforce">Salesforce</a> or <a href="/services/crm-erp-development">CRM and ERP</a>, or <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>When should a mid-market team buy Salesforce?</h3>
<p>When accounts and opportunities already match the week, and the pain is a shared pipeline. You still need an admin and the current price list.</p>
<h3>When is a custom CRM the better fit?</h3>
<p>When the quote must read live stock and a credit hold, often via WhatsApp, so a standard opportunity would be filled in after the promise.</p>
<h3>What is the hybrid?</h3>
<p>Salesforce holds the account, the visit, and the forecast. A smaller service creates the price from the ERP and writes the outcome back.</p>
<h3>Does this page list Salesforce seat prices?</h3>
<p>No. Check the current price list for the edition and for view-only logins. Figures here are implementation ranges in Indian rupees.</p>
<h3>What do the published ranges cover?</h3>
<p>Salesforce delivery starts at ₹80,000, then ₹2,00,000 and ₹4,00,000. A custom module starts at ₹3,00,000, then ₹6,00,000 and ₹11,00,000. Ex-GST, after discovery. Not seats.</p>
<h3>Do we need a lawyer before we choose?</h3>
<p>Counsel covers which law applies and the hosting country on the order form. You can open the price list and run the offline test without that opinion.</p>
`,
    category: "webdev",
    tags: ["crm", "salesforce", "mid-market", "erp"],
    imageUrl: "/images/blog-og/custom-crm-vs-salesforce-mid-market-2026.svg",
    date: "2026-10-09",
    updatedAt: "2026-10-09T09:00:00+05:30",
    readTime: "12 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["crm-erp-development", "salesforce"],
    faqs: [
      {
        question: "When should a mid-market team buy Salesforce?",
        answer:
          "When accounts, contacts, and opportunities already match the week, and the pain is a shared pipeline rather than a unique quote. You still need an admin, a data cleanup, and the current price list.",
      },
      {
        question: "When is a custom CRM the better fit?",
        answer:
          "When the quote has to read live stock and a credit hold, and the channel is something like WhatsApp, so a standard opportunity would be filled in after the promise was already made.",
      },
      {
        question: "What is the hybrid?",
        answer:
          "Salesforce holds the account, the visit, and the forecast. A smaller service creates the price by reading the ERP, then writes the outcome back. Both systems must not own the price.",
      },
      {
        question: "Does this page list Salesforce seat prices?",
        answer:
          "No. Check the current Salesforce price list for the edition and the licence types you would buy. Figures on this site are implementation ranges in Indian rupees.",
      },
      {
        question: "What do the published ranges cover?",
        answer:
          "Salesforce delivery on this site starts at ₹80,000, then ₹2,00,000 and ₹4,00,000. A custom CRM module starts at ₹3,00,000, then ₹6,00,000 and ₹11,00,000. Ex-GST, after discovery. Not seats.",
      },
      {
        question: "Do we need a lawyer before we choose?",
        answer:
          "You need counsel for which law applies to customer data and for the hosting country on the order form. You do not need a legal opinion to run the offline quote test or to open the price list.",
      },
    ],
  },
];
