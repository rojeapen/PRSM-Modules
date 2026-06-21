# Product

## Register

product

> Note: this app has two surfaces and you called them equally important, so
> the default above is a starting point, not a cage. The **Player** (the
> public module experience) is consumer-facing and the experience effectively
> *is* the product, so when working on player screens, hero/completion moments,
> or content presentation, treat them with brand-grade expressiveness. The
> **Admin CMS** is a pure product/tool surface: density, speed, and clarity win
> over polish. Override the register per task when the surface in focus calls
> for it.

## Users

Two distinct audiences:

- **Learners (primary, public):** general-public caregivers — parents,
  family members, community members, and non-clinical staff — with no medical
  background. They arrive to complete a specific safety/allergy training module
  (e.g. anaphylaxis recognition and response). Context is variable: a phone or
  shared computer, possibly time-pressed, possibly anxious about the subject.
  They are not experts and should never be made to feel like they need to be.
- **Authors (secondary, signed-in):** staff at PRSM Allergy who write and
  publish modules through the Google-Forms-style CMS. They work in longer
  focused sessions, assembling screens from typed elements, previewing, and
  publishing. They value speed, predictability, and a tight edit→preview loop.

## Product Purpose

PRSM Modules delivers interactive, life-safety training that caregivers can
actually act on. A module is a sequence of screens built from typed content
elements (text, callouts, quizzes, timelines, comparisons, videos, completion).
The Player renders published modules from Firestore; the CMS lets non-developers
author them without touching code.

Success is not "the page looked nice." Success is a caregiver who, weeks later,
**recognizes a reaction and responds correctly under pressure** — and an author
who can ship an accurate, well-structured module quickly. Every design decision
serves recall and clarity first.

## Brand Personality

Confident, authoritative, serious. This is life-safety information and the
interface should signal that it can be trusted, without becoming cold or
frightening. Voice is plain-spoken and direct: short declarative sentences,
no jargon, no hedging. Authority comes from precision and restraint, not from
volume or decoration. The existing warm-teal identity should read as *calm
competence* — the steadiness of someone who knows exactly what to do.

## Anti-references

- **Sterile corporate e-learning / SCORM slop.** No stock photography, no
  clip-art, no gray compliance-module boxes, no "Next →" dead air. This must
  not feel like mandatory training someone is enduring.
- **Childish or over-gamified.** No cartoon mascots, no confetti storms, no
  badge-spam. Encouragement and completion moments are allowed, but they must
  never undercut the life-safety seriousness of the content.
- **Generic AI/SaaS template.** No purple-gradient heroes, no identical
  icon+heading+text card grids repeated down the page, no hero-metric blocks.
  If it looks auto-generated, it has failed.

## Design Principles

1. **Recall over decoration.** The test of any screen is whether it helps the
   learner remember and act later. Cut anything that competes with the point.
2. **Calm authority.** Convey seriousness through precision, hierarchy, and
   restraint — not alarm, not noise. Lower anxiety while raising attention.
3. **One idea per screen.** Modules teach by progression. Each screen should
   land a single clear concept before moving on; resist cramming.
4. **Earn every emphasis.** Color, weight, callouts, and motion are signals.
   When everything is emphasized nothing is. Reserve the loud moments (warnings,
   completion) for when they genuinely matter.
5. **Author clarity = learner clarity.** The CMS should make the *structure* of
   good teaching obvious, so non-experts produce well-shaped modules by default.

## Accessibility & Inclusion

Target **WCAG 2.2 AA**. Concretely:

- AA contrast minimums for all text and meaningful UI, including text over the
  teal gradients and inside colored callouts.
- Full keyboard operability for navigation, quizzes, and the entire CMS.
- Honor `prefers-reduced-motion` (already wired in CSS) for all entrance,
  progress, and celebration animations.
- Tap targets ≥ 44px; quiz options and nav controls sized for touch.
- Do not rely on color alone to convey state (correct/wrong, severity,
  published/draft) — pair with icon, label, or text.
- Legibility under stress: comfortable base type, generous line-height, and
  short line lengths, since caregivers span all ages and may be reading anxious.
