import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'

export default function Slide1({ active }: { active: boolean }) {
  return (
    <Slide index={1} active={active}>
      <SlideTitle>Welcome!</SlideTitle>
      <div className="welcome-hero">
        <h2>What Would You Do?</h2>
        <p>
          Imagine your friend suddenly can’t breathe after eating lunch. Their face is swelling and
          they look terrified. Do you know what to do?
          <br />
          <br />
          This module will teach you to{' '}
          <strong>recognize a life-threatening allergic reaction</strong> and take the right steps
          to help. You could save a life.
        </p>
      </div>
      <div className="tag-row">
        <span className="tag">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#0d9488" strokeWidth="1.2" />
            <path d="M6.5 3.5v3.5l2 2" stroke="#0d9488" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          ~10 minutes
        </span>
        <span className="tag">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="2" y="1.5" width="9" height="10" rx="1.5" stroke="#0d9488" strokeWidth="1.1" />
            <path d="M4 5h5M4 7h4M4 9h3" stroke="#0d9488" strokeWidth="1" strokeLinecap="round" />
          </svg>
          12 sections
        </span>
        <span className="tag">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#0d9488" strokeWidth="1.1" />
            <path
              d="M5 5.5c0-1 .7-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .7-.4 1.3-1 1.6L6.5 9"
              stroke="#0d9488"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <circle cx="6.5" cy="10" r=".6" fill="#0d9488" />
          </svg>
          Knowledge checks
        </span>
      </div>
      <Callout color="teal" title="What You’ll Learn">
        By the end of this module you’ll know how to spot anaphylaxis, what to do immediately, how
        the EpiPen works, why the hospital is always necessary, and how to support a friend who has
        a severe allergy.
      </Callout>
    </Slide>
  )
}
