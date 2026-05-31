---
name: marketing-seo-audit
description: Audits the generated codebase for SEO best practices, semantic HTML structure, and accessibility/marketing copy standards.
---

# Marketing and SEO Audit

When triggered, the agent should review the code in the user's workspace (specifically the HTML, JSX, TSX, or Vue files representing pages) and ensure it adheres to modern SEO and marketing best practices.

## Audit Checklist:

1. **Meta Tags & Title:**
   - Ensure every page has a unique `<title>` tag.
   - Verify there is a compelling `<meta name="description">` that captures the brand's value proposition.
   - Check for Open Graph (`og:image`, `og:title`, `og:description`) and Twitter Card meta tags for social sharing.

2. **Semantic HTML:**
   - Ensure there is only one `<h1>` per page, and it contains primary keywords.
   - Verify proper use of `<header>`, `<main>`, `<footer>`, `<section>`, and `<article>`.
   - Check heading hierarchy (no skipping from `<h2>` to `<h4>`).

3. **Accessibility (a11y) & Performance:**
   - All `<img>` tags must have descriptive `alt` attributes.
   - Interactive elements (`<button>`, `<a>`) must have recognizable focus states and ARIA labels where text is not visible.
   - Ensure color contrast meets WCAG AA standards.

4. **Copy & Marketing:**
   - Does the hero section have a clear Call to Action (CTA)?
   - Is the copy concise and aligned with the adjectives/tone defined in `BRAND_GUIDELINES.md`?
   - Identify "fluff" words and suggest stronger, benefit-driven alternatives.

## Post-Audit Action:
- Output a report summarizing what passed and what failed.
- Proactively propose code edits to fix any failed checks using your code modification tools.
