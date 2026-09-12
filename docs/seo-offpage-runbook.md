# Off-page SEO and NAP consistency runbook (Phase 3)

Use this after the on-site work in Phases 1–2. Nothing in this file is fixed by deploying the repo — every row below is a manual action on an external site (GBP, a directory, a client's site, etc.). Fill in **Status / Owner / Date** as you go so this stays a living checklist instead of a one-time read.

## 1. Canonical NAP — copy this exactly everywhere

Every listing, profile, and schema field below must match this table **character-for-character**. Do not paraphrase the address, abbreviate the legal name, or leave an old city/phone in place "for now."

| Field | Exact value |
|---|---|
| Legal name | `Trifusion Infotech Private Limited` |
| Brand name | `TheTriFusion` |
| City (HQ) | `Jaipur, Rajasthan, India` — **never Bhilwara** |
| Website | `https://www.thetrifusion.in` |
| Public email | `contact@thetrifusion.in` |
| Phone | Same number shown in the site footer — copy it from the live site at the time of each listing, do not retype from memory |
| Street address | Only publish a street line once `NEXT_PUBLIC_COMPANY_STREET` is set **and** it matches Google Business Profile exactly. Until then, city-level NAP only. |

**Live proof URLs** (use these as portfolio evidence on every directory/profile below): [plugone.in](https://plugone.in/), [dailyconceptsindia.com](https://dailyconceptsindia.com), [connectdairy.in](https://www.connectdairy.in/), [atharvnarayan.in](https://www.atharvnarayan.in/).

## 2. Master checklist — work top to bottom

Priority: **P0** = fixes an active wrong/conflicting listing (do first) · **P1** = fastest trust-building wins · **P2** = supporting directories/authority · **P3** = recurring/ongoing.

| # | Priority | Task | Where | Exact NAP/value to use | Status | Owner | Date done |
|---|---|---|---|---|---|---|---|
| 1 | P0 | Claim or request correction on the scraped listing showing Bhilwara as HQ | RocketReach (and any other people/company data scraper showing Bhilwara) | City → `Jaipur, Rajasthan, India`. Do **not** create a second "Bhilwara office" listing — Bhilwara is a service area, not an office. | ☐ Not started | | |
| 2 | P0 | Audit and correct city/phone/brand spelling mismatches | Justdial | Match row 1 table exactly | ☐ Not started | | |
| 3 | P0 | Audit and correct city/phone/brand spelling mismatches | IndiaMART | Match row 1 table exactly | ☐ Not started | | |
| 4 | P0 | Audit and correct city/phone/brand spelling mismatches | Sulekha | Match row 1 table exactly | ☐ Not started | | |
| 5 | P1 | Create/verify Google Business Profile | Google Business Profile | Categories: *Software company*, *Website designer*. Office city: Jaipur. Service area: Rajasthan (including Bhilwara, Udaipur, Kota, Ajmer) + India. **Do not create a fake Bhilwara storefront listing.** | ☐ Not started | | |
| 6 | P1 | Create company profile + add live projects | Clutch.co | Legal name + Jaipur city from row 1 table. Add all 4 live proof URLs. Request client reviews once listed. | ☐ Not started | | |
| 7 | P2 | Create/update directory listing | GoodFirms | Same NAP + same live portfolio URLs as Clutch | ☐ Not started | | |
| 8 | P2 | Create/update directory listing | DesignRush | Same NAP + same live portfolio URLs as Clutch | ☐ Not started | | |
| 9 | P2 | Update existing listing to current NAP | IndiaMART (company profile, not just directory audit in row 3) | Jaipur address only — remove any old city reference | ☐ Not started | | |
| 10 | P2 | Update existing listing to current NAP | Justdial (company profile, not just directory audit in row 2) | Jaipur address only — remove any old city reference | ☐ Not started | | |
| 11 | P2 | Request a "Developed by TheTriFusion" credit + dofollow backlink | Each delivered client's live site (PlugOne, DailyConcepts, Connect Dairy, Atharv Narayan, and future clients) | Link text → `TheTriFusion`, target → `https://www.thetrifusion.in` | ☐ Not started | | |
| 12 | P2 | Post one update per new live project | LinkedIn company page | Follow the PlugOne / DailyConcepts / Connect Dairy pattern. Keep the page active — an empty company page is a trust red flag to visitors who check it. | ☐ Not started | | |
| 13 | P2 | Request reviews after each successful launch | Google Business Profile + Clutch | Ask the client directly within a week of go-live, while the experience is fresh | ☐ Not started | | |
| 14 | P2 | Publish a guest post linking to a niche service page (not just the homepage) | dev.to, Hashnode, or an Indian startup blog | Link target → a specific niche page: MLM CRM, EV charging, or fintech service page | ☐ Not started | | |

**Do not invent on-site star ratings.** JSON-LD `aggregateRating` was intentionally removed from the site until real Google/Clutch reviews exist — do not re-add it manually to "look" more credible before rows 5/6/13 above are actually done.

## 3. Tracking setup (already live in the product — verify, don't rebuild)

| Check | Detail |
|---|---|
| GA4 | Stream `G-NSKGY1KSP4` (see `.env.example`). If the same stream also fires inside GTM `GTM-M8RQSNHN`, keep only one source live — otherwise pageviews double-count. |
| Search Console | Verification file `public/google3205c300891a938f.html` is already in the repo. In GSC: verify the `www.thetrifusion.in` property if not already verified, then submit `https://www.thetrifusion.in/sitemap.xml`. |

## 4. Recurring cadence

### Every 30 days
1. GSC → Performance → sort by impressions → note new queries showing up that the site doesn't yet target well.
2. Ship or update two India/Jaipur-relevant blog posts matching those queries (see the editorial note at the top of `src/data/blogData.js`).
3. Re-check [SecurityHeaders.com](https://securityheaders.com) after any deploy (HSTS and related headers live in `next.config.mjs`).
4. Re-check PageSpeed Insights (mobile + desktop) on `/`, `/services/website-development`, and one niche service/blog URL.

### Three months from the last full audit
Re-run the full off-page audit end to end: what shipped from the checklist above, what actually ranks in GSC, and what still needs a real (non-confidential) live client URL as proof — MLM CRM stays confidential until that client agrees to be named publicly.

## 5. Explicitly out of scope for now

Dedicated city service-area pages for Ajmer / Udaipur / Kota are **out of scope** until a specific city is chosen as a real expansion target. Do not create speculative city pages or listings for these cities beyond the existing "service area" language already on the Bhilwara/Rajasthan pages and FAQ.
