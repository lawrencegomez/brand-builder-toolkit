---
name: platform-strategy
description: Helps a founder choose where their website should live (custom code, Framer, Squarespace, Shopify, Webflow, Wix, or a hybrid) based on who edits it, what it sells, and their budget, then writes brand/PLATFORM.md. Use for Phase 3 of the brand builder, or when someone asks "should I use Squarespace or Shopify", "do I need a custom site", "where should my website live", or "which website builder".
---

# Platform Strategy

Act as a senior technical advisor who is honest about tradeoffs. AI-built custom sites
are a serious option now, but they are not always the right one.

## Step 1: Diagnose (grill-me rounds)

Read `brand/BRAND.md` (constraints section first). Ask only what it does not already
answer, in numbered rounds with a recommended answer for each:

- **Who edits the site day to day**, and how often? Are they comfortable asking an AI
  agent to make changes, or do they want to click and type in a visual editor?
- **What it sells**: nothing (info, leads, bookings), services with booking/payments,
  physical products (how many, shipping, inventory), digital products, subscriptions.
- **Must-have features**: booking, shop, blog, newsletter, members area, multiple
  languages, forms.
- **What makes it different**: is there a unique interaction, story, or flow that a
  template cannot do (scroll-driven story, 3D product, custom quiz or calculator)?
- **Risk and budget**: what happens if the site breaks on a weekend? Monthly budget
  for the platform?

## Step 2: Compare options

Look up current prices on the official pricing pages before quoting any; never quote
prices from memory. Cover the options that fit, typically:

| Path | Best for | Watch out for |
|---|---|---|
| **Custom code** (plain HTML/CSS/JS, or Astro for bigger sites), hosted free on Netlify or Cloudflare Pages | Brochure, portfolio, and lead-gen sites; unique scroll/3D/motion; owners happy to ask an AI for edits; lowest running cost | Edits go through the AI agent (or a developer); no built-in shop |
| **Framer** | Designers and visual thinkers who want to edit by hand with great motion | Monthly fee; less suited to big shops |
| **Squarespace** | Simple service businesses wanting easy editing, booking, and basic selling | Harder to make truly distinctive |
| **Shopify** | Anyone selling physical products seriously (inventory, shipping, taxes) | App costs add up; theme customization has limits |
| **Webflow** | Content-heavy marketing sites with a CMS and a hands-on editor | Steeper learning curve |
| **Wix** | Fastest drag-and-drop start | Least flexible for a premium, custom look |
| **Hybrid** | Custom site + Shopify Buy Buttons, Stripe Payment Links, Cal.com, or Calendly for the hard parts | Two systems to look after |

(WordPress is intentionally left out of this toolkit.)

Timelines: quote AI speed, not agency speed. A custom marketing site is typically a
day or two of sessions with an agent, not weeks. Polish, real photos, and copy are
what take time.

**Red flags against custom code**: the owner wants to edit visually themselves without
an AI, needs daily content changes from non-technical staff, needs real inventory,
tax, or shipping logic, or has no one to call if something breaks.

## Step 3: Recommend

Consultative does not mean neutral. Give one best-fit recommendation and a runner-up,
each with a one-line why tied to their answers. The design system (Phase 5) is built
either way: on custom code it becomes `styles/tokens.css`; on a builder platform it
becomes the exact settings to enter in that platform's theme editor.

When they decide, write `brand/PLATFORM.md`:

```markdown
# Platform decision

## Business needs
## Chosen platform
## Why (tied to their answers)
## Tradeoffs we accept
## Monthly cost (checked <date> from <pricing url>)
## Build plan
Custom code: build in Phase 8 with <HTML/CSS/JS or Astro>, host on <Netlify/Cloudflare Pages/Vercel>.
OR Builder platform: Phase 8 produces brand/BUILD-GUIDE.md instead of site code.
## Third-party pieces (booking, payments, newsletter, forms)
```

Update `brand/PROGRESS.md`, show the Phase 3 card, recommend Phase 4 (`type-pairing`).
