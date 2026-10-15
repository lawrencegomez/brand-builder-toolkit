# Changelog

## 2026-10-15: lessons from the Motion Site Studio dry run

Rebuilding Oso Goloso Honey with Motion Site Studio (566 credits) added:

- `visual-assets`: only chain clips between keyframes with the same arrangement, check
  every start pin, trim an overshoot instead of rerolling, never crop a keyframe through
  a label, and watch a whole loop before using it.
- `brand-builder`: Motion Site Studio's critic captures break sticky scroll scenes; use
  its `shots.js` for the critics instead.

## 2026-10-14: Motion Site Studio replaces scroll-craft

- The scroll-driven lane now uses Jack Roberts' Motion Site Studio instead of Nate Herk's
  scroll-craft: references first, a Higgsfield film chained frame to frame with cut scans,
  a code-drawn moving graphic per section, an Off / On / X-ray switch, and three fresh
  reviewers. It installs from a download (steps in `stack.md`); on Windows it needs WSL.
- Resources: Jack's Claude Motion Lab (20 motion prompts), the Motion Website System, and
  the RISE method for motion drawn in code.
- Lessons from the scroll-craft dry run that apply to any scroll site (reduced motion,
  heights written into the HTML, slow pacing) are kept in `go-live` and `visual-assets`.

## 2026-10-08: fixes from a full end-to-end dry run

A complete run as a made-up brand (Oso Goloso Honey: discovery to launch checklist to a
first evolve change) turned up these fixes:

- Screenshot script no longer crashes on busy sites, dismisses cookie banners, flags
  bot-check pages, and scrolls through before full-page shots so reveals show up.
- `DESIGN.md` now lives at the project root and discovery writes `PRODUCT.md` and
  `.agents/product-marketing.md`, so impeccable and Corey Haines' skills find them.
- Reference analysis runs plain `designlang` first (seconds, not minutes) and checks for
  bot-wall pages that look like success.
- Type pairing: with Paper, use Google Fonts (Paper cannot load Fontshare).
- Design system: the template's token names are the contract; brandkit is for strategy,
  logos are drawn as SVG.
- Scroll-craft: install with `--copy` (its scripts fail silently through a symlink),
  build at the project root, collapse pinned acts under reduced motion, and write pinned
  heights into the HTML (mobile Lighthouse performance went from 35 to 97).
- 3D in code: notes on transmission glass, tone mapping, and divide-by-zero under
  reduced motion.
- Go-live: ask for the domain first, deploy a `dist/` folder (never the project root),
  softer wording on free-tier terms.
- Evolve and design loop: color changes also hunt the old hex in SVGs, and component
  fixes go back to Paper in the same round.
- Product brands now go to photoreal visuals first. The dry run's code-drawn 3D jar was
  rejected as fake-looking; the replacement (Higgsfield stills plus scroll-scrubbed Kling
  clips) and its recipe are in `visual-assets`, and the Higgsfield CLI is in `stack.md`.
- Generated product footage: avoid neighbor-category looks (a honey jar shot like a
  candle), light the product the way it shows off, leave room for motion, use slow
  10-second clips, and pace scroll with a trailing playhead.
- Hidden jump cuts in generated clips (detect with ffmpeg, fix with start and end frames),
  no fade-to-black between sections, and staggered Higgsfield job launches.

## 2026-10-08: v2 refresh

- One paste to start: README prompt + `AGENTS.md` tell Claude Code, Codex, or Antigravity
  how to install everything and begin. Works on macOS, Windows, and Linux.
- Installs through `npx skills` for every agent; also a valid Claude Code plugin
  marketplace (`.claude-plugin/`). Replaces the broken gstack-first install.
- New flow of 12 phases with a "what you just learned" card after each, covering
  design systems, reference analysis, AI site structure, assets, the design loop,
  typography, copy frameworks, and reusable systems.
- New skills: `type-pairing`, `design-system` (Paper as the home for the system and
  mockups, with templates), `site-copy`, `visual-assets` (free tools first, Higgsfield
  only when needed, Remotion for code video), `design-loop`, `evolve`, `update-toolkit`.
- Renamed: `zero-to-one-builder` to `brand-builder`, `design-extractor` to
  `reference-analysis`, `marketing-seo-audit` to `go-live` (now also deploys; not `launch`, which is Corey Haines' launch-strategy skill).
- Removed: `gstack-superpowers` (folded into the build phase and the vibe coding guide).
- Discovery now uses Matt Pocock's grill-me rounds.
- Scroll-driven and 3D sites use Nate Herk's scroll-craft.
- Resources added: Refero Styles, Fonts In Use, Fontshare, Google Fonts, Open Foundry,
  Flaticon, plus Godly, Awwwards, Land-book, and Coolors.
- `scripts/shoot.mjs`: cross-platform screenshots that capture scroll-reveal sections.
- Companion skill names updated to current upstream names (for example Corey Haines'
  `page-cro` is now `cro`).

## 2026-06-01: v1

First version: zero-to-one builder, brand discovery, design extractor, platform strategy,
awesome-design lookup, marketing/SEO audit, gstack superpowers.
