import type { ScreenData } from '../cms/types'

/**
 * Whether a screen's "Next" gate is satisfied: every gating quiz answered and
 * every require-watch video watched. Shared by the player and editor preview.
 */
export function screenGatePassed(
  screen: ScreenData,
  quizAnswers: Record<string, number>,
  videoWatched: Record<string, boolean>,
): boolean {
  for (const el of screen.elements) {
    if (el.type === 'quiz' && el.gating && quizAnswers[el.id] === undefined) return false
    if (el.type === 'video' && el.requireWatch && !videoWatched[el.id]) return false
  }
  return true
}
