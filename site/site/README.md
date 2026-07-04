# aRcj website — deploy & maintenance notes

Quick reference for how this site is hosted and wired. (Step-by-step launch instructions are in `HOW-TO-LAUNCH.md`.)

## Hosting setup
- **Host:** Vercel
- **Source:** GitHub repo **`arcj-site`** (Vercel auto-deploys on every commit to the repo)
- **Domain:** **arcj.uk** (registrar: GoDaddy) — both `arcj.uk` and `www.arcj.uk` point to Vercel via DNS A + CNAME records. HTTPS is auto-issued by Vercel.
- **Contact form:** Formspree → delivers to **rob@arcj.uk**. The endpoint is set in `editorial.jsx` (`FORMSPREE_ENDPOINT`).

## To make a change
1. Edit the relevant file (see map below).
2. In the `arcj-site` GitHub repo: **Add file → Upload files** → drag the updated file in → **Commit changes**.
3. Vercel redeploys automatically (~30s). Hard-refresh (Cmd/Ctrl+Shift+R) to see it.

## File map
- **`index.html`** — homepage shell + all layout/spacing CSS (the `<style>` block).
- **`sections.jsx`** — header, hero, who-we-work-with, the two engagements (Business Activation + Market Expansion). The 8 workstreams live in the `WORKSTREAMS` array here.
- **`editorial.jsx`** — how we work, why ARCJ (the `REASONS` array), contact form, footer. The Formspree endpoint is the `FORMSPREE_ENDPOINT` constant at the top.
- **`assets/logo/`** — logo SVGs. **`assets/imagery/`** — spare imagery (not used by the current typographic design).
- **`styles.css` + `tokens/` + `fonts/`** — the ARCJ design-system tokens and fonts (don't normally need editing).
- **`sitemap.xml` / `robots.txt`** — SEO.

## Editing copy
All text is in `sections.jsx` and `editorial.jsx`. Section headings/eyebrows are inline; the engagement workstreams and the "Why aRcj" reasons are in arrays near the relevant component, so they're easy to reorder or reword.

## The home-page carousel ("Where we work")
The carousel currently shows tasteful branded panels as placeholders. To put **real photos** in, drop image files into `assets/imagery/` with these exact names — no code change needed:
- `carousel-london.jpg` · `carousel-newyork.jpg` · `carousel-dubai.jpg` · `carousel-singapore.jpg` · `carousel-paris.jpg`

If a file isn't present, its branded panel shows instead. To change the slides themselves (captions, count, filenames), edit the `SLIDES` array near the top of `sections.jsx`.

## Known notes
- The build compiles in the browser (~1s first load) — fine for this size. A precompiled production rebuild is the "Route B" option if ever wanted.
- CSS gotcha: inside `clamp()`/`calc()`, the `+`/`-` **must have spaces around it** (`1rem + 4vw`, not `1rem+4vw`) or the browser silently drops the value.
