# All `/services` coverage audit (updated 2026-11-09 batch 3)

Inventory = **25** sitemap URLs: `/services` hub + **20** detail slugs + **4** fintech children. Source: live `sitemap-services.xml` (Success in GSC Nov 9) + `src/data/servicesData.js` / fintech product pages.

**Not claimed:** all 25 “fully optimized,” indexed, or ranking. Status is evidence-based. **No ranking / AI-inclusion promises. Do not claim domain age/authority as an established cause.**

## Fresh GSC inputs

### READONLY performance / URL Inspection (Nov 9) — inform priority

| Signal | Value | Implication for code |
|---|---|---|
| Core4 URL Inspection | software indexed (last crawl Oct 28); mobile indexed Nov 3; CRM indexed Nov 8 apex; **website** apex = Duplicate, Google chose `www…/website-development`, last crawl **Nov 3** (before `e2b9132` Nov 7) | **Do not churn website canonicals**; observe recrawl (request accepted Nov 7) |
| 90d Aug11–Nov8 `/services` global | 11 clicks / 210 imps / avg 21.6 | Hub+catalog getting discovery; CTR still thin |
| 90d www fintech | 10 clicks / 57 imps / avg 23.93 | Historical www equity — apex is canonical; improve apex fintech content |
| 90d apex fintech | 0 clicks / 30 imps / avg 11.73 | Apex already stronger avg position; content/linking batch justified |
| 90d www CRM | 1 click / 3 imps | Historical; CRM apex already batch-1 |
| 28d services | 31 imps / 0 clicks (all countries); India 1 imp | Early window; do not over-react |
| Query imps (90d) | on-demand Jaipur 8 @avg~4; Android Jaipur 7 @avg~40.6; fintech Jaipur 6 @avg~38.5 | **Prioritize fintech, on-demand, Android** (not exact city ranks); **avoid Fexle/brand-competitor targeting** |
| Coverage totals (all-site Nov 6) | 392 indexed / 202 not; redirect errors 5; Google-selected canonical duplicates 30; failed validation; 404 66; redirect 45; noindex 26 | **All-site**; many intentional (blog 410, redirects, noindex demos). Exact URLs now partially exported below — **still do not reverse intentional cleanup** |

Old www metrics are historical, not proof the current apex site is “wrong.”

### Exact coverage export examples (report Nov 6) — verify live, no Validate Fix / index writes

**Redirect error (5 examples) — none are `/services`.** Live chains verified 2026-11-09:

| URL | Live first hop | Verdict |
|---|---|---|
| `https://thetrifusion.in/solutions/web-development-company-jaipur` | **308** → apex `/services/website-development` (Link rel=canonical on hop) | Intentional short-slug / solutions→services map (`e2b9132` / `bac8aa6` family). **Do not “fix.”** Last noted crawl Oct 1 is historical. |
| `https://www.thetrifusion.in/blog` | **410** | Intentional blog gone. |
| `https://www.thetrifusion.in/blog/how-to-build-ecommerce-website-india-2026` | **410** | Intentional. |
| `https://www.thetrifusion.in/about` | **308** → apex `/about` (200) | Correct www→apex. |
| `https://www.thetrifusion.in/blog/google-gemini-vs-chatgpt-india-business` | **410** (Sep 18 crawl historical) | Intentional. |

**Google-selected canonical duplicate — 6 service-related of 30 (do not confuse nested fintech paths with root aliases):**

| URL (as reported) | Crawl note | Live check | Action |
|---|---|---|---|
| apex `/services/website-development` | Nov 3 | Apex 200 + self-canonical; www→apex 308 | **Watch** — pre-`e2b9132` crawl; no canonical churn |
| apex `/services/digital-marketing` | Oct 1 | Apex 200 + self-canonical; www→apex 308 | **Watch**; India-title polish in batch 3 only |
| www `/services/fintech-app-development` | Sep 14 | www→apex **308** | Historical www; apex is live canonical |
| www `/services/mlm-crm-development` | Aug 27 | www→apex **308** | Historical |
| www `/services/salesforce` | Aug 22 | www→apex **308** | Historical |
| www `/services/ai-development` | Aug 21 | www→apex **308** | Historical |

**Discovered (not indexed) — 15 examples / 14 services + `/sitemap`.** CSV “1970” crawl dates are placeholders, not real. No index-request writes performed today.

| URL | Batch status |
|---|---|
| `/services` hub | **Changed** (b3) India-primary title/H1 + fintech child chooser links |
| `/services/branding` | **Changed** (b3) India title + sibling links |
| `/services/devops` | **Changed** (b3) India title + sibling links |
| `/services/erp-software-development` | **Changed** (b2) |
| `/services/ev-charging-app-development` | **Changed** (b3) PlugOne + Android internal links; lastmod |
| `/services/fintech-app-development/bbps-software` | **Changed** (b3) who-for + sibling links; lastmod |
| `/services/fintech-app-development/aeps-software` | **Changed** (b3) who-for + sibling links; lastmod |
| `/services/fintech-app-development/dmt-software` | **Changed** (b3) who-for + sibling links; lastmod |
| `/services/fintech-app-development/recharge-software` | **Changed** (b3) who-for + sibling links; lastmod |
| `/services/graphic-design` | **Changed** (b2) |
| `/services/ios-app-development` | **Changed** (b2) |
| `/services/on-demand` | **Changed** (b2) |
| `/services/rpa` | **Changed** (b3) title harden + AI sibling link |
| `/services/ui-ux-design` | **Changed** (b3) India title + sibling links |
| `/sitemap` | lastmod bumped; HTML sitemap already lists services |

