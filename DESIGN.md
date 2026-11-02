---
name: JBOXGames
description: A warm, modern independent games workshop.
colors:
  cotton: "#f6f4ee"
  ink: "#1f2226"
  brown: "#4a2e1b"
  muted: "#655e58"
  crimson: "#9e2a2b"
  amber: "#d4a373"
  line: "#d9d4ca"
  card-paper: "#fffdf6"
  card-border: "#d8d1c4"
  about-surface: "#ebe7de"
  quiet-on-ink: "#d0c9bc"
  primary-hover: "#7e2022"
  crimson-art-hover: "#8d2426"
  ink-art-hover: "#2c3035"
typography:
  display:
    fontFamily: "Bricolage, Georgia, serif"
    fontSize: "clamp(64px, 6.5vw, 92px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage, Georgia, serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage, Georgia, serif"
    fontSize: "29px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  focus: "3px"
  button: "7px"
  artwork: "14px"
  tag: "20px"
spacing:
  small: "12px"
  medium: "20px"
  gutter: "28px"
  wide: "40px"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.cotton}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  project-kind:
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: "4px 11px"
  project-art-rvlry:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.cotton}"
    rounded: "{rounded.artwork}"
    height: "278px"
  project-art-quiz:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cotton}"
    rounded: "{rounded.artwork}"
    height: "278px"
  playing-card:
    backgroundColor: "{colors.card-paper}"
    textColor: "{colors.crimson}"
    rounded: "{rounded.artwork}"
    width: "156px"
    height: "218px"
---

# Design System: JBOXGames

## Overview

**Creative North Star: "The Independent Games Workshop"**

Warm paper, confident lettering and familiar game geometry make this feel like a small maker's invitation to play. Generous open space gives the games room to speak; crimson and amber provide the personality.

Typography, CSS and inline vectors create the artwork. There are no shipping raster images. The letter-card hand is the signature expression, with a short deal and a modest hover spread.

**Key Characteristics:**

- Warm cotton surfaces and charcoal text.
- Characterful display lettering with quiet, readable body copy.
- Unboxed content beneath distinct rounded game artwork.
- Restrained motion with a static reduced-motion treatment.

Verification (2 November 2026): final independent verdict **SHIP**, following revised CSS inspection and captures at 320, 390, 768 and 1440px. Browser checks reported no document overflow at 320, 768 and 1024px, confirmed that the deal animation releases its transform before hover, and checked reduced motion. This record combines source extraction with the reviewers' browser evidence; it is not a separate exhaustive browser or accessibility certification.

## Colors

The palette combines warm neutrals with a deep crimson primary and restrained amber secondary. Frontmatter values are normative; sidecar tonal ramps are panel previews rather than additional shipping colors.

### Primary

Velvet Crimson carries the main action, emphasized display words, brand mark and RVLRY artwork. The primary action and artwork have distinct darker hover colors.

### Secondary

Finale Amber provides card variation, logo punctuation and the quiz star. Maduro Brown supplies readable lettering on the amber card.

### Neutral

Raw Cotton is the page ground; Spades Black anchors text and Quick Quiz artwork. Muted warm gray supports descriptions and notes. The divider color separates sections and outlines category tags. Lighter card paper, its fine border, the about surface and quiet text on dark artwork create local tonal distinctions.

**The Contrast Rule.** Keep body text in ink or muted gray on cotton; amber is a detail color, with brown lettering when it becomes a surface.

## Typography

**Display Font:** Bricolage Grotesque, registered locally as Bricolage, with Georgia and serif fallbacks.  
**Body Font:** Manrope, with Segoe UI and sans-serif fallbacks.

Both are locally stored variable TrueType fonts covering weights 200–800, using swap loading. Their OFL licenses live beside the files in `assets/fonts/`.

Bricolage supplies the workshop's friendly, slightly irregular character. Manrope keeps navigation, descriptions and labels compact and clear. Headings use tight tracking and balanced wrapping.

