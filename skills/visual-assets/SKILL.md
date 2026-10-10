---
name: visual-assets
description: Plans and creates the site's images, graphics, icons, logo files, and video using the cheapest tool that can do the job well - the person's own photos, code-drawn graphics, code-rendered video (Remotion or HyperFrames), and only when truly necessary paid generators like Higgsfield. Use for Phase 7 of the brand builder, or when someone says "I need images", "make a hero video", "generate graphics", "make an animation", "icons", "use Higgsfield", or "create a logo".
---

# Visual Assets

Goal: assets that look like *this* brand, not stock or obvious AI. Spend money only
when nothing free can do the job.

**Physical products are the exception to "free first."** If the business sells a thing
people hold (food, drink, cosmetics, candles, apparel), the product has to look real.
Code-drawn 3D or illustrated stand-ins read as fake to customers: in the toolkit's own
dry run, the owner called a Three.js honey jar "terrible, does not look like a real
product." So for product slots, the ladder is: their own product photos, then
photoreal generation (rung 7), and code 3D only as a placeholder they know is temporary.

## Step 1: Make an asset list

Read `brand/COPY.md` (sections) and `DESIGN.md`. List every visual slot: logo,
favicon, hero, section images, icons, backgrounds, social share image (1200x630), and
any video or animation. For each, note what it must communicate.

## Step 2: Pick the tool for each slot (climb the ladder, stop at the first rung that works)

1. **Real photos and video the person already has** (products, space, team, work).
   Always best for trust. Ask for them first. Clean them up: crop, color-match to the
   palette, compress (WebP or AVIF for images).
2. **Code-drawn graphics**: SVG shapes, patterns, gradients, illustrations, and
   icon-style graphics made directly in code from the design tokens. Free, sharp at any
   size, perfectly on-brand. Good for backgrounds, dividers, diagrams, simple icons.
   Products can be drawn as 3D in code (Three.js) as a free placeholder, but it will
   not pass as a real product (see the note above). Two gotchas if you do: a see-through glass made
   with `transmission` hides anything see-through inside it (use a thin transparent
   shell for the glass), and test colors with `NeutralToneMapping`. When the scene
   reads scroll progress, guard every division (`Math.max(1, travel)`): under reduced
   motion pinned sections collapse, the travel becomes 0, and one NaN breaks the scene.
