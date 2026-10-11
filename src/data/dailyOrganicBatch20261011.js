/**
 * Daily organic batch — 11 October 2026.
 * Ids 438–439 only. Two tech/business posts.
 * Do not reuse these ids in other blog data files.
 */
export const dailyOrganicBatch20261011Posts = [
  {
    id: 438,
    slug: "iso-15118-plug-and-charge-cpo-software-guide",
    title: "ISO 15118 Plug & Charge: What CPOs Need in Software",
    metaTitle: "ISO 15118 Plug & Charge: What CPOs Need in Software",
    excerpt:
      "Plug and Charge starts a session from a certificate only when the car, charger, and back office agree. A readiness table and a 40-car depot call.",
    keywords:
      "ISO 15118 Plug and Charge, CPO software, contract certificate, OCPP 2.0.1, CSMS",
    content: `
<p>A driver plugged in, waited for the app to see the bay, then patted a jacket that did not have the card. The stall was new. The start method was not. <strong>Plug and Charge means the vehicle authenticates and authorises the session when the cable is plugged in, using certificates, so the driver skips the app and the RFID card for that session.</strong> It happens only when the car, the charger, and the back-office trust chain all succeed. A sticker that says ISO 15118 is not that chain.</p>
<p>Which OCPP edition to buy is the <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP comparison</a>. Letting another network's driver start is the <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI explainer</a>. Scoring a platform is the <a href="/blog/csms-rfp-checklist-ocpp-platform-evaluation">CSMS RFP checklist</a>. CSMS and eMSP are in the <a href="/blog/ev-charging-software-glossary">glossary</a>. This page is the certificate path those pages leave open.</p>
<h2>What has to succeed before the driver can skip the card?</h2>
<p>The car presents a contract certificate. That certificate names a charging contract, commonly through an e-mobility account identifier, the eMAID. The charger checks the chain against a trust root it already holds, then tells the central system which contract may take energy. The bill follows the contract. For that session there is no card tap and no app confirmation.</p>
<p>Drop one piece and the session does not start on the certificate. No contract on the car, no ISO 15118 on the charger, a central system with only RFID tokens, or a root that will not trust the contract: each one stops Plug and Charge. Failing closed is safe. It still strands the driver if that stall has no card or app path.</p>
<h2>Who does what, from the car to the contract provider?</h2>
<p>The car holds two credentials. An OEM provisioning certificate, often keyed by a PCID, is how a contract is installed. The contract certificate is what a later charge presents. A spreadsheet of PCIDs, with nothing installed, has not enrolled anyone.</p>
<p>ISO 15118 is the conversation on the cable. On a wired post it uses the control-pilot link, inside TLS, so the car can check the charger. ISO 15118-2 and ISO 15118-20 are different generations. A pass on -2 does not prove -20, and bidirectional power sits with the later one. Write the edition on the order.</p>
<p>OCPP is the hop from the charger to the CSMS. The charger does not invent the contract. When the car asks for a certificate to be installed or refreshed, an OCPP 2.0.1 charger forwards that request with Get15118EVCertificate. The CSMS asks the contract-certificate provider, the eMSP or a specialist that eMSP uses, and returns the answer. Without that message, the install dies even though the car asked correctly.</p>
<p>Someone also has to issue the contract and load the matching trust roots onto the charger. A certificate those roots do not cover will not authorise. A visitor whose eMSP is outside the roots you installed will not Plug and Charge here. That is a roaming choice, not a firmware tick.</p>
<h2>Why do new buys pair the charger with an OCPP 2.0.1-class back office?</h2>
<p>On the Open Charge Alliance certification for OCPP 2.0.1, Core is mandatory and ISO 15118 Support is optional. The Alliance describes that profile as support for ISO 15118 smart charging and Plug and Charge authorization. The certification text treats it as depending on security and smart-charging cases, not as a logo on a Core-only product. A Core mark does not mean the product can install a contract. Ask for the certificate, the lab, the date, and whether that profile is on it.</p>
<p>A site that wants Plug and Charge usually pairs the charger with a 2.0.1-class backend, because installing trust roots and forwarding the car's certificate request belong to that edition. OCPP 1.6 still runs cards and apps on a large installed base. Stretching 1.6 to carry contracts is a special project. A 1.6 token table is not a certificate store.</p>
<p>A public site can keep a terminal and an app for cars with no contract. Put a switch-over date in the order only if the vendor shows the clause and the jurisdiction. If the stall claims ISO 15118-20 or bidirectional power, read the <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP comparison</a> before you treat 2.0.1 as enough. Buy versus build for the CSMS is <a href="/blog/build-vs-buy-ev-charging-csms">a separate decision</a>.</p>
<h2>Which answers should you demand before you believe the claim?</h2>
<p>Score the chain. A pass is a firmware name, an owner, or a session you can repeat. A fail is a phrase on a slide.</p>
<table>
<thead>
<tr><th>Layer</th><th>Question for the vendor or installer</th><th>Pass signal</th></tr>
</thead>
<tbody>
<tr><td>Charger, ISO 15118-2</td><td>Which firmware speaks -2, and where is a contract start with no card?</td><td>Pass: model, firmware, dated log. Fail: "ready" with no edition.</td></tr>
<tr><td>Charger, ISO 15118-20</td><td>Is -20 separate, and does this buy need bidirectional power?</td><td>Pass: its own test, or "not in this buy". Fail: a -2 log sold as -20.</td></tr>
<tr><td>Certificate install</td><td>Who issues the contract, and how does the car receive it?</td><td>Pass: named provider and one install on a company car. Fail: "the cars already support it."</td></tr>
<tr><td>CSMS contract auth</td><td>Can the back office authorise and bill the contract, beside RFID?</td><td>Pass: session stores the contract id. Fail: only an RFID or app id.</td></tr>
<tr><td>Trust roots</td><td>Who installs the charger roots, and who refreshes them?</td><td>Pass: named owner and a change record. Fail: factory roots nobody can list.</td></tr>
<tr><td>Card and app fallback</td><td>What starts the session when the handshake fails?</td><td>Pass: same stall, card or app, method in the log. Fail: bay stays dead.</td></tr>
<tr><td>Roaming and the eMSP</td><td>Whose contracts count here, and who gets the charge record?</td><td>Pass: issuers listed, or foreign contracts refused. Fail: "roaming" and no issuer.</td></tr>
<tr><td>Fleet cars and walk-up</td><td>Which cars must use Plug and Charge, and which may use a card?</td><td>Pass: the RFP splits the groups. Fail: one promise for staff and visitors.</td></tr>
<tr><td>TLS and renewal</td><td>Who renews the charger certificate in the car handshake?</td><td>Pass: named team and a renewal you watched. Fail: no calendar.</td></tr>
<tr><td>Uplink down</td><td>What happens if the central system is unreachable during the check?</td><td>Pass: tested fallback or a clear refusal. Fail: nobody pulled the lead.</td></tr>
</tbody>
</table>
<h2>Should a 40-car depot require Plug and Charge on the next RFP?</h2>
<p>West Shed is fictional. Forty company cars, one bay each on the next buy, two generalists who also keep the ERP up, and no certificate authority on staff. Twenty-eight cars can hold a contract. Twelve older pool cars only have a card. Contractors use a guest card. Feeder limits and departure order are a different job, in the <a href="/blog/ev-depot-smart-charging-load-management-guide">depot load guide</a>. This table is only how a session is allowed to start.</p>
<table>
<thead>
<tr><th>Factor</th><th>What this yard actually has</th><th>Call</th></tr>
</thead>
<tbody>
<tr><td>Driver friction</td><td>Lost cards. Newer cars could skip the app step.</td><td>Useful for those twenty-eight. Keep the card.</td></tr>
<tr><td>Certificate work</td><td>Two generalists. No in-house certificate service.</td><td>Name a provider, or leave the feature off.</td></tr>
<tr><td>Mixed age</td><td>Twelve cars cannot hold a contract.</td><td>RFID stays on every bay.</td></tr>
<tr><td>Hardware money</td><td>Forty AC posts. Any premium is a vendor quote.</td><td>Take two prices. Do not guess the gap.</td></tr>
<tr><td>Visitors</td><td>Guest cards. Visitors lack the company contract.</td><td>Guests stay on a card or the app.</td></tr>
</tbody>
</table>
<p>Match the yard: witness one ISO 15118-2 start on a newer car, and an RFID start on an older car, on the same stall. Require -20 only if a replacement vehicle needs bidirectional power. Do not build a private certificate authority in this buy. Name the contract provider, or park that work. Any hardware premium is the vendor's quote.</p>
<h2>Which claims should stop the RFP?</h2>
<p>"Roadmap Plug and Charge" with no certificate story is a date on a slide. Ask who issues the contract, who installs the roots, and which message the CSMS answers in this release. A quarter with none of those three is not a plan.</p>
<p>A charger that speaks ISO 15118 beside a CSMS that only stores RFID tokens will pass a bench handshake and fail in the yard. The token table cannot hold the contract, so energy never starts, or it starts on a stand-in card number finance cannot tie to a contract.</p>
<p>Pull the uplink during a contract check. With no card or app path, the older cars and every visitor stop the first time the certificate service is slow. Write the offline rule and test it. Hoping the charger cached the last certificate is not a rule.</p>
<h2>When does that path need software of your own?</h2>
<p>A bought product is enough when it authorises from a contract, forwards an install, and still starts RFID on the same connector. Custom work starts when your CSMS only stores tokens, when enrolment must read the company car list, or when the install must reach the eMSP you already bill through. A second issuer is the roaming hop in <a href="/blog/ocpi-roaming-explained-cpo-emsp">the OCPI explainer</a>. How the two products fit is the <a href="/blog/ev-charging-app-ocpi-ocpp-guide">OCPI and OCPP guide</a>.</p>
<p>The back office, driver app, and charger link are <a href="/services/ev-charging-app-development">EV charging development</a>. A feed from the vehicle register sits on <a href="/services/software-development">custom software</a>. On the pricing page the EV ranges begin at ₹4,50,000, then ₹9,00,000 and ₹18,00,000, in Indian rupees, ex-GST, after discovery. That starter note is maps, sessions, and an OCPP or OCPI path for an eMSP or CPO MVP. Certificate operations, the hardware, and a network already doing Plug and Charge sit outside it. PlugOne at plugone.in is a map and sessions, not a contract issuer. To keep a contract beside an RFID token, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Does Plug and Charge retire the RFID card?</h3>
<p>Only for a session where the car, the charger, and the contract chain all succeed. Older cars and guests still need another start method on that stall.</p>
<h3>Does an ISO 15118-2 pass cover ISO 15118-20?</h3>
<p>No. They are different generations, and bidirectional power sits with the later one. Name the edition in the RFP. Ask for a separate test if you need -20.</p>
<h3>Does an OCPP Core mark prove Plug and Charge?</h3>
<p>No. On the Alliance 2.0.1 certification, Core is mandatory and ISO 15118 Support is optional. Check the certificate for that profile, the lab, and the date.</p>
<h3>What should finance see on the session?</h3>
<p>The contract identifier. A made-up card number means the back office never authorised the contract.</p>
<h3>Who runs certificates for a two-person IT team?</h3>
<p>A named provider, unless you already operate a certificate service. A spreadsheet of provisioning ids does not install a contract.</p>
<h3>What is a fair test on a mixed fleet?</h3>
<p>One Plug and Charge start on a car that can hold a contract, and one RFID start on a car that cannot, on the new stall. Skip -20 unless a vehicle needs bidirectional power.</p>
`,
    category: "casestudy",
    tags: ["ev charging", "iso 15118", "plug and charge", "ocpp"],
    imageUrl: "/images/blog-og/iso-15118-plug-and-charge-cpo-software-guide.svg",
    date: "2026-10-11",
    updatedAt: "2026-10-11T09:00:00+05:30",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development", "software-development"],
    faqs: [
      {
        question: "Does Plug and Charge retire the RFID card?",
        answer:
          "Only for a session where the car, the charger, and the contract chain all succeed. Older cars and guests still need another start method on that stall.",
      },
      {
        question: "Does an ISO 15118-2 pass cover ISO 15118-20?",
        answer:
          "No. They are different generations, and bidirectional power sits with the later one. Name the edition in the RFP. Ask for a separate test if you need -20.",
      },
      {
        question: "Does an OCPP Core mark prove Plug and Charge?",
        answer:
          "No. On the Alliance 2.0.1 certification, Core is mandatory and ISO 15118 Support is optional. Check the certificate for that profile, the lab, and the date.",
      },
      {
        question: "What should finance see on the session?",
        answer:
          "The contract identifier. A made-up card number means the back office never authorised the contract.",
      },
      {
        question: "Who runs certificates for a two-person IT team?",
        answer:
          "A named provider, unless you already operate a certificate service. A spreadsheet of provisioning ids does not install a contract.",
      },
      {
        question: "What is a fair test on a mixed fleet?",
        answer:
          "One Plug and Charge start on a car that can hold a contract, and one RFID start on a car that cannot, on the new stall. Skip -20 unless a vehicle needs bidirectional power.",
      },
    ],
  },
  {
    id: 439,
    slug: "erp-crm-api-integration-playbook-mid-market",
    title: "ERP–CRM API Integration Playbook for Mid-Market",
    metaTitle: "ERP–CRM API Integration Playbook for Mid-Market",
    excerpt:
      "ERP and CRM stay aligned when each object has one owner and a conflict rule. An 11-row checklist and a quote revised twice before it becomes one order.",
    keywords:
      "ERP CRM API integration, mid-market sync, quote to order, master data, middleware",
    content: `
<p>Thursday's invoice billed neither the price the buyer accepted nor the quantity the rep last typed. The ERP still held Wednesday's price. The CRM still held Tuesday's quantity. Both products were already live. <strong>A stable ERP and CRM integration is a small set of owned sync contracts, covering accounts, contacts, opportunities and quotes, orders, invoices, and stock, each with a master system.</strong> It is not a pile of nightly CSV dumps that hope the rows still match in the morning.</p>
<p>Choosing Salesforce or a custom CRM is a different decision, in <a href="/blog/custom-crm-vs-salesforce-mid-market-2026">the mid-market comparison</a>. This page starts after that choice. The ERP is live. The CRM is live. The break is the path from a revised quote to one order and one invoice.</p>
<h2>Which system owns the customer, the price, and the stock?</h2>
<p>For a distributor, the ERP owns the bill-to account once credit exists, because the hold and the tax id live there. The CRM may open a prospect. The account is created in the ERP when credit opens. After that, legal name and tax id come from the ERP. The last rep to type does not win.</p>
<p>Match on tax id, or on email plus postcode, before insert. A merge names a survivor and retires the other record. Two rows that both keep syncing are the next double invoice.</p>
<p>Price and stock stay in the ERP. The CRM may show a read-only snapshot with the time it was read. Writing price back from the CRM builds a second list, wrong the week the ERP list moves. If the ERP reserves goods, show the availability field it uses for a promise, and label it. Last night's file is a different number.</p>
<h2>Which four shapes can carry those contracts?</h2>
<p>A native connector uses the vendor's field map. You write less code, and you wait when a quote revision is not their object. It fits accounts and contacts that already match the product. It is weak when one accepted revision must become exactly one order.</p>
<p>An iPaaS flow is quick for a few fields and adds another login. The map often lives on a screen nobody can export. Use it for a stable account sync. Treat it as an order service only after a replay returns the same order number.</p>
<p>Custom middleware is the field map, the retry, and the log, in code you own. It fits credit holds, reservations, and revisions, because those rules are yours. Webhooks are the fast form when both products emit a signed change. They fail when one side only drops a nightly file, or a retry inserts a second order. A CSV can seed accounts. It has no conflict rule, so it cannot be the live path from an accepted quote to an order.</p>
<h2>What should the checklist say for each object?</h2>
<p>Field and Coil is fictional: a components distributor, forty reps, an ERP that already holds stock, price, credit, orders, and invoices, and a SaaS CRM that already holds visits, opportunities, and the quote the rep edits. Read each row as a contract you could hand to an integrator. The alert is the sentence a person sees when the row breaks.</p>
<table>
<thead>
<tr><th>Object</th><th>Master</th><th>Direction</th><th>Conflict rule</th><th>Failure alert</th></tr>
</thead>
<tbody>
<tr><td>Account</td><td>ERP after credit. CRM for a prospect.</td><td>To the ERP at credit open, then back.</td><td>ERP wins on legal name, bill-to, and the hold.</td><td>No ERP id a day after approval.</td></tr>
<tr><td>Contact</td><td>CRM for sales. ERP for invoices.</td><td>Both ways, with a role.</td><td>Same email updates. A new email adds a contact, not an account.</td><td>One tax id on two accounts.</td></tr>
<tr><td>Lead or opportunity</td><td>CRM.</td><td>Stays in the CRM until a quote.</td><td>A lost deal creates no order and does not touch stock.</td><td>Won, and no quote id.</td></tr>
<tr><td>Quote</td><td>CRM for the revision. ERP for price and stock.</td><td>CRM asks. One push on accept.</td><td>New revision wins. Replay of an older one is ignored. Price is a snapshot.</td><td>Two accepts, or the ERP rejects the snapshot.</td></tr>
<tr><td>Sales order</td><td>ERP.</td><td>CRM to ERP, once, on accept.</td><td>One order per accepted quote. A retry returns that number.</td><td>A second order, or none after fifteen minutes.</td></tr>
<tr><td>Invoice and payment</td><td>ERP.</td><td>Status only, ERP to CRM.</td><td>CRM shows issued, part-paid, or paid. It never creates the invoice.</td><td>Delivered, and no invoice status.</td></tr>
<tr><td>Product catalogue</td><td>ERP.</td><td>Read-only into the CRM.</td><td>No invented SKUs. Discontinued blocks new lines, old quotes stay readable.</td><td>A line uses a SKU the ERP retired.</td></tr>
<tr><td>Stock</td><td>ERP.</td><td>Read-only, short cache.</td><td>Show available-to-promise. Label a stale cache.</td><td>Stock read failed and someone accepted.</td></tr>
<tr><td>Tax id</td><td>ERP, after the prospect stage.</td><td>CRM may propose. ERP decides.</td><td>Reject a bad format. Never overwrite from a phone.</td><td>Rejection on the queue, with the account id.</td></tr>
<tr><td>Territory owner</td><td>CRM, then the ERP salesperson code.</td><td>From the master for that stage.</td><td>A rep change does not rewrite commission history.</td><td>Open quote, blank owner.</td></tr>
<tr><td>Poison message</td><td>Middleware.</td><td>Not stored as a success.</td><td>A permanent failure waits for a person. A network blip retries with the same key.</td><td>Depth or age crosses a line you set.</td></tr>
</tbody>
</table>
<h2>Where does one revised quote actually break?</h2>
<p>Quote Q-1844 is a motor. Monday 09:10, revision 1, 20 units. The middleware asks the ERP, which returns price and the quantity it will promise. The CRM stores "priced at 09:11 ERP time". If it never asks, the rep priced from memory.</p>
<p>At 15:40 the buyer wants 50. That is revision 2, not a second quote. The ERP must not reserve 20 and then 50. A connector that inserts every save as a new opportunity will, and the warehouse can pick both.</p>
<p>Tuesday 11:00, the buyer accepts revision 2. The order message fails because the tax id has a space the ERP rejects. Retrying that payload forever blocks the queue. The brittle pattern builds a new payload with no idempotency key, or the rep clicks accept again because no order number appeared. You get two orders, or an order nobody confirmed.</p>
<p>The path that holds is one order id, the bad tax id on a queue a person can open, and a screen that says the order was not created. The ERP then invoices that order and sends status back. Payment may use a slower feed if the checklist allows it. The order may not. The CRM must not show paid just because someone clicked accept. The work is the revision rule and the key, not another screen.</p>
<h2>Who holds the keys, the log, and the rehearsal?</h2>
<p>Use a dedicated integration user in each system, not a rep's password. Rotate the key on a calendar and when someone who could read it leaves. Keep the secret where reps cannot export it.</p>
<p>That user may read price and stock, create an order from an accepted quote, and read invoice status. It may not edit the price list, issue a credit note, or export customers. If the only login is an administrator, stop.</p>
<p>The audit line on Q-1844 is who accepted which revision, which ERP snapshot time was used, and which order id came back. A stock read is not that line. A tax-id change is. Staging must use the same field names, not live passwords. Run the three steps there before you change production. Different field names mean you have not tested.</p>
<h2>When does your own middleware beat another brittle zap?</h2>
<p>Keep a native connector or an iPaaS flow for accounts and contacts, where a bad row shows up the next morning. Move to middleware you own, or to software that holds the rule, when revisions, credit, and reservations are the real process and a one-step zap has already doubled an order. The zap fires on a field change and forgets the last try. The middleware remembers the quote id.</p>
<p>That work is <a href="/services/crm-erp-development">CRM and ERP development</a> when the rule is your process, <a href="/services/salesforce">Salesforce implementation</a> when it stays in the org, and <a href="/services/software-development">custom software</a> when the queue is its own service. Seat prices stay on the vendor's list. Published starters on this site, Indian rupees, ex-GST, after discovery, are Salesforce delivery from ₹80,000, then ₹2,00,000 and ₹4,00,000; a custom CRM module from ₹3,00,000, then ₹6,00,000 and ₹11,00,000; custom software from ₹1,00,000, then ₹2,50,000 and ₹5,00,000. Each starter is smaller than an eleven-object map. Ask for a scope.</p>
<p>A small app you host can follow the <a href="/blog/nextjs-app-router-saas-mvp-guide-2026">Next.js SaaS guide</a>. Agentforce and Koa are a separate note, <a href="/blog/salesforce-agentforce-koa-ai-push-what-investors-and-teams-watch">what teams watch</a>. A reasoning feature does not merge two orders. Staffing from Jaipur is the <a href="/blog/software-development-company-jaipur-guide">Jaipur software guide</a>. Retained capacity for a UK or Australian team is the <a href="/blog/hire-dedicated-developers-cost-guide-uk-australia">dedicated developer guide</a>, which prices time, not salaries or seats. Bring one bad tax id and one revised quote. Start at <a href="/services/crm-erp-development">CRM and ERP</a> or <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Which system should own the price?</h3>
<p>The ERP. The CRM may display a snapshot and the time it was read. Editing that snapshot in the CRM does not create a price the warehouse will honour.</p>
<h3>What keeps a revised quote from becoming two orders?</h3>
<p>A revision number, a single accepted revision, and an idempotency key. A retry must return the original order number instead of inserting another.</p>
<h3>When is a nightly file the right tool?</h3>
<p>For a first load of accounts, or for a payment status you have agreed can wait until the next morning. Not for the moment a buyer accepts a quote.</p>
<h3>What is a poison message in this sync?</h3>
<p>A payload the ERP will reject on every attempt, such as a tax id that fails the format check. Park it on a queue a person can see. Retrying it forever blocks newer messages behind it.</p>
<h3>What may the integration user change?</h3>
<p>It may read price and stock, create one order from an accepted quote, and read invoice status. It may not edit prices, issue credit notes, or download every customer.</p>
<h3>Do the published starting ranges equal this project?</h3>
<p>No. Those ranges are the service starters on this site, in Indian rupees, ex-GST, after discovery. They are not a connector subscription and not a CRM seat. The field map needs its own scope.</p>
`,
    category: "webdev",
    tags: ["crm", "erp", "api integration", "mid-market"],
    imageUrl: "/images/blog-og/erp-crm-api-integration-playbook-mid-market.svg",
    date: "2026-10-11",
    updatedAt: "2026-10-11T09:00:00+05:30",
    readTime: "8 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["crm-erp-development", "salesforce"],
    faqs: [
      {
        question: "Which system should own the price?",
        answer:
          "The ERP. The CRM may display a snapshot and the time it was read. Editing that snapshot in the CRM does not create a price the warehouse will honour.",
      },
      {
        question: "What keeps a revised quote from becoming two orders?",
        answer:
          "A revision number, a single accepted revision, and an idempotency key. A retry must return the original order number instead of inserting another.",
      },
      {
        question: "When is a nightly file the right tool?",
        answer:
          "For a first load of accounts, or for a payment status you have agreed can wait until the next morning. Not for the moment a buyer accepts a quote.",
      },
      {
        question: "What is a poison message in this sync?",
        answer:
          "A payload the ERP will reject on every attempt, such as a tax id that fails the format check. Park it on a queue a person can see. Retrying it forever blocks newer messages behind it.",
      },
      {
        question: "What may the integration user change?",
        answer:
          "It may read price and stock, create one order from an accepted quote, and read invoice status. It may not edit prices, issue credit notes, or download every customer.",
      },
      {
        question: "Do the published starting ranges equal this project?",
        answer:
          "No. Those ranges are the service starters on this site, in Indian rupees, ex-GST, after discovery. They are not a connector subscription and not a CRM seat. The field map needs its own scope.",
      },
    ],
  },
];
