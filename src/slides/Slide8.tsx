import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import Quiz from '../components/Quiz'
import Divider from '../components/Divider'
import { Steps, Step } from '../components/Steps'
import { quizzes } from '../data/quizzes'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
    <path d="M14 7v8M14 19v2" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const arrow = <div style={{ fontSize: '1.4rem', opacity: 0.5, color: '#fff' }}>→</div>

export default function Slide8({ active }: { active: boolean }) {
  return (
    <Slide index={8} active={active}>
      <SlideTitle icon={titleIcon}>Spot. Shot. Dial.</SlideTitle>
      <div className="motto-banner">
        <div
          style={{
            fontSize: '.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            opacity: 0.8,
            marginBottom: 10,
          }}
        >
          Remember this motto
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div className="motto-pill">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="#fff" strokeWidth="1.8" />
              <path d="M13 13l4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Spot
          </div>
          {arrow}
          <div className="motto-pill">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <rect x="1" y="7.5" width="2" height="5" rx="1" fill="#fff" />
              <line x1="3" y1="10" x2="6" y2="10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="6" y="7" width="9" height="6" rx="2" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="1.4" />
              <rect x="15" y="8.5" width="2" height="3" rx=".5" fill="#fff" />
              <line x1="17" y1="10" x2="21" y2="10" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Shot
          </div>
          {arrow}
          <div className="motto-pill">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M4 16 C4 17.2 5 18 6.2 18 L7.5 17.5 C8.3 17 8.3 16.2 7.8 15.3 L7 13.5 C8.3 11.3 10.5 9.5 13 8.2 L14.7 9 C15.6 9.5 16.5 9.4 17 8.6 L17.5 7.2 C17.9 6 17.2 5 16 5 C11 5 4 11 4 16Z"
                fill="rgba(255,255,255,0.25)"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Dial
          </div>
        </div>
        <div style={{ fontSize: '.82rem', opacity: 0.8, marginTop: 10, color: '#fff' }}>
          Epinephrine first — then call 911. Every second counts.
        </div>
      </div>
      <Steps>
        <Step num={1} title="Spot — recognize it fast">
          Hives + swelling + breathing trouble = anaphylaxis. Don’t wait to be certain. Yell for a
          teacher or adult immediately:{' '}
          <em>“This is an emergency — someone is having a severe allergic reaction!”</em>
        </Step>
        <Step num={2} title="Shot — give epinephrine first">
          Use the EpiPen or Auvi-Q right away — <em>before</em> calling 911. This is the most
          critical action. Do not wait.
        </Step>
        <Step num={3} title="Dial — call 911 immediately after the shot">
          Point at a specific person: <em>“You — call 911 right now.”</em> Don’t assume someone else
          will do it.
        </Step>
        <Step num={4} title="Stay with the person — do not leave them alone">
          Keep them calm. If they feel faint, help them lie flat with legs elevated. If breathing is
          difficult, let them sit up.
        </Step>
      </Steps>
      <div className="nurse-highlight">
        <div className="nurse-icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="10" y="3" width="6" height="20" rx="2" fill="white" />
            <rect x="3" y="10" width="20" height="6" rx="2" fill="white" />
          </svg>
        </div>
        <div className="nurse-text">
          <strong className="title">The Nurse’s Office</strong>
          <p>
            Schools keep epinephrine auto-injectors (EAIs) in the <strong>nurse's office</strong>.
            Know exactly where your school nurse's office is <em>right now</em> — before you ever
            need it. Many schools also have trained staff throughout the building who carry EAIs.
            Ask your teacher today who those people are and where they are located.
          </p>
        </div>
      </div>
      <Callout color="orange" title="Why shot before dial?">
        Epinephrine is the only treatment that can stop anaphylaxis. Giving the shot first — even 30
        seconds sooner — can be the difference between life and death. 911 is critical, but the shot
        cannot wait.
      </Callout>
      <Divider />
      <Quiz quiz={quizzes.q_nurse} />
    </Slide>
  )
}
