# Weekly SEO + AI-answer tracking (India / Rajasthan / Jaipur HQ)

Targets below are **measurement goals**, not ranking or AI-citation promises. Fill every Monday (or first working day). Keep raw exports out of git if they contain personal Search Console emails; summarise numbers here.

**Scope:** India-national + Rajasthan context + authentic Jaipur HQ — see `seo-geographic-tier-plan.md`. Parent is still gathering deep GSC (90-day no-filter, `/services/`, 28-day all-site, core-4 URL inspections, India + global). **National and Rajasthan rank baselines are not yet measured** — leave cells blank until evidence arrives; do not invent positions.

Canonical property: apex `https://thetrifusion.in` (URL-prefix or Domain). Do not treat www as canonical. AI Overviews / Bing Copilot / ChatGPT Search citations are logged only when **actually observed**.

## Priority URL set (batch 1)

| URL | Primary intent |
|---|---|
| `/` | Brand + path to money services |
| `/services` | Hub / chooser |
| `/services/software-development` | Custom software |
| `/services/website-development` | Websites |
| `/services/mobile-app-development` | Cross-platform apps |
| `/services/crm-erp-development` | Custom CRM |
| `/portfolio/plugone-ev-charging-platform` | Live proof |
| `/portfolio/connect-dairy-supply-chain` | Live proof |
| `/portfolio/atharv-narayan-dairy-logistics-website` | Live proof |
| `/portfolio/dailyconcepts-ecommerce-pos` | Live proof |

## Weekly checklist

1. **GSC → Performance** (last 7 days + last 28 days; when available also 90-day): clicks, impressions, CTR, average position for:
   - Filter page: `/services/`
   - Filter page: each priority URL above
   - Query classes separately: **India-national**, **Rajasthan**, **Jaipur-local** (do not mash into one “geo” bucket)
   - Country dimension: India vs other (global) when parent export includes it
2. **GSC → Pages / Indexing**: which priority URLs are Indexed vs Discovered/Crawled-not-indexed; note any soft-404 or redirect issues. Include the four portfolio case URLs after this batch.
3. **Crawl sanity (manual, 5 min):**
   - `curl -sI https://www.thetrifusion.in/services/website-development` → one-hop 308 to apex
   - `curl -sI https://thetrifusion.in/blog` → 410
   - Spot-check SSR: `title`, `canonical`, one `h1` on each changed money URL
   - Confirm `/robots.txt` still Allows Googlebot / Bingbot / OAI-SearchBot / PerplexityBot on `/` (no speculative robots edits)
4. **Sitemap:** confirm priority URLs appear in `sitemap-services.xml` / `sitemap-pages.xml` with expected lastmod after material deploys.
5. **AI-answer log (optional, observation-only):** if a money URL is cited in AI Overview / Copilot / ChatGPT Search / Perplexity for a real query, note query + URL + date. Never invent citations.
6. **Log row** in the table below (add a row each week).

## Log

| Week starting | /services/ clicks | /services/ impr. | India vs RJ vs Jaipur query notes | AI citations observed? | Notes |
|---|---:|---:|---|---|---|
| 2026-11-03 (baseline window ends 8 Nov) | 0 (Oct12–Nov8 India /services) | 1 (India) | Only early India sample; **national/RJ baselines incomplete** | Not measured | See batch doc |
| 2026-11-09 (READONLY GSC) | 11 (90d global /services) | 210 (90d) | www fintech historical clicks; apex fintech 30 imps; on-demand/Android/fintech Jaipur query imps; website www duplicate as of crawl Nov3 pre-e2b9132 | Not measured | Informs batch 2; no canonical churn; see `seo-services-coverage-audit.md` |
| 2026-11-09 (coverage export Nov6) | — | — | Redirect errors 5 verified intentional (308/410); 6 service canonicals mostly historical www; Discovered 14 services + /sitemap | Not measured | Batch 3 nested fintech + remaining discovered titles; **observe until Mon 16 Nov ~11:00 IST** — no daily churn |
| 2026-11-10 | | | | | Post batch-2 deploy — record actuals |

## 30 / 60 / 90 day workplan (priorities + measurable targets)

Targets = what to measure. They are not guarantees.

### Day 0–30 (on-site hardening + proof)

| Priority | Work | Measurable target |
|---|---|---|
| P0 | Keep money URLs crawlable; no redirect regressions | Weekly curl checks green |
| P0 | Portfolio case studies indexed (Request indexing once after deploy if still “Discovered”) | GSC shows Indexed (or clear reason if not) for 4 live case URLs |
| P1 | Internal links from home + hub stay on apex | Screaming Frog / site: or HTML grep: early homepage links include 4 money URLs |
| P1 | GSC query harvest | ≥5 new non-brand queries with impressions on `/services/*` (even position &gt;20) |
| P2 | Client: claim/correct GBP + directories (off-page runbook) | NAP matches `docs/seo-offpage-runbook.md` |

### Day 31–60 (depth without cannibalization)

| Priority | Work | Measurable target |
|---|---|---|
| P1 | Enrich next money pages only if shared templates need the same honesty pass (ios/android/erp) | Same “false tenure / demo-as-client” classes gone |
| P1 | Add owner-supplied metrics/screenshots only when verified | At least one case study gains a client-approved metric or screenshot |
| P2 | Improve CTR on pages that earn impressions (title/meta tests grounded in query report) | CTR movement recorded; no keyword stuffing |
| P2 | Off-page: Clutch/GoodFirms + one client dofollow credit ask | Profile live OR documented blocker |

### Day 61–90 (authority + iteration)

| Priority | Work | Measurable target |
|---|---|---|
| P1 | Re-audit SERP presence for the ten Jaipur commercial keywords (first page only, same method as baseline) | Document presence/absence honestly; no fabricated ranks |
| P1 | Expand helpful FAQs only where GSC queries show real gaps | New FAQ maps to an observed query |
| P2 | Decide blog strategy separately (still 410 today) — small India guides only if resourcing exists | If restored: no off-topic posts; each links to one money URL |
| P2 | Quarterly off-page NAP re-pass | Checklist in `seo-offpage-runbook.md` updated with dates |

## Items needing factual client / owner input

| Item | Why blocked in code |
|---|---|
| Google Business Profile URL | Needed for `sameAs` + geo pin; do not invent coords |
| Clutch / GoodFirms / other directory URLs | Only add to `sameAs` when live |
| Aggregate ratings | Intentionally omitted until third-party reviews exist |
| Outcome metrics (orders, sessions, % time saved) | Not in repo; case studies omit them |
| App Store / Play Store links + download counts | Not in repo |
| Additional named clients | Need permission |
| Founder personal LinkedIn | TODO in `lib/schema.js` |
| DPIIT certificate number | Before any `hasCredential` |
| Office photos | For visit-us blocks |
| Exact team size / years phrasing beyond “about ten” / “since 2023” | Already used carefully; do not invent “8 years” |

## Related docs

- `docs/seo-jaipur-onsite-batch-2026-11-09.md` — this week’s audit + shipped changes
- `docs/seo-offpage-runbook.md` — GBP/directories/NAP (manual)