3. **Icon sets**: Flaticon (https://www.flaticon.com) for icons in many styles; free
   icons need visible credit to the author. One icon style per site.
4. **Motion in the page itself**: CSS and small JS animations (Emil's motion skills:
   `emil-design-eng`, `find-animation-opportunities`). Most "make it animated"
   requests are this, not video.
5. **Code-rendered video**: Remotion (`remotion-best-practices`, `remotion-create`
   skills) or HyperFrames make real MP4s from code: logo reveals, animated text,
   product explainers, looping hero backgrounds, launch videos. Free, editable, on-brand.
   Install from the optional add-ons in `../brand-builder/references/stack.md`.
6. **AI image generation built into the agent or plan** (for example the
   `imagegen-frontend-web` skill for hero concepts, or the agent's own image tool).
   Good for concept images and textures; check that results do not look generic.
7. **Higgsfield** (paid, https://higgsfield.ai): photoreal footage or images that the
   rungs above cannot make, for example a cinematic product shot in a setting they do
   not have, or video for a scroll-driven site. Only suggest it when a real need
   exists, explain why the free rungs fall short, and **agree on a spend limit before
   generating anything**. Connection steps are in `../brand-builder/references/stack.md`.
   Draft at low resolution first; produce the final only after they approve the draft.
   What worked in the dry run (Higgsfield CLI, about 120 credits for a full product film):
   - **One master, then references.** Generate one hero product shot. Make every
     variant (other flavors, colors) with the master as an image reference and the words
     "same jar, plinth, light, and framing; change only the label and the contents."
     Five shots then look like one photo shoot. Check every label for spelling.
   - **Shared style text.** Write the lighting, background, lens, and framing once and
     paste it word for word into every prompt. Keep the product at the same spot in
     every frame (for example 62% across) so text has a clear side and clips cut cleanly.
   - **Video between two stills.** A clip with a start image and an end image (Kling
     3.0 `--start-image` and `--end-image`) turns one product into the next. Start a
     follow-on clip from the previous clip's exact last frame (`ffmpeg -sseof -0.05`).
   - **Spell out the order of events and the physics.** "First the lid lifts off, then
     the honey drains inside the glass, then new honey pours into the open jar, then the
     lid comes back." Add "no hands" and "liquid only enters or leaves through the open
     mouth." Without this, the first takes poured honey through a closed lid.
   - **Make the product read as itself.** A glowing jar with a black lid and a square
     label on a plinth reads as a luxury candle, not honey. Light the subject the way
     the real thing shows off (honey, oil, drinks: from behind, so light passes through),
     show it in use (open jar, dipper, a drip), and avoid the look of a neighboring
     category. Ask "what else could this be mistaken for?" before generating variants.
   - **Leave room and go slow.** Keep the product to about a third of the frame so the
     motion (a pour, a fall) has space; ask for 10-second clips with one slow event
     each, not 5-second clips with four. Models frame tighter than asked, so scaling the
     film down in CSS with feathered edges is a free fix.
   - **Pace the scroll, not just the clip.** Give each clip several screens of scroll
     and let the video trail the wheel (ease the playhead toward the scroll position
     over about half a second) so a flick never snaps it forward.
   - **Hidden cuts.** Video models sometimes jump-cut mid-clip even when told not to,
     which feels like a glitch under scroll. Find them with
     `ffmpeg -i clip.mp4 -vf "select='gt(scene,0.25)',showinfo" -f null -` (any
     timestamp printed is a cut). Fix by giving the clip both a start and an end frame:
     the model then has to travel continuously between them.
   - **No dead screens between sections.** Never fade the film to black between acts.
     End each transition clip on the exact still the next section opens with (for
     example pull back out of a close-up onto the first product), and let text sit on
     that still.
   - **Check frames before using a clip.** Pull 5 to 6 frames per clip into one contact
     sheet and look; reroll only the clip that fails. Sound off on every clip.
   - **Scrubbed video needs dense keyframes** (scroll-craft's `encode.sh`) and a local
     server that supports range requests (scroll-craft's `serve.mjs`, not Python's
     http.server). Load only the first clip with the page; fetch the rest on first
     scroll. Under reduced motion, show stills and download no video.

Present the plan as a short table (slot, tool, why, cost) and get a yes.

## Step 3: Logo (if they do not have one)

Use the strategy method in the `brandkit` skill (category, metaphor, "monogram +
meaning", one idea per mark) to pick 3 logo directions tied to BRAND.md. Note that
`brandkit` itself produces a brand-board *image* with an image generator, not usable
logo files: use it for a concept board only if an image tool is available and the
person agrees to any cost. Draw the actual logo as SVG in code (or in Paper): an SVG
master, a one-color version, a favicon (32px and 180px), and dark and light versions.
Preview them at full size and at 16px. If Paper is connected, put the directions on the
Paper "Decisions" page.

## Step 4: Create and file the assets

- Save to `assets/` with clear names (`hero-desktop.webp`, `logo-mark.svg`).
- Images: sized for their slot (not 5000px wide), compressed, with written alt text
  ready for Phase 8.
- Record every source and license in `assets/LICENSES.md` (own photo, made in code,
  Flaticon author + credit line, Higgsfield, Remotion...). Add required credits to the
  site footer.
- For scroll-driven sites, `scroll-craft` has its own asset and encoding workflow; follow it.

Update `brand/PROGRESS.md`, show the Phase 7 card, recommend Phase 8 (mockups and build
in the `brand-builder` skill).
