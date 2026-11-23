---
title: "Who Owns Your Software's Source Code? IP Guide for India"
description: "Paying a developer doesn't make you the code owner. An India guide to copyright assignment, patents, open source and a handover checklist."
slug: "who-owns-software-source-code-ip-guide-india"
date: "2026-11-23"
author: "TheTriFusion team"
targetService: "software-development"
sources:
  - title: "TechCrunch: startup sues Apple in India over tap-to-share contacts feature"
    url: "https://techcrunch.com/2026/11/20/startup-sues-apple-in-india-over-tap-to-share-contacts-feature/"
  - title: "IP India: Copyright Act 1957, Section 19"
    url: "https://ipindia.gov.in/acts/copyright-act-1957/section-19-2"
  - title: "IP India: basics of copyright"
    url: "https://ipindia.gov.in/page-content/basic-of-copyright-1"
  - title: "IP India: Form XIV e-filing"
    url: "https://ipindia.gov.in/pages/copyright/apply/e-filing-services/form-xiv"
  - title: "Copyright Rules 2013, Chapter XIII"
    url: "https://www.copyright.gov.in/Copyright_Rules_2013/chapter_xiii.html"
  - title: "Legal 500: drafting IP assignment clauses in India"
    url: "https://www.legal500.com/intelligence/india/intellectual-property/drafting-ip-assignment-clauses-in-india-copyright-patents-and-contractor-agreements"
  - title: "Legal 500: duration and territorial extent of copyright assignment"
    url: "https://www.legal500.com/intelligence/india/intellectual-property/duration-%26-territorial-extent-of-assignment-of-copyright-in-dispute"
  - title: "Edvisars: outsourcing software development to India — who owns the code"
    url: "https://www.edvisars.com/insights/outsourcing-software-development-to-india-who-owns-the-code-ip-and-ai-assisted-work"
  - title: "Intepat: software copyright registration in India"
    url: "https://www.intepat.com/blog/software-copyright-registration-india"
  - title: "IP India: Guidelines for Examination of Computer Related Inventions (CRIs) 2025"
    url: "https://ipindia.gov.in/frontend/pdf/patents/guidelines/GUIDELINES%20FOR%20EXAMINATION%20OF%20COMPUTER%20RELATED%20INVENTIONS%20%28CRIs%29%20-%202025.pdf"
  - title: "LiveLaw: Madras High Court on computer-related invention patentability"
    url: "https://www.livelaw.in/high-court/madras-high-court/madras-high-court-computer-related-invention-patentable-demonstrates-technical-contribution-patent-office-refusal-set-aside-310202"
  - title: "PIB: startup patent fee rebate announcement"
    url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1911913"
  - title: "VS Legal: SIPP scheme end and startup IP fee rebates"
    url: "https://vslegalindia.com/do-startups-still-get-ip-fee-rebates-what-to-know-now-that-the-sipp-scheme-has-ended/"
faqs:
  - question: "If I paid the developer in full, don't I automatically own the code?"
    answer: "Not automatically. Under Section 17 of the Copyright Act, an outside developer is usually the first owner of the code they write. Payment shows you bought a service, but copyright moves to you through a written, signed assignment that meets Section 19. Without it, you may only have an implied right to use the software."
  - question: "What happens if my contract says \"all rights belong to the client\" but nothing else?"
    answer: "It helps, but it may not be enough. Section 19 says an assignment should identify the work and state the rights, duration and territory. If duration is missing, it is deemed five years; if territory is missing, it is presumed to be India only. Ask your vendor to sign a proper assignment deed that fills these gaps."
  - question: "Do I need to register my software's copyright?"
    answer: "No. Copyright exists automatically when the code is written. Registration is optional, but the certificate is prima facie evidence of ownership in court. For a core product, it is a low-cost step, filed online in Form XIV with the first and last 10 pages of source code."
  - question: "Can I patent my app idea in India?"
    answer: "An idea alone cannot be patented, and Section 3(k) of the Patents Act excludes computer programmes per se. A software-related invention may be patentable if it makes a real technical contribution, as the 2025 CRI guidelines and a 2025 Madras High Court ruling explain. Most business apps rely on copyright, contracts and confidentiality instead."
  - question: "Can my developer reuse my code for another client?"
    answer: "If copyright in the custom code has been validly and exclusively assigned to you, the vendor cannot treat it as its own reusable asset. Vendors can usually keep reusing their own background tools and general know-how. Your contract should spell out which is which, and include a confidentiality clause."
  - question: "Who owns code written with AI tools like coding assistants?"
    answer: "Indian law has not clearly settled this for modern generative AI. The safest approach is contractual: require that all deliverables, however produced, are covered by the assignment and the vendor's warranties, and that AI-assisted code is reviewed by a human before it is merged."
