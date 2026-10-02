---
name: ElectroDromos Docs
description: Pedro-shaped documentation for ElectroDromos, signed in black, white, cyan and red.
colors:
  dromos-black: "#08090B"
  dromos-panel: "#111317"
  panel-muted: "#15181C"
  hairline: "#23272D"
  muted-text: "#9AA3AB"
  dromos-white: "#F4F6F7"
  dromos-cyan: "#19E3E8"
  cyan-ink: "#041416"
  cyan-wash: "#0F2A2C"
  dromos-red: "#FF4B3A"
  paper: "#F6F7F8"
  paper-card: "#FFFFFF"
  paper-muted: "#ECEEF0"
  paper-hairline: "#D9DDE1"
  paper-muted-text: "#4F5861"
  ink: "#0B0D10"
  signal-deep: "#007A80"
  signal-deep-wash: "#E1F6F7"
  battery-deep: "#C42E1F"
  wordmark-cyan-light: "#0A8F94"
typography:
  display:
    fontFamily: "Chakra Petch, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Chakra Petch, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Chakra Petch, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "-0.01em"
  readout:
    fontFamily: "Chakra Petch, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    fontFeature: "\"tnum\" 1"
  lockup:
    fontFamily: "Chakra Petch, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.025em"
  lead:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
  caption:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  icon-tile: "12px"
  panel: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  hero-top: "56px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.dromos-cyan}"
    textColor: "{colors.cyan-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dromos-white}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-secondary-hover:
    textColor: "{colors.dromos-cyan}"
  segment-active:
    backgroundColor: "{colors.dromos-cyan}"
    textColor: "{colors.cyan-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  segment-idle:
    backgroundColor: "transparent"
    textColor: "{colors.muted-text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  panel-card:
    backgroundColor: "{colors.dromos-panel}"
    textColor: "{colors.dromos-white}"
    rounded: "{rounded.panel}"
    padding: "24px"
  icon-tile:
    backgroundColor: "transparent"
    textColor: "{colors.dromos-cyan}"
    rounded: "{rounded.icon-tile}"
    size: "48px"
    padding: "10px"
  feature-row:
    backgroundColor: "transparent"
    textColor: "{colors.dromos-white}"
    typography: "{typography.title}"
    padding: "16px 4px"
  feature-row-hover:
    backgroundColor: "{colors.cyan-wash}"
    textColor: "{colors.dromos-cyan}"
  code-block:
    backgroundColor: "{colors.dromos-panel}"
    textColor: "{colors.dromos-white}"
    rounded: "{rounded.panel}"
---

# Design System: ElectroDromos Docs

## Overview

**Creative North Star: "The Two-Lead Signal"**

ElectroDromos's docs keep the familiar Pedro Pathing docs structure: the fumadocs sidebar, TOC, search, and a centered docs home. What makes the site ElectroDromos's is the material: a near-black ground, white type, and two signal colors that behave like a battery's two wires. Cyan is the lead that carries meaning (links, focus, primary actions, "DROMOS", the compensated line). Red is the return (the battery, warnings, the right arm of the V, the uncompensated line). The whole identity is those two leads, drawn thin and exact.

The site is dense and quiet. Surfaces are flat panels separated by 1px hairlines, and the only motion carries information: the signal line draws in once, the battery toggle rescales the red line, and the typed heading settles once on its thesis. A single product-specific effect, the Signal Strip, is the only illustration, and it is labeled as illustrative. The system refuses Pedro's pink glow and the particle field that most Pedro docs forks inherit. It sits beside Pedro's site at the same craft level without copying its look.

Every page is signed by the brand thread: a 2px line pinned to the top of the viewport, about 78% cyan, then a short gap, then red. Structure never changes to create identity. New features become new rows and new sidebar entries with a Lucide icon, never new layouts.

