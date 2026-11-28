---
title: "UPI Dispute Codes Changed: Fintech App Checklist 2026"
description: "NPCI changed UPI dispute reason codes on 25 Nov 2026 and P2M routing moves on 23 Dec. What Indian fintech apps and merchants must fix in their software."
slug: "upi-dispute-reason-codes-fintech-app-checklist-2026"
date: "2026-11-27"
author: "TheTriFusion team"
targetService: "fintech-app-development"
secondary_service_urls:
  - "/services/fintech-app-development/bbps-software"
  - "/services/fintech-app-development/aeps-software"
sources:
  - title: "TeamLease RegTech: NPCI Standardisation of UPI Dispute Management Rules in URCS"
    url: "https://teamleaseregtech.com/updates/article/61096/npci-standardisation-of-upi-dispute-management-rules-in-urcs/"
  - title: "CredoNomics: NPCI updates UPI dispute codes from 25 November"
    url: "https://www.credonomics.in/research/watch/npci-upi-dispute-reason-codes-effective-25-november-2026"
  - title: "CredoNomics: UPI merchant disputes — NPCI changes bank routing from 23 December"
    url: "https://www.credonomics.in/research/watch/npci-upi-p2m-dispute-routing-december-2026"
  - title: "Complinity: NPCI circular on revision of UPI P2M dispute routing"
    url: "https://complinity.com/legal-update/npci-issues-a-circular-on-revision-of-upi-p2m-dispute-routing-logic-and-reason-codes-in-urcs-27031/"
  - title: "Gadgets Now: How Indian shoppers can dispute excess charges on UPI payments"
    url: "https://gadgetsnow.indiatimes.com/tech-news/how-indian-shoppers-can-dispute-excess-charges-on-upi-payments/articleshow/136150234.cms"
  - title: "NPCI UPI circulars"
    url: "https://www.npci.org.in/circulars/upi"
  - title: "RBI: Harmonisation of TAT and customer compensation for failed transactions (20 Sep 2019)"
    url: "https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11693"
  - title: "RBI: Online Dispute Resolution System for Digital Payments (6 Aug 2020)"
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11946&Mode=0"
  - title: "RBI: Master Direction on Regulation of Payment Aggregators"
    url: "https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=12896"
  - title: "CNBC-TV18: NPCI notifies UPI Vyapaar Saksham scheme"
    url: "https://www.cnbctv18.com/business/finance/npci-notifies-upi-vyapaar-saksham-scheme-to-push-small-merchant-acceptance-to-be-funded-from-upi-mdr-20032322.htm"
faqs:
  - question: "What changed in UPI disputes on 25 November 2026?"
    answer: "NPCI's circular OC No. 240/2026-27 updated the dispute rules in URCS. It renamed \"Wrong Credit Chargeback\" to \"Wrong Payment – Reversal Request\", allowed some disputes on deemed-approved transactions after TCC updates, added reason codes for excess charges, returns, defective and undelivered goods and government revenue payments, and set evidence requirements by category."
  - question: "Does this mean customers get automatic UPI refunds now?"
    answer: "No. The published summaries are clear that the circulars change bank-side workflows. They do not create a new refund entitlement or compensation amount. The RBI's 2019 failed-transaction rules (T+1 or T+5 auto-reversal, ₹100 per day if late) still apply."
  - question: "What happens on 23 December 2026?"
    answer: "Under OC No. 241/2026-27, many person-to-merchant disputes will be handled by the payee PSP bank instead of the beneficiary bank. Existing timelines and compensation stay the same, and disputes raised before that date continue on the old route."
  - question: "Do small merchants need to change anything?"
    answer: "Most small offline merchants need only keep invoices that match their UPI receipts and respond quickly if their bank asks for proof. Online stores, apps and fintech networks should check their transaction status handling, evidence exports and complaint flows."
  - question: "What is a deemed-approved UPI transaction?"
    answer: "It is a payment whose final status was not confirmed in real time and is settled later. These cause duplicate payments and \"money debited, service not given\" complaints, and disputes can now be raised on them after TCC updates. Apps should re-check pending payments and handle late success correctly."
  - question: "Is an FIR needed for every UPI dispute?"
    answer: "No. NPCI's evidence table lists an FIR, police complaint, NCRP detail or a customer complaint copy for specified fraud chargebacks. It is not a blanket requirement for every dispute."
  - question: "Can TheTriFusion update an existing fintech app, or only build new ones?"
    answer: "We do both. We can review an existing BBPS, AEPS, DMT, recharge or UPI app and add status re-checks, idempotency, UTR audit trails and evidence exports, or build a new white-label stack. Bank and network access stay with you."
