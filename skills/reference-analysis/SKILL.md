---
name: reference-analysis
description: Helps a person find websites they admire, then analyzes each one (screenshots, real fonts, colors, spacing, motion, voice) and explains in plain English why it works and what to borrow, producing brand/INSPIRATION.md. Use for Phase 2 of the brand builder, or when someone says "analyze this site", "I like the look of <url>", "break down this design", "grab the design from", "what makes this site good", or "extract the design".
---

# Reference Analysis

Goal: turn "I like that vibe" into specific ingredients an AI can build with. We
borrow ingredients, never clone a site.

## Step 1: Find references (person browses, you guide)

Read `brand/BRAND.md` first. Then give them 2 or 3 starting points from
`../brand-builder/references/resources.md`, picked for their brand, with a hint on what
to search:

- **Refero Styles** (https://styles.refero.design/) for overall look and feel
- **Fonts In Use** (https://fontsinuse.com/) if typography is the draw
- **Godly** or **Awwwards** if they want bold motion or scroll effects

Ask for 2 to 4 URLs. Include at least one from outside their industry; it is where
the most original ideas come from. If they already listed competitors in BRAND.md,
analyze one competitor too, to know what to stand apart from.

Shortcut: if they say "make it feel like Stripe / Linear / Apple", use the
`awesome-design-lookup` skill for a ready-made DESIGN.md to remix.

## Step 2: Look at each site

For each URL:

1. **Screenshot it** (desktop and mobile) with the command in
   `../brand-builder/references/stack.md`, or the agent's browser tool. Look at the
   screenshots. Scroll the page if you can and note any motion.
2. **Extract the real design language** with designlang (works on macOS, Windows,
   Linux; first run may need `npx --yes designlang install-browser`, or it uses an
   installed Chrome):

   ```bash
   npx --yes designlang <url> --full
   ```

   It writes to `./design-extract-output/`. Move that folder to
   `brand/references/<domain>/` so runs do not overwrite each other. Read the
   `*-design-language.md`, `*-design-tokens.json`, `*-motion-tokens.json`, and
   `*-voice.json` files.
3. If two references each have something they love ("this one's type, that one's
   colors"), try `npx --yes designlang pair <url-a> <url-b>` to see a fused system.

If extraction fails (some sites block it), work from screenshots and the page's CSS
instead and say so.

## Step 3: Explain it like a teacher

For each site, write a short breakdown in plain English. This is the lesson, so be
concrete:

- **First impression**: what you feel in 3 seconds, and what on screen causes it
- **Type**: the actual fonts, how big the headlines are compared to body text, any
  tight or loose letter spacing
- **Color**: the palette with hex codes, and the job each color does (background,
  text, accent, buttons)
- **Space and layout**: generous or dense, grid or freeform, how sections are divided
- **Motion**: what moves and when (on load, on scroll, on hover), or "almost none"
- **Voice**: how the headline and buttons talk
- **Borrow**: 2 or 3 specific ingredients that fit *their* brand
- **Skip**: what does not fit them, and why

Show them the screenshots alongside the breakdown.

## Step 4: Write brand/INSPIRATION.md

```markdown
# Inspiration

## <Site name> (<url>)
Screenshot: brand/references/<domain>/...
First impression:
Type:
Color:
Space and layout:
Motion:
Voice:
Borrow:
Skip:

## The recipe
Combining the above for <brand>: <5-8 bullet "ingredients" we will carry into the
design system, each tied to a BRAND.md personality word>

## Stand apart from
<what competitors do that we will deliberately not do>
```

Confirm the recipe with the person. Update `brand/PROGRESS.md`, show the Phase 2 card,
and recommend Phase 3 (`platform-strategy`).
