import type { ReactNode } from 'react'
import type { ElementType } from '../cms/types'

/**
 * UI chrome icons for the editor (distinct from the content icon registry in
 * `icons.tsx`, which holds the medical/illustrative glyphs authors place inside
 * a module). These are line icons that inherit `currentColor` and scale with
 * font size, so they sit cleanly inside buttons and labels.
 */

type IconProps = { size?: number; className?: string }

function base(size: number, className: string | undefined, children: ReactNode) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export const Grip = ({ size = 18, className }: IconProps) =>
  base(size, className, (
    <>
      <circle cx="9" cy="6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="18" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="18" r="1.1" fill="currentColor" stroke="none" />
    </>
  ))

export const Chevron = ({ size = 18, className, open = false }: IconProps & { open?: boolean }) =>
  base(size, className, <path d={open ? 'M6 15l6-6 6 6' : 'M9 6l6 6-6 6'} />)

export const Plus = ({ size = 18, className }: IconProps) => base(size, className, <path d="M12 5v14M5 12h14" />)

export const Trash = ({ size = 18, className }: IconProps) =>
  base(size, className, <path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13" />)

export const Gear = ({ size = 18, className }: IconProps) =>
  base(size, className, (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5l1.3 2.2 2.5-.5.4 2.5 2.3 1-.9 2.4 1.7 1.9-1.7 1.9.9 2.4-2.3 1-.4 2.5-2.5-.5L12 21.5l-1.3-2.2-2.5.5-.4-2.5-2.3-1 .9-2.4L4.7 10l1.7-1.9-.9-2.4 2.3-1 .4-2.5 2.5.5z" />
    </>
  ))

export const Eye = ({ size = 18, className }: IconProps) =>
  base(size, className, (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ))

export const External = ({ size = 18, className }: IconProps) =>
  base(size, className, <path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5" />)

export const Check = ({ size = 18, className }: IconProps) => base(size, className, <path d="M4 12.5l5 5 11-11" />)

export const X = ({ size = 18, className }: IconProps) => base(size, className, <path d="M6 6l12 12M18 6L6 18" />)

export const ArrowUp = ({ size = 16, className }: IconProps) => base(size, className, <path d="M12 19V5M6 11l6-6 6 6" />)

export const ArrowDown = ({ size = 16, className }: IconProps) => base(size, className, <path d="M12 5v14M6 13l6 6 6-6" />)

export const Back = ({ size = 18, className }: IconProps) => base(size, className, <path d="M15 6l-6 6 6 6" />)

/* --- Block-type glyphs, one per category, mapped to every element type --- */

const Para = (s: number, c?: string) => base(s, c, <path d="M5 6h14M5 10h14M5 14h10M5 18h7" />)
const Title = (s: number, c?: string) => base(s, c, <path d="M5 7h14M9 7v11M15 7v11" />)
const Note = (s: number, c?: string) => base(s, c, (<><rect x="4" y="5" width="16" height="14" rx="2.5" /><path d="M8 10h8M8 14h5" /></>))
const Line = (s: number, c?: string) => base(s, c, <path d="M4 12h16" />)
const Ask = (s: number, c?: string) => base(s, c, (<><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 113.6 2.2c-.7.4-1.1.9-1.1 1.8" /><circle cx="12" cy="16.5" r=".7" fill="currentColor" stroke="none" /></>))
const Play = (s: number, c?: string) => base(s, c, (<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" /></>))
const Clip = (s: number, c?: string) => base(s, c, (<><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4h6v2H9zM9 11h6M9 15h4" /></>))
const Bullets = (s: number, c?: string) => base(s, c, (<><path d="M9 7h11M9 12h11M9 17h11" /><circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="5" cy="17" r="1" fill="currentColor" stroke="none" /></>))
const Steps = (s: number, c?: string) => base(s, c, (<><path d="M10 7h10M10 12h10M10 17h10" /><path d="M4 6h2v3M4 11h2.2L4 14h2.2M4 16.5h2.2" /></>))
const Clock = (s: number, c?: string) => base(s, c, (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>))
const Grid = (s: number, c?: string) => base(s, c, (<><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>))
const Cols = (s: number, c?: string) => base(s, c, (<><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M12 5v14M4 9h16" /></>))
const Tag = (s: number, c?: string) => base(s, c, (<><path d="M4 9a2 2 0 012-2h6l8 8-6 6-8-8z" /><circle cx="8.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" /></>))
const Checks = (s: number, c?: string) => base(s, c, <path d="M4 7l2 2 3-3M4 14l2 2 3-3M13 7h7M13 15h7" />)
const Pic = (s: number, c?: string) => base(s, c, (<><rect x="4" y="5" width="16" height="14" rx="2.5" /><circle cx="9" cy="10" r="1.6" /><path d="M5 17l4-4 4 3 3-3 3 3" /></>))
const Person = (s: number, c?: string) => base(s, c, (<><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19a6.5 6.5 0 0113 0" /></>))
const Banner = (s: number, c?: string) => base(s, c, (<><path d="M5 4h14v12l-7-3-7 3z" /></>))
const Flag = (s: number, c?: string) => base(s, c, (<><path d="M6 21V4M6 4h11l-2 4 2 4H6" /></>))
const Trophy = (s: number, c?: string) => base(s, c, (<><path d="M8 4h8v4a4 4 0 01-8 0zM8 6H5v1a3 3 0 003 3M16 6h3v1a3 3 0 01-3 3M10 13h4v3h-4zM8 20h8M9 16h6l1 4H8z" /></>))

const RAW: Record<ElementType, (s: number, c?: string) => ReactNode> = {
  hero: Banner,
  heading: Title,
  text: Para,
  callout: Note,
  divider: Line,
  quiz: Ask,
  video: Play,
  survey: Clip,
  list: Bullets,
  steps: Steps,
  timeline: Clock,
  symptomGrid: Grid,
  comparisonTable: Cols,
  mildCompare: Cols,
  tagRow: Tag,
  takeaways: Checks,
  scenario: Person,
  motto: Banner,
  nurseHighlight: Flag,
  completionCard: Trophy,
  image: Pic,
}

/** Glyph for a block type, used in the block list rows and add-block picker. */
export function BlockIcon({ type, size = 18, className }: { type: ElementType; size?: number; className?: string }) {
  return <>{(RAW[type] ?? Para)(size, className)}</>
}
