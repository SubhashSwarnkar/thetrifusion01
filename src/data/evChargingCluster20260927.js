/**
 * EV charging software topical cluster — 27 September 2026.
 * Ids 341–345 only. Do not reuse these ids in other blog data files.
 * Do not edit older posts from this file.
 */
export const evChargingClusterPosts = [
  {
    id: 341,
    slug: "ocpp-1-6-vs-2-0-1-vs-2-1-comparison",
    title: "OCPP 1.6 vs 2.0.1 vs 2.1: Which Version Should a CPO Implement?",
    metaTitle: "OCPP 1.6 vs 2.0.1 vs 2.1: What a CPO Should Implement",
    excerpt:
      "OCPP 1.6, 2.0.1, and 2.1 are the three versions the Open Charge Alliance still publishes. Here is what each one adds, why 1.6 and 2.x are not interchangeable, and how a CPO should choose.",
    keywords:
      "OCPP 1.6 vs 2.0.1 vs 2.1, OCPP 1.6J, CSMS, Open Charge Alliance, ISO 15118, EV charging CMS",
    content: `
<p>The Open Charge Point Protocol (OCPP) is the open standard a charging station uses to talk to a charging station management system. The Open Charge Alliance still publishes three versions: 1.6 from 2015, 2.0.1 from 2020, and 2.1 from 2025. A CPO should implement the version its chargers speak, and should not treat 1.6 and 2.x as interchangeable.</p>
<p><em>Sources:</em> Version dates, the feature lists below, and the compatibility statements are taken from the <a href="https://openchargealliance.org/protocols/open-charge-point-protocol/" target="_blank" rel="noopener noreferrer">Open Charge Alliance OCPP page</a> and the Alliance's <a href="https://openchargealliance.org/ocpp-2-1-is-now-available/" target="_blank" rel="noopener noreferrer">OCPP 2.1 release note</a>. India protocol wording is from the Ministry of Power's September 2024 charging guidelines, as confirmed by the <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151393" target="_blank" rel="noopener noreferrer">Press Information Bureau</a>. Read the <a href="https://powermin.gov.in/en/content/amendment-guidelines-installation-and-operation-electric-vehicle-charging-infrastructure" target="_blank" rel="noopener noreferrer">January 2025 amendment page</a> alongside that text. Terms used here are collected in the <a href="/blog/ev-charging-software-glossary">EV charging software glossary</a>.</p>
<h2>What is OCPP, and which versions are still current?</h2>
<p>OCPP is the protocol between a charging station and the central software that manages it. The Open Charge Alliance describes it as the open protocol that keeps a network from depending on one vendor's private language. Three versions are the ones to plan against.</p>
<p>OCPP 1.6 was released in 2015 and is still widely implemented. OCPP 2.0 appeared in 2018, and the Alliance folded further work into OCPP 2.0.1 in 2020. Edition 3 of 2.0.1 was approved as IEC 63584 in 2024. OCPP 2.1 was released in January 2025, and edition 1 was published as IEC 63584-210:2025, announced by the Alliance in December 2025.</p>
<p>Do not ask a manufacturer for "OCPP 2.0" and expect the 2020 standard. Name 2.0.1, or 2.1 when you need the functions 2.1 adds. The Alliance still supports 1.6 and 2.0.1. Support is not compatibility.</p>
<h2>How does OCPP 1.6 differ from OCPP 2.0.1?</h2>
<p>OCPP 1.6 and OCPP 2.0.1 are not compatible. A charger that speaks only 1.6 will not boot onto a backend that speaks only 2.0.1. The Alliance states that directly. A mixed yard needs both stacks, with the version chosen per charger rather than guessed from the logo on the cabinet.</p>
<p>OCPP 1.6 includes the earlier 1.5 behaviour and adds smart charging with charge profiles, local list management, additional status values, and requests such as asking the charge point for its time or status. It ships as SOAP and as JSON. The JSON binding over a WebSocket is what operators mean by OCPP 1.6J. Test that binding on the hardware you will install.</p>
<p>The Alliance lists what 2.0.1 adds: device management to get and set configuration and to monitor the station; improved transaction handling; added security; added smart charging; support for ISO 15118; display and messaging; and further community changes. A 1.6 integration is built around start and stop messages and meter values. A 2.0.1 integration is built around the device model and the newer transaction handling. Renaming a 1.6 message map will fail a protocol test.</p>
<p>ISO 15118 is the vehicle-to-charger standard, and Plug &amp; Charge is the case where the car presents a contract certificate. Support for that path is one reason to choose 2.0.1. A live session still needs the car, the firmware, and a certificate. Until those exist, drivers start with the app, a QR code, or RFID.</p>
<table>
<thead>
<tr><th>Question</th><th>OCPP 1.6</th><th>OCPP 2.0.1</th><th>OCPP 2.1</th></tr>
</thead>
<tbody>
<tr><td>Released</td><td>2015</td><td>2020 (2.0 was 2018)</td><td>January 2025</td></tr>
<tr><td>Fits with</td><td>Other 1.6 stations</td><td>Not with 1.6. Application logic carries into 2.1</td><td>2.0.1 application logic. Not with 1.6</td></tr>
<tr><td>What you gain</td><td>JSON and SOAP, charge profiles, local lists, status</td><td>Device model, transaction handling, security, ISO 15118, display messages</td><td>ISO 15118-20, V2X, DER control, battery swapping, local cost, new payments</td></tr>
<tr><td>Standards mark</td><td>OCA specification</td><td>IEC 63584 (edition 3 approved in 2024)</td><td>IEC 63584-210:2025</td></tr>
<tr><td>Typical first use</td><td>A fleet that already boots on 1.6J</td><td>New chargers, Plug &amp; Charge readiness</td><td>Bidirectional charging, DER, swap stations, richer payments</td></tr>
</tbody>
</table>
<h2>What does OCPP 2.1 add that 2.0.1 does not?</h2>
<p>OCPP 2.1 extends 2.0.1. The Alliance says care was taken so that application logic written for 2.0.1 continues to work on 2.1. That is the opposite of the jump from 1.6. A team that has already built 2.0.1 behaviour is not asked to throw it away. A team that has only built 1.6 is. OCPP 1.6 has different application logic and is not compatible with 2.1.</p>
<p>The additions the Alliance lists for 2.1 are specific. Use this list in a tender, not a vaguer promise of "the latest OCPP."</p>
<ul>
<li>Support for ISO 15118-20, including bidirectional power transfer.</li>
<li>A functional block for bidirectional charging, so an EV can act as an energy source (V2X).</li>
<li>A functional block for distributed energy resource (DER) control.</li>
<li>Improved smart charging, with further tools for distributing energy across charging stations.</li>
<li>Transactions that can be fixed by cost, energy, or time, and transactions that can resume after a forced reboot.</li>
<li>Battery swapping, for two-wheelers, three-wheelers, and electric vehicles.</li>
<li>Local cost calculation on the charging station.</li>
<li>New authorisation options: prepaid charge cards whose transaction cost cannot exceed the balance, ad hoc payment by credit or debit card on a built-in or stand-alone terminal, and secure dynamic QR codes for ad hoc payment.</li>
</ul>
<p>If none of those are in the first sites, 2.1 is room to leave in the specification, not a reason to delay a 1.6J or 2.0.1 launch. Name 2.1 when a European depot is asked for vehicle-to-grid, or when a two-wheeler network in India or Southeast Asia wants battery swap in the same CSMS. Ask which edition the firmware implements. The Alliance's December 2025 note records the IEC publication of edition 1.</p>
<h2>Which OCPP version should a CPO implement?</h2>
<p>Implement the version the chargers you will install actually speak, and write the next version into hardware you have not bought yet. A brand logo is not a version. Firmware inside one brand differs. Discovery on a real <a href="/services/ev-charging-app-development">EV charging CMS</a> starts with a protocol test on the model you will install: boot, authorise, meter, and stop.</p>
<p>Use 1.6J when the yard you already own boots on 1.6J and the first release is remote start, remote stop, meter values, heartbeats, and a tariff. The Alliance still supports 1.6. Keep the CSMS able to add 2.0.1 later, so the data model is not only an id tag and a start button.</p>
<p>Specify 2.0.1 on new chargers when you want the device model, the newer transaction handling, the added security, or a place for ISO 15118. The Alliance describes 2.0.1 as on its way to replacing 1.6 between the charging station and the CSMS. Specify 2.1 when the product needs bidirectional energy, DER control, battery swapping, local cost calculation, or the new payment options listed above. Those blocks are painful to discover after the chargers are installed on 1.6 only.</p>
<p>The same choice shows up in a <a href="/blog/build-vs-buy-ev-charging-csms">white-label, custom, or SaaS decision</a>. A rented platform that cannot add a second OCPP stack will strand a mixed fleet. A build that prices only one version will also strand it, the first week a second model arrives. How that scope moves a quote is covered in the <a href="/blog/ev-charging-cms-software-cost-guide">EV charging CMS cost guide</a>. Roaming between companies is a different protocol: see <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI for CPO and eMSP roles</a>.</p>
<h2>Can one CSMS run 1.6 and 2.x chargers together?</h2>
<p>Yes, when the CSMS implements both application logics and selects the version per connection. A backend that speaks only one version will not absorb the other by fallback. The Alliance is explicit that 1.6 is not compatible with 2.0.1 or with 2.1, and that 2.0.1 application logic does continue into 2.1. A <a href="/services/ev-charging-app-development">CSMS for CPOs and eMSPs</a> that will outlive one hardware cycle should keep 1.6J and 2.0.1 as separate, tested paths, and add 2.1 on the 2.0.1 path when a site needs those blocks.</p>
<p>The charger record should store the OCPP version and the messages that model answered in the protocol test. Remote start on 1.6 and the newer transaction handling on 2.0.1 are different commands. Firmware, diagnostics, and a charging profile stay limited to what that firmware implemented.</p>
<h2>What do India's charging guidelines say about the protocol?</h2>
<p>The Ministry of Power's Guidelines for Installation and Operation of Electric Vehicle Charging Infrastructure-2024, issued in September 2024, define OCPP as an open protocol used for communication between the EV supply equipment and the charger management system. They recommend open standards. Public charge point operators may adopt open protocols such as the Unified Energy Interface, OCPP, OCPI, or OpenADR, including for communication with distribution companies on demand response, and those protocols must comply with the cybersecurity provisions in force. The Press Information Bureau notes that the same guidelines outline standards and protocols for a connected, interoperable network, and that BIS has published the IS 17017 series for conductive charging.</p>
<p>Those sentences do not pick 1.6 over 2.1. They tell a public CPO in India to use an open protocol, and to be ready to share station information. Read the January 2025 amendment with the September 2024 text. The guidelines' checklist still names charger types as CCS, Type 2, Bharat AC-001, and others. The connector filter and the OCPP version are separate choices.</p>
<p>A European buyer has an extra marker: IEC has published 2.0.1 edition 3 and 2.1 edition 1. A buyer in the Middle East or Southeast Asia has the same protocol question and a different connector and payment mix. In every region the proof is a charger that boots, meters, and stops on the version you named. TheTriFusion builds that <a href="/services/ev-charging-app-development">OCPP/OCPI platform development</a> from Jaipur for operators in India and abroad. The scope follows the protocol test.</p>
<h2>FAQ</h2>
<h3>Is OCPP 2.0.1 backward compatible with OCPP 1.6?</h3>
<p>No. The Open Charge Alliance states that OCPP 1.6 and OCPP 2.0.1 are not compatible. A mixed fleet needs both implementations in the CSMS.</p>
<h3>Will OCPP 2.0.1 software keep working on OCPP 2.1?</h3>
<p>The Alliance says application logic developed for 2.0.1 will continue to work in 2.1. OCPP 1.6 will not, because its application logic is different.</p>
<h3>Should a new CPO skip 1.6 and buy only 2.1 chargers?</h3>
<p>Buy the version your sites need. Choose 2.0.1 or 2.1 for new hardware when you need the functions those versions add. Keep 1.6J if chargers you already operate speak 1.6J. Test the firmware either way.</p>
<h3>Does OCPP handle roaming between two companies?</h3>
<p>No. OCPP connects a charger to your own management system. Roaming between a CPO and an eMSP is OCPI, maintained by the EVRoaming Foundation.</p>
<h3>Does OCPP 2.0.1 mean Plug &amp; Charge is live?</h3>
<p>No. 2.0.1 adds support for ISO 15118, and 2.1 adds ISO 15118-20 with bidirectional power transfer. A live Plug &amp; Charge session still needs the vehicle, the charger, and a contract certificate.</p>
<h3>Which OCPP version do India's guidelines require?</h3>
<p>The September 2024 guidelines recommend open protocols, and they name OCPP among them. They do not, in that recommendation, mandate 1.6, 2.0.1, or 2.1. The charger firmware and your scope decide the version.</p>
`,
    category: "casestudy",
    tags: ["ocpp", "csms", "ev charging", "iso 15118", "cpo"],
    imageUrl: "/images/blog-og/ocpp-1-6-vs-2-0-1-vs-2-1-comparison.svg",
    date: "2026-09-27",
    updatedAt: "2026-09-27",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
  },
{
    id: 342,
    slug: "ocpi-roaming-explained-cpo-emsp",
    title: "OCPI Roaming Explained: CPO, eMSP, Modules, and Hubs",
    metaTitle: "OCPI Roaming Explained for CPO and eMSP Teams",
    excerpt:
      "OCPI is how a charge point operator and an e-mobility service provider exchange locations, tariffs, tokens, sessions, and charge detail records, either peer to peer or through a hub.",
    keywords:
      "OCPI roaming, CPO vs eMSP, OCPI modules, CDR, OCPI hub, OCPI 2.2.1, OCPI 2.3.0",
    content: `
<p>OCPI, the Open Charge Point Interface, is the open protocol the EVRoaming Foundation maintains so an e-mobility service provider and a charge point operator can exchange locations, tariffs, tokens, sessions, and charge detail records. It works as a direct connection between two parties or through a roaming hub. It does not replace OCPP.</p>
<p><em>Sources:</em> Role names, the current version, hub and peer-to-peer support, and the function list are from the <a href="https://evroaming.org/ocpi/" target="_blank" rel="noopener noreferrer">EVRoaming Foundation's OCPI page</a>. OCPP remains the charger link, described by the <a href="https://openchargealliance.org/protocols/open-charge-point-protocol/" target="_blank" rel="noopener noreferrer">Open Charge Alliance</a>. India's wording for both protocols is in the Ministry of Power's September 2024 guidelines, noted by the <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151393" target="_blank" rel="noopener noreferrer">Press Information Bureau</a>, with a later <a href="https://powermin.gov.in/en/content/amendment-guidelines-installation-and-operation-electric-vehicle-charging-infrastructure" target="_blank" rel="noopener noreferrer">amendment page</a>. Version choice on the charger itself is covered in <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6 vs 2.0.1 vs 2.1</a>.</p>
<h2>What is OCPI?</h2>
<p>OCPI supports connections between e-mobility service providers, who have EV drivers as customers, and charge point operators, who manage charge stations. The foundation describes it as free to use and independent. Anyone can take part in developing it, through the foundation's OCPI development work group, which full contributors may join.</p>
<p>The current version on that page is 2.3.0. The foundation says it is compliant with EU national access point requirements under AFIR, includes vehicle types on locations, is extendable, and adds optional payment-terminal and booking modules. Version 2.1.1 is no longer supported. OCPI 3.0 is a draft with a target of mid 2027, intended to work with 2.3.0. An August 2026 note says 2.3.0 is in process to become a CENELEC technical specification.</p>
<p>The aim the foundation states is a single communication path so drivers can see prices, tariffs, locations, and availability, and can receive one invoice, across operators and borders. That is a product goal. It is not a promise that every network already implements every module.</p>
<h2>What is the difference between a CPO and an eMSP?</h2>
<p>A charge point operator manages charge stations. An e-mobility service provider has the driver as a customer. The foundation's short form of OCPI is exactly that split. In a product, the split is visible in the records. The CPO's record is the site, the EVSE, the connector, the meter, and the session on hardware it operates. The eMSP's record is the driver account, the token, the price the driver accepted, the payment, and the invoice.</p>
<p>One company can be both. A fleet that owns depot chargers and also lets those vehicles charge on a public network is a CPO at the depot and an eMSP on the road. The <a href="/services/ev-charging-app-development">EV charging CMS</a> can hold both roles. They stay separate records, so adding roaming is a phase rather than a rewrite. Being both is not the same as operating a public hub for every network in a country.</p>
<p>Other roles exist on the same protocol. The foundation's function list includes roaming with mixed roles, and platform monitoring. A navigation party may want locations and status without billing the driver. Treat "we are a CPO" and "we are an eMSP" as questions about who owns the charger and who owns the driver, not as two logos on one slide.</p>
<h2>Which modules move locations, sessions, CDRs, tariffs, and tokens?</h2>
<p>The foundation groups the work of versions 2.2.1 and 2.3.0 as a function list rather than as a sales bundle. The pieces a first roaming partner actually exchanges are these.</p>
<table>
<thead>
<tr><th>Piece</th><th>What moves</th><th>Why a driver or a finance team cares</th></tr>
</thead>
<tbody>
<tr><td>Locations</td><td>Static site data and live charge-point status</td><td>The pin, the connector, and whether it is free</td></tr>
<tr><td>Tariffs</td><td>The price information for that location</td><td>The price shown before the session is the price to settle</td></tr>
<tr><td>Tokens</td><td>Authorisation of the driver's credential</td><td>The app or RFID identity the partner CPO accepts</td></tr>
<tr><td>Sessions</td><td>Real-time session information</td><td>Start, energy, and stop while the vehicle is plugged in</td></tr>
<tr><td>CDRs</td><td>The charge detail record after the session</td><td>The record both companies use to bill and reconcile</td></tr>
<tr><td>Commands</td><td>Remote start and stop for a mobile app</td><td>The eMSP asks; the CPO's charger has to accept</td></tr>
</tbody>
</table>
<p>Locations are how a partner learns where the chargers are and whether a connector is available. Tariffs are how that partner shows a price. Tokens are how the driver's credential is authorised. Sessions are the live view. A charge detail record, the CDR, is the finished record used for billing. The foundation lists all of those, plus remote start and stop for a mobile app, reservation, smart charging via charge profiles, calibration-law (Eichrecht) support, and platform monitoring.</p>
<p>Partial implementations are normal. A partner may publish locations and tariffs before it accepts commands. A useful platform separates the modules so a missing command does not block the map. Credentials still have to be exchanged before any of this is production traffic. Start with one partner and the modules that partner implements. A theoretical hub of every network is a later conversation, and it is a different product from one bilateral link.</p>
<h2>Should you use a roaming hub or a peer-to-peer connection?</h2>
<p>OCPI can work bilaterally, and it can work with roaming hubs. The foundation says many organisations use it in a hybrid way: peer-to-peer connections, and hubs. It names GIREVE and e-clearing.net as examples of hubs. Those names are the foundation's examples, not a list of networks this company operates.</p>
<p>Peer-to-peer means one CPO and one eMSP connect directly. You exchange credentials, you agree the modules, and you see that partner's errors yourself. It is the right first step when you have one or a few signed partners. Each extra party is another connection to keep alive.</p>
<p>A hub routes messages so one connection can reach many parties. It also puts a third platform in the path for locations, tokens, sessions, and CDRs. You still implement OCPI, and you still need a commercial agreement. The hub does not remove the need to know which modules both sides support. Platform monitoring shows connection status. It does not replace your own check that a CDR arrived.</p>
<p>Choose peer-to-peer when the partner is named and the module list is short. Choose a hub when the number of parties, not the depth of one integration, is the problem. Many operators do both. Either way, roaming is OCPI. The charger on your own site is still OCPP, which is why an <a href="/services/ev-charging-app-development">OCPP/OCPI platform development</a> scope names them as two integrations.</p>
<h2>What did OCPI 2.3.0 add, and what should you ask a partner?</h2>
<p>Ask which version the partner implements before you scope a project. The foundation's current version is 2.3.0, and it still describes functionalities for 2.2.1 and 2.3.0 together. A partner contract that says only "OCPI" is unfinished. 2.1.1 is the version the foundation says is no longer supported, so a new build should not start there.</p>
<p>Additions the foundation lists for 2.3.0 are: EU national access point data; a Plug &amp; Charge indication; vehicle types on the EVSE, including use by disabled persons; different tax levels for North America and other regions; an optional payment-terminal module; and an optional booking module. European operators who must feed a national access point have a concrete reason to ask for 2.3.0. Operators elsewhere should still ask, because tax levels and the Plug &amp; Charge indication are not Europe-only ideas, but they should not assume a partner in another region has moved.</p>
<p>None of those additions remove locations, tariffs, tokens, sessions, or CDRs. If a partner implements 2.2.1 well on those five, you can roam. If you need the 2.3.0 additions, say so in the scope. The cost of extra partners and extra modules is one of the drivers in the <a href="/blog/ev-charging-cms-software-cost-guide">EV charging CMS cost guide</a>. Whether that work sits in a product you brand, a product you rent, or a product you commission is the <a href="/blog/build-vs-buy-ev-charging-csms">build versus buy decision</a>.</p>
<h2>How does OCPI sit next to OCPP, including in India?</h2>
<p>OCPP connects your charger to your management system. OCPI connects your company to another company. A CPO that does not roam yet still needs OCPP. An eMSP that owns no chargers may only need OCPI, plus a driver app. Putting both names in one sentence does not make them one integration. Definitions of the surrounding terms are in the <a href="/blog/ev-charging-software-glossary">EV charging software glossary</a>.</p>
<p>The Ministry of Power's September 2024 guidelines define OCPI as a communication protocol that supports information exchange between multiple network service providers and charge point operators, so that public charging networks can roam. They recommend that public CPOs adopt open protocols such as the Unified Energy Interface, OCPP, OCPI, or OpenADR, including toward distribution companies, and that those protocols meet the cybersecurity rules in force. The Bureau of Energy Efficiency is the central nodal agency and keeps a national database of public charging stations. Open APIs from that database are limited to non-confidential information. Registering a station on a government database is not the same job as settling a CDR with a partner eMSP.</p>
<p>A driver in Europe, the Gulf, or Southeast Asia has the same need the foundation describes: one account, a visible price, and a session that can be settled. Local payment instruments differ. In India, UPI sits beside cards, through a gateway the operator contracts. Invoice fields for GST belong on the receipt. The software stores them. Filing the return stays with the business. TheTriFusion builds the <a href="/services/ev-charging-app-development">CSMS for CPOs and eMSPs</a> from Jaipur and delivers it remotely. The first roaming release is one partner and the modules that partner actually implements.</p>
<h2>FAQ</h2>
<h3>Is OCPI the same thing as OCPP?</h3>
<p>No. OCPP is the Open Charge Alliance protocol between a charger and your management system. OCPI is the EVRoaming Foundation protocol between companies that want to roam.</p>
<h3>Can one company be both a CPO and an eMSP?</h3>
<p>Yes. The charger records and the driver records stay separate. You can launch one role first. A combined system is not automatically a public roaming hub.</p>
<h3>Which OCPI version should a new integration use?</h3>
<p>Ask the partner. The foundation's current version is 2.3.0, and it still documents 2.2.1 functions. It says 2.1.1 is no longer supported. Do not start a new build on 2.1.1.</p>
<h3>Do we need a roaming hub to launch?</h3>
<p>No. OCPI works as a direct connection between two parties. A hub helps when you need many parties on fewer connections. Many operators use both.</p>
<h3>What is a CDR?</h3>
<p>A charge detail record is the finished session record that the CPO and the eMSP use for billing and settlement. It is not the live session update, and it is not the tariff.</p>
<h3>Does OCPI include Plug &amp; Charge?</h3>
<p>OCPI 2.3.0 adds a Plug &amp; Charge indication, according to the EVRoaming Foundation. The vehicle-to-charger communication itself is ISO 15118, carried on the OCPP side when the firmware supports it.</p>
`,
    category: "casestudy",
    tags: ["ocpi", "roaming", "cpo", "emsp", "cdr"],
    imageUrl: "/images/blog-og/ocpi-roaming-explained-cpo-emsp.svg",
    date: "2026-09-27",
    updatedAt: "2026-09-27",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
  },
{
    id: 343,
    slug: "ev-charging-cms-software-cost-guide",
    title: "EV Charging CMS Software Cost: What Actually Moves the Quote",
    metaTitle: "EV Charging CMS Cost: Drivers and the Published Range",
    excerpt:
      "The published starting range for an EV charging CMS is ₹4,50,000 ex-GST after discovery. Here is what that MVP label covers, and which scope choices move the quote without a second price list.",
    keywords:
      "EV charging CMS cost, CSMS cost, OCPP OCPI development cost, EV charging software price",
    content: `
<p>An EV charging management system is the software a charge point operator or an e-mobility service provider runs: charger connections, driver sessions, tariffs, and settlement. The published starting range on TheTriFusion's EV charging CMS page is ₹4,50,000, ex-GST, after discovery, for an eMSP or CPO MVP. That figure is a starting range. Scope is what moves the quote.</p>
<p><em>Sources for the protocols and the India rules:</em> the <a href="https://openchargealliance.org/protocols/open-charge-point-protocol/" target="_blank" rel="noopener noreferrer">Open Charge Alliance</a>, the <a href="https://evroaming.org/ocpi/" target="_blank" rel="noopener noreferrer">EVRoaming Foundation</a>, and the Ministry of Power's September 2024 guidelines as noted by the <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151393" target="_blank" rel="noopener noreferrer">Press Information Bureau</a>. The rupee figure below is the one already published on the <a href="/services/ev-charging-app-development">EV charging CMS</a> page. It is not a new price, and this article does not add others.</p>
<h2>What does the published starting range cover?</h2>
<p>The EV charging CMS page points at the pricing page for a starting range of ₹4,50,000, ex-GST, after discovery. The label on that range is an eMSP or CPO MVP with live maps, charging sessions, and OCPP/OCPI. The same page is explicit that the figure is a starting range, not a package you can order unchanged. There is no fixed SKU on that page.</p>
<p>The same page, citing the existing technical guide, describes a first CSMS and driver app, a handful of charger models, and one payment method as often 10 to 14 weeks once access and hardware are ready. An eMSP app without owned chargers can be shorter. A multi-model rollout plus roaming is longer. A week count is not locked in the first email. Those sentences are the company's published timeline, not a survey of the market.</p>
<p>Read the label before you compare it with a rented dashboard or with a national roaming programme. Live maps, sessions, and a protocol path are the MVP. They are not every OCPI module, every charger brand, both app stores, fleet priority, and Plug &amp; Charge in one release. If a proposal uses the same rupee figure for a wider list, the label has been dropped. Ask for the written scope that sits under the number.</p>
<h2>What drives the cost of building or licensing a charging CMS?</h2>
<p>Cost follows what the software must prove, not how many screens the homepage has. The drivers below are the ones that change a written scope. They are described without a second set of prices.</p>
<table>
<thead>
<tr><th>Driver</th><th>What changes the quote</th><th>What does not, by itself</th></tr>
</thead>
<tbody>
<tr><td>Role</td><td>CPO only, eMSP only, or both</td><td>Using both words on a slide</td></tr>
<tr><td>OCPP</td><td>1.6J, 2.0.1, 2.1, and how many models must pass a protocol test</td><td>A logo list of charger brands</td></tr>
<tr><td>OCPI</td><td>How many partners, and which modules each one implements</td><td>A claim of "roaming ready" with no partner</td></tr>
<tr><td>Driver product</td><td>One app platform or both, and the payment method</td><td>A map with no session underneath</td></tr>
<tr><td>Operator product</td><td>Dashboard, tariffs, alerts, settlement records</td><td>A status page that hides missing heartbeats</td></tr>
<tr><td>Site rules</td><td>Load management, fleet priority, idle fees</td><td>A smart-charging slogan the charger cannot accept</td></tr>
<tr><td>Later phases</td><td>ISO 15118 readiness, white-label store releases, extra regions</td><td>Putting those words into the first release by default</td></tr>
</tbody>
</table>
<p>A protocol test is the expensive kind of truth. Each charger model has to boot, authorise, meter, and stop on the firmware you will install. OCPP 1.6 and OCPP 2.0.1 are not compatible, so a second version is a second stack, not a setting. How to choose the version is the point of the <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6, 2.0.1, and 2.1 comparison</a>. Hardware you cannot reach, or a vendor cloud that will not expose OCPP, adds time that more screens cannot compress.</p>
<p>OCPI cost sits in partners and modules, not in the acronym. Locations, tariffs, tokens, sessions, and charge detail records are the usual first set. Commands, charge profiles, and a hub are extra when the partner implements them. One signed partner is a different project from a hub that routes many parties. The module list is explained in <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI roaming for CPO and eMSP roles</a>.</p>
<h2>How do CPO, eMSP, and combined scopes differ?</h2>
<p>A CPO scope is the charging management system for stations you operate. Chargers onboard over OCPP. Operators need remote start and stop where the firmware allows it, stored meter values, an alert when the heartbeat stops, and tariffs on the site. Settlement records and, in India, GST invoice fields belong here. The software can hold the fields. You still file the return.</p>
<p>An eMSP scope is the product the driver belongs to. The token in the app or on an RFID card is what a partner CPO authorises. OCPI carries that partner's locations, tariffs, session updates, and CDRs. The price the driver accepts is the price on the receipt. UPI and cards go through a gateway you contract. An eMSP that owns no chargers does not pay for a yard of hardware integration. That is why the published page says this shape can be shorter.</p>
<p>A combined scope keeps both record types in one CMS. You do not have to launch both on day one. The second role should be a phase. Roaming still needs a partner that implements the modules you use. A combined CMS is not a public hub. If the brief is only a marketing site, it does not belong on this scope at all.</p>
<h2>What is different about licensing a platform instead of commissioning one?</h2>
<p>Licensing, white-label, and custom build are different contracts around the same drivers. A licence or a SaaS seat can look smaller at the start because the protocol work is already inside someone else's product. The quote moves again when your charger model is outside that product's tested list, when you need a module the vendor has not switched on, or when you cannot leave with the data and the configuration. Those limits are commercial, and they belong in the comparison, not in a footnote.</p>
<p>A white-label build uses your brand, your store accounts, your domain, and your payment gateway. The OCPP or OCPI test does not shrink because the logo is yours. A custom build is the same test, written to your sites and your partners, with the repositories named in the scope. That is <a href="/services/ev-charging-app-development">OCPP/OCPI platform development</a>, not a resized brochure. The <a href="/blog/build-vs-buy-ev-charging-csms">white-label, custom, and SaaS decision</a> is the place to choose the contract. This page only says that the published starting range is the MVP label above, and that a wider list is a written scope, not a second invented number.</p>
<p>Ongoing cost is easy to under-name. Someone has to watch heartbeats, failed starts, certificate expiry on newer OCPP security, partner OCPI errors, and payment reconciliation. A build that ends at launch without an operator path pushes that work onto a spreadsheet. Name the operator path in the first scope if a person will actually run the network.</p>
<h2>Which regional rules change the scope?</h2>
<p>The protocol question is the same in India, Europe, the Middle East, and Southeast Asia. The attachments differ, and each attachment is scope.</p>
<ul>
<li>India: the Ministry of Power recommends open protocols, including OCPP and OCPI, for public charge point operators, and BIS publishes the IS 17017 series for chargers. UPI sits beside cards. Receipts need GST fields. Bharat AC-001 and Bharat DC-001 still appear beside CCS and Type 2, so the app filter has to know the connector.</li>
<li>Europe: OCPI 2.3.0 is the version the EVRoaming Foundation ties to EU national access point data under AFIR, and it lists calibration-law support. OCPP 2.0.1 and 2.1 are the texts IEC has published. Ask for those if a tender names them. Do not assume every partner has moved.</li>
<li>Middle East and Southeast Asia: ask which connector families and which payment instruments the sites actually use. Do not copy an India GST invoice or a European calibration layout into a region that does not use them.</li>
</ul>
<p>None of those lines adds a price. They add or remove work. A glossary of the names in that list is the <a href="/blog/ev-charging-software-glossary">EV charging software glossary</a>. TheTriFusion writes the scope for a <a href="/services/ev-charging-app-development">CSMS for CPOs and eMSPs</a> from Jaipur and delivers remotely. Bring the charger models, the partner you have actually signed, and the payment method you already run. That is enough to say whether the published MVP label fits.</p>
<h2>FAQ</h2>
<h3>How much does an EV charging CMS cost?</h3>
<p>The EV charging CMS page publishes a starting range of ₹4,50,000, ex-GST, after discovery, labelled as an eMSP or CPO MVP with live maps, charging sessions, and OCPP/OCPI. It is a starting range, not a fixed package. Wider scope is quoted in writing.</p>
<h3>Does that range include every OCPP version and every OCPI partner?</h3>
<p>No. The label is an MVP. Extra OCPP versions, extra charger models that must pass a protocol test, and extra OCPI partners are scope. They are not included by the acronym alone.</p>
<h3>Why can an eMSP app cost less than a CPO platform?</h3>
<p>An eMSP that owns no chargers does not integrate a yard of OCPP hardware. It still needs OCPI toward the partners it signs, a driver app, and settlement. A CPO needs the hardware path even when it does not roam.</p>
<h3>Are there other prices in this guide?</h3>
<p>No. The only figure is the starting range already published on the EV charging CMS page. Everything else is a cost driver described without a number.</p>
<h3>How long does a first release take?</h3>
<p>The EV charging CMS page describes a first CSMS and driver app, a handful of charger models, and one payment method as often 10 to 14 weeks once hardware access is ready. It also says an eMSP without owned chargers can be shorter, and roaming across many models takes longer. The week count is not locked in the first email.</p>
<h3>Does the software vendor file GST or hold the payment licence?</h3>
<p>No. The product can store GST invoice fields and can pass UPI or cards through a gateway you contract. Filing returns and the payment relationship stay with your business.</p>
`,
    category: "casestudy",
    tags: ["ev charging cms", "csms cost", "ocpp", "ocpi", "pricing"],
    imageUrl: "/images/blog-og/ev-charging-cms-software-cost-guide.svg",
    date: "2026-09-27",
    updatedAt: "2026-09-27",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
  },
{
    id: 344,
    slug: "build-vs-buy-ev-charging-csms",
    title: "Build vs Buy an EV Charging CSMS: White-Label, Custom, or SaaS",
    metaTitle: "Build vs Buy an EV Charging CSMS: A Decision Table",
    excerpt:
      "White-label, custom, and SaaS are three ways to get a charging station management system. The right one depends on who owns the chargers, the driver, and the protocol tests.",
    keywords:
      "build vs buy CSMS, white-label EV CMS, custom OCPP platform, SaaS charging software",
    content: `
<p>Build versus buy, for a charging station management system, is a choice among three products: a white-label CMS you brand, a custom CSMS scoped to your chargers and roaming partners, or a SaaS platform you rent. The right one is the one that matches who owns the chargers, who owns the driver, and which protocol versions you must pass.</p>
<p><em>Sources:</em> OCPP versions and the fact that 1.6 is not compatible with 2.0.1 come from the <a href="https://openchargealliance.org/protocols/open-charge-point-protocol/" target="_blank" rel="noopener noreferrer">Open Charge Alliance</a>. OCPI roles, modules, and hubs come from the <a href="https://evroaming.org/ocpi/" target="_blank" rel="noopener noreferrer">EVRoaming Foundation</a>. India's open-protocol recommendation is in the Ministry of Power guidelines noted by the <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151393" target="_blank" rel="noopener noreferrer">Press Information Bureau</a>. The only price in this article is the starting range already published on the <a href="/services/ev-charging-app-development">EV charging CMS</a> page. Names of the three options are defined again in the <a href="/blog/ev-charging-software-glossary">EV charging software glossary</a>.</p>
<h2>What are the three ways to get a CSMS?</h2>
<p>A CSMS, in OCPP 2.0.1's language, is the charging station management system the charger connects to. OCPP 1.6 calls the same server a Central System. Operators often say CPMS. The product decision is how you obtain that server, plus the driver app and the roaming link if you need them.</p>
<p>White-label means the product is delivered under your brand: your name on the app and the dashboard, your store accounts, your domain, and your payment gateway. The protocol test is the same as a single-brand build. You receive the repositories named in the scope.</p>
<p>Custom means the same kind of system, shaped to your charger models, your tariffs, your fleet rules, and your named OCPI partners, rather than to a catalogue release. It is still a scoped build. It is not an open-ended rewrite of the industry.</p>
<p>SaaS means you rent a platform someone else operates. You configure sites inside their product. You typically do not receive the server. Your chargers must be on their tested list, and your roaming must fit the modules they have switched on. That can be the fastest way to a first site. It can also be a closed door when the firmware or the partner does not fit.</p>
<h2>How should a CPO compare white-label, custom, and SaaS?</h2>
<p>Compare the contract on the questions that change operations. A feature grid of fifty ticks hides the three that matter: whose protocol test you are on, whether you can leave, and whether the driver and the charger are allowed to be different companies.</p>
<table>
<thead>
<tr><th>Question</th><th>White-label</th><th>Custom</th><th>SaaS</th></tr>
</thead>
<tbody>
<tr><td>Whose brand does the driver see?</td><td>Yours</td><td>Yours</td><td>Yours, inside their product, if they allow it</td></tr>
<tr><td>Who holds the repositories?</td><td>You, for what the scope names</td><td>You, for what the scope names</td><td>The vendor</td></tr>
<tr><td>OCPP versions</td><td>The versions in the scope, tested per model</td><td>The versions in the scope, including a second stack when 1.6 and 2.x must coexist</td><td>The versions that vendor has certified</td></tr>
<tr><td>OCPI</td><td>The partners and modules in the scope</td><td>The same, including an unusual module a catalogue skipped</td><td>The partners that vendor already connects</td></tr>
<tr><td>First proof</td><td>Boot, meter, stop, and one payment path</td><td>The same proof, on your awkward site rules</td><td>A site that already matches their template</td></tr>
<tr><td>Leaving later</td><td>You keep the named repos and accounts</td><td>You keep the named repos and accounts</td><td>You keep exports, if the contract gives them</td></tr>
<tr><td>Money shape</td><td>A scoped build. The published MVP starting range is ₹4,50,000 ex-GST</td><td>A scoped build against the same drivers. Not a fixed package</td><td>The vendor's own price. Not stated here</td></tr>
</tbody>
</table>
<p>The rupee figure is the one the EV charging CMS page already publishes: a starting range of ₹4,50,000, ex-GST, after discovery, labelled as an eMSP or CPO MVP with live maps, charging sessions, and OCPP/OCPI. It is not a package you can order unchanged, and it is not a SaaS seat. What moves a quote past that label is set out in the <a href="/blog/ev-charging-cms-software-cost-guide">EV charging CMS cost guide</a>.</p>
<h2>When is a white-label CMS the right contract?</h2>
<p>Choose white-label when you need your own driver brand and your own operator login, and your first sites look like a known shape: one OCPP version, a handful of charger models, one payment method, and roaming either later or with one partner. Startups, oil-retail brands, and real-estate hosts often sit here. They are not trying to invent a new transaction model. They are trying to operate under their name.</p>
<p>White-label does not skip the hardware test. A charger that speaks only a private cloud API still will not remote-start. Store listings stay in your developer accounts, and the stores' review time is not the build. If the balance in the app can be withdrawn, your counsel confirms the position before anyone shapes it. The protocol work is <a href="/services/ev-charging-app-development">OCPP/OCPI platform development</a> with your logo, not a thinner protocol.</p>
<h2>When is a custom CSMS the right contract?</h2>
<p>Choose custom when the catalogue shape would delete a rule you actually run. Examples that show up in real scopes: 1.6J and 2.0.1 on one yard, because the Open Charge Alliance says those versions are not compatible; a depot that must prioritise vehicles by departure; a tariff with an idle fee the driver saw before the session; an OCPI partner that publishes locations but does not yet accept commands; GST invoice fields on an Indian receipt alongside a European partner that needs the calibration-law data OCPI can carry.</p>
<p>Custom is also the right contract when charging is one module inside a wider product, such as a fleet system or a property platform. The CMS records stay the CMS records. They do not get folded into a generic form builder. Version choice still follows the firmware, which is the subject of the <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6 vs 2.0.1 vs 2.1 comparison</a>.</p>
<h2>When is a SaaS CSMS the right contract?</h2>
<p>Choose SaaS when you want someone else to run the server, your charger models are already on that vendor's tested list, and your roaming partners are already their partners. A small network with one hardware type can be live sooner this way. Ask, in writing, what happens when you add a model they have not tested, or a partner who speaks a module they have not enabled.</p>
<p>Ask who can export locations, sessions, CDRs, and tariffs if you leave. Ask whether OCPP 2.1 blocks you need, such as bidirectional charging or battery swapping, are on their roadmap or absent. The Alliance lists those as 2.1 additions. A SaaS plan that stops at 1.6J is a fine plan for a 1.6J yard. It is a poor plan if you are about to buy 2.1 hardware. This article does not score named SaaS vendors and does not invent their prices.</p>
<h2>What should you ask before you sign?</h2>
<p>Use the same questions in India, Europe, the Middle East, and Southeast Asia. The attachments change. The questions do not.</p>
<ol>
<li>Which OCPP version does each charger model speak, and will you see the protocol test?</li>
<li>Is roaming in the first release? If it is, which partner, and which OCPI modules? Hubs and peer-to-peer are both valid. They are explained in the <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI roaming guide</a>.</li>
<li>Who holds the domain, the store accounts, the payment gateway, and the repositories?</li>
<li>What does the driver see as the price before the session starts, and which record settles it?</li>
<li>Which local rule is in scope: India GST fields and UPI, a European national access point feed, or a connector mix that includes Type 2, CCS, or Bharat equipment?</li>
</ol>
<p>If the answers fit a known first release, white-label is usually enough. If they do not, custom is the honest contract. If someone else already operates a platform your hardware and your partners fit, SaaS can be enough. TheTriFusion's <a href="/services/ev-charging-app-development">CSMS for CPOs and eMSPs</a> is the build side of that choice, delivered from Jaipur for operators elsewhere. Bring the charger models and the partner you have signed. The written scope is the decision, not a slogan about build versus buy.</p>
<h2>FAQ</h2>
<h3>Is white-label the same product as SaaS?</h3>
<p>No. White-label, as this article uses it, is a build under your brand with the repositories named in the scope. SaaS is a platform you rent and typically do not receive.</p>
<h3>Can one company start on SaaS and later commission a custom CSMS?</h3>
<p>Yes, if you can export the locations, tokens, tariffs, and CDRs you need. Ask for that export before you sign. A platform that cannot hand over history makes the later move a re-type, not a migration.</p>
<h3>Does white-label include OCPP and OCPI automatically?</h3>
<p>It includes the versions and the partners named in the scope, after a protocol test. The logo does not add a version the charger does not speak, and it does not add a roaming partner you have not signed.</p>
<h3>Which option matches the published ₹4,50,000 range?</h3>
<p>That figure is the starting range on the EV charging CMS page for an eMSP or CPO MVP after discovery. It is a build range, ex-GST, not a SaaS seat and not a fixed package.</p>
<h3>Do we need a custom build to support both CPO and eMSP?</h3>
<p>Not always. Both roles can live in one CMS if stations and driver tokens are separate records. Custom is for the rules and the partner modules a catalogue shape would drop.</p>
<h3>Should a public CPO in India prefer one option because of the guidelines?</h3>
<p>The September 2024 guidelines recommend open protocols such as OCPP and OCPI. They do not pick white-label, custom, or SaaS. Any of the three can be acceptable if the open protocol is real and the cybersecurity obligations are met.</p>
`,
    category: "casestudy",
    tags: ["csms", "white-label", "build vs buy", "ocpp", "ocpi"],
    imageUrl: "/images/blog-og/build-vs-buy-ev-charging-csms.svg",
    date: "2026-09-27",
    updatedAt: "2026-09-27",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
  },
{
    id: 345,
    slug: "ev-charging-software-glossary",
    title: "EV Charging Software Glossary: CPO, eMSP, OCPP, OCPI, and the Rest",
    metaTitle: "EV Charging Software Glossary: CPO, CSMS, OCPP, OCPI",
    excerpt:
      "Plain definitions of CPO, eMSP, CSMS, OCPP, OCPI, ISO 15118, Plug and Charge, CDR, EVSE, and the connector names a charging network actually uses.",
    keywords:
      "EV charging glossary, CPO, eMSP, CSMS, OCPP, OCPI, ISO 15118, CDR, EVSE",
    content: `
<p>This glossary defines the terms a charge point operator or an e-mobility service provider meets when buying or building charging software: roles, protocols, session records, and connector names. Each entry is a working definition for a product decision, tied to the Open Charge Alliance, the EVRoaming Foundation, or an official India source.</p>
<p>Longer comparisons are in <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6 vs 2.0.1 vs 2.1</a> and in <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI roaming for CPO and eMSP roles</a>.</p>
<h2>Which document defines the main names?</h2>
<p>Use the publisher, not a brochure, when two vendors define the same word differently.</p>
<table>
<thead>
<tr><th>Name</th><th>Who publishes it</th><th>What it connects</th></tr>
</thead>
<tbody>
<tr><td>OCPP</td><td><a href="https://openchargealliance.org/protocols/open-charge-point-protocol/" target="_blank" rel="noopener noreferrer">Open Charge Alliance</a></td><td>Charging station to CSMS</td></tr>
<tr><td>OCPI</td><td><a href="https://evroaming.org/ocpi/" target="_blank" rel="noopener noreferrer">EVRoaming Foundation</a></td><td>CPO business to eMSP business</td></tr>
<tr><td>ISO 15118</td><td>ISO, as used by OCPP 2.0.1 and 2.1</td><td>Vehicle to charger</td></tr>
<tr><td>IS 17017</td><td><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151393" target="_blank" rel="noopener noreferrer">BIS, via the Press Information Bureau</a></td><td>Charger safety and conductive charging in India</td></tr>
</tbody>
</table>
<h2>What do the operator and driver roles mean?</h2>
<h3>CPO</h3>
<p>Charge point operator. The company that operates charge stations. In OCPI it is the side that manages the chargers.</p>
<h3>eMSP</h3>
<p>E-mobility service provider. The company the driver has an account with. The foundation also writes this role as MSP.</p>
<h3>CSMS</h3>
<p>Charging station management system. OCPP 2.0.1's name for the server a charging station connects to.</p>
<h3>Central System</h3>
<p>OCPP 1.6's name for that same server. A product can answer to both names if it speaks both versions.</p>
<h3>CPMS</h3>
<p>Charge point management system. The operator console for sites, chargers, connectors, sessions, and faults. Drivers do not log into it.</p>
<h3>CMS</h3>
<p>Charging management system. The product that can hold a CPO role, an eMSP role, or both. See the <a href="/services/ev-charging-app-development">EV charging CMS</a> page for how those roles are scoped.</p>
<h3>EVSE</h3>
<p>Electric vehicle supply equipment. The charger hardware that supplies energy to the vehicle. The Ministry of Power uses EVSE and "EV charger" for the same equipment.</p>
<h3>Connector</h3>
<p>The gun or socket on an EVSE. A site can have several EVSEs, and an EVSE can have more than one connector. Filters belong at this level.</p>
<h3>NSP</h3>
<p>Network service provider. In the Ministry of Power's OCPI definition, a party exchanging information with charge point operators.</p>
<h2>What do the protocol names mean?</h2>
<h3>OCPP</h3>
<p>Open Charge Point Protocol. The open protocol between a charging station and a CSMS, published by the Open Charge Alliance.</p>
<h3>OCPP 1.6</h3>
<p>The 2015 release. SOAP and JSON. Smart charging with charge profiles, local lists, and extra status. Not compatible with 2.0.1 or 2.1.</p>
<h3>OCPP 1.6J</h3>
<p>The JSON-over-WebSocket binding of OCPP 1.6. This is the binding to name in a protocol test. The SOAP binding is the other 1.6 form.</p>
<h3>OCPP 2.0.1</h3>
<p>The 2020 release: device management, newer transactions, added security, ISO 15118, and display messages. Edition 3 was approved as IEC 63584 in 2024.</p>
<h3>OCPP 2.1</h3>
<p>The January 2025 release. It extends 2.0.1 and adds ISO 15118-20, V2X, DER control, battery swapping, and new payments. Published as IEC 63584-210:2025.</p>
<h3>OCPI</h3>
<p>Open Charge Point Interface. The EVRoaming Foundation protocol for roaming between an eMSP and a CPO, peer to peer or via a hub.</p>
<h3>OCPI 2.2.1</h3>
<p>A generation the foundation still describes beside 2.3.0: locations, sessions, CDRs, tariffs, remote start and stop, and charge profiles.</p>
<h3>OCPI 2.3.0</h3>
<p>The foundation's current version. It adds EU access-point data, a Plug &amp; Charge indication, vehicle types, and optional payment-terminal and booking modules. Version 2.1.1 is no longer supported.</p>
<h3>ISO 15118</h3>
<p>The international standard for communication between the vehicle and the charger. OCPP 2.0.1 adds support for it. OCPP 2.1 adds ISO 15118-20 with bidirectional power transfer.</p>
<h3>Plug &amp; Charge</h3>
<p>A session started from a contract certificate in the car, once the car, the charger, and that certificate all exist.</p>
<h3>OpenADR</h3>
<p>Open Automated Demand Response. The Ministry of Power lists it with OCPP and OCPI as an open protocol a public CPO may use, including toward a distribution company.</p>
<h3>UEI</h3>
<p>Unified Energy Interface. A Beckn-based network named in India's charging guidelines for interoperability among charging networks, demand response, and related energy services.</p>
<h2>What do session, money, and energy terms mean?</h2>
<h3>Token</h3>
<p>The credential that authorises a driver, in the app or on a card. The partner CPO authorises the token. It is not the charger.</p>
<h3>RFID</h3>
<p>A radio card the charger reads as an id tag. Authorisation still has to succeed in the CSMS, or over OCPI if the driver belongs to another company.</p>
<h3>QR start</h3>
<p>A code on the connector that tells the app which EVSE to remote-start. It identifies the socket. It is not, by itself, a payment.</p>
<h3>Session</h3>
<p>The live charging transaction: start, energy, status, and stop. OCPI carries session updates between the CPO and the eMSP while the vehicle is plugged in.</p>
<h3>CDR</h3>
<p>Charge detail record. The finished record of a session that the two companies use to bill and reconcile. It is not the live session, and it is not the tariff.</p>
<h3>Tariff</h3>
<p>The price elements for a session, such as energy, time, a fixed fee, or an idle fee. OCPI tariff information is how a partner sees that price.</p>
<h3>Location</h3>
<p>The OCPI object for a site: where it is, which EVSEs and connectors it has, and the status a partner can show to drivers.</p>
<h3>Command</h3>
<p>An OCPI request such as remote start or remote stop, so an eMSP app can ask a partner CPO to act. The charger still has to accept the command.</p>
<h3>Roaming</h3>
<p>A driver of one company charging on a charger of another, with a record both sides can settle. The protocol for that exchange is OCPI.</p>
<h3>Roaming hub</h3>
<p>A platform that routes OCPI between many parties. The foundation names GIREVE and e-clearing.net as examples. A hub is optional.</p>
<h3>Peer-to-peer</h3>
<p>A direct OCPI connection between one CPO and one eMSP, with no hub in the middle. This is the usual first roaming link.</p>
<h3>Smart charging</h3>
<p>Adjusting power during a session with a charge profile. The charger has to accept the profile.</p>
<h3>Charging profile</h3>
<p>A limit or schedule for how much power a charger may draw. OCPP 1.6 already has charge profiles. Later versions add further smart-charging tools.</p>
<h3>Load management</h3>
<p>Keeping a site inside the power its connection can supply, by shaping profiles on the chargers there. It is a site rule, not a marketing label.</p>
<h3>Heartbeat</h3>
<p>The periodic OCPP sign that a charger is still connected. A missing heartbeat is a gap in uptime, not a flat healthy line.</p>
<h3>Meter value</h3>
<p>An energy reading the charger sends during a session. Tariffs multiply these readings. If the meter values do not arrive, the receipt is a guess.</p>
<h3>V2X</h3>
<p>Vehicle-to-everything energy flow. OCPP 2.1 adds a functional block so an EV can act as an energy source, with ISO 15118-20 for bidirectional power transfer.</p>
<h3>DER control</h3>
<p>Control of distributed energy resources. OCPP 2.1 adds this functional block for sites that mix chargers with other energy equipment.</p>
<h3>Eichrecht</h3>
<p>German calibration law for measuring energy that is sold. The EVRoaming Foundation lists calibration-law support among OCPI functions.</p>
<h3>AFIR</h3>
<p>The EU alternative-fuels infrastructure regulation. The EVRoaming Foundation says OCPI 2.3.0 is compliant with the related EU national access point data needs.</p>
<h2>What do the India and connector names mean?</h2>
<p>A CCS gun and a Type 2 socket can share an OCPP charger. The filter and the protocol version are separate fields. Scope is the <a href="/blog/ev-charging-cms-software-cost-guide">EV charging CMS cost guide</a>. The contract is the <a href="/blog/build-vs-buy-ev-charging-csms">white-label, custom, or SaaS decision</a>.</p>
<h3>BEE</h3>
<p>Bureau of Energy Efficiency. The Ministry of Power names BEE as the central nodal agency for the charging guidelines and the keeper of the national public-charging database.</p>
<h3>DISCOM</h3>
<p>The electricity distribution company that supplies a site in India. The guidelines cover a distribution-licensee connection, open access, and open protocols for demand response.</p>
<h3>Bharat AC-001</h3>
<p>An Indian AC charging specification. The Ministry of Power checklist of charger types still lists it beside CCS, Type 2, and others.</p>
<h3>Bharat DC-001</h3>
<p>A low-power Indian DC specification still used on two-wheeler and three-wheeler bays. A car driver should not be sent there by a careless filter.</p>
<h3>CCS</h3>
<p>Combined Charging System, the DC connector family common on cars in India and Europe. The guidelines' checklist names it as a charger type.</p>
<h3>Type 2</h3>
<p>The AC connector used on cars in India, Europe, and much of Asia. A Type 2 socket is not a CCS gun, even when both are on the same cabinet.</p>
<h3>CHAdeMO</h3>
<p>A DC connector family still present on some older cars and some sites. It is a different inlet from CCS. Offer it only where the hardware has that gun.</p>
<h3>GB/T</h3>
<p>China's connector family. It appears on some vehicles and sites in Asia. It is not interchangeable with CCS or Type 2.</p>
<h3>IS 17017</h3>
<p>The Indian standard series for conductive EV charging. The Press Information Bureau says BIS publishes it for connectors, communication, and EVSE.</p>
<h3>GST invoice fields</h3>
<p>The tax fields an Indian receipt needs. Charging software can store them. Filing the return stays with the business. Do not copy those fields into a country that does not use GST.</p>
<h3>White-label CMS</h3>
<p>The charging product under your brand, your store accounts, your domain, and your payment gateway. The protocol test does not change with the logo.</p>
<p>A <a href="/services/ev-charging-app-development">CSMS for CPOs and eMSPs</a> uses these words as records. TheTriFusion builds that <a href="/services/ev-charging-app-development">OCPP/OCPI platform development</a> from Jaipur for operators in India, Europe, the Middle East, and Southeast Asia. Read the <a href="https://powermin.gov.in/en/content/amendment-guidelines-installation-and-operation-electric-vehicle-charging-infrastructure" target="_blank" rel="noopener noreferrer">January 2025 amendment</a> with the September 2024 guidelines.</p>
<h2>FAQ</h2>
<h3>What is the difference between OCPP and OCPI?</h3>
<p>OCPP connects a charger to your management system. OCPI connects your company to another company so drivers can roam. A CPO usually needs OCPP. An eMSP that owns no chargers may only need OCPI.</p>
<h3>What is the difference between a CPO and an eMSP?</h3>
<p>The CPO operates the chargers. The eMSP has the driver as a customer. One company can be both, with separate records for stations and for driver tokens.</p>
<h3>What is a CDR in EV charging?</h3>
<p>A charge detail record is the finished session that the CPO and the eMSP settle. The live session and the tariff are earlier objects.</p>
<h3>Is Plug &amp; Charge the same as ISO 15118?</h3>
<p>ISO 15118 is the vehicle-to-charger standard. Plug &amp; Charge is one use case of it, using a contract certificate. OCPP 2.0.1 and 2.1 are how a CSMS participates. The car and the certificate still have to exist.</p>
<h3>Which connector names should an India app filter on?</h3>
<p>At least the types the Ministry of Power checklist names, including CCS, Type 2, and Bharat AC-001, plus Bharat DC where two-wheelers and three-wheelers charge. Add CHAdeMO or GB/T only where that gun is really installed.</p>
<h3>Where should a team start if the glossary is the first page they opened?</h3>
<p>Decide the role, then the OCPP version the chargers speak, then whether any OCPI partner is actually signed. The comparison, roaming, cost, and build-versus-buy guides linked above follow that order.</p>
`,
    category: "casestudy",
    tags: ["glossary", "ocpp", "ocpi", "csms", "evse", "iso 15118"],
    imageUrl: "/images/blog-og/ev-charging-software-glossary.svg",
    date: "2026-09-27",
    updatedAt: "2026-09-27",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
  },
];
