# Launching aRcj.uk — step-by-step

This folder is a **complete, self-contained website**. Everything it needs is inside it, so you can upload the whole folder to any static host and it will work.

---

## Before you publish: turn on the contact form (2 minutes)

Right now the form shows a thank-you message but does **not** email you yet. To make enquiries land in your inbox:

1. Go to **https://formspree.io** and sign up (free plan is fine).
2. Create a new form. Set the destination email to **rob@arcj.uk** (or wherever you want enquiries).
3. Formspree gives you an endpoint that looks like `https://formspree.io/f/abcwxyz`.
4. Open **`editorial.jsx`** in this folder, find this line near the top:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   Replace `YOUR_FORM_ID` (keep the rest) with your real endpoint, e.g.
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcwxyz';
   ```
5. Save. Done — the form now delivers email.

*(Skip this and the form still works as a friendly demo; it just won't send anything.)*

---

## Publish — pick ONE host

### Option 1 — Netlify Drop (easiest, ~3 minutes)
1. Go to **https://app.netlify.com/drop**
2. Drag this **entire `site` folder** onto the page.
3. It goes live instantly on a temporary URL like `random-name.netlify.app`.
4. To use **www.arcj.uk**: in the site's **Domain settings → Add custom domain**, enter `arcj.uk`. Netlify shows you the DNS records to set.

### Option 2 — Vercel / Cloudflare Pages / GitHub Pages
All work the same way — upload the folder (or connect a Git repo containing it) and point your domain at it. Make sure **`index.html` is at the root** of what you upload.

---

## Point www.arcj.uk at your site (DNS)

Log in wherever you bought **arcj.uk** (your domain registrar) and update DNS:

- For **Netlify**: add the records Netlify shows you — usually an `A` record for `arcj.uk` → Netlify's IP, and a `CNAME` for `www` → your `*.netlify.app` address.
- Set up a redirect so both `arcj.uk` and `www.arcj.uk` resolve to the same place (your host has a one-click setting for this).
- DNS changes can take anywhere from a few minutes to a few hours to take effect.
- Your host will provision a free **HTTPS certificate** automatically once DNS is verified.

---

## Good to know

- **Editing text/images later:** copy is in `sections.jsx` and `editorial.jsx`; images are in `assets/imagery/`. Replace an image with one of the same name to swap it.
- **Articles** are placeholders with real titles — when you have the actual posts, those are the cards to update.
- **Performance note:** this build compiles in the browser, which adds about a second on first load — fine for a one-page site. If aRcj wants a faster, fully production-grade build (precompiled, content-managed articles), that's the "Route B" developer handoff — just ask and I'll prepare it.

— Built from the aRcj Design System.
