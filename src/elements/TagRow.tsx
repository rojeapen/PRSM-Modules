import { Icon } from '../components/Icon'
import type { TagRowElement } from '../cms/types'

export default function TagRow({ el }: { el: TagRowElement }) {
  return (
    <div className="tag-row">
      {el.tags.map((tag, i) => (
        <span className="tag" key={i}>
          <Icon iconKey={tag.iconKey} />
          {tag.text}
        </span>
      ))}
    </div>
  )
}
