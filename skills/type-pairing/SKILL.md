---
name: type-pairing
description: Teaches and runs typography choices for a brand - picks 3 candidate font pairings from Fontshare, Google Fonts, and Open Foundry, renders them as real side-by-side specimens with the brand's own words, sets a type scale, and audits type on existing pages. Use for Phase 4 of the brand builder, or when someone says "pick fonts", "font pairing", "typography", "the text looks boring", "make the type better", or "what font should I use".
---

# Type Pairing

Typography carries most of a brand's personality. This phase picks a pairing by
*seeing* it, then locks it into a type scale every page follows.

## Step 1: Shortlist 3 pairings

Read `brand/BRAND.md` (personality, voice) and `brand/INSPIRATION.md` (fonts the
references use). Pick 3 pairings that differ meaningfully, each one:

- **Display font** (headlines): has character and fits the personality.
- **Body font** (paragraphs, buttons, forms): easy to read at 16 to 18px.
- Two families maximum. One family with several weights also counts as a pairing.

Sources, in order of preference (all free for websites; confirm each font's license):

| Source | Notes |
|---|---|
| Fontshare (https://www.fontshare.com) | Distinctive free fonts (Satoshi, General Sans, Clash Display, Cabinet Grotesk, Erode, Gambetta...). Loads from `https://api.fontshare.com/v2/css?f[]=<slug>@<weights>&display=swap`. ITF Free Font License. |
| Google Fonts (https://fonts.google.com) | Huge library, open-source. Loads from `https://fonts.googleapis.com/css2?family=...&display=swap`. |
| Open Foundry (https://open-foundry.com) | Curated open-source fonts with character; usually self-hosted from downloaded files in `assets/fonts/`. |

Avoid the defaults that make sites look AI-made unless the brand specifically calls for
them: Inter, Roboto, Arial, Open Sans, Poppins, Montserrat, and system fonts as the
*display* font, plus Fraunces and Instrument Serif (the two serifs AI reaches for
most). A serif display font needs a reason tied to the brand (editorial, heritage,
luxury), not just "it feels premium". Check Fonts In Use (https://fontsinuse.com) to see a candidate font in
real brands and share that link with the person.

Name each pairing with a feeling, for example: "Editorial Warm: Gambetta + Satoshi".

## Step 2: Render specimens

Create `brand/type-specimens.html` showing the 3 pairings side by side (stacked on
mobile), each using the brand's real words from BRAND.md:

- the actual headline idea at hero size
- a subheading
- a real paragraph at body size
- a button and a small caption
- the pairing's name and font sources

If Paper is connected, also put the specimens on a "Typography" artboard in the
project's Paper file (call `get_font_family_info` before styling text in Paper).

Serve and screenshot it, look at it, then share the local link and screenshot. Ask
which one feels most like them. Mixing is allowed ("A's headline font with B's body").

## Step 3: Lock the type scale

For the chosen pairing, define:

- **Scale**: about 6 steps from caption to hero (for example 14, 16, 20, 28, 40, 64px
  on desktop). Use `clamp()` so the biggest sizes shrink on phones.
- **Line height**: tighter for big text (1.0 to 1.15), looser for body (1.5 to 1.65).
- **Letter spacing**: tighten large headlines slightly (-0.01 to -0.03em); never add
  tracking to body text; add a little to small all-caps labels (+0.04 to +0.08em).
- **Line length**: body text 45 to 75 characters wide (`max-width: 65ch`).
- **Weights**: at most 3 in use.

Write the choice and scale to the Typography section of `brand/DESIGN.md` (create the
file if Phase 5 has not started) and log it in `brand/DECISIONS.md`.

## Typography rules for everything after this phase

Apply silently whenever writing visible text in HTML/CSS:

- Real punctuation: curly quotes (“ ” ‘ ’), real apostrophes (’), ellipsis (…), and
  `&nbsp;` between a number and its unit. No em or en dashes in website copy.
- One `h1` per page; headings in order; no skipped levels.
- No orphaned single words on the last line of headlines (`text-wrap: balance` for
  headings, `text-wrap: pretty` for paragraphs).
- Body text never smaller than 16px; contrast at least 4.5:1 (3:1 for large text).
- Load only the weights in use, with `font-display: swap`.

## Audit mode

When asked to "fix the type" on an existing page, screenshot it, check every rule
above plus the locked scale, list violations in plain English with before/after, then
fix them.

Finish: update `brand/PROGRESS.md`, show the Phase 4 card, recommend Phase 5
(`design-system`).
