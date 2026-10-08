---
name: visual-assets
description: Plans and creates the site's images, graphics, icons, logo files, and video using the cheapest tool that can do the job well - the person's own photos, code-drawn graphics, code-rendered video (Remotion or HyperFrames), and only when truly necessary paid generators like Higgsfield. Use for Phase 7 of the brand builder, or when someone says "I need images", "make a hero video", "generate graphics", "make an animation", "icons", "use Higgsfield", or "create a logo".
---

# Visual Assets

Goal: assets that look like *this* brand, not stock or obvious AI. Spend money only
when nothing free can do the job.

## Step 1: Make an asset list

Read `brand/COPY.md` (sections) and `brand/DESIGN.md`. List every visual slot: logo,
favicon, hero, section images, icons, backgrounds, social share image (1200x630), and
any video or animation. For each, note what it must communicate.

## Step 2: Pick the tool for each slot (climb the ladder, stop at the first rung that works)

1. **Real photos and video the person already has** (products, space, team, work).
   Always best for trust. Ask for them first. Clean them up: crop, color-match to the
   palette, compress (WebP or AVIF for images).
2. **Code-drawn graphics**: SVG shapes, patterns, gradients, illustrations, and
   icon-style graphics made directly in code from the design tokens. Free, sharp at any
   size, perfectly on-brand. Good for backgrounds, dividers, diagrams, simple icons.
3. **Icon sets**: Flaticon (https://www.flaticon.com) for icons in many styles; free
   icons need visible credit to the author. One icon style per site.
4. **Motion in the page itself**: CSS and small JS animations (Emil's motion skills:
   `emil-design-eng`, `find-animation-opportunities`). Most "make it animated"
   requests are this, not video.
5. **Code-rendered video**: Remotion (`remotion-best-practices`, `remotion-create`
   skills) or HyperFrames make real MP4s from code: logo reveals, animated text,
   product explainers, looping hero backgrounds, launch videos. Free, editable, on-brand.
   Install from the optional add-ons in `../brand-builder/references/stack.md`.
6. **AI image generation built into the agent or plan** (for example the
   `imagegen-frontend-web` skill for hero concepts, or the agent's own image tool).
   Good for concept images and textures; check that results do not look generic.
7. **Higgsfield** (paid, https://higgsfield.ai): photoreal footage or images that the
   rungs above cannot make, for example a cinematic product shot in a setting they do
   not have, or video for a scroll-driven site. Only suggest it when a real need
   exists, explain why the free rungs fall short, and **agree on a spend limit before
   generating anything**. Connection steps are in `../brand-builder/references/stack.md`.
   Draft at low resolution first; produce the final only after they approve the draft.

Present the plan as a short table (slot, tool, why, cost) and get a yes.

## Step 3: Logo (if they do not have one)

Use the `brandkit` skill to explore 3 logo directions tied to BRAND.md. Deliver an SVG
master, a one-color version, a favicon (32px and 180px), and dark and light versions.
If Paper is connected, put the directions on the Paper "Decisions" page.

## Step 4: Create and file the assets

- Save to `assets/` with clear names (`hero-desktop.webp`, `logo-mark.svg`).
- Images: sized for their slot (not 5000px wide), compressed, with written alt text
  ready for Phase 8.
- Record every source and license in `assets/LICENSES.md` (own photo, made in code,
  Flaticon author + credit line, Higgsfield, Remotion...). Add required credits to the
  site footer.
- For scroll-driven sites, `scroll-craft` has its own asset and encoding workflow; follow it.

Update `brand/PROGRESS.md`, show the Phase 7 card, recommend Phase 8 (mockups and build
in the `brand-builder` skill).
