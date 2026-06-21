import { clean } from '../cms/sanitize'
import type { MildCompareColumn, MildCompareElement } from '../cms/types'

function Column({ col, variant }: { col: MildCompareColumn; variant: 'mild' | 'severe' }) {
  return (
    <div className={`mild-col ${variant}`}>
      <h4>{col.title}</h4>
      <ul>
        {col.itemsHtml.map((html, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: clean(html) }} />
        ))}
      </ul>
    </div>
  )
}

export default function MildCompare({ el }: { el: MildCompareElement }) {
  return (
    <div className="mild-compare">
      <Column col={el.left} variant="mild" />
      <Column col={el.right} variant="severe" />
    </div>
  )
}
