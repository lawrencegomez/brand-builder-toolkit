---
name: awesome-design-lookup
description: Fetches a pre-made DESIGN.md file from the awesome-design-md repository for renowned brands (e.g., Stripe, Vercel, Apple) to use as a starting point.
---

# Awesome Design Lookup

When the user requests a design inspired by a well-known company or wants to use a pre-existing design template, trigger this skill.

## Instructions for Agent:

1. The user will specify a brand (e.g., "I want a Vercel-like design").
2. Check the local `awesome-design-md` repository (typically located at `~/awesome-design-md` or `~/Documents/awesome-design-md`) or fallback to fetching from the remote GitHub repository: `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand]/DESIGN.md`.
3. Read the content of the target `DESIGN.md`.
4. Copy the content into a new `DESIGN.md` file in the user's current project root.
5. Notify the user: "I have successfully imported the design system for [Brand]. You can review the DESIGN.md file. Shall we proceed to build the UI?"

*Note: Make sure to check the URL correctly, matching the folder names in the awesome-design-md repo (e.g., `vercel`, `stripe`, `apple`, `linear.app`).*
