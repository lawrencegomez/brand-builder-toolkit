# Changelog

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
  `reference-analysis`, `marketing-seo-audit` to `launch` (now also deploys).
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
