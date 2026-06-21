import { clean } from '../cms/sanitize'
import type { ListElement } from '../cms/types'

export default function ListEl({ el }: { el: ListElement }) {
  const items = el.itemsHtml.map((html, i) => (
    <li key={i} dangerouslySetInnerHTML={{ __html: clean(html) }} />
  ))
  return el.ordered ? <ol>{items}</ol> : <ul>{items}</ul>
}
