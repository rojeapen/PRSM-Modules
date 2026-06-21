import { useCallback, useMemo, useState } from 'react'
import { ModuleContext } from './ModuleContext'
import { slideQuizzes } from './data/quizzes'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'

const TOTAL = 12

const SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
]

function App() {
  const [current, setCurrent] = useState(1)
  const [quizAnswered, setQuizAnswered] = useState<Record<string, boolean>>({})
  const [videoWatched, setVideoWatched] = useState(false)

  const markQuizAnswered = useCallback((qid: string) => {
    setQuizAnswered((prev) => (prev[qid] ? prev : { ...prev, [qid]: true }))
  }, [])

  const markVideoWatched = useCallback(() => setVideoWatched(true), [])

  // Next is gated on the current slide's quizzes (and, on slide 9, the video).
  const allQuizzesAnswered = (slideQuizzes[current] || []).every((q) => quizAnswered[q])
  const videoGatePassed = current !== 9 || videoWatched
  const nextDisabled = current === TOTAL || !allQuizzesAnswered || !videoGatePassed

  function goTo(next: number) {
    if (next < 1 || next > TOTAL) return
    setCurrent(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNext() {
    if (nextDisabled) return
    goTo(current + 1)
  }

  const ctx = useMemo(
    () => ({ markQuizAnswered, markVideoWatched, videoWatched }),
    [markQuizAnswered, markVideoWatched, videoWatched],
  )

  return (
    <ModuleContext.Provider value={ctx}>
      <div className="module-shell">
        <Header current={current} total={TOTAL} />
        <div className="slide-container">
          {SLIDES.map((SlideComponent, i) => (
            <SlideComponent key={i} active={current === i + 1} />
          ))}
        </div>
        <NavBar
          current={current}
          total={TOTAL}
          nextDisabled={nextDisabled}
          onBack={() => goTo(current - 1)}
          onNext={handleNext}
        />
      </div>
    </ModuleContext.Provider>
  )
}

export default App
