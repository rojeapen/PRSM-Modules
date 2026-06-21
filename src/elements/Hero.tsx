import Html from './Html'
import type { HeroElement } from '../cms/types'

export default function Hero({ el }: { el: HeroElement }) {
  return (
    <div className="welcome-hero">
      <h2>{el.title}</h2>
      <Html tag="p" html={el.bodyHtml} />
    </div>
  )
}
