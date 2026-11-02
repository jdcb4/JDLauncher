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
  about-surface: "#ebe7de"
  quiet-on-ink: "#d0c9bc"
  primary-hover: "#7e2022"
  crimson-art-hover: "#8d2426"
  ink-art-hover: "#2c3035"
typography:
  display:
    fontFamily: "Bricolage, Georgia, serif"
    fontSize: "clamp(38px, 4.2vw, 60px)"
    fontWeight: 700
    lineHeight: 1.08
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
    height: "240px"
  project-art-quiz:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cotton}"
    rounded: "{rounded.artwork}"
    height: "240px"
---

# Design System: JBOXGames

## Overview

A compact developer homepage with cotton surfaces, charcoal text, crimson emphasis and amber details. Keep the two games and contact information easy to find. The user explicitly removed the decorative PLAY hand, redundant slogans, the introductory project button and duplicate game text links on 2 November 2026.

## Colors

The frontmatter records the palette. Crimson emphasizes the headline, brand mark and RVLRY; ink anchors text and Quick Quiz; amber highlights game artwork. Use the muted color for readable supporting copy and the warm about surface for separation.

## Typography

Self-hosted Bricolage Grotesque (registered as Bricolage) supplies headings; Manrope supplies body copy. Preserve their existing fallback stacks and OFL licenses. The main heading uses a 38–60px fluid scale, or 36–48px on mobile. Project descriptions remain 14px with 1.8 line height.

## Layout

The wrapper caps at 1192px, with 48px side gutters, then 32px at 1000px and 20px at 700px. The header is 84px tall, or 72px on mobile. The intro places a compact headline beside the location; mobile stacks them.

Projects use two columns, then one below 700px. Artwork is 240px tall, reducing to 220px below 1000px. Project section padding is 24px above and 36px below (20px and 28px on mobile). The about band uses 36px vertical padding, or 28px on mobile. Footer height is 72px, or 96px with stacked content on mobile.

## Elevation & Depth

Use flat surfaces, subtle rules and the about band's tone. The approved brand artwork retains its original shading; other page surfaces remain flat.

## Shapes

Retain 14px artwork corners, outlined category capsules and circular opening arrows. The approved brand mark is a crimson J game box with two cards, including an Ash Bloom outline around the rear cotton card so it remains visible on white. Game artwork contains simple diamond and star geometry.

## Components

The header and footer use the approved original JBOXGames logo with the outlined pale card (2 November 2026). `assets/jboxgames-logo.webp` is the optimized transparent lockup, rendered at 240px wide on desktop and 160px on mobile; the footer uses 150px. `assets/favicon.png` and `assets/apple-touch-icon.png` use the matching approved icon. Full-resolution masters and generation prompts are retained in `output/branding/` and excluded from the publish allowlist.

Each game has exactly one link, on its artwork. Follow with its title, category and description; the pending Google Play note is plain text. Navigation, contact and GitHub links retain visible keyboard focus. The crimson primary button is used only by the 404 page to return home.

No entrance animation or decorative PLAY hand. Existing game artwork hover colors remain, and reduced motion disables transitions and smooth scrolling.

## Do's and Don'ts

- Keep the page compact and direct, preserving readable spacing and clear game artwork.
- Keep one destination link per game, plus functional contact and GitHub links.
- Preserve local fonts, keyboard focus and the non-interactive Google Play note.
- Do not restore the PLAY motif, redundant slogans or a button linking to the next section.
