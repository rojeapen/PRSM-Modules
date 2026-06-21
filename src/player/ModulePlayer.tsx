import { useCallback, useMemo, useState } from 'react'
import type { ModuleData } from '../cms/types'
import { ModuleContext } from './ModuleContext'
import { screenGatePassed } from './gating'
import ScreenRenderer from './ScreenRenderer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

/** Runtime player: renders a module from data and manages navigation + gating. */
export default function ModulePlayer({ module }: { module: ModuleData }) {
  const [current, setCurrent] = useState(0) // 0-based screen index
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const [videoWatched, setVideoWatched] = useState<Record<string, boolean>>({})

  const selectAnswer = useCallback((id: string, optionIndex: number) => {
    setQuizAnswers((prev) => (prev[id] !== undefined ? prev : { ...prev, [id]: optionIndex }))
  }, [])
  const markVideoWatched = useCallback((id: string) => {
    setVideoWatched((prev) => (prev[id] ? prev : { ...prev, [id]: true }))
  }, [])

  const ctx = useMemo(
    () => ({ quizAnswers, videoWatched, selectAnswer, markVideoWatched, preview: false }),
    [quizAnswers, videoWatched, selectAnswer, markVideoWatched],
  )

  const total = module.screens.length
  const screen = module.screens[current]
  const gatePassed = screen ? screenGatePassed(screen, quizAnswers, videoWatched) : true
  const nextDisabled = current >= total - 1 || !gatePassed

  function goTo(next: number) {
    if (next < 0 || next > total - 1) return
    setCurrent(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (total === 0) {
    return (
      <div className="module-shell">
        <Header title={module.title} subtitle={module.subtitle} credit={module.credit} current={0} total={0} />
        <div className="slide-container">
          <p>This module has no screens yet.</p>
        </div>
      </div>
    )
  }

  return (
    <ModuleContext.Provider value={ctx}>
      <div className="module-shell">
        <Header
          title={module.title}
          subtitle={module.subtitle}
          credit={module.credit}
          current={current + 1}
          total={total}
        />
        <div className="slide-container">{screen && <ScreenRenderer key={screen.id} screen={screen} />}</div>
        <NavBar
          current={current + 1}
          total={total}
          nextDisabled={nextDisabled}
          onBack={() => goTo(current - 1)}
          onNext={() => !nextDisabled && goTo(current + 1)}
        />
      </div>
    </ModuleContext.Provider>
  )
}
