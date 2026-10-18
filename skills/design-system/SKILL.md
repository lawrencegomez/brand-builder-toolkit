---
name: design-system
description: Builds a brand's reusable design system before any page is built - colors with roles, the type scale, spacing, radii, shadows, motion, and core components - as DESIGN.md, styles/tokens.css, a live design-system.html page, and a Design System board in Paper (or Claude artifacts / local HTML without Paper). Use for Phase 5 of the brand builder, or when someone says "design system", "style guide", "brand tokens", "make my site consistent", or "set up my colors and fonts".
---

# Design System

The core lesson of this toolkit: **we design with a system, not with prompts.** Every
page is assembled from the same tokens and components, so the site stays consistent
and one change updates everything.

## Where the system lives (three copies that must always agree)

1. **Paper** (if connected): the visual home. One Paper file per project, with pages:
   - **Design System**: one board showing colors, type, spacing, buttons, tags,
     inputs, cards, nav, footer. Create Paper tokens named exactly like the CSS
     variables (`color-accent`, `space-4`...).
   - **Mockups**: page directions and final page designs (Phase 8).
   - **Decisions**: side-by-side options when there is a real choice to make.
   - Superseded boards get renamed "Old (<date>)" so nobody builds from them.
   Load Paper's guide (`get_guide` topic `paper-mcp-instructions`) before your first
   Paper edit in a session, and screenshot your work in Paper to check it.
2. **`styles/tokens.css`**: the code version. Pages use only these variables, never
   raw hex codes or pixel values.
3. **`DESIGN.md`**: the written rules (when to use what, and what never to do).

No Paper? Use a Claude artifact for the board when running in Claude Desktop or
claude.ai; otherwise `design-system.html` is the visual home. Either way, keep all
three in agreement.

## Step 1: Draft the tokens

Read `brand/BRAND.md`, `brand/INSPIRATION.md` (the recipe), and the Typography section
of `DESIGN.md`. Start from [templates/tokens.css](templates/tokens.css) and fill in.
**Keep the template's token names** (`--color-bg`, `--text-hero`, `--space-4`...): they
are the contract `design-system.html` and future pages rely on. Change the values, and
add brand-specific tokens alongside (for example `--color-honey-sidr`); do not rename.
If you must rename, update `design-system.html` in the same step.

- **Color, by role, not by name**: background, surface, text, text-muted (tinted, not
  flat grey), border, accent (one), accent-contrast (text on accent), plus success /
  error only if needed. Avoid pure black (#000) and pure white text on it; avoid the
  AI-default purple-blue gradient, and the AI-default "artisan" palette (warm
  cream background + brass/clay/oxblood accent + espresso text) unless the brand truly
  calls for it. Check contrast: text at least 4.5:1 against its
  background, large text and UI at least 3:1. Coolors (https://coolors.co) is handy
  for exploring; ask the person to paste palettes they like.
- **Type**: the families and scale from Phase 4.
- **Spacing**: a 4px-based scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). More space
  above a heading than below it.
- **Shape and depth**: 2 or 3 radii, 2 or 3 shadows that match the personality (soft
  and wide for calm brands, hard offset for bold ones).
- **Motion**: 2 or 3 durations and easings, plus a reduced-motion rule.

Use Taste Skill v2 (`design-taste-frontend`; or `high-end-visual-design`,
`minimalist-ui`, `industrial-brutalist-ui` when the brand points that way) to keep the
result distinctive rather than template-like. When the person has no colors or fonts
yet, a full Taste direction sheet (`node <taste skill folder>/scripts/draw.mjs --sector
<sector> --brief "<one line>" --sections <roles> --direction <id>`) deals a researched
type system and palette worth offering as one option. Some of its fonts come from
Fontshare, which Paper cannot load; with Paper, offer only its Google Fonts choices.
If the brand has no logo yet, sketch logo directions now so the system and the mark
grow together (see the logo step in `visual-assets`).

## Step 2: Show it

1. Copy [templates/design-system.html](templates/design-system.html) to the project
   root. It reads `styles/tokens.css` and displays every color, type step, spacing
   step, radius, shadow, and the core components (buttons, tag, input, card, nav).
   Adjust the sample words to the brand's real copy.
2. If Paper is connected, build the Design System board in Paper with the same
   content and create the Paper tokens.
3. Serve and screenshot `design-system.html` (desktop and mobile). Look at it. Then
   share the local link (and Paper) with the person, explaining in two sentences what
   a design system is and why we built it before any page.
4. Iterate until they are happy. Each change: Paper first, then `tokens.css`, then
   screenshot again.

## Step 3: Write DESIGN.md

Start from [templates/DESIGN.md](templates/DESIGN.md). It must include the "never"
rules (for example "never use the accent for body text", "never more than one
primary button per section") so future pages stay on-brand.

Log the key choices in `brand/DECISIONS.md` with dates.

## Changing the system later

Any look change follows the same order: update Paper (or design-system.html) first and
get a yes, then `tokens.css`, then check every page that uses it with screenshots,
then log it in `brand/DECISIONS.md`. A look change is done only when Paper, tokens,
and the live site agree.

Finish: update `brand/PROGRESS.md`, show the Phase 5 card, recommend Phase 6
(`site-copy`).
