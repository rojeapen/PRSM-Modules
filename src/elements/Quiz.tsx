import { clean } from '../cms/sanitize'
import { useModule } from '../player/ModuleContext'
import type { QuizElement } from '../cms/types'

export default function Quiz({ el }: { el: QuizElement }) {
  const { quizAnswers, selectAnswer } = useModule()
  const selected = quizAnswers[el.id]
  const answered = selected !== undefined
  const selectedCorrect = answered && el.options[selected]?.correct

  return (
    <div>
      {el.blockTitle && <span className="quiz-block-title">{el.blockTitle}</span>}
      <p className="quiz-question">{el.question}</p>
      <div className="quiz-options">
        {el.options.map((option, index) => {
          const classes = ['quiz-option']
          if (answered) {
            if (index === selected) classes.push(option.correct ? 'correct' : 'wrong')
            else if (option.correct && !selectedCorrect) classes.push('correct')
          }
          return (
            <button
              key={index}
              type="button"
              className={classes.join(' ')}
              disabled={answered}
              onClick={() => selectAnswer(el.id, index)}
            >
              {option.text}
            </button>
          )
        })}
      </div>
      <div
        className={'quiz-feedback' + (answered ? ' show ' + (selectedCorrect ? 'correct' : 'wrong') : '')}
        dangerouslySetInnerHTML={
          answered
            ? { __html: clean(selectedCorrect ? el.feedback.correct : el.feedback.wrong) }
            : undefined
        }
      />
    </div>
  )
}
