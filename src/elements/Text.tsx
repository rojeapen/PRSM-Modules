import Html from './Html'
import type { TextElement } from '../cms/types'

export default function Text({ el }: { el: TextElement }) {
  return <Html tag="p" html={el.bodyHtml} />
}