**Key Characteristics:**
- Pedro-docs layout, ElectroDromos material: black ground, white text, cyan and red signal.
- Cyan is the only primary accent. Red is a second channel with its own meanings, never a substitute for cyan.
- Flat panels, hairline borders, pill-shaped actions, 16px panel corners.
- Chakra Petch (angular, technical) for headings, the lockup and readouts. Barlow for everything read.
- Motion only where it explains something, always ending in a still state, with reduced motion honored.

## Colors

The palette is near-black and cool neutrals with two saturated signals, dark theme first. A darkened light theme keeps both signals at 4.5:1 on white.

### Primary
- **Signal Cyan** (dromos-cyan): the one primary accent in dark theme. It covers links and link underlines (55% mix), the focus ring, primary buttons, the active battery segment, feature-row icons and hover titles, "DROMOS" in the wordmark and nav lockup, the left arm of the V, the compensated speed line, and keywords in code. Text on a cyan fill is Cyan Ink (cyan-ink).
- **Deep Signal** (signal-deep): the light-theme stand-in for Signal Cyan, with the same roles. Its wash (signal-deep-wash) is the light hover and accent tint.
- **Cyan Wash** (cyan-wash): the dark accent surface, used at 40% opacity as the feature-row hover fill and as the active sidebar item background.

### Secondary
- **Battery Red** (dromos-red): the second channel. It covers the red turn of the D, the red lead of the brand thread, the Battery readout, the dashed uncompensated speed line, and warning and error callouts (border mixed 45% into the hairline, with a red icon fill). Its light-theme stand-in is **Deep Battery** (battery-deep).

### Neutral
- **Dromos Black** (dromos-black): page ground in dark theme, the mark's tile, and the OG image ground.
- **Dromos Panel** (dromos-panel): cards, popovers, the Signal Strip and code blocks.
- **Panel Muted** (panel-muted): muted and secondary fills such as inline code and sidebar hover.
- **Hairline** (hairline): every border, divider and chart gridline in dark theme. It also serves as the scrollbar thumb.
- **Muted Text** (muted-text): descriptions, captions, idle controls and OG subtitles.
- **Dromos White** (dromos-white): all primary text and "ELECTRO" in the wordmark.
- **Paper, Paper Card, Paper Muted, Paper Hairline, Paper Muted Text, Ink**: the light-theme equivalents of the neutrals above, role for role.
- **Wordmark Cyan Light** (wordmark-cyan-light): "DROMOS" in the light wordmark only. It is a logo ink, not a UI color.

### Named Rules
**The Two Leads Rule.** Cyan carries meaning and action. Red carries the battery and warnings. Red never stands in for cyan on a link, button or focus state, and cyan never marks a warning.

**The Thread Signature Rule.** The 2px brand thread (cyan to 78%, a 0.6% gap, then red) runs across the top of every page and the OG images. Do not echo it as decorative stripes anywhere else.

**The Theme Pair Rule.** Every signal use goes through the theme-aware tokens (fd-primary, dromos-signal, dromos-battery), so the light theme gets Deep Signal and Deep Battery automatically. Hard-coded hex values are for brand assets only.

## Typography

**Display Font:** Chakra Petch 600/700, normal and italic (fallback ui-sans-serif, system-ui)
**Body Font:** Barlow 400/500/600 (fallback ui-sans-serif, system-ui)
**Label/Mono Font:** fumadocs' default monospace for code, colored by the ElectroDromos Shiki themes

**Character:** Chakra Petch's squared, chamfered letterforms read as instrument panel and circuit board. Barlow is a calm, slightly condensed grotesque for long reading at the field or on a phone.

