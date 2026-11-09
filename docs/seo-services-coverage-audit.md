# All `/services` coverage audit (updated 2026-11-09)

Inventory = **25** sitemap URLs: `/services` hub + **20** detail slugs + **4** fintech children. Source: live `sitemap-services.xml` (Success in GSC Nov 9) + `src/data/servicesData.js` / fintech product pages.

**Not claimed:** all 25 “fully optimized.” Status is evidence-based. **No ranking / AI-inclusion promises.**

## Fresh GSC inputs (READONLY, Nov 9) — inform priority, do not invent causes

| Signal | Value | Implication for code |
|---|---|---|
| Core4 URL Inspection | software indexed (last crawl Oct 28); mobile indexed Nov 3; CRM indexed Nov 8 apex; **website** apex = Duplicate, Google chose `www…/website-development`, last crawl **Nov 3** (before `e2b9132` Nov 7) | **Do not churn website canonicals**; observe recrawl (request accepted Nov 7) |
| 90d Aug11–Nov8 `/services` global | 11 clicks / 210 imps / avg 21.6 | Hub+catalog getting discovery; CTR still thin |
| 90d www fintech | 10 clicks / 57 imps / avg 23.93 | Historical www equity — apex is canonical; improve apex fintech content |
| 90d apex fintech | 0 clicks / 30 imps / avg 11.73 | Apex already stronger avg position; content/linking batch justified |
| 90d www CRM | 1 click / 3 imps | Historical; CRM apex already batch-1 |
| 28d services | 31 imps / 0 clicks (all countries); India 1 imp | Early window; do not over-react |
| Query imps (90d) | on-demand Jaipur 8 @avg~4; Android Jaipur 7 @avg~40.6; fintech Jaipur 6 @avg~38.5 | **Prioritize fintech, on-demand, Android** (not exact city ranks) |
| Coverage (all-site Nov 6) | 392 indexed / 202 not; redirect errors 5; Google-selected canonical duplicates 30; failed validation; 404 66; redirect 45; noindex 26 | **All-site**; many intentional (blog 410, redirects, noindex demos). Exact error URLs not exported — **do not speculate or reverse cleanup** |

Old www metrics are historical, not proof the current apex site is “wrong.”

## Geographic / AI scope

All 25 URLs are in SEO + AI-answer scope under the India / Rajasthan / Jaipur-HQ tier plan (`seo-geographic-tier-plan.md`). No new location pages. No robots/training-crawler edits. Portfolio proof uses **long** slugs only:

- `/portfolio/plugone-ev-charging-platform`
- `/portfolio/connect-dairy-supply-chain`
- `/portfolio/atharv-narayan-dairy-logistics-website`
- `/portfolio/dailyconcepts-ecommerce-pos`

## Page-by-page status

Legend: **Changed** = shipped in batch 1 (`ded8efb`) and/or batch 2 (this commit) · **Adequate** = no material defect found this pass · **Owner** = blocked on client facts · **Watch** = GSC observe only

| URL | Primary intent | Status | Notes |
|---|---|---|---|
| `/services` | Hub / chooser | **Changed** (b1) | Intent router to money URLs; lastmod 2026-11-09 |
| `/services/software-development` | Custom software (India) | **Changed** (b1) · **Watch** | Indexed; last crawl Oct 28 — may need recrawl for b1 HTML |
| `/services/website-development` | Websites (India) | **Changed** (b1) · **Watch** | www Google-selected canonical as of Nov 3 crawl — **no canonical churn**; await apex recrawl |
| `/services/mobile-app-development` | Cross-platform apps | **Changed** (b1) | Indexed Nov 3 |
| `/services/crm-erp-development` | Custom CRM | **Changed** (b1) | Indexed Nov 8 apex |
| `/services/fintech-app-development` | White-label BBPS/AEPS/DMT hub | **Changed** (b2) | GSC priority; who-for + child routing; industries cleared; apex emphasis |
| `/services/on-demand` | Hire dedicated developers | **Changed** (b2) | GSC priority (Jaipur query imps @ strong avg); seat vs project; no invented rates |
| `/services/android-app-development` | Play Store-first Android | **Changed** (b2) | GSC priority; India title; long portfolio links; checklist self-anchor |
| `/services/ios-app-development` | App Store-first iOS | **Changed** (b2) | Long PlugOne portfolio link; industries cleared |
| `/services/ai-development` | AI features / agents | **Changed** (b2) | Fixed self-related link; India title; industries cleared |
| `/services/erp-software-development` | Full ERP | **Changed** (b2) | India title; long portfolio links; industries cleared |
| `/services/graphic-design` | Campaign graphics | **Changed** (b2) | Removed cutting-edge industry fluff; India-leaning title |
| `/services/ev-charging-app-development` | EV CSMS / OCPP | **Adequate** | Already long PlugOne link + deep FAQs; **Owner**: store metrics |
| `/services/mlm-crm-development` | MLM compensation CRM | **Adequate** | Distinct intent; **Owner**: named public client |
| `/services/salesforce` | Salesforce Flows/Apex | **Adequate** for now | India title already; **Owner**: org screenshots |
| `/services/business-modernization` | Spreadsheet cutovers | **Adequate** for now | Clear sibling links |
| `/services/rpa` | Deterministic bots | **Adequate** for now | Clear vs AI |
| `/services/devops` | CI/CD / cloud | **Adequate** for now | Rich page; optional later India-title polish |
| `/services/digital-marketing` | SEO/Ads | **Adequate** for now | No ranking guarantees already; optional later title polish |
| `/services/ui-ux-design` | Figma product UI | **Adequate** for now | Optional later India-title polish |
| `/services/branding` | Identity systems | **Adequate** for now | Optional later India-title polish |
| `/services/fintech-app-development/bbps-software` | BBPS-only | **Adequate** | Child of fintech hub |
| `/services/fintech-app-development/aeps-software` | AEPS-only | **Adequate** | Child of fintech hub |
| `/services/fintech-app-development/dmt-software` | DMT-only | **Adequate** | Child of fintech hub |
| `/services/fintech-app-development/recharge-software` | Recharge-only | **Adequate** | Child of fintech hub |

### Owner evidence still required (do not invent)

| Need | Blocks |
|---|---|
| Play / App Store URLs + ratings | Android, iOS, mobile, EV claims depth |
| Named API aggregators / banks (permissioned) | Fintech partner logos |
| Monthly seat rate card (if desired public) | On-demand pricing table |
| Outcome metrics / screenshots | ERP, CRM, software case studies |
| GBP / Clutch URLs | `sameAs`, local pack |
| Exact GSC “not indexed” / duplicate URL export | Surgical fixes without guessing |

## Batch history

1. **Batch 1 — `ded8efb`:** core4 + portfolio case studies + hub/home + schema LB `@id` + docs  
2. **Batch 2 — this commit:** fintech, on-demand, android (+ ios/ai/erp/graphic defect fixes); GSC-informed; website canonicals untouched  

Next batches: only after more URL-level GSC exports or clear remaining defects (devops/ui-ux/branding/digital title polish if still Jaipur-heavy without buyer benefit).
