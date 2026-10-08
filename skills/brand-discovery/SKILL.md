---
name: brand-discovery
description: Interviews a founder in fast "grill-me" style rounds (numbered questions, each with a recommended answer) to define who they are, what they offer, who it is for, why it matters, and how the brand should look and sound, then writes brand/BRAND.md. Use for Phase 1 of the brand builder, or when someone says "define my brand", "brand discovery", "grill me about my business", or "help me figure out my brand".
---

# Brand Discovery

Goal: a `brand/BRAND.md` specific enough that two different designers reading it would
build sites that feel related. Generic answers ("we care about quality") are the enemy.

## Method: grill-me rounds

This uses Matt Pocock's grilling method. If the `grilling` skill is installed, follow
it; the essentials are here so this works without it.

- Ask in **rounds**. Each round contains every question you can ask now without
  guessing the answer to another open question. Usually 3 to 6 questions.
- **Number each question and give your recommended answer**, worded so "yes" accepts
  it. Make the recommendation a real guess based on what you know so far, not a blank.
- **Facts are your job, decisions are theirs.** If they mention a website, social
  account, or existing logo, go look at it yourself instead of asking them to
  describe it.
- **Push on vague answers once**, kindly: "Most businesses would say that. What would
  a customer say is different about you?" Then accept what they give.
- Stop when nothing important is left assumed. Then summarize and confirm.

Round format:

```
❓ **Q1 - <short title>**: <question, with 2-4 options if helpful>

➡️ My guess: <recommended answer>
```

## The design tree (what you need to learn)

Work outward from the root. Skip anything they already answered.

1. **Root: the business.** What they do in one sentence. What they sell (service,
   product, both). Stage (idea, side project, running business). Existing name, logo,
   site, or socials?
2. **The customer.** The one best-fit customer, specifically (who, situation, what
   they were doing right before they search for this). What they worry about. What
   makes them say yes.
3. **The why.** Why this business exists. Why them. The one thing competitors do
   that they refuse to do (or the reverse).
4. **The job of the website.** The single most important action a visitor should take
   (book, buy, call, join, email). Secondary actions. What success looks like in 3
   months.
5. **Personality.** If the brand were a person: 3 to 5 adjectives, and 2 adjectives it
   must never be. A brand they love outside their industry and why.
6. **Voice.** How the site talks (example: "warm, direct, a little funny, never
   corporate"). Words they love, words they hate. Formal "you" or casual.
7. **Look hints.** Colors they love or hate, existing brand assets that must stay,
   anything they have seen that made them think "that's us".
8. **Constraints.** Budget for paid tools, deadline, who will update the site, must-have
   pages or features (booking, shop, newsletter, blog).
9. **Competitors.** 2 or 3 competitors. Look at their sites yourself and note
   positioning, colors, and tone, so we can stand apart from them.

## Output: brand/BRAND.md

After they confirm your summary, write:

```markdown
# <Brand name>

## In one sentence
## The customer
## Why we exist
## What the website must do
Primary action:
Secondary actions:
## Personality
Is: ... / Is never: ...
## Voice
Sounds like: ... / Never sounds like: ...
Words we use: ... / Words we avoid: ...
Example line in our voice:
## Look hints
## Competitors and how we stand apart
## Constraints
Budget for paid tools: / Deadline: / Who updates the site:
## Open questions
```

Also write two short pointer files so other skills find the brand without re-asking:
- `PRODUCT.md` at the project root: the one-sentence description, the customer, the
  website's primary action, the personality and voice lines, then "Full brand:
  brand/BRAND.md". (impeccable reads this file.)
- `.agents/product-marketing.md`: "This project's brand and positioning live in
  brand/BRAND.md. Do not ask again for anything it answers." (Corey Haines' marketing
  skills read this file.)

Then update `brand/PROGRESS.md`, show the Phase 1 card from the brand-builder lessons,
and recommend Phase 2 (`reference-analysis`).
