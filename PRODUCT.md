# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **FTC programmers on other teams** who already run Pedro Pathing and want faster, more consistent autos. They arrive from Pedro's community, judge quickly whether ElectroDromos is trustworthy and safe for their tune, then follow Installation and the tuner.
- **ElectroLights 30686's own programmers**, using the site as the reference for the library they maintain.

Both read at a laptop in Android Studio or at the practice field between runs, often on a phone.

## Product Purpose

Documentation for ElectroDromos, an add-on library for Pedro Pathing (FTC). It explains how to install it on top of stock Pedro, what each feature does, and how Pedro's guides work with it installed. Success: a team goes from reading to a working `Constants.create()` with ElectroDromos and a tuned `nominalVoltage` without asking for help.

## Positioning

ElectroDromos never replaces Pedro: teams keep Pedro's `new Follower(...)`, paths and tune, and ElectroDromos wraps the localizer and drivetrain. Its mechanisms are voltage compensation with its own AutoTune procedure, a near-zero-cost loop timer, and a write-caching mechanism motor.

## Operating Context

- Site: Next.js + fumadocs, static export under `/Electrodromos` on munchem.me. Sections: ElectroDromos docs (installation, reference, adapted Pedro guides) and Ivy (Pedro's command framework, kept for now, to be changed later).
- Readers copy Java snippets into `Constants.java`, `Tuning.java` and OpModes, and use Pedro's AutoTune page at the robot.

## Capabilities and Constraints

- Every code sample shows Pedro Pathing and ElectroDromos together.
- Pedro Pathing's name, logo and colors belong to the Pedro team; the site credits Pedro and must not look like Pedro's official docs.
- The docs update in the same pass as every library change.
- Undecided: where the Maven repository is hosted (placeholder `https://munchem.me/maven`).

## Brand Commitments

- Name: **ElectroDromos**. Its own mark, credited as made by **ElectroLights 30686**.
- Team colors: black (main), cyan (accent), red (accent), white (text).
- The team's existing mark (`public/banner.png`, "EL 30686" with speed stripes) is the team's asset; ElectroDromos's mark is separate.
- The previous icon (`public/logo-icon.jpg`) is a copyrighted anime character and must be replaced with an original icon.
- Standing preference (user, 2026-09-30): keep the familiar Pedro-docs layout, since this is an FTC pathing library like Pedro. Differentiate through ElectroDromos's colors, mark and effects, not structure. The system must scale to more features coming.
- Sits alongside: Pedro Pathing's docs (pedropathing.com). Match their craft level without looking like their site.

## Evidence on Hand

- Real: the library's features, API and limitations; the voltage tuner; the team mark `public/banner.png`.
- Absent, never to be invented: adoption numbers, other teams using it, match results, benchmarks, loop-time gains. Nothing has run on a physical robot yet.

## Product Principles

1. Pedro first: ElectroDromos is a supplement, and the site says so plainly.
2. Honest about limits: every feature page states what it can't do.
3. Copy-pasteable: every snippet compiles against real Pedro 3 and ElectroDromos APIs.
4. Tune stays valid: nothing on the site suggests changing Pedro's tuning.
