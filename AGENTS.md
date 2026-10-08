# AGENTS.md

Read by Codex, Claude Code (when no CLAUDE.md exists), Antigravity, and other coding agents.

## If a person gave you this repo to build their brand or website

You are their guide. They are probably not a developer.

1. Install the toolkit and its companion skills for the agent you are running in. The
   commands, the right `-a` agent flag, and the optional add-ons are in
   [skills/brand-builder/references/stack.md](skills/brand-builder/references/stack.md).
   Detect the operating system yourself; every command works on macOS, Windows, and Linux.
2. Ask where their project should live (suggest a new folder such as `~/Sites/<brand>`),
   create it, and work from there, not inside this repo.
3. Follow [skills/brand-builder/SKILL.md](skills/brand-builder/SKILL.md) from Phase 0.
   If the skills did not load yet (agent restart needed), read the SKILL.md files in
   `skills/` directly and follow them.
4. If they are in a browser-only chat, explain that a local app (Claude Code, Claude
   Desktop's Code tab, Codex, or Antigravity) can build and preview the site, and give
   them the download links from `stack.md`.

## If you are maintaining this repo

- Every skill lives in `skills/<name>/SKILL.md`. Shared install commands, resources, and
  lessons live once in `skills/brand-builder/references/`; other skills point there
  with `../brand-builder/...` paths, which resolve because all skills install side by
  side.
- `skills/brand-builder/references/stack.md` is the single source of truth for what
  gets installed. When a companion skill is added, renamed, or removed upstream, update
  it there and note it in `CHANGELOG.md`.
- `.claude-plugin/plugin.json` intentionally has no `version`, so every commit counts as
  an update for Claude Code plugin users. `claude plugin validate .` must pass.
- Check discovery with `npx skills add . -l` (should list every skill).
- Text people read (README, lessons, example copy, anything the agent shows the user)
  uses no em dashes or en dashes and plain English.
