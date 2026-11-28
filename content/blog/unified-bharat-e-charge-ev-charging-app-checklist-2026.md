---
title: "Unified Bharat e-Charge: EV Charging App Checklist 2026"
description: "UBC is piloting in Rajasthan and 4 other states, and PM E-DRIVE ties subsidy to onboarding. What CPOs, fleets and RWAs must build in their charging app."
slug: "unified-bharat-e-charge-ev-charging-app-checklist-2026"
date: "2026-11-28"
author: "TheTriFusion team"
targetService: "ev-charging-app-development"
secondary_service_urls:
  - "/services/fintech-app-development"
  - "/services/mobile-app-development"
sources:
  - title: "The Hindu BusinessLine: Govt testing unified EV charging in 5 states"
    url: "https://www.thehindubusinessline.com/news/national/govt-testing-unified-ev-charging-in-5-states-aims-to-scale-it-further/article71724968.ece"
  - title: "ETSustainability: Government to widen EV charging platform after five-state pilot"
    url: "https://sustainability.economictimes.indiatimes.com/news/electric-mobility/government-to-widen-ev-charging-platform-after-five-state-pilot/136050886"
  - title: "PIB: National Unified EV Charging App (12 May 2026)"
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260367&lang=2&reg=3"
  - title: "Build by Ravi Rai: Unified Bharat e-Charge (UBC) explained for EV operators"
    url: "https://www.buildbyravirai.com/blog/unified-bharat-e-charge-ubc-explained-ev-operators"
  - title: "Kazam: Unified Bharat e-Charge (UBC) explained"
    url: "https://blog.kazam.energy/unified-bharat-e-charge-ubc-explained/"
  - title: "EMobility+: Kazam launches free UBC integration programme"
    url: "https://emobilityplus.com/2026/07/13/kazam-launches-free-integration-programme-to-expand-interoperable-ev-charging-through-unified-bharat-e-charge/"
  - title: "EXP with EVs: PM E-DRIVE EV charging tenders analysis"
    url: "https://www.expwithevs.in/p/pm-e-drive-ev-charging-tenders"
  - title: "YoCharge: PM E-DRIVE charging station scheme — 8,147 chargers"
    url: "https://yocharge.com/news/pm-e-drive-charging-station-scheme-8147-chargers/"
  - title: "BEE: Guidelines for Installation and Operation of EV Charging Infrastructure – 2024 (PDF)"
    url: "https://beeindia.gov.in/WriteReadData/L45218/2841453721548450.pdf"
  - title: "ThatsmyEV: Public EV charging price cap — service charge DC ₹13/unit"
    url: "https://thatsmyev.com/news/public-ev-charging-price-cap-india-service-charge-dc-13-per-unit-ministry-of-power"
  - title: "Times of India: 10 more EV charging stations planned across Jaipur"
    url: "https://timesofindia.indiatimes.com/city/jaipur/10-more-ev-charging-stations-planned-across-jaipur/articleshow/136167801.cms"
  - title: "TenderDetail: RRECL PM E-DRIVE public EV charging bid results"
    url: "https://www.tenderdetail.com/Bid-Results/TenderNotice/12398862/51c61850-6a2f-465e-85c8-7dc178c21053"
  - title: "TechCrunch: Dozens of oil and shipping tankers hacked in recent weeks"
    url: "https://techcrunch.com/2026/11/24/dozens-of-oil-and-shipping-tankers-hacked-in-recent-weeks-per-report/"
  - title: "Pulse Energy: ubc-ocpi-adaptor (GitHub)"
    url: "https://github.com/Pulse-Energy/ubc-ocpi-adaptor"
