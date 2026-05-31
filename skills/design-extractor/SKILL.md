---
name: design-extractor
description: Extracts a color palette, typography system, and layout principles from a specified URL using the designlang CLI tool.
---

# Design Extractor

When the user provides a URL of a website they admire, or when triggered by the `zero-to-one-builder`, you must extract the visual design system from that site using Lawrence's preferred `designlang` tool.

## Extraction Process:

1. **Run DesignLang CLI:**
   Execute the following command in the terminal:
   ```bash
   npx designlang <url> --full --framework shadcn -o ./design-extract
   ```
   *(Note: The first time this runs, it will download Playwright and Chromium. Let it finish.)*

2. **Read Extracted Tokens:**
   Read the resulting JSON and CSS files emitted in the `./design-extract` directory.

3. **Format for Custom Design System:**
   Translate those tokens into a fresh `DESIGN.md` file using standard design system formatting. Ensure you map:
   - Visual Theme & Atmosphere
   - Color Palette & Roles (Hex codes)
   - Typography Rules
   - Component Stylings (Buttons, inputs)
   - Depth & Elevation

4. **Action:**
   Save the output to the root directory and confirm with the user that the design system has been successfully extracted.