---

**Short answer:** From 25 November 2026, NPCI's dispute system (URCS) uses new and renamed UPI dispute reason codes for excess charges, duplicate debits, returns and undelivered goods. From 23 December 2026, many merchant (P2M) disputes move to the payee PSP bank. Fintech apps and merchants should now keep a UTR-keyed evidence pack, handle "deemed" payments properly and update support flows.

This is not a consumer refund rule and it does not create a new compensation amount. It is a back-office change. But back-office changes are exactly where fintech software either holds up or quietly leaks money. If you run a UPI-accepting app, an online store, or a retailer–distributor network for BBPS, AEPS, DMT or recharge, the next four weeks are a good time to check how your software records, proves and reverses payments.

Below we explain what changed (with the source for each point), who it affects, and a practical checklist your product and tech team can work through before the 23 December routing change.

## What NPCI changed, in plain English

NPCI published two operating circulars on the same date, 4 November 2026. Both are addressed to UPI member banks and UPI application providers, not to the public. Summaries are available from [TeamLease RegTech](https://teamleaseregtech.com/updates/article/61096/npci-standardisation-of-upi-dispute-management-rules-in-urcs/) and [CredoNomics](https://www.credonomics.in/research/watch/npci-upi-dispute-reason-codes-effective-25-november-2026), and NPCI lists its UPI circulars on its [official circulars page](https://www.npci.org.in/circulars/upi).

### Circular 1: OC No. 240/2026-27 — dispute codes (live from 25 November 2026)

According to the published summaries of NPCI/UPI/OC No. 240/2026-27:

- **A rename:** "Wrong Credit Chargeback" is now called **"Wrong Payment – Reversal Request"** at the raise, acceptance and rejection stages.
- **Deemed-approved transactions:** Wrong Payment – Reversal Requests and Fraud Chargebacks are now permitted on **deemed-approved transactions after Transaction Credit Confirmation (TCC) updates**.
- **New reason codes** cover: a user charged more than the transaction amount; cancelled or returned goods/services; goods/services not as described or defective; goods/services not provided or received; excess charges in certain refund and credit-adjustment entries; and Government Revenue Collection Payments ([CredoNomics](https://www.credonomics.in/research/watch/npci-upi-dispute-reason-codes-effective-25-november-2026)).
- **Revised descriptions:** for example, wording that used to say "card holder was charged more" now says "user was charged more", and the chargeback code for duplicate payments now explicitly covers "paid by alternate means / duplicate / multiple transactions".
- **One code retired for one stage:** code 1084 (Duplicate/Multiple Transaction) is discontinued for Chargeback Raise. CredoNomics notes this is limited to the chargeback-raise stage and is not a removal across every dispute type.
- **Evidence by category:** NPCI's table lists supporting documents depending on the dispute, such as a customer complaint, UPI payment receipt and purchase bill/invoice for an excess-amount case, and an FIR, police complaint, NCRP detail or a customer complaint copy for a specified fraud chargeback ([TeamLease RegTech](https://teamleaseregtech.com/updates/article/61096/npci-standardisation-of-upi-dispute-management-rules-in-urcs/)).

### Circular 2: OC No. 241/2026-27 — P2M dispute routing (live from 23 December 2026)

The second circular changes **which bank handles** person-to-merchant disputes:

- For applicable P2M disputes, the actioning/responding bank moves from the **beneficiary bank** to the **payee PSP bank** — broadly, the bank that brought the merchant onto UPI — across two-, three- and four-party models ([CredoNomics](https://www.credonomics.in/research/watch/npci-upi-p2m-dispute-routing-december-2026); [Complinity](https://complinity.com/legal-update/npci-issues-a-circular-on-revision-of-upi-p2m-dispute-routing-logic-and-reason-codes-in-urcs-27031/)).
- Some categories and cases stay with the beneficiary bank, including listed timed-out dispute families, and cases where the payee PSP field is blank for IFSC-and-account-based transactions.
- NPCI says existing timelines, RBI-prescribed turnaround times and customer compensation are **unchanged**, and disputes raised before 23 December continue on the old route.

### What did *not* change

It is easy to over-read these circulars, so be precise with your support team:

- There is **no new refund promise or compensation amount** for customers. As [Gadgets Now](https://gadgetsnow.indiatimes.com/tech-news/how-indian-shoppers-can-dispute-excess-charges-on-upi-payments/articleshow/136150234.cms) puts it, neither circular creates an automatic refund for every completed payment.
- Customers do not need a new button in their UPI app. They still complain through their app or bank.
- The RBI's failed-transaction rules still apply (next section).

## The RBI rules that sit underneath every UPI dispute

The NPCI codes are the plumbing. The RBI framework sets the clock. Two circulars matter most for app builders.

### 1. Turnaround time and compensation for failed transactions (RBI, 20 September 2019)

RBI's circular on [Harmonisation of Turn Around Time and customer compensation for failed transactions](https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=11693) sets these rules for the rails most Indian fintech apps use:

| Payment system | Failure scenario | Required action | Compensation if late |
|---|---|---|---|
| UPI (fund transfer) | Account debited, beneficiary not credited | Auto-reversal by beneficiary bank by T+1 day | ₹100 per day beyond T+1 |
| UPI (merchant payment) | Account debited, confirmation not received at merchant | Auto-reversal within T+5 days | ₹100 per day beyond T+5 |
| IMPS | Account debited, beneficiary not credited | Auto-reversal by beneficiary bank by T+1 day | ₹100 per day beyond T+1 |
| AEPS (incl. Aadhaar Pay) | Account debited, confirmation not received at merchant location | Acquirer initiates credit adjustment within T+5 days | ₹100 per day beyond T+5 |

*Source: RBI circular RBI/2019-20/67, 20 September 2019. "T" is the day of the transaction.*

Why this matters for your software: when a customer sees money leave their account and your app shows "failed" or "pending", they often complain before the auto-reversal lands. If your app cannot show the real status and the expected reversal date, your support team ends up arguing with the customer, and the bank ends up with a dispute it did not need.

### 2. Online Dispute Resolution (RBI, 6 August 2020)

RBI's [Online Dispute Resolution circular](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11946&Mode=0) required authorised payment system operators to run an ODR system for failed digital-payment transactions, with complaints accepted through multiple channels, a unique reference number and status tracking. For UPI, third-party app providers were expected to let users raise complaints inside the app. If you operate a payment app, your in-app complaint flow is not optional polish — it is part of the regulatory picture your bank partner will look at.

## Who is actually affected

Merchants and fintech operators do not log into URCS. Banks and UPI app providers do. But when a dispute is raised, the bank or payment aggregator comes back to *you* for proof. So the impact flows down:

| Who you are | What changes for you in practice |
|---|---|
| UPI third-party app or PSP-linked app | Dispute codes, labels and evidence flows in your back office and complaint screens need to match the new categories; P2M routing changes from 23 Dec |
| Online store / D2C brand on a payment gateway | Expect evidence requests mapped to clearer categories: excess charge, duplicate payment, returned goods, not delivered |
| BBPS, recharge, DMT or AEPS retailer network | Retailers and distributors will face more specific questions about duplicate debits, failed-but-debited payments and refunds; your admin panel must produce the trail fast |
| Subscription or digital-service app (courses, SaaS, licences) | "Not provided / not received" now has its own code, so access logs and activation records become your main evidence |
| Small offline merchant with a QR and soundbox | Little change day to day; keep invoices that match receipts. Watch the separate UPI MDR and Vyapaar Saksham developments |

On that last row: NPCI also notified a **UPI Vyapaar Saksham Scheme** on 11 November 2026 to fund QR codes and soundboxes for small merchants with turnover up to ₹40 lakh, focused on Tier 3–6 centres. Its three-year clock starts only when UPI MDR is implemented, and, as [CNBC-TV18 reported](https://www.cnbctv18.com/business/finance/npci-notifies-upi-vyapaar-saksham-scheme-to-push-small-merchant-acceptance-to-be-funded-from-upi-mdr-20032322.htm) on 12 November, the MDR date had not yet been notified. That matters for many towns across Rajasthan, but it is a separate topic from disputes.

## The "deemed approved" problem, explained

The part of OC 240 most likely to surprise app teams is the line about **deemed-approved transactions**.

In simple terms, a deemed transaction is one where the final status was not clear in real time (for example, a timeout) and is confirmed later. The customer may have tried again in the meantime and paid twice. Or your app may have shown "failed" and never delivered the recharge, bill payment or product. Now, after TCC updates, Wrong Payment – Reversal Requests and Fraud Chargebacks can be raised on such transactions ([TeamLease RegTech](https://teamleaseregtech.com/updates/article/61096/npci-standardisation-of-upi-dispute-management-rules-in-urcs/)).

Common failure patterns in fintech payment code:

1. **The app trusts only the first callback.** If the first response is "pending" or a timeout, the order is marked failed and never re-checked.
2. **No scheduled status re-check.** There is no job that queries the gateway or bank's status API for pending transactions at fixed intervals.
3. **Retries create new orders.** The customer taps "Pay again" and the system creates a fresh order, so two successful debits map to two separate orders with nothing linking them.
4. **Late success is not acted on.** The late confirmation arrives but nobody issues the service, credits the wallet or triggers a refund.

Each of these turns into an excess-charge, duplicate or not-received dispute. The fix is not a new screen; it is how your transaction state machine works.

## A practical checklist for fintech apps and merchants

Work through this with your developer or vendor. It is written so a non-technical founder can ask the right questions.

### Step 1: Make the UTR your single key

Every UPI payment has a unique transaction reference (UTR/RRN). Make sure:

- [ ] Every order, wallet credit, refund and retailer ledger entry stores the UTR and the gateway's transaction ID.
- [ ] Your admin panel can search by UTR and show the full history in one place: initiation, every status update, delivery/fulfilment, refunds.
- [ ] Refunds store their own reference and link back to the original UTR.

If your evidence lives in three systems (gateway dashboard, a spreadsheet and WhatsApp screenshots), you will miss bank deadlines.

### Step 2: Fix the transaction state machine

- [ ] Use explicit states: initiated → pending → success / failed / deemed → reversed / refunded.
- [ ] Never move "pending" straight to "failed" without a status re-check.
- [ ] Run a scheduled job that re-checks pending and deemed transactions with the provider's status API, and records each check.
- [ ] Use idempotency keys so a retry from the same customer for the same cart or bill does not create a duplicate order silently.
- [ ] When a late success arrives for an order already marked failed, either fulfil it or auto-refund it — and log which.

### Step 3: Build an evidence pack per dispute category

Map each new category to records you can export in minutes. This mapping is our own practical suggestion; NPCI's evidence table is for member banks, so confirm exact requirements with your acquiring bank or payment aggregator.

| Dispute category (from OC 240 summaries) | What your system should export |
|---|---|
| User charged more than the transaction amount | Itemised invoice, the matching UPI receipt, price shown at checkout |
| Duplicate / multiple / paid by alternate means | Both UTRs, status history for each, refund record if issued |
| Goods/services cancelled or returned | Cancellation or return date, refund status and reference |
| Not as described / defective | Product listing at time of order, QC or replacement records, customer chat history |
| Not provided / not received | Delivery proof and date; for digital services, login, activation or usage logs; for recharge/BBPS, the operator or biller confirmation reference |
| Fraud-related | Device and session data at payment time, order history, KYC status, any complaint references |

### Step 4: Update support scripts and in-app complaint screens

- [ ] Align your complaint categories with the new names (for example, "Wrong Payment – Reversal Request", not "Wrong Credit Chargeback") so internal reports match what banks send you.
- [ ] Show the customer the transaction status and, for failed-but-debited cases, the RBI auto-reversal window (T+1 for P2P, T+5 for merchant payments).
- [ ] Give every complaint a reference number and a visible status, in line with the ODR approach.
- [ ] Train support not to promise refunds the circulars don't promise.

### Step 5: Prepare for the 23 December routing change

- [ ] Ask your payment aggregator or acquiring bank in writing: from 23 December, which bank will send you P2M dispute requests, and through which channel?
- [ ] Update escalation contacts and any SLA tracking that assumes the old route.
- [ ] Keep disputes raised before 23 December on the old process — the circular says they are unaffected.

### Step 6: Reconcile daily, not monthly

- [ ] Run an automated daily reconciliation between your ledger, the gateway settlement report and bank statements.
- [ ] Flag mismatches automatically: debit with no order, order with no settlement, refund with no original.
- [ ] For retailer–distributor networks, reconcile commissions and wallet balances against the same UTR trail.

### Step 7: Protect the evidence you now store

More evidence means more personal data. Under the Digital Personal Data Protection framework, keep only what you need, restrict who can view it, and set retention periods with your legal adviser. Mask sensitive screens in the app, too — our guide on [protecting sensitive app screens from AI assistants and screenshots](https://thetrifusion.in/blog/mobile-app-screen-privacy-ai-assistants-india) covers the mobile side.

## Special notes for BBPS, AEPS, DMT and recharge operators

If you run a white-label retailer network from Jaipur or anywhere in Rajasthan (a retailer app, a distributor panel and an admin), you deal with a mix of rails, so dispute handling is messier than for a single online store.

- **Recharge and bill payments:** a "debited but recharge not done" complaint is a classic not-received case. Your system needs the operator or biller confirmation reference next to the UTR. See how we approach this in [BBPS bill payment software](https://thetrifusion.in/services/fintech-app-development/bbps-software).
- **AEPS:** the RBI TAT for merchant-side AEPS failures is a credit adjustment within T+5 days by the acquirer. Your retailer app should show the retailer and customer the transaction status clearly instead of encouraging a second withdrawal attempt. Our [AEPS software](https://thetrifusion.in/services/fintech-app-development/aeps-software) page explains the device and sponsor-bank flows.
- **DMT / IMPS:** IMPS failures follow a T+1 auto-reversal rule. Remitter-facing screens should show "pending" honestly and avoid instant retries to the same beneficiary.
- **Wallet top-ups by UPI:** a deemed top-up that later succeeds must credit the retailer wallet exactly once. This is where idempotency and status re-checks pay off.

A note on scope: software vendors like us build and integrate the product. The bank, BBPOU or aggregator relationship, and any licences, stay with the operator.

## Comparison: manual handling vs a dispute-ready system

| Area | Manual / patchy setup | Dispute-ready setup |
|---|---|---|
| Finding a transaction | Search gateway dashboard, then spreadsheet | One search by UTR in admin panel |
| Pending payments | Marked failed after timeout | Auto re-check until final status, logged |
| Duplicate payments | Found when customer complains | Flagged automatically, refunded by rule |
| Evidence for bank | Screenshots collected over days | One-click export per dispute category |
| Customer communication | "Wait 7 days" | Status plus RBI reversal window shown in app |
| Routing change on 23 Dec | Learned when a request arrives | Contacts and SLAs updated in advance |

## How to tell if your current app needs work

Answer these quickly. If you say "no" to two or more, plan a fix before the December change.

1. Can support find any payment by UTR in under a minute?
2. Does the system re-check pending UPI payments automatically?
3. Is a second payment for the same order detected automatically?
4. Can you export proof of delivery or activation for a specific order?
5. Do your in-app complaint screens show a reference number and status?
6. Does finance reconcile ledger vs settlement every day?

Most fixes are not a rewrite. Status polling, idempotency, a UTR-keyed audit log and an evidence export can usually be added to an existing app. If your app is old or its code is with a vendor who has gone quiet, start by confirming you actually own and can access the source code — see our guide on [who owns your software's source code](https://thetrifusion.in/blog/who-owns-software-source-code-ip-guide-india).

## Get your fintech app dispute-ready

TheTriFusion is a Jaipur-based software company that builds [fintech app development](https://thetrifusion.in/services/fintech-app-development) projects for Indian operators: retailer apps, distributor panels and admins for BBPS, AEPS, DMT, recharge and UPI.

If you'd like a second pair of eyes on how your app handles pending payments, duplicates and dispute evidence before 23 December, send us a message on WhatsApp or call **+91 63781 33780**, or [request a quote](https://thetrifusion.in/contact?service=fintech-app-development). We'll tell you honestly what needs fixing and what doesn't.

*This article is general information for businesses and is not legal or regulatory advice. NPCI circulars are addressed to member banks and app providers; confirm specific requirements with your bank, payment aggregator or compliance adviser.*
