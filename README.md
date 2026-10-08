# Brand Builder Toolkit

A set of skills for Claude Code, Codex, and Antigravity that walks you from an idea to a
live website with a real brand and a design system you can keep building on. You answer
questions and make choices. The AI does the building and explains what it is doing, so
by the end you know how to do it again.

It pulls together the skills, tools, and habits I picked up building my own products.

## Start here

1. Open a local AI coding app. Any of these works on Mac or Windows:
   - [Claude Code](https://code.claude.com) in a terminal, in VS Code, or in the Code tab of [Claude Desktop](https://claude.com/download)
   - [Codex](https://chatgpt.com/codex), the CLI or the desktop app
   - [Antigravity](https://antigravity.google)

   Use the app rather than the chat website. The app can create files, run your site,
   and take screenshots of it.
2. Paste this in:

```text
Set me up with the Brand Builder Toolkit: https://github.com/lawrencegomez/brand-builder-toolkit
Read its AGENTS.md, install everything it needs for this app on my computer, then start the brand builder with me.
```

The agent checks your computer, installs what is missing, asks where your project
should live, and starts asking you questions. If you stop partway through, open a new
chat later and say "continue my brand builder project".

## What you'll learn

🎨 Create websites using design systems, not simple prompts
🔎 Analyze reference websites for better design direction
🤖 Use Claude/Codex to generate custom website structures
🖼️ Generate unique graphics and videos with Higgsfield
🔁 Apply the design loop for iterative improvements
🔤 Improve websites through stronger typography choices
✍️ Refine website copy using AI copy frameworks
📐 Build reusable design systems for future pages

Each step ends with a short "what you just learned" note and a sentence you can use to
ask for the same thing on your next project.

## The steps

| # | Step | What you do | What you get |
|---|---|---|---|
| 0 | Setup | Say yes a few times | Tools installed, a project folder |
| 1 | Discovery | Answer rounds of questions, each with a suggested answer you can accept | `BRAND.md`: who it's for, why you exist, how you sound |
| 2 | Inspiration | Browse a few galleries and paste links you like | A plain-English breakdown of why each site works and what to borrow |
| 3 | Platform | Talk through who will edit the site and what it sells | A decision: custom site, Squarespace, Shopify, Framer, and so on |
| 4 | Typography | Pick from three font pairings shown with your own words | A type scale the whole site follows |
| 5 | Design system | React to a live board of colors, type, and buttons | `tokens.css`, a design system page, and a board in Paper |
| 6 | Structure and copy | Approve a sitemap, then the words | Every page's copy, written with named frameworks and cleaned of AI tells |
| 7 | Visual assets | Share photos, approve a plan | Logo, images, icons, and video, made with the cheapest tool that works |
| 8 | Build | Choose between two or three directions | Your site, running on your computer |
| 9 | Design loop | Look at before and after screenshots | A noticeably better page after two or three rounds |
| 10 | Launch | Approve the checklist and connect a domain | A live site |
| 11 | Keep improving | Ask for new pages or changes | Changes that stay on-brand |

For scroll-driven, cinematic, or 3D-feeling sites, step 8 uses
[scroll-craft](https://github.com/nateherkai/scroll-craft) by Nate Herk.

## What it costs

You need an account with Claude, ChatGPT (for Codex), or Google (for Antigravity), and a
paid plan makes a full build much smoother. You also need
[Node.js](https://nodejs.org) and [git](https://git-scm.com), which the agent will help
you install. Everything in the toolkit is free. Two paid extras are optional:

- [Paper](https://paper.design) is a design canvas, similar to Figma, that the AI can read
  and edit. It is where your design system and mockups live, and it keeps everything
  organized. The free plan allows about 100 AI actions a week, which a full build uses
  up quickly. Pro is about $16 a month on a yearly plan. Without Paper, the toolkit uses
  Claude artifacts or a local design system page instead.
- [Higgsfield](https://higgsfield.ai) generates photoreal images and video. The toolkit
  suggests it only when your own photos and code-made graphics or video (Remotion) can't
  do the job, and it agrees a budget with you before generating anything.

## Keeping it current

The toolkit and the skills it uses get updated often. Once a month, tell your agent:

```text
Update the brand builder toolkit and all its skills.
```

Or run it yourself in a terminal:

```bash
npx skills update -g -y
npx impeccable update
```

Claude Code users who installed it as a plugin can also run `/plugin marketplace update`
and turn on auto-update in `/plugin` under the Marketplaces tab.

## Installing by hand

The agent does this for you, but if you prefer to do it yourself, the full list of
commands (with the flags for Claude Code, Codex, and Antigravity) is in
[stack.md](skills/brand-builder/references/stack.md). The short version for this
toolkit alone:

```bash
npx skills add lawrencegomez/brand-builder-toolkit --skill '*' -g -a claude-code -a codex -y
```

Claude Code also works as a plugin:

```text
/plugin marketplace add lawrencegomez/brand-builder-toolkit
/plugin install brand-builder-toolkit@brand-builder-toolkit
```

## Resources

Galleries, font libraries, icon sets, and color tools the toolkit points you to along
the way, including Refero Styles, Fonts In Use, Fontshare, Google Fonts, Open Foundry,
and Flaticon, are listed in [resources.md](skills/brand-builder/references/resources.md).

## What's inside

| Skill | Step |
|---|---|
| `brand-builder` | Runs the whole process and remembers where you left off |
| `brand-discovery` | 1 |
| `reference-analysis`, `awesome-design-lookup` | 2 |
| `platform-strategy` | 3 |
| `type-pairing` | 4 |
| `design-system` | 5 |
| `site-copy` | 6 |
| `visual-assets` | 7 |
| `design-loop` | 9 |
| `launch` | 10 |
| `evolve` | 11 |
| `update-toolkit` | Keeps everything current |

It also installs and leans on work by other people:
[taste-skill](https://github.com/Leonxlnx/taste-skill) (Leonxlnx),
[impeccable](https://github.com/pbakaus/impeccable) (Paul Bakaus),
[Emil Kowalski's skills](https://github.com/emilkowalski/skills),
[grill-me](https://github.com/mattpocock/skills) (Matt Pocock),
[marketing skills](https://github.com/coreyhaines31/marketingskills) (Corey Haines),
[humanizer](https://github.com/blader/humanizer) (blader),
[scroll-craft](https://github.com/nateherkai/scroll-craft) (Nate Herk),
[Remotion skills](https://github.com/remotion-dev/skills),
[designlang](https://github.com/Manavarya09/design-extract), and
[awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

## Working well with AI

[VIBE_CODING_GUIDELINES.md](VIBE_CODING_GUIDELINES.md) has a few habits that make any AI
coding session go better, including when to start a fresh chat.

## License

MIT. See [LICENSE](LICENSE).