---

**Short answer:** In India, paying a software company to build your app does not, by itself, make you the source code's owner. Under the Copyright Act, 1957, an outside developer is usually the first owner. Ownership moves to you only through a written, signed assignment naming the work, rights, duration and territory. Get it, and the repository, before final payment.

This guide is for founders, business owners and IT heads in Jaipur, across Rajasthan and India who are commissioning custom software, or who already have a vendor-built app and are unsure what they own. It covers the legal basics in plain language, where patents fit, common traps, and a checklist for signing and handover.

*This article is general information, not legal advice. For a large or unusual project, have a lawyer review your contract.*

## Why this question is in the news this week

On 20 November 2026, [TechCrunch reported](https://techcrunch.com/2026/11/20/startup-sues-apple-in-india-over-tap-to-share-contacts-feature/) that GG Technologies, the company behind the contact-sharing app StayTouch, has sued Apple in the Bombay High Court. It alleges that the iPhone's NameDrop feature infringes its Indian patent on technology that lets phones exchange contact details with nearby devices without manual pairing. According to the report, the company is seeking ₹15 billion in damages and an injunction, it filed its Indian patent application in 2021 and received the patent in July 2024, and the case has yet to be listed for a hearing.

How the case ends is for the court. The lesson for ordinary Indian businesses is simpler: **the value of software often sits in the rights around it, not just in the code that runs.** Most SMEs commissioning a dealer portal or billing tool will never file a patent, but every one must answer a basic question: *when the project is finished, who owns what we paid for?*

## The default rule: the person who writes the code owns it

Indian law treats software as a "literary work." The official [IP India copyright guide](https://ipindia.gov.in/page-content/basic-of-copyright-1) notes that Section 2(o) of the Copyright Act includes computer programmes in the definition of literary work, and that copyright comes into existence automatically as soon as a work is created. No registration is needed for the right to exist.

The next question is *whose* right it is. Section 17 of the Act makes the author the first owner, with exceptions. The important exception, as explained in this [Legal 500 analysis of IP assignment clauses in India](https://www.legal500.com/intelligence/india/intellectual-property/drafting-ip-assignment-clauses-in-india-copyright-patents-and-contractor-agreements), is Section 17(c): when an *employee* creates a work in the course of employment under a contract of service, the employer is the first owner, unless they have agreed otherwise.

An outside software company or freelancer is not your employee. They work under a contract *for* services, not a contract *of* service. So the starting position is:

| Who wrote the code | Default first owner (absent a contract) | What you need to own it |
|---|---|---|
| Your own salaried developer, as part of their job | Your company (Section 17(c)) | A clear employment agreement still helps, especially for side projects and ex-employees |
| An outside software company | The software company (its employees' work belongs to it) | A written assignment from the company to you |
| A freelancer or consultant | The freelancer | A written assignment from the freelancer to you |
| A vendor's subcontractor or freelancer | That subcontractor | A chain: subcontractor assigns to vendor, vendor assigns to you |

As the Legal 500 piece puts it, payment, delivery, project completion or acceptance of a design does not by itself necessarily transfer the underlying intellectual property. Many business owners assume "we paid in full, so it is ours." Legally, that assumption is weak.

## What a valid assignment must say under Section 19

If ownership has to move by contract, the contract has to meet the law's requirements. [Section 19 of the Copyright Act](https://ipindia.gov.in/acts/copyright-act-1957/section-19-2), published by IP India, sets them out. In plain language:

1. **It must be in writing and signed** by the person assigning the rights, or their authorised agent. A WhatsApp "yes, the code is yours" is not enough.
2. **It must identify the work** and specify the rights assigned, the duration and the territorial extent.
3. **It should state the royalty or other consideration** payable.
4. **Use it or lose it:** if the assignee does not exercise the assigned rights within one year of the assignment, the assignment of those rights is deemed to lapse, *unless the assignment says otherwise*.
5. **Five-year default:** if no period is stated, the assignment is deemed to last five years from the date of assignment.
6. **India-only default:** if no territory is stated, the assignment is presumed to extend only within India.

Points 4 to 6 are where SMEs get caught. Imagine a Jaipur exporter whose buyer-portal contract says only "all rights belong to the client." With no duration or territory, Sections 19(5) and 19(6) could be argued to limit that assignment to five years and to India, a serious problem if the portal serves overseas buyers or the business is sold later.

This is not just theory. A [Legal 500 note on a dispute over duration and territory](https://www.legal500.com/intelligence/india/intellectual-property/duration-%26-territorial-extent-of-assignment-of-copyright-in-dispute) describes a case where the bench held that because neither the agreement nor any assignment deed stated a duration or territory, Sections 19(5) and 19(6) would be attracted. The work order was silent, and the defaults applied.

**Practical fix:** your contract should assign copyright exclusively, worldwide, for the full term of copyright, across all forms of use, and should state that the one-year lapse rule does not apply. Ask your lawyer to word this properly. It costs very little to get right at the start and a great deal to fix later.

## "We own the code" vs "we can use the code": know the difference

Ownership is not the only model, and it is not always the right one. There are three common arrangements:

| Arrangement | What you get | Good for | Watch out for |
|---|---|---|---|
| **Full assignment** | Copyright in the custom code moves to you | Products you will run for years, sell, raise funds on, or hand to another team | Make sure Section 19 details are written in; check vendor background code is licensed to you |
| **Exclusive licence** | Vendor keeps ownership, but only you can use it, on agreed terms | Cases where the vendor reuses a core engine but customises it for you | Licence term, termination triggers and what happens if the vendor shuts down |
| **Non-exclusive licence / SaaS** | A right to use, often subscription-based | Standard needs such as accounting or email that off-the-shelf tools already handle | You own your data, not the software; check data export |

A Rajasthan distributor needing a standard CRM may be well served by SaaS; a founder building a fintech or EV charging platform that investors will value needs full assignment of the custom layer. The real mistake is *not knowing which model you signed*.

## Background IP: the part almost every contract forgets

Software companies reuse pieces across clients: login modules, admin templates, deployment scripts, internal libraries. This is **background IP**, or pre-existing IP.

The [Edvisars guide on outsourcing software development to India](https://www.edvisars.com/insights/outsourcing-software-development-to-india-who-owns-the-code-ip-and-ai-assisted-work) makes a useful point: a contract should clearly distinguish newly developed IP from the developer's pre-existing tools, libraries and know-how. If vendor-owned background code is embedded in your product, you may need a broad, durable licence so that you, *and any future developer you hire*, can use, modify and maintain the product without asking the original vendor for permission each time.

Ask three questions:

1. Which parts of the delivered system are vendor background code?
2. What licence do we get to those parts: perpetual, irrevocable, transferable to a buyer of our business?
3. Can a different development team maintain them after the project ends?


## Open-source components are not "free of rules"

Almost every modern web app, mobile app and API uses open-source libraries. That is normal and healthy. But, as the Edvisars guide notes, open-source software is not software with "no copyright." It comes under a licence, and depending on the licence, the conditions can include attribution, preserving notices, or obligations around source code when you distribute modified or combined software.

For most business apps this is manageable, but it should be visible. A sensible contract asks the developer to keep a dependency record listing each material component, its version and its licence, and, for important projects, to get approval before adding code under specific licence types.

## AI-written code: an open question you should still put in writing

Many development teams now use AI coding assistants. Who owns code a machine helped write? The law has not settled it. The Edvisars guide points out that the Copyright Act has a provision, Section 2(d)(vi), which says the author of a computer-generated work is the person who causes it to be created, but notes that this wording predates today's generative AI tools. Courts have not yet given clear guidance for modern AI-assisted code.

So resolve it in the contract:

- Ask the vendor whether and how they use AI coding tools.
- Require that all deliverables, however produced, are covered by the assignment and by the vendor's warranty that they do not knowingly include third-party material without rights.
- Require human review of AI-assisted code before it is merged, which is good engineering practice anyway.

## Copyright registration: optional, cheap, and useful evidence

Since copyright exists automatically, you do not *need* to register your software. But the [IP India copyright guide](https://ipindia.gov.in/page-content/basic-of-copyright-1) explains that a registration certificate and the entries in the Register of Copyrights serve as prima facie evidence in court if ownership is disputed. It also advises filing a computer programme under the Software category, not the general Literary category.

Key facts about the process, from official sources:

- Applications are made in **Form XIV**, one work per application, and can be filed online ([IP India Form XIV page](https://ipindia.gov.in/pages/copyright/apply/e-filing-services/form-xiv)).
- For a computer programme, you upload a PDF with **at least the first 10 and last 10 pages of source code**, or the entire code if it is under 20 pages, with no blocked-out or redacted portions ([Rule 70(5), Copyright Rules 2013](https://www.copyright.gov.in/Copyright_Rules_2013/chapter_xiii.html)).
- If the application is filed by the owner rather than the author, Rule 70(3) requires a no-objection certificate from the author. **This is why the assignment matters even for registration:** if your vendor wrote the code, you will typically need their NOC.
- The Registrar waits thirty days for objections before entering particulars, under Rule 70(10).
- The fee for a software work is **₹500 per work**, according to this [fee breakdown from Intepat](https://www.intepat.com/blog/software-copyright-registration-india), which notes it verified the figure as of August 2026. Check the Copyright Office site for the current fee before filing.

Because the first and last pages are not redacted, think about which file or module you submit. Never keep passwords or API keys in source code anyway.

## Where patents fit in, and why most SMEs don't need one

Copyright protects the *expression*: your actual code. It does not stop a competitor from writing different code that does the same thing. Patents can protect the underlying *technical invention*, which is why the StayTouch case is about a patent and not copyright.

In India, Section 3(k) of the Patents Act excludes "a computer programme per se" and business methods from patentability. But that does not mean software-related inventions can never be patented. The [2025 Guidelines for Examination of Computer Related Inventions](https://ipindia.gov.in/frontend/pdf/patents/guidelines/GUIDELINES%20FOR%20EXAMINATION%20OF%20COMPUTER%20RELATED%20INVENTIONS%20%28CRIs%29%20-%202025.pdf) from the Indian Patent Office say examiners should focus on the substance of the claim, not the wording, so a computer programme cannot be patented just by calling it a "system" or "method." On 4 November 2025, the Madras High Court [held](https://www.livelaw.in/high-court/madras-high-court/madras-high-court-computer-related-invention-patentable-demonstrates-technical-contribution-patent-office-refusal-set-aside-310202) that a computer-related invention is not excluded under Section 3(k) if it makes a technical contribution or has a technical effect, even without novel hardware.

What this means in practice:

- **A dealer portal, ERP module or booking app** that automates a normal business process is very unlikely to be patentable. Its value lies in fitting your process well, in your data and in your execution. Protect it with copyright, contracts and confidentiality.
- **A genuinely new technical method,** such as a novel way to sync devices, compress data or speed up a query, *may* be patentable. Talk to a registered patent agent *before* you demo it publicly, because public disclosure can damage novelty.
- **For DPIIT-recognised startups,** the government has announced an 80% rebate on patent filing fees, according to a [2023 PIB release](https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1911913). Note that the separate SIPP facilitator-fee support [reportedly ended on 31 March 2026](https://vslegalindia.com/do-startups-still-get-ip-fee-rebates-what-to-know-now-that-the-sipp-scheme-has-ended/), so confirm the current position with the Patent Office before you budget.

## Ownership on paper is useless without access in practice

A business can have a perfect assignment clause and still be unable to change a single screen, because the vendor holds the GitHub account, the cloud account, the domain, the Play Store listing and the database password. Legal ownership and practical control are different things.

Here is what practical control means for a typical Indian SME project:

- **Code repository** in your company's GitHub or GitLab organisation, with the vendor added as a collaborator, not the other way round.
- **Cloud accounts** (AWS, Azure, Google Cloud or a local host) registered to your company email and billed to your card or invoice.
- **Domain and DNS** registered in your company's name.
- **Google Play Console and Apple Developer accounts** in your company's name. An app published under a vendor's developer account can be painful to move later.
- **Third-party services:** payment gateway, SMS, WhatsApp Business API, maps and email keys, all created under your accounts.
- **Documentation:** setup guide, database schema, API docs and admin manual, so another team can take over.

If a vendor resists any of this, ask why. An unpaid milestone is a fair reason; "we always keep it on our side" is not.

## A step-by-step plan for your next software project

### Step 1: Decide what you need to own

Is this a core product you will sell, scale or raise money on? Then you want full assignment of the custom code. Is it an internal tool around a standard process? A licence or SaaS may be enough. This decision shapes the rest.

### Step 2: Ask for the IP clause before price talks end

Many SMEs negotiate price for weeks and then sign the vendor's standard contract in a day. Reverse it. Ask early: "Show me your IP and handover clause."

### Step 3: Check the clause against Section 19

Look for: written and signed; the work identified; exclusive assignment; worldwide territory; full term of copyright; the one-year lapse rule excluded; consideration stated (often "included in the project fee").

### Step 4: Cover the chain of contributors

Ask the vendor to confirm in writing that every employee, freelancer and subcontractor on your project has signed IP and confidentiality terms, so the vendor actually holds the rights it is promising you.

### Step 5: Tie assignment to payment sensibly

Transferring ownership on final payment is fair. But keep the code in your repository from day one, with the formal assignment deed signed on final payment, rather than code that lives only on the vendor's laptop until the end.

### Step 6: Rehearse the handover before final payment

Ask an independent developer to clone the repository, build it and deploy it to a test server using only the documentation. If they cannot, the handover is not complete.

## Handover checklist you can copy

Use this list at the end of any software project:

- [ ] Signed assignment deed covering the custom code, with work identified, rights, worldwide territory and full duration stated
- [ ] One-year lapse rule under Section 19(4) expressly excluded
- [ ] Written licence to any vendor background IP: perpetual, transferable, with right to modify
- [ ] Confirmation that all contributors signed IP and confidentiality terms
- [ ] Full source code in your company's repository, including mobile apps, backend, admin panel and infrastructure scripts
- [ ] Open-source dependency list with licences
- [ ] Cloud, domain, app store and third-party API accounts in your company's name
- [ ] All passwords and keys rotated after the vendor's access is reduced
- [ ] Database schema, API docs, setup guide and admin manual delivered
- [ ] Independent build-and-deploy test passed
- [ ] Support or maintenance terms written down, including response times and cost
- [ ] Decision taken on copyright registration, and NOC from the author obtained if needed

## How we handle this at TheTriFusion

We are a software development company in Jaipur. On our [custom software development page](https://thetrifusion.in/services/software-development), we state that clients get full ownership of the code after completion and payment, with the source code repository handed over in the client's own GitHub or GitLab, environments on the client's cloud account, and admin, database and API documentation. Our [published software pricing](https://thetrifusion.in/pricing) lists what each plan includes.

You can see the kind of systems we build, including the PlugOne EV charging platform, Connect Dairy's operations software and the DailyConcepts ecommerce and POS admin, in our [portfolio of shipped projects](https://thetrifusion.in/portfolio). Each of these is a product the business runs day to day, which is exactly why ownership and handover need to be clear.

We are not lawyers; for large deals, have your own counsel review the agreement. What we do is write a plain-language scope and handover list before coding starts.

## Planning a software project? Start with ownership

If you are planning a portal, app, CRM module or internal tool and want ownership and handover written down before work begins, talk to us. WhatsApp or call **+91 63781 33780**, or [request a quote through our contact page](https://thetrifusion.in/contact). Tell us what the software needs to do and who will use it, and we will share a written scope that includes exactly what you will receive at handover.

*Sources are linked inline throughout this article. Legal positions summarised here reflect the official texts and published analyses available on 23 November 2026. This is general information, not legal advice.*
