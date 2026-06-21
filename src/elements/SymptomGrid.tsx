import { Icon } from '../components/Icon'
import type { SymptomGridElement } from '../cms/types'

export default function SymptomGrid({ el }: { el: SymptomGridElement }) {
  return (
    <div className="symptom-grid">
      {el.cards.map((card, i) => (
        <div className="symptom-card" key={i}>
          <Icon iconKey={card.iconKey} />
          <div className="text">
            {card.title}
            <br />
            <span className="subtext">{card.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
