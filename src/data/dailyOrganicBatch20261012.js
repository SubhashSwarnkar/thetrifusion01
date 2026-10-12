/**
 * Daily organic batch — 12 October 2026.
 * Ids 440–441 only. Two tech/business posts.
 * Do not reuse these ids in other blog data files.
 */
export const dailyOrganicBatch20261012Posts = [
  {
    id: 440,
    slug: "emsp-vs-cpo-software-stack-buyer-guide",
    title: "eMSP vs CPO Software: What Buyers Actually Need",
    metaTitle: "eMSP vs CPO Software: What Buyers Actually Need",
    excerpt:
      "CPO software runs chargers you own. eMSP software runs the driver account and public access. A role table and a 20-bay fleet that also charges out.",
    keywords:
      "eMSP vs CPO software, charge point operator, e-mobility service provider, CSMS buyer guide",
    content: `
<p>The procurement lead had already signed for a driver app: a wallet, a map, and a green pin for every public bay in the city. At 2 a.m. one depot charger stayed red. The app vendor had no reboot, no firmware screen, and no session for that post, because the post was not theirs. <strong>CPO software runs the assets: the chargers you operate, the sessions on that hardware, uptime, and the tariff on your own bays. eMSP software owns the customer journey: the driver account, discovery, payment, and access to chargers somebody else operates.</strong> Plenty of products wear both labels. Buy the module that matches the job, not the logo on the slide.</p>
<p>Which OCPP edition a charger speaks is the <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP comparison</a>. How two networks exchange locations, tokens, and charge records is the <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI explainer</a>. Scoring a platform is the <a href="/blog/csms-rfp-checklist-ocpp-platform-evaluation">CSMS RFP checklist</a>. Build versus buy for the back office is <a href="/blog/build-vs-buy-ev-charging-csms">a separate decision</a>. Terms sit in the <a href="/blog/ev-charging-software-glossary">glossary</a>. This page is the buyer split those pages assume you already made.</p>
<h2>Who owns the charger, the driver, and the bill?</h2>
<p>In the OCPI 2.2.1 terminology maintained with the EVRoaming Foundation, a charge point operator operates a network of charge points, and an e-mobility service provider gives drivers access to charging services. The platform is the software. It can hold one role or both. A company that runs public posts and also keeps driver accounts is two roles, not a third kind of product. From OCPI 2.2 the connection is not the same thing as the role. The commercial split stayed.</p>
<p>The asset owner bought or leased the posts, pays the supply, and is called when a bay is down. That is the CPO side, even for a fleet. A landlord who only rents space is not the operator unless the contract says they run the chargers. The driver account, the login, the token, and the receipt are the eMSP side. Remote-starting a bay from the night desk is operator work. The receipt sent to expenses is customer work.</p>
<p>Roaming is those two owners in different companies. The driver side authorises the token. The charger side records the energy. They reconcile on the charge detail record, and the contract says who pays whom. A hub may sit between them. A roaming tick on an app that has never sent a location or a session is not settlement. The operator sets the public price. The eMSP may only display it. Staff charging at the yard is an internal cost, not that tariff. A depot token opens the depot. It opens another network only when that network accepts it.</p>
<h2>Which modules does each role actually need?</h2>
<p>OCPP device management sits with the CPO: connector status, a remote stop, and the metered session. A driver app does not speak OCPP to a post you do not own. Remote start still exists on both sides. The operator uses the console for support. The app asks for a start that must reach the other company's device if you do not own it.</p>
<p>The CPO stores measured energy and the bay tariff. The eMSP takes payment on the account. The app and wallet are eMSP modules. OCPI is both sides, and only when you roam: locations and sessions go out from the operator, tokens and charge records come back to the driver side. Operators need faults, a reboot, and the firmware name. The driver side needs a failed start on an account and a refund on a session. Landlord invoices and driver invoices are different reports. A fleet often wants both from one night.</p>
<h2>Where does each capability actually live?</h2>
<p>Read the row for the job you are buying. Both / depends means you may need the module once per role, or not at all. A pass is a screen or a record you can name.</p>
<table>
<thead>
<tr><th>Capability</th><th>Mainly CPO</th><th>Mainly eMSP</th><th>Both / depends</th></tr>
</thead>
<tbody>
<tr><td>OCPP device management</td><td>Identity, connector status, and a remote stop on hardware you operate.</td><td>Not a driver-app job.</td><td>Only the party that operates the post.</td></tr>
<tr><td>Charger firmware</td><td>Which firmware is installed, and who may update it.</td><td>No asset, no firmware duty.</td><td>A host of both roles still assigns this to the operator.</td></tr>
<tr><td>Public map listing</td><td>Publish the site and whether the bay is free, if it is public.</td><td>Show pins, including bays you do not own.</td><td>A closed depot can stay off the public map.</td></tr>
<tr><td>Roaming connect</td><td>Offer locations, tariffs, and finished sessions to a partner or a hub.</td><td>Offer driver tokens and take those sessions onto the account.</td><td>Skip both when nobody outside uses your posts and your drivers never charge away.</td></tr>
<tr><td>Retail payment</td><td>A tariff and a meter. A terminal only if a walk-up pays the site.</td><td>Wallet, card, or an invoice on the driver account.</td><td>Yard charging for staff can stay an internal cost.</td></tr>
<tr><td>Fleet cards</td><td>A token your own system accepts on your own posts.</td><td>A token other networks will honour.</td><td>One card does both only after both sides accept that token.</td></tr>
<tr><td>Who gets the invoice</td><td>Energy and uptime for the site owner or landlord.</td><td>The driver's receipt, or one fleet invoice of those sessions.</td><td>Many fleets want both reports from the same night.</td></tr>
<tr><td>Plug and Charge certificates</td><td>Trust roots and the handshake on the charger.</td><td>The contract the car presents for that account.</td><td>Separate buy. The <a href="/blog/iso-15118-plug-and-charge-cpo-software-guide">Plug and Charge guide</a> is the chain. A sticker is not.</td></tr>
<tr><td>Smart charging and load limits</td><td>The site supply, and the limit the chargers must obey.</td><td>A driver preference, only if the contract allows one.</td><td>The feeder wins. Yard math is the <a href="/blog/ev-depot-smart-charging-load-management-guide">depot load guide</a>.</td></tr>
</tbody>
</table>
<h2>What should a 20-bay city fleet buy first?</h2>
<p>Harbour Lane Logistics is fictional. Twenty AC chargers in one depot it operates, about forty drivers, and vans that also charge on public networks during the day. Two generalists keep the systems up. The question is which roles to buy, not a licence price.</p>
<p>On the depot, Harbour Lane is the operator. The posts need a central system on the OCPP they already speak, a remote stop, staff-card tokens, and energy per session for the yard's own electricity. They also need a load limit so twenty bays respect the building supply. That limit is operator work. The feeder split is the depot guide above.</p>
<p>On the road, Harbour Lane does not operate the public posts. Drivers need an account, a bay they can find, a payment method that network takes, and a receipt: their own eMSP app, or a contract with one that already roams. A second device stack for chargers they do not own cannot reboot anything.</p>
<p>If one product can show a depot session on the company token and a public session for the same driver, it is covering both roles. If the depot system cannot hand a token to the eMSP, the gap is a bridge, not another map. If an outside eMSP already accepts the drivers, do not build an app only to own the icon. Once the role is clear, the <a href="/blog/ev-charging-app-ocpi-ocpp-guide">OCPI and OCPP guide</a> is how the two links differ.</p>
<h2>Which sales lines should end the demo?</h2>
<p>An all-in-one platform with no OCPP story cannot name the charger models, the protocol edition, or a remote stop you are allowed to watch. Ask for one live post and a session that names the connector. A slide is a stop.</p>
<p>An eMSP app with no settlement path has a wallet and no charge record a partner can reconcile. Ask who stores that record and who sends it. A balance with no session id is not a path to payment between the two companies.</p>
<p>A CPO tool that cannot hand a finished session to a roaming partner is fine for a closed yard and a trap the week a visitor must charge, or your vans need a public bay. Ask for one location, one tariff, and one finished session in a form another party already accepts. A spreadsheet nobody else can read means the roaming claim is decorative.</p>
<h2>When is a custom bridge the right scope?</h2>
<p>Buy the packaged console when it speaks your chargers, stores a session, and can remote-stop. Rent the driver side when a public network already accepts your drivers. Custom work starts when the two products do not share a driver id, when one card must open the yard and one named public network, or when finance wants both reports in one file. A token list copied by hand drifts the week someone leaves.</p>
<p>The operator console, the driver app, and the charger link are <a href="/services/ev-charging-app-development">EV charging development</a>. A bridge that is its own service is <a href="/services/software-development">custom software</a>. On the pricing page the EV niche ranges begin at ₹4,50,000, then ₹9,00,000 and ₹18,00,000, in Indian rupees, ex-GST, after discovery. The starter note is an eMSP or CPO MVP with live maps, sessions, and an OCPP or OCPI path. It is not twenty chargers, the site supply, or a roaming contract. Software development is listed from ₹1,00,000, then ₹2,50,000 and ₹5,00,000, as illustrative tiers, not a fixed bridge. PlugOne at plugone.in is a live map and sessions. It does not decide your role. To separate the depot stack from the driver account, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Can one company be both a CPO and an eMSP?</h3>
<p>Yes. The platform can hold both roles. The order still names operator modules and driver modules apart, because the logo does not list the screens.</p>
<h3>If our vans charge only at our own yard, do we need an eMSP?</h3>
<p>Not for that yard. You need the posts, the sessions, and the staff tokens. You need an eMSP, or a contract with one, when the vans use posts you do not operate.</p>
<h3>Who sets the price a stranger sees?</h3>
<p>The operator of that bay. The driver app can display the price. A pin on a map does not transfer the hardware.</p>
<h3>Does our depot RFID card work on public networks?</h3>
<p>Only where that token is already accepted. A card in your depot system is not automatically valid on another network.</p>
<h3>What is a fair test before you sign?</h3>
<p>One remote stop on a depot bay you operate, with the session stored, and one paid public session you do not operate, with a receipt that names the driver.</p>
<h3>Do the published EV ranges cover twenty bays and roaming?</h3>
<p>No. The starter is maps, sessions, and an OCPP or OCPI path, in rupees, ex-GST, after discovery. Hardware, supply, and a public-network contract are outside it.</p>
`,
    category: "casestudy",
    tags: ["ev charging", "cpo", "emsp", "csms"],
    imageUrl: "/images/blog-og/emsp-vs-cpo-software-stack-buyer-guide.svg",
    date: "2026-10-12",
    updatedAt: "2026-10-12T09:00:00+05:30",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development", "software-development"],
    faqs: [
      {
        question: "Can one company be both a CPO and an eMSP?",
        answer:
          "Yes. The platform can hold both roles. The order still names operator modules and driver modules apart, because the logo does not list the screens.",
      },
      {
        question: "If our vans charge only at our own yard, do we need an eMSP?",
        answer:
          "Not for that yard. You need the posts, the sessions, and the staff tokens. You need an eMSP, or a contract with one, when the vans use posts you do not operate.",
      },
      {
        question: "Who sets the price a stranger sees?",
        answer:
          "The operator of that bay. The driver app can display the price. A pin on a map does not transfer the hardware.",
      },
      {
        question: "Does our depot RFID card work on public networks?",
        answer:
          "Only where that token is already accepted. A card in your depot system is not automatically valid on another network.",
      },
      {
        question: "What is a fair test before you sign?",
        answer:
          "One remote stop on a depot bay you operate, with the session stored, and one paid public session you do not operate, with a receipt that names the driver.",
      },
      {
        question: "Do the published EV ranges cover twenty bays and roaming?",
        answer:
          "No. The starter is maps, sessions, and an OCPP or OCPI path, in rupees, ex-GST, after discovery. Hardware, supply, and a public-network contract are outside it.",
      }
    ],
  },
  {
    id: 441,
    slug: "webhook-reliability-idempotency-playbook-saas",
    title: "Webhook Reliability & Idempotency Playbook for SaaS",
    metaTitle: "Webhook Reliability & Idempotency Playbook for SaaS",
    excerpt:
      "Signed payloads, idempotent handlers, bounded retries, and a dead-letter path. A 12-row checklist, then one duplicate payment event and one late one.",
    keywords:
      "webhook reliability, idempotency, SaaS integrations, signed webhooks, dead letter",
    content: `
<p>Finance saw one successful charge. The product database had two tenants under the same company name, and the CRM had two won rows ten minutes apart. The payment provider had delivered the same notice twice because the first response was slow. <strong>Reliable webhooks need a signed payload, at-least-once delivery handled by an idempotent consumer, bounded retries with backoff, a dead-letter path for poison messages, and a record of what was already processed.</strong> An HTTP call with no memory is how one payment becomes two licences.</p>
<p>Which system owns the account, the price, and the order is the <a href="/blog/erp-crm-api-integration-playbook-mid-market">ERP and CRM integration playbook</a>. How a build reaches production is the <a href="/blog/devops-ci-cd-checklist-sme-saas-2026">CI/CD checklist</a>. This page is the delivery: the signed notice, the retry, and a handler that stays safe when it runs twice.</p>
<h2>Which three delivery shapes fail in different places?</h2>
<p>Provider to you is a payment company pushing JSON when a charge succeeds. Stripe's docs are one case, not every sender's rule. Stripe uses HTTPS, signs each delivery, and may deliver the same event more than once. Live mode retries for up to three days with exponential backoff. A sandbox destination is retried three times over a few hours. Use those windows for Stripe only.</p>
<p>You to your customer means you emit order-paid or seat-provisioned, so you are the sender. If you drop the payload, the id, and the retry, you cannot explain Tuesday's notice. Their handler must also refuse a second side effect.</p>
<p>A two-way bridge sends order-paid out and tenant-ready back, each with its own signature and id. One flag for both directions marks the CRM done before the tenant exists. The usual breaks are a late answer that causes a retry after the work is done, a tight loop during an outage, two notices for one payment, and an older notice that lands last. Stripe says not to depend on delivery order, and not to sort on created, because distinct events can share that timestamp. Store ids, and read a missing object from the provider API.</p>
<h2>What is an idempotency key, in plain language?</h2>
<p>The key means this side effect already happened. On a Stripe notice the first key is the event id: if it is stored, return success and do not open another tenant. Two event objects can describe one payment, so also check the object id and what happened to it. A new envelope does not make an applied payment a new sale.</p>
<p>Outbound, send the same id on every retry. A fresh id each time is how the other side invoices twice. Store the key in a row the database will refuse to insert twice, with the side effect or just before it. Check-then-insert without that refusal loses when two deliveries arrive together. The loser returns success so the sender stops.</p>
<p>Twice must be safe for money, stock, and seats. Creating a licence returns the one that exists. A refund is a later fact with its own key, not a duplicate to drop. Keep keys longer than the sender retries. Stripe live retries last up to three days, so an hour-long key treats a late retry as new. Archive after the provider's window. Deleting early is the hazard.</p>
<h2>What should the ops checklist record?</h2>
<p>Northglass is fictional: a B2B product that sells a seat, takes a payment, opens a tenant, and marks a CRM opportunity won. Each row is a contract between product, engineering, and the person on call. The alert is what a person sees when it breaks. No vendor price sits on the row.</p>
<table>
<thead>
<tr><th>Concern</th><th>Owner</th><th>Pass signal</th><th>Failure alert</th></tr>
</thead>
<tbody>
<tr><td>Signature check</td><td>Endpoint owner</td><td>A bad or missing signature is rejected and not applied.</td><td>Failures cross a line you set, or a handler ran with no check.</td></tr>
<tr><td>Timestamp skew</td><td>Endpoint owner</td><td>Outside the agreed window, reject. Stripe's libraries default to five minutes. A tolerance of zero disables the check.</td><td>Rejections spike, or the server clock has drifted.</td></tr>
<tr><td>HTTPS only</td><td>Platform</td><td>The live URL is HTTPS. Stripe requires that on a public live endpoint, and TLS 1.2 or 1.3.</td><td>A live hook on plain HTTP, or a secret pasted into chat.</td></tr>
<tr><td>Retry schedule</td><td>Sender</td><td>Backoff grows and stays bounded. It does not hit every second.</td><td>Retries dominate traffic during an incident.</td></tr>
<tr><td>Maximum attempts</td><td>Sender</td><td>A ceiling, then the notice waits for a person.</td><td>A counter still climbing after a day.</td></tr>
<tr><td>Dead letter</td><td>On call</td><td>A payload that fails the same way every time is parked.</td><td>Parked depth or age passes the line you set.</td></tr>
<tr><td>Replay</td><td>On call</td><td>One parked notice can be resent, and a second side effect is refused.</td><td>Replay opened a second tenant or CRM row.</td></tr>
<tr><td>Key lifetime</td><td>Data owner</td><td>The key outlives retries. Stripe live delivery retries for up to three days.</td><td>A late retry inserted a second row after the key was deleted.</td></tr>
<tr><td>Arrival order</td><td>Product and engineering</td><td>The handler reads current state. It does not trust arrival order.</td><td>Status moved backwards because an older notice landed last.</td></tr>
<tr><td>Personal data in logs</td><td>Security</td><td>Logs keep the event id and the result, not a card number or the raw body.</td><td>A log line contains the payload.</td></tr>
<tr><td>Provider outage</td><td>On call</td><td>The runbook names who pauses, who reads the provider's event list, and who checks stored keys first.</td><td>No owner, or a catch-up that ignores keys already stored.</td></tr>
<tr><td>Fast success</td><td>Endpoint owner</td><td>Success returns before the slow CRM write, on a queue that still dedupes. Stripe asks for 2xx before complex work.</td><td>The CRM call is inline, times out, and the provider retries work already started.</td></tr>
</tbody>
</table>
<h2>What happens on one duplicate and one late notice?</h2>
<p>Northglass opens a tenant and marks the CRM won on order-paid. The welcome mail goes once. This walk-through follows Stripe's published behaviour: the same event may arrive twice, each retry has a new signature and timestamp, and live delivery continues for up to three days. It is an illustration, not a promise Northglass makes to its customers.</p>
<p>The first delivery has a valid signature over the raw body, inside five minutes. The worker stores the event id, enqueues the tenant, the CRM update, and the mail, and returns success before those finish. Waiting on the CRM in the request is how the provider times out and retries a job already queued. The second delivery has the same event id. The store refuses it. The handler returns success and does not enqueue. If two workers race, one insert wins, and the CRM points at that tenant.</p>
<p>A second event id can still describe the same payment. Northglass stores the payment id too, so paid-again returns the existing tenant. A refund keeps its own key. It changes the seat or the CRM. It does not open another tenant, and it is not dropped merely because the payment id was seen.</p>
<p>After six hours down, live mode is still retrying, for up to three days. The new attempt has a new signature, so the five-minute window is delivery time, not the time of the charge. Link a tenant opened by hand during the outage. Otherwise open one. Do not let an older notice move a paid account back to unpaid. Read the payment, not Stripe's created field.</p>
<h2>How do you rotate the secret without trusting an unsigned body?</h2>
<p>Stripe recommends rolling the endpoint signing secret on a schedule, or after a suspected leak. You can expire the current secret immediately or delay that for up to 24 hours. During the delay more than one secret is active, and Stripe produces one signature per secret. Verify each active secret until the old one dies. Read the secret from a store. Do not commit it, and do not expire the old secret before the new one is deployed, or every delivery fails in the gap.</p>
<p>The handler's credentials may mark one order paid and enqueue provisioning. They may not refund, export customers, or reveal the signing secret. Split an administrator key before go-live. An unsigned body is not a payment, even with familiar field names. The timestamp sits inside the signature so an edited clock fails the check, and a timestamp outside the window is refused even when the signature matches. Each Stripe retry is signed again. Verify the attempt you received, then dedupe on the event id.</p>
<h2>When does your own middleware beat another brittle zap?</h2>
<p>A zap that creates a CRM row on payment-succeeded, with no stored event id, creates a second row on the first retry. Keep that pattern for a chat ping someone can ignore. Put the seat, the invoice, and the stock move in software that keeps the key, the attempt ceiling, and the parked queue.</p>
<p>That service is <a href="/services/software-development">custom software</a>. The runbook, the queue host, and the certificate on the public URL are <a href="/services/devops">DevOps</a> when you want them operated. An endpoint in your own app can follow the <a href="/blog/nextjs-app-router-saas-mvp-guide-2026">Next.js SaaS guide</a>. Where the team sits is the <a href="/blog/software-development-company-jaipur-guide">Jaipur software guide</a>. Named capacity for a UK or Australian buyer is the <a href="/blog/hire-dedicated-developers-cost-guide-uk-australia">dedicated developer guide</a>, which does not publish an hourly rate. The pricing page lists software development from ₹1,00,000, then ₹2,50,000 and ₹5,00,000, as illustrative tiers with a written scope still required. They are not a provider fee. The DevOps page publishes no package price. Bring one duplicate event id and one late notice. Start at <a href="/services/software-development">software development</a> or <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Does a success response mean the licence exists?</h3>
<p>It means the notice was accepted. If the slow work runs afterwards, the queue and the stored key still have to create the licence once.</p>
<h3>What if two event ids describe one payment?</h3>
<p>Store the payment id beside the event id. A second paid notice returns the tenant you already opened.</p>
<h3>How long should we keep the keys?</h3>
<p>Longer than the sender retries. For Stripe live webhooks, the published window is up to three days.</p>
<h3>Should we process the JSON when the signature fails?</h3>
<p>No. Familiar fields are not proof the provider sent the body.</p>
<h3>What is a poison webhook?</h3>
<p>A payload rejected on every attempt, such as an unknown product id. Park it. Retrying it without a ceiling blocks newer notices.</p>
<h3>Do the published software tiers equal this work?</h3>
<p>No. Illustrative tiers start at ₹1,00,000, then ₹2,50,000 and ₹5,00,000. A dedupe store, a queue, and a replay screen need their own scope.</p>
`,
    category: "webdev",
    tags: ["webhooks", "idempotency", "saas", "integrations"],
    imageUrl: "/images/blog-og/webhook-reliability-idempotency-playbook-saas.svg",
    date: "2026-10-12",
    updatedAt: "2026-10-12T09:00:00+05:30",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["software-development", "devops"],
    faqs: [
      {
        question: "Does a success response mean the licence exists?",
        answer:
          "It means the notice was accepted. If the slow work runs afterwards, the queue and the stored key still have to create the licence once.",
      },
      {
        question: "What if two event ids describe one payment?",
        answer:
          "Store the payment id beside the event id. A second paid notice returns the tenant you already opened.",
      },
      {
        question: "How long should we keep the keys?",
        answer:
          "Longer than the sender retries. For Stripe live webhooks, the published window is up to three days.",
      },
      {
        question: "Should we process the JSON when the signature fails?",
        answer:
          "No. Familiar fields are not proof the provider sent the body.",
      },
      {
        question: "What is a poison webhook?",
        answer:
          "A payload rejected on every attempt, such as an unknown product id. Park it. Retrying it without a ceiling blocks newer notices.",
      },
      {
        question: "Do the published software tiers equal this work?",
        answer:
          "No. Illustrative tiers start at ₹1,00,000, then ₹2,50,000 and ₹5,00,000. A dedupe store, a queue, and a replay screen need their own scope.",
      }
    ],
  },
];
