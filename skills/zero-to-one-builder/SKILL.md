---
name: zero-to-one-builder
description: The master orchestrator that walks the user through branding, design extraction, mockup generation, and SEO review using GStack and Taste tools.
---

# Zero to One Builder

This is the primary workflow for taking a project from an unformed idea to a shipped, fully branded application. When invoked, act as a product manager and lead the user sequentially through these steps. **Do not skip steps.** Wait for the user's input before moving to the next phase.

## Step 1: Branding & Competitor Analysis
1. Use the GStack `/office-hours` command/process to establish the core business, target audience, brand adjectives, and preferred tone.
2. Ask the user for their top 2-3 competitors.
3. Use `/browse` (or your web browsing capability) to research those competitors and identify their brand positioning and color themes.
4. Output a summary `BRAND_GUIDELINES.md` file to the workspace.

## Step 2: Design Inspiration & Extraction
1. Ask the user for examples of websites whose design they admire.
2. Once URLs are provided, invoke the `design-extractor` skill to run `npx designlang` on those URLs. 
3. Incorporate the resulting tokens into a fresh, custom `DESIGN.md` file for this specific project.

## Step 3: Mockup Generation
1. Use the `taste-skill` (with `/design-shotgun` as a backup) to generate 3 combined mockup variants for the user based on the `BRAND_GUIDELINES.md` and the newly extracted `DESIGN.md`.
2. Present the options to the user and wait for their selection.

## Step 4: Finalization & Execution
1. Once the user selects a mockup, use GStack compound engineering (`/ship`) to build out the React/Next.js/HTML components.
2. Ensure you strictly adhere to the project's new `DESIGN.md` rules.

## Step 5: QA & SEO Audit
1. Run the `marketing-seo-audit` skill.
2. Perform competitor copy analysis, adjust the CTAs for conversion optimization, and ensure the semantic HTML and accessibility standards are met.
