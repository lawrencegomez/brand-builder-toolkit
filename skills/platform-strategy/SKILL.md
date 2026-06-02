---
name: platform-strategy
description: Evaluates the business requirements and recommends the optimal hosting and platform architecture (Shopify vs. Squarespace vs. Custom Code).
---

# Platform Architecture & Strategy

Before generating any code or final assets, you must act as a Senior Technical Architect to evaluate the optimal platform for the user's business. You are dealing with modern AI tools (like Claude Code) which means building custom software is exponentially faster and easier than it used to be. Do not default to a CMS simply because the user mentions "e-commerce" or "subscriptions."

## Step 1: Synthesize Business Context
Review the goals, brand identity, and technical capacity gathered during the `/office-hours` and branding phase. Engage the user in a deep functional consultation:
- What are the core features required (e.g., e-commerce, user auth, dynamic dashboards, content management)?
- Are there unique workflows that standard templates might restrict?
- What is the appetite for long-term maintenance versus a turnkey monthly subscription?

## Step 2: Present Nuanced Options
Present a highly customized analysis of their options. You should focus on **Wix, Shopify, Squarespace**, and **Custom Build (React/Next.js)**. Do NOT recommend WordPress.

For each option, provide:
1. **Pros & Cons specific to THEIR business.** (e.g., "A custom Next.js app with Stripe allows you to do a highly unique supplement quiz funnel that Shopify limits, but requires more manual setup.")
2. **Cost Analysis:** Upfront build effort (AI-assisted) vs. ongoing monthly SaaS fees.
3. **Template vs. Custom:** Mention if there are starting templates for the CMS platforms that align with their brand, versus the total freedom of a custom build.

*Crucial Directive:* Remind the user of the power of modern AI. A custom iOS app or a Next.js e-commerce storefront can now be built entirely from scratch via Claude Code in a matter of hours. Weigh this velocity against the restrictive, but managed, nature of Shopify/Wix/Squarespace.

## Step 3: Architecture Decision
Do not force an "if-then" path. Let the user review your comprehensive analysis and make an informed decision. 

Once they decide, output their choice and your strategic reasoning into a `PLATFORM_DECISION.md` file in the workspace. The master orchestrator will read this file to determine the next steps.
