import Slide from '../components/Slide'
import SlideTitle from '../components/SlideTitle'
import Callout from '../components/Callout'

const titleIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5" />
    <path
      d="M10.5 11C10.5 8.5 12 7 14 7C16 7 17.5 8.5 17.5 10.5C17.5 12.5 16 13.5 14 15V17"
      stroke="#2563eb"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="20.5" r="1.5" fill="#2563eb" />
  </svg>
)

export default function Slide4({ active }: { active: boolean }) {
  return (
    <Slide index={4} active={active}>
      <SlideTitle icon={titleIcon}>What Is Anaphylaxis?</SlideTitle>
      <p>
        Anaphylaxis (say it: <strong>an-a-fi-LAX-iss</strong>) is the most serious kind of allergic
        reaction. It can affect the whole body all at once and can be{' '}
        <strong>fatal within minutes</strong> if not treated.
      </p>
      <Callout color="blue" title="How does it happen?">
        When someone with a severe allergy is exposed to their trigger (like peanuts, bee stings, or
        certain medications), their immune system treats it as a dangerous invader and floods the
        body with chemicals. These chemicals cause the airways to swell, blood pressure to drop, and
        multiple body systems to shut down rapidly.
      </Callout>
      <p>
        <strong>Common triggers include:</strong>
      </p>
      <ul>
        <li>
          Food allergens — especially{' '}
          <strong>peanuts, tree nuts, shellfish, fish, milk, and eggs</strong>
        </li>
        <li>Insect stings (bees, wasps)</li>
        <li>Certain medicines (like penicillin)</li>
        <li>Latex (a type of rubber)</li>
      </ul>
      <Callout color="red" title="What happens if anaphylaxis goes untreated?">
        Without epinephrine, the airway can swell completely shut, blood pressure can collapse, and
        the heart can stop. Death can occur within <strong>15–30 minutes</strong> of symptom onset.
        This is not an overreaction — it is a true medical emergency every single time.
      </Callout>
      <Callout color="orange" title="How fast can it happen?">
        Symptoms can begin within seconds to minutes of exposure. This is why speed matters more
        than anything else.
      </Callout>
    </Slide>
  )
}
