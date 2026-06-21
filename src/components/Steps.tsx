import type { CSSProperties, ReactNode } from 'react'

interface StepProps {
  /** Number or marker shown in the badge (e.g. 1, "✓", "✕"). */
  num: ReactNode
  /** Optional override for the badge background colour. */
  numStyle?: CSSProperties
  title: ReactNode
  children: ReactNode
}

export function Step({ num, numStyle, title, children }: StepProps) {
  return (
    <div className="step">
      <div className="step-num" style={numStyle}>
        {num}
      </div>
      <div className="step-content">
        <strong>{title}</strong>
        <span>{children}</span>
      </div>
    </div>
  )
}

export function Steps({ children }: { children: ReactNode }) {
  return <div className="steps">{children}</div>
}
