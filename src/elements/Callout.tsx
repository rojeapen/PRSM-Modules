import Html from './Html'
import type { CalloutElement } from '../cms/types'

export default function Callout({ el }: { el: CalloutElement }) {
  return (
    <div className={`callout ${el.color}`}>
      {el.title && <strong>{el.title}</strong>}
      <Html html={el.bodyHtml} />
    </div>
  )
}
