# <Brand> Design System

Source of truth in code: `styles/tokens.css`. Visual board: Paper file "<name>", page
"Design System" (or `design-system.html`). These three must always agree.

## Feeling
<2-3 sentences: the atmosphere, tied to the BRAND.md personality words>

## Color
| Token | Hex | Job |
|---|---|---|
| --color-bg | | page background |
| --color-surface | | cards, panels |
| --color-text | | main text |
| --color-text-muted | | secondary text |
| --color-border | | lines, dividers |
| --color-accent | | the one accent: primary buttons, key highlights |
| --color-accent-contrast | | text on the accent |

Contrast checked: text on bg __:1, muted on bg __:1, accent-contrast on accent __:1.

## Typography
Display: <font> (<source>, license) / Body: <font> (<source>, license)
| Step | Token | Size (mobile → desktop) | Line height | Tracking | Use |
|---|---|---|---|---|---|
| Hero | --text-hero | | | | page headline |
| H2 | --text-2xl | | | | section headlines |
| H3 | --text-xl | | | | card titles |
| Lead | --text-lg | | | | intro paragraphs |
| Body | --text-base | | | | paragraphs |
| Small | --text-sm | | | | captions, labels |

## Spacing, shape, depth
Spacing scale: --space-1 (4px) to --space-10 (128px). Section padding: <token>.
Radii: <tokens and where each is used>. Shadows: <tokens and where each is used>.

## Motion
Durations and easings: <tokens>. What moves: <list>. What never moves: <list>.
Reduced motion: all non-essential motion off under `prefers-reduced-motion: reduce`.

## Components
- Button (primary, secondary, text link): <rules>
- Tag / badge: <rules>
- Input: <rules>
- Card: <rules>
- Nav and footer: <rules>

## Never
- <rule>
- <rule>
- No em or en dashes in site copy.
- No raw hex codes or pixel sizes in page CSS; use tokens.

## Changelog
- <date>: <change> (see brand/DECISIONS.md)
