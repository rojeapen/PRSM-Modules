import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import Quiz from '../components/Quiz'
import Divider from '../components/Divider'
import { Steps, Step } from '../components/Steps'
import { quizzes } from '../data/quizzes'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="8" width="22" height="17" rx="3" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5" />
    <path d="M9 8V6a5 5 0 0110 0v2" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 14v4M12 16h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Slide10({ active }: { active: boolean }) {
  return (
    <Slide index={10} active={active}>
      <SlideTitle icon={titleIcon}>Why the Hospital — Even After the EpiPen?</SlideTitle>
      <p>
        The EpiPen helped Anna breathe again. She’s starting to feel better. So… she can just go
        back to class, right? <strong>Absolutely not.</strong>
      </p>
      <Callout color="red" title="The Biphasic Reaction">
        A biphasic reaction is a second wave of anaphylaxis that can happen{' '}
        <strong>hours after the first reaction</strong> — even after the EpiPen has been used and
        the person feels completely fine. It can be as severe or even worse than the first reaction.
      </Callout>
      <Steps>
        <Step num={1} title="The EpiPen wears off">
          Epinephrine lasts only about 15–20 minutes. Without hospital monitoring and further
          treatment, symptoms can return.
        </Step>
        <Step num={2} title="The hospital can give additional treatment">
          Doctors can provide IV medications, oxygen, and monitoring that aren’t available at
          school.
        </Step>
        <Step num={3} title="Every case of anaphylaxis requires 911">
          Even if the EpiPen worked. Even if they feel better. No exceptions.
        </Step>
      </Steps>
      <Callout color="green" title="The rule is simple:">
        EpiPen → Call 911 → Go to the hospital. Always. Every time.
      </Callout>
      <Divider />
      <Quiz quiz={quizzes.q5} />
    </Slide>
  )
}
