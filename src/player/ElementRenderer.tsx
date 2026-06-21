import type { ElementData } from '../cms/types'
import Hero from '../elements/Hero'
import Heading from '../elements/Heading'
import Text from '../elements/Text'
import Callout from '../elements/Callout'
import Quiz from '../elements/Quiz'
import Video from '../elements/Video'
import ImageEl from '../elements/ImageEl'
import ListEl from '../elements/ListEl'
import DividerEl from '../elements/DividerEl'
import Steps from '../elements/Steps'
import Timeline from '../elements/Timeline'
import SymptomGrid from '../elements/SymptomGrid'
import ComparisonTable from '../elements/ComparisonTable'
import MildCompare from '../elements/MildCompare'
import TagRow from '../elements/TagRow'
import Scenario from '../elements/Scenario'
import Motto from '../elements/Motto'
import NurseHighlight from '../elements/NurseHighlight'
import CompletionCard from '../elements/CompletionCard'
import Survey from '../elements/Survey'
import Takeaways from '../elements/Takeaways'

/** Map one element of any type to its presentational component. */
export default function ElementRenderer({ element }: { element: ElementData }) {
  switch (element.type) {
    case 'hero':
      return <Hero el={element} />
    case 'heading':
      return <Heading el={element} />
    case 'text':
      return <Text el={element} />
    case 'callout':
      return <Callout el={element} />
    case 'quiz':
      return <Quiz el={element} />
    case 'video':
      return <Video el={element} />
    case 'image':
      return <ImageEl el={element} />
    case 'list':
      return <ListEl el={element} />
    case 'divider':
      return <DividerEl />
    case 'steps':
      return <Steps el={element} />
    case 'timeline':
      return <Timeline el={element} />
    case 'symptomGrid':
      return <SymptomGrid el={element} />
    case 'comparisonTable':
      return <ComparisonTable el={element} />
    case 'mildCompare':
      return <MildCompare el={element} />
    case 'tagRow':
      return <TagRow el={element} />
    case 'scenario':
      return <Scenario el={element} />
    case 'motto':
      return <Motto el={element} />
    case 'nurseHighlight':
      return <NurseHighlight el={element} />
    case 'completionCard':
      return <CompletionCard el={element} />
    case 'survey':
      return <Survey el={element} />
    case 'takeaways':
      return <Takeaways el={element} />
    default:
      // Exhaustiveness check: a new ElementType without a case is a type error.
      return assertNever(element)
  }
}

function assertNever(value: never): null {
  console.warn('Unhandled element type', value)
  return null
}
