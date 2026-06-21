import type { ReactNode } from 'react'

interface SlideTitleProps {
  /** Optional inline SVG icon rendered before the title text. */
  icon?: ReactNode
  children: ReactNode
}

export default function SlideTitle({ icon, children }: SlideTitleProps) {
  return (
    <div className="slide-title">
      {icon}
      {children}
    </div>
  )
}
