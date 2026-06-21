import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="5" width="22" height="18" rx="3" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
    <path d="M8 11h12M8 15h8M8 19h10" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

export default function Slide2({ active }: { active: boolean }) {
  return (
    <Slide index={2} active={active}>
      <SlideTitle icon={titleIcon}>Meet Anna</SlideTitle>
      <div className="scenario-box">
        <div className="scenario-label">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" fill="#0d9488" />
            <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Anna’s Story
        </div>
        Anna is a 14-year-old student with a known peanut allergy. At lunch, she grabbed what looked
        like a plain granola bar from the cafeteria line. A few minutes after taking a bite,
        something felt very wrong.
        <br />
        <br />
        Her <em>lips and tongue began to swell</em>. Her <em>throat felt like it was closing</em>.
        Red, itchy bumps — hives — broke out across her chest and arms. She turned to her friend and
        whispered, <em>“I can’t breathe… my throat is closing up.”</em>
        <br />
        <br />
        Her face went pale. She became dizzy and confused. She had an EpiPen in her backpack —
        prescribed by her doctor for exactly this situation.
      </div>
      <Callout color="orange" title="What’s happening to Anna?">
        Anna is having anaphylaxis — a sudden, severe, life-threatening allergic reaction. Her body
        is overreacting to the peanut protein in that granola bar. Without fast action, this can
        become fatal within minutes.
      </Callout>
    </Slide>
  )
}
