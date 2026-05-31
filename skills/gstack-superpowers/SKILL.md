---
name: gstack-superpowers
description: Applies compound engineering guidelines and workspace management practices from the GStack methodology when building applications.
---

# GStack Superpowers

When the user is ready to start generating code for their application (e.g., after the design is finalized), apply these compound engineering rules to ensure high-quality, maintainable output.

## Core Directives for Code Generation:

1. **Modular Architecture:**
   - Do not write monolithic files. Break UI down into distinct, reusable components (e.g., `Hero.tsx`, `FeatureGrid.tsx`, `Footer.tsx`).
   - Keep components focused and independent.

2. **Design System Adherence:**
   - Strictly follow the `DESIGN.md` in the workspace root.
   - Use CSS variables or a utility class framework configured to exactly match the designated color palette and typography scale. Do not invent new colors on the fly.

3. **Continuous Checkpointing:**
   - Commit code frequently. After each major feature or component group is built, propose committing the changes to Git.
   - Use descriptive commit messages.

4. **Incremental Complexity:**
   - Build the skeleton and layout first.
   - Ensure responsiveness (mobile-first approach).
   - Add micro-animations and interactions (hover states, scroll reveals) last, ensuring they don't break the core layout.

5. **Self-Correction & Testing:**
   - After writing a component, mentally simulate its rendering.
   - If a build step is available (e.g., `npm run build`), run it to catch TypeScript or syntax errors before presenting the UI to the user.

## Agent Action:
As you build the site, inform the user which component you are currently working on. Keep updates concise. Do not explain standard code to the user; focus on the outcome.
