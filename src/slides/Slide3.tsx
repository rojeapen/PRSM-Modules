import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import Quiz from '../components/Quiz'
import Divider from '../components/Divider'
import { quizzes } from '../data/quizzes'

const checkIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
    <path d="M9 14l3 3 7-7" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Slide3({ active }: { active: boolean }) {
  return (
    <Slide index={3} active={active}>
      <SlideTitle icon={checkIcon}>Quick Check: Anna’s Story</SlideTitle>
      <Callout color="teal" title="Think about what you just read">
        Before we go deeper, let’s make sure the key ideas from Anna’s story landed. Answer both
        questions below.
      </Callout>
      <Quiz quiz={quizzes.q1} />
      <Divider />
      <Quiz quiz={quizzes.q2} />
    </Slide>
  )
}