### Hierarchy
- **Display** (700, 2.25rem to 3rem at md, 1.05, tight tracking): the docs-home h1 only. Its second line is Signal Cyan.
- **Headline** (700, 1.5rem): section headings on landing surfaces. Every h1 to h4 site-wide uses Chakra Petch at -0.01em with balanced wrapping.
- **Title** (600, 1.125rem; 1.25rem on selector cards): feature-row names, card titles, the Signal Strip caption.
- **Readout** (600, 1.5rem, tabular figures): live values such as Battery volts and voltageScale.
- **Lockup** (700 italic, uppercase, wide tracking): the nav name only, "Electro" in white and "Dromos" in Signal Cyan.
- **Lead** (400, 1.125rem, 1.625): landing pitch paragraphs, capped at about 65ch.
- **Body** (400, 1rem): docs prose, row descriptions, footer.
- **Label** (500, 0.875rem): segmented controls, readout terms, fine print.
- **Caption** (400, 0.75rem): chart axis labels and the illustration disclaimer.

### Named Rules
**The Measured Figures Rule.** Numbers that get compared, such as table cells, volts and scales, use tabular figures.

**The Angular Heads Rule.** Chakra Petch is for headings, the lockup, the wordmark and readouts. Running text is always Barlow.

## Layout

The fumadocs docs layout is used unchanged: a left sidebar with section groups (feature pages carry a Lucide icon from their `icon:` frontmatter), a centered article, a right-hand "On this page" TOC, search, and a theme switch. Landing surfaces are centered in a 1024px column (max-w-5xl) with 16px gutters (24px from sm up).

On the docs home, a centered wordmark (up to 448px wide, 576px from md up) sits 56px from the top. Below it is a two-column grid with a 40px gap from lg up: heading, pitch and actions on the left, the code block on the right. Below lg it collapses to one column and the actions move beneath the code. Sections are spaced 80px apart. Feature rows are a single column list, one row per feature, so the list grows without reflowing. The section picker at `/` is a row of equal-width cards from xl up (32px gaps) and a stack below that.

Spacing steps are 4, 12, 16, 24, 40, 56 and 80px. The 12px step is for gaps between actions and 16px for gaps inside rows. Panel padding is 24px (16px on mobile).

## Elevation & Depth

