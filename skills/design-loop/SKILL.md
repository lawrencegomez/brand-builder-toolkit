---
name: design-loop
description: Runs the design loop on a page - screenshot desktop and mobile, critique against the brand and design system, fix the biggest problems, screenshot again - for 2 to 3 rounds with before/after shown each time. Use for Phase 9 of the brand builder, or when someone says "design loop", "make it look better", "polish this page", "it looks generic", "something feels off", "critique my site", or "iterate on the design".
---

# Design Loop

Screenshot, critique, fix, screenshot again. Each round fixes the biggest problems
first. Two or three rounds usually take a page from "fine" to "good". Teach the person
to see what you see.

## Each round

1. **Capture.** Serve the site and run
   `node <brand-builder skill folder>/scripts/shoot.mjs <url> shots <page>-round<N>`, run from the project folder (setup in
   `../brand-builder/references/stack.md`). It captures desktop and mobile, full page
   and at five scroll positions. Look at every image yourself.
2. **Critique.** If `impeccable` is installed, run `impeccable critique` (or `audit`)
   on the page. Otherwise use the `redesign-skill` audit. Check against:
   - **Brand**: does it feel like the BRAND.md personality words? Would a stranger
     guess what the business is in 5 seconds?
   - **Hierarchy**: one clear focal point per section; the primary action obvious.
   - **Type**: follows the Phase 4 scale; no tiny or crowded text; clean line breaks.
   - **System**: only tokens from `styles/tokens.css`; no stray colors or one-off sizes.
   - **Space**: consistent rhythm; sections breathe; nothing cramped on mobile.
   - **Generic AI tells**: centered hero plus three identical cards, purple gradients,
     everything the same size, filler icons, "Unlock the power of" copy.
   - **Motion**: purposeful and quick, not decorative; respects reduced motion. For
     any motion work, apply the `review-animations` standards from Emil's skills.
   - **Accessibility**: contrast, focus states, alt text, tap targets at least 44px.
3. **Prioritize.** Pick the 3 to 5 changes with the biggest visible impact. Explain
   each in one plain sentence ("The headline and the button compete; making the button
   the only accent color fixes that").
4. **Fix.** Make the changes using tokens. If a fix needs a new token or component,
   update the design system first (Paper, then `tokens.css`, then `brand/DESIGN.md`).
5. **Re-capture and compare.** New screenshots, shown next to the previous round's,
   with what changed.

Stop when a round finds nothing significant, or after 3 rounds, and ask the person
what still bugs them. Their gut reaction is data; turn "it feels off" into a specific
fix by offering 2 or 3 guesses about what they mean.

Finishing touches when the page is solid: `impeccable polish`, or `impeccable bolder`
if it is still too safe, `impeccable quieter` if it is too loud.

Log notable changes in `brand/DECISIONS.md`, commit ("Design loop round 2 on home"),
update `brand/PROGRESS.md`, show the Phase 9 card.
