import Html from './Html'
import { Icon } from '../components/Icon'
import type { ScenarioElement } from '../cms/types'

export default function Scenario({ el }: { el: ScenarioElement }) {
  return (
    <div className="scenario-box">
      <div className="scenario-label">
        <Icon iconKey={el.iconKey} />
        {el.label}
      </div>
      <Html html={el.bodyHtml} />
    </div>
  )
}