The system is flat and uses tonal layering. Depth comes from ground to panel (Dromos Black to Dromos Panel) plus a 1px hairline. There is no resting shadow anywhere. The one shadow is a state response on section-picker cards: on hover the card lifts 4px and gains a soft, dark drop.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 12px 32px -16px rgb(0 0 0 / 0.6)`): section-picker cards on hover only, together with `translateY(-4px)` and a cyan border.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat at rest. Shadow and lift appear only on hover of a whole navigable card.

## Shapes

Shapes are soft rectangles and full pills. Panels, cards, code blocks and brand tiles use 16px corners. Icon tiles use 12px corners with a 2px border in the tile's color. Every button and segmented control is a full pill. Borders are 1px hairlines. Fumadocs' 2px colored callout side stripe is overridden to 1px and tinted from the palette.

The mark is the one sharp form: a D made of a straight and a turn, like a racetrack, with the cyan straight on the left and the red turn on the right, split by a thin gap. It is slanted 10 degrees to match the italic wordmark. On a tile, it sits in a black rounded square (rx 14 on a 64-unit grid). The mark is recorded as built, without speed bars. That removal is the one decision still waiting on the user.

The old files still in `public/` (`logo-icon.jpg`, `brand-assets-*.zip`, `conference.html`, `emails.html`, and the team mark `banner.png`) are unreferenced and not part of this system.

## Components

### Buttons
Buttons are confident pills.
- **Shape:** full pill (9999px), 44px tall, 24px horizontal padding, 8px gap between label and icon.
- **Primary:** a Signal Cyan fill with Cyan Ink text in semibold Barlow and a trailing arrow. Hover brightens it (brightness 110%).
- **Secondary:** transparent with a hairline border and medium-weight text. On hover the border and text turn cyan. It is used for GitHub and downloads.
- **Focus:** 2px ring in the ring color, offset 2px, site-wide.

### Segmented Control (battery toggle)
- **Style:** a pill track with a hairline border and 4px inset. Segments are pills in 0.875rem medium-weight text with tabular figures.
- **State:** the active segment has a cyan fill with Cyan Ink text. Idle segments show Muted Text, which turns to foreground on hover. Colors transition over 200ms. It is exposed as a `radiogroup`.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Dromos Panel (Paper Card in the light theme).
- **Shadow Strategy:** none at rest. Section-picker cards use the hover lift (see Elevation & Depth).
- **Border:** 1px hairline, cyan on hover when the whole card is a link.
- **Internal Padding:** 24px.
- **Icon tile:** 48px square, 12px corners, 2px border, Lucide icon inside at 10px padding. The primary destination is cyan and the others use the neutral foreground.

### Feature Rows
- A single list with a hairline above, below and between rows. Each row has a 40px icon column, the title and one-line description, and a trailing arrow.
- The icon is Signal Cyan. On hover the row takes a 40% Cyan Wash, the title turns cyan, and the arrow turns cyan and slides 4px right over 200ms.
- One feature is one row. Rows are the scaling unit for new features.

### Navigation
- The fumadocs nav and sidebar are kept as-is, themed by tokens. The nav title is the lockup: the transparent mark at 28px next to the uppercase italic "ElectroDromos" in Chakra Petch.
- Sidebar items for ElectroDromos feature pages carry their Lucide icon. The active item uses the accent wash with cyan text.

### Code Blocks
- The ElectroDromos Shiki themes are used. In dark: panel background, #D7DDE1 text, cyan keywords and annotations, pale cyan (#8FEFF2) functions, white types and numbers, gray strings, and italic #6B7580 comments. The light theme is the same mapping on white around Deep Signal. Cyan is the only accent in code, and red never appears there.

### Callouts
- Fumadocs callouts with a 1px side border. Warning and error callouts are tinted Battery Red and their icon is filled red. Info and success callouts are tinted Signal Cyan and their icon is filled cyan.

### Signal Strip (signature)
- A panel figure with a title and the battery segmented control. It holds a 640×204 speed-profile chart on hairline gridlines: the red dashed line (2.5px, dash 7/6) shows speed without compensation and the solid cyan line (3px) shows speed with ElectroDromos. Beside the chart are readouts: Battery in red, voltageScale in white, and a legend.
- Motion: the cyan line draws in once over 1.4s with `cubic-bezier(0.16, 1, 0.3, 1)`. Switching battery rescales only the red line vertically over 520ms on the same curve. With reduced motion the line appears complete.
- The strip always carries its "illustration, not measured robot data" caption.

### Typed Heading
- The docs-home h1 types two alternative endings, then settles on "on any battery." in cyan. It never loops, has no cursor, and with reduced motion the final text is static from the start.

## Do's and Don'ts

### Do:
- **Do** route every accent through the theme tokens (fd-primary, dromos-signal, dromos-battery) so the light theme gets Deep Signal and Deep Battery.
- **Do** keep the D's colors fixed: cyan straight left, red turn right, slanted 10 degrees. Use `logo-wordmark-light.svg` on light grounds.
- **Do** add a new feature as one new feature row and one sidebar page with a Lucide `icon:` in its frontmatter.
- **Do** keep panels at 16px corners with 1px hairlines and actions as full pills at 44px height.
- **Do** use tabular figures for volts, scales and table data.
- **Do** end every animation in a still, complete state and honor `prefers-reduced-motion`.
- **Do** label illustrative charts as illustrative. Never show numbers that were not measured.

### Don't:
- **Don't** use red for links, primary buttons or focus. Don't use cyan for warnings.
- **Don't** add Pedro's pink glow, a particle field, or any ambient background effect.
- **Don't** change the Pedro-docs layout to create identity. Differentiate with color, type, the mark and the Signal Strip.
- **Don't** add resting shadows or glows to panels. Depth is ground to panel plus a hairline.
- **Don't** set running text in Chakra Petch, or headings in Barlow.
- **Don't** use Pedro Pathing's logo or colors as ElectroDromos's, or the team's "EL 30686" mark as the product mark.
