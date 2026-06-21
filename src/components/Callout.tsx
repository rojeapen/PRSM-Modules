import type { ReactNode } from 'react'

export type CalloutColor = 'teal' | 'orange' | 'blue' | 'green' | 'purple' | 'red'

interface CalloutProps {
  color: CalloutColor
  /** Bold uppercase label rendered above the body. */
  title?: ReactNode
  children: ReactNode
}

export default function Callout({ color, title, children }: CalloutProps) {
  return (
    <div className={`callout ${color}`}>
      {title && <strong>{title}</strong>}
      {children}
    </div>
  )
}
