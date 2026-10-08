---
name: awesome-design-lookup
description: Fetches a ready-made DESIGN.md describing a well-known brand's design language (Stripe, Linear, Apple, Notion, Airbnb and ~70 more) from the awesome-design-md repo, to use as a starting point to remix. Use when someone says "make it feel like <brand>", "Stripe-style", "Linear vibe", or wants a shortcut in Phase 2 of the brand builder.
---

# Awesome Design Lookup

A shortcut for Phase 2: start from a documented design language instead of extracting
one. The result is raw material to remix with the person's own brand, never a copy.

1. List what exists (about 70 brands, folder names like `stripe`, `linear.app`,
   `apple`, `notion`, `airbnb`):
   `https://api.github.com/repos/VoltAgent/awesome-design-md/contents/design-md`
   Match the person's brand name to the closest folder. If there is no match, say so
   and use the `reference-analysis` skill on the live site instead.
2. Fetch `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/<folder>/DESIGN.md`.
3. Save it as `brand/references/<folder>-DESIGN.md` (not as the project's own
   DESIGN.md; that gets built in Phase 5 from the person's brand).
4. Summarize in plain English what makes that design language work (type, color,
   spacing, motion, voice), using the same breakdown format as `reference-analysis`,
   and add it to `brand/INSPIRATION.md` with a "Borrow" and a "Skip" list.
5. Remind them: we take ingredients, and their logo, colors, and voice stay their own.
