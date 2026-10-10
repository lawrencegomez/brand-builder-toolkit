# The stack: install, connect, screenshot

Detect the operating system and the agent you are running in, then use the matching
commands. All `npx` commands work the same on macOS, Windows (PowerShell), and Linux.

## Which app to use

Local beats browser. Recommend, in this order, whichever the person already pays for:

| App | Get it | Agent flag for installs |
|---|---|---|
| Claude Code (terminal, VS Code extension, or the Code tab in Claude Desktop) | https://claude.com/download and https://code.claude.com | `claude-code` |
| Codex (CLI or desktop app) | https://chatgpt.com/codex | `codex` |
| Antigravity | https://antigravity.google | `antigravity` |

Needs: Node.js 18+ (https://nodejs.org, LTS) and git (https://git-scm.com). On Windows,
`winget install OpenJS.NodeJS.LTS Git.Git` works from PowerShell; on macOS,
`brew install node git` if Homebrew exists, otherwise the nodejs.org installer.

## Core stack (install in Phase 0)

Replace `AGENTS` with one `-a` per agent the person uses, for example
`-a claude-code -a codex`. Installing for an agent they do not use is harmless.
`-g` installs once for every project on this computer; `-y` skips prompts.

```bash
# This toolkit
npx skills add lawrencegomez/brand-builder-toolkit --skill '*' -g AGENTS -y

# Design taste and house style (Leonxlnx)
npx skills add Leonxlnx/taste-skill --skill taste-skill soft-skill minimalist-skill brutalist-skill redesign-skill brandkit output-skill imagegen-frontend-web -g AGENTS -y

# Motion and polish (Emil Kowalski)
npx skills add emilkowalski/skills --skill emil-design-eng apple-design find-animation-opportunities review-animations animation-vocabulary -g AGENTS -y

# Interviewing (Matt Pocock's grill-me method)
npx skills add mattpocock/skills --skill grilling grill-me -g AGENTS -y

# Copy, structure, SEO (Corey Haines)
npx skills add coreyhaines31/marketingskills --skill copywriting copy-editing site-architecture marketing-psychology customer-research cro seo-audit ai-seo schema -g AGENTS -y

# Makes writing sound human
npx skills add blader/humanizer -g AGENTS -y

# Scroll-driven, cinematic, 3D-feeling sites (Nate Herk). --copy matters: its
# helper scripts silently do nothing when installed as a symlink.
npx skills add nateherkai/scroll-craft -g AGENTS --copy -y

# Design critique and refinement (impeccable has its own installer)
npx impeccable install --providers=claude,codex --scope=global
```

For `impeccable`, set `--providers` to match the agents in use (`claude`, `codex`,
`gemini` for Antigravity). Codex users: after install, open `/hooks` and approve the
project hook when asked.

After installing, tell the person to restart their agent (or run `/reload-plugins` in
Claude Code) so the new skills load.

## Optional add-ons (install only when a phase needs them)

| Need | Install | When |
|---|---|---|
| Rendered video or animated clips made in code | `npx skills add remotion-dev/skills --skill remotion-best-practices remotion-create remotion-render -g AGENTS -y` | Phase 7, before considering Higgsfield |
| Alternative code-video engine (HTML based) | Claude Code: `claude plugin marketplace add heygen-com/hyperframes` then `claude plugin install hyperframes@hyperframes`. Codex: `npx skills add heygen-com/hyperframes -g -a codex -y` | Phase 7, if Remotion does not fit |
| 3D object from a photo (Three.js) | `npx skills add img2threejs/img2threejs -g AGENTS -y` | Phase 8, a 3D product or object |
| Isometric "fly through a little world" look | `npx skills add cth9191/scroll-world -g AGENTS -y` | Phase 8, if they want that specific diorama style (uses Higgsfield, paid) |
| Extra design review and QA tools (Claude Code, macOS/Linux) | gstack: https://github.com/garrytan/gstack (follow its README install) | Power users only |

## Paper (recommended home for the design system and mockups)

Paper (https://paper.design) is a design canvas, like Figma, that AI agents can read
and write. The design system board and all mockups live there, organized and
editable by hand. Explain the cost honestly:

- Free plan: about 100 AI actions per week, which a full site build uses up fast.
- Pro: about $16 per month (billed yearly). Check https://paper.design/pricing for
  the current price before quoting it.

Setup:
1. Install Paper Desktop from https://download.paper.design and sign in. Keep it open
   with a file open while working (the agent connects through the desktop app).
2. Connect the agent. Easiest: in Paper Desktop, open the MCP panel on the right (with
   nothing selected) and click "Add to <your agent>". Or by command:
   - Claude Code: `claude plugin marketplace add paper-design/agent-plugins` then
     `claude plugin install paper-desktop@paper`
   - Codex: `codex mcp add paper -- <path-to-paper> mcp` (the exact path is shown in
     Paper's MCP panel)
   - Claude Desktop chat: download the extension from https://claude-mcpb.paper.design
     and install it under Settings, Extensions.
3. Restart the agent, then confirm the connection by listing Paper files. New files
   the agent creates land at the top level of the team; move them into a folder by
   hand if you organize with folders.
4. Before your first Paper edit in a session, load Paper's own guide
   (`get_guide` with topic `paper-mcp-instructions`) and follow it.

No Paper? Use Claude artifacts when running in Claude Desktop or claude.ai, otherwise
the local `design-system.html` page and `mockups/` folder. The project works either way.

## Higgsfield (only when it is actually needed)

Higgsfield (https://higgsfield.ai) generates photoreal images and video. It costs money
(credit plans; check https://higgsfield.ai/pricing live, never quote from memory).
Follow the ladder in the `visual-assets` skill; Higgsfield is the last rung.
To connect, add the MCP server `https://mcp.higgsfield.ai/mcp`:
- Claude Desktop / claude.ai: the "Add to Claude" button at https://higgsfield.ai/mcp
- Claude Code: `claude mcp add --transport http higgsfield https://mcp.higgsfield.ai/mcp`
  then run `/mcp` to sign in
- Codex: `codex mcp add higgsfield --url https://mcp.higgsfield.ai/mcp`
If a command fails, open https://higgsfield.ai/mcp and follow the current instructions.
Higgsfield also has a command-line tool (`higgsfield`, sign in with
`higgsfield auth login`) that is easier for an agent to script: `higgsfield account
status` shows credits, `higgsfield generate cost <model> ...` prices a job for free,
`higgsfield generate create <model> ... --wait --json` runs it. If `generate cost`
fails on a local file, run `higgsfield upload create <file>` first and pass the
returned ID instead. Start jobs a few seconds apart, not all at once, and confirm each
returns a job ID: a burst of parallel jobs can be refused with "not_enough_credits"
even when the balance looks fine.
Always agree on a spend limit with the person before generating anything.

## Serving and screenshotting the site

Serve the project folder locally (pick a free port; 8099 is a good default):

```bash
npx --yes serve -l 8099 .
```

Run it in the background, then screenshot with the toolkit's script (works on macOS,
Windows, Linux). One-time setup inside the project folder:

```bash
npm i -D playwright
npx playwright install chromium
```

Then, from the project folder (`<brand-builder>` is this skill's folder):

```bash
node <brand-builder>/scripts/shoot.mjs http://localhost:8099 shots home
```

It writes full-page shots with motion turned off (so scroll-reveal sections show up) and
viewport shots at 0/25/50/75/100% scroll with motion on, for desktop and mobile. A plain
`npx playwright screenshot --full-page` misses anything that fades in on scroll, so
prefer the script. Add `shots/` and `node_modules/` to `.gitignore`.

If the agent has a built-in browser tool (Playwright MCP, Codex browser, Antigravity
browser), that works too. Open and look at every screenshot before showing it.
Give the person the `http://localhost:8099` link to click; do not auto-open windows.

## Updating everything later

See the `update-toolkit` skill. Short version: `npx skills update -g -y` and
`npx impeccable update`.
