# Off-page SEO and tracking runbook (Phase 3)

Use this after the on-site work in Phases 1–2. None of this is done by deploying the repo.

**NAP to copy everywhere:** Trifusion Infotech Private Limited (TheTriFusion), Jaipur, Rajasthan, India. Phone and email from the live site footer. Set `NEXT_PUBLIC_COMPANY_STREET` so LocalBusiness JSON-LD matches Google Business Profile exactly.

**Live proof URLs:** [plugone.in](https://plugone.in/), [dailyconceptsindia.com](https://dailyconceptsindia.com), [connectdairy.in](https://www.connectdairy.in/), [atharvnarayan.in](https://www.atharvnarayan.in/).

## Fastest two (do first)

1. **Clutch.co** — Create the company profile, add the four live projects, request client reviews. Same legal name and Jaipur city as the website.
2. **Google Business Profile** — Create/verify the Jaipur office. Categories: Software company / Website designer. Service area: Rajasthan (including Bhilwara) and India. Do not create a fake Bhilwara storefront.

## Directories

3. GoodFirms and DesignRush — same NAP, same portfolio URLs.
4. IndiaMART and Justdial — competitors are listed; use the Jaipur address only.

## Authority and reviews

5. Ask delivered clients for a “Developed by TheTriFusion” credit plus a dofollow link to `https://www.thetrifusion.in`.
6. LinkedIn company page: one post per new live project (PlugOne, DailyConcepts, Connect Dairy pattern).
7. Ask clients for Google reviews (GBP) and Clutch testimonials after a successful launch.
8. Guest posts: dev.to, Hashnode, or Indian startup blogs — link back to a niche service page (MLM CRM, EV charging, fintech), not only the homepage.

## Tracking (already in the product)

- GA4: `G-NSKGY1KSP4` (see `.env.example`). If the same GA4 stream also fires inside GTM `GTM-M8RQSNHN`, keep one source only to avoid double pageviews.
- Search Console: HTML file `public/google3205c300891a938f.html` is in the repo. In GSC: verify the `www.thetrifusion.in` property if needed, then submit `https://www.thetrifusion.in/sitemap.xml`.

## Every 30 days

1. GSC → Performance: sort by impressions, note new queries.
2. Ship or update two India/Jaipur posts that match those queries (see comment at the top of `src/data/blogData.js`).
3. Recheck SecurityHeaders.com after deploy (HSTS and related headers are in `next.config.mjs`).
4. Recheck PageSpeed Insights mobile + desktop on `/`, `/services/website-development`, and one niche URL.

## Three months later

Re-run the original 50-point list: what shipped, what ranks, what still needs a live client URL (MLM CRM remains confidential until the client agrees).

City service-area pages (Ajmer / Udaipur / Kota) are **out of scope** until a city is chosen.
