import Html from './Html'
import { Icon } from '../components/Icon'
import type { SurveyElement } from '../cms/types'

export default function Survey({ el }: { el: SurveyElement }) {
  return (
    <div className="survey-block">
      <Icon iconKey={el.iconKey} />
      <Html tag="p" html={el.promptHtml} />
      <a className="survey-btn" href={el.url} target="_blank" rel="noopener noreferrer">
        {el.buttonText}
      </a>
    </div>
  )
}
