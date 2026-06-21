interface NavBarProps {
  current: number
  total: number
  /** Next is disabled until the current slide's quizzes / video gate are cleared. */
  nextDisabled: boolean
  onBack: () => void
  onNext: () => void
}

export default function NavBar({ current, total, nextDisabled, onBack, onNext }: NavBarProps) {
  return (
    <div className="nav-bar">
      <button type="button" className="btn btn-back" onClick={onBack} disabled={current === 1}>
        ← Back
      </button>
      <span className="slide-counter">
        {current} / {total}
      </span>
      <button type="button" className="btn btn-next" onClick={onNext} disabled={nextDisabled}>
        Next →
      </button>
    </div>
  )
}
