import type { ElementData, ElementType } from '../cms/types'
import { cryptoId } from '../cms/firestore'

export type ElementCategory = 'text' | 'interactive' | 'layout' | 'special'

export interface ElementMeta {
  label: string
  /** Plain-language, one-line explanation shown in the add-block picker. */
  description: string
  category: ElementCategory
}

/** Display metadata for every block type, in author-friendly language. */
export const ELEMENT_META: Record<ElementType, ElementMeta> = {
  hero: { label: 'Welcome banner', description: 'A large heading with intro text to open a screen.', category: 'text' },
  heading: { label: 'Section title', description: 'A title for a section, with an optional icon.', category: 'text' },
  text: { label: 'Paragraph', description: 'A block of body text.', category: 'text' },
  callout: { label: 'Callout box', description: 'A colored box that draws attention to a note.', category: 'text' },
  divider: { label: 'Divider', description: 'A thin line to separate sections.', category: 'text' },

  quiz: { label: 'Quiz question', description: 'A multiple-choice question with feedback.', category: 'interactive' },
  video: { label: 'Video', description: 'An embedded YouTube video.', category: 'interactive' },
  survey: { label: 'Survey button', description: 'A button that links out to a survey.', category: 'interactive' },

  list: { label: 'List', description: 'A bulleted or numbered list.', category: 'layout' },
  steps: { label: 'Numbered steps', description: 'Steps to follow in order, with badges.', category: 'layout' },
  timeline: { label: 'Timeline', description: 'Events down a vertical timeline.', category: 'layout' },
  symptomGrid: { label: 'Icon card grid', description: 'A grid of cards, each with an icon.', category: 'layout' },
  comparisonTable: { label: 'Comparison table', description: 'A two-column table to compare things.', category: 'layout' },
  mildCompare: { label: 'Two-column compare', description: 'Two lists side by side.', category: 'layout' },
  tagRow: { label: 'Tag row', description: 'A row of small labeled tags.', category: 'layout' },
  takeaways: { label: 'Key takeaways', description: 'A checklist of the main points.', category: 'layout' },

  scenario: { label: 'Scenario', description: 'A highlighted real-life situation.', category: 'special' },
  motto: { label: 'Motto banner', description: 'A banner with short, memorable phrases.', category: 'special' },
  nurseHighlight: { label: 'Highlight box', description: 'A bold highlighted note with an icon.', category: 'special' },
  completionCard: { label: 'Completion card', description: 'The “you finished” card with badges.', category: 'special' },
  image: { label: 'Image', description: 'A picture from a link.', category: 'special' },
}

/** Human labels for the block list rows. */
export const ELEMENT_LABELS: Record<ElementType, string> = Object.fromEntries(
  (Object.keys(ELEMENT_META) as ElementType[]).map((t) => [t, ELEMENT_META[t].label]),
) as Record<ElementType, string>

export const ELEMENT_TYPES = Object.keys(ELEMENT_META) as ElementType[]

/** Categories in display order for the add-block picker. */
export const CATEGORIES: { key: ElementCategory; label: string }[] = [
  { key: 'text', label: 'Text & headings' },
  { key: 'interactive', label: 'Interactive' },
  { key: 'layout', label: 'Layout & lists' },
  { key: 'special', label: 'Special blocks' },
]

/** Create a new element of the given type with sensible empty defaults. */
export function newElement(type: ElementType): ElementData {
  const id = cryptoId()
  switch (type) {
    case 'hero':
      return { id, type, title: 'Heading', bodyHtml: 'Body text' }
    case 'heading':
      return { id, type, text: 'Section title' }
    case 'text':
      return { id, type, bodyHtml: 'Body text' }
    case 'callout':
      return { id, type, color: 'teal', title: 'Title', bodyHtml: 'Body text' }
    case 'quiz':
      return {
        id,
        type,
        question: 'Question?',
        options: [
          { text: 'Option A', correct: true },
          { text: 'Option B', correct: false },
        ],
        feedback: { correct: '<strong>Correct!</strong>', wrong: '<strong>Not quite.</strong>' },
        gating: true,
      }
    case 'video':
      return { id, type, provider: 'youtube', videoId: '', label: 'Video', requireWatch: false }
    case 'image':
      return { id, type, src: '', alt: '' }
    case 'list':
      return { id, type, ordered: false, itemsHtml: ['Item one'] }
    case 'divider':
      return { id, type }
    case 'steps':
      return { id, type, items: [{ num: '1', title: 'Step', bodyHtml: 'Body' }] }
    case 'timeline':
      return { id, type, items: [{ label: '0m', color: '#f59e0b', title: 'Step', body: 'Body' }] }
    case 'symptomGrid':
      return { id, type, cards: [{ title: 'Symptom', subtext: 'Description' }] }
    case 'comparisonTable':
      return { id, type, headers: ['Left', 'Right'], rows: [{ left: '', right: '' }] }
    case 'mildCompare':
      return { id, type, left: { title: 'Left', itemsHtml: [''] }, right: { title: 'Right', itemsHtml: [''] } }
    case 'tagRow':
      return { id, type, tags: [{ text: 'Tag' }] }
    case 'scenario':
      return { id, type, label: 'Scenario', bodyHtml: 'Body' }
    case 'motto':
      return { id, type, eyebrow: 'Remember', pills: [{ text: 'A' }, { text: 'B' }], caption: 'Caption' }
    case 'nurseHighlight':
      return { id, type, title: 'Title', bodyHtml: 'Body' }
    case 'completionCard':
      return { id, type, title: 'Complete', bodyHtml: 'Body', badges: [{ text: 'Badge' }] }
    case 'survey':
      return { id, type, promptHtml: 'Take the survey', buttonText: 'Take the Survey →', url: '' }
    case 'takeaways':
      return { id, type, itemsHtml: ['Key takeaway'] }
  }
}
