---
name: platform-strategy
description: Evaluates the business requirements and recommends the optimal hosting and platform architecture (Shopify vs. Squarespace vs. Custom Code).
---

# Platform Strategy

Before generating any application code, you must evaluate the functional and business requirements of the user's project to recommend the correct platform architecture. Pushing every project into a custom React/Next.js build is an anti-pattern.

## Step 1: Functional Interview
Ask the user what specific functionality their site needs. Example questions:
- "Will you be selling physical goods or subscriptions?"
- "Do you need complex, interactive web-app functionality (like a dashboard or SaaS portal)?"
- "Are you heavily reliant on email marketing automation and cart recovery?"

## Step 2: Present Options & Pricing
Based on their answers, present the most logical platform choices, including pros, cons, and estimated costs. Avoid recommending WordPress or Wix unless specifically requested.

1. **Shopify** 
   - *Best for:* E-commerce, physical goods, dropshipping, inventory management.
   - *Cost:* ~$39/month + transaction fees.
   - *Agent's Role:* The AI will provide the `DESIGN.md`, visual mockups, and SEO copy for the user to implement via a Shopify theme.

2. **Squarespace**
   - *Best for:* Service businesses, simple portfolios, restaurants, basic scheduling.
   - *Cost:* ~$23/month.
   - *Agent's Role:* The AI will provide the `DESIGN.md`, visual mockups, and SEO copy for the user to implement via the Squarespace builder.

3. **Custom Build (React/Next.js/HTML)**
   - *Best for:* Unique web applications, highly custom UI/UX, SaaS tools, or $0/month hobby hosting.
   - *Cost:* $0/month on Vercel/Netlify (Hobby tier), but requires technical maintenance.
   - *Agent's Role:* The AI will use GStack `/ship` to write and build the actual codebase for the user.

## Step 3: Decision
Wait for the user to select a path. Output their decision to a `PLATFORM_DECISION.md` file in the workspace so the orchestrator knows whether to proceed to custom coding or stop at providing design assets.
