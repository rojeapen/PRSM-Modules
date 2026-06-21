import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'

const warnIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M15 2L28 25H2L15 2Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
    <path d="M15 10V18" stroke="#92400e" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="15" cy="22" r="1.5" fill="#92400e" />
  </svg>
)

const timeline = [
  {
    color: '#f59e0b',
    label: '0–2m',
    title: 'Symptoms begin',
    body: 'Hives, swelling, throat tightness, dizziness appear within seconds to 2 minutes of exposure.',
  },
  {
    color: '#f87171',
    label: '5m',
    title: 'Airway narrowing worsens',
    body: 'Throat swelling becomes more severe. Breathing becomes increasingly difficult. Blood pressure starts dropping.',
  },
  {
    color: '#ef4444',
    label: '10–15m',
    title: 'Critical danger zone',
    body: 'Airway may close almost completely. Person may lose consciousness from lack of oxygen or dangerously low blood pressure.',
  },
  {
    color: '#dc2626',
    label: '15–30m',
    title: 'Potentially fatal',
    body: 'Without epinephrine, the body cannot recover on its own. Death from cardiac arrest or oxygen deprivation can occur within 15–30 minutes.',
  },
]

export default function Slide5({ active }: { active: boolean }) {
  return (
    <Slide index={5} active={active}>
      <SlideTitle icon={warnIcon}>Mild Reaction vs. Anaphylaxis</SlideTitle>
      <p>
        Not every allergic reaction is an emergency — but knowing the difference can save a life.{' '}
        <strong>The key is how many body systems are affected, and how fast.</strong>
      </p>
      <div className="mild-compare">
        <div className="mild-col mild">
          <h4>✓ Mild Allergic Reaction</h4>
          <ul>
            <li>Localized hives or itching</li>
            <li>Runny nose or sneezing</li>
            <li>Watery, itchy eyes</li>
            <li>Mild stomach discomfort</li>
            <li>
              Symptoms in <strong>one area only</strong>
            </li>
            <li>No breathing difficulty</li>
            <li>Person can speak normally</li>
          </ul>
        </div>
        <div className="mild-col severe">
          <h4>⚠ Anaphylaxis — Emergency!</h4>
          <ul>
            <li>Throat tightening or closing</li>
            <li>Difficulty breathing or wheezing</li>
            <li>Swelling of lips, tongue, or face</li>
            <li>Dizziness, fainting, confusion</li>
            <li>
              Symptoms in <strong>multiple body systems</strong>
            </li>
            <li>Rapid or weak pulse</li>
            <li>Pale or bluish skin color</li>
          </ul>
        </div>
      </div>
      <Callout color="orange" title="The Golden Rule">
        If someone has trouble breathing AND hives or swelling after eating or being stung — treat
        it as anaphylaxis. Do NOT wait to see if it gets worse. Acting too early is always safer
        than acting too late.
      </Callout>
      <p>
        <strong>What happens if anaphylaxis is left untreated?</strong>
      </p>
      <div className="timeline">
        {timeline.map((item) => (
          <div className="tl-item" key={item.label}>
            <div className="tl-dot" style={{ background: item.color }}>
              {item.label}
            </div>
            <div className="tl-body">
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </div>
          </div>
        ))}
      </div>
      <Callout color="red" title="The bottom line">
        Anaphylaxis cannot fix itself. It will not “calm down” without treatment. Every minute
        without epinephrine matters.
      </Callout>
    </Slide>
  )
}