faqs:
  - question: "What is Unified Bharat e-Charge (UBC)?"
    answer: "UBC is a national interoperability layer for public EV charging, backed by the Ministry of Heavy Industries and developed by NPCI BHIM Services and BHEL. It lets drivers find, access and pay for charging across participating networks through one interface."
  - question: "Is UBC available in Rajasthan?"
    answer: "Yes, as a pilot. The ministry named Maharashtra, Karnataka, Delhi-NCR, Haryana and Rajasthan as pilot states in September 2026. On 20 November the government said it would expand the pilot but gave no timeline."
  - question: "Do I need to replace my chargers to join UBC?"
    answer: "No. UBC sits above OCPP. Your chargers keep talking to your backend over OCPP, and the integration work happens in the backend."
  - question: "Is UBC mandatory for private charge point operators?"
    answer: "We have not seen a general legal mandate. Setting up charging stations is de-licensed under the Ministry of Power guidelines. However, for chargers funded under PM E-DRIVE, the final subsidy instalment is withheld until the charger is onboarded to the national platform."
  - question: "Does my housing society or office need UBC?"
    answer: "Usually not. Community chargers in housing societies are limited to residents and authorised visitors under the guidelines. A semi-public site that sells charging to outsiders, such as a hotel or mall, may benefit from a listing through an enabler."
  - question: "How much can a public charger charge per unit?"
    answer: "There is no cap on the total price, but the operator's service charge is capped until 31 March 2028 at ₹3–₹4 per unit on AC and ₹11–₹13 per unit on DC, depending on time of day. Electricity cost, land cost and GST are added on top."
  - question: "Is OCPI still worth building if UBC exists?"
    answer: "Yes. OCPI is still used for bilateral roaming, and state tenders such as Odisha's ask for it explicitly. Clean OCPI data also makes UBC integration easier, because it can be mapped across."
---

**Short answer:** Unified Bharat e-Charge (UBC) is the government's interoperability layer for public EV charging. It is being piloted in five states, including Rajasthan, and the Centre has said it will widen it. If you run chargers, your software needs four things: honest live status, tariffs stored as data, sessions that can start without your own app, and clean UPI reconciliation.

Below: what was announced (with sources), how UBC sits next to OCPP and OCPI, what it means for Rajasthan tender bidders and Jaipur site owners, and a practical checklist.

