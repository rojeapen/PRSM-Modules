import Html from './Html'
import type { StepsElement } from '../cms/types'

export default function Steps({ el }: { el: StepsElement }) {
  return (
    <div className="steps">
      {el.items.map((item, i) => (
        <div className="step" key={i}>
          <div className="step-num" style={item.numColor ? { background: item.numColor } : undefined}>
            {item.num}
          </div>
          <div className="step-content">
            <strong>{item.title}</strong>
            <Html html={item.bodyHtml} />
          </div>
        </div>
      ))}
    </div>
  )
}
