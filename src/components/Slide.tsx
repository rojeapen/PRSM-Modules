import type { ReactNode } from 'react'

interface SlideProps {
  /** 1-based slide number; becomes the slide-N id. */
  index: number
  active: boolean
  children: ReactNode
}

/** Wrapper that mirrors the original `.slide` / `.slide.active` markup. */
export default function Slide({ index, active, children }: SlideProps) {
  return (
    <div className={'slide' + (active ? ' active' : '')} id={`slide-${index}`}>
      {children}
    </div>
  )
}
