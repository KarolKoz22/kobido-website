# CLAUDE.md — Kobido Studio website

Context for Claude (and humans) working on this project.

## What this is
A minimalist, Polish-only marketing site for a **Kobido facial massage** practice run by one woman
(the therapist). Currently a **template / dev preview** shared with the client — most content is
placeholder text marked `TODO` or wrapped in `[...]`.

Inspired by the structure of trenerkrzeminski.pl (hero → process steps → pricing tiers → about teaser
→ testimonials → CTA, sticky "book" button), but calmer and more minimal.

## Stack
- **Astro 5** (static output, zero client JS except the mobile menu toggle). Pinned to 5.x because the
  local machine runs Node 20; Astro 6+ may need Node 22.
- Plain CSS: global tokens in `src/styles/global.css`, component styles scoped in `.astro` files.
- Fonts: Google Fonts — Cormorant Garamond (headings) + Jost (body), `latin-ext` for Polish characters.
- No backend. Booking = Google Calendar Appointment Schedule (iframe). Map = keyless Google Maps embed.

## Commands
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview
```

## Structure
```
src/
  config/site.ts        ← SINGLE SOURCE OF CONTENT: brand, owner, phone, email, address, hours,
                          social links, bookingUrl, services (pricing), certificates, testimonials
  layouts/BaseLayout.astro   <head>, fonts, noindex meta, Header/Footer/MobileCTA
  components/
    Header.astro         sticky nav + mobile burger
    Footer.astro
    MobileCTA.astro      fixed bottom bar on mobile (Zadzwoń / Zarezerwuj)
    SectionHeading.astro eyebrow + h2 + optional slot text
    ServiceCard.astro    pricing card (featured variant)
    CtaBand.astro        "book now" band used at page bottoms
    BookingEmbed.astro   booking card + button to Google booking page (bookingMode 'link'),
                         or Google iframe ('embed'), or phone fallback when bookingUrl is empty
    ShortsGallery.astro  YouTube Shorts (click-to-play facade, youtube-nocookie) — `videos` in site.ts
    MotifMarquee.astro   animated strip of line icons + words (used on /o-mnie instead of stats)
    ImagePlaceholder.astro  photo slot: pass `src` for a real image (warm-tinted), omit for striped placeholder
  pages/
    index.astro          Strona główna (hero, czym jest Kobido, kroki, cennik #oferta, o mnie teaser, opinie)
    o-mnie.astro         About the therapist: bio, motif marquee, values, certyfikaty
    rezerwacja.astro     Booking (BookingEmbed + practical info)
    kontakt.astro        Phone, email, address, hours, map
    polityka-prywatnosci.astro  RODO placeholder — must be filled in before production
    404.astro
  styles/global.css      design tokens (colors, fonts), buttons, grid, cards
  utils/url.ts           url() helper — prefixes BASE_URL
public/
  images/                photos go here (see images/README.md); certyfikaty/ for certificate scans
  robots.txt             Disallow all (dev)
.github/workflows/deploy.yml  GitHub Pages deploy on push to main
```

## Content decisions (from client)
- Owner: Agnieszka Kozłowska, studio at ul. Szkolna 4/28, 41-200 Sosnowiec.
- One service only for now: "Masaż liftingujący Kobido", 60 min, 150 zł.
- No invented numbers (years of experience, treatment counts) — client found them "scammy".
  Use decorative elements (MotifMarquee) instead of stats.
- No studio (gabinet) photos on the site — client's explicit decision.
- Owner's portrait `public/images/agnieszka.jpg` (750×750, B&W) is a temporary photo used in hero + portraits.
- Shorts on the homepage are third-party demo videos (credited in captions) — swap for her own clips later.

## Conventions
- **All user-facing text is Polish.** Code, comments and this file in English.
- **Internal links/assets must use `url('/path')`** from `src/utils/url.ts` — the dev site is served
  from a sub-path (`/kobido-website/`) on GitHub Pages, so raw `/path` links break.
- Content that the client will change often lives in `src/config/site.ts`, not in page markup.
- Keep it minimal: lots of whitespace, serif headings, muted earthy palette (tokens in `:root`).
  Change the palette only via the CSS variables.
- Copy addresses the client with informal "Ty"; the therapist speaks in first person, feminine forms
  ("jestem certyfikowaną terapeutką", "ukończyłam").
- **Icons:** line icons live in `src/utils/icons.ts` (24×24, stroke = currentColor). Use `<Icon name>` inline
  (buttons, small rows) or `<IconBadge name size>` for round tiles; a tile animates when its parent `<a>` or
  `.hover-group` is hovered. Add new icons to `icons.ts` — never inline ad-hoc SVGs in pages.
- **Light/dark theme:** colours are CSS tokens in `global.css`, with the dark ("espresso") palette defined twice
  (OS `prefers-color-scheme` block + `[data-theme='dark']`) — keep both in sync. Never hard-code colours in
  components; use tokens (`--accent-soft`, `--btn-bg`, `--on-accent`, `--ph-bg`, `--shadow-soft`…).
  `ThemeToggle` saves the choice in localStorage; the inline script in `BaseLayout` applies it before paint.
- New page = new file in `src/pages/`, wrap in `<BaseLayout title="...">`, add to `site.nav` if needed.

## Rezerwacje / Google Calendar
Booking uses **Google Calendar Appointment Schedules** — no backend, no API keys.
Current mode is `bookingMode: 'link'`: the client rejected the inline iframe look (Google styling/footer),
so we show our own styled card and open Google's booking page in a new tab. Bookings appear
automatically in the therapist's Google Calendar; the client gets an email confirmation and a
cancel link from Google.

Setup (done by the therapist on her Google account):
1. calendar.google.com → **Utwórz → Harmonogram spotkań** (Create → Appointment schedule).
2. Set name ("Masaż Kobido 60 min"), duration, weekly availability, buffer between appointments,
   max bookings per day, booking form fields (add phone number as required).
3. Open the schedule → **Udostępnij (Share) → Umieść na stronie (Website embed) → Kalendarz wbudowany (Inline)**.
4. Copy the `src="..."` URL from the iframe code into `bookingUrl` in `src/config/site.ts`.
5. Push → site redeploys, `/rezerwacja` shows the live calendar.

Notes:
- Free Gmail accounts get basic appointment schedules. Google Workspace / Google One Premium unlock
  extras (email reminders, deposits/payments, multiple schedules, booking verification).
- Multiple services with different durations = multiple schedules → would need a service picker
  in `BookingEmbed.astro` (one URL per service). Alternative if needs grow: Cal.com / Booksy embed
  (both sync with Google Calendar).

## Deployment
- Dev: **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`.
  Workflow sets `SITE_URL` and `BASE_PATH=/<repo-name>` for the build.
- Dev site is `noindex` (meta tag in BaseLayout + `public/robots.txt`).

### Before going to production
- [ ] Replace all `TODO` / `[...]` placeholders and `ImagePlaceholder`s with real content/photos
- [ ] Fill in `bookingUrl`
- [ ] Real privacy policy (RODO), consider cookie notice if analytics are added
- [ ] Remove `noindex` meta and change `robots.txt` to allow
- [ ] Custom domain: add `public/CNAME`, set `BASE_PATH` to `/` in the workflow, update `SITE_URL`
- [ ] Add sitemap (`@astrojs/sitemap`), OG image, LocalBusiness JSON-LD schema
- [ ] Optimise photos (Astro `<Image>` from `astro:assets`)
