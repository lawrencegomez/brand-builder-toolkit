# Brand Builder Toolkit

This toolkit is an Antigravity plugin and workflow system designed to help non-technical founders go from a blank slate to a fully branded, pixel-perfect, and hosted website in under an hour.

It combines customized workflows (GStack `/office-hours`, `taste-skill`, `designlang` extraction, and specialized marketing audits) into a single guided process.

## Prerequisites & Installation

To install this toolkit on a fresh machine (for use with Claude Code), simply copy and paste these four terminal commands:

**1. Install GStack:** 
```bash
git clone https://github.com/garrytan/gstack.git ~/.gstack
```

**2. Install the Taste Skill Bundle:**
```bash
git clone https://github.com/Leonxlnx/taste-skill.git ~/.claude/skills/taste-skill
```

**3. Download the Brand Builder Toolkit:**
```bash
git clone https://github.com/lawrencegomez/brand-builder-toolkit.git ~/brand-builder-toolkit
```

**4. Link the Brand Builder Skills to Claude Code:**
```bash
ln -sf ~/brand-builder-toolkit/skills/* ~/.claude/skills/
```

*Note: You can then open a completely fresh, empty directory where you want your new website code to live and start Claude Code.*

## Workflow: The Zero-To-One Builder

Once installed, you can trigger the master AI orchestrator by asking your AI coding assistant:

> **"Run the zero to one builder for my new business."**

The agent will seamlessly guide you through the following phases:

### 1. Branding & Competitor Analysis
- **Goal:** Define what your company is, who it serves, and what tone it uses.
- **Skills Used:** GStack `/office-hours` and `/browse`.
- **Expected Outcome:** The agent will ask you guided questions and output a foundational `BRAND_GUIDELINES.md` document.

### 2. Design Extraction
- **Goal:** Capture the visual identity of websites you admire.
- **Tools Used:** The `design-extractor` skill running the `npx designlang` CLI tool.
- **Expected Outcome:** The agent will ask for inspiration URLs, extract their exact CSS tokens, and create a fresh, custom `DESIGN.md` tailored specifically for your project from scratch.

### 3. Mockup Generation
- **Goal:** Visually preview how your brand looks before building the actual codebase.
- **Skills Used:** The `taste-skill` (with `/design-shotgun` as a backup).
- **Expected Outcome:** The AI will combine your brand guidelines and extracted design tokens to generate multiple pixel-perfect mockups for you to choose from.

### 4. Execution
- **Goal:** Turn the selected mockup into production-ready code.
- **Skills Used:** GStack `/ship`.
- **Expected Outcome:** The AI builds out the modular React/Next.js components, adhering strictly to the custom `DESIGN.md`.

### 5. QA & SEO Audit
- **Goal:** Ensure the site converts and meets modern web standards.
- **Skills Used:** `marketing-seo-audit`.
- **Expected Outcome:** A final pass over the code to optimize CTA logic, rewrite any "fluff" copy, and ensure semantic HTML and WCAG accessibility standards.

---
Enjoy building premium web applications effortlessly!
