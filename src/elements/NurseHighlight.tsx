import Html from './Html'
import { Icon } from '../components/Icon'
import type { NurseHighlightElement } from '../cms/types'

export default function NurseHighlight({ el }: { el: NurseHighlightElement }) {
  return (
    <div className="nurse-highlight">
      <div className="nurse-icon">
        <Icon iconKey={el.iconKey} />
      </div>
      <div className="nurse-text">
        <strong className="title">{el.title}</strong>
        <Html tag="p" html={el.bodyHtml} />
      </div>
    </div>
  )
}
