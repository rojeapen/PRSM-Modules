import { clean } from '../cms/sanitize'
import type { TakeawaysElement } from '../cms/types'

const check = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="9" cy="9" r="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.2" />
    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Takeaways({ el }: { el: TakeawaysElement }) {
  return (
    <div className="takeaway-list">
      {el.itemsHtml.map((html, i) => (
        <div className="takeaway" key={i}>
          {check}
          <div className="ttext" dangerouslySetInnerHTML={{ __html: clean(html) }} />
        </div>
      ))}
    </div>
  )
}
