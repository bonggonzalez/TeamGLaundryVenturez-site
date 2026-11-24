---
name: Team G Laundry Venturez
description: A light, product-led commercial-equipment site: white into pale blue, near-black display type, one cobalt for action.
colors:
  ink: "#0b1220"
  slate-muted: "#46556a"
  paper: "#ffffff"
  mist-blue: "#e8f3ff"
  hairline: "#d3dfec"
  cobalt: "#1d4ed8"
  cobalt-deep: "#1740b3"
  scrollbar-thumb: "#9db4d3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "5.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  sm: "0.5rem"
  md: "0.6rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.75rem"
  lg: "2.5rem"
  section: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
  button-on-cobalt:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cobalt-deep}"
    rounded: "{rounded.md}"
    padding: "1rem 1.75rem"
  button-on-cobalt-hover:
    backgroundColor: "{colors.mist-blue}"
  button-header:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.1rem"
  chip-province:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
---

# Design System: Team G Laundry Venturez

## Overview

**Creative North Star: "The Showroom Spec Sheet"**

This is the category standard played straight: a clean commercial-equipment page where large near-black type and a single washer/dryer illustration carry the message, and everything else stays out of the way. The page reads like a manufacturer's professional-laundry page rather than a consumer wash-and-fold flyer or a dark tech catalog. It is built for owners and operators making a capital-equipment decision, so it is calm, legible and confident, not playful.

Surfaces are white that drifts into a pale blue field (hero gradient, audience band). Text is near-black ink with a cool slate for secondary copy. One cobalt blue does all the work of action: buttons, links' underline accents, focus rings, the scroll-selected text and the closing band. Structure comes from hairline rules and generous section padding, not from boxes or cards.

The hero is the one place with an image-like object: an authored SVG pair of commercial machines with stainless drums that turn slowly. It is explicitly an illustration (captioned as such) until real photography arrives.

**Key Characteristics:**
- Light, product-led, huge tight-tracked display type in near-black.
- White into pale blue; cobalt reserved for action and the closing band.
- Hairline rules and open columns instead of cards.
- One authored illustration; slow, reduced-motion-safe drum rotation is the only ambient motion.
- Flat surfaces; the only shadows sit under primary buttons.

## Colors

A cool, almost monochrome palette: white and ink, a tint of sky blue, and one deliberate cobalt.

### Primary
- **Signal Cobalt** (`#1d4ed8`): the single action color. Primary and header buttons, the closing band background, focus outline, caret, text selection, the underline accent on the text link, the active-nav underline, and the indicator light on the illustrated machines.
- **Deep Cobalt** (`#1740b3`): hover state for cobalt buttons, hover color for the text link, and the text color of links and the inverted button on light grounds.

### Neutral
- **Showroom Ink** (`#0b1220`): all headings, body text, province pill borders, the heavy rule above the audience columns, and the washer control panels.
- **Cool Slate** (`#46556a`): secondary copy, ledes, captions, inactive nav links, footer text.
- **Clean White** (`#ffffff`): page background, hero gradient start, inverted button, machine bodies.
- **Mist Blue** (`#e8f3ff`): hero gradient end, the audiences band, scrollbar track, inverted-button hover.
- **Hairline Blue-Gray** (`#d3dfec`): every divider, header bottom border, footer top border, section separators.
- **Scroll Thumb** (`#9db4d3`): scrollbar thumb only.

### Named Rules
**The One Cobalt Rule.** Cobalt means "act here" or "this is the closing ask." It is never used as decoration, as a heading color, or as a second background tint beyond the closing band.

**The Cool Neutrals Rule.** Every gray is blue-tinted. No warm or pure-neutral grays enter the palette.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), variable 400-800, self-hosted woff2
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, sans-serif), variable 400-700, self-hosted woff2

