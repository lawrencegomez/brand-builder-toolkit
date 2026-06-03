# Vibe Coding Guardrails (Karpathy-Inspired)

These are behavioral guidelines to reduce common LLM coding mistakes when using AI tools (like Claude Code or Cursor) for rapid "vibe coding." Merge these with your project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

### 5. Context Management (The 70% Rule)

**Don't let the AI degrade. Force fresh threads.**

One of the biggest mistakes beginners make is keeping a single AI conversation going for far too long. As the context window fills up, the AI starts to hallucinate, forget earlier instructions, and overwrite good code. 

- **The Rule:** When you feel the conversation getting long (heavy code edits, large file reads, or 30+ messages), tell the AI: *"Context is getting high. Save a durable handoff document summarizing where we are, what decisions have been settled, and the immediate next steps."*
- **Fresh Start:** Once the AI writes that handoff document, immediately close the conversation and start a completely fresh thread.
- **The Prompt:** In the new thread, point the AI to the handoff document: *"Read the handoff document at [Path] and continue the next step."*

This guarantees the AI stays sharp, focused, and mathematically precise, rather than collapsing under the weight of a massive chat history.

---

**These guidelines are working if:** you see fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and the AI asks clarifying questions *before* implementation rather than apologizing after mistakes.
