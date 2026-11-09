# Service SEO + AI-answer visibility — on-site batch (2026-11-09)

Evidence-backed first implementation for indexed `/services` money URLs aimed at **India / Rajasthan buyers with authentic Jaipur HQ context** (not Jaipur-only). Covers classic Google organic **and** AI-answer surfaces that cite the same HTML. **Not a ranking or citation promise.** Parent/public strategy + deep GSC (India + global) still gathering — refine keywords after that evidence. Another executor owns competitor/off-page research; this note owns repo investigation + shipped code.

Geographic tiers: see `docs/seo-geographic-tier-plan.md`.

## Measured baseline (supplied 2026-11-09)

| Signal | Value |
|---|---|
| GSC India Web, `/services/` only, 12 Oct–8 Nov | 0 clicks, 1 impression, avg position 78 (query: salesforce / fexle jaipur) |
| Last known apex indexed (7 Nov) | software-development, mobile-app-development, android-app-development, mlm-crm-development, ai-development, crm-erp-development, fintech-app-development, salesforce, business-modernization |
| Historical www indexed | website-development (canonical must remain apex) |
| All 24 detail + hub | Request-indexed in GSC (not a guarantee of indexing) |
| Ten Jaipur commercial keywords | Absent from first 10 organic results actually inspected (not measured beyond 10; not verified as real local-user position) |

**Root-cause distinction:** Age/authority and off-page NAP gaps can dominate early classic **and** AI-answer visibility. Code can fix crawl clarity, intent separation, internal links, honest proof pages, and thin/false on-page copy — not domain authority or unearned AI citations overnight.

**Rank baselines not yet measured:** India-national and Rajasthan commercial SERP positions (beyond the supplied “ten Jaipur keywords absent from top-10 inspected”) await parent GSC + SERP evidence. Do not fabricate them here.

## Primary intent map (one intent → one canonical URL)

| Canonical URL | Primary buyer intent | Geo posture | Do not target here |
|---|---|---|---|
| `https://thetrifusion.in/services` | Chooser / hub | India hub | Deep capability FAQs |
| `/services/software-development` | Custom software, portals, APIs, ops tools | **T1 India** + Jaipur studio | Brochure websites; CRM-only pipelines |
| `/services/website-development` | Business / marketing websites | **T1 India** + Jaipur studio | Role-based portals; pure catalogue ecommerce |
| `/services/mobile-app-development` | Cross-platform iOS+Android product | **T1 India** + Jaipur studio | Store-only iOS or Android; websites |
| `/services/crm-erp-development` | Custom CRM (pipelines, quotes, WhatsApp notes) | **T1 India** + Jaipur studio | Full ERP (finance/GST/warehouse/MRP) |
| `/services/erp-software-development` | Full ERP modules | T1 India | Sales CRM-only |
| `/services/ios-app-development` | App Store / iPhone-first | T1 India | Cross-platform MVP overview |
| `/services/android-app-development` | Play Store-first | T1 India | Cross-platform MVP overview |
| `/solutions/*-jaipur` (existing only) | **T3** local industry flavour | Jaipur HQ | Replacing the `/services` national canonical |

Preserve service slugs. Do not delete/noindex money pages. Do not invent mass city/regional service pages.

## Audit findings (repo + live SSR, 9 Nov)

