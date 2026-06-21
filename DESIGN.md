---
name: PRSM Modules
description: Calm, authoritative training modules for caregivers — a warm-teal learning system built for recall under pressure.
colors:
  teal-900: "#0d3b38"
  teal-800: "#134e4a"
  teal-700: "#0f766e"
  teal-600: "#0d9488"
  teal-500: "#14b8a6"
  teal-400: "#2dd4bf"
  teal-100: "#ccfbf1"
  teal-50: "#f0fdfa"
  surface: "#ffffff"
  bg: "#f0faf9"
  text-primary: "#0d3b38"
  text-body: "#1e4a47"
  text-muted: "#4b7a76"
  border: "#b2dfdb"
  warn-bg: "#fffbeb"
  warn-border: "#f59e0b"
  warn-text: "#78350f"
  danger-bg: "#fef2f2"
  danger-border: "#f87171"
  danger-text: "#7f1d1d"
  info-bg: "#eff6ff"
  info-border: "#60a5fa"
  info-text: "#1e3a5f"
  success-bg: "#f0fdf4"
  success-border: "#4ade80"
  success-text: "#14532d"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.22rem"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "0.1px"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.8px"
rounded:
  sm: "10px"
  md: "14px"
  lg: "18px"
  xl: "22px"
  pill: "99px"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "22px"
  sp-6: "30px"
  sp-7: "40px"
components:
  button-primary:
    backgroundColor: "{colors.teal-600}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.teal-700}"
    textColor: "{colors.surface}"
  button-back:
    backgroundColor: "#eaf2f1"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  quiz-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.sm}"
    padding: "13px 16px"
  quiz-option-correct:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
  quiz-option-wrong:
    backgroundColor: "{colors.danger-bg}"
    textColor: "{colors.danger-text}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-body}"
    rounded: "8px"
    padding: "8px 10px"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.teal-700}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
---

# Design System: PRSM Modules

## 1. Overview

**Creative North Star: "The Calm Clinic"**

PRSM Modules feels like a well-run clinic: serious, prepared, and reassuring all
at once. The subject matter is life-safety, so the interface carries authority,
but it never raises the learner's pulse. Warmth comes from a single deep-teal
identity, soft daylight backgrounds, and gently rounded surfaces that lift off
the page with quiet, atmospheric shadow. The voice of the type is the giveaway:
a DM Serif Display headline opening each idea reads like a calm expert speaking,
while DM Sans body text stays plain and unhurried. This is *calm competence* —
the steadiness of someone who knows exactly what to do.

The system is built for **recall under pressure**, not for browsing. Screens are
deliberately narrow (≤780px), one idea at a time, with generous line-height so a
possibly-anxious caregiver can read without strain. Emphasis is rationed: color,
callouts, and motion are signals, not decoration, so the genuinely important
moments — a red warning, a completion — actually land. Severity has a fixed
language (teal for guidance, amber for caution, red for danger) that never drifts.

This system explicitly rejects three things. It is **not** sterile corporate
e-learning: no stock photos, no clip-art, no gray compliance boxes. It is **not**
childish or gamified: no mascots, no confetti storms, no badge-spam that
undercuts the seriousness. And it is **not** a generic AI/SaaS template: no
purple-gradient hero, no repeating icon-heading-text card grid, no hero-metric
blocks.

**Key Characteristics:**
- Single committed identity color (deep teal) carrying warmth and authority
- Serif display + humanist sans pairing for calm, spoken-aloud hierarchy
- Soft, teal-tinted ambient elevation — depth as atmosphere, not drama
- Rationed emphasis with a fixed severity color language
- Narrow, single-idea reading column tuned for retention

## 2. Colors

A warm, committed teal identity over a soft daylight ground, with a strict
four-channel semantic set reserved for meaning.

### Primary
- **Clinic Teal** (`#0d9488`, teal-600): the identity color. Carries primary
  buttons, progress fill, step numbers, active states, and link-level accents.
  Paired one step darker (`#0f766e`, teal-700) for hover and gradient depth.
- **Deep Pine** (`#0d3b38`, teal-900) / **Forest** (`#134e4a`, teal-800):
  the darkest teals. Used for headline text, the header gradient, the completion
  card, and any teal surface that needs to hold white text at AA.
- **Bright Teal** (`#2dd4bf`, teal-400) / **Aqua** (`#14b8a6`, teal-500):
  the luminous end. Borders on emphasis surfaces, progress sheen, list markers,
  and glow accents on dark teal panels.

### Neutral
- **Paper White** (`#ffffff`, surface): every card, panel, and input ground.
- **Daylight Mist** (`#f0faf9`, bg): the app background, layered under fixed
  radial gradients of pale teal and blue for atmospheric warmth.
