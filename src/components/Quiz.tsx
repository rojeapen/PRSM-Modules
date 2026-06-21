import { useState } from 'react'
import { useModule } from '../ModuleContext'
import type { QuizDef } from '../data/quizzes'

interface QuizProps {
  quiz: QuizDef
}

/**
 * A single knowledge-check question. Locks after the first answer, reveals the
 * correct option + feedback, and reports completion to the module so the Next
 * button can unlock.
 */
export default function Quiz({ quiz }: QuizProps) {
  const { markQuizAnswered } = useModule()
  const [selected, setSelected] = useState<number | null>(null)

  const answered = selected !== null
  const selectedCorrect = answered && quiz.options[selected].correct

  function handleAnswer(index: number) {
    if (answered) return
    setSelected(index)
    markQuizAnswered(quiz.id)
  }

  return (
    <div>
      {quiz.blockTitle && <span className="quiz-block-title">{quiz.blockTitle}</span>}
      <p className="quiz-question">{quiz.question}</p>
      <div className="quiz-options">
        {quiz.options.map((option, index) => {
          const classes = ['quiz-option']
          if (answered) {
            // Highlight the option the user picked, and always reveal the correct one.
            if (index === selected) classes.push(option.correct ? 'correct' : 'wrong')
            else if (option.correct && !selectedCorrect) classes.push('correct')
          }
          return (
            <button
              key={index}
              type="button"
              className={classes.join(' ')}
              disabled={answered}
              onClick={() => handleAnswer(index)}
            >
              {option.text}
            </button>
          )
        })}
      </div>
      <div
        className={
          'quiz-feedback' + (answered ? ' show ' + (selectedCorrect ? 'correct' : 'wrong') : '')
        }
        dangerouslySetInnerHTML={
          answered
            ? { __html: selectedCorrect ? quiz.feedback.correct : quiz.feedback.wrong }
            : undefined
        }
      />
    </div>
  )
}
