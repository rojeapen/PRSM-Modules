import { Icon } from '../components/Icon'
import type { HeadingElement } from '../cms/types'

export default function Heading({ el }: { el: HeadingElement }) {
  return (
    <div className="slide-title">
      <Icon iconKey={el.iconKey} />
      {el.text}
    </div>
  )
}
