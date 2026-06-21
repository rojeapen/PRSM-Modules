import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'
import VideoEmbed from '../components/VideoEmbed'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5" />
    <rect x="12" y="7" width="4" height="14" fill="#0f766e" />
    <rect x="7" y="12" width="14" height="4" fill="#0f766e" />
  </svg>
)

export default function Slide9({ active }: { active: boolean }) {
  return (
    <Slide index={9} active={active}>
      <SlideTitle icon={titleIcon}>The Epinephrine Auto-Injector (EAI)</SlideTitle>
      <p>
        An epinephrine auto-injector is a device that delivers a pre-measured dose of{' '}
        <strong>epinephrine</strong> (also called adrenaline) into the outer thigh. It is the{' '}
        <strong>only first-line treatment for anaphylaxis</strong> — brands include the EpiPen and
        the Auvi-Q.
      </p>
      <Callout color="green" title="What epinephrine does">
        It rapidly opens up the airways, reduces swelling, raises blood pressure, and slows the
        allergic response — buying critical time until emergency services arrive.
      </Callout>
      <p>
        <strong>EAI (Epinephrine) vs. Antihistamines (like Benadryl):</strong>
      </p>
      <table className="compare-table">
        <tbody>
          <tr>
            <th>EAI (Epinephrine)</th>
            <th>Antihistamine (Benadryl)</th>
          </tr>
          <tr>
            <td>
              Works in <strong>1–2 minutes</strong>
            </td>
            <td>
              Works in <strong>30–60 minutes</strong>
            </td>
          </tr>
          <tr>
            <td>
              Treats <strong>life-threatening symptoms</strong> — airway swelling, low BP
            </td>
            <td>
              Only treats <strong>mild symptoms</strong> — hives, sneezing
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.2" />
                  <path d="M5 9.5l3 3 5-6" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Correct treatment for anaphylaxis
              </span>
            </td>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="8" fill="#fef2f2" stroke="#f87171" strokeWidth="1.2" />
                  <path d="M6 6l6 6M12 6l-6 6" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Not sufficient — may give false security
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <Callout color="red" title="Never substitute Benadryl for an EAI during anaphylaxis.">
        By the time an antihistamine kicks in, it may be too late. The airway cannot wait 30–60
        minutes.
      </Callout>
      <VideoEmbed />
    </Slide>
  )
}
