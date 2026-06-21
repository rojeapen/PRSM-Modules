import { createContext, useContext } from 'react'

export interface ModuleContextValue {
  /** quiz element id → selected option index (presence = answered). */
  quizAnswers: Record<string, number>
  /** video element id → watched-in-full flag. */
  videoWatched: Record<string, boolean>
  selectAnswer: (id: string, optionIndex: number) => void
  markVideoWatched: (id: string) => void
  /** Editor live-preview mode (suppresses scroll-to-top side effects, etc.). */
  preview: boolean
}

export const ModuleContext = createContext<ModuleContextValue | null>(null)

export function useModule(): ModuleContextValue {
  const ctx = useContext(ModuleContext)
  if (!ctx) throw new Error('useModule must be used within a ModuleContext provider')
  return ctx
}
