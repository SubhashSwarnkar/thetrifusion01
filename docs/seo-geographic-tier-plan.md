# Geographic tier plan (India / Rajasthan / Jaipur)

Organic Google **and** AI-answer surfaces (AI Overviews / AI Mode, Bing/Copilot, ChatGPT Search, Perplexity, etc.) share the same URL map. Scope is **India + Rajasthan + authentic Jaipur HQ** — not Jaipur-only, and not a fake nationwide office network.

**Baselines:** National (India) and Rajasthan rank/visibility for commercial queries are **not yet measured** in this repo pass. Parent is gathering GSC (India + global, 28/90-day, `/services/` and core-4 inspections). Do not invent positions. Refine keyword priorities after that evidence arrives.

## Tier rules

| Tier | Geography | Where it lives | What to do | What not to do |
|---|---|---|---|---|
| **T1 — National** | India (primary commercial intent) | Stable `/services/*` (and ecommerce `/solutions/ecommerce-website-development`) | One capability URL per intent; India-first title/H1 when the buyer brief is national; truthful Jaipur/Rajasthan HQ in body, NAP, schema | Repeat “Jaipur / Rajasthan / India” in every heading; invent pan-India offices or “serving every city” guarantees |
| **T2 — State context** | Rajasthan | Same T1 URLs + About/contact/NAP; selective body mentions | Authentic presence: studio in Jaipur, Rajasthan; remote delivery elsewhere in the state/country | Mass `/services-*-rajasthan` clones; keyword stuffing state name |
| **T3 — City flavour** | Jaipur (HQ) | Existing `/solutions/*-jaipur` (and other already-live city solutions only) | Local industry examples for the Patrakar Colony studio; link **to** T1 money URLs | New speculative city/regional service pages; treating T3 as the national canonical |

Non-Jaipur city solution slugs that already 308 into T1 services stay as redirects — do not revive them as thin landing farms.

## Core-4 intent → URL (national canonicals)

| Primary buyer intent | Canonical URL | Geo posture |
|---|---|---|
| Custom software / portals / APIs | `/services/software-development` | India capability; Jaipur studio |
| Business / marketing websites | `/services/website-development` | India capability; Jaipur studio |
| Cross-platform mobile apps | `/services/mobile-app-development` | India capability; Jaipur studio |
| Custom CRM (not full ERP) | `/services/crm-erp-development` | India capability; Jaipur studio |
| Hub / chooser | `/services` | Routes to the four without duplicating deep FAQs |

Sibling intents stay on their own URLs (ERP, iOS-only, Android-only, ecommerce) to limit cannibalization.

## Title / H1 guidance

- Prefer **India + service** as the primary phrase on T1 pages when the query class is national.
- Keep **Jaipur Studio** (or equivalent) as a secondary authenticity signal — once in title/H1 is enough.
- Put denser Jaipur industry copy on T3 solutions pages, not by cloning T1.
- Never claim offices, clients, or coverage that are not evidenced in the repo / live portfolio.

## AI-answer visibility (same content system)

AI answer features generally need **crawlable, citeable, factual HTML** — the same bar as classic SEO. This plan does **not** treat `llms.txt` as a ranking lever. **No live AI inclusion has been tested for this site; do not claim AI Overview / Copilot / ChatGPT Search / Perplexity presence.**

### Official requirements checked (2026-11-09) — crawler policy unchanged

| Source | What we verified | Action this batch |
|---|---|---|
| [Google AI features](https://developers.google.com/search/docs/appearance/ai-features) | Eligibility = ordinary indexing + snippet eligibility; helpful content; **no** mandatory AI markup or `llms.txt` (Google ignores `llms.txt` for Search) | No robots change; keep SSR factual pages |
| [OpenAI crawlers](https://developers.openai.com/api/docs/bots) | **OAI-SearchBot** = ChatGPT Search discoverability; **GPTBot** = training (independent). ChatGPT-User = user-triggered fetch, not Search opt-out | Keep existing Allow for OAI-SearchBot; **do not newly open/expand training bots**; no GPTBot policy flip without owner decision |
| Bing / Copilot | Discoverability depends on the **Bing index** (Bingbot crawl) — same useful indexed pages | No special Copilot markup; Bingbot already covered by `*` / explicit Allow |
| Perplexity | Search crawler (**PerplexityBot**) distinct from user-fetch agents per vendor docs | PerplexityBot already Allowed like `*`; no training-bot expansion |

Pre-existing `robots.js` already Allows `*` (and named agents including Googlebot, Bingbot, OAI-SearchBot, PerplexityBot) with the shared private-path `Disallow` list. Explicit `GPTBot` / `Google-Extended` / `ClaudeBot` Allows were **already live** before this batch — this ship neither adds new training agents nor rewrites data-use policy.

| Lever | Status / rule |
|---|---|
| SSR useful answers + FAQs on money URLs | Ship / maintain (core-4 batch) |
| Verifiable portfolio case studies | Ship (indexable when ≥300 words + live credit) |
| Consistent Organization / LocalBusiness NAP | Schema + `llms.txt` + visible footer/contact |
| Apex canonicals, www one-hop, no blog soft-404s | Preserve middleware (`e2b9132`, `bac8aa6`, `/blog` 410) |
| Search crawler allow | Verified Allowed — **no robots.txt edits in this batch** |
| Training crawlers / data-use policy | Unchanged — do not open additional training agents here |
| `llms.txt` | Citation aid for other systems only; not a Google ranking lever; no visibility guarantees |
| Measuring AI citations | **Not tested / not measured** — forbidden to claim inclusion |

## Weekly adaptation (after GSC evidence)

1. Ingest parent’s 28/90-day GSC (India + global, `/services/`, core-4 URL inspections).
2. Separate **India-national** vs **Rajasthan/Jaipur-local** query classes.
3. Adjust title/H1/FAQ only where queries prove a gap — one intent per URL.
4. Do not add mass pages or blogs to “cover” every geo variant.

See also: `seo-jaipur-onsite-batch-2026-11-09.md`, `seo-weekly-tracking.md`, `seo-offpage-runbook.md`.
