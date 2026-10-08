---
name: evolve
description: Keeps a launched brand site growing without losing its look - adds new pages and sections from the existing design system, changes the look everywhere through tokens (Paper first, then code), updates copy in the brand voice, and logs every decision. Use after launch or whenever someone says "add a page", "add a section", "change the look of", "update my site", "change my colors", "new landing page", "my site feels inconsistent", or "continue my brand builder project" after Phase 10.
---

# Evolve

The site will change for years. This skill makes every change start from the brand and
the design system, so the site still feels designed after fifty edits.

## Always start here

1. Read `brand/PROGRESS.md`, `brand/BRAND.md`, `brand/DESIGN.md`,
   `styles/tokens.css`, and the last entries of `brand/DECISIONS.md`.
2. If Paper is connected, open the project's Paper file and check the Design System
   page matches `tokens.css`. If they disagree, tell the person and ask which is right
   before changing anything.
3. Say in one line which kind of change this is (below) and follow that recipe.

## Recipes

**Add a page or section**
1. Outline it first (sections, each with a job) using `site-copy`; confirm.
2. Write the copy in the brand voice, humanize it.
3. Mock it in Paper ("Mockups" page) or as a local HTML file using only existing
   tokens and components. If something new is truly needed, add it to the design
   system first.
4. Build it, link it from the nav/footer if appropriate, add SEO fields.
5. Run one round of the `design-loop`, then the relevant parts of the `launch`
   checklist, then deploy.

**Change the look (colors, type, buttons, spacing, motion)**
1. Show the change on the Paper Design System board (or `design-system.html`) first,
   ideally as before and after side by side. Flag it if it contradicts an earlier
   decision in `brand/DECISIONS.md`.
2. On a yes: update `styles/tokens.css` (one change reaches every page), then
   `brand/DESIGN.md`.
3. Screenshot every page at desktop and mobile; fix anything the change broke.
4. Deploy, re-check the live site, and confirm Paper, tokens, and live site agree.

**Change copy**: `site-copy` editing mode, show before and after, humanize.

**Something looks off**: run the `design-loop` on that page.

**Big rethink (rebrand, new audience)**: go back to `brand-discovery` for the parts
that changed, then follow the phases forward. Rename old Paper boards "Old (<date>)".

## Always end with

- A commit with a plain message ("Add pricing page")
- A dated line in `brand/DECISIONS.md` for any look or structure choice
- An updated `brand/PROGRESS.md` "Next step"
- One sentence teaching what pattern was used, so they could ask for it themselves

Suggest running the `update-toolkit` skill if it has been more than a month since the
skills were last updated.
