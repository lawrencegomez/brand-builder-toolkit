---
name: go-live
description: Final pre-launch checklist and go-live for a brand site - SEO basics, social share previews, accessibility, speed, copy and conversion check - then deploys a custom site (Netlify, Cloudflare Pages, or Vercel) and connects a domain, or hands off a build guide for Squarespace/Shopify/Framer/Webflow/Wix. Use for Phase 10 of the brand builder, or when someone says "launch my site", "go live", "publish my site", "deploy", "SEO check", "connect my domain", or "is my site ready".
---

# Launch

## Step 1: Checklist (run it, report in plain English, fix what fails)

Go page by page. If installed, use `seo-audit` and `ai-seo` (Corey Haines) for depth
and `cro` for conversion; this list is the minimum.

**Found by search engines and AI assistants**
- Unique `<title>` (under 60 characters) and meta description (under 155) per page,
  matching `brand/COPY.md`
- One `h1` per page with the page's main phrase; headings in order
- Open Graph and Twitter tags with a 1200x630 share image from `assets/`
- Favicon and apple-touch-icon
- `sitemap.xml` and `robots.txt`; canonical URLs
- Basic structured data (JSON-LD `Organization` or `LocalBusiness`; `schema` skill if
  installed) with only real details
- Clear, factual text about what the business is, who it serves, and where, so AI
  assistants can quote it

**Works for everyone**
- Alt text on every meaningful image; empty `alt=""` on decorative ones
- Text contrast at least 4.5:1; visible keyboard focus; tap targets at least 44px
- Works with `prefers-reduced-motion`; no autoplaying sound
- Real links and buttons (not clickable divs); form fields have labels

**Fast**
- Images sized and compressed (WebP/AVIF), lazy-loaded below the fold
- Only the font weights in use; `font-display: swap`
- If the agent has Lighthouse or browser devtools, run it on mobile and fix the top issues

**Converts**
- The primary action from BRAND.md is visible without scrolling, on mobile too
- Every page ends with a next step
- Contact form or booking link actually works (send a test)
- No placeholders left: search for `[NEEDS`, `lorem`, `TODO`, and example emails
- Credits required by licenses (`assets/LICENSES.md`) are on the site
- No em or en dashes in visible copy

Show a short pass/fail report, fix the failures, and screenshot the result.

## Step 2: Go live

**Custom code (from `brand/PLATFORM.md`)**. Recommend a host and say why:
- **Netlify** or **Cloudflare Pages**: free tiers that allow business sites. Easiest
  for plain HTML/Astro.
- **Vercel**: excellent, but the free Hobby plan is for personal, non-commercial use;
  business sites should use Pro.

Deploy from the project folder (each opens a browser login the first time):

```bash
npx --yes netlify-cli deploy --prod --dir .          # Netlify (use the build folder for Astro, e.g. dist)
npx --yes wrangler pages deploy . --project-name <name>   # Cloudflare Pages
npx --yes vercel --prod                              # Vercel
```

Also suggest putting the project on GitHub (private repo) as a backup and so future
changes deploy automatically; walk them through it if they want it.

Then open the live URL, screenshot desktop and mobile, and check the contact path again.

**Builder platform**: finish `brand/BUILD-GUIDE.md` (theme settings, fonts, colors as
hex, section-by-section layout with screenshots of the mockups, all copy, all assets
listed with alt text, SEO fields per page) and walk them through the first page.

## Step 3: Domain

If they do not have one, suggest checking availability at their host or a registrar
(Cloudflare, Porkbun, Namecheap). Walk them through the DNS records their host shows,
one at a time, and confirm HTTPS works.

## Step 4: After launch

- Submit the sitemap in Google Search Console (walk them through verifying).
- Optional: privacy-friendly analytics (Plausible, Fathom, Cloudflare Web Analytics,
  or Netlify/Vercel analytics).
- Optional celebration: a short launch video of the site with Remotion or HyperFrames
  for social media.

Update `brand/PROGRESS.md` with the live URL, show the Phase 10 card, and introduce the
`evolve` skill for everything that comes next.
