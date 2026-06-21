import { createContext, useContext } from 'react'

export interface ModuleContextValue {
  /** Record a quiz (by id) as answered so slide navigation can be gated. */
  markQuizAnswered: (qid: string) => void
  /** Mark the slide-9 tutorial video as fully watched. */
  markVideoWatched: () => void
  /** Whether the slide-9 video has been watched in full. */
  videoWatched: boolean
}

export const ModuleContext = createContext<ModuleContextValue | null>(null)

export function useModule(): ModuleContextValue {
  const ctx = useContext(ModuleContext)
  if (!ctx) {
    throw new Error('useModule must be used within a ModuleContext provider')
  }
  return ctx
}