- **Pine Ink** (`#0d3b38`, text-primary): strongest body emphasis and titles.
- **Slate Teal** (`#1e4a47`, text-body): default reading text.
- **Muted Teal** (`#4b7a76`, text-muted): secondary text, captions, sublabels.
- **Mist Border** (`#b2dfdb`, border) / **Wash** (`#ccfbf1`, teal-100) /
  **Foam** (`#f0fdfa`, teal-50): hairline borders, chip fills, tinted callout
  grounds, table zebra striping.

### Semantic (reserved for meaning, never decoration)
- **Caution Amber** (bg `#fffbeb`, border `#f59e0b`, text `#78350f`): warnings,
  draft state, the nurse-location highlight.
- **Danger Red** (bg `#fef2f2`, border `#f87171`, text `#7f1d1d`): severe
  symptoms, wrong answers, destructive actions, the consequence timeline.
- **Info Blue** (bg `#eff6ff`, border `#60a5fa`, text `#1e3a5f`): neutral
  informational callouts.
- **Success Green** (bg `#f0fdf4`, border `#4ade80`, text `#14532d`): correct
  answers, published state, confirmations.

### Named Rules
**The Single Identity Rule.** Teal is the only brand color. Amber, red, blue, and
green exist *only* to carry meaning (caution, danger, info, success). Never reach
for a semantic color as decoration, and never introduce a sixth accent hue.

**The Severity Lock Rule.** Teal = guidance, amber = caution, red = danger. This
mapping is fixed across player and CMS. A red border always means "this can hurt
you"; never spend red on anything that isn't genuinely dangerous.

## 3. Typography

**Display Font:** DM Serif Display (with Georgia, serif)
**Body Font:** DM Sans (with sans-serif)

**Character:** A high-contrast serif for moments of voice, paired with a warm
humanist sans for everything read at length. The serif gives each screen the
feel of a calm expert beginning to speak; the sans keeps the substance plain,
legible, and unintimidating. The pairing is the core of the "calm authority"
personality.

### Hierarchy
- **Display** (DM Serif Display, 400, 1.5rem, line-height 1.22, tracking
  -0.01em): screen titles, welcome hero, completion heading. The signature
  voice. Drops to 1.35rem ≤680px and 1.25rem ≤520px.
- **Headline** (DM Serif Display, 400, 1.22rem): the module header bar title and
  CMS section headers.
- **Title** (DM Sans, 700, 1rem, line-height 1.55): quiz questions, step and
  takeaway headings, card lead lines.
- **Body** (DM Sans, 400, 0.95rem, line-height 1.75): all paragraph and list
  text. Reading column capped at ~780px (well within 65–75ch) for retention.
- **Label** (DM Sans, 800, 0.74rem, uppercase, tracking 0.8px): callout kickers,
  scenario/quiz block labels, CMS field labels, pills. The micro-typographic
  signal layer.

### Named Rules
**The Spoken-Title Rule.** Only the serif speaks. Use DM Serif Display for titles
and hero/completion moments and nothing else; body, UI, and labels are always
DM Sans. Never set body copy in the serif.

**The Loud-Label Rule.** All-caps labels are tiny (≤0.76rem), heavy (800), and
letter-spaced. That weight-plus-tracking is what makes them read as labels; never
set an all-caps label at body weight or body size.

## 4. Elevation

Soft and ambient. Surfaces sit on the daylight background lifted by gentle,
**teal-tinted** shadows (`rgba(13, 59, 56, …)`) rather than neutral gray, so
depth reinforces warmth instead of adding drama. The module shell gets the
deepest lift; cards and callouts get a whisper; interactive cards deepen their
shadow and rise a few pixels on hover. Depth is atmosphere, never a hard edge.

### Shadow Vocabulary
- **Whisper** (`box-shadow: 0 1px 2px rgba(13,59,56,0.06), 0 2px 6px rgba(13,59,56,0.05)`):
  resting lift for callouts, cards, chips, quiz options, CMS panels.
- **Lift** (`box-shadow: 0 4px 14px rgba(13,59,56,0.08), 0 10px 30px rgba(13,59,56,0.06)`):
  hover state and mid-emphasis surfaces (welcome hero, completion card).
- **Shell** (`box-shadow: 0 12px 28px rgba(13,59,56,0.12), 0 28px 64px rgba(13,59,56,0.12)`):
  the module shell only — the one piece that floats above everything.
- **Focus Ring** (`box-shadow: 0 0 0 3px rgba(13,148,136,0.35)`): teal focus
  glow on every interactive element, replacing the default outline.

### Named Rules
**The Teal-Shadow Rule.** Every shadow is tinted toward pine teal
(`rgba(13,59,56,…)`), never neutral black. A gray drop-shadow is a defect: it
reads cold and breaks the warmth. If a shadow looks gray, it is wrong.

