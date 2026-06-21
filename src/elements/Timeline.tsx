import type { TimelineElement } from '../cms/types'

export default function Timeline({ el }: { el: TimelineElement }) {
  return (
    <div className="timeline">
      {el.items.map((item, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-dot" style={{ background: item.color }}>
            {item.label}
          </div>
          <div className="tl-body">
            <strong>{item.title}</strong>
            <span>{item.body}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
