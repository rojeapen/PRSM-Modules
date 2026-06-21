import type { ReactNode } from 'react'
import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polygon
      points="14,3 17.5,10 25,11 19.5,16.5 21,24 14,20 7,24 8.5,16.5 3,11 10.5,10"
      fill="#fde68a"
      stroke="#f59e0b"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const takeawayCheck = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="9" cy="9" r="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.2" />
    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const takeaways: ReactNode[] = [
  <>
    <strong>Spot the signs:</strong> hives + swelling + breathing trouble = anaphylaxis emergency.
  </>,
  <>
    <strong>Know the difference:</strong> mild reactions are localized; anaphylaxis hits multiple
    systems at once and can stop breathing.
  </>,
  <>
    <strong>Untreated anaphylaxis is fatal:</strong> death can occur within 15–30 minutes without
    epinephrine. It will not improve on its own.
  </>,
  <>
    <strong>Spot. Shot. Dial:</strong> recognize it fast, give epinephrine first, then call 911.
    EAIs are kept in the <strong>nurse’s office</strong> — know where it is now.
  </>,
  <>
    <strong>Hospital every time:</strong> even after epinephrine works, a second wave can come hours
    later.
  </>,
  <>
    <strong>Be a good friend:</strong> support classmates with allergies with empathy, not stigma.
  </>,
]

export default function Slide12({ active }: { active: boolean }) {
  return (
    <Slide index={12} active={active}>
      <SlideTitle icon={titleIcon}>You Did It!</SlideTitle>
      <div className="completion-card">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="34" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <path d="M20 38l10 10 22-22" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="56" cy="18" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="16" cy="20" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="58" cy="52" r="4" fill="rgba(255,255,255,0.2)" />
        </svg>
        <h2>Module Complete</h2>
        <p>
          You now have the knowledge to recognize anaphylaxis and take life-saving action. In an
          emergency, confident, fast action is the difference between life and death.
        </p>
        <div className="badge-row">
          <div className="badge">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="#fff" strokeWidth="1.2" />
              <path d="M9 9l2.5 2.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Recognizer
          </div>
          <div className="badge">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#fff" strokeWidth="1.1" />
              <path d="M6.5 3.5v4M6.5 9.5v.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            First Responder
          </div>
          <div className="badge">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="5" y="1.5" width="3" height="10" fill="#fff" />
              <rect x="1.5" y="5" width="10" height="3" fill="#fff" />
            </svg>
            EAI Aware
          </div>
          <div className="badge">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 11C4 8.5 1.5 7 1.5 4.5a3 3 0 015-2.2 3 3 0 015 2.2C11.5 7 9 8.5 6.5 11z"
                stroke="#fff"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            Ally
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'linear-gradient(135deg,var(--teal-50),#fff)',
          border: '2px solid var(--teal-400)',
          borderRadius: 16,
          padding: '28px 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          marginTop: 4,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
          <rect x="13" y="12" width="18" height="20" rx="3" fill="none" stroke="#0d9488" strokeWidth="1.5" />
          <path d="M17 18h10M17 22h10M17 26h6" stroke="#0d9488" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="32" cy="32" r="7" fill="#0f766e" />
          <path d="M29 32l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: 480 }}>
          <strong>Take this survey to evaluate your understanding of anaphylaxis.</strong>
        </p>
        <a
          style={{
            background: 'var(--teal-700)',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '13px 34px',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all .2s',
          }}
          href="https://qualtricsxm2kmfvl78w.qualtrics.com/jfe/form/SV_1C7FST4pCZqspts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Take the Survey →</strong>
        </a>
      </div>
      <p>
        <strong>Your key takeaways:</strong>
      </p>
      <div className="takeaway-list">
        {takeaways.map((text, i) => (
          <div className="takeaway" key={i}>
            {takeawayCheck}
            <div className="ttext">{text}</div>
          </div>
        ))}
      </div>
    </Slide>
  )
}