**The Whisper-Default Rule.** Surfaces rest at Whisper. Deeper shadow (Lift) is a
*response* — to hover or to genuine importance — not a resting decoration.

## 5. Components

### Buttons
- **Shape:** gently rounded (10px, `rounded.sm`).
- **Primary (Next / CTA):** teal-600→teal-700 gradient, white text, padding
  12px 28px, weight 700, Whisper-to-Lift shadow. On hover, translateY(-2px) and
  deepen the shadow; on active, settle back with a slight scale(0.98).
- **Back / Secondary:** flat pale-teal fill (`#eaf2f1`), muted-teal text; hover
  darkens the fill and nudges left translateX(-2px).
- **Disabled:** opacity 0.35, no transform or shadow, default cursor.
- **CMS buttons:** smaller (8px 14px, 0.85rem), white with a teal-400 border;
  `.primary` uses the teal gradient, `.danger` uses red border + red-bg hover.

### Chips / Tags
- **Style:** white fill, teal-400 border, teal-700 text, fully pill-shaped
  (99px), heavy small text (0.78rem/700), Whisper shadow, optional leading icon.
- **State:** the quiz block label and CMS pills are the badge variant — tiny
  uppercase (0.68–0.7rem/800) on a tinted ground (teal-50 / success / warn).

### Cards / Containers
- **Corner Style:** 14px default (`rounded.md`); 18px for hero/completion
  (`rounded.lg`); the module shell is 22px (`rounded.xl`).
- **Background:** Paper White, or a subtle white→teal-50 gradient on feature
  surfaces (welcome hero, scenario box).
- **Shadow Strategy:** Whisper at rest, Lift on hover (see Elevation).
- **Border:** 1px hairline in teal-100 or Mist Border.
- **Internal Padding:** 14–22px for content cards; 30px+ for hero/completion.

### Inputs / Fields (CMS)
- **Style:** white ground, 1.5px Mist Border stroke, 8px radius, 8px 10px
  padding, DM Sans 0.9rem.
- **Focus:** the teal Focus Ring (`0 0 0 3px rgba(13,148,136,0.35)`).
- **Error:** red-text on red-bg with red border (`.cms-error`).
- **Labels:** Loud-Label style — uppercase, 0.72rem, 700, muted-teal.

### Navigation
- **Player nav bar:** Back (left) + counter (center) + Next (right), separated
  from content by a hairline top border over a faint white→mint gradient,
  carrying the player's bottom corners.
- **Header bar:** deep teal gradient (teal-900→teal-700→teal-600) with soft
  radial light blooms, logo tile, serif title, and an animated progress track
  (sheen-swept teal fill) — the module's masthead and progress in one.

### Signature Components
- **Progress Track:** translucent white rail with a teal-400→`#5eead4` fill,
  glow, and a looping sheen sweep. The constant reassurance of forward motion.
- **Quiz Option:** white card, 1.5px border, lifts on hover (teal border +
  teal-50 fill); resolves to Success Green (correct) or Danger Red (wrong) with
  an inline expanding feedback panel. State is shown by color *and* by the
  feedback text, never color alone.
- **Severity Pair (Mild vs Severe):** two columns, teal-tinted "mild" beside
  red-tinted "severe" — the Severity Lock made visual.

## 6. Do's and Don'ts

### Do:
- **Do** keep teal as the only brand color; reserve amber/red/blue/green strictly
  for caution/danger/info/success (the Single Identity and Severity Lock Rules).
- **Do** tint every shadow toward pine teal (`rgba(13,59,56,…)`); resting
  surfaces stay at Whisper and only deepen on hover or genuine importance.
- **Do** open ideas with DM Serif Display and set everything else in DM Sans;
  keep body at 0.95rem / line-height 1.75 in the ≤780px column for recall.
- **Do** ration emphasis — one clear point per screen — so warnings and the
  completion moment actually land.
- **Do** convey state with icon, label, *and* color together (correct/wrong,
  severity, published/draft), never color alone; honor `prefers-reduced-motion`
  and keep tap targets ≥44px for AA.

### Don't:
- **Don't** ship sterile corporate e-learning: no stock photos, clip-art, gray
  compliance boxes, or dead "Next →" filler.
- **Don't** go childish or gamified: no mascots, no confetti storms, no
  badge-spam that undercuts the life-safety seriousness.
- **Don't** fall into the generic AI/SaaS template: no purple-gradient hero, no
  repeating icon-heading-text card grid, no hero-metric blocks.
- **Don't** use gray (neutral-black) shadows — they read cold and break the
  warmth. A gray drop-shadow is a defect.
- **Don't** set body copy in the serif, and don't spend a semantic color
  (red/amber/green/blue) on decoration; meaning colors must always mean something.
