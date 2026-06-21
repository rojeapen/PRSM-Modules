// Data model for database-driven training modules.
// A module is an ordered list of Screens; each Screen is an ordered list of
// Elements (a discriminated union over the 20 supported element types).

export type CalloutColor = 'teal' | 'orange' | 'blue' | 'green' | 'purple' | 'red'

export interface QuizOption {
  text: string
  correct: boolean
}

interface BaseElement {
  /** Unique within a module — used for React keys and gating state. */
  id: string
}

export interface HeroElement extends BaseElement {
  type: 'hero'
  title: string
  bodyHtml: string
}

export interface HeadingElement extends BaseElement {
  type: 'heading'
  text: string
  iconKey?: string
}

export interface TextElement extends BaseElement {
  type: 'text'
  bodyHtml: string
}

export interface CalloutElement extends BaseElement {
  type: 'callout'
  color: CalloutColor
  title?: string
  bodyHtml: string
}

export interface QuizElement extends BaseElement {
  type: 'quiz'
  blockTitle?: string
  question: string
  options: QuizOption[]
  feedback: { correct: string; wrong: string }
  /** When true, "Next" stays locked until this question is answered. */
  gating: boolean
}

export interface VideoElement extends BaseElement {
  type: 'video'
  provider: 'youtube'
  videoId: string
  label: string
  /** Optional prompt shown above the embed. */
  introTitle?: string
  introText?: string
  /** When true, "Next" stays locked until the video is watched to the end. */
  requireWatch: boolean
}

export interface ImageElement extends BaseElement {
  type: 'image'
  /** Storage URL or external URL. */
  src: string
  alt: string
  maxWidth?: number
}

export interface ListElement extends BaseElement {
  type: 'list'
  ordered: boolean
  itemsHtml: string[]
}

export interface DividerElement extends BaseElement {
  type: 'divider'
}

export interface StepItem {
  /** Badge content: a number, "✓", "✕", etc. */
  num: string
  /** Optional badge background override (e.g. #16a34a). */
  numColor?: string
  title: string
  bodyHtml: string
}

export interface StepsElement extends BaseElement {
  type: 'steps'
  items: StepItem[]
}

export interface TimelineItem {
  label: string
  color: string
  title: string
  body: string
}

export interface TimelineElement extends BaseElement {
  type: 'timeline'
  items: TimelineItem[]
}

export interface SymptomCard {
  iconKey?: string
  title: string
  subtext: string
}

export interface SymptomGridElement extends BaseElement {
  type: 'symptomGrid'
  cards: SymptomCard[]
}

export interface ComparisonRow {
  /** Sanitized HTML for each cell. */
  left: string
  right: string
}

export interface ComparisonTableElement extends BaseElement {
  type: 'comparisonTable'
  headers: [string, string]
  // Rows are objects (not nested arrays) because Firestore disallows arrays of arrays.
  rows: ComparisonRow[]
}

export interface MildCompareColumn {
  title: string
  itemsHtml: string[]
}

export interface MildCompareElement extends BaseElement {
  type: 'mildCompare'
  left: MildCompareColumn
  right: MildCompareColumn
}

export interface Tag {
  iconKey?: string
  text: string
}

export interface TagRowElement extends BaseElement {
  type: 'tagRow'
  tags: Tag[]
}

export interface ScenarioElement extends BaseElement {
  type: 'scenario'
  label: string
  iconKey?: string
  bodyHtml: string
}

export interface MottoPill {
  iconKey?: string
  text: string
}

export interface MottoElement extends BaseElement {
  type: 'motto'
  eyebrow: string
  pills: MottoPill[]
  caption: string
}

export interface NurseHighlightElement extends BaseElement {
  type: 'nurseHighlight'
  iconKey?: string
  title: string
  bodyHtml: string
}

export interface Badge {
  iconKey?: string
  text: string
}

export interface CompletionCardElement extends BaseElement {
  type: 'completionCard'
  title: string
  bodyHtml: string
  badges: Badge[]
}

export interface SurveyElement extends BaseElement {
  type: 'survey'
  iconKey?: string
  promptHtml: string
  buttonText: string
  url: string
}

export interface TakeawaysElement extends BaseElement {
  type: 'takeaways'
  itemsHtml: string[]
}

export type ElementData =
  | HeroElement
  | HeadingElement
  | TextElement
  | CalloutElement
  | QuizElement
  | VideoElement
  | ImageElement
  | ListElement
  | DividerElement
  | StepsElement
  | TimelineElement
  | SymptomGridElement
  | ComparisonTableElement
  | MildCompareElement
  | TagRowElement
  | ScenarioElement
  | MottoElement
  | NurseHighlightElement
  | CompletionCardElement
  | SurveyElement
  | TakeawaysElement

export type ElementType = ElementData['type']

export interface ScreenData {
  id: string
  title?: string
  iconKey?: string
  elements: ElementData[]
}

export interface ModuleData {
  slug: string
  title: string
  subtitle?: string
  credit?: string
  status: 'draft' | 'published'
  /** Sort key for the admin module list. */
  order: number
  screens: ScreenData[]
  createdAt?: number
  updatedAt?: number
}
