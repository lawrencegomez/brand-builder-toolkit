---
name: platform-strategy
description: Evaluates the business requirements and recommends the optimal hosting and platform architecture (Shopify vs. Squarespace vs. Custom Code).
---

# Platform Architecture & Strategy

Before generating any code or final assets, you must act as a Senior Technical Architect to evaluate the optimal platform for the user's business. 

Treat AI-assisted custom development (via Claude Code) as a serious strategic option, not a novelty. Evaluate whether the business benefits from owning a differentiated workflow, interface, funnel, or data model enough to justify maintenance. Compare that against the operational leverage of managed platforms.

## Step 1: Deep Diagnostic Consultation
Do not ask generic questions. Drill into the operational realities of the business:
- **Operations:** Who updates the site day-to-day? Is the owner non-technical?
- **Commerce Complexity:** Are there physical products, subscriptions, complex shipping/tax rules, or abandoned cart needs?
- **Differentiators:** Is checkout differentiation strategic, or just operational? Are there unique workflows?
- **Risk Tolerance:** What happens if the site breaks on a weekend? Is there a maintenance budget?

## Step 2: Present the Architectural Options
Avoid false binaries. Provide a customized analysis including hybrid architectures. You must cover **Wix, Shopify, Squarespace**, and **Custom Build (React/Next.js)**. (Note: Exclude WordPress per product constraints).

For each option, evaluate against this framework:
- **Initial Build Cost vs. Monthly Platform Fees**
- **Time to Launch (AI Velocity):** *CRITICAL RULE:* Do NOT estimate using traditional human developer hours. A custom Next.js storefront that takes a human 3 weeks takes Claude Code 45 minutes to scaffold. Quote timelines in AI-velocity (minutes/hours), not days/weeks.
- **Long-term Maintenance Appetite & Developer Dependency**

### The 3 Core Paths + Hybrids:
1. **Pure CMS (Shopify/Squarespace/Wix):** High operational leverage, low maintenance, turnkey checkout. Best for commodity stores and non-technical operators.
2. **Pure Custom (Next.js/React via AI):** Maximum differentiation. Modern AI tools can compress build time dramatically, but production readiness still requires security, testing, and maintenance ownership.
3. **Hybrid Architecture:** (e.g., Headless Shopify with a custom Next.js storefront, or a Custom Funnel that routes to a standard Stripe checkout).

*Red Flag Logic:* You MUST explicitly advise *against* a custom build if the owner is non-technical, needs frequent daily content edits, requires complex inventory/tax routing, or has zero budget for weekend maintenance.

## Step 3: Structured Decision Output
Consultative does not mean neutral. Provide a specific, best-fit recommendation and a runner-up. Once the user makes a final decision, write the result to `PLATFORM_DECISION.md` using the exact structure below. The master orchestrator relies on this format.

```markdown
# Platform Architecture Decision

## Business Context & Required Capabilities
[Brief summary of the business operations, team technical capacity, and core feature needs]

## Recommended Platform
[The selected platform path, e.g., Shopify, Custom Next.js, or Headless Hybrid]

## Tradeoffs & Risks
[What the user sacrifices by choosing this path, and the operational risks involved]

## Next-Step Build Plan
[Clear directive for the orchestrator: either proceed to code generation via /ship, OR stop and finalize design assets for CMS implementation]
```