We build EV charging software. [PlugOne](https://plugone.in), India's Unified EV Charging Platform, is our work, so we look at UBC as the people who have to connect a backend to it, not as spectators.

## What changed in November 2026

On 20 November 2026, Hanif Qureshi, Additional Secretary in the Ministry of Heavy Industries (MHI), told reporters at SIAM's National EV Charging Day event that UBC is being piloted in five states. He said the government will keep expanding it "as the network becomes more robust", but gave no timeline ([The Hindu BusinessLine](https://www.thehindubusinessline.com/news/national/govt-testing-unified-ev-charging-in-5-states-aims-to-scale-it-further/article71724968.ece); [ETSustainability](https://sustainability.economictimes.indiatimes.com/news/electric-mobility/government-to-widen-ev-charging-platform-after-five-state-pilot/136050886)).

The same reports say:

- About **12 charging network operators** have joined the platform.
- It lets EV users **discover, access and pay** for charging across participating networks through a single interface.
- It was developed by **NPCI BHIM Services and BHEL**.
- **Most makers of electric two-, three- and four-wheelers** have been integrated.
- Public charging is supported by a **₹2,000 crore allocation under PM E-DRIVE**, and the government has named **24 freight corridors and about 50 car corridors** as priorities.

UBC was first described publicly in May 2026. Heavy Industries Minister H.D. Kumaraswamy then said work was under way on a "National Unified EV Charging App" and compared its potential to what UPI did for payments ([PIB, 12 May 2026](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260367&lang=2&reg=3)). The pilot states named by the ministry in September were Maharashtra, Karnataka, Delhi-NCR, Haryana and **Rajasthan**. At launch, drivers used the EV charging feature in the BHIM app ([Build by Ravi Rai, 25 Sept 2026](https://www.buildbyravirai.com/blog/unified-bharat-e-charge-ubc-explained-ev-operators)).

### Why this matters more than another app launch

On its own, a national app would just be one more place for drivers to look. What changes the picture for operators is the money. Under PM E-DRIVE, the final subsidy instalment for a charger is **held back until it is commissioned and onboarded to the national platform** that MHI is building, Unified Bharat e-Charge ([EXP with EVs analysis of PM E-DRIVE tenders, 19 Nov 2026](https://www.expwithevs.in/p/pm-e-drive-ev-charging-tenders)). So for anyone building with public money, UBC connectivity is part of getting paid.

## UBC, OCPP and OCPI: who talks to whom

Most confusion about UBC comes from mixing up three layers. Here is how they fit together, based on the explainers published by [Kazam](https://blog.kazam.energy/unified-bharat-e-charge-ubc-explained/) and [Build by Ravi Rai](https://www.buildbyravirai.com/blog/unified-bharat-e-charge-ubc-explained-ev-operators), both of which work on UBC integrations.

| Layer | What it connects | Who uses it | Does UBC replace it? |
|---|---|---|---|
| **OCPP** (1.6-J / 2.0.1) | A charger and its operator's backend (CSMS/CMS) | Every CPO | No. A UBC session still ends with your backend sending a remote start to the charger over OCPP. |
| **OCPI** (e.g. 2.2.1) | One operator's backend and another's, for roaming | CPOs and eMSPs with bilateral deals | No. Existing OCPI data can be mapped into UBC messages. |
| **UBC (Beckn protocol)** | Any participating driver app and any participating operator | Apps (buyer side) and CPOs or their platforms (provider side) | It is the new top layer for public discovery, ordering and payment. |

Two practical points follow from this.

First, **you do not need new chargers for UBC.** The work is in the backend. Chargers that already speak OCPP keep doing so.

Second, **UBC is built on Beckn**, the same open protocol used by ONDC. Driver apps act as buyer platforms and operators act as provider platforms. Calls are asynchronous and signed, so every participant needs registered keys and callback endpoints ([Build by Ravi Rai](https://www.buildbyravirai.com/blog/unified-bharat-e-charge-ubc-explained-ev-operators)). If your team has built for ONDC, parts of this will feel familiar.

One honest caveat: as of late September, the full field-level UBC specification (exactly how a tariff or a connector's QR identity is expressed) had not been published openly, according to the same source. Anyone promising you a "certified UBC integration in a day" should show you which version of the spec they are working from.

## What the Ministry of Power rules already ask your app to show

UBC is new, but most of what it exposes was already expected of public chargers. The Ministry of Power's *Guidelines for Installation and Operation of EV Charging Infrastructure – 2024* (17 September 2024) say ([full text, official BEE copy](https://beeindia.gov.in/WriteReadData/L45218/2841453721548450.pdf)):

- **Real-time information:** public stations will display location, charger type (AC/DC, kW), number of available chargers, charging rates, any additional fees, and information specified by the Central Nodal Agency (clause 12(2)).
- **Open protocols:** open standards are recommended, and CPOs may adopt UEI, OCPP, OCPI or OpenADR. The protocols must comply with cyber security provisions (clause 12(3)).
- **Payments:** flexible payment methods "must be offered", including prepaid and postpaid options, potentially with time-based rates and solar-hour discounts (clause 12(4)).
- **Online booking:** optional, through network service providers (clause 12(2)(i)).

The guidelines also cap the operator's **service charge** until 31 March 2028: ₹3 (solar hours, 9 AM–4 PM) and ₹4 (other hours) per unit on AC chargers, and ₹11 and ₹13 per unit on DC chargers ([ThatsmyEV summary of clauses 8–10](https://thatsmyev.com/news/public-ev-charging-price-cap-india-service-charge-dc-13-per-unit-ministry-of-power)).

**What this means for your software:** your tariff engine must handle time-of-day bands and keep the service-charge component visible and separate from the electricity component. If prices live in a spreadsheet or are hard-coded in the app, they cannot be quoted reliably to a third-party app over UBC.

## The real problem UBC will expose: dead chargers

The quickest way to lose trust on a national platform is to send a driver to a charger that does not work. That risk is not theoretical in India.

- In a ministry reply in the Rajya Sabha cited by [EXP with EVs](https://www.expwithevs.in/p/pm-e-drive-ev-charging-tenders), oil companies had installed 27,737 public charging stations by March 2026, of which 22,753 were working.
- EXP with EVs' own tracking of 7,006 oil company chargers in September 2026 found **42% not working** (down from 53% in June). The analysts note that their count and the ministry's measure different things.
- In the first eight PM E-DRIVE tenders, 132 existing public chargers stood within 250 metres of proposed sites, and 51 of those were not working (same source).

Inside your own app, a stale "Available" badge is an annoyance. On UBC, a driver arrives at a dead charger after finding it through a government-backed platform. That is why the first item on our checklist below is status accuracy, not payments.

## What PM E-DRIVE tenders now ask from your software

If you are bidding for, or partnering on, a state tender, the software requirements are now written into the contract.

YoCharge's review of the tenders notes that **Odisha's RFP** requires chargers on the latest OCPP, a cloud management system on the latest OCPI, open interfaces to roaming platforms, dashboard access for the regulator, and integration with the PM E-DRIVE portal. It also counts a CMS outage caused by the CPO as SLA downtime ([YoCharge, 15 Oct 2026](https://yocharge.com/news/pm-e-drive-charging-station-scheme-8147-chargers/)).

The same analysis reports that, as of 28 September 2026, MHI had approved ₹851 crore for 8,147 public chargers across ten states and three oil marketing companies, citing a PIB backgrounder. Private operators cannot apply to MHI directly. They get access to the money by winning tenders from state nodal agencies.

So the CSMS is no longer a back-office choice. It is part of your technical bid, and under a long concession the regulator will read your data.

## Rajasthan and Jaipur: why this is a local story

Rajasthan is in the UBC pilot, and it is one of the more active PM E-DRIVE states.

- On BHEL's live-tenders page in mid-October, **RRECL (Rajasthan Renewable Energy Corporation)** had two proposals covering **350 stations and 805 chargers** under one RFP ([YoCharge](https://yocharge.com/news/pm-e-drive-charging-station-scheme-8147-chargers/)).
- A tender listing for RRECL's RFP for public EV charging under PM E-DRIVE shows a submission date of 6 October 2026, 19 bids, and technical evaluation still in progress ([TenderDetail](https://www.tenderdetail.com/Bid-Results/TenderNotice/12398862/51c61850-6a2f-465e-85c8-7dc178c21053)).
- On 25 November 2026, the Times of India reported that the Jaipur Development Authority has given RRECL a list of about **10 sites in Jaipur**, including locations at Central Park, Jawahar Circle, near Laxmi Mandir Tiraha and in Vidhyadhar Nagar. The report says per-unit rates will be decided by RRECL and the appointed operators, and that ₹81.12 crore has been approved for 591 public charging stations across Rajasthan ([Times of India](https://timesofindia.indiatimes.com/city/jaipur/10-more-ev-charging-stations-planned-across-jaipur/articleshow/136167801.cms)).

(Counts differ by source and stage; check the RFP itself.)

For a Jaipur hotel, a dealership on Tonk Road, a housing society in Mansarovar or a fleet operator in Sitapura, this means more public chargers nearby that drivers can find through UBC-enabled apps. It also raises the bar: if your chargers are listed but unreliable, that will show up quickly.

## Who needs to do what: a quick guide by business type

Not every charger owner needs a full UBC integration.

| You are… | Do you need UBC now? | What to build or fix first |
|---|---|---|
| **Public CPO** (own network, own app) | Yes, especially in pilot states or if you hold PM E-DRIVE sites | Status accuracy, tariff engine, order-based remote start, reconciliation. Decide between an enabler and direct integration. |
| **PM E-DRIVE tender bidder** | Yes. Subsidy is linked to onboarding | Everything above, plus OCPI, regulator dashboards and portal integration as the RFP requires |
| **Fleet operator** (cabs, 3W, delivery) | Mostly as a *consumer* of UBC | Depot charging control, driver-wise billing, and the ability to find and pay at public chargers from your fleet app |
| **Hotel, mall, dealer, office** (semi-public) | Optional; useful if you sell charging to the public | Simple QR + UPI flow, correct tariff display, uptime alerts. Listing through an enabler may be enough. |
| **RWA / housing society** (community charging) | Usually not. Access is limited to residents | Resident-wise metering and billing, slot sharing, load management. Keep it private. |
| **EV startup building a driver app** | Yes, as a buyer-side app | Beckn buyer integration, UPI flow, clear failure and refund journeys |

## The 2026 checklist: what your EV charging app and CSMS must do

This is the list we use when reviewing a charging platform for UBC readiness, grouped so product, backend and finance teams can each take their part.

### 1. Status you can trust

- [ ] Every connector's state comes from the latest OCPP **StatusNotification**, not from a cached flag.
- [ ] A missed heartbeat marks the charger **offline within minutes**, and it disappears from discovery.
- [ ] "Faulted", "Reserved", "Occupied" and "Unavailable" are distinct states in the app, not all shown as "Busy".
- [ ] Technicians can flag a charger as under maintenance, and that reaches every channel.

### 2. Tariffs stored as data

- [ ] Prices sit in one tariff engine used for your app, RFID, OCPI partners and UBC. There are no separate price lists.
- [ ] Time-of-day bands (solar hours vs other hours) are supported, matching the Ministry of Power structure.
- [ ] Energy cost, service charge, idle or parking fees, and GST are separate line items.
- [ ] The price quoted before a session is the price used to bill it, unless the driver is shown a clear reason.

### 3. Sessions that do not depend on your own app

- [ ] Remote start can be triggered by an **order ID** from an external app, not only by a logged-in user of your app.
- [ ] Your backend mints an authorisation token for each order and accepts it when the charger asks to authorise.
- [ ] Each connector's **QR code maps to a stable ID** that does not change when the charger is replaced or re-commissioned.
- [ ] Remote stop works from any channel that started the session.

### 4. Idempotency and failure handling

- [ ] One order starts one session and produces one charge, even if a Beckn callback, a payment webhook or an OCPP message arrives twice. ([Build by Ravi Rai](https://www.buildbyravirai.com/blog/unified-bharat-e-charge-ubc-explained-ev-operators) flags this as a common trap.)
- [ ] If payment succeeds but the charger never starts, the refund is triggered automatically and the driver is told what happened.
- [ ] If a session stops early (power cut, cable fault), billing uses the final meter reading, not an estimate.

### 5. Payments, settlement and GST

- [ ] UPI collection is reconciled against sessions daily, using the payment reference and the session ID together.
- [ ] Settlements from third-party channels are matched to the sessions that actually ran, with a report finance can read.
- [ ] Each session produces a GST invoice. Your finance team should confirm e-invoicing applicability with your CA.
- [ ] Prepaid and postpaid options exist where you serve fleets or corporates, as the Ministry of Power guidelines expect flexible payment.

### 6. Security for connected chargers

On 24 November, TechCrunch reported that US officials suspect Iranian hackers of up to 50 cyberattacks on shipping vessels in recent weeks. The report says attackers may have abused a bug in Fortinet routers, which are used on ships ([TechCrunch](https://techcrunch.com/2026/11/24/dozens-of-oil-and-shipping-tankers-hacked-in-recent-weeks-per-report/)). Chargers are not tankers, but the lesson carries over: field equipment often sits behind small routers nobody patches, and once outside apps can start your chargers, that edge matters more.

- [ ] Chargers connect to the CSMS over **TLS** (secure WebSocket). Basic authentication is per charger, not shared.
- [ ] Routers and 4G modems at sites are on an inventory with firmware versions and a patch plan.
- [ ] Remote commands (start, stop, reset, firmware update) are logged with who or what triggered them.
- [ ] Beckn signing keys and payment credentials are stored in a secrets manager, not in config files.
- [ ] The Ministry of Power guidelines require protocols to comply with cyber security rules. Keep a short written note of how yours do.

### 7. Reporting for regulators and partners

- [ ] Uptime is measured per connector and per site, in a way you could defend to a regulator.
- [ ] You can export session data (energy, duration, tariff, payment status) for a nodal agency without manual spreadsheet work.
- [ ] OCPI endpoints (locations, tariffs, sessions, CDRs) are ready if your tender or roaming partners need them.

## Enabler or direct integration? A decision table

There are two ways onto UBC. You can join through a **technology enabler** that has already built the provider side, or **integrate your own backend directly**. Kazam, for example, said in July that operators with OCPI-compatible systems can typically complete integration, testing and certification through its route within seven days ([EMobility+](https://emobilityplus.com/2026/07/13/kazam-launches-free-integration-programme-to-expand-interoperable-ev-charging-through-unified-bharat-e-charge/)). That is a company claim, so test it. Pulse Energy has published an open-source repository called [ubc-ocpi-adaptor](https://github.com/Pulse-Energy/ubc-ocpi-adaptor) on GitHub, which shows the OCPI-to-UBC mapping approach is now common.

| Factor | Through an enabler | Direct integration |
|---|---|---|
| Time to go live | Faster | Slower; depends on CSMS quality |
| Upfront engineering | Low | Medium to high |
| Control over pricing display and brand in third-party apps | Shared | Full |
| Dependency | On the enabler's uptime and terms | On your own team |
| Good fit for | Small networks, semi-public sites, a quick pilot | Larger networks, operators who own their CSMS, tender bidders |
| What it **cannot** fix | Bad status data, messy tariffs, weak reconciliation | Same, so fix these first |

Our view: an enabler can relay a start command. It cannot make a faulted charger report itself honestly. Whichever route you choose, items 1–5 of the checklist remain your responsibility.

### Questions to ask before you sign with anyone

Get these answered in writing, because public material does not yet settle them: what you pay (one-time and per transaction) and who bears UPI charges; how fast money settles and in what format; who handles a complaint when a driver paid but the charger never started; and whether you can later move to direct integration without changing charger IDs or QR codes.

## A practical 90-day plan

If you run chargers today, this is a realistic order of work.

- **Days 1–30, audit:** list every charger, connector, OCPP version and network link. Compare CSMS status with reality for a week and note every mismatch. Pull all tariffs into one sheet and find where prices disagree.
- **Days 31–60, fix the foundation:** add heartbeat-based offline detection, move tariffs into one engine with time-of-day bands, add idempotency keys to payment webhooks and session start, and patch site routers.
- **Days 61–90, connect:** choose enabler or direct route, run sandbox tests (discovery, quote, start, meter values, stop, refund on failure), then soft-launch on your most reliable sites.

## Where your own app still matters

UBC does not make operator apps pointless. It handles discovery and payment for occasional drivers. Your own app still earns its place for fleets that want monthly billing and driver-wise reports, for reservations and depot schedules, for memberships and corporate tie-ups, and for site hosts who want their own branding and revenue-share dashboards. The difference is that your app now competes on reliability and experience, which raises the bar for [mobile app development](https://thetrifusion.in/services/mobile-app-development) quality: faster session start, clear error states and a refund flow customers trust.

## How TheTriFusion can help

We design and build EV charging apps and CSMS platforms: OCPP charger management, OCPI roaming, UPI billing, tariff engines and operator dashboards. Our [EV charging app development](https://thetrifusion.in/services/ev-charging-app-development) work includes PlugOne, which its site describes as supporting OCPI 2.2.1 roaming and OCPP 1.6J/2.0.1 chargers. You can see it alongside our other projects in our [portfolio](https://thetrifusion.in/portfolio).

Payments are where many charging projects quietly lose money, so we bring the same reconciliation discipline we use in [fintech app development](https://thetrifusion.in/services/fintech-app-development).

If you are a CPO, a PM E-DRIVE bidder, a fleet operator, or a Jaipur business planning chargers, we can review your current setup against the checklist above and tell you plainly what needs fixing. WhatsApp or call us on **+91 63781 33780**, or [request a quote](https://thetrifusion.in/contact).

*Information in this post reflects public sources available on 28 November 2026. UBC specifications and PM E-DRIVE tender terms are still evolving, so confirm current requirements with the relevant nodal agency or your integration partner before you commit.*
