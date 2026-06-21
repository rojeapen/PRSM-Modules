import type { ElementData, QuizOption } from '../cms/types'
import {
  AddItemButton,
  CalloutColorPicker,
  ColorSwatch,
  Disclosure,
  Field,
  IconPicker,
  NumberInput,
  RepeatableItem,
  RichTextField,
  StringListEditor,
  TextInput,
  Toggle,
} from './fields'

/** Small helpers for immutable array edits used by the repeatable editors. */
function setAt<T>(items: T[], i: number, v: T): T[] {
  return items.map((x, k) => (k === i ? v : x))
}
function removeAt<T>(items: T[], i: number): T[] {
  return items.filter((_, k) => k !== i)
}
function moveAt<T>(items: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir
  if (j < 0 || j >= items.length) return items
  const n = items.slice()
  ;[n[i], n[j]] = [n[j], n[i]]
  return n
}

/** Pull the 11-char video id out of any YouTube URL, or pass through a bare id. */
function parseYouTubeId(input: string): string {
  const s = input.trim()
  const m = s.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/)
  return m ? m[1] : s
}

/** Edits a single element in place. Narrows on `element.type`. */
export default function ElementForm({
  element,
  onChange,
}: {
  element: ElementData
  onChange: (el: ElementData) => void
}) {
  switch (element.type) {
    case 'hero': {
      const el = element
      return (
        <>
          <TextInput label="Title" value={el.title} onChange={(title) => onChange({ ...el, title })} />
          <RichTextField label="Intro text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
        </>
      )
    }
    case 'heading': {
      const el = element
      return (
        <>
          <TextInput label="Title" value={el.text} onChange={(text) => onChange({ ...el, text })} />
          <IconPicker label="Icon (optional)" value={el.iconKey} onChange={(iconKey) => onChange({ ...el, iconKey })} />
        </>
      )
    }
    case 'text': {
      const el = element
      return <RichTextField label="Text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
    }
    case 'callout': {
      const el = element
      return (
        <>
          <CalloutColorPicker label="Color" value={el.color} onChange={(color) => onChange({ ...el, color })} />
          <TextInput label="Title (optional)" value={el.title ?? ''} onChange={(title) => onChange({ ...el, title })} />
          <RichTextField label="Text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
        </>
      )
    }
    case 'quiz': {
      const el = element
      const setOption = (i: number, patch: Partial<QuizOption>) =>
        onChange({ ...el, options: setAt(el.options, i, { ...el.options[i], ...patch }) })
      return (
        <>
          <TextInput label="Question" value={el.question} onChange={(question) => onChange({ ...el, question })} />
          <Field label="Answer choices" help="Select the circle next to the correct answer.">
            {el.options.map((opt, i) => (
              <RepeatableItem
                key={i}
                title={`Choice ${i + 1}`}
                index={i}
                count={el.options.length}
                onMove={(dir) => onChange({ ...el, options: moveAt(el.options, i, dir) })}
                onRemove={() => onChange({ ...el, options: removeAt(el.options, i) })}
              >
                <div className="cms-choice">
                  <label className="cms-correct" title="Mark as the correct answer">
                    <input
                      type="radio"
                      name={`correct-${el.id}`}
                      checked={opt.correct}
                      onChange={() => onChange({ ...el, options: el.options.map((o, k) => ({ ...o, correct: k === i })) })}
                    />
                    <span className="cms-correct-text">Correct</span>
                  </label>
                  <input
                    className="cms-input"
                    value={opt.text}
                    placeholder={`Choice ${i + 1}`}
                    onChange={(e) => setOption(i, { text: e.target.value })}
                  />
                </div>
              </RepeatableItem>
            ))}
            <AddItemButton label="Add choice" onClick={() => onChange({ ...el, options: [...el.options, { text: '', correct: false }] })} />
          </Field>
          <RichTextField
            label="Feedback when correct"
            value={el.feedback.correct}
            onChange={(correct) => onChange({ ...el, feedback: { ...el.feedback, correct } })}
          />
          <RichTextField
            label="Feedback when wrong"
            value={el.feedback.wrong}
            onChange={(wrong) => onChange({ ...el, feedback: { ...el.feedback, wrong } })}
          />
          <Toggle
            label="Learners must answer before continuing"
            checked={el.gating}
            onChange={(gating) => onChange({ ...el, gating })}
            help="The Next button stays locked until this question is answered."
          />
          <Disclosure label="Advanced">
            <TextInput
              label="Block label (optional)"
              value={el.blockTitle ?? ''}
              onChange={(blockTitle) => onChange({ ...el, blockTitle })}
              help="A small heading shown above the question, e.g. “Check yourself”."
            />
          </Disclosure>
        </>
      )
    }
    case 'video': {
      const el = element
      return (
        <>
          <TextInput
            label="YouTube link or video ID"
            value={el.videoId}
            placeholder="https://youtu.be/… or dQw4w9WgXcQ"
            onChange={(v) => onChange({ ...el, videoId: parseYouTubeId(v) })}
            help="Paste the full YouTube link; we’ll pull out the video for you."
          />
          <TextInput label="Caption" value={el.label} onChange={(label) => onChange({ ...el, label })} />
          <Toggle
            label="Learners must watch the whole video before continuing"
            checked={el.requireWatch}
            onChange={(requireWatch) => onChange({ ...el, requireWatch })}
          />
          <Disclosure label="Add an intro above the video">
            <TextInput label="Intro title" value={el.introTitle ?? ''} onChange={(introTitle) => onChange({ ...el, introTitle })} />
            <RichTextField label="Intro text" value={el.introText ?? ''} onChange={(introText) => onChange({ ...el, introText })} />
          </Disclosure>
        </>
      )
    }
    case 'image': {
      const el = element
      return (
        <>
          <TextInput
            label="Image link"
            value={el.src}
            placeholder="https://…"
            onChange={(src) => onChange({ ...el, src })}
            help="Paste a direct link to the image."
          />
          <TextInput
            label="Description"
            value={el.alt}
            onChange={(alt) => onChange({ ...el, alt })}
            help="Describe the image for people using screen readers."
          />
          <Disclosure label="Advanced">
            <NumberInput
              label="Maximum width"
              value={el.maxWidth}
              onChange={(maxWidth) => onChange({ ...el, maxWidth })}
              help="In pixels. Leave blank to fill the available width."
              placeholder="auto"
            />
          </Disclosure>
        </>
      )
    }
    case 'list': {
      const el = element
      return (
        <>
          <Toggle label="Numbered list" checked={el.ordered} onChange={(ordered) => onChange({ ...el, ordered })} />
          <StringListEditor label="Items" addLabel="Add item" items={el.itemsHtml} onChange={(itemsHtml) => onChange({ ...el, itemsHtml })} />
        </>
      )
    }
    case 'divider':
      return <p className="cms-note">A thin dividing line. Nothing to set here.</p>
    case 'steps': {
      const el = element
      return (
        <Field label="Steps">
          {el.items.map((item, i) => (
            <RepeatableItem
              key={i}
              title={`Step ${i + 1}`}
              index={i}
              count={el.items.length}
              onMove={(dir) => onChange({ ...el, items: moveAt(el.items, i, dir) })}
              onRemove={() => onChange({ ...el, items: removeAt(el.items, i) })}
            >
              <TextInput label="Title" value={item.title} onChange={(title) => onChange({ ...el, items: setAt(el.items, i, { ...item, title }) })} />
              <RichTextField label="Description" value={item.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, items: setAt(el.items, i, { ...item, bodyHtml }) })} />
              <Disclosure label="Badge">
                <TextInput
                  label="Badge text"
                  value={item.num}
                  onChange={(num) => onChange({ ...el, items: setAt(el.items, i, { ...item, num }) })}
                  help="Usually the step number. Can be a check ✓ or cross ✕."
                />
                <ColorSwatch
                  label="Badge color"
                  value={item.numColor ?? '#0d9488'}
                  onChange={(numColor) => onChange({ ...el, items: setAt(el.items, i, { ...item, numColor }) })}
                />
              </Disclosure>
            </RepeatableItem>
          ))}
          <AddItemButton
            label="Add step"
            onClick={() => onChange({ ...el, items: [...el.items, { num: String(el.items.length + 1), title: '', bodyHtml: '' }] })}
          />
        </Field>
      )
    }
    case 'timeline': {
      const el = element
      return (
        <Field label="Timeline events">
          {el.items.map((item, i) => (
            <RepeatableItem
              key={i}
              title={`Event ${i + 1}`}
              index={i}
              count={el.items.length}
              onMove={(dir) => onChange({ ...el, items: moveAt(el.items, i, dir) })}
              onRemove={() => onChange({ ...el, items: removeAt(el.items, i) })}
            >
              <TextInput
                label="Time label"
                value={item.label}
                placeholder="e.g. 0 min"
                onChange={(label) => onChange({ ...el, items: setAt(el.items, i, { ...item, label }) })}
              />
              <TextInput label="Title" value={item.title} onChange={(title) => onChange({ ...el, items: setAt(el.items, i, { ...item, title }) })} />
              <TextInput label="Description" value={item.body} onChange={(body) => onChange({ ...el, items: setAt(el.items, i, { ...item, body }) })} />
              <ColorSwatch
                label="Dot color"
                value={item.color}
                onChange={(color) => onChange({ ...el, items: setAt(el.items, i, { ...item, color }) })}
              />
            </RepeatableItem>
          ))}
          <AddItemButton
            label="Add event"
            onClick={() => onChange({ ...el, items: [...el.items, { label: '', color: '#f59e0b', title: '', body: '' }] })}
          />
        </Field>
      )
    }
    case 'symptomGrid': {
      const el = element
      return (
        <Field label="Cards">
          {el.cards.map((card, i) => (
            <RepeatableItem
              key={i}
              title={`Card ${i + 1}`}
              index={i}
              count={el.cards.length}
              onMove={(dir) => onChange({ ...el, cards: moveAt(el.cards, i, dir) })}
              onRemove={() => onChange({ ...el, cards: removeAt(el.cards, i) })}
            >
              <IconPicker label="Icon" value={card.iconKey} onChange={(iconKey) => onChange({ ...el, cards: setAt(el.cards, i, { ...card, iconKey }) })} />
              <TextInput label="Title" value={card.title} onChange={(title) => onChange({ ...el, cards: setAt(el.cards, i, { ...card, title }) })} />
              <TextInput label="Subtext" value={card.subtext} onChange={(subtext) => onChange({ ...el, cards: setAt(el.cards, i, { ...card, subtext }) })} />
            </RepeatableItem>
          ))}
          <AddItemButton label="Add card" onClick={() => onChange({ ...el, cards: [...el.cards, { title: '', subtext: '' }] })} />
        </Field>
      )
    }
    case 'comparisonTable': {
      const el = element
      return (
        <>
          <div className="cms-pair">
            <TextInput label="Left column header" value={el.headers[0]} onChange={(v) => onChange({ ...el, headers: [v, el.headers[1]] })} />
            <TextInput label="Right column header" value={el.headers[1]} onChange={(v) => onChange({ ...el, headers: [el.headers[0], v] })} />
          </div>
          <Field label="Rows">
            {el.rows.map((row, i) => (
              <RepeatableItem
                key={i}
                title={`Row ${i + 1}`}
                index={i}
                count={el.rows.length}
                onMove={(dir) => onChange({ ...el, rows: moveAt(el.rows, i, dir) })}
                onRemove={() => onChange({ ...el, rows: removeAt(el.rows, i) })}
              >
                <RichTextField label="Left cell" value={row.left} onChange={(v) => onChange({ ...el, rows: setAt(el.rows, i, { ...row, left: v }) })} />
                <RichTextField label="Right cell" value={row.right} onChange={(v) => onChange({ ...el, rows: setAt(el.rows, i, { ...row, right: v }) })} />
              </RepeatableItem>
            ))}
            <AddItemButton label="Add row" onClick={() => onChange({ ...el, rows: [...el.rows, { left: '', right: '' }] })} />
          </Field>
        </>
      )
    }
    case 'mildCompare': {
      const el = element
      return (
        <>
          <TextInput label="Left column title" value={el.left.title} onChange={(title) => onChange({ ...el, left: { ...el.left, title } })} />
          <StringListEditor label="Left items" addLabel="Add item" items={el.left.itemsHtml} onChange={(itemsHtml) => onChange({ ...el, left: { ...el.left, itemsHtml } })} />
          <TextInput label="Right column title" value={el.right.title} onChange={(title) => onChange({ ...el, right: { ...el.right, title } })} />
          <StringListEditor label="Right items" addLabel="Add item" items={el.right.itemsHtml} onChange={(itemsHtml) => onChange({ ...el, right: { ...el.right, itemsHtml } })} />
        </>
      )
    }
    case 'tagRow': {
      const el = element
      return (
        <Field label="Tags">
          {el.tags.map((tag, i) => (
            <RepeatableItem
              key={i}
              title={`Tag ${i + 1}`}
              index={i}
              count={el.tags.length}
              onMove={(dir) => onChange({ ...el, tags: moveAt(el.tags, i, dir) })}
              onRemove={() => onChange({ ...el, tags: removeAt(el.tags, i) })}
            >
              <TextInput label="Text" value={tag.text} onChange={(text) => onChange({ ...el, tags: setAt(el.tags, i, { ...tag, text }) })} />
              <IconPicker label="Icon (optional)" value={tag.iconKey} onChange={(iconKey) => onChange({ ...el, tags: setAt(el.tags, i, { ...tag, iconKey }) })} />
            </RepeatableItem>
          ))}
          <AddItemButton label="Add tag" onClick={() => onChange({ ...el, tags: [...el.tags, { text: '' }] })} />
        </Field>
      )
    }
    case 'scenario': {
      const el = element
      return (
        <>
          <TextInput label="Label" value={el.label} onChange={(label) => onChange({ ...el, label })} />
          <RichTextField label="Text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
          <IconPicker label="Icon (optional)" value={el.iconKey} onChange={(iconKey) => onChange({ ...el, iconKey })} />
        </>
      )
    }
    case 'motto': {
      const el = element
      return (
        <>
          <TextInput label="Eyebrow" value={el.eyebrow} onChange={(eyebrow) => onChange({ ...el, eyebrow })} />
          <Field label="Phrases">
            {el.pills.map((pill, i) => (
              <RepeatableItem
                key={i}
                title={`Phrase ${i + 1}`}
                index={i}
                count={el.pills.length}
                onMove={(dir) => onChange({ ...el, pills: moveAt(el.pills, i, dir) })}
                onRemove={() => onChange({ ...el, pills: removeAt(el.pills, i) })}
              >
                <TextInput label="Text" value={pill.text} onChange={(text) => onChange({ ...el, pills: setAt(el.pills, i, { ...pill, text }) })} />
                <IconPicker label="Icon (optional)" value={pill.iconKey} onChange={(iconKey) => onChange({ ...el, pills: setAt(el.pills, i, { ...pill, iconKey }) })} />
              </RepeatableItem>
            ))}
            <AddItemButton label="Add phrase" onClick={() => onChange({ ...el, pills: [...el.pills, { text: '' }] })} />
          </Field>
          <TextInput label="Caption" value={el.caption} onChange={(caption) => onChange({ ...el, caption })} />
        </>
      )
    }
    case 'nurseHighlight': {
      const el = element
      return (
        <>
          <TextInput label="Title" value={el.title} onChange={(title) => onChange({ ...el, title })} />
          <RichTextField label="Text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
          <IconPicker label="Icon (optional)" value={el.iconKey} onChange={(iconKey) => onChange({ ...el, iconKey })} />
        </>
      )
    }
    case 'completionCard': {
      const el = element
      return (
        <>
          <TextInput label="Title" value={el.title} onChange={(title) => onChange({ ...el, title })} />
          <RichTextField label="Text" value={el.bodyHtml} onChange={(bodyHtml) => onChange({ ...el, bodyHtml })} />
          <Field label="Badges">
            {el.badges.map((badge, i) => (
              <RepeatableItem
                key={i}
                title={`Badge ${i + 1}`}
                index={i}
                count={el.badges.length}
                onMove={(dir) => onChange({ ...el, badges: moveAt(el.badges, i, dir) })}
                onRemove={() => onChange({ ...el, badges: removeAt(el.badges, i) })}
              >
                <TextInput label="Text" value={badge.text} onChange={(text) => onChange({ ...el, badges: setAt(el.badges, i, { ...badge, text }) })} />
                <IconPicker label="Icon (optional)" value={badge.iconKey} onChange={(iconKey) => onChange({ ...el, badges: setAt(el.badges, i, { ...badge, iconKey }) })} />
              </RepeatableItem>
            ))}
            <AddItemButton label="Add badge" onClick={() => onChange({ ...el, badges: [...el.badges, { text: '' }] })} />
          </Field>
        </>
      )
    }
    case 'survey': {
      const el = element
      return (
        <>
          <RichTextField label="Prompt" value={el.promptHtml} onChange={(promptHtml) => onChange({ ...el, promptHtml })} />
          <TextInput label="Button text" value={el.buttonText} onChange={(buttonText) => onChange({ ...el, buttonText })} />
          <TextInput label="Link" value={el.url} placeholder="https://…" onChange={(url) => onChange({ ...el, url })} />
          <IconPicker label="Icon (optional)" value={el.iconKey} onChange={(iconKey) => onChange({ ...el, iconKey })} />
        </>
      )
    }
    case 'takeaways': {
      const el = element
      return <StringListEditor label="Takeaways" addLabel="Add takeaway" items={el.itemsHtml} onChange={(itemsHtml) => onChange({ ...el, itemsHtml })} />
    }
    default:
      return null
  }
}