**Character:** Bricolage at weight 800 with tight negative tracking gives the headlines a heavy, poster-like confidence; Hanken Grotesk is a neutral, readable workhorse that keeps the body businesslike.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 7.5vw, 5.25rem)`, line-height 1, tracking -0.04em): the hero H1 only.
- **Headline** (800, `clamp(2rem, 4.5vw, 3.5rem)` for the claim; `clamp(1.9rem, 4vw, 3rem)` for scope and audiences; `clamp(2rem, 5vw, 3.75rem)` for the closing band; line-height 1.04 to 1.05, tracking -0.03em): section H2s, balanced wrap.
- **Title** (700, 1.4rem to 1.5rem, tracking -0.03em): scope item and audience item H3s.
- **Body** (400, 1.0625rem, line-height 1.6): default copy. Secondary paragraphs are Cool Slate, capped at 28 to 38rem line length.
- **Lede** (400, `clamp(1.1rem, 2vw, 1.35rem)`, Cool Slate, max 34rem): the sentence under the hero headline.
- **Label** (600, 0.95rem to 1.1rem, no uppercase, no tracking): buttons, the text link, audience links, province pills (display face at 700).

### Named Rules
**The Heavy-Tight Rule.** Display and headline text is always weight 800 with negative tracking and `text-wrap: balance`; titles drop to 700. Body never uses the display face except for pills and the brand name.

## Layout

A single centered container (max-width 76rem, side padding 1.25rem, 2rem from 768px, 3rem from 1280px). Sections are full-bleed bands with vertical padding `clamp(3.5rem, 9vw, 7rem)`; the page container is released on the home page so each band controls its own background while content stays in the inner container.

The hero fills the first viewport (`min-height: calc(100svh - 4.5rem)`), two columns from 960px (copy 1.15fr, illustration 1fr), stacked below. The claim band splits 1.1fr / 1fr from 960px. The scope section is a sticky 22rem heading column beside a ruled list from 1024px; list rows become a 15rem title / text pair from 768px. Audiences are three open columns from 860px, divided by vertical hairlines. Mobile collapses everything to one column with the same rhythm.

The sticky header carries the brand, four nav links and the primary action; on narrow screens nav wraps to a second row. Gaps run on a loose rem scale (0.25, 0.5, 0.6, 1, 1.4, 1.75, 2.5, 4rem).

### Named Rules
**The Open Column Rule.** Group content with rules and whitespace, not containers. Lists are separated by hairlines; there are no cards.

## Elevation & Depth

The system is flat. Depth is conveyed by tonal change (white to Mist Blue bands, a Cobalt closing band), hairline rules, and the gradients inside the illustration. The only shadows are soft, blurred ambient shadows beneath primary buttons, plus a faint ground ellipse under the illustrated machines. The sticky header is translucent white with an 8px backdrop blur and a hairline bottom border.

### Shadow Vocabulary
- **Button lift** (`box-shadow: 0 6px 18px rgba(29, 78, 216, 0.28)`): primary cobalt button at rest.
- **Button lift on cobalt** (`box-shadow: 0 8px 22px rgba(4, 12, 40, 0.3)`): the white inverted button on the closing band.
- **Header glass** (`background: rgba(255,255,255,0.92); backdrop-filter: blur(8px)`): sticky header only.

### Named Rules
**The Flat-By-Default Rule.** Nothing else carries a shadow. Large buttons lift 2px on hover; panels, rows and pills stay flat.

## Shapes

Soft but not rounded-playful: large buttons use 0.6rem corners, the compact header button 0.5rem, focus outlines 4px. Province pills are fully round (999px) with a 1.5px ink outline. Dividers are 1px hairlines; the one heavier rule is a 1.5px ink line capping the audience list. The illustration uses 22px-radius machine bodies, circular drums and rounded control panels.

## Components

### Buttons
- **Shape:** gently rounded (0.6rem), 0.5rem on the header variant.
- **Primary:** Signal Cobalt fill, white 600-weight text at 1.1rem, padding 1rem 1.75rem, with the cobalt button-lift shadow.
- **Hover / Focus:** fills to Deep Cobalt and rises 2px over 0.25s on `cubic-bezier(0.16, 1, 0.3, 1)`; focus uses the global 3px cobalt outline with 3px offset.
- **On cobalt:** white fill, Deep Cobalt text; hover fills Mist Blue. Used only on the closing band.
- **Header:** compact version (0.95rem text, 0.6rem 1.1rem padding), no shadow, color-only hover.
- **Text link:** ink 600-weight text with a 2px cobalt underline offset 0.35em; hover turns Deep Cobalt.

### Chips
- **Province pills:** display face 700 at 1.1rem, 1.5px ink outline, fully round, transparent fill. Static, not interactive.

### Navigation
- **Style:** sticky, translucent white bar; brand in display 800 with the second half ("Laundry Venturez") at 500; links in Hanken 500, Cool Slate.
- **States:** hover and current page turn ink with a 2px cobalt underline.
- **Mobile:** links wrap onto a full-width second row under the brand and action.

### Ruled List (signature)
Scope and audience content are presented as ruled rows rather than cards: a display-face title, Cool Slate description, hairline separators; audience entries end with a Deep Cobalt "Talk to Team G" link with an arrow.

### Machine Illustration (signature)
An authored SVG of a commercial washer and dryer: white-to-blue body gradient, ink control panel with a cobalt indicator, stainless radial-gradient drum, glass overlay. Drums rotate at 14s and 22s (reversed), linear, only when reduced motion is not requested.

## Do's and Don'ts

### Do:
- **Do** use Signal Cobalt (`#1d4ed8`) only for actions, focus and the closing band.
- **Do** set headlines in Bricolage Grotesque 800 with negative tracking and balanced wrapping.
- **Do** separate content with 1px Hairline Blue-Gray rules and generous vertical padding.
- **Do** keep surfaces flat; reserve shadows for large primary buttons.
- **Do** gate ambient motion behind `prefers-reduced-motion: no-preference`.
- **Do** label illustrations as illustrations until real photography is supplied.

### Don't:
- **Don't** return to the dark-blue consumer wash-cycle look or a wash-and-fold tone; the audience is equipment buyers.
- **Don't** introduce a second accent hue or warm grays.
- **Don't** wrap list content in cards or boxed panels.
- **Don't** invent prices, models, clients, photos or credentials in copy or imagery.
