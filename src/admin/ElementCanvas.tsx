import { useState } from 'react'
import type { ElementData, ElementType, ScreenData } from '../cms/types'
import ElementForm from './ElementForm'
import { CATEGORIES, ELEMENT_META, ELEMENT_TYPES, newElement } from './elementFactory'
import { SortableList } from './Sortable'
import { BlockIcon, Chevron, Grip, Plus, Trash, X } from './ui-icons'

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

/** A short, human preview of a block's content for the collapsed row. */
function summarize(el: ElementData): string {
  switch (el.type) {
    case 'hero':
      return stripHtml(el.title)
    case 'heading':
      return el.text
    case 'text':
      return stripHtml(el.bodyHtml)
    case 'callout':
      return el.title || stripHtml(el.bodyHtml)
    case 'quiz':
      return el.question
    case 'video':
      return el.label || el.videoId
    case 'image':
      return el.alt || el.src
    case 'list':
      return el.itemsHtml.map(stripHtml).filter(Boolean).join(', ')
    case 'divider':
      return ''
    case 'steps':
      return el.items.map((i) => i.title).filter(Boolean).join(' · ')
    case 'timeline':
      return el.items.map((i) => i.title).filter(Boolean).join(' · ')
    case 'symptomGrid':
      return el.cards.map((c) => c.title).filter(Boolean).join(', ')
    case 'comparisonTable':
      return el.headers.filter(Boolean).join(' vs ')
    case 'mildCompare':
      return [el.left.title, el.right.title].filter(Boolean).join(' vs ')
    case 'tagRow':
      return el.tags.map((t) => t.text).filter(Boolean).join(', ')
    case 'scenario':
      return el.label
    case 'motto':
      return el.eyebrow
    case 'nurseHighlight':
      return el.title
    case 'completionCard':
      return el.title
    case 'survey':
      return stripHtml(el.promptHtml)
    case 'takeaways':
      return el.itemsHtml.map(stripHtml).filter(Boolean).join(', ')
    default:
      return ''
  }
}

function AddBlockPicker({ onAdd, onClose }: { onAdd: (type: ElementType) => void; onClose: () => void }) {
  return (
    <div className="cms-picker" role="dialog" aria-label="Add a block">
      <div className="cms-picker-head">
        <span>Add a block</span>
        <button type="button" className="cms-iconbtn" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
      </div>
      <div className="cms-picker-body">
        {CATEGORIES.map((cat) => {
          const types = ELEMENT_TYPES.filter((t) => ELEMENT_META[t].category === cat.key)
          if (types.length === 0) return null
          return (
            <div className="cms-picker-group" key={cat.key}>
              <h4 className="cms-picker-cat">{cat.label}</h4>
              <div className="cms-picker-grid">
                {types.map((type) => (
                  <button key={type} type="button" className="cms-picker-opt" onClick={() => onAdd(type)}>
                    <span className="cms-picker-icon">
                      <BlockIcon type={type} size={20} />
                    </span>
                    <span className="cms-picker-text">
                      <span className="cms-picker-name">{ELEMENT_META[type].label}</span>
                      <span className="cms-picker-desc">{ELEMENT_META[type].description}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ElementCanvas({
  screen,
  onChange,
}: {
  screen: ScreenData
  onChange: (screen: ScreenData) => void
}) {
  const els = screen.elements
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set())
  const [picking, setPicking] = useState(false)

  const update = (next: ElementData[]) => onChange({ ...screen, elements: next })
  const toggle = (id: string) =>
    setExpanded((prev) => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })

  function add(type: ElementType) {
    const el = newElement(type)
    update([...els, el])
    setExpanded((prev) => new Set(prev).add(el.id))
    setPicking(false)
  }

  return (
    <div className="cms-blocks">
      {els.length === 0 ? (
        <div className="cms-empty">
          <div className="cms-empty-icon">
            <Plus size={22} />
          </div>
          <p className="cms-empty-title">This screen is empty</p>
          <p className="cms-empty-text">Add your first block to start building the screen learners will see.</p>
          <button type="button" className="cms-btn primary" onClick={() => setPicking(true)}>
            <Plus size={16} /> Add a block
          </button>
        </div>
      ) : (
        <SortableList
          items={els}
          onReorder={update}
          className="cms-block-list"
          renderItem={(el, i, handle, dragging) => {
            const open = expanded.has(el.id)
            const summary = summarize(el)
            return (
              <div className={'cms-block' + (open ? ' open' : '') + (dragging ? ' dragging' : '')}>
                <div className="cms-block-row">
                  <button type="button" className="cms-grip" aria-label="Drag to reorder" {...handle}>
                    <Grip size={18} />
                  </button>
                  <button
                    type="button"
                    className="cms-block-main"
                    onClick={() => toggle(el.id)}
                    aria-expanded={open}
                  >
                    <span className="cms-block-icon">
                      <BlockIcon type={el.type} size={18} />
                    </span>
                    <span className="cms-block-text">
                      <span className="cms-block-name">{ELEMENT_META[el.type].label}</span>
                      {summary && <span className="cms-block-summary">{summary}</span>}
                    </span>
                    <span className="cms-block-chevron">
                      <Chevron open={open} size={18} />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="cms-iconbtn danger cms-block-delete"
                    onClick={() => {
                      update(els.filter((_, k) => k !== i))
                      setExpanded((prev) => {
                        const n = new Set(prev)
                        n.delete(el.id)
                        return n
                      })
                    }}
                    aria-label={`Delete ${ELEMENT_META[el.type].label}`}
                  >
                    <Trash size={16} />
                  </button>
                </div>
                {open && (
                  <div className="cms-block-body">
                    <ElementForm element={el} onChange={(updated) => update(els.map((x, k) => (k === i ? updated : x)))} />
                  </div>
                )}
              </div>
            )
          }}
        />
      )}

      {els.length > 0 && !picking && (
        <button type="button" className="cms-add-block" onClick={() => setPicking(true)}>
          <Plus size={18} /> Add a block
        </button>
      )}
      {picking && <AddBlockPicker onAdd={add} onClose={() => setPicking(false)} />}
    </div>
  )
}
