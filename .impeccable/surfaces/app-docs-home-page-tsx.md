---
version: 1
slug: "app-docs-home-page-tsx"
primary_target: "app/docs/(home)/page.tsx"
related_targets: ["app/(home)/HomeSelector.tsx","app/global.css"]
---

# Surface brief: site identity and docs home

Scope: site-wide identity (mark, color, type, effects) plus the two landing surfaces, `/` (section picker) and `/docs` (docs home, Persuade). Docs pages are Read mode and inherit the identity with no structural change.

Audience: FTC programmers already on Pedro, deciding whether ElectroDromos is safe to add; ElectroLights 30686 programmers.
Action: Get Started (Installation). Proof: the real four features and the Pedro + ElectroDromos `create()` snippet; no invented numbers.
Constraints: Pedro-docs layout stays (user steer); code samples show Pedro + ElectroDromos; Pedro credited, never impersonated; team credit "by ElectroLights 30686".

## Direction contract

THESIS: A Pedro-shaped docs site that is unmistakably ElectroDromos's: same familiar layout, but black ground, cyan and red signal accents, white type, and one product-specific effect. It refuses Pedro's pink glow and the particle field every docs fork inherits.

OWN-WORLD: Near-black panels (#08090B / #111317) with hairline borders, white text, cyan (#19E3E8) as the one primary accent for links, focus and primary buttons, red (#FF4B3A) reserved for the second channel: warnings, the battery trace, the red stroke of the mark. Chakra Petch for display and the wordmark, Barlow for body, monospace code. Mark: an original slanted chevron V (cyan left arm, red right arm) on black; no speed bars (see Amendments).

STORY: A visitor sees the familiar Pedro layout, learns in one line that ElectroDromos is an add-on that keeps Pedro's follower and tune, sees the two-line `create()` change, and clicks Get Started.

FIRST VIEWPORT: Docs home: wordmark top center; left column typed heading "Pedro Pathing, on any battery." with pitch, Get Started (cyan) and GitHub; right column the Pedro + ElectroDromos `create()` code block. Beneath, full width, the signature strip: one path's speed profile with a Fresh / Tuned / Tired battery toggle; the red dashed line (speed without compensation) scales with the battery while the cyan line (with ElectroDromos) holds the tune, beside live Battery and voltageScale readouts, labeled illustrative. Then one row per feature (five today).

FORM: Category standard (standing exit taken by the user's steer after one re-roll request), position canon, seed key 211da2ee.

SIGNATURE INTERACTION: the battery toggle re-scales the uncompensated line (520 ms ease-out) while the cyan line and readouts show the real voltageScale formula; the cyan line draws once on load (reduced motion shows it complete).

AMENDMENTS (build-time, with reasons):
- Speed bars dropped from the mark: at 16-32 px favicon and nav sizes the bars merged into a smudge beside the V; the two-lead V alone reads at every size and still carries both team accents.
- Time-series battery trace replaced by the battery-preset speed profile: a battery sagging over 2:30 shows the problem but not the mechanism; switching batteries and watching only the uncompensated line move shows what ElectroDromos does, with the library's own voltageScale formula.
- Feature-row hover highlight cut: only one of five features maps to the strip, so the link would be arbitrary for four rows; the toggle is the interaction.
- Four tiles became rows because five features ship now and more are coming (user steer).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