| Area | Finding | Evidence |
|---|---|---|
| SSR metadata / H1 | Present and apex-canonical on priority URLs | Live `title` / `link[rel=canonical]` / single `h1` on each money URL |
| Content volume | Priority pages already long (~2.7k–4.1k words) via overlays | Live HTML word counts |
| Thin / risky base copy | Legacy `servicesData` still shipped “premier / future-forward” blocks and **“over 8 years of experience”** industry text conflicting with “operating since 2023” | `src/data/servicesData.js` industries |
| Portfolio proof | Live credits existed but **noindex** because `caseStudy` &lt; 300 words → **0** portfolio URLs in sitemap | `isIndexablePortfolio()`, live `robots: noindex` |
| Internal links | Hub + late homepage index linked money URLs; early homepage `Services` cards omitted software + CRM; hero body under-linked them | `json/landingPageData.js` `Services`, `parts/Hero.js` |
| Related links | Mobile “Flutter vs React Native” pointed at self without a section jump | `servicePlan/mobile-app-development.js` |
| Trust strip | Demo `pages.dev` / `vercel.app` concept sites listed under “Our clients” | `BrandTrustStrip.js` |
| Schema | Organization + LocalBusiness shared `@id` `/#organization` | `lib/schema.js` |
| Crawl / redirects | www→apex one-hop 308; `/blog` 410; short slugs 308 — must not regress | Live `curl -I` |
| Search crawlers | Official check 9 Nov: Google AI = ordinary index/snippet eligibility ([AI features](https://developers.google.com/search/docs/appearance/ai-features)); OpenAI **OAI-SearchBot** ≠ **GPTBot** ([bots](https://developers.openai.com/api/docs/bots)); PerplexityBot = search not foundation training ([Perplexity bots](https://docs.perplexity.ai/guides/bots)); Bing/Copilot via Bing index/Bingbot. Live `/robots.txt` already Allows search agents with shared Disallow — **no robots edits this batch**; **no new training bots opened** | Official docs + live robots |
| Training vs search | Unchanged data-use posture; do not flip GPTBot/Google-Extended without owner decision | Owner policy |
| `llms.txt` | Citation aid for other systems; Google ignores for Search; **not** a ranking lever; **no tested live AI presence — inclusion claims forbidden** | `public/llms.txt` note + Google AI docs |
| Org identity | Legal name + Jaipur NAP in schema/`llms.txt`/contact; LocalBusiness `@id` split from Organization in this batch | `lib/schema.js` |
| What code cannot fix | Domain age, backlinks, GBP reviews, competitor SERP authority, unmeasured AI citations | Off-page runbook + waiting on GSC |

## Changes in this batch

1. **Indexable case studies** for PlugOne, Connect Dairy, Atharv Narayan, DailyConcepts (≥300 words, visible on `/portfolio/*`, no invented metrics).
2. **Homepage discoverability** — early service cards + hero body link software / website / mobile / CRM.
3. **Hub chooser copy** — routes buyers to the four money URLs and names sibling intents.
4. **Priority servicePlan overlays** — truthful banners/features; suppress legacy false industry tenure blocks; deepen portfolio deep-links; CRM FAQ depth; mobile self-link → `#flutter-vs-rn-vs-native`.
5. **National (India) titles/H1** on core-4 — India-primary with Jaipur Studio secondary; body keeps Rajasthan HQ honesty (no fake nationwide offices).
6. **BrandTrustStrip** — live client URLs only; clearer heading.
7. **Schema** — LocalBusiness `@id` → `/#localbusiness` with `parentOrganization`.
8. **`llms.txt`** — core-4 primary topics + live portfolio citation URLs; blog 410 note; explicit non-ranking disclaimer.
9. **Docs** — geographic tier plan, weekly tracking, this audit.
10. **Sitemap lastmod** — hub, homepage, portfolio hub, four services (`contentUpdatedAt: 2026-11-09`), portfolio items with case studies.

## Files touched (expected)

- `src/json/landingPageData.js`
- `src/parts/PortfolioDetail.js`
- `src/parts/Hero.js`
- `src/components/BrandTrustStrip.js`
- `src/views/ServicesPage.js`
- `src/data/servicePlan/{software,website,mobile-app,crm-erp}-development.js`
- `src/lib/schema.js`
- `src/lib/sitemaps.js`
- `docs/seo-jaipur-onsite-batch-2026-11-09.md`
- `docs/seo-geographic-tier-plan.md`
- `docs/seo-weekly-tracking.md`
- `public/llms.txt`

## Preserve / do not regress

- `fa4bbc3` branded favicon
- `254013a` expired Diwali removal
- `e2b9132` apex trailing-slash www single-hop
- `bac8aa6` short service slug → `*-development` 308s
- Apex canonicals `https://thetrifusion.in…`
- No `/blog` revival; no pricing/NAP/offer changes; no Bhilwara-as-HQ claims

## Client inputs still required (factual)

See weekly tracking doc. Highlights: GBP URL, Clutch/GoodFirms when live, verifiable outcome metrics, store listing URLs, office photos, founder LinkedIn, DPIIT certificate number, permission for more named clients.
