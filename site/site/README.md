# aRcj website — deploy & maintenance notes

Quick reference for how this site is hosted and wired. (Step-by-step launch instructions are in `HOW-TO-LAUNCH.md`.)

## Hosting setup
- **Host:** Vercel
- **Source:** GitHub repo **`arcj-site`** (Vercel auto-deploys on every commit to the repo)
- **Domain:** **arcj.uk** (registrar: GoDaddy) — both `arcj.uk` and `www.arcj.uk` point to Vercel via DNS A + CNAME records. HTTPS is auto-issued by Vercel.
- **Contact form:** Formspree → delivers to **rob@arcj.uk**. Every page's form posts directly to `https://formspree.io/f/xrevjked` (plain HTML `<form action=…>`, so it works even with JS off; a small inline script adds the in-page thank-you state and a GA4 `form_submit` event).

## To make a change
1. Edit the relevant file (see map below).
2. In the `arcj-site` GitHub repo: **Add file → Upload files** → drag the updated file in → **Commit changes**.
3. Vercel redeploys automatically (~30s). Hard-refresh (Cmd/Ctrl+Shift+R) to see it.

## File map
Every page is **plain static HTML** — all copy is directly in the markup, no build step, no client-side rendering. This matters for SEO: a raw fetch of any page returns full text immediately.
- **`index.html`** — homepage. Layout/spacing CSS lives in its own `<style>` block; shared chrome (header/footer/buttons/forms) comes from `page.css`.
- **`strategy-growth.html` / `marketing-brand.html` / `board-advisory.html`** — the three service pages.
- **`about.html`** — firm-level about page (no individual bios by design).
- **`contact.html`** — standalone contact page (same form as the homepage's Contact section).
- **`page.css`** — shared header/footer/hero/section/card/form styles used by every page except the homepage's bespoke sections (which live inline in `index.html`).
- **`assets/logo/`** — logo SVGs/PNGs. **`assets/og/`** — social share images (1200×630 + 1080×1080). **`assets/imagery/`** — spare homepage carousel photos.
- **`styles.css` + `tokens/` + `fonts/`** — the aRcj design-system tokens and fonts (don't normally need editing).
- **`sitemap.xml` / `robots.txt` / `site.webmanifest`** — SEO/PWA metadata.

## Editing copy
Edit the HTML directly — there's no JSX/build step anymore. On the homepage, the carousel slides, service cards and "Why aRcj" reasons are plain repeated markup blocks in `index.html`; duplicate a block and edit the text to add one.

## The home-page carousel ("Where we work")
The carousel currently shows tasteful branded gradient panels as placeholders. To put **real photos** in, drop image files into `assets/imagery/` with these exact names — no code change needed:
- `carousel-london.jpg` · `carousel-newyork.jpg` · `carousel-dubai.jpg` · `carousel-singapore.jpg` · `carousel-paris.jpg`

If a file isn't present, the `onerror` handler on its `<img>` hides it and the gradient panel shows instead. To change the slides themselves, edit the `.wb-slide` blocks directly in `index.html`.

## Known notes
- CSS gotcha: inside `clamp()`/`calc()`, the `+`/`-` **must have spaces around it** (`1rem + 4vw`, not `1rem+4vw`) or the browser silently drops the value.