**Crawled — currently not indexed (examples):** www `/services/digital-marketing` (Aug 21), www `/services/ui-ux-design` (Aug 20). Live www→apex 308. Treat as historical host split, not a content defect to reverse.

## Geographic / AI scope

All 25 URLs are in SEO + AI-answer scope under the India / Rajasthan / Jaipur-HQ tier plan (`seo-geographic-tier-plan.md`). No new location pages. No robots/training-crawler edits. Portfolio proof uses **long** slugs only:

- `/portfolio/plugone-ev-charging-platform`
- `/portfolio/connect-dairy-supply-chain`
- `/portfolio/atharv-narayan-dairy-logistics-website`
- `/portfolio/dailyconcepts-ecommerce-pos`

Nested fintech children are **module URLs**, not root aliases of `/services/fintech-app-development`. Do not collapse them into the hub or invent NPCI/RBI/bank licences.

## Page-by-page status

Legend: **Changed** = shipped in batch 1–3 · **Adequate** = no material defect this pass · **Owner** = blocked on client facts · **Watch** = GSC observe only · **Intentional** = coverage row that must not be reversed

| URL | Primary intent | Status | Notes |
|---|---|---|---|
| `/services` | Hub / chooser | **Changed** (b1+b3) | India-primary title/H1; links nested payment modules |
| `/services/software-development` | Custom software (India) | **Changed** (b1) · **Watch** | Indexed; last crawl Oct 28 — may need recrawl for b1 HTML |
| `/services/website-development` | Websites (India) | **Changed** (b1) · **Watch** | www Google-selected as of Nov 3 — **no canonical churn** |
| `/services/mobile-app-development` | Cross-platform apps | **Changed** (b1) | Indexed Nov 3 |
| `/services/crm-erp-development` | Custom CRM | **Changed** (b1) | Indexed Nov 8 apex |
| `/services/fintech-app-development` | White-label BBPS/AEPS/DMT hub | **Changed** (b2+b3) | Hub relatedLinks include all 4 children |
| `/services/on-demand` | Hire dedicated developers | **Changed** (b2) | GSC priority |
| `/services/android-app-development` | Play Store-first Android | **Changed** (b2) | GSC priority |
| `/services/ios-app-development` | App Store-first iOS | **Changed** (b2) | Discovered list |
| `/services/ai-development` | AI features / agents | **Changed** (b2) | www duplicate historical |
| `/services/erp-software-development` | Full ERP | **Changed** (b2) | Discovered list |
| `/services/graphic-design` | Campaign graphics | **Changed** (b2) | Discovered list |
| `/services/digital-marketing` | SEO/Ads | **Changed** (b3) · **Watch** | India title; apex canonical unchanged |
| `/services/ui-ux-design` | Figma product UI | **Changed** (b3) | Discovered + www CrawledNI historical |
| `/services/branding` | Identity systems | **Changed** (b3) | Discovered |
| `/services/devops` | CI/CD / cloud | **Changed** (b3) | Discovered |
| `/services/rpa` | Deterministic bots | **Changed** (b3) | Discovered |
| `/services/ev-charging-app-development` | EV CSMS / OCPP | **Changed** (b3) · **Owner** | Store metrics still needed |
| `/services/mlm-crm-development` | MLM compensation CRM | **Adequate** · **Owner** | www duplicate historical |
| `/services/salesforce` | Salesforce Flows/Apex | **Adequate** · **Owner** | www duplicate historical |
| `/services/business-modernization` | Spreadsheet cutovers | **Adequate** | Clear sibling links |
| `/services/fintech-app-development/bbps-software` | BBPS-only | **Changed** (b3) | Distinct who-for; no fabricated BBPOU/NPCI access |
| `/services/fintech-app-development/aeps-software` | AEPS-only | **Changed** (b3) | Distinct who-for; no fabricated bank/device certs |
| `/services/fintech-app-development/dmt-software` | DMT-only | **Changed** (b3) | Distinct who-for; no fabricated RBI licence |
| `/services/fintech-app-development/recharge-software` | Recharge-only | **Changed** (b3) | Distinct who-for; no fabricated operator inventory |

### Owner evidence still required (do not invent) — **blocked**

| Need | Blocks |
|---|---|
| Play / App Store URLs + ratings | Android, iOS, mobile, EV claims depth |
| Named API aggregators / banks (permissioned) | Fintech partner logos |
| Monthly seat rate card (if desired public) | On-demand pricing table |
| Outcome metrics / screenshots | ERP, CRM, software, branding, UI/UX case studies |
| GBP / Clutch URLs | `sameAs`, local pack |
| Full remaining “not indexed” / 404 / noindex URL export | Surgical fixes beyond the examples above |
| Permission to reverse any intentional 410/noindex | Must not guess |

## Batch history

1. **Batch 1 — `ded8efb`:** core4 + portfolio case studies + hub/home + schema LB `@id` + docs  
2. **Batch 2 — `e4e196f`:** fintech, on-demand, android (+ ios/ai/erp/graphic); GSC performance-informed; website canonicals untouched  
3. **Batch 3 — this commit:** Nov 6 coverage export → verify redirect errors (no code change); nested fintech who-for + linking; India titles for hub/branding/devops/ui-ux/digital/rpa/ev; observe window until **Mon 16 Nov 2026 ~11:00 IST** — **avoid daily churn**

## Observe window (through Mon 16 Nov 2026 ~11:00 IST)

- Do **not** request Validate Fix / mass re-index from this agent unless the owner explicitly writes.  
- Watch apex website + digital-marketing Google-selected canonical after prior www→apex 308s.  
- Watch Discovered → Indexed movement on nested BBPS/AEPS/DMT/recharge and hub.  
- Next code batch only if: new URL-level defects, owner evidence arrives, or observe window ends with clear gaps.