The frontmatter records desktop display, section headline, project title, body and small-label roles. The about headline is larger than the section headline (47px); introduction copy is 19px with 1.7 line height. Project descriptions use 14px with 1.8 line height and a 59ch maximum; about copy is limited to 57ch. Small artwork labels use uppercase lettering with 0.08em tracking. Large project logotypes use Bricolage weights 750–800.

## Layout

The content wrapper caps at 1192px, with 48px side gutters. At 1000px and below the gutters become 32px, then 20px at 700px and below. The hero uses unequal flexible columns; project and about regions use two columns. Below 700px all three become single-column, the section introduction stacks, the contact navigation item disappears, and the footer stacks. Keep navigation visible rather than introducing a menu.

Desktop project columns have a 40px gap, reducing to 28px below 1000px. Artwork is 278px tall, reducing to 250px. Desktop section spacing is generous: projects have 76px above and 87px below; mobile uses 48px and 53px. The about band uses 64px vertical padding, reducing to 46px.

Display type steps down at 1000px, changes to a mobile fluid scale below 700px, and uses a narrower 41–49px clamp below 380px. The decorative hand scales to 0.75 between 701–1100px, 0.78 at 700px and below, and 0.64 below 380px. Its mobile scene height is 260px. These explicit fitting rules preserve visible card silhouettes without document overflow.

## Elevation & Depth

Most surfaces are flat. Section rules, the about band and contrasting artwork provide structure. Only the overlapping letter cards have a soft warm shadow (`0 10px 24px #4a2e1b1c`); overlap and rotation make them feel tangible. Project content has no enclosing card shadow.

**The Paper Depth Rule.** Reserve the observed shadow for the playing-card illustration; use tone and whitespace for content structure.

## Shapes

Buttons have modest rounded corners; artwork and playing cards share the broader artwork radius. Category tags are outlined capsules. The brand uses a rounded-square die, artwork opening affordances use circles, and decorative motifs use diamonds and a straight-ended radial star. Icons are simple round-capped line vectors, normally 22px with a 1.6 stroke.

## Components

### Primary action and links

The crimson action is an inline-flex link with a 55px minimum height, bold 14px text and a directional icon. Its background darkens over 0.2s. Text actions use bold 13px text, a 40px minimum height and an arrow; hover adds crimson and an underline. The contact link is larger (20px desktop, 19px mobile).

All links receive a crimson focus outline (3px, 6px offset), with a small corner radius. The keyboard skip link appears on focus.

### Navigation and category tags

Navigation is a compact horizontal row, with 14px semibold text and 34px gaps; mobile uses 12px and 18px gaps. Hover changes link color to crimson. Project categories are quiet 12px outlined capsules, with no interactive behavior.

### Project artwork and content

Each project has a linked artwork panel followed by an unboxed title, category, description and actions. RVLRY uses crimson, oversized display letters and faint outlined diamonds. Quick Quiz uses ink, a compact stacked logotype and an amber star. A circular opening arrow sits at the lower right. Hover darkens the panel and adds a translucent fill to the arrow circle. The Google Play note remains plain, non-interactive text.

### Letter-card hand

Four overlapping cards spell PLAY, alternating crimson, paper and amber. Each has large central lettering and mirrored corners. The deal lasts 0.85s with 70ms stagger steps and `cubic-bezier(0.16, 1, 0.3, 1)`. Its fill mode is **backwards**, so the completed animation does not retain the transform and block hover. The outside cards spread on hover with a 0.65s transition.

Reduced motion disables the deal, transitions and smooth scrolling, and retains the resting card transforms on hover. The illustration is decorative and hidden from assistive technology.

## Do's and Don'ts

### Do:

- Do use local Bricolage and Manrope with their supplied fallback stacks.
- Do preserve open content, warm surfaces and clear game-specific artwork.
- Do preserve visible keyboard focus and the static reduced-motion hand.
- Do keep project art as typography, CSS geometry and inline vectors.

### Don'ts:

- Don't add enclosing shadows to the project content.
- Don't retain the deal animation's final transform with forwards or both fill mode.
- Don't make the Google Play availability note interactive without a real supplied URL.

