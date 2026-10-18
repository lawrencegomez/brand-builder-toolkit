---
name: update-toolkit
description: Updates the Brand Builder Toolkit and every companion skill and plugin (Taste Skill v2, impeccable, Emil's motion skills, grilling, Corey Haines' marketing skills, humanizer, Motion Site Studio, Remotion, Paper) to their latest versions in Claude Code, Codex, or Antigravity, and reports what changed. Use when someone says "update the toolkit", "update my skills", "update everything", "are my skills up to date", or "get the latest brand builder".
---

# Update Toolkit

Detect the operating system and which agents are installed (look for `~/.claude/skills`,
`~/.agents/skills`, `~/.gemini/antigravity/skills`). All commands below work on macOS,
Windows (PowerShell), and Linux.

## 1. Skills installed with `npx skills` (this toolkit and most companions)

```bash
npx skills list -g          # what is installed, for which agents
npx skills update -g -y     # update all of them to the latest version
```

If a skill this toolkit expects is missing, install it with the matching line from the
`brand-builder` skill's `references/stack.md`. If the toolkit's stack list has new
entries since the last install, install those too.

Taste Skill v2 (October 2026) is installed by its install name, `design-taste-frontend`,
and its specialist skills have new install names too (`high-end-visual-design`,
`minimalist-ui`, `industrial-brutalist-ui`, `redesign-existing-projects`,
`full-output-enforcement`). If `npx skills list -g` does not show
`design-taste-frontend`, run the Taste line from `stack.md` again. Taste v2 needs Node
22 or newer (`node --version`).

## 2. Skills installed from a download (no auto-update)

Motion Site Studio (Jack Roberts) comes as a zip, so `npx skills update` does not touch
it. If it is installed, ask whether they want the latest: they download the zip again
from the link in `references/stack.md`, then replace the old folder and rerun
`npm install` in its `scripts` folder. Never mix the old and new folders.

## 3. impeccable (own installer)

```bash
npx impeccable update
```

Codex users: open `/hooks` afterward and re-approve the hook if asked.

## 4. Claude Code plugins (only if installed as plugins)

In Claude Code: `/plugin marketplace update` then `/reload-plugins`. Or from a terminal:
`claude plugin marketplace update <marketplace>` and `claude plugin update <plugin>@<marketplace>`.
Relevant ones: `brand-builder-toolkit`, `paper-desktop@paper`, `hyperframes@hyperframes`.
Offer to turn on auto-update for each: `/plugin`, Marketplaces tab, select the
marketplace, Enable auto-update.

## 5. Apps and tools

- Paper Desktop updates itself; ask them to accept the update prompt if one is showing.
- Claude Code: `claude update`. Codex CLI: `npm i -g @openai/codex@latest` (or the
  desktop app's own updater). Node.js: suggest the current LTS from nodejs.org if theirs
  is older than 18.

## 6. Report

Tell the person, in plain English: what was updated, anything new worth trying (read
the changelogs of skills that changed, for example scroll-craft's `CHANGELOG.md`), and
anything that failed with the one step to fix it. Then remind them to restart their
agent so updated skills load.

Suggest running this about once a month.
