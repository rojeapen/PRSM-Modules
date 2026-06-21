import { useCallback, useMemo, useState } from 'react'
import type { ModuleData, ScreenData } from '../cms/types'
import { ModuleContext } from '../player/ModuleContext'
import ScreenRenderer from '../player/ScreenRenderer'
import Header from '../components/Header'

/**
 * Live preview of a single screen, rendered through the real player renderer so
 * what authors see matches the published module. Quizzes are interactive.
 */
export default function PreviewPane({
  module,
  screen,
  index,
}: {
  module: ModuleData
  screen: ScreenData
  index: number
}) {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [videoWatched, setVideoWatched] = useState<Record<string, boolean>>({})

  const selectAnswer = useCallback((id: string, optionIndex: number) => {
    setQuizAnswers((prev) => (prev[id] !== undefined ? prev : { ...prev, [id]: optionIndex }))
  }, [])
  const markVideoWatched = useCallback((id: string) => {
    setVideoWatched((prev) => (prev[id] ? prev : { ...prev, [id]: true }))
  }, [])

  const ctx = useMemo(
    () => ({ quizAnswers, videoWatched, selectAnswer, markVideoWatched, preview: true }),
    [quizAnswers, videoWatched, selectAnswer, markVideoWatched],
  )

  return (
    <div className="cms-preview">
      <ModuleContext.Provider value={ctx}>
        <div className="module-shell">
          <Header
            title={module.title}
            subtitle={module.subtitle}
            credit={module.credit}
            current={index + 1}
            total={module.screens.length}
          />
          <div className="slide-container">
            <ScreenRenderer key={screen.id} screen={screen} />
          </div>
        </div>
      </ModuleContext.Provider>
    </div>
  )
}
