# Kobido Studio — website

Marketing website for a Kobido (Japanese facial lifting massage) practice in Sosnowiec, Poland.
Built for a real client: a minimalist, Polish-language static site with online booking.

**Live preview:** https://karolkoz22.github.io/kobido-website/ (dev preview, `noindex`)

## Features

- **Online booking** through a Google Calendar Appointment Schedule, in one of two modes:
  - `link`: a custom-styled booking card that opens Google's booking page (default)
  - `embed`: Google's calendar inlined as an iframe
  - If no booking URL is configured, the page falls back to a phone call-to-action
- **Single source of content:** phone, hours, pricing, certificates and testimonials all live in
  [`src/config/site.ts`](src/config/site.ts), so the client's edits never touch page markup
- **Almost no JavaScript:** static output, and the only client-side script is the mobile menu toggle
- **Privacy-friendly embeds:** YouTube Shorts load behind a click-to-play facade (`youtube-nocookie`),
  and the map is a keyless Google Maps embed
- **Light and dark themes:** a warm "espresso" dark palette that follows the OS setting, plus a toggle
  that remembers the visitor's choice and is applied before first paint (no flash of the wrong theme)
- **Custom line-icon set** (`src/utils/icons.ts`) with micro-animations on hover: the phone rings,
  the envelope opens, the map pin bounces, the clock hand turns
- **Mobile-first:** sticky "Call / Book" bar on small screens and a responsive layout
- **Sub-path aware:** every internal link goes through a `url()` helper, so the same build works
  on GitHub Pages (`/kobido-website/`) and on a custom domain (`/`)

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro 5](https://astro.build) (static output) |
| Styling | Plain CSS with design tokens in `:root`, plus component-scoped styles |
| Fonts | Cormorant Garamond + Jost (Google Fonts, `latin-ext`) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions: build and deploy on every push to `main` |

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, what Kobido is, process steps, pricing, about teaser, testimonials |
| `/o-mnie` | About the therapist, values, certificates |
| `/rezerwacja` | Booking |
| `/kontakt` | Contact details, opening hours, map |
| `/polityka-prywatnosci` | Privacy policy (GDPR) |

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and publishes it to
GitHub Pages. `SITE_URL` and `BASE_PATH` come from the repository owner and name, so a fork or a
renamed repo deploys correctly with no config changes.
