import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import Quiz from '../components/Quiz'
import Divider from '../components/Divider'
import { Steps, Step } from '../components/Steps'
import { quizzes } from '../data/quizzes'

const titleIcon = (
  <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="5" r="4.5" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.6" />
    <line x1="13" y1="9.5" x2="13" y2="21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="7" y1="14" x2="19" y2="14" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="13" y1="21" x2="8" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="13" y1="21" x2="18" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="39" cy="5" r="4.5" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.6" />
    <line x1="39" y1="9.5" x2="39" y2="21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="33" y1="14" x2="45" y2="14" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="39" y1="21" x2="34" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="39" y1="21" x2="44" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export default function Slide11({ active }: { active: boolean }) {
  return (
    <Slide index={11} active={active}>
      <SlideTitle icon={titleIcon}>Your Role &amp; Supporting Anna</SlideTitle>
      <p>
        You may not know how to use an EpiPen. That’s okay.{' '}
        <strong>You can still save a life.</strong>
      </p>
      <Callout color="blue" title="The most powerful thing any bystander can do:">
        Recognize what’s happening, call for help loudly and clearly, and stay with the person so
        they are not alone.
      </Callout>
      <Steps>
        <Step num="✓" numStyle={{ background: '#16a34a' }} title="Yell for help the moment you suspect anaphylaxis">
          Don’t wait until you’re sure. Acting too early is far safer than acting too late.
        </Step>
        <Step num="✓" numStyle={{ background: '#16a34a' }} title="Send a specific person for help">
          Point and say: “You — go get a teacher.” Vague requests often go unanswered.
        </Step>
        <Step num="✕" numStyle={{ background: '#dc2626' }} title="Don’t leave them alone to go get help yourself">
          A person in anaphylaxis can lose consciousness quickly. Never leave them unattended.
        </Step>
      </Steps>
      <p>
        <strong>After the emergency — how to support Anna:</strong>
      </p>
      <ul>
        <li>
          <strong>Remind her it wasn’t her fault.</strong> The peanuts were mislabeled — she
          couldn’t have known.
        </li>
        <li>
          <strong>Don’t gossip or make fun of what happened.</strong> Serious medical events aren’t
          content for social media.
        </li>
        <li>
          <strong>Learn about her allergy</strong> so you can help her avoid triggers in the future.
        </li>
        <li>
          <strong>Ask how she’s doing</strong> — not just right after, but in the days that follow.
        </li>
      </ul>
      <Callout color="purple" title="Remember">
        Living with a severe food allergy requires constant alertness. Your understanding and
        support makes school a safer, less stressful place for classmates like Anna.
      </Callout>
      <Divider />
      <Quiz quiz={quizzes.q6} />
    </Slide>
  )
}
