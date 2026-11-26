---
name: TeamG Venturez
description: A light, product-led commercial-equipment site: white into pale blue, near-black display type, one cobalt for action, brand navy for the closing ask.
colors:
  ink: "#0b1220"
  slate-muted: "#46556a"
  paper: "#ffffff"
  mist-blue: "#e8f3ff"
  hairline: "#d3dfec"
  cobalt: "#1d4ed8"
  cobalt-deep: "#1740b3"
  navy: "#04101f"
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
  lg: "0.9rem"
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
  button-on-navy:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cobalt-deep}"
    rounded: "{rounded.md}"
    padding: "1rem 1.75rem"
  button-on-navy-hover:
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

# Design System: TeamG Venturez

## Overview

**Creative North Star: "The Showroom Spec Sheet"**

This is the category standard played straight: a clean commercial-equipment page where large near-black type and real Samsung equipment imagery carry the message, and everything else stays out of the way. The page reads like a manufacturer's professional-laundry page rather than a consumer wash-and-fold flyer or a dark tech catalog. It is built for owners and operators making a capital-equipment decision, so it is calm, legible and confident, not playful.

Surfaces are white that drifts into a pale blue field (hero gradient, audience band). Text is near-black ink with a cool slate for secondary copy. One cobalt blue does all the work of action: buttons, links' underline accents, focus rings and the scroll-selected text. The one dark ground is the brand navy taken from the TG mark, used for the closing band that ends a page. Structure comes from hairline rules and generous section padding, not from boxes or cards.

Imagery is Samsung professional equipment photography (owner-approved, sourced from the Samsung line TeamG distributes) in a banner carousel and in single photographs. It is captioned "Image shown for illustration" until real photography of TeamG installations arrives. The header and footer carry a logo lockup: the TeamG Venturez mark beside the Samsung Professional Laundry logo.

**Key Characteristics:**
- Light, product-led, huge tight-tracked display type in near-black.
- White into pale blue; cobalt reserved for action; brand navy reserved for the closing band.
- Hairline rules and open columns instead of cards, including the package columns.
- Real equipment photography, captioned as illustration.
- Flat surfaces; shadows sit under primary buttons, the carousel arrows and the home page equipment photo only.

## Colors

A cool, almost monochrome palette: white and ink, a tint of sky blue, one deliberate cobalt, and a deep navy for the close.

### Primary
- **Signal Cobalt** (`#1d4ed8`): the single action color. Primary and header buttons, focus outline, caret, text selection, the underline accent on the text link, the active-nav underline, text links inside bands and disclosure summaries.
- **Deep Cobalt** (`#1740b3`): hover state for cobalt buttons, hover color for the text link, and the text color of the inverted button on dark grounds.

### Neutral
- **Showroom Ink** (`#0b1220`): all headings, body text, province pill borders and the heavy rule above column groups.
- **Cool Slate** (`#46556a`): secondary copy, ledes, captions, inactive nav links, footer text.
- **Clean White** (`#ffffff`): page background, hero gradient start, inverted button.
- **Mist Blue** (`#e8f3ff`): hero gradient end, the audiences band, scrollbar track, inverted-button hover.
- **Hairline Blue-Gray** (`#d3dfec`): every divider, header bottom border, footer top border, section separators.
- **Brand Navy** (`#04101f`): the closing band background on every page, matching the TG mark. White text and the inverted button sit on it.
- **Scroll Thumb** (`#9db4d3`): scrollbar thumb only.

### Named Rules
**The One Cobalt Rule.** Cobalt means "act here". It is never used as decoration, as a heading color, or as a background tint.

**The Navy Close Rule.** Brand Navy is the only dark ground and appears once per page, as the closing band. It is not a second accent and never a section background mid-page.

**The Cool Neutrals Rule.** Every gray is blue-tinted. No warm or pure-neutral grays enter the palette.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), variable 400-800, self-hosted woff2
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, sans-serif), variable 400-700, self-hosted woff2

