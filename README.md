# TheTriFusion (Next.js)

Next.js App Router version of TheTriFusion website — same UI/UX, EmailJS, and pages as `trifusion01`.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- EmailJS (`@emailjs/browser`)
- Framer Motion, Swiper, Headless UI, Toastify

## Setup

```bash
cd trifusion02
npm install
cp .env.local.example .env.local   # if needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — start production server

## Env vars

Use `NEXT_PUBLIC_` prefix (replaces CRA `REACT_APP_`):

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID`
- `NEXT_PUBLIC_OPENAI_API_KEY` (optional, AI estimator)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` (optional)

Contact form EmailJS is configured in `src/parts/DiscussForm.js` (same service/template as CRA).

## Structure

```
src/
  app/          # Next.js routes
  views/        # Page UI (migrated from CRA pages)
  components/
  parts/
  data/
  elements/
  utils/
  assets/
```
