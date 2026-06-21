import type { ScreenData } from '../cms/types'
import ElementRenderer from './ElementRenderer'

/**
 * Render one screen's elements in order. The wrapping `.slide.active` markup
 * (and its CSS) matches the original hand-built module, so element styles and
 * entrance animations apply unchanged.
 */
export default function ScreenRenderer({ screen }: { screen: ScreenData }) {
  return (
    <div className="slide active">
      {screen.elements.map((element) => (
        <ElementRenderer key={element.id} element={element} />
      ))}
    </div>
  )
}
