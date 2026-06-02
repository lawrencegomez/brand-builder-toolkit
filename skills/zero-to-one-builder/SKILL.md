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

## Step 2: Platform Strategy
1. Invoke the `platform-strategy` skill to consult the user on functionality, pros/cons, and pricing of different platforms (e.g., Shopify, Squarespace, Custom Build).
2. Save the final choice in `PLATFORM_DECISION.md`.

## Step 3: Design Inspiration & Extraction
1. Ask the user for examples of websites whose design they admire.
2. Once URLs are provided, invoke the `design-extractor` skill to run `npx designlang` on those URLs. 
3. Incorporate the resulting tokens into a fresh, custom `DESIGN.md` file for this specific project.

## Step 4: Mockup Generation
1. Use the `taste-skill` (with `/design-shotgun` as a backup) to generate 3 combined mockup variants for the user based on the `BRAND_GUIDELINES.md` and the newly extracted `DESIGN.md`.
2. Present the options to the user and wait for their selection.

## Step 5: Finalization & Execution (Forked Path)
Check the `PLATFORM_DECISION.md` file:
- **If Custom Build (Next.js/React):** Use GStack compound engineering (`/ship`) to build out the codebase, strictly adhering to the new `DESIGN.md` rules.
- **If CMS (Shopify/Squarespace):** Do not generate application code. Inform the user that the design assets and mockups are complete and ready for them to implement in the CMS visual builder.

## Step 6: QA & SEO Audit
1. Run the `marketing-seo-audit` skill over the generated copy and structure.
2. Perform competitor copy analysis, adjust the CTAs for conversion optimization, and ensure the semantic structure and accessibility standards are met for either the custom codebase or the CMS copy deck.
