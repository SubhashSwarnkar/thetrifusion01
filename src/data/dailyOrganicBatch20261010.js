/**
 * Daily organic batch — 10 October 2026.
 * Ids 436–437 only. Two tech/business posts.
 * Do not reuse these ids in other blog data files.
 */
export const dailyOrganicBatch20261010Posts = [
  {
    id: 436,
    slug: "ev-depot-smart-charging-load-management-guide",
    title: "EV Depot Smart Charging: Load Management That Works",
    metaTitle: "EV Depot Smart Charging: Load Management That Works",
    excerpt:
      "Depot smart charging keeps every van that must leave full inside the contracted kVA. A 20-van worked example and a 10-row pass or fail checklist.",
    keywords:
      "EV depot smart charging, fleet load management, OCPP charging profile, contracted kVA, site controller",
    content: `
<p>Twenty bays, a utility letter that said 150 kVA, and every van plugged in at once. By morning the argument was which routes would leave short. <strong>Smart charging at a depot means the charging system, or a controller on site, limits simultaneous power so every vehicle that must leave full still leaves full, without a blackout or a demand charge from one bad hour.</strong> A slider that only works while the app is open is not that.</p>
<p>Scoring the platform is the <a href="/blog/csms-rfp-checklist-ocpp-platform-evaluation">CSMS RFP checklist</a>. Buy or build is <a href="/blog/build-vs-buy-ev-charging-csms">build versus buy</a>. This page is the night: the feeder, the departure clock, and the limit sent to the charger. Terms are in the <a href="/blog/ev-charging-software-glossary">glossary</a>.</p>
<h2>What does smart charging mean for a fleet depot?</h2>
<p>Each bay has a nameplate. The site has a contracted capacity in kilovolt-amperes, and sometimes a tighter limit on the landlord's board. The vans have clocks. Smart charging joins those facts: a 05:00 van gets power first, an 08:00 van waits, and the sum of the bays stays inside a ceiling written down with the electrician.</p>
<p>Equal shares feel fair and still miss the morning. The same thin trickle gives every early route the same shortfall. A site-wide percentage with no van tied to a clock is load shedding, not a departure plan.</p>
<h2>Why does adding more chargers fail when the feeder is full?</h2>
<p>Twenty chargers at 11 kW are 220 kW if they all run. Kilowatts of real power cannot exceed the kilovolt-amperes on the contract, so 220 kW does not fit in 150 kVA. Diversity is either a cap on how many bays run at full power, or luck from drivers arriving apart. When the shift ends together, the nameplate sum shows up.</p>
<p>An 11 kW AC unit is the usual three-phase charger. Near a power factor of 1 on a 400 volt supply, that is about 16 amps per phase. Use it only to read a profile in amps, and do not mix amps and watts across bays. Read the tariff for the cheap hours and for the interval that sets a demand charge. Some contracts bill the highest short interval in the period. Copy that interval out of the contract. If the landlord's limit is tighter than the utility's, follow the landlord.</p>
<h2>How does OCPP tell a charger to slow down?</h2>
<p>OCPP carries a maximum current or power, a window, and a clear. In OCPP 1.6 the central system sends the limit with SetChargingProfile and removes it with ClearChargingProfile. GetCompositeSchedule is the merged limit the charger will apply. Match that read-back to a meter.</p>
<p>A ChargePointMaxProfile caps the whole charge point. A TxDefaultProfile is the default for sessions, including the next one. A TxProfile covers one live session and sticks only if that session is running. Keep the station-wide ceiling so one bad diary row cannot lift the post.</p>
<p>OCPP 2.0.1 does the same job in another document. On the Open Charge Alliance 2.0.1 certification, Smart Charging is optional and Core does not include it, so a Core mark is not proof of a load limit. Where Smart Charging is tested, the station-wide type is ChargingStationMaxProfile and stacking is part of the test. A 1.6 charger will not speak 2.0.1. See <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">the OCPP comparison</a>. Roaming lets another network's driver start on a public stall. Depot vans are usually your own tokens, which is why <a href="/blog/ocpi-roaming-explained-cpo-emsp">the OCPI explainer</a> is a different decision.</p>
<h2>What happens in a 20-van yard with a 150 kVA contract?</h2>
<p>North Yard is fictional. Twenty vans, one 11 kW AC charger each, a 150 kVA contract. The electrician's charging ceiling is 110 kW, ten bays at 11 kW, leaving room for the building and for power factor. Do not copy 110 kW onto a site with a different letter. Twelve vans leave at 05:00, eight at 08:00. Each needs 44 kWh, four hours at 11 kW. All are plugged in by 22:00.</p>
<table>
<thead>
<tr><th>Plan</th><th>Peak from the chargers</th><th>Early vans at 05:00 (need 44 kWh)</th><th>Late vans at 08:00 (need 44 kWh)</th></tr>
</thead>
<tbody>
<tr><td>All 20 at full power</td><td>220 kW, above the 150 kVA contract</td><td>The night does not fit. Treat it as a failed plan, not as a completed charge.</td><td>Same overload. No van has a trustworthy session.</td></tr>
<tr><td>Equal share of 110 kW, no priority</td><td>110 kW, so 5.5 kW each</td><td>7 hours times 5.5 kW is 38.5 kWh. Every one of the 12 is 5.5 kWh short.</td><td>10 hours times 5.5 kW is 55 kWh. All 8 make it. The morning still fails.</td></tr>
<tr><td>Priority schedule in the next table</td><td>110 kW, ten bays at 11 kW</td><td>All 12 reach 44 kWh by 05:00</td><td>All 8 reach 44 kWh before 08:00</td></tr>
</tbody>
</table>
<p>Equal share is the accidental plan. It holds the feeder and still misses every early route, because 44 kWh at 5.5 kW needs eight hours and those vans have seven. The report makes the late vans look fine.</p>
<table>
<thead>
<tr><th>From</th><th>To</th><th>Bays at 11 kW</th><th>What those hours buy</th></tr>
</thead>
<tbody>
<tr><td>22:00</td><td>01:00</td><td>10</td><td>Early vans 1 to 10 take the first three hours (33 kWh).</td></tr>
<tr><td>01:00</td><td>02:00</td><td>10</td><td>Vans 1 to 8 finish their fourth hour. Vans 11 and 12 start. Vans 9 and 10 wait, already holding 33 kWh.</td></tr>
<tr><td>02:00</td><td>03:00</td><td>10</td><td>Vans 9 and 10 finish. Vans 11 and 12 continue. Late vans 1 to 6 start.</td></tr>
<tr><td>03:00</td><td>05:00</td><td>10</td><td>Vans 11 and 12 finish at 05:00. Late vans 1 to 6 continue. Late vans 7 and 8 start at 03:00.</td></tr>
<tr><td>05:00</td><td>07:00</td><td>8, then 2</td><td>Late vans 1 to 6 finish at 06:00. Late vans 7 and 8 finish at 07:00.</td></tr>
</tbody>
</table>
<p>Vans 9 and 10 pause at 01:00 so vans 11 and 12 can start a four-hour charge that still finishes at 05:00. Vans 9 and 10 need one more hour, resume at 02:00, and finish at 03:00. No row uses more than ten bays, so the peak stays 110 kW. Charging whichever vans parked by the door, if those are the late routes, fills vehicles that could have waited.</p>
<h2>Which signals should pass before you trust the night?</h2>
<p>Score the yard, not the brochure. A pass is a document or a test you can repeat. A fail is a phrase.</p>
<table>
<thead>
<tr><th>Signal</th><th>What to measure</th><th>Pass or fail</th></tr>
</thead>
<tbody>
<tr><td>Site capacity letter</td><td>Contracted kVA on a letter or a bill.</td><td>Pass: the number is written down. Fail: the transformer "looks big enough."</td></tr>
<tr><td>Nameplate versus contract</td><td>Sum of charger kilowatts beside the kVA, plus a charging ceiling an electrician signed.</td><td>Pass: both numbers share one page. Fail: bay count times 11 kW treated as the demand.</td></tr>
<tr><td>Tariff windows</td><td>Cheap hours, and the interval that sets any demand charge.</td><td>Pass: the interval is copied from the contract. Fail: a guess that night is always cheap.</td></tr>
<tr><td>Departure priority</td><td>Which vehicle must hit its energy target by which clock time.</td><td>Pass: a list the controller reads when routes change. Fail: the order lives in a driver's head.</td></tr>
<tr><td>Firmware profiles</td><td>The charger accepts amps or watts, holds a window, and can clear it. Name the model and firmware.</td><td>Pass: a dated test. Fail: "smart charging" on a slide.</td></tr>
<tr><td>Back office versus local controller</td><td>Which box enforces the feeder ceiling, and which stores the departure list.</td><td>Pass: both boxes are named. Fail: nobody can point at either.</td></tr>
<tr><td>Offline fallback</td><td>Current after the uplink is unplugged for twenty minutes during a limited session.</td><td>Pass: the limit holds. Fail: the bay returns to nameplate.</td></tr>
<tr><td>Demand metering</td><td>A meter that sees the site the way the utility or the landlord bills it.</td><td>Pass: you can read that interval. Fail: only a session total in the app.</td></tr>
<tr><td>Per-vehicle priority</td><td>One early van can be raised without retyping every bay.</td><td>Pass: the schedule moves with that van's clock. Fail: one slider for the yard.</td></tr>
<tr><td>Expansion path</td><td>What changes when ten more vans arrive and the kVA does not.</td><td>Pass: a written choice of a longer window, a higher contract, or fewer full-power bays. Fail: "add chargers" alone.</td></tr>
</tbody>
</table>
<h2>Which red flags mean the night is still unprotected?</h2>
<p>Paper smart charging moves a graphic and never leaves a limit on the charger. Ask for the charger's read-back. If that limit dies when the link drops, the unprotected hour is the hour nobody is watching.</p>
<p>With no priority per van, everyone simply goes slower, the feeder survives, and the 05:00 routes do not. A landlord demand charge or a utility interval can still be set by one spike. Session energy is not that spike. Read the site meter.</p>
<h2>When do depot rules need their own software?</h2>
<p>A product with a site ceiling and a short list is enough if a person can edit it each evening. Custom work starts when a shift calendar or an ERP route file must set the bay order, when two landlord boards share a site, or when a controller on the LAN must keep the ceiling if the cloud link drops.</p>
<p>That is <a href="/services/ev-charging-app-development">EV charging development</a>, with a route-system link on <a href="/services/software-development">custom software</a>. Published ranges are ₹4,50,000, then ₹9,00,000 and ₹18,00,000, Indian rupees, ex-GST, after discovery. The starter is an eMSP or CPO MVP with maps, sessions, and an OCPP or OCPI path. It is not twenty bays, the hardware, or an ERP file. What moves the figure is in <a href="/blog/ev-charging-cms-software-cost-guide">the cost guide</a> and <a href="/blog/ev-charging-app-ocpi-ocpp-guide">the OCPI and OCPP guide</a>. PlugOne at plugone.in is a live map and sessions, not this yard. For a ceiling tied to your departure list, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>What should a depot night achieve?</h3>
<p>Early vans reach their energy target while the bays stay inside the site ceiling. Missed routes are a failed night even if the bill fell.</p>
<h3>Why is one charger per van not enough?</h3>
<p>Twenty times 11 kW is 220 kW. That does not fit a 150 kVA supply. More bays without more capacity repeat it.</p>
<h3>Do OCPP 1.6 and 2.0.1 share a limit message?</h3>
<p>Both need a maximum, a window, and a clear. The 1.6 names are not a 2.0.1 payload. Test your firmware. A Core mark does not prove Smart Charging.</p>
<h3>What should survive an offline back office?</h3>
<p>The last ceiling, on the charger or a yard controller. Unplug the uplink. A return to nameplate is a fail.</p>
<h3>How do we spot a van that will miss its leave time?</h3>
<p>Divide energy still needed by the power it is getting. At 5.5 kW, 44 kWh takes eight hours. From 22:00 to 05:00 is seven.</p>
<h3>When is a site-wide slider the wrong tool?</h3>
<p>When a shift calendar or a route file should reorder the bays without someone retyping each row.</p>
`,
    category: "casestudy",
    tags: ["ev charging", "smart charging", "ocpp", "fleet"],
    imageUrl: "/images/blog-og/ev-depot-smart-charging-load-management-guide.svg",
    date: "2026-10-10",
    updatedAt: "2026-10-10T09:00:00+05:30",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development", "software-development"],
    faqs: [
      {
        question: "What should a depot night achieve?",
        answer:
          "Every van with an early departure reaches its energy target, and the chargers together stay inside the ceiling agreed for that site. A lower bill with missed routes is a failed night.",
      },
      {
        question: "Why is one charger per van not enough?",
        answer:
          "The nameplates add up faster than the contract. Twenty chargers at 11 kW are 220 kW, and real power cannot exceed a 150 kVA supply. Extra bays without extra capacity copy the overload.",
      },
      {
        question: "Do OCPP 1.6 and 2.0.1 share a limit message?",
        answer:
          "Both need a maximum current or power, a time window, and a way to clear the limit. OCPP 1.6 message names are not a 2.0.1 payload. Smart Charging is optional on the Open Charge Alliance 2.0.1 certification, so a Core mark is not proof. Test the firmware you own.",
      },
      {
        question: "What should survive an offline back office?",
        answer:
          "The last accepted ceiling should hold on the charger or on a controller in the yard. Unplug the uplink during a limited session and read the current. If the bay returns to its nameplate, the limit lived only in the app.",
      },
      {
        question: "How do we spot a van that will miss its leave time?",
        answer:
          "Divide the energy still needed by the power that van is actually getting, and compare those hours with the departure clock. At 5.5 kW, 44 kWh takes eight hours. A van plugged in at 22:00 for a 05:00 leave only has seven.",
      },
      {
        question: "When is a site-wide slider the wrong tool?",
        answer:
          "When the order of charging comes from a shift calendar or a route file, and raising one van should reshuffle the bays. That needs software scoped after discovery, not a single percentage for the whole yard.",
      },
    ],
  },
  {
    id: 437,
    slug: "devops-ci-cd-checklist-sme-saas-2026",
    title: "DevOps CI/CD Checklist for SME SaaS Teams (2026)",
    metaTitle: "DevOps CI/CD Checklist for SME SaaS Teams (2026)",
    excerpt:
      "CI/CD for a small SaaS team is a rehearsed path from merge to production with a timed rollback. A 12-row checklist and one feature walked through.",
    keywords:
      "DevOps CI/CD checklist, SME SaaS release process, staging rollback, pipeline for small teams",
    content: `
<p>Thursday's release of the billing page was still the topic on Friday, because the only way back had been a commit message that said revert, and the database change had already run. The tests had been green. Nobody had ever restored a backup, and nobody could name the artifact that production was supposed to be running. <strong>CI/CD for a small SaaS team is not a cluster diagram. It is a repeatable path from a merge to a known environment, with a rollback you have already rehearsed.</strong> Five to thirty engineers do not need an enterprise suite to have that path. They need the gates to be real.</p>
<p>The product shape, if you are still deciding what the first version contains, is a different page: <a href="/blog/nextjs-app-router-saas-mvp-guide-2026">the Next.js SaaS guide</a>. This one starts after the app exists and someone has to ship it twice a week without guessing.</p>
<h2>What does good enough CI/CD mean before you hire a platform team?</h2>
<p>Good enough means a change can be built once, tested on that build, tried on a staging environment that resembles production, smoked along the path a paying customer uses, promoted as that same build, and watched by a person who knows how to undo it. Kubernetes is optional. Many paid products at this size run on a platform-as-a-service or on a pair of virtual machines. The roadmap question is whether a cluster earns its keep, not whether a diagram looks current.</p>
<p>A hosted git forge, a CI runner, a container registry or a package store, and a place to deploy are the categories. Naming a favourite vendor inside those categories is a procurement choice, not a maturity score. What fails teams is a missing gate, not the logo on the runner.</p>
<h2>What must each stage prove?</h2>
<p>Read the stage as a question the pipeline has to answer. If it cannot answer, the release is a hope.</p>
<table>
<thead>
<tr><th>Stage</th><th>What it must prove</th><th>It has failed when</th></tr>
</thead>
<tbody>
<tr><td>Build</td><td>This revision produced an artifact you can name, such as an image digest or a package version.</td><td>The only copy is a laptop, and nobody can point at a digest.</td></tr>
<tr><td>Test</td><td>The checks you wrote ran against that artifact, and a red check blocks the merge.</td><td>The badge is green because the suite was skipped, or because merging is allowed anyway.</td></tr>
<tr><td>Deploy staging</td><td>That same artifact is running with the same shape of configuration production uses, including how migrations run.</td><td>Staging is a laptop, or it shares the production database.</td></tr>
<tr><td>Smoke</td><td>A person or a script finishes the path a customer pays for, on staging.</td><td>The only check is that the homepage returns a success code.</td></tr>
<tr><td>Promote production</td><td>The smoked artifact moves forward. Production is not compiled again from a branch that may have moved.</td><td>Someone rebuilds on the server from whatever main is now.</td></tr>
<tr><td>Observe</td><td>An error jump or a failed check reaches a named person, who can roll back.</td><td>You hear about it from a customer, or from an inbox nobody reads.</td></tr>
</tbody>
</table>
<h2>What belongs on a 12-row maturity checklist?</h2>
<p>The minimum column is the bar for a product that charges money. The skip column is the habit that makes the next incident longer. A row you have not tested is not a pass.</p>
<table>
<thead>
<tr><th>Practice</th><th>Minimum for a paid SaaS</th><th>Common skip that hurts</th></tr>
</thead>
<tbody>
<tr><td>Main is protected</td><td>The default branch needs a review and rejects a direct push.</td><td>A "just this once" push that happens every Thursday.</td></tr>
<tr><td>Checks required</td><td>Build and tests pass before merge. Overriding a red check needs a named reason.</td><td>Red runs still land on main.</td></tr>
<tr><td>Secrets stay out of the repo</td><td>Tokens live in the CI secret store. A committed secret fails the check, and you rotate it.</td><td>Deleting the file later leaves the secret in history.</td></tr>
<tr><td>Staging mirrors production</td><td>Same variable names, same migration step, smaller data, separate credentials.</td><td>Staging uses the production database so the data "looks real."</td></tr>
<tr><td>Migration discipline</td><td>Migrations are a pipeline step. Someone has run the backward path on a copy.</td><td>A change is typed by hand on the server and never written down.</td></tr>
<tr><td>Flags, not long branches</td><td>A change can be turned off without hunting an old commit. Branches live for days, not months.</td><td>A quarter-long branch that needs a freeze to merge.</td></tr>
<tr><td>A small safe rollout</td><td>Two copies, or a flag for staff first, so one bad release misses most customers.</td><td>One server is replaced in place, and the plan is hope.</td></tr>
<tr><td>A rollback drill</td><td>You have restored the previous artifact on purpose and written down the minutes.</td><td>Rollback is a paragraph nobody has executed.</td></tr>
<tr><td>Error and uptime alerts</td><td>An error spike or a failed check pages a person named on a calendar.</td><td>A dashboard opened only after a support mail.</td></tr>
<tr><td>Dependency cadence</td><td>Updates run on a schedule, with the test suite.</td><td>Libraries sit frozen until a security mail owns a Friday night.</td></tr>
<tr><td>Backup restore test</td><td>A backup has been restored onto a non-production database this quarter.</td><td>The files exist. Nobody has restored one.</td></tr>
<tr><td>On-call ownership</td><td>A rotation, even a short one, and a real way to reach the person on it.</td><td>"Whoever sees the chat" is the policy.</td></tr>
</tbody>
</table>
<p>Secrets and stale dependencies are the rows a public exploit report keeps pointing at. The business reading of one contest week is in <a href="/blog/pwn2own-ireland-2026-security-lessons-for-businesses">the Pwn2Own Ireland lessons</a>. Rotate a leaked token. Deleting the file is not the end of it.</p>
<h2>How does one feature move from a pull request to production?</h2>
<p>Harbour is a fictional B2B product: twelve people, one production region, a ship window on Tuesday and Thursday afternoons. The feature is an invoice PDF on the billing page. The categories in play are a hosted git forge, a CI runner, a container registry, and a platform-as-a-service. Two virtual machines would do the same job if the team is not on a platform. The minutes below are this team's own measurements from their drill and their pipeline. They are not a benchmark you should quote as an industry figure.</p>
<table>
<thead>
<tr><th>Clock</th><th>Gate</th><th>What is true afterwards</th></tr>
</thead>
<tbody>
<tr><td>Tuesday 09:40</td><td>Pull request opened against main</td><td>The work is not on main. A reviewer is requested. A direct push would be rejected.</td></tr>
<tr><td>Tuesday 09:52</td><td>CI finishes, about twelve minutes on this pipeline</td><td>Tests passed. An image sits in the registry with a digest.</td></tr>
<tr><td>Tuesday 11:10</td><td>Review approved, checks still green, merge</td><td>Main moved forward by that digest's source, not by an unreviewed push.</td></tr>
<tr><td>Tuesday 11:25</td><td>Staging deploys that same digest</td><td>Migrations ran as a step. Staging does not share production's database.</td></tr>
<tr><td>Tuesday 11:40</td><td>Smoke: sign in as a test customer, open billing, download the PDF</td><td>The paid path works on the artifact you intend to ship.</td></tr>
<tr><td>Tuesday 16:00</td><td>Promote that digest in the Tuesday window</td><td>Production runs the smoked digest. It was not compiled again.</td></tr>
<tr><td>Tuesday 16:30</td><td>Watch for half an hour</td><td>Error rate and the login check stayed in the band this team treats as normal. The on-call name was on the calendar.</td></tr>
<tr><td>If the PDF errors</td><td>Rollback to the previous digest</td><td>Last month's drill put the previous digest back in eight minutes. The database step had a backward path they had already run on a copy.</td></tr>
</tbody>
</table>
<p>Notice what did not happen. Nobody rebuilt on the server. Nobody pointed staging at live invoices. The flag, if they wanted a softer start, would have shown the PDF to Harbour staff on Monday and to customers on Tuesday. A three-month branch called "billing-rewrite" would have missed this window, because it could not be smoked as a single digest.</p>
<h2>What drives the cost, if there is no package price to copy?</h2>
<p>The cost that matters is engineer time while billing is down, plus the restore you postponed until you needed it. Forge seats, runner minutes, the registry, and the host are whatever those vendors charge now. Read their prices. This note does not invent them.</p>
<p>On our DevOps page the starter pack is quoted after a written scope. It is not free. The infrastructure audit, including a read of the cloud bill if you share it, is free and does not oblige you to continue. That page has no package figure to paste into a budget. An assistant inside the product is a different budget from the pipeline. Drivers for that build are on <a href="/blog/ai-app-development-cost-india-2026">the AI app cost guide</a>, as India scoping notes, not as a price for a CI runner.</p>
<h2>When do you bring help in, and when do you grow the team?</h2>
<p>Stay in-house when someone already owns the pipeline and the gap is habit: protect main, block on red checks, run the drill, restore one backup. Bring help when nobody can name the production artifact, staging shares production data, or the last releases were repaired by hand on the server. A dozen people need one named owner for those gates, not a platform department.</p>
<p>That owner can be a hire or a scoped engagement. How to judge a Jaipur company for the work is in <a href="/blog/software-development-company-jaipur-guide">the Jaipur software guide</a>. Named capacity for UK and Australian teams, with no hourly rate published here, is in <a href="/blog/hire-dedicated-developers-cost-guide-uk-australia">the dedicated developer guide</a>. Hours with a named lead are <a href="/services/on-demand">on-demand developers</a>. The release path is <a href="/services/devops">DevOps</a>. If the gap is the product, start from <a href="/services/software-development">custom software</a>. Bring the last incident, where secrets live, and whether a backup has ever been restored. <a href="/contact">Contact TheTriFusion</a> for the free audit, then a quoted starter once there is a scope.</p>
<h2>FAQ</h2>
<h3>Do we need Kubernetes to say we have CI/CD?</h3>
<p>No. You need a named artifact, staging with the same configuration shape, a smoke of the paid path, and a timed rollback. A platform or two machines can host that.</p>
<h3>What is the smallest honest pipeline for a paid product?</h3>
<p>Protected main, blocking checks, secrets outside the repo, staging off production data, and a promote that reuses the smoked artifact.</p>
<h3>Why is a green test run not enough to ship?</h3>
<p>Tests skip the migration, the production configuration, and the undo. Smoke the paid path, then rehearse the rollback.</p>
<h3>How often should a small team release?</h3>
<p>Harbour uses Tuesday and Thursday because someone can watch. Ship the artifact you smoked, in a window where a person is awake.</p>
<h3>What should we restore before we trust a backup?</h3>
<p>Restore onto a non-production database this quarter and record the minutes. An unrestored file is not a plan.</p>
<h3>When is a platform team the wrong next hire?</h3>
<p>When you are about a dozen people and the failures are unprotected main, a shared database, and a rollback nobody has run. One owner comes first.</p>
`,
    category: "webdev",
    tags: ["devops", "ci/cd", "saas", "release"],
    imageUrl: "/images/blog-og/devops-ci-cd-checklist-sme-saas-2026.svg",
    date: "2026-10-10",
    updatedAt: "2026-10-10T09:00:00+05:30",
    readTime: "9 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["devops", "on-demand"],
    faqs: [
      {
        question: "Do we need Kubernetes to say we have CI/CD?",
        answer:
          "No. A small paid SaaS needs a named artifact, staging that matches production's configuration shape, a smoke test of the path customers pay for, and a rollback someone has timed. A platform-as-a-service or two virtual machines can host that.",
      },
      {
        question: "What is the smallest honest pipeline for a paid product?",
        answer:
          "Protect the default branch, require passing checks before merge, keep secrets out of the repository, give staging its own data, and promote the same artifact you smoked rather than rebuilding on the server.",
      },
      {
        question: "Why is a green test run not enough to ship?",
        answer:
          "A green suite does not prove the database migration, the production configuration, or that the team can undo the release. Smoke the paid path on staging, then rehearse the rollback.",
      },
      {
        question: "How often should a small team release?",
        answer:
          "Twice a week is a workable window if someone is awake to watch. The cadence matters less than shipping the artifact you already smoked, instead of compiling again from a branch that moved.",
      },
      {
        question: "What should we restore before we trust a backup?",
        answer:
          "Restore a backup onto a non-production database during the quarter and record the time it took. A backup file that has never been restored is not yet a recovery plan.",
      },
      {
        question: "When is a platform team the wrong next hire?",
        answer:
          "When you are still around a dozen engineers and the real gaps are an unprotected default branch, staging that shares production data, and a rollback nobody has executed. One owner for those gates comes before a platform department.",
      },
    ],
  },
];
