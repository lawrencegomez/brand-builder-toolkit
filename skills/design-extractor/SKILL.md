---
name: design-extractor
description: Extracts a color palette, typography system, and layout principles from a specified URL to generate a baseline DESIGN.md file.
---

# Design Extractor

When the user provides a URL of a website they admire, the agent should use its web reading or browsing tools to analyze the visual components of that website.

## Extraction Process:

1. **Read the Target Website:** Use the `read_url_content` or Chrome DevTools skills to fetch the website. Look for CSS variables, font families, and color hex codes.
2. **Identify Color Palette:** Extract the primary, secondary, and background colors. Map them to semantic roles (e.g., Primary Accent, Background, Text).
3. **Identify Typography:** Identify the heading fonts and body fonts.
4. **Identify Layout Elements:** Note the spacing (padding/margins), border radii (sharp, rounded, pill), and shadow types (flat, soft, hard).

## Action Required:

Generate a `DESIGN.md` file in the root of the user's workspace using the Google Stitch DESIGN.md standard. 

The `DESIGN.md` must include:
- Visual Theme & Atmosphere
- Color Palette & Roles (with Hex codes)
- Typography Rules
- Component Stylings (Buttons, inputs)
- Depth & Elevation

Inform the user that the `DESIGN.md` has been successfully created and ask if they would like to proceed with generating the website using `gstack-superpowers`.
