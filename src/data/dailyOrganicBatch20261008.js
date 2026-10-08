/**
 * Daily organic batch — 8 October 2026.
 * Ids 426–433 only. Six tech/business posts, then two world events.
 * Do not reuse these ids in other blog data files.
 *
 * Event JSON-LD offers: omit ticket fields unless every one of them is
 * already confirmed. Never invent a price.
 */
export const dailyOrganicBatch20261008Posts = [
  {
    id: 426,
    slug: "iphone-duo-foldable-app-developer-guide",
    title: "iPhone Duo Apps: Developer Guide to Apple's Foldable",
    metaTitle: "iPhone Duo Apps: A Developer Guide to the Foldable",
    excerpt:
      "iPhone Duo opens to a 7.6-inch display and ships with iOS 27.1 on 23 October 2026. What existing iPhone apps must change before pre-orders.",
    keywords:
      "iPhone Duo app development 2026, iOS 27.1 foldable layout, Xcode 27.1 screenshots, adaptive iPhone apps",
    content: `
<p>A product manager in Dubai opened the existing iPhone build, dragged the simulator wider, and told the team the foldable was "just a bigger phone." The screenshots still used a single fixed width. <strong>Apple's iPhone Duo is a foldable iPhone with a 7.6-inch inner Super Retina XDR display and a 5.4-inch outer display, and Apple says it will ship running iOS 27.1.</strong> Pre-orders start at 5:00 a.m. Pacific Time on Friday 16 October 2026. Customers in more than 70 countries and regions can buy it from Friday 23 October, with 28 further countries and regions from Friday 30 October. An app built for one rectangle will not fill the inner display by accident.</p>
<p>Updating that app, including the App Store screenshots Apple will require, is <a href="/services/ios-app-development">iOS app development</a>. If Android is in the same release train, the shared work sits on <a href="/services/mobile-app-development">mobile app development</a>. TheTriFusion does not sell iPhones and does not set Apple's review rules.</p>
<h2>What did Apple actually announce?</h2>
<p>The newsroom post is dated 9 September 2026. Opened, Apple calls iPhone Duo the thinnest iPhone it has made, with a 7.6-inch inner display it describes as 50 percent larger than iPhone 18 Pro Max. Closed, the 5.4-inch outer display is described as 90 percent of the screen area of iPhone 18 Pro. Both displays share an aspect ratio, so content can scale rather than jump to a different shape. The inner display has a nano-texture finish Apple says reduces glare, and the product page describes an under-display camera that stays hidden until it is needed. The chip is the A20 Pro. Apple also describes a vapour chamber and a dual-battery design. Colours on the newsroom post are star white and night sky. Storage capacities listed there are 256GB, 512GB, 1TB, and 2TB.</p>
<p>The product page says iPhone Duo is eSIM-only worldwide. A US or Puerto Rico unit has no physical SIM tray. That matters for a travel or banking app that still shows a "insert SIM" illustration, and for support scripts written for a tray. Battery figures on the product page are "up to 31 hours" of video playback on the inner display and "up to 44 hours" on the outer display. Those are Apple's video-playback claims, not a promise about your app's radio use.</p>
<p>Apple's developer news, in a note dated around the October toolchain, says that when iPhone Duo becomes available on 23 October it will run iOS 27.1, and that this version adds behaviour purpose-built for the foldable on top of iOS 27. The 5 October 2026 developer post, "Prepare and submit your apps for iPhone Duo," tells teams to recompile with Xcode 27.1 and to use Device Hub to see poses and orientations. A September developer note had already pointed at an Xcode 27.1 beta and at Figma and Sketch kits. If a slide in your company still says "iOS 27, same as the other iPhones," it is behind the developer note.</p>
<h2>When can people buy it, and in which countries?</h2>
<p>Apple's newsroom says customers in more than 70 countries and regions can pre-order from 5:00 a.m. Pacific Time on Friday 16 October 2026, with availability on Friday 23 October. The list Apple prints includes Australia, Brazil, Canada, China, Colombia, France, Germany, India, Japan, Malaysia, Mexico, Singapore, South Korea, Türkiye, the UAE, the UK, the US, and Vietnam. A second wave, 28 other countries and regions, starts Friday 30 October. Apple does not print all 70 names in the paragraph used here. If your launch country is missing from that sample, read the newsroom list before you promise a colleague a date.</p>
<p>The US starting price is on apple.com. The newsroom says iPhone Duo starts at $1,999 (US) for the configurations it lists, beginning at 256GB. Apple's shop page, for an unlocked "connect on your own later" unit, shows $1,999 for 256GB, $2,199 for 512GB, $2,599 for 1TB, and $3,199 for 2TB. Carrier offers on the same shop page are separate. The newsroom also mentions a 24-month figure of $83.29 (US) and an Apple Upgrade lease example. Those are US financing lines, not a price in rupees, dirhams, pounds, or euros. India, the UK, the UAE, Singapore, Malaysia, and Australia are in the first wave. Their local prices belong on the local Apple store, not in a conversion done from the US sticker.</p>
<h2>What does an app built with an older SDK look like?</h2>
<p>Apple's own prepare page for iPhone Duo draws three pictures, and they are more precise than a rumour about "black bars." Apps built with the iOS 26 SDK or earlier still run. When the phone is open they sit in the centre of the inner display with empty space around the window. When it is closed, the outer display shows the content to the left of the status bar and camera. Apps built with the iOS 27 SDK resize to fill most of the inner display but still avoid the status bar on the right edge. Apps built with the iOS 27.1 SDK or later are the ones Apple calls optimised: they use the full display, and toolbars and tab bars move to a vertical position below the status bar. MacRumors, reporting the 5 October submission opening, describes unoptimised apps as running with black borders on the inner display. The picture to design against is the one on Apple's prepare page, because that page names the SDK cutoffs.</p>
<p>That is the whole argument for a rebuild before 23 October if the inner display is the product. A reader app, a dashboard, a map, a document, or a two-pane settings screen that stays postage-stamp sized in the middle of a 7.6-inch panel looks unfinished on day one. A simple capture form may survive the empty margin for a quarter. It still has to be looked at, because a control that assumed the bottom of the phone is the bottom of the window can sit under a vertical toolbar once you move to the 27.1 SDK.</p>
<h2>Which layouts do you have to stop hard-coding?</h2>
<p>Apple's prepare page says apps built with the iOS 27 SDK and later resize when the phone unfolds and return to the outer display when it folds. Hard-coded screen sizes, fixed orientations, and device assumptions are the things it names as causes of stretched, clipped, or misplaced content. Size classes on iPhone Duo can arrive in combinations an older iPhone never sent. Apple says the inner display should feel like an extension of the iPad layout you already have, and it warns against picking a layout only from the user-interface idiom. If the code says "if iPhone, use the compact storyboard" and never reads the size class, the inner display will not pick up the wider layout you already shipped for iPad.</p>
<p>Safe areas move. The status bar Apple describes is not a short strip along the top in every pose. On the outer display, coverage of Apple's iOS 27 work describes a vertical Dynamic Island along the side. On the optimised inner layout, toolbars go vertical. A custom navigation bar painted as a 44-point slab at the bottom will overlap content or leave a gap. Remove constants that encode "iPhone 18 width" in points. Prefer Auto Layout, SwiftUI flexible stacks, or the constraint system your codebase already uses. Test portrait and landscape on both displays. Apple's screenshot spec, below, exists because both orientations are real product-page crops.</p>
<p>State across the fold is the question teams skip. Apple's prepare page says an app built with the current SDK expands on unfold and returns to the outer display on fold. It does not, in the pages used here, promise that every scroll position, draft, or video timestamp survives if you built with an older SDK and the system letterboxes you. Keep your own state. A checkout that stored "step 2" only in a view that gets recreated will restart. Write that down in the test script.</p>
<h2>What about side-by-side apps?</h2>
<p>The product page describes multitasking on the large inner display. MacRumors, describing Apple's account of iOS 27, says Split View can run two apps at once, including two windows of the same app, and that a pair can be saved and reopened. Treat that as Apple's behaviour as reported, and confirm the gesture on a device or on Device Hub before you promise a customer that your app is a good citizen next to Mail. Your app can be the narrow pane, not only the full inner display. A layout that only looks right at the full 7.6-inch width will break in the half. Minimum widths, readable type, and a single-column fallback still matter.</p>
<p>If you are on the inner display beside another app and the user folds the phone, do not assume your scene is the one that remains. Test it. The same pass should cover iPhone Mirroring, which Apple's prepare page mentions alongside resizable windows. A mirrored session is another size, not a screenshot of your marketing frame.</p>
<h2>How do you test before a customer has the phone?</h2>
<p>Apple's 5 October note says Xcode 27.1 adds development support and that Device Hub shows the app across poses and orientations. Use it for the matrix below. It is not a substitute for a handset after 23 October if the inner display is revenue. Simulators have been wrong about cameras, haptics, and thermals on every previous new iPhone. The prepare page also says that before you ship a build made with the iOS 27.1 SDK you should check that content still works when bars become vertical.</p>
<ol>
<li>Build with Xcode 27.1 against the iOS 27.1 SDK if you want the full inner display. A rebuild on the iOS 27 SDK is a different, smaller window.</li>
<li>Open Device Hub and walk every pose Apple shows: closed, open, and the orientations the hub lists. Do not stop at the pretty open portrait.</li>
<li>Rotate on both displays. Confirm the vertical toolbar does not cover a primary button.</li>
<li>Run the narrow Split View width if Device Hub or a resizable simulator exposes it.</li>
<li>Background the app, fold, unfold, and confirm the draft or the playback position you care about.</li>
<li>Repeat on a current non-foldable iPhone so the 27.1 SDK did not break the phone you already sell.</li>
<li>Put the build on TestFlight for staff in a first-wave country before 23 October if hardware is still scarce.</li>
</ol>
<h2>Which App Store assets change, and when?</h2>
<p>You can submit an iPhone Duo-optimised app in App Store Connect now. Apple's 5 October post says that starting April 2027, apps and games submitted to App Store Connect need iPhone Duo screenshots. That is a submission rule for updates you send from that month, not a promise that Apple will pull your existing listing on 23 October. If you will ship any update after the deadline, the screenshots have to exist. Waiting until the last week of March is how teams miss a hotfix.</p>
<p>Apple's screenshot specifications list iPhone Duo sizes separately from the older iPhone crops. The outer display is 1398 by 2034 pixels, or 2034 by 1398. The inner display is 2007 by 2853 pixels, or 2853 by 2007. You can upload up to 10 screenshots per display size, as JPEG or PNG, and they still have to meet the App Store Review Guidelines. Apple also points at updated app-preview specs, product-page headers, and a preview tool in App Store Connect so you can see the page on iPhone Duo before you submit. Shoot the inner display doing the thing the larger screen is for. A crop of the old iPhone 18 screenshot, scaled up, is how the empty margin sneaks back into the store listing.</p>
<h2>What should Flutter and React Native teams assume?</h2>
<p>Apple has not, on the pages used here, published a Flutter or React Native version number that "supports iPhone Duo." Do not invent one. Both toolchains produce an iOS binary. The binary is subject to the same SDK rule: the full inner display is described for apps built with the iOS 27.1 SDK or later. A Flutter or React Native app that hard-codes a logical width, or that only lays out for a phone breakpoint, will show the same empty margin as a Swift app built with an old SDK. Upgrade the toolchain only when its release notes say it can build with the iOS 27.1 SDK, then run the same Device Hub pass. Plugins that read screen size once at startup, or that present a native view with a fixed frame, are the usual failures. Test the plugin on both displays before you blame the framework.</p>
<p>A second native target, if you also ship Android, does not inherit this layout. A foldable Android phone is a different windowing model. Share the design intent, not the point constants. The comparison of the two toolchains, written before this phone existed, is <a href="/blog/flutter-vs-react-native-2024">Flutter and React Native</a>. The cost drivers for a UK-shaped mobile budget are on <a href="/blog/mobile-app-development-cost-guide-uk-2026">the UK mobile cost guide</a>. Neither page knows iPhone Duo's screenshot pixels. This one does.</p>
<h2>What does the work cost, in the currency this site publishes?</h2>
<p>The published iOS ranges on TheTriFusion's pricing data are a focused iOS MVP from ₹2,50,000, a standard range from ₹5,00,000 with an API and web admin, and a premium range from ₹9,00,000 when iOS and Android ship together. The cross-platform mobile service lists a basic range from ₹50,000, a standard range from ₹1,00,000, and a premium range from ₹2,00,000. Those are starting ranges in Indian rupees, ex-GST, after discovery. They are not a dirham quote, a pound quote, or the price of an iPhone. A foldable pass can be a few days if the app is already fully adaptive and iPad-ready. It can be a release of its own if every screen uses a fixed frame, if screenshots for two displays have to be produced in several languages, and if a vertical toolbar collides with a custom player. The things that move the effort are the number of screens, whether iPad layout already exists, how many native plugins assume a phone, and whether you need the inner-display screenshots before April 2027 or before 23 October.</p>
<p>Related reading that is already live: <a href="/blog/iphone-18-apple-intelligence-business-apps-india">iPhone 18 and business apps</a>, <a href="/blog/ios-27-siri-ai-business-apps-uk-australia">iOS 27 and Siri for UK and Australian apps</a>, and <a href="/blog/iphone-18-india-features-apps-businesses">iPhone 18 features for businesses</a>. Those pages are about the non-foldable generation. Use them for Apple Intelligence questions. Use this page for the hinge.</p>
<h2>Should you update now, or wait for hardware?</h2>
<p>Update now if the inner display is how you want to look on 23 October in the first-wave countries, which include India, the UK, the US, the UAE, Australia, Singapore, and Malaysia. Recompile with Xcode 27.1, fix the hard-coded sizes, and submit the optimised build Apple already accepts. Wait, in the narrow sense of "do not block a hotfix on new screenshots," only if the current build is acceptable in the centred window and you will not submit again until you have scheduled the April 2027 screenshot rule. Do not wait if a primary button is clipped on the outer display. That is a support incident, not a polish item. Staff in a first-wave country can put a TestFlight build on a real Duo from 23 October. A simulator-only sign-off after that date is a choice, and it should be written down.</p>
<p>If the layout work needs a written scope before the pre-order morning, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>When does iPhone Duo go on sale?</h3>
<p>Pre-orders start at 5:00 a.m. Pacific Time on Friday 16 October 2026. Availability in the first wave, more than 70 countries and regions, is Friday 23 October. Apple lists 28 further countries and regions from Friday 30 October.</p>
<h3>Which iOS version does it ship with?</h3>
<p>Apple's developer news says iPhone Duo runs iOS 27.1 when it becomes available on 23 October 2026. The full-bleed inner layout Apple describes is for apps built with the iOS 27.1 SDK or later.</p>
<h3>Will an old app be rejected on launch day?</h3>
<p>Apple says apps run. Builds made with the iOS 26 SDK or earlier appear centred on the inner display with empty space around them. From April 2027, submissions need iPhone Duo screenshots. That is a later rule for new uploads, not a deletion of today's listing.</p>
<h3>What screenshot sizes does Apple list?</h3>
<p>Outer display: 1398 by 2034 pixels, or 2034 by 1398. Inner display: 2007 by 2853 pixels, or 2853 by 2007. Confirm the current table in App Store Connect Help before you export.</p>
<h3>Does Apple publish a US price?</h3>
<p>Yes. The newsroom says it starts at $1,999 (US). Apple's shop page shows unlocked US prices of $1,999, $2,199, $2,599, and $3,199 across 256GB, 512GB, 1TB, and 2TB. Other countries set their own prices.</p>
<h3>Does Flutter or React Native get a special mode?</h3>
<p>Not on the Apple pages used here. Ship a binary built with the iOS 27.1 SDK if you want the layout Apple calls optimised, and test both displays. A framework version number is not a substitute for that pass.</p>
`,
    category: "mobile",
    tags: ["iphone duo", "ios", "app store", "foldable"],
    imageUrl: "/images/blog-og/iphone-duo-foldable-app-developer-guide.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ios-app-development", "mobile-app-development"],
    faqs: [
      {
        question: "When does iPhone Duo go on sale?",
        answer:
          "Pre-orders start at 5:00 a.m. Pacific Time on Friday 16 October 2026. First-wave availability is Friday 23 October, with 28 more countries and regions on Friday 30 October.",
      },
      {
        question: "Which iOS version does it ship with?",
        answer:
          "Apple's developer news says iPhone Duo runs iOS 27.1 from 23 October 2026. The full inner display Apple describes is for apps built with the iOS 27.1 SDK or later.",
      },
      {
        question: "Will an old app be rejected on launch day?",
        answer:
          "Apple says existing apps run. Older SDK builds sit centred on the inner display with empty space around them. From April 2027, new submissions need iPhone Duo screenshots.",
      },
      {
        question: "What screenshot sizes does Apple list?",
        answer:
          "Outer display 1398 by 2034 or 2034 by 1398. Inner display 2007 by 2853 or 2853 by 2007. Check App Store Connect Help before you export.",
      },
      {
        question: "Does Apple publish a US price?",
        answer:
          "Yes. It starts at $1,999 (US). Apple's shop page lists higher unlocked US prices for 512GB, 1TB, and 2TB. Other countries set their own prices.",
      },
      {
        question: "Does Flutter or React Native get a special mode?",
        answer:
          "Not on the Apple pages used here. Build with the iOS 27.1 SDK if you want the optimised layout, and test both displays.",
      },
    ],
  },

  {
    id: 427,
    slug: "chatgpt-gpt-6-intelligent-ui-business-guide",
    title: "ChatGPT GPT-6 & Intelligent UI: What Businesses Get",
    metaTitle: "ChatGPT GPT-6 and Intelligent UI for Businesses",
    excerpt:
      "GPT-6 is rolling into ChatGPT with Intelligent UI: text, charts, and buttons in one reply. Which plans get it, and what to keep human.",
    keywords:
      "GPT-6 Sol Luna ChatGPT 2026, Intelligent UI, gpt-6-sol API, business AI rollout",
    content: `
<p>A support lead in Nairobi pasted a refund rule into ChatGPT and got a chart, three buttons, and a sentence that sounded like the refund had already been approved. Nobody in the chat had issued it. <strong>OpenAI is rolling GPT-6 into ChatGPT's Chat tab with a presentation it calls Intelligent UI, which can mix text with visuals, charts, buttons, forms, and small interactive tools.</strong> The help centre says an ordinary text answer is still allowed, and that no special prompt is required. A button on a screen is not a payment, a contract, or a decision your company has made.</p>
<p>Putting a reviewed version of that behaviour inside your own product is <a href="/services/ai-development">AI development</a>. TheTriFusion does not sell ChatGPT seats and does not choose your workspace's model picker.</p>
<h2>What is rolling out in Chat, and who gets which model?</h2>
<p>Two OpenAI pages have to be read in order, because they describe different moments. The article "Introducing GPT-6 Sol and Luna" says GPT-6 Sol and GPT-6 Luna were available in ChatGPT Work and in Codex for Plus, Pro, Business, Enterprise, and Edu, that Free and Go users could use GPT-6 Luna in the desktop app, and that those models were not yet in Chat. In the API, the same article names the models <code>gpt-6-sol</code> and <code>gpt-6-luna</code>. It also says OpenAI reduced API prices for Sol and Luna by 50 percent compared with GPT-5.6 promotional pricing. That is a relative cut OpenAI stated. It is not a dollar rate, and this page will not invent one.</p>
<p>The later rollout is the Chat tab. OpenAI's page "GPT-6 and Intelligent UI for everyone," together with the help article "GPT-6 and other models in ChatGPT," describes Intelligent UI inside Chat. Coverage of the rollout, including OpenAI's developer community, puts GPT-6 Sol on Plus, Pro, Business, and Enterprise from 7 October 2026, and GPT-6 Luna on Free and Go from 8 October 2026. Enterprise workspaces can lag: the help article says Enterprise customers may keep the older model picker until the new controls reach the workspace, and that availability depends on the plan and on workspace access. Edu was named for Work and Codex in the earlier article. If an Edu or Enterprise admin does not see GPT-6 in Chat on 8 October, the honest status is that the workspace has not been switched yet, not that the announcement was cancelled.</p>
<p>The help article also draws a line inside GPT-6 itself. Intelligent UI is described for GPT-6 used from Instant through Extra High, on the web and on supported updated apps. It is not available with Pro effort, which the help article says remains powered by GPT-6 Astra. Asking the product to "think harder" is not a switch you should document as a guaranteed model change. On Plus and Pro, the help article says Instant does not automatically step up to a higher thinking level just because a request looks hard, though ChatGPT can still switch for safety. Free and Go users have a Think control that the help article, in the passage used here, still ties to a GPT-5.6 Luna path for harder questions. Read the picker in the account you pay for before you write a staff guide from this paragraph.</p>
<h2>What does Intelligent UI actually put in the reply?</h2>
<p>OpenAI's description, repeated on the help page and in the rollout notes, is that GPT-6 can compose a response from text, visuals, and interactive elements, and that it chooses the mix from the question. A reply can include a chart or a diagram, tappable buttons, a form, or a small tool such as a calculator. Straightforward questions can still come back as plain text. The interface can appear while the answer is still being produced, and the model can start answering while it continues to think. That is a change in pacing. It is not a claim that the first sentence is the checked sentence.</p>
<p>The help article says the older ChatGPT desktop apps for macOS and Windows do not support these capabilities, and that people should use ChatGPT on the web. Update the mobile app if you want the same behaviour there. Intelligent UI has no separate quota. The existing model, tool, and plan limits still apply. Turning visuals down is a setting: on the web, Settings, then Layout and visuals. The help article says some visual elements can still appear, and that the switch does not restore a guaranteed text-only mode. A compliance team that needs a plain transcript should not rely on that toggle as a control. Export the conversation, or run the task in a product you administer.</p>
<h2>Where is this useful, and where does a person stay in the loop?</h2>
<p>The useful jobs are the ones where a picture or a control saves a meeting, and a wrong button does not move money. A customer-facing explainer can show a labelled diagram of a plan, a delivery window, or a three-step return, as long as a person publishes the wording. An internal question about a spreadsheet can come back as a chart in the chat, which is faster than a slide, as long as the numbers are the ones your finance system already trusts. A sales or support workflow can draft a reply with buttons that only copy text into a ticket. The moment a button would refund, cancel, price, or promise a date, the button belongs in your system of record, behind the permission you already audit.</p>
<table>
<thead>
<tr><th>Job</th><th>A fair use of Intelligent UI</th><th>Keep a person on it</th></tr>
</thead>
<tbody>
<tr><td>Explain a policy</td><td>A diagram of steps you already approved</td><td>Any sentence that grants an exception</td></tr>
<tr><td>Internal numbers</td><td>A chart of a table you pasted</td><td>A figure that will be sent to a board or a customer</td></tr>
<tr><td>Support draft</td><td>Buttons that insert text into a ticket</td><td>A control that refunds, cancels, or changes a price</td></tr>
<tr><td>Your own product</td><td>An API call whose UI you designed</td><td>A ChatGPT screen you do not administer</td></tr>
</tbody>
</table>
<p>Staff training is shorter than a model card. Tell people the reply can contain a control that looks finished. Tell them the control does not post to your ledger. Tell them Pro effort is a different path, still described as GPT-6 Astra, and that Astra is the subject of a separate page: <a href="/blog/gpt-6-astra-whats-known-vs-rumor">what is known about GPT-6 Astra</a>. A workspace that still shows Astra in the picker has not "missed GPT-6." It may be on the effort level the help article excludes from Intelligent UI.</p>
<h2>What should an admin ask before a customer file goes in?</h2>
<p>Ask the questions of the plan you pay for, and of counsel, not of the chat. Which workspace is in the rollout, and who can turn models on? Enterprise and Edu controls are not the same switch as a personal Plus account. Does the conversation include customer names, account numbers, or a contract? If it does, the fact that the reply looks like a dashboard does not change your retention or your sharing rules. OpenAI's help pages for organisational plans point admins at the commercial terms for that plan. Read those terms. A blog cannot tell you whether your regulator treats a pasted spreadsheet as a transfer.</p>
<p>A practical rule that does not require a statute: decide which fields never enter the prompt, write them down, and keep the system that is allowed to move money outside the chat. Intelligent UI does not create a new place to hide a customer list. It creates a more convincing surface. The same habit, for other assistants and other countries, is on <a href="/blog/chatgpt-for-indian-businesses-2026">ChatGPT for Indian businesses</a>, <a href="/blog/custom-gpt-agents-for-sme-india">custom assistants for SMEs</a>, <a href="/blog/google-gemini-vs-chatgpt-india-business">Gemini and ChatGPT</a>, and <a href="/blog/claude-for-google-workspace-docs-sheets-slides-guide">Claude inside Google Workspace</a>. Those are different products. None of them is a licence to skip the field list.</p>
<h2>How do you build this into your own app?</h2>
<p>ChatGPT's Intelligent UI is OpenAI's interface. You do not get to restyle it, log it in your product analytics, or put your brand on the buttons, except through whatever sharing ChatGPT already allows. If the experience has to live in your app, you call the API and you draw the interface. The model ids OpenAI published for this tier are <code>gpt-6-sol</code> and <code>gpt-6-luna</code>. OpenAI's API guide for GPT-6 also describes later ids, including a GPT-6.1 Sol, and it says Sol and Luna support a <code>none</code> reasoning effort that Astra does not. Tool calling has its own rules on that guide: Responses is the path OpenAI tells developers to use when tools and reasoning go together. Read the current guide before you copy a snippet from a blog, including this one.</p>
<p>An API-built screen can show a chart you rendered from your database, with a button that calls your endpoint. That button can be permissioned, rate-limited, and written to your audit log. A button inside ChatGPT cannot. The trade is speed. ChatGPT is already there for a staff member who needs a diagram this afternoon. Your app is the right place once a customer will see the control, or once the control changes a record. OpenAI has also been reported, in secondary write-ups, to be trying other developer surfaces. Unless a control is named on openai.com or in the API docs, leave it out of the architecture. A "Decisions API" or a meetings plugin is not part of the pages this guide relies on.</p>
<h2>What does a build around it cost, on the prices this site publishes?</h2>
<p>TheTriFusion's AI service lists a basic range from ₹2,00,000, a standard range from ₹5,00,000, and a premium range from ₹10,00,000. The pricing page treats those as starting ranges in Indian rupees, ex-GST, after discovery. They are not a ChatGPT subscription. OpenAI's consumer prices sit on ChatGPT's own pricing page, and they move. The cost drivers for a larger assistant, written with India in the title, are on <a href="/blog/ai-app-development-cost-india-2026">the AI app cost guide</a>. Any rupee figure there is a scoping note, not a seat price in Nairobi, Dublin, or Auckland.</p>
<p>If you need the chat inside a product you control, with a human step before anything is sent to a customer, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Which ChatGPT plans get GPT-6 Sol and Luna in Chat?</h3>
<p>The rollout described for Chat puts GPT-6 Sol on Plus, Pro, Business, and Enterprise, and GPT-6 Luna on Free and Go. Enterprise workspaces can lag until an admin's controls update. Edu was named for Work and Codex in OpenAI's earlier Sol and Luna article. Check the picker you actually have.</p>
<h3>What is Intelligent UI?</h3>
<p>OpenAI's name for replies that can mix text with visuals, charts, buttons, forms, and small interactive tools. Plain text is still possible. It is described for GPT-6 from Instant through Extra High, not for Pro effort, which the help article says stays on GPT-6 Astra.</p>
<h3>What are the API model names?</h3>
<p>OpenAI's Sol and Luna article names them gpt-6-sol and gpt-6-luna. Later API docs also discuss GPT-6.1 Sol. Read the model page you will call before you pin a string in production.</p>
<h3>Do the desktop apps support it?</h3>
<p>The help article says the older ChatGPT desktop apps for macOS and Windows do not. Use ChatGPT on the web, and update the mobile app if you want it on a phone.</p>
<h3>Does a button in the chat change your records?</h3>
<p>Not by itself. A control inside ChatGPT is not your refund tool, your CRM, or your ledger. If a button must change a record, build that button in your app and keep a person on the action.</p>
<h3>Is this the same thing as GPT-6 Astra?</h3>
<p>No. Astra is the higher tier OpenAI introduced first. The help article says Pro effort in Chat remains on GPT-6 Astra, and that Intelligent UI does not apply there. The separate Astra page is the place for that model.</p>
`,
    category: "news",
    tags: ["gpt-6", "chatgpt", "intelligent ui", "openai"],
    imageUrl: "/images/blog-og/chatgpt-gpt-6-intelligent-ui-business-guide.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ai-development"],
    faqs: [
      {
        question: "Which ChatGPT plans get GPT-6 Sol and Luna in Chat?",
        answer:
          "The Chat rollout puts GPT-6 Sol on Plus, Pro, Business, and Enterprise, and GPT-6 Luna on Free and Go. Enterprise workspaces can lag. Check the picker on the account you pay for.",
      },
      {
        question: "What is Intelligent UI?",
        answer:
          "OpenAI's name for replies that can mix text with visuals, charts, buttons, forms, and small tools. It is described for GPT-6 from Instant through Extra High, not for Pro effort.",
      },
      {
        question: "What are the API model names?",
        answer:
          "OpenAI names them gpt-6-sol and gpt-6-luna. Later docs also discuss GPT-6.1 Sol. Read the model page you will call before you pin a string.",
      },
      {
        question: "Do the desktop apps support it?",
        answer:
          "The help article says the older macOS and Windows desktop apps do not. Use ChatGPT on the web, and update the mobile app if you need it on a phone.",
      },
      {
        question: "Does a button in the chat change your records?",
        answer:
          "No. A ChatGPT control is not your refund tool or your ledger. Build that button in your own app if it must change a record.",
      },
      {
        question: "Is this the same thing as GPT-6 Astra?",
        answer:
          "No. The help article says Pro effort stays on GPT-6 Astra, and Intelligent UI does not apply there.",
      },
    ],
  },
  {
    id: 428,
    slug: "pwn2own-ireland-2026-security-lessons-for-businesses",
    title: "Pwn2Own Ireland 2026: Security Lessons for Businesses",
    metaTitle: "Pwn2Own Ireland 2026: Security Lessons for Businesses",
    excerpt:
      "Pwn2Own Ireland 2026 in Cork paid $388,500 on day one for 32 zero-days. What phones, printers, and AI tools mean for your patching.",
    keywords:
      "Pwn2Own Ireland 2026 Cork, Zero Day Initiative, business patching, AI infrastructure security",
    content: `
<p>A facilities lead in Cork saw a headline about phones and printers being broken in a contest and asked whether the office printer should come off the network before lunch. The contest is real. The right next step is narrower than a panic unplug. <strong>Pwn2Own Ireland 2026, run by Trend Micro's Zero Day Initiative, is a live hacking competition in Cork from 6 to 9 October 2026.</strong> ZDI's own day-two post says that on day one it awarded $388,500 for 32 unique zero-days. The contest is still in progress on 8 October. A total you read today is not the total for the week.</p>
<p>The unglamorous follow-up, a patch path and a network that can survive a bad device, is <a href="/services/devops">DevOps</a> and, when the product itself needs a security pass, <a href="/services/software-development">software development</a>. TheTriFusion does not run the contest and does not publish exploit detail.</p>
<h2>What is the contest, and what has ZDI already posted?</h2>
<p>ZDI's rules put the contest in Cork from 6 to 9 October 2026. The schedule post on 5 October said there were more than 60 entries, that attempt order came from a random draw, and that times were Irish Standard Time and could move. Day one, Tuesday 6 October, opened at 9:30 a.m. ZDI's day-one results post says 21 entries took the stage, across phones and other categories, including what it called its first Pixel entry. Day two, Wednesday 7 October, was listed with 24 attempts. ZDI's day-two write-up says that day ran from 9:30 a.m. to 7:30 p.m. Irish time, with roughly $780,000 still on the table at the start of the day. That figure is the pot ZDI described, not a sum of cheques already written. Day three is Thursday 8 October, the day this page is published. Day four is Friday 9 October. Final standings belong on thezdi.com after the last attempt, not in a blog that went up while the room was still in use.</p>
<p>The one total ZDI has stated for a finished day is the day-one line in the day-two post: $388,500 for 32 unique zero-days. Individual rows on the day-one page are the source for who earned what that day. Among those rows, VinSOC's posted results were $40,000 for the Philips Hue Bridge Pro, which ZDI described as seven zero-days, $40,000 for Oracle Autonomous AI Database, and $17,500 on a Sonos Era 300 result ZDI marked as a collision. That is the largest team total you can add up from the day-one rows alone. It is not a final ranking. Collisions are ZDI's word for a bug the vendor, or another entrant, already had, and they cut the payout. Several Samsung Galaxy S26 results were collisions, with posted awards of $31,250, $15,750, and $11,000 rather than the full pot.</p>
<h2>Which kinds of products were actually on the stage?</h2>
<p>The useful list is the list of categories, not a recipe. ZDI's day-one and day-two posts name phones, smart-home gear, printers, a wellness device, AI infrastructure, and an AI coding agent. Confirmed targets in those posts include the Samsung Galaxy S26, Google Pixel 10, Philips Hue Bridge Pro, Sonos Era 300, Home Assistant Green, Lexmark and Brother printers, a Canon imageFORCE copier, Garmin Index BPM, LiteLLM, Chroma, Oracle Autonomous AI Database, Dynamo, and OpenAI Codex. Some attempts failed inside the time limit, including the Pixel 10 on day one, a Chroma attempt on day one, and more than one printer. A failed attempt is not a clean bill of health. It means that entry did not finish in the window.</p>
<p>This page stops at the product name and the payout ZDI printed. It does not describe how any entry worked. A zero-day is a vulnerability the vendor did not yet have a public patch for, demonstrated under contest rules, on hardware and accounts the contest supplied. It is not evidence that your particular printer, on your particular firmware, was reached from the internet this week. It is evidence that the class of device is worth a patch meeting.</p>
<table>
<thead>
<tr><th>What showed up in Cork</th><th>What a business should hear</th></tr>
</thead>
<tbody>
<tr><td>Phones, including a current Samsung and a Pixel attempt</td><td>Mobile devices are production endpoints. MDM and a patch SLA belong on them.</td></tr>
<tr><td>Smart-home hubs and a speaker</td><td>A bridge or a speaker on the office LAN is a computer. Put it on a separate segment.</td></tr>
<tr><td>Printers and a copier</td><td>A multifunction printer holds documents and has a network stack. Update it. Do not leave the admin page open.</td></tr>
<tr><td>LiteLLM, Chroma, Oracle's AI database, Codex</td><td>The AI tools staff install are in the same contest as the phones. Treat the gateway, the vector store, and the agent as production.</td></tr>
</tbody>
</table>
<h2>How long do vendors get before details are public?</h2>
<p>ZDI's contest rules say a successful entrant hands the sponsor a working demonstration and a write-up, and that the vulnerabilities go to the affected vendors. BleepingComputer, reporting day one, says vendors have 90 days to release updates before Trend Micro's ZDI publishes the details. Use that 90-day line as a report of the contest's public window, and read the current note on thezdi.com if you are writing a contractual patch SLA against it. The business point does not depend on the exact day count. You will not get a full technical write-up on the morning of the demo. You may get a vendor advisory later, and you may get nothing until the window closes. A patch programme that waits for a viral tweet is already late.</p>
<h2>What should change on Monday, without touching an exploit?</h2>
<p>Start with the devices you actually own. Phones that hold mail and an authenticator app need a mobile-device policy: current OS, a lock screen, a way to wipe a lost handset, and a named person who checks the vendor bulletins. Printers and smart-home bridges do not belong on the same flat network as laptops and the finance file share. A separate segment, with no path to the domain controller, turns a contest result into a contained appliance. If a printer's admin password is still the one printed on the sticker, that is the finding. You do not need Cork to tell you that.</p>
<p>The AI row is the one teams are under-counting. LiteLLM is a gateway in front of model APIs. Chroma is a vector database. Oracle Autonomous AI Database was a named target. OpenAI Codex was a named target in the coding-agent category. If your staff run a local gateway, a vector store full of internal documents, or an agent that can execute what a model suggests, those are production systems. Put them behind the same identity, logging, and network rules as the rest of production. Do not let an agent tool reach the payroll share because a developer installed it on a laptop. Secrets in the prompt, a vector index of customer contracts, and a tool that can open a shell are three different risks. Write down which of the three you have.</p>
<p>Vendor-update SLAs belong in the contract, not in a hope. Ask the supplier how they will tell you about a zero-day that was demonstrated in public, and how many days they commit to a fix or a mitigation. A bug-bounty programme of your own is a separate decision. ZDI is one programme, with its own rules and its own prizes. Copying the prize table onto your website does not create a process. A small programme needs a scope, a safe-harbour line written by counsel, and a person who answers researchers. If you cannot staff that, pay a vendor who can, or keep the attack surface smaller.</p>
<p>Secure development is the other half, for anything you build. Dependency updates, a review before an agent tool is allowed to call an internal API, and a test that fails the build when a secret is committed are ordinary DevOps work. They are not a promise that a room full of contestants would fail against you. They are how you hear about the boring bugs before a customer does. The Irish SME note on a different assistant is <a href="/blog/claude-ai-for-irish-smes-2026">Claude for Irish SMEs</a>. A website budget, if the thing you need is a status page rather than a model, is <a href="/blog/website-development-cost-guide-ireland-2026">the Ireland website cost guide</a>. A product skeleton that can hold an audit log is <a href="/blog/nextjs-app-router-saas-mvp-guide-2026">the Next.js SaaS guide</a>. What is public about a model name, as opposed to a rumour, is <a href="/blog/opus-5-5-ai-model-whats-known">the Opus note</a> and <a href="/blog/gpt-6-astra-whats-known-vs-rumor">the Astra note</a>.</p>
<h2>What is the Irish and EU context, at a high level?</h2>
<p>The contest is in Cork. The law that tells an Irish operator how to run security is not the contest. The National Cyber Security Centre says the EU's NIS2 directive had a transposition deadline of 17 October 2024, that Ireland missed it, and that the earlier NIS rules remain in effect for the operators they already cover. On 7 September 2026 the Minister told the Dáil that drafting of the National Cyber Security Bill was close to finalisation, with publication aimed at the autumn, and that the European Commission had referred Ireland to the Court of Justice in July 2026. A Law Society Gazette report in October 2026 still described the bill as on the autumn legislative programme. Until that bill is enacted, do not tell a board that "NIS2 is Irish law." Read ncsc.gov.ie and gov.ie for the bill's status in the week you need it.</p>
<p>Personal data is a different office. The Data Protection Commission, at dataprotection.ie, is where Irish GDPR questions go. A breached printer that stored scanned passports is a data-protection incident as well as a device incident. This guide is not the Commission's guidance and it is not a fine estimate. It is a reason to know which devices hold personal data, and who is on the incident list. The Central Bank of Ireland's expectations for regulated firms are a third folder, for firms that are actually regulated there. A shop with a printer is not a bank. Do not import a banking control catalogue to feel thorough.</p>
<h2>What will this page refuse to add on Friday?</h2>
<p>It will not add a grand total for the week before ZDI posts one. It will not rank a champion. It will not explain a bug class, a payload, or a bypass. If you need the day-three and day-four rows, they will be on thezdi.com. If a vendor ships an update because of Cork, install it through the change process you already have, on a segment that can survive a bad firmware. A contest is a calendar reminder. It is not a substitute for the inventory.</p>
<p>If the inventory itself is the missing piece, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Where and when is Pwn2Own Ireland 2026?</h3>
<p>Cork, 6 to 9 October 2026, organised by Trend Micro's Zero Day Initiative. Day one and day two results are on thezdi.com. The contest was still running on 8 October.</p>
<h3>How much was awarded on day one?</h3>
<p>ZDI's day-two post says day one awarded $388,500 for 32 unique zero-days. That is not the total for the whole contest.</p>
<h3>Were AI products really targeted?</h3>
<p>Yes. ZDI's results name LiteLLM, Chroma, Oracle Autonomous AI Database, Dynamo, and OpenAI Codex among the attempts. Some attempts failed. The category is the point.</p>
<h3>Should I unplug the office printer today?</h3>
<p>Update it, change a default admin password, and keep it off the same flat network as your finance files. A contest result is not proof that your unit was attacked.</p>
<h3>Is NIS2 already Irish law?</h3>
<p>The NCSC says Ireland missed the October 2024 transposition deadline and that the earlier NIS rules still apply to the operators they cover. The National Cyber Security Bill was still the draft vehicle in early October 2026. Check ncsc.gov.ie for the week you are advising a board.</p>
<h3>Will this page explain how the attacks worked?</h3>
<p>No. Vendors get the details so they can patch. A business lesson does not need the steps.</p>
`,
    category: "news",
    tags: ["pwn2own", "security", "ireland", "zero-day"],
    imageUrl: "/images/blog-og/pwn2own-ireland-2026-security-lessons-for-businesses.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["devops", "software-development"],
    faqs: [
      {
        question: "Where and when is Pwn2Own Ireland 2026?",
        answer:
          "Cork, 6 to 9 October 2026, run by Trend Micro's Zero Day Initiative. Day one and day two results are posted. The week was still in progress on 8 October.",
      },
      {
        question: "How much was awarded on day one?",
        answer:
          "ZDI's day-two post says day one awarded $388,500 for 32 unique zero-days. That is not a full-week total.",
      },
      {
        question: "Were AI products really targeted?",
        answer:
          "Yes. ZDI names LiteLLM, Chroma, Oracle Autonomous AI Database, Dynamo, and OpenAI Codex among the attempts.",
      },
      {
        question: "Should I unplug the office printer today?",
        answer:
          "Update it, replace a default admin password, and keep it off the same network as finance files. A contest result is not proof your unit was attacked.",
      },
      {
        question: "Is NIS2 already Irish law?",
        answer:
          "The NCSC says Ireland missed the October 2024 deadline and that the earlier NIS rules still cover the operators they already cover. Check ncsc.gov.ie for the bill's status.",
      },
      {
        question: "Will this page explain how the attacks worked?",
        answer:
          "No. Vendors receive the details so they can patch. The business lesson is inventory, segmentation, and updates.",
      },
    ],
  },

  {
    id: 429,
    slug: "fintech-app-development-kenya-2026",
    title: "Fintech App Development Kenya 2026",
    metaTitle: "Fintech App Development in Kenya, 2026",
    excerpt:
      "A Kenyan payments or credit app sits under the Central Bank, the Data Protection Act, and M-Pesa or PesaLink. What to design before you build.",
    keywords:
      "fintech app development Kenya 2026, CBK payment service provider, M-Pesa Daraja, ODPC data protection",
    content: `
<p>A founder in Nairobi had two slides. The first said the product would "just use M-Pesa." The second said the Central Bank licence could wait until after the App Store launch. The slides disagree with each other. <strong>If you move, store, or arrange payments in Kenya, or if you lend without taking deposits, the Central Bank of Kenya is the regulator you read first, and the Office of the Data Protection Commissioner is the office for the personal data those payments create.</strong> A polished screen does not authorise the business behind it. This is a product guide, not a licence opinion and not a substitute for counsel in Nairobi.</p>
<p>Building the software, once the permissions and the data rules are named, is <a href="/services/fintech-app-development">fintech app development</a>. TheTriFusion does not hold a Kenyan payment licence and does not sponsor a PSP application.</p>
<h2>Who regulates payments in Kenya?</h2>
<p>The Central Bank of Kenya describes the National Payment System Act 2011 as the framework for payment systems and payment service providers, with the National Payment System Regulations 2014 putting authorisation, designation, and anti-money-laundering measures into practice. The Bank's national-payments page says mobile-money operators are authorised as payment service providers under that Act and those regulations, in categories that include electronic retail transfers, e-money issuance, and payment instruments. The Act's own definition of a payment service provider is wide: a person who sends, receives, stores, or processes payments through an electronic system, and also a person who processes or stores data for those providers. "We only do the app" is not, by itself, outside that sentence. Whether your company needs its own authorisation, or can operate as a technology supplier to someone who already has it, is a question for the Bank's current forms and for your lawyer. Read centralbank.go.ke before you print a go-live date.</p>
<p>The electronic retail transfers regulation the Bank has published sets a core-capital figure of not less than ten million Kenya shillings for a payment service provider that is not a bank, not a deposit-taking microfinance business, and not an authorised e-money issuer. That number is category-specific. It is not a fee, it is not the capital rule for every e-money issuer, and it is not a quote for your company. Open the instrument that matches the permission you are actually seeking. Authorisation is renewed on the cycle the Act describes. A one-time approval letter is not a permanent badge.</p>
<h2>Where do M-Pesa, PesaLink, and a bank account sit?</h2>
<p>M-Pesa is Safaricom's mobile-money service. It is the rail a huge share of Kenyan customers already trust for person-to-person transfers, till numbers, and paybill. Describing it is not an endorsement, and it is not the only wallet in the country. Airtel Money and other services exist. Your product should name the rail it will actually integrate, because the API, the settlement, and the support desk are different. Safaricom's developer portal calls the current integration platform Daraja 3.0. It is the web platform for Safaricom and M-PESA APIs, with a sandbox so a team can simulate calls before production credentials exist. Budget time for that sandbox, for IP allow-lists, and for the production key process Safaricom runs. Do not promise a go-live date that assumes the keys arrive the day you finish the UI.</p>
<p>PesaLink is the bank-side instant network. Its developer site describes account-to-account transfers, account validation, merchant payments from a bank account, and bulk transfers, over a REST API, across the banks that participate. A customer who wants to pay from a bank app, rather than from a mobile-money wallet, is a PesaLink conversation or a direct bank integration, not a second M-Pesa button. Many products need both, because a shopper in Nairobi and a treasurer paying suppliers do not use the same rail. Settlement files, reversals, and the time of day a bulk file is accepted are product requirements. They are also the screens your support team will live in.</p>
<h2>What if the product is credit, not just payments?</h2>
<p>Digital credit is regulated separately from the payment pipe. The Central Bank of Kenya Act was amended in 2021 to license digital credit providers, and the Central Bank of Kenya (Digital Credit Providers) Regulations, 2022, are the framework those lenders have been operating under. The Bank published a directory of licensed digital credit providers updated on 10 April 2026. If you will lend, check that directory and the current licensing steps. A technology vendor that only builds the app is in a different seat from the company whose name is on the loan. Write that split into the contract. In 2026 the Bank also published a regulatory impact assessment for draft Non-Deposit Taking Credit Providers Regulations, aimed at a wider set of non-deposit lenders than the 2022 digital-credit rules alone. Treat those as a draft until the Bank says they are in force. Designing only to the 2022 text, and never reading the draft, is how a roadmap goes stale. Designing as if the draft were already law is how you block a launch on a rule that has not been gazetted.</p>
<p>Pricing display, complaints, and debt collection are the product surfaces regulators and customers both notice. A slider that hides the total cost, a contacts upload that becomes a shaming list, or a late-night collections SMS are how Kenyan digital credit got the 2021 amendment in the first place. Build the disclosure the regulation requires, and keep collection inside a script a compliance officer has signed. The app store listing is not the disclosure.</p>
<h2>What does the Data Protection Act change in the app?</h2>
<p>Kenya's Data Protection Act 2019 is the statute, and the Office of the Data Protection Commissioner, odpc.go.ke, is the office. A payments or credit app processes personal data: name, phone number, national ID, the fact of a transaction, sometimes location, sometimes the contents of a contacts book. You need a reason to collect each field, a notice the customer can actually read, and a way for them to reach you. Swahili and English both belong on that notice if those are the languages of the product. A notice that exists only in a PDF linked from a desktop footer fails the customer you designed the USSD menu for.</p>
<p>Registration of controllers and processors, cross-border transfers, and breach timelines are questions for the ODPC's current guidance and for counsel. This guide will not invent a registration fee or a fine. It will say that a sandbox full of real customer MSISDNs is already processing. Use test numbers until production is authorised. Do not ship a "debug" screen that dumps the last fifty transactions to anyone with the APK.</p>
<p>Anti-money-laundering sits beside privacy, and they pull in opposite directions if you let them. The payment regulations point PSPs at the Proceeds of Crime and Anti-Money Laundering Act and at the controls they must describe in an application: customer due diligence, records, and a way to report. You will collect identity data because the law requires it, and you will minimise it because the Data Protection Act requires that too. The reconciliation is a field list written with both offices in mind, not a single toggle labelled "KYC."</p>
<h2>How should the screen behave on a Kenyan handset?</h2>
<p>A large share of successful Kenyan payment use is still a short, low-data interaction: a USSD menu, a small Android app, an SMS confirmation. Design for that before you design the animation. USSD sessions time out. A flow that needs six screens of explanation will die. Put the amount, the recipient, and the fee you are allowed to show on one step, and send a receipt the customer can read offline. If you use a short code or USSD, the Communications Authority of Kenya, ca.go.ke, is the office for the communications side, separate from the Central Bank's payment authorisation. Read both. A CBK conversation does not assign you a short code.</p>
<p>Language is a layout problem. Swahili labels are often longer than the English string a designer tested. A button that says "Send" in English may wrap or clip in Kiswahili. Test both. Numbers should use a format Kenyan customers expect, and the currency should say KES when there is any chance the same binary will be shown to a diaspora user in pounds or dollars. Accessibility is not a European extra. A customer in bright sun, on a cracked screen, with a cheap Android, is your median user. Contrast, a large tap target, and a confirmation that can be read aloud matter more than a glassmorphism card.</p>
<p>Fraud is a product feature, not a banner you add in week twelve. SIM swap, social-engineering calls that pretend to be Safaricom, and a till number that looks one digit off are the incidents support will see. Step-up checks on a new device, a delay or a second confirmation above a threshold you choose with the compliance lead, and a way to freeze a wallet without waiting for a developer are the minimum. Do not store a PIN in a log. Do not let a support agent see a full OTP. The Central Bank has also published cybersecurity guidelines for payment service providers. If you are a PSP, those guidelines are part of the reading list, covering access control, vendors, and incident response.</p>
<h2>Should you build, buy, or integrate?</h2>
<p>Integrate when the rail already exists and you are allowed to use it. Daraja and PesaLink are integrations. You still build the ledger, the receipt, the dispute screen, and the admin that your operations team will use at 11 p.m. Buy a white-label wallet only if you understand whose licence the customers sit under, whose name is on the data-protection registration, and what happens when you want a feature the vendor will not add. Build the whole stack only if you are prepared for authorisation, capital, a compliance team, and a settlement relationship. Most startups are in the first or second bucket and write slides as if they were in the third.</p>
<p>Team shape follows that choice. An integration needs one mobile developer, one backend developer who has read the sandbox, and a person who owns the Central Bank and ODPC questions. A lender needs credit policy in the room before the first sprint, because the repayment screen is the policy. Nairobi, Mombasa, and remote engineers can share the work. The licence does not become easier because the repository is in another country. The data map has to say where production data lives.</p>
<p>The published fintech ranges on TheTriFusion's site start at ₹99,999 for an India-shaped BBPS, AEPS, or DMT retailer package, with standard and premium ranges at ₹1,99,999 and ₹3,99,999. Those are Indian rupees, ex-GST, after discovery, for an Indian retail-payments product. They are not a shilling quote and they are not a Kenyan licence fee. A Kenyan app is a written scope: which rail, whose licence, which languages, and which fields stay in Kenya. Country cousins of this guide, with their own regulators, are <a href="/blog/fintech-app-development-nigeria-2026">Nigeria</a>, <a href="/blog/fintech-app-development-pakistan-2026">Pakistan</a>, and <a href="/blog/fintech-app-development-india">India</a>. A startup tooling note that is actually about Kenya is <a href="/blog/chatgpt-ai-tools-for-kenyan-startups-2026">AI tools for Kenyan startups</a>. What a mobile build costs, in the same "read the local rules first" spirit, is <a href="/blog/mobile-app-development-cost-guide-kenya-2026">the Kenya mobile cost guide</a>.</p>
<h2>What should the first month of discovery produce?</h2>
<ol>
<li>A one-page map of the flow: who pays whom, on which rail, and who holds the money overnight.</li>
<li>The Central Bank category you think you are in, and the name of the lawyer who will check it.</li>
<li>The Daraja or PesaLink sandbox status, including who at Safaricom or the bank owns the production keys.</li>
<li>A field list for personal data, the notice in English and Swahili, and the ODPC question you have not answered yet.</li>
<li>A fraud list: new device, SIM change, limit, freeze switch.</li>
<li>A statement of what you will not build in version one. Credit, if you are only a till, can wait. A till, if you are only a lender, can wait.</li>
</ol>
<p>If that discovery is the piece you want written down before a sprint starts, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>Do I need Central Bank authorisation to launch a payments app in Kenya?</h3>
<p>If you conduct the business of a payment service provider, the National Payment System Act says you need authorisation. A pure technology supplier to an already authorised PSP can be a different seat. That split is a legal question, and the app should not go live ahead of the answer.</p>
<h3>Is Daraja the same thing as M-Pesa?</h3>
<p>M-Pesa is the customer service. Daraja is Safaricom's developer platform for the APIs, currently described on the portal as Daraja 3.0, with a sandbox. You still need production approval.</p>
<h3>What is PesaLink for?</h3>
<p>Instant bank-side payments: account to account, merchant pay from a bank account, and bulk transfers, according to PesaLink's developer site. It is not a second logo for M-Pesa.</p>
<h3>Are digital lenders licensed?</h3>
<p>Yes. The 2022 Digital Credit Providers Regulations are the framework, and the Central Bank publishes a directory. A wider non-deposit-taking draft was out for assessment in 2026. Confirm what is in force before you lend.</p>
<h3>Which privacy office do I read?</h3>
<p>The Office of the Data Protection Commissioner, under the Data Protection Act 2019. Collect less, explain why, and do not use real customer numbers in a sandbox.</p>
<h3>Is the ₹99,999 figure a Kenyan price?</h3>
<p>No. It is TheTriFusion's published starting range in Indian rupees for an India retail-payments package. A Kenyan build is scoped in writing, in the currency you will pay.</p>
`,
    category: "fintech",
    tags: ["kenya", "fintech", "m-pesa", "cbk"],
    imageUrl: "/images/blog-og/fintech-app-development-kenya-2026.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["fintech-app-development"],
    faqs: [
      {
        question: "Do I need Central Bank authorisation to launch a payments app in Kenya?",
        answer:
          "If you conduct payment-service-provider business, the National Payment System Act requires authorisation. A pure technology supplier to an authorised PSP is a different seat. Confirm it before launch.",
      },
      {
        question: "Is Daraja the same thing as M-Pesa?",
        answer:
          "M-Pesa is the customer service. Daraja is Safaricom's API platform, described as Daraja 3.0, with a sandbox. Production keys are a separate step.",
      },
      {
        question: "What is PesaLink for?",
        answer:
          "Bank-side instant payments: account to account, merchant payments, and bulk transfers. It is not another name for M-Pesa.",
      },
      {
        question: "Are digital lenders licensed?",
        answer:
          "The 2022 Digital Credit Providers Regulations are the framework, and the Central Bank publishes a directory. Confirm any 2026 draft before you treat it as law.",
      },
      {
        question: "Which privacy office do I read?",
        answer:
          "The Office of the Data Protection Commissioner, under the Data Protection Act 2019.",
      },
      {
        question: "Is the ₹99,999 figure a Kenyan price?",
        answer:
          "No. It is an Indian-rupee starting range for an India retail-payments package. A Kenyan build is a written scope.",
      },
    ],
  },
  {
    id: 430,
    slug: "website-development-cost-guide-new-zealand-2026",
    title: "Website Development Cost Guide New Zealand 2026",
    metaTitle: "Website Development Cost Guide for New Zealand",
    excerpt:
      "What moves a New Zealand SME website quote: brochure, shop, or web app, GST at 15 percent, the Privacy Act 2020, and hosting.",
    keywords:
      "website development cost New Zealand 2026, GST 15 percent checkout, Privacy Act 2020, NZ SME website",
    content: `
<p>A retailer in Christchurch asked for "a site like the Australian one," then asked whether a price written in rupees on an agency page was secretly a New Zealand dollar figure. It is not. <strong>A New Zealand small-business website is priced by what it has to do: a brochure, a shop with GST-ready invoices, or a web app with accounts. The GST rate on a taxable supply is 15 percent. The privacy statute is the Privacy Act 2020.</strong> Everything else in a quote is scope. This guide explains the drivers. It does not print a Wellington day rate, because one invented number would be worse than none.</p>
<p>Scoping that site is <a href="/services/website-development">website development</a>. TheTriFusion builds from Jaipur for clients in New Zealand and elsewhere. The published ranges below are in Indian rupees. A contract you sign should say NZD if NZD is how you pay.</p>
<h2>What kind of site are you actually buying?</h2>
<p>Three shapes get mixed in the first email. A brochure is a handful of pages, a contact form, and a way to edit the text. A shop takes money, calculates GST, sends a receipt, and has to cope with returns. A web app has accounts, roles, and data you must not lose. They share a front page and almost nothing else. Asking for "a website" without saying which shape is how a five-page quote and a twelve-month build get compared as if they were the same product.</p>
<p>Inside a shop, a catalogue of forty SKUs with flat shipping is a different build from a catalogue of four thousand SKUs with weights, rural surcharges, and a trade login. Inside a web app, a booking calendar for one clinic is different from a portal where a franchisor and twenty franchisees see different numbers. Write the shape down before you compare two proposals. The comparison of custom code, Shopify, and WooCommerce, without a New Zealand flag on it, is <a href="/blog/custom-website-vs-shopify-vs-woocommerce">custom site, Shopify, or WooCommerce</a>. Use it for the platform question. Use this page for the New Zealand questions that platform page does not answer.</p>
<h2>What moves the price up or down?</h2>
<p>Pages are the smallest driver. The expensive items are accounts, payments, stock, search, and the admin someone on your team must be able to use without calling a developer. A design that is only a template with your logo is cheaper than a design that has to work in te reo Māori and English, with photographs you actually own. Copy you write yourself is cheaper than copy the project has to invent. A domain and mail you already control are cheaper than a week spent unlocking a registrar account nobody can find.</p>
<p>Integrations are the other jump. Accounting software, a booking tool, a shipping API, and a payment provider are four projects that look like "just connect it" on a slide. Each one has a sandbox, a failure mode, and a person at the vendor who must approve you. Content migration from an old site is rarely free. Broken links, missing alt text, and a decade of PDF uploads arrive with the export. Hosting is a monthly cost after launch, and it should be in the same conversation as the build, because a site that is cheap to launch and expensive to keep is still expensive.</p>
<table>
<thead>
<tr><th>Shape</th><th>What you are paying for</th><th>What people forget</th></tr>
</thead>
<tbody>
<tr><td>Brochure</td><td>Pages, form, editing, basic search visibility</td><td>Who updates it after month two</td></tr>
<tr><td>Shop</td><td>Catalogue, GST, payment, receipts, returns</td><td>Rural delivery, tax invoices, the accountant's export</td></tr>
<tr><td>Web app</td><td>Logins, roles, data, uptime</td><td>Privacy Act notices, backups, a way to export your own data</td></tr>
</tbody>
</table>
<h2>How does GST at 15 percent show up?</h2>
<p>Inland Revenue's guidance says the New Zealand GST rate is 15 percent, charged on amounts a consumer pays for taxable supplies. If a New Zealand-registered business sells online to customers in New Zealand, IRD's zero-rating notes say GST is charged at 15 percent. Sales to overseas customers can be zero-rated, at 0 percent, when the evidence IRD asks for is there. A checkout that only has one tax toggle will be wrong for one of those customers. Whether you must register at all depends on the turnover rules on ird.govt.nz, including the current threshold. Read that page for the number that applies this year. A blog should not be the place you copy a threshold from memory.</p>
<p>Once you are charging GST, the shop has to show it in a way your accountant can file. Tax invoices, the GST amount, and the period you report are bookkeeping, and they are also interface. A payment provider that settles in a lump, without a per-order GST line your software can see, creates a monthly argument. If you sell through a marketplace, IRD notes that the marketplace operator often accounts for the GST. Your own site does not get that help. Build the invoice. Do not assume the card processor is your tax system.</p>
<p>Payment methods are a category choice, not a ranking. Cards and bank transfer are both normal at New Zealand checkouts. Wallets and "buy now, pay later" products exist, and each one has a fee schedule on the provider's own page. This guide does not endorse a provider and does not print those fees. Pick the one your bank and your accountant can reconcile, and put the fee in the margin model, not in a footnote nobody reads.</p>
<h2>What does the Privacy Act 2020 ask of a form?</h2>
<p>The Privacy Act 2020 is the statute. The Privacy Commissioner, at privacy.org.nz, is the office. The Act's purpose, in the legislation, is a framework for protecting personal information, including a person's right to get access to it. A contact form, a newsletter box, a checkout, and an analytics cookie all collect personal information once they can be tied to a person. Collect what you need for the purpose you can explain. Say who you are, why you are asking, and how someone asks for a copy or a correction. A cookie banner that only exists because a European template said so, and that drops marketing tags before anyone chooses, is the wrong lesson. Read the Commissioner's current guidance on cookies and on what a privacy statement should cover. This guide is a prompt to read it, not the statement itself.</p>
<p>If the site is aimed at New Zealand customers and the server is overseas, say so in the privacy notes if the information is leaving the country, and check whether the Act's disclosure rules, as the Commissioner explains them today, require anything more than a sentence. Do not store passport numbers because a form builder offered the field. Do not send the whole enquiry database to a chat tool so a draft reply is faster. The enquiry is the personal information.</p>
<h2>What about te reo Māori, bilingual pages, and accessibility?</h2>
<p>A bilingual site is a content project and a layout project. Te reo Māori strings need a native speaker, macrons, and room in the button. Machine translation of a warranty or a privacy statement is how you publish a promise you did not mean. Offer te reo where you can maintain it: navigation, a greeting, a page you will actually update. A language toggle that hides an unmaintained translation is worse than English alone. Hreflang and a clear default help search engines. They do not replace the translator.</p>
<p>Accessibility has a specific public-sector rule and a wider practical rule. The New Zealand Government Web Accessibility Standard 1.2 took effect on 17 March 2025. It tells mandated public service departments, and a short list of other state bodies, to conform to WCAG 2.2 at Level AA, with stated exceptions. A private Christchurch shop is not automatically inside that mandate. Customers still use keyboards, screen readers, and phones in sun. Meeting WCAG 2.2 AA is the sensible target for a new build even when the Cabinet minute does not name you. Text on images, a form that can be completed without a mouse, and captions on any video you put on the home page are the pieces people notice first. The standard's text is on digital.govt.nz. Read it if you are a mandated agency. Follow the WCAG level if you are not.</p>
<h2>Where should the site be hosted for New Zealand visitors?</h2>
<p>A visitor in Auckland, Wellington, or Christchurch, and a visitor in Sydney who is part of the same campaign, feel delay when the only server is in Europe or the eastern United States. A content-delivery network with an Australian or New Zealand presence, or a host in that region, keeps the first byte closer. It does not have to mean the database is in the same city as the shop, but the HTML and the images should not cross the Pacific on every click. Measure. A pretty score from a lab in another country is not the score on a phone in Dunedin. Backups and a second region matter the day a single zone fails. Write the recovery expectation into the hosting choice: how many hours of orders you can stand to lose, and who can restore.</p>
<h2>Local studio or an offshore partner?</h2>
<p>A studio in Auckland, Wellington, or Christchurch can sit in your time zone, walk into the shop, and already know GST invoices and the Privacy Act as local habits. An offshore partner, including a team in Jaipur, can be the right build when the scope is clear, the repository is yours, and someone in New Zealand still owns the words, the prices, and the relationship with Inland Revenue and the bank. The failure mode is the opposite arrangement: a cheap build, a theme you cannot edit, and no one who will answer in July. Ask who commits, where the code lives, and what the monthly care costs after launch. Maintenance is security updates, content help, and a person to call when the payment provider changes an API. It is not a vague retainer with no hours.</p>
<p>TheTriFusion's published website ranges are ₹15,000 for a basic site, ₹35,000 for a standard site, and ₹75,000 for a premium site, in Indian rupees, ex-GST, as starting ranges after discovery. They are not New Zealand dollars. A five-page brochure and a GST-capable shop do not land on the same line of that list. Related cost guides that use the same honesty about currency are <a href="/blog/website-development-cost-guide-australia-2026">Australia</a>, <a href="/blog/website-development-cost-guide-ireland-2026">Ireland</a>, and <a href="/blog/website-development-cost-guide-south-africa-2026">South Africa</a>. If the project is payments rather than pages, the New Zealand fintech note is <a href="/blog/fintech-app-development-new-zealand-2026">fintech apps in New Zealand</a>. If it is chargers rather than a shopfront, the local CSMS note is <a href="/blog/ev-charging-csms-new-zealand-anz-cpo-guide">EV charging software for New Zealand operators</a>.</p>
<h2>What should you ask for before you accept a number?</h2>
<ol>
<li>The shape: brochure, shop, or web app, and what is out of scope.</li>
<li>Whether GST invoices are in the build, and who confirms the tax treatment with Inland Revenue.</li>
<li>The privacy statement owner, and which form fields are actually required.</li>
<li>Whether te reo Māori is in version one, and who maintains it.</li>
<li>The WCAG level you are aiming at, even if you are not a government department.</li>
<li>Where the site is hosted, who owns the repository, and what a month of care includes.</li>
<li>The currency of the quote. If it is rupees, say so. If it is dollars, say so.</li>
</ol>
<p>If you want that list turned into a written scope, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>How much does a New Zealand business website cost?</h3>
<p>It depends on whether you need a brochure, a GST-capable shop, or a web app. There is no NZD day rate in this guide. TheTriFusion's published starting ranges are in Indian rupees, from ₹15,000, and a New Zealand contract should state NZD if that is the currency you pay.</p>
<h3>What is the GST rate on a New Zealand online sale?</h3>
<p>Inland Revenue describes GST at 15 percent on taxable supplies to New Zealand consumers. Overseas sales can be zero-rated when IRD's conditions are met. Registration thresholds live on ird.govt.nz.</p>
<h3>Does the Privacy Act 2020 apply to a contact form?</h3>
<p>Yes, once the form collects personal information. The Privacy Commissioner publishes the guidance. Collect less, explain why, and give people a way to ask for their information.</p>
<h3>Must a private shop meet the government web accessibility standard?</h3>
<p>The Web Accessibility Standard 1.2 binds mandated public-sector bodies to WCAG 2.2 Level AA from 17 March 2025. A private SME is not automatically in that list. WCAG 2.2 AA is still the practical target for a new site.</p>
<h3>Should the site be hosted in New Zealand?</h3>
<p>Pages and images should load quickly for New Zealand and Australian visitors, which usually means a regional host or a CDN. The database location is a privacy and resilience choice. Measure it on a local phone.</p>
<h3>Is a rupee price on this site a New Zealand dollar price?</h3>
<p>No. Published ranges are INR, ex-GST, after discovery. Ask for the quote in the currency you will pay.</p>
`,
    category: "webdev",
    tags: ["new zealand", "website cost", "gst", "privacy act"],
    imageUrl: "/images/blog-og/website-development-cost-guide-new-zealand-2026.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["website-development"],
    faqs: [
      {
        question: "How much does a New Zealand business website cost?",
        answer:
          "It depends on brochure, shop, or web app. There is no NZD rate in this guide. TheTriFusion's published starting ranges are in Indian rupees, from ₹15,000.",
      },
      {
        question: "What is the GST rate on a New Zealand online sale?",
        answer:
          "Inland Revenue describes GST at 15 percent on taxable supplies to New Zealand consumers. Overseas sales can be zero-rated when the conditions are met.",
      },
      {
        question: "Does the Privacy Act 2020 apply to a contact form?",
        answer:
          "Yes, when the form collects personal information. Follow the Privacy Commissioner's guidance on what you collect and what you tell people.",
      },
      {
        question: "Must a private shop meet the government web accessibility standard?",
        answer:
          "Standard 1.2 binds mandated public bodies to WCAG 2.2 AA. A private SME is outside that mandate. WCAG 2.2 AA is still the right build target.",
      },
      {
        question: "Should the site be hosted in New Zealand?",
        answer:
          "Serve pages quickly to New Zealand and Australian visitors, usually with a regional host or a CDN. Decide database location with privacy and backups in mind.",
      },
      {
        question: "Is a rupee price on this site a New Zealand dollar price?",
        answer:
          "No. Published ranges are INR, ex-GST, after discovery. Ask for the quote in the currency you will pay.",
      },
    ],
  },

  {
    id: 431,
    slug: "ev-charging-csms-ireland-cpo-guide",
    title: "EV Charging CSMS for Ireland CPOs: OCPP & OCPI Guide",
    metaTitle: "EV Charging CSMS for Ireland: OCPP and OCPI",
    excerpt:
      "What an Irish charge-point operator needs in a CSMS: OCPP to the charger, OCPI for roaming, and AFIR rules for ad-hoc payment.",
    keywords:
      "EV charging CSMS Ireland, OCPP OCPI CPO, ZEVI strategy 2026, AFIR ad hoc payment",
    content: `
<p>A charge-point operator in Galway had three spreadsheets open: one for the charger in the car park, one for the driver app, and one for a roaming partner who had asked for OCPI and a price per kilowatt-hour. The spreadsheets were describing one system and three jobs. <strong>A charging station management system, the CSMS, is the software that talks to the chargers, prices the session, and, when you roam, talks to other operators.</strong> In Ireland that software has to sit under Zero Emission Vehicles Ireland's infrastructure plans and under the EU's Alternative Fuels Infrastructure Regulation. This is a practical guide for operators. It is not legal advice, and it is not the UK and continental guide already on this site.</p>
<p>Building that system is <a href="/services/ev-charging-app-development">EV charging software</a>. The wider European product note is <a href="/blog/ev-charging-csms-uk-europe-cpo-guide">the UK and Europe CPO guide</a>. Read that for the shared protocol background. Read this for Ireland.</p>
<h2>What is a CSMS, and who is it for?</h2>
<p>Operators of the hardware are charge-point operators, CPOs. Companies that sell charging to drivers, often across someone else's hardware, are e-mobility service providers, eMSPs. One company can be both. The CSMS is the back office: which chargers are online, who started a session, what the tariff was, and whether the charger is in fault. OCPP, the Open Charge Point Protocol, is the language between that back office and the charger. OCPI, the Open Charge Point Interface, is the language between your platform and a roaming partner or a hub. Mixing them up is how a project buys a roaming contract and still cannot reboot a stall.</p>
<p>A driver app is a third piece. It finds a charger, starts a session, and shows a receipt. It is not the CSMS, and under the EU payment rules below it cannot be the only way to pay at a public charger. Version choice is a separate article: <a href="/blog/ocpp-1-6-vs-2-0-1-vs-2-1-comparison">OCPP 1.6, 2.0.1, and 2.1</a>. Roaming roles are <a href="/blog/ocpi-roaming-explained-cpo-emsp">OCPI for CPOs and eMSPs</a>. Whether to build the back office or buy one is <a href="/blog/build-vs-buy-ev-charging-csms">build versus buy</a>. Cost shape, in the currency this site publishes, is <a href="/blog/ev-charging-cms-software-cost-guide">the CMS cost guide</a>.</p>
<h2>What has Ireland actually published?</h2>
<p>Zero Emission Vehicles Ireland sits in the Department of Transport. ZEVI has published an EV Infrastructure Strategy covering 2026 to 2028, as a PDF on zevi.ie, aimed at a national network through 2030 with the detailed actions in that three-year window. The strategy describes public charging as neighbourhood, destination, and en-route, and it names ESB Networks, local authorities, and Transport Infrastructure Ireland among the partners. It also describes ZEVI road-grant schemes for light-duty charging on motorways and national roads, and it states money already committed against parts of those schemes. Treat the PDF on zevi.ie as the document to read this month. A Department page has also spoken about a revised strategy later in 2026. If a second PDF appears, the later one wins. Do not quote a draft consultation as if it were the final capital plan.</p>
<p>Home charging is still the main pattern for drivers who have a driveway, and it is a different product from a public CPO network. The Sustainable Energy Authority of Ireland runs an Electric Vehicle Home Charger Grant, funded by ZEVI. SEAI's terms say the grant is up to €300 towards the charger and installation, for an eligible private residence, and that the installer must be a Safe Electric registered electrical contractor. Claims run through SEAI's letter of offer and a payment request, with a six-month window described in the terms. That page is a house with off-street parking. An apartment block or a workplace is not that form. If you are wiring a multi-unit site, read the current SEAI apartment and workplace pages before you put €300 in a resident newsletter. The home figure is not a promise for a basement car park.</p>
<h2>What does AFIR change at the public charger?</h2>
<p>Regulation (EU) 2023/1804, the Alternative Fuels Infrastructure Regulation, applies across the Union, including Ireland. The European Commission's questions-and-answers document says the operator of a publicly accessible recharging point has to let a driver recharge on an ad-hoc basis. Ad hoc, in the regulation's definition as the Commission explains it, means the driver buys the charging service without registering, without a written contract, and without a commercial relationship beyond that purchase. A membership app can still exist. It cannot be the only door.</p>
<p>The same Commission document says that at publicly accessible points of 50 kW or more, the ad-hoc price is based on the price per kWh for the electricity delivered, and that an occupancy fee per minute is something the regulation allows so that a car does not sit on the stall after it has finished. Below 50 kW, the operator still has to show price components clearly, in the order the regulation sets. ZEVI's strategy adds the Irish planning line: chargers along the TEN-T network must accept ad-hoc card payments by 2027, pricing has to be clear, and operators have to share dynamic data on whether a stall is free, what connector it has, how fast it is, and where it is. A CPO-branded app that demands an account before the session starts does not meet the ad-hoc test the Commission describes, even if a card is saved inside that app. Payment cards, contactless, and, for lower-power points, a secure web payment such as a QR code are the family of methods the regulation is about. Cash in an envelope is not.</p>
<p>Your CSMS has to store two prices without pretending they are the same: the ad-hoc price the driver sees with no account, and any contract price an eMSP has negotiated. The Commission says operators must not discriminate, through the prices charged, between drivers and mobility service providers or between different mobility service providers, and that a difference needs a justification that fits the case. Build the tariff so a receipt can show the kWh price, any occupancy fee, and the total. A single "session fee" with no breakdown will not survive the question a driver, or an enforcement check, will ask.</p>
<h2>Which connectors, and which sites, show up in Ireland?</h2>
<p>On Irish public networks the connector drivers actually meet is Type 2 for AC and CCS Combo 2 for DC. Plan the hardware and the map icons around that pair. A legacy connector can exist on an older stall. Do not design the driver app as if every bay were a connector from another region. The CSMS should show power, connector, and live status, because that is the dynamic data ZEVI's strategy says has to be shareable, and because a driver who arrives to a 22 kW AC socket when the app promised 150 kW DC will not come back.</p>
<p>Site types change the software, not just the concrete. A neighbourhood charger on a street needs a simple start and a price that is visible before the cable locks. A destination charger at a hotel can sit behind a parking fee that is not the charging fee. The Commission is explicit that a parking contract does not remove the duty to offer ad-hoc charging on the recharging point itself. An en-route hub on a motorway is a reliability and a power problem: several high-power stalls, a queue, and a grid connection that ESB Networks has to agree. ESB Networks is the distribution operator. Smart charging and any limit the local network sets are a conversation with them, not a slider you invent in the app. This guide does not quote a connection timeline or a capital contribution. Those live on the application for that site.</p>
<p>Apartments and multi-unit buildings are the awkward middle. One landlord meter, many drivers, and a bill that has to be split. Load management, so the building does not trip when every car plugs in at 7 p.m., is a CSMS feature. So is a way for a resident to see only their own sessions. Workplace charging has the same split between the company account and the employee. Home charging under the SEAI grant is usually a dumb or lightly smart wallbox on a private board, and it may never speak OCPI. Do not force a public-roaming design onto a driveway unit.</p>
<h2>How do roaming and uptime fit the same back office?</h2>
<p>OCPI is how another company's app can see your charger, start a session, and receive a charge detail record so someone can be invoiced. Hubs exist so you do not hand-build a connection to every eMSP. Pick a hub or a direct connection with a written list of who can start a session and who pays when the record is late. The protocol explanation is the roaming article linked above. The Ireland-specific point is that ad-hoc card payment and roaming are both required thoughts. Roaming covers the driver who has a subscription elsewhere. Ad hoc covers the driver who has only a bank card. A network that does one and not the other is unfinished.</p>
<p>Uptime is the number your council, your landlord, or your grant agreement will eventually ask for. Monitor heartbeat, fault codes, and successful sessions, not just whether the modem answers a ping. A charger that is "online" and cannot start a session is down. Alert a person. Keep a spare parts path for the hardware you actually installed. Remote reboot is an OCPP command. It is also a support process, with a note of who is allowed to send it. France and the Benelux have their own CPO page, <a href="/blog/ev-charging-csms-france-benelux-cpo-guide">the France and Benelux guide</a>, and New Zealand's is <a href="/blog/ev-charging-csms-new-zealand-anz-cpo-guide">the New Zealand and Australia guide</a>. The protocols rhyme. The grant bodies and the grid operators do not.</p>
<h2>What does a first system cost, on the prices this site publishes?</h2>
<p>TheTriFusion's published EV ranges start at ₹4,50,000 for an eMSP or CPO MVP with live maps, sessions, and an OCPP or OCPI path, then ₹9,00,000 and ₹18,00,000 on the standard and premium lines. Those are Indian rupees, ex-GST, after discovery. They are not euro quotes and they are not a ZEVI grant. What moves the figure in Ireland is the number of charger models you must test, whether you need both OCPP and OCPI in the first release, whether ad-hoc card payment is in the payment terminal or in a QR flow the CSMS has to reconcile, and whether the driver app ships on one store or two. A driveway grant form is not this project. A multi-site CPO with roaming is.</p>
<p>If you want the Ireland scope written as chargers, tariffs, and the ad-hoc receipt, rather than as a protocol glossary, <a href="/contact">contact TheTriFusion</a>.</p>
<h2>FAQ</h2>
<h3>What is the difference between OCPP and OCPI?</h3>
<p>OCPP is how your back office talks to the charger. OCPI is how your platform talks to a roaming partner or an eMSP. A driver app is a third piece, and it cannot be the only way to pay at a public stall.</p>
<h3>What is the SEAI home charger grant worth?</h3>
<p>SEAI's current home-charger terms say up to €300 for an eligible private residence, installed by a Safe Electric registered contractor, with funding from ZEVI. Apartment and workplace schemes are separate pages. Read those before you quote €300 to a resident.</p>
<h3>Do Irish public chargers have to take a bank card?</h3>
<p>AFIR requires ad-hoc charging without a membership contract. ZEVI's strategy says TEN-T chargers must accept ad-hoc card payments by 2027, with a clear price. At 50 kW and above, the Commission's guidance says the ad-hoc price is per kWh.</p>
<h3>Which plug should the software assume?</h3>
<p>Type 2 for public AC and CCS2 for public DC. Show the connector and the live power on the map. A stalled status that only says "available" is not enough.</p>
<h3>Is this the same guide as the UK and Europe page?</h3>
<p>No. That page is the wider protocol and market note. This page is Ireland: ZEVI, SEAI, ESB Networks, and the way AFIR shows up on an Irish receipt.</p>
<h3>Are the rupee figures a euro quote?</h3>
<p>No. ₹4,50,000 is the published starting range in Indian rupees, ex-GST, after discovery. An Irish project is scoped in the currency you will pay.</p>
`,
    category: "casestudy",
    tags: ["ireland", "ev charging", "ocpp", "ocpi"],
    imageUrl: "/images/blog-og/ev-charging-csms-ireland-cpo-guide.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["ev-charging-app-development"],
    faqs: [
      {
        question: "What is the difference between OCPP and OCPI?",
        answer:
          "OCPP connects your back office to the charger. OCPI connects your platform to roaming partners. The driver app is separate and cannot be the only way to pay at a public charger.",
      },
      {
        question: "What is the SEAI home charger grant worth?",
        answer:
          "SEAI's home-charger terms say up to €300 for an eligible private residence, using a Safe Electric registered contractor. Apartment and workplace grants are separate schemes.",
      },
      {
        question: "Do Irish public chargers have to take a bank card?",
        answer:
          "AFIR requires ad-hoc charging without a membership. ZEVI says TEN-T chargers must take ad-hoc card payments by 2027. At 50 kW and above, the ad-hoc price is per kWh.",
      },
      {
        question: "Which plug should the software assume?",
        answer:
          "Type 2 on public AC and CCS2 on public DC. Show connector, power, and live status on the map.",
      },
      {
        question: "Is this the same guide as the UK and Europe page?",
        answer:
          "No. The UK and Europe page is the wider note. This page is ZEVI, SEAI, ESB Networks, and an Irish receipt.",
      },
      {
        question: "Are the rupee figures a euro quote?",
        answer:
          "No. ₹4,50,000 is a published Indian-rupee starting range, ex-GST, after discovery.",
      },
    ],
  },
  {
    id: 432,
    slug: "ireland-vs-south-africa-rugby-aviva-21-nov-2026",
    title: "Ireland v South Africa: Aviva, 21 November 2026",
    metaTitle: "Ireland v South Africa Rugby, Aviva, 21 Nov 2026",
    excerpt:
      "Ireland host South Africa at the Aviva Stadium on Saturday 21 November 2026, kick-off 4:40 p.m. Irish time, in the Nations Championship.",
    keywords:
      "Ireland vs South Africa 21 November 2026, Aviva Stadium kick-off, Nations Championship Dublin",
    content: `
<p>A supporter in Johannesburg set a reminder for "Ireland, Saturday afternoon" and nearly kept the July habit. The July games were the southern half of this new competition. The Dublin game is six weeks after this page goes up, and the clock is Irish, not South African. <strong>Ireland play South Africa in round 6 of the Nations Championship on Saturday 21 November 2026 at the Aviva Stadium in Dublin. Kick-off is 4:40 p.m. local time.</strong> The Aviva Stadium's own event page prints 16:40. The Irish Rugby fixture page prints 16:40. BBC Sport's fixture list prints 16:40 GMT. Ireland is on Greenwich Mean Time in November, so those three lines are the same minute.</p>
<p>England's November meeting with Australia is a different stadium and a different Saturday. That page is <a href="/blog/england-vs-australia-rugby-twickenham-8-nov-2026">England v Australia at Twickenham</a>. Do not copy its kick-off onto Lansdowne Road.</p>
<h2>Quick match facts</h2>
<ul>
<li><strong>Match:</strong> Ireland v South Africa, Nations Championship 2026, northern series.</li>
<li><strong>When:</strong> Saturday 21 November 2026, kick-off 4:40 p.m. Irish time (GMT).</li>
<li><strong>Where:</strong> Aviva Stadium, Dublin. The Irish Rugby listing and the stadium page both name it.</li>
<li><strong>What the competition is:</strong> a 12-team cross-hemisphere championship. Finals weekend is 27 to 29 November at Allianz Stadium, Twickenham. Ireland's opponent that weekend depends on the table.</li>
<li><strong>Squads:</strong> not named on the fixture pages used here. Wait for the official sheets.</li>
<li><strong>Tickets:</strong> the stadium says the organiser sells them, and it points at Ticketmaster.ie and irishrugby.ie. No price is printed here.</li>
<li><strong>Television:</strong> a broadcaster is not named on the Aviva or Irish Rugby pages used here. Check your local broadcaster.</li>
<li><strong>At the ground:</strong> the stadium says it is cashless, and that bags are restricted to small handbags that can be searched.</li>
</ul>
<h2>What time is kick-off where you are?</h2>
<p>4:40 p.m. in Dublin on Saturday 21 November is 16:40 GMT. The clocks in Ireland and Britain go back on Sunday 25 October 2026, so this Saturday is winter time. The United States has already turned back on Sunday 1 November. Central Europe is on standard time. South Africa, Kenya, the Gulf, Pakistan, and India do not move a clock for this date. Sydney is on Australian Eastern Daylight Time. New Zealand is on New Zealand Daylight Time.</p>
<ul>
<li><strong>Dublin and London:</strong> 4:40 p.m. GMT, Saturday</li>
<li><strong>Paris and Berlin:</strong> 5:40 p.m. CET</li>
<li><strong>Johannesburg and Cape Town:</strong> 6:40 p.m. SAST</li>
<li><strong>Nairobi:</strong> 7:40 p.m. EAT</li>
<li><strong>Dubai:</strong> 8:40 p.m. GST</li>
<li><strong>Karachi:</strong> 9:40 p.m. PKT</li>
<li><strong>India:</strong> 10:10 p.m. IST</li>
<li><strong>Singapore:</strong> 12:40 a.m. Sunday 22 November</li>
<li><strong>Sydney:</strong> 3:40 a.m. AEDT, Sunday</li>
<li><strong>Auckland:</strong> 5:40 a.m. NZDT, Sunday</li>
<li><strong>New York:</strong> 11:40 a.m. EST, Saturday</li>
<li><strong>Los Angeles:</strong> 8:40 a.m. PST, Saturday</li>
</ul>
<p>Say the city when you text the time. 4:40 p.m. is Dublin. 6:40 p.m. is Johannesburg. 10:10 p.m. is India, still Saturday. 5:40 a.m. is Auckland on Sunday. If Irish Rugby moves the minute, every city moves with it. The three sources used here agree, and they have agreed since the stadium page and the fixture page were checked for this guide.</p>
<h2>What is the Nations Championship?</h2>
<p>BBC Sport's explainer of the 2026 competition says each team plays each of the six teams in the other hemisphere once. Three rounds are in July, in the south. Three rounds are in November, in the north. That is twelve teams: the Six Nations sides and the six southern sides on the fixture list. On the final weekend, BBC Sport describes a three-day play-off at Allianz Stadium, Twickenham, matching sixth against sixth, then up the table, until the two leading sides meet. The winner of that match is the first Nations Championship winner. Irish Rugby's March 2026 note calls the London weekend the Finals Weekend, Friday 27 to Sunday 29 November, and says Ireland's opponent is fixed by the table after the southern and northern rounds, not by a wish.</p>
<p>World Rugby's match page for this Dublin game lists Saturday 21 November 2026 at the Aviva Stadium and names the Nations Championship. It does not, on the page checked, replace the 16:40 kick-off printed by the stadium and by Irish Rugby. Use the stadium clock.</p>
<h2>What else is Ireland playing in November?</h2>
<p>Irish Rugby's fixture announcement lists three home games at the Aviva before anyone travels for the finals weekend. First is Argentina on Friday 6 November. Next is Fiji on Saturday 14 November. South Africa is the third, Saturday 21 November. BBC Sport's autumn list gives 8:10 p.m. GMT for Ireland v Argentina on 6 November and 8:10 p.m. GMT for Ireland v Fiji on 14 November. The March Irish Rugby note had said kick-off times would be confirmed later. The BBC list is the later public schedule, and the South Africa minute is the one the stadium itself prints. Do not assume the Springboks game is also an 8:10 p.m. night. It is a 4:40 p.m. kick-off. A supporter who leaves work for an 8:10 habit will find the match already deep.</p>
<p>The same BBC Saturday, 21 November, also lists England v New Zealand and Scotland v Japan at 2:10 p.m. GMT, Italy v Fiji at 4:40 p.m., and France v Argentina and Wales v Australia at 8:10 p.m. Dublin is one of six games, not the only rugby on the day. If you are watching more than one, write the opponent next to the time. "4:40" is also Italy v Fiji.</p>
<h2>Why this fixture, without inventing a scoreline from memory</h2>
<p>Irish Rugby's March note calls South Africa the world champions, which is the Springboks' status as holders of the Rugby World Cup won in 2023. The next World Cup is not this match. The same note says the Springboks' previous visit to Dublin ended in a powerful South African win, and it does not print the score in the paragraph. This page will not supply a score the union's own recap left out. For 2024, the same Irish Rugby article does give scores you can repeat: Ireland beat Argentina 22-19, and Ireland beat Fiji 52-17. Those are history for the other two November opponents. They are not a forecast for 21 November.</p>
<p>Squads are not on the fixture page. Andy Farrell is named in that March article as the Ireland coach. A match-day 23 is a later announcement. Selections, injuries, and whether a player is released by a club are week-of questions. A ranking table "as of early October" would be stale by the time Fiji have visited on 14 November, one week before this game. The official standings after the July rounds, and after each November round, live on the Nations Championship site. Read them the week of the match. A ladder frozen on 8 October cannot tell you who needs a point to finish first in the north.</p>
<h2>Where can you watch?</h2>
<p>The Aviva page and the Irish Rugby fixture page tell you the kick-off and the ticket route. They do not name a television partner. Check your local broadcaster closer to the week. In Ireland and Britain that usually means the rugby channel you already use for the Six Nations or the autumn, and it is still worth confirming, because a new competition can move the rights. In South Africa, a local sports channel is the place to look, and this page will not guess which one. In the United States, India, the Gulf, Australia, and New Zealand, the same rule: use the broadcaster that announces the match, not a social clip. A pub screen in Dublin is the stadium city. A pub screen in Cape Town is six forty in the evening if the kick-off holds.</p>
<p>Other sport on this site in the same month, so you do not merge calendars: the <a href="/blog/rugby-league-world-cup-2026-australia-vs-new-zealand-15-oct">Rugby League World Cup opener</a> is league, in October, in Sydney. The <a href="/blog/atp-finals-turin-2026-15-22-november-guide">ATP Finals in Turin</a> overlap the weekend before this match, and they are tennis. The <a href="/blog/nfl-patriots-vs-lions-munich-15-nov-2026">NFL game in Munich</a> is American football on 15 November, the day after the Fiji test, and it is not rugby union.</p>
<h2>What should you know if you are going to the ground?</h2>
<p>The stadium's event page says tickets are sold by the organiser, not by the stadium box office. It points readers to Ticketmaster.ie and irishrugby.ie, and it gives ticketqueries@irishrugby.ie as the contact. Prices move with the category and with how late you buy. They are not repeated here. The page also says the stadium is cashless for food and drink: cards and phone payments, no cash. Bags are limited to small handbags, which can be searched. Read the bag rule before you pack a camera. Premium dining and hospitality are separate products, with their own contacts on that page. Transport restrictions on a match day are a matter for the Garda notice the stadium points to. Allow time. A 4:40 p.m. kick-off in November is dusk, not a noon stroll.</p>
<p>A fixture page that can hold three Aviva dates without swapping the Springboks onto the Fiji night is ordinary schedule work. See <a href="/services/website-development">website development</a>.</p>
<h2>FAQ</h2>
<h3>When and where is Ireland v South Africa?</h3>
<p>Saturday 21 November 2026 at the Aviva Stadium, Dublin. Kick-off is 4:40 p.m. Irish time, which is GMT.</p>
<h3>What time is that in South Africa, India, and New Zealand?</h3>
<p>6:40 p.m. in Johannesburg, 10:10 p.m. in India, and 5:40 a.m. Sunday in Auckland. London matches Dublin at 4:40 p.m. New York is 11:40 a.m. Eastern.</p>
<h3>Is this the same kick-off as Ireland v Fiji?</h3>
<p>No. BBC Sport lists Fiji on Saturday 14 November at 8:10 p.m. GMT. The Springboks are a week later at 4:40 p.m.</p>
<h3>Who reaches the final?</h3>
<p>There is a finals weekend at Twickenham from 27 to 29 November, and the pairings follow the table. Ireland's opponent is not known on 8 October.</p>
<h3>Are the teams announced?</h3>
<p>Not on the fixture pages this guide uses. Wait for the official match-day squads.</p>
<h3>Where is the match on television?</h3>
<p>A broadcaster is not named on the stadium or Irish Rugby pages checked here. Check your local broadcaster in match week.</p>
`,
    category: "news",
    tags: ["ireland rugby", "south africa", "aviva", "nations championship"],
    imageUrl: "/images/blog-og/ireland-vs-south-africa-rugby-aviva-21-nov-2026.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "15 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["website-development"],
    faqs: [
      {
        question: "When and where is Ireland v South Africa?",
        answer:
          "Saturday 21 November 2026 at the Aviva Stadium, Dublin. Kick-off is 4:40 p.m. Irish time (GMT).",
      },
      {
        question: "What time is that in South Africa, India, and New Zealand?",
        answer:
          "6:40 p.m. in Johannesburg, 10:10 p.m. in India, and 5:40 a.m. Sunday in Auckland. London is 4:40 p.m.",
      },
      {
        question: "Is this the same kick-off as Ireland v Fiji?",
        answer:
          "No. Fiji are listed for Saturday 14 November at 8:10 p.m. GMT. South Africa are a week later at 4:40 p.m.",
      },
      {
        question: "Who reaches the final?",
        answer:
          "Finals weekend is 27 to 29 November at Allianz Stadium, Twickenham. Pairings follow the table. Ireland's opponent is not known yet.",
      },
      {
        question: "Are the teams announced?",
        answer:
          "Not on the fixture pages used here. Wait for the official squads.",
      },
      {
        question: "Where is the match on television?",
        answer:
          "A broadcaster is not named on the stadium or Irish Rugby pages checked for this guide. Check your local broadcaster.",
      },
    ],
    event: {
      type: "SportsEvent",
      name: "Ireland v South Africa, Nations Championship 2026",
      startDate: "2026-11-21T16:40:00+00:00",
      endDate: "2026-11-21T18:40:00+00:00",
      organizer: {
        name: "Irish Rugby Football Union",
        url: "https://www.irishrugby.ie",
      },
      homeTeam: "Ireland",
      awayTeam: "South Africa",
      location: {
        name: "Aviva Stadium",
        addressLocality: "Dublin",
        addressCountry: "IE",
      },
    },
  },
  {
    id: 433,
    slug: "rugby-league-world-cup-2026-final-brisbane-15-nov",
    title: "Rugby League World Cup Final: Brisbane, 15 Nov",
    metaTitle: "Rugby League World Cup 2026 Final, Brisbane",
    excerpt:
      "The Rugby League World Cup 2026 men's and women's finals are Sunday 15 November at Suncorp Stadium, Brisbane. Finalists are not known yet.",
    keywords:
      "Rugby League World Cup 2026 final Brisbane, Suncorp Stadium 15 November, RLWC men's final",
    content: `
<p>A fan in Auckland already has Thursday 15 October in the diary, Australia against New Zealand at Allianz Stadium in Sydney, and has started calling that night "the final." It is the opening match of the men's tournament. The final is a month later, in another city, and the two teams are not known. <strong>The men's and women's Rugby League World Cup finals are on Sunday 15 November 2026 at Suncorp Stadium in Brisbane.</strong> The NRL's draw announcement and International Rugby League both put that double-header on that date. The official draw on rlwc2026.com lists the final at Suncorp and, on the page checked for this guide, still shows the kick-off minute as TBA. Finalists are blank on purpose. Nobody has played a semi-final yet.</p>
<p>The Sydney opener has its own page: <a href="/blog/rugby-league-world-cup-2026-australia-vs-new-zealand-15-oct">Australia v New Zealand on 15 October</a>. Keep the two URLs apart. One is a known pair in Sydney. This one is the last day in Brisbane.</p>
<h2>Quick final facts</h2>
<ul>
<li><strong>Men's final:</strong> Sunday 15 November 2026, Suncorp Stadium, Brisbane. Teams to be decided.</li>
<li><strong>Women's final:</strong> the same day, the same stadium, as a double-header. International Rugby League's UK broadcast announcement says the two finals share the day.</li>
<li><strong>Wheelchair final:</strong> Friday 13 November 2026, WIN Entertainment Centre, Wollongong. The wheelchair tournament is staged there from 30 October.</li>
<li><strong>Tournament window:</strong> 15 October to 15 November 2026, in Australia, New Zealand, and Papua New Guinea. The NRL release counted 53 matches, 26 teams, and 14 nations.</li>
<li><strong>Kick-off minute:</strong> not printed on the official draw page checked here. Several fixtures guides have used 6:35 p.m. local for the men's final and 3:15 p.m. local for the women's final. Treat those as reported until rlwc2026.com or NRL.com prints the minute.</li>
<li><strong>Clock:</strong> Brisbane and the rest of Queensland do not use daylight saving. November is Australian Eastern Standard Time, ten hours ahead of GMT.</li>
<li><strong>Tickets:</strong> rlwc2026.com. Opening prices were quoted when the draw was announced in November 2025. Use the live ticket page for a seat today. No price is printed here.</li>
<li><strong>Television:</strong> Australia is Seven and 7Plus, as the NRL draw release stated. The UK and Ireland, and a list of Asian countries plus Canada, are on Premier Sports, as International Rugby League announced. Everywhere else: check your local broadcaster. More deals were still being finished in early October 2026.</li>
</ul>
<h2>What time is a Brisbane evening where you are?</h2>
<p>Until the official draw replaces TBA with a minute, do not tattoo a clock on the fridge. Queensland stays on Australian Eastern Standard Time in November. If the reported 6:35 p.m. Brisbane start for the men's final is the minute the board confirms, the conversions below are the ones to use. If the board prints a different minute, slide every city by the same amount. The women's final, if the reported 3:15 p.m. start holds, is three hours and twenty minutes earlier in every city.</p>
<ul>
<li><strong>Brisbane (AEST) and Port Moresby:</strong> 6:35 p.m. Sunday 15 November, on the reported men's minute</li>
<li><strong>Sydney:</strong> 7:35 p.m. AEDT, because New South Wales is on daylight saving and Brisbane is not</li>
<li><strong>Auckland:</strong> 9:35 p.m. NZDT</li>
<li><strong>Singapore:</strong> 4:35 p.m.</li>
<li><strong>India:</strong> 2:05 p.m. IST</li>
<li><strong>Karachi:</strong> 1:35 p.m. PKT</li>
<li><strong>Dubai:</strong> 12:35 p.m. GST</li>
<li><strong>Nairobi:</strong> 11:35 a.m. EAT</li>
<li><strong>Johannesburg:</strong> 10:35 a.m. SAST</li>
<li><strong>London and Dublin:</strong> 8:35 a.m. GMT</li>
<li><strong>New York:</strong> 3:35 a.m. EST</li>
<li><strong>Los Angeles:</strong> 12:35 a.m. PST</li>
</ul>
<p>The Sydney line is the one families get wrong. A 6:35 p.m. kick-off in Brisbane is 7:35 p.m. in Sydney on the same November Sunday, because only one of those cities has moved the clock. Papua New Guinea stays on the same hour as Brisbane. Say the city.</p>
<h2>Who is in the men's tournament?</h2>
<p>The NRL draw release describes a 10-team men's World Cup. Group A is Australia, New Zealand, Fiji, and the Cook Islands. Group B is England, Samoa, and Lebanon. Group C is Tonga, Papua New Guinea, and France. Group A plays inside the group. Groups B and C play across at each other. The top two from Group A go to the semi-finals, and the top two from the combined B-and-C table go through as well. That structure is why a "group winner" headline in late October is not yet a finalist. Semi-finals are Saturday 7 November at McDonald Jones Stadium in Newcastle and Sunday 8 November at Allianz Stadium in Sydney, as double-headers with the women's semi-finals. The official draw still had those semi-final slots as TBA teams when this page was written. Predicting a grand final is a guess. Australia are the hosts and the team the NRL release called one of the top two ranked sides in the opener. New Zealand open against them. England, Tonga, Samoa, and Papua New Guinea are in the draw. None of those facts is a booking for 15 November.</p>
<p>The men's tournament starts Thursday 15 October at Allianz Stadium, Sydney, Australia v New Zealand. Other cities on the NRL list include Port Moresby, Perth, Newcastle, Christchurch, Brisbane, Wollongong, the Gold Coast, and Townsville. Christchurch means New Zealand has a pool match at home, at One NZ Stadium on the official draw, and still has to travel if the Kiwis reach Brisbane. Port Moresby means Papua New Guinea is a host, not only a team. The opener page covers 15 October. This page starts being useful once you care who is left.</p>
<h2>What about the women's and wheelchair finals?</h2>
<p>The women's tournament is eight teams. The NRL release puts Australia, England, Samoa, and Wales in one group, and New Zealand, Papua New Guinea, France, and Fiji in the other. Each team plays the others in its group. The top two from each group reach the semi-finals. The women's opener is Friday 16 October, Australia v Samoa at CommBank Stadium. The final is the early match of the Brisbane double-header on 15 November, with the minute still to be confirmed on the official draw. Do not assume the Jillaroos are in it because they are the team the release called all-conquering. The group still has to be played.</p>
<p>The wheelchair tournament is also eight teams, all of it at WIN Entertainment Centre in Wollongong. The NRL groups are England, Ireland, Wales, and the United States in one pool, and France, Australia, Scotland, and New Zealand in the other. It opens in line with a men's and women's double-header at WIN Stadium on 30 October, and the final is Friday 13 November. A supporter who only has the Suncorp date will miss the wheelchair final by two days. International Rugby League has also talked about a physical-disability event sharing the World Cup stage. That is a separate announcement from the wheelchair draw above. Check the IRL note if that is the sport you follow.</p>
<h2>Where can you watch, by region?</h2>
<p>In Australia, the NRL's November 2025 draw release said every match would be live and exclusive on Seven and 7Plus. That is the line to use until the NRL replaces it. In the United Kingdom and Ireland, International Rugby League said on 3 October 2026 that Premier Sports will broadcast every match live from the men's, women's, and wheelchair tournaments. An earlier IRL note in August was narrower on the women's and wheelchair coverage, with a promise of England games plus the semi-finals and finals, and room for more. The October note is the later one. If you are in Britain or Ireland and you want a pool game that does not involve England, read Premier Sports' current schedule in case the October sentence and the August small print still need a producer to line them up.</p>
<p>In Canada, and in the Premier Sports Asia network, IRL's July 2026 announcement put the rights with Premier Sports, up to all 53 matches including every men's game. The countries named for that Asia network include the Philippines, Japan, Singapore, Hong Kong, Malaysia, Indonesia, India, Sri Lanka, Bangladesh, and Pakistan, among others on the list. A viewer in Mumbai or Karachi should look at Premier Sports Asia, not at an Australian login. A viewer in Canada should look at the Premier Sports rugby streaming service IRL named.</p>
<p>The United States, the Gulf, Africa, and New Zealand were not in those three announcements. IRL said on 3 October that further deals were still being closed so that fans elsewhere could watch. Until a partner is named for your country, check your local broadcaster. Do not treat a full-match upload on a social app as the official picture. New Zealand is a host and a likely contender, and a rights announcement for New Zealand television can still arrive after this page. Look for it on the IRL news list.</p>
<h2>How do you follow the fortnight without spoiling the teams?</h2>
<p>Use rlwc2026.com for the draw and for tickets. Use NRL.com for the match centre once a semi-final has a pair of names. The semi-finals on 7 and 8 November are the first moment the Brisbane teams exist. Anything before that is a pool table. Pool tables in a cross-group format, which is what groups B and C use, are easy to misread. Wait for the official qualification note.</p>
<p>Other sport around the same Sunday, so the search does not collide: <a href="/blog/england-vs-australia-rugby-twickenham-8-nov-2026">England v Australia in rugby union</a> is 8 November at Twickenham, the same day as one league semi-final and a different code. <a href="/blog/india-vs-nz-3rd-t20i-wellington-27-oct-2026">India v New Zealand in Wellington</a> is cricket on 27 October. <a href="/blog/motogp-malaysia-grand-prix-sepang-2026-race-guide">MotoGP at Sepang</a> is motorcycles, not league. None of them names the Brisbane finalists, because those finalists are not knowable from a pool draw.</p>
<p>A match page that can say "teams to be decided" without inventing a pair is ordinary publishing. See <a href="/services/website-development">website development</a>.</p>
<h2>FAQ</h2>
<h3>When and where is the men's Rugby League World Cup final?</h3>
<p>Sunday 15 November 2026 at Suncorp Stadium, Brisbane. The women's final is the same day at the same ground. The teams are not known yet.</p>
<h3>What time is kick-off?</h3>
<p>The official draw page checked for this guide still shows the minute as TBA. Fixtures guides have reported 6:35 p.m. Brisbane time for the men's final and 3:15 p.m. for the women's final. Confirm on rlwc2026.com or NRL.com. Queensland does not use daylight saving in November.</p>
<h3>If 6:35 p.m. Brisbane is right, what time is that in the UK, India, and New Zealand?</h3>
<p>8:35 a.m. in the UK and Ireland, 2:05 p.m. in India, and 9:35 p.m. in Auckland. Sydney would be 7:35 p.m., an hour ahead of Brisbane.</p>
<h3>Who is in the men's draw?</h3>
<p>Australia, New Zealand, Fiji, Cook Islands, England, Samoa, Lebanon, Tonga, Papua New Guinea, and France. Reaching Brisbane depends on the semi-finals on 7 and 8 November.</p>
<h3>Where can I watch in Australia, Britain, and India?</h3>
<p>Australia: Seven and 7Plus, as announced by the NRL. Britain and Ireland: Premier Sports, as announced by International Rugby League. India is on the Premier Sports Asia list. Other countries should check the local broadcaster.</p>
<h3>When is the wheelchair final?</h3>
<p>Friday 13 November 2026 at WIN Entertainment Centre, Wollongong, where that tournament is played.</p>
`,
    category: "news",
    tags: ["rugby league", "world cup", "brisbane", "suncorp"],
    imageUrl: "/images/blog-og/rugby-league-world-cup-2026-final-brisbane-15-nov.svg",
    date: "2026-10-08",
    updatedAt: "2026-10-08T09:00:00+05:30",
    readTime: "16 min read",
    author: "TheTriFusion Team",
    featured: false,
    relatedServiceSlugs: ["website-development"],
    faqs: [
      {
        question: "When and where is the men's Rugby League World Cup final?",
        answer:
          "Sunday 15 November 2026 at Suncorp Stadium, Brisbane. The women's final is the same day. The teams are not known yet.",
      },
      {
        question: "What time is kick-off?",
        answer:
          "The official draw still showed the minute as TBA. Reported guides have used 6:35 p.m. Brisbane time for the men and 3:15 p.m. for the women. Confirm on rlwc2026.com. Queensland stays on AEST.",
      },
      {
        question: "If 6:35 p.m. Brisbane is right, what time is that in the UK, India, and New Zealand?",
        answer:
          "8:35 a.m. in the UK and Ireland, 2:05 p.m. in India, and 9:35 p.m. in Auckland. Sydney would be 7:35 p.m.",
      },
      {
        question: "Who is in the men's draw?",
        answer:
          "Australia, New Zealand, Fiji, the Cook Islands, England, Samoa, Lebanon, Tonga, Papua New Guinea, and France. Semi-finals are 7 and 8 November.",
      },
      {
        question: "Where can I watch in Australia, Britain, and India?",
        answer:
          "Seven and 7Plus in Australia, Premier Sports in Britain and Ireland, and Premier Sports Asia for India. Check your local broadcaster if your country was not in those announcements.",
      },
      {
        question: "When is the wheelchair final?",
        answer:
          "Friday 13 November 2026 at WIN Entertainment Centre, Wollongong.",
      },
    ],
    event: {
      type: "SportsEvent",
      name: "Rugby League World Cup 2026 Men's Final",
      startDate: "2026-11-15",
      endDate: "2026-11-15",
      organizer: {
        name: "International Rugby League",
        url: "https://www.internationalrugbyleague.com",
      },
      location: {
        name: "Suncorp Stadium",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
  },
];
