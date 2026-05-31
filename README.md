# Brand Builder Toolkit

This toolkit is an Antigravity plugin and workflow system designed to help non-technical founders go from a blank slate to a fully branded, pixel-perfect, and hosted website in under an hour.

It combines the best workflows and design techniques (from GStack compound engineering, Awesome Design lookups, and specialized marketing/SEO audits) into a single guided process.

## How to Install

1. Download or clone this repository to your computer.
2. In your Cloud Code / Antigravity IDE, navigate to settings and add this directory as a local plugin.
3. Open a new project workspace where you want your website code to live.

## Workflow: Building a Website in 30 Minutes

Once installed, you can trigger the AI agent by asking it to start the brand discovery process.

### Step 1: Brand Discovery
Type in your IDE:
> "Let's start the brand discovery process."

The agent will use the `brand-discovery` skill to ask you questions about your company, tone, target audience, and adjectives.

### Step 2: Finding Inspiration
If you know websites you like, you have two options:
- **Design Extractor:** Provide the URL of a website you like, and the agent will use the `design-extractor` skill to generate a `DESIGN.md` file from it.
- **Awesome Design:** Tell the agent you want to use a design from the `awesome-design-md` library (e.g., "I want a design like Vercel's"). The agent will use the `awesome-design-lookup` skill to pull that exact template.

### Step 3: Compound Engineering & Superpowers
When it's time to build, the agent will naturally follow the `gstack-superpowers` guidelines to write modular, high-quality code. Just tell it:
> "Generate the React/Next.js UI based on our DESIGN.md."

### Step 4: Polish & Launch
Before shipping, ask the agent:
> "Run a marketing and SEO audit."
The agent will review the code for semantic HTML, proper meta tags, accessible contrast, and persuasive copy using the `marketing-seo-audit` skill.

---
Enjoy building premium web applications effortlessly!