**Character:** Bricolage at weight 800 with tight negative tracking gives the headlines a heavy, poster-like confidence; Hanken Grotesk is a neutral, readable workhorse that keeps the body businesslike.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 7.5vw, 5.25rem)`, line-height 1, tracking -0.04em): the hero H1 only.
- **Headline** (800, `clamp(2rem, 4.5vw, 3.5rem)` for the claim; `clamp(1.9rem, 4vw, 3rem)` for scope and audiences; `clamp(2rem, 5vw, 3.75rem)` for the closing band; line-height 1.04 to 1.05, tracking -0.03em): section H2s, balanced wrap.
- **Title** (700, 1.4rem to 1.5rem, tracking -0.03em): scope item, audience item and package column H3s.
- **Body** (400, 1.0625rem, line-height 1.6): default copy. Prose is capped at 65ch; secondary paragraphs are Cool Slate, capped at 28 to 38rem on the home page.
- **Lede** (400, `clamp(1.1rem, 2vw, 1.35rem)`, Cool Slate, max 34rem): the sentence under the hero headline.
- **Label** (600, 0.95rem to 1.1rem, no uppercase, no tracking): buttons, the text link, audience links, captions, province pills (display face at 700).

### Named Rules
**The Heavy-Tight Rule.** Display and headline text is always weight 800 with negative tracking and `text-wrap: balance`; titles drop to 700. Body never uses the display face except for pills and the brand name.

## Layout

A single centered container (max-width 76rem, side padding 1.25rem, 2rem from 768px, 3rem from 1280px). Sections are full-bleed bands with vertical padding `clamp(3.5rem, 9vw, 7rem)`; the page container is released on the home page so each band controls its own background while content stays in the inner container.

The hero fills the first viewport (`min-height: calc(100svh - 4.5rem)`), two columns from 960px (copy 1.15fr, photograph 1fr), stacked below. The claim band splits 1.1fr / 1fr from 960px. The scope section is a sticky 22rem heading column beside a ruled list from 1024px; list rows become a 15rem title / text pair from 768px. Audiences are three open columns from 860px, divided by vertical hairlines. On the packages page the four package columns sit two across from 900px and four across from 1200px, each capped with a 2px ink rule. Mobile collapses everything to one column with the same rhythm.

The sticky header carries the logo lockup, seven nav links and the primary action; on narrow screens nav wraps to a second row, and a sticky contact bar with call, Viber, WhatsApp, Messenger, email and Facebook icons plus a quote button sits at the bottom. Gaps run on a loose rem scale (0.25, 0.5, 0.6, 1, 1.4, 1.75, 2.5, 4rem).

### Named Rules
**The Open Column Rule.** Group content with rules and whitespace, not containers. Lists are separated by hairlines; there are no cards.

## Elevation & Depth

The system is flat. Depth is conveyed by tonal change (white to Mist Blue bands, a Navy closing band) and hairline rules. Shadows are soft, blurred and few: beneath primary buttons, beneath the carousel arrow buttons, and under the large equipment photograph on the home page. The sticky header is translucent white with an 8px backdrop blur and a hairline bottom border.

### Shadow Vocabulary
- **Button lift** (`box-shadow: 0 6px 18px rgba(29, 78, 216, 0.28)`): primary cobalt button at rest.
- **Button lift on navy** (`box-shadow: 0 8px 22px rgba(4, 12, 40, 0.3)`): the white inverted button on the closing band.
- **Carousel arrow** (`box-shadow: 0 6px 18px rgba(4, 16, 31, 0.18)`): the round arrow buttons over the banners.
- **Photo float** (`box-shadow: 0 24px 48px -24px rgba(11, 18, 32, 0.35)`): the home page equipment photograph only.
- **Header glass** (`background: rgba(255,255,255,0.92); backdrop-filter: blur(8px)`): sticky header only.

### Named Rules
**The Flat-By-Default Rule.** Nothing else carries a shadow. Large buttons lift 2px on hover; panels, rows, pills and the packages-page photograph stay flat.

## Shapes

Soft but not rounded-playful: large buttons use 0.6rem corners, the compact header button 0.5rem, photographs and banner slides 0.9rem, focus outlines 3 to 4px. Province pills are fully round (999px) with a 1.5px ink outline. Carousel arrows and dots are circles. Dividers are 1px hairlines; the heavier rules are a 2px ink line capping each package column and a 1.5px ink line capping the audience list.

## Components

### Buttons
- **Shape:** gently rounded (0.6rem), 0.5rem on the header variant.
- **Primary:** Signal Cobalt fill, white 600-weight text at 1.1rem, padding 1rem 1.75rem, with the cobalt button-lift shadow.
- **Hover / Focus:** fills to Deep Cobalt and rises 2px over 0.25s on `cubic-bezier(0.16, 1, 0.3, 1)`; focus uses the global 3px cobalt outline with 3px offset.
- **On navy:** white fill, Deep Cobalt text; hover fills Mist Blue; focus outline is white. Used only on the closing band.
- **Header:** compact version (0.95rem text, 0.6rem 1.1rem padding), no shadow, color-only hover.
- **Text link:** Signal Cobalt 600-weight text inside bands, for secondary actions that should not compete with a button (hotel, support, upgrade). The home page text link is ink with a 2px cobalt underline offset 0.35em; hover turns Deep Cobalt.

### Chips
- **Province pills:** display face 700 at 1.1rem, 1.5px ink outline, fully round, transparent fill. Static, not interactive.

### Navigation
- **Style:** sticky, translucent white bar; brand is the logo lockup (TeamG Venturez mark, divider, Samsung Professional Laundry logo); links in Hanken 500, Cool Slate.
- **States:** hover and current page turn ink with a 2px cobalt underline.
- **Mobile:** links wrap onto a full-width second row under the logos and action; a sticky bottom bar carries the contact actions.

### Ruled List (signature)
Scope and audience content are presented as ruled rows rather than cards: a display-face title, Cool Slate description, hairline separators; audience entries end with a Deep Cobalt "Talk to TeamG" link with an arrow.

### Package Column (signature)
An open column capped with a 2px ink rule: a Title-weight set count, a 700-weight price line, two hairline-ruled facts (equipment width, daily capacity) and a primary button. Scope and fine print sit below the columns in a ruled list and a collapsed disclosure (Signal Cobalt 600 summary), never inside the column.

### Equipment Photograph (signature)
Owner-approved Samsung professional equipment imagery, 0.9rem corners, always captioned "Image shown for illustration" in Cool Slate. The home page version floats on the Photo float shadow; the packages page version is a flat 16:6 banner crop on desktop and 16:9 on mobile.

### Banner Carousel
Full-width promotional slides (2400 by 1256 ratio) with a 1px hairline border and 0.9rem corners, round white arrow buttons with the Carousel arrow shadow, and dot indicators that turn cobalt when current.

## Do's and Don'ts

### Do:
- **Do** use Signal Cobalt (`#1d4ed8`) only for actions and focus, and Brand Navy (`#04101f`) only for the closing band.
- **Do** set headlines in Bricolage Grotesque 800 with negative tracking and balanced wrapping.
- **Do** separate content with 1px Hairline Blue-Gray rules and generous vertical padding.
- **Do** keep surfaces flat; reserve shadows for large primary buttons, carousel arrows and the home page photograph.
- **Do** cap running prose at 65ch and keep fine print in a collapsed disclosure.
- **Do** caption equipment imagery as an illustration until real photography of TeamG installations is supplied.

### Don't:
- **Don't** return to the dark-blue consumer wash-cycle look or a wash-and-fold tone; the audience is equipment buyers.
- **Don't** introduce a second accent hue or warm grays.
- **Don't** wrap list content or package columns in cards or boxed panels.
- **Don't** state prices, models, clients or credentials the owner has not confirmed, or present simulated imagery as real installations.
