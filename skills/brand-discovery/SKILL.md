---
name: brand-discovery
description: Conducts an interactive 30-minute sit-down questionnaire with a non-technical founder to define their brand, tone, audience, and preferred design direction.
---

# Brand Discovery

When triggered, the agent must ask the user the following questions interactively to build a complete profile of their desired brand identity. Do not ask all questions at once. Ask them sequentially to keep the conversation flowing naturally.

## Questions to Ask:
1. **Core Concept:** "In one or two sentences, what does your company/product do, and what problem does it solve?"
2. **Target Audience:** "Who is your ideal customer? Be as specific as possible (age, profession, interests)."
3. **Adjectives & Vibe:** "If your brand were a person, what 3-5 adjectives would best describe their personality? (e.g., trustworthy, energetic, minimalist, luxurious)"
4. **Competitors & Inspiration:** "Are there any competitors whose websites you admire? Or any brands outside your industry whose 'vibe' you want to capture?"
5. **Color & Copy Tone:** "Do you have any specific colors in mind? And how should the website 'speak' to visitors (e.g., professional, witty, direct)?"

## Instructions for Agent:
1. After gathering all answers, summarize the brand identity back to the user.
2. Ask the user to confirm if the summary accurately captures their vision.
3. Save the finalized summary to a file named `BRAND_GUIDELINES.md` in the current workspace.
4. Recommend moving on to the `awesome-design-lookup` or `design-extractor` skill to find a matching visual language.
