import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import Quiz from '../components/Quiz'
import Divider from '../components/Divider'
import { quizzes } from '../data/quizzes'

const warnIcon = (
  <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
    <path d="M15 2L28 25H2L15 2Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
    <path d="M15 10V18" stroke="#92400e" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="15" cy="22" r="1.5" fill="#92400e" />
  </svg>
)

const checkIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
    <path d="M9 14l3 3 7-7" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Slide6({ active }: { active: boolean }) {
  return (
    <Slide index={6} active={active}>
      <SlideTitle icon={warnIcon}>Recognize the Warning Signs</SlideTitle>
      <p>
        Anaphylaxis usually affects{' '}
        <strong>more than one part of the body at the same time</strong>. Look for these signs:
      </p>
      <div className="symptom-grid">
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#e0f2fe" />
            <path d="M6 13 Q13 9 20 13 Q27 17 34 13" stroke="#0ea5e9" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M6 19 Q12 15 18 19 Q24 23 32 19" stroke="#38bdf8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M6 25 Q11 21 17 25 Q23 29 30 25" stroke="#7dd3fc" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
          <div className="text">
            Breathing trouble
            <br />
            <span className="subtext">Tight throat, wheezing, struggling to breathe</span>
          </div>
        </div>
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#fce7f3" />
            <path d="M7 19 Q12 12 19 14 Q26 12 31 19 Q26 28 19 26 Q12 28 7 19Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.4" />
            <ellipse cx="15" cy="21" rx="3.5" ry="1.8" fill="#f9a8d4" opacity=".55" />
          </svg>
          <div className="text">
            Swollen lips or tongue
            <br />
            <span className="subtext">Throat closing up, trouble swallowing</span>
          </div>
        </div>
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#fef2f2" />
            <circle cx="12" cy="12" r="4" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="26" cy="11" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="20" cy="21" r="5" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="10" cy="24" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
            <circle cx="29" cy="24" r="3.5" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
          </svg>
          <div className="text">
            Hives or rash
            <br />
            <span className="subtext">Red, itchy welts suddenly covering the skin</span>
          </div>
        </div>
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#fef9c3" />
            <path
              d="M14 15 C14 11.5 16 9 19 9 C22 9 24 11.5 24 14 C24 16.5 22 18 19 20 C19 20 19 21 19 22"
              stroke="#ca8a04"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="19" cy="27" r="2.2" fill="#ca8a04" />
          </svg>
          <div className="text">
            Dizziness or confusion
            <br />
            <span className="subtext">Feeling faint, slurring words, looking pale</span>
          </div>
        </div>
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#dcfce7" />
            <circle cx="19" cy="20" r="12" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" />
            <ellipse cx="15" cy="17" rx="2" ry="1.5" fill="#166534" />
            <ellipse cx="23" cy="17" rx="2" ry="1.5" fill="#166534" />
            <path d="M14 24 Q16 22 19 23 Q22 24 24 22" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <div className="text">
            Nausea or vomiting
            <br />
            <span className="subtext">Sudden stomach pain, cramping, throwing up</span>
          </div>
        </div>
        <div className="symptom-card">
          <svg className="sicon" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#dbeafe" />
            <circle cx="19" cy="19" r="13" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          </svg>
          <div className="text">
            Bluish lips or skin
            <br />
            <span className="subtext">A sign the body isn’t getting enough oxygen</span>
          </div>
        </div>
      </div>
      <Callout color="orange" title="Key rule">
        If someone is having trouble breathing AND has swelling or hives after eating or being stung
        — treat it as anaphylaxis immediately. Don’t wait to see if it gets worse.
      </Callout>
      <Divider />
      <SlideTitle icon={checkIcon}>Quick Check: Mild vs. Anaphylaxis</SlideTitle>
      <Quiz quiz={quizzes.q_mild} />
      <Divider />
      <Quiz quiz={quizzes.q_untreated} />
    </Slide>
  )
}
