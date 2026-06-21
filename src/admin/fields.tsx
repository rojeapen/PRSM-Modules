import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ICON_KEYS, ICONS } from '../icons'
import type { CalloutColor } from '../cms/types'
import { ArrowDown, ArrowUp, Chevron, Plus, Trash } from './ui-icons'

export function Field({ label, help, children }: { label: string; help?: string; children: ReactNode }) {
  return (
    <div className="cms-field">
      {label && <label className="cms-label">{label}</label>}
      {children}
      {help && <p className="cms-help">{help}</p>}
    </div>
  )
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
  help,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  help?: string
}) {
  return (
    <Field label={label} help={help}>
      <input className="cms-input" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Field>
  )
}

export function NumberInput({
  label,
  value,
  onChange,
  help,
  placeholder,
}: {
  label: string
  value: number | undefined
  onChange: (v: number | undefined) => void
  help?: string
  placeholder?: string
}) {
  return (
    <Field label={label} help={help}>
      <input
        className="cms-input"
        type="number"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value === '' ? undefined : Number(e.target.value))}
      />
    </Field>
  )
}

/** A real on/off switch with plain-language label and optional helper text. */
export function Toggle({
  label,
  checked,
  onChange,
  help,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
  help?: string
}) {
  return (
    <label className="cms-toggle">
      <input type="checkbox" className="cms-sr" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="cms-toggle-track" aria-hidden="true">
        <span className="cms-toggle-thumb" />
      </span>
      <span className="cms-toggle-text">
        <span className="cms-toggle-name">{label}</span>
        {help && <span className="cms-help">{help}</span>}
      </span>
    </label>
  )
}

/** Kept for compatibility; prefer Toggle for new fields. */
export function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return <Toggle label={label} checked={checked} onChange={onChange} />
}

export function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: readonly T[]
  onChange: (v: T) => void
}) {
  return (
    <Field label={label}>
      <select className="cms-select" value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Field>
  )
}

const CALLOUT_SWATCHES: { value: CalloutColor; hex: string; name: string }[] = [
  { value: 'teal', hex: '#0d9488', name: 'Teal (guidance)' },
  { value: 'orange', hex: '#f59e0b', name: 'Amber (caution)' },
  { value: 'red', hex: '#ef4444', name: 'Red (danger)' },
  { value: 'green', hex: '#16a34a', name: 'Green (success)' },
  { value: 'blue', hex: '#2563eb', name: 'Blue (info)' },
  { value: 'purple', hex: '#7c3aed', name: 'Purple' },
]

/** Picks a named callout color by its meaning, not a raw value. */
export function CalloutColorPicker({
  label,
  value,
  onChange,
}: {
  label: string
  value: CalloutColor
  onChange: (v: CalloutColor) => void
}) {
  return (
    <Field label={label}>
      <div className="cms-swatches">
        {CALLOUT_SWATCHES.map((s) => (
          <button
            key={s.value}
            type="button"
            className={'cms-swatch' + (value === s.value ? ' sel' : '')}
            style={{ ['--swatch' as string]: s.hex }}
            onClick={() => onChange(s.value)}
            title={s.name}
            aria-label={s.name}
            aria-pressed={value === s.value}
          />
        ))}
      </div>
    </Field>
  )
}

const DOT_SWATCHES = ['#f59e0b', '#ef4444', '#16a34a', '#0d9488', '#2563eb', '#7c3aed']

/** Picks a hex color from the brand set, with a custom fallback. */
export function ColorSwatch({
  label,
  value,
  onChange,
  help,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  help?: string
}) {
  return (
    <Field label={label} help={help}>
      <div className="cms-swatches">
        {DOT_SWATCHES.map((hex) => (
          <button
            key={hex}
            type="button"
            className={'cms-swatch' + (value.toLowerCase() === hex ? ' sel' : '')}
            style={{ ['--swatch' as string]: hex }}
            onClick={() => onChange(hex)}
            title={hex}
            aria-label={hex}
            aria-pressed={value.toLowerCase() === hex}
          />
        ))}
        <label className="cms-swatch cms-swatch-custom" title="Custom color">
          <input type="color" value={value || '#0d9488'} onChange={(e) => onChange(e.target.value)} />
        </label>
      </div>
    </Field>
  )
}

/** Collapsible section for rarely-needed, more technical fields. */
export function Disclosure({
  label,
  children,
  defaultOpen = false,
}: {
  label: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={'cms-disclosure' + (open ? ' open' : '')}>
      <button type="button" className="cms-disclosure-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <Chevron open={open} size={16} />
        {label}
      </button>
      {open && <div className="cms-disclosure-body">{children}</div>}
    </div>
  )
}

/**
 * One entry in a repeatable list (quiz option, step, row…). Flattened: a labeled
 * header strip with move/remove controls over the fields, never a card nested in
 * a card.
 */
export function RepeatableItem({
  title,
  index,
  count,
  onMove,
  onRemove,
  children,
}: {
  title: string
  index: number
  count: number
  onMove: (dir: -1 | 1) => void
  onRemove: () => void
  children: ReactNode
}) {
  return (
    <div className="cms-item">
      <div className="cms-item-head">
        <span className="cms-item-title">{title}</span>
        <div className="cms-item-actions">
          <button type="button" className="cms-iconbtn" onClick={() => onMove(-1)} disabled={index === 0} aria-label="Move up">
            <ArrowUp />
          </button>
          <button
            type="button"
            className="cms-iconbtn"
            onClick={() => onMove(1)}
            disabled={index === count - 1}
            aria-label="Move down"
          >
            <ArrowDown />
          </button>
          <button type="button" className="cms-iconbtn danger" onClick={onRemove} aria-label="Remove">
            <Trash />
          </button>
        </div>
      </div>
      <div className="cms-item-body">{children}</div>
    </div>
  )
}

/** Button to append a new item to a repeatable list. */
export function AddItemButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className="cms-add-item" onClick={onClick}>
      <Plus size={16} /> {label}
    </button>
  )
}

/** Textarea with a tiny toolbar that wraps the selection in inline HTML tags. */
export function RichTextField({
  label,
  value,
  onChange,
  help,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  help?: string
}) {
  const ref = useRef<HTMLTextAreaElement>(null)

  function wrap(before: string, after: string) {
    const ta = ref.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const selected = value.slice(start, end)
    const next = value.slice(0, start) + before + selected + after + value.slice(end)
    onChange(next)
    requestAnimationFrame(() => {
      ta.focus()
      ta.selectionStart = start + before.length
      ta.selectionEnd = end + before.length
    })
  }

  return (
    <Field label={label} help={help}>
      <div className="cms-toolbar">
        <button type="button" onClick={() => wrap('<strong>', '</strong>')} title="Bold">
          <strong>B</strong>
        </button>
        <button type="button" onClick={() => wrap('<em>', '</em>')} title="Italic">
          <em>I</em>
        </button>
        <button type="button" onClick={() => wrap('<a href="https://" target="_blank" rel="noopener">', '</a>')} title="Add link">
          Link
        </button>
        <button type="button" onClick={() => wrap('<br>', '')} title="Line break">
          ↵
        </button>
      </div>
      <textarea className="cms-textarea" ref={ref} value={value} onChange={(e) => onChange(e.target.value)} />
    </Field>
  )
}

export function IconPicker({
  label,
  value,
  onChange,
}: {
  label: string
  value: string | undefined
  onChange: (v: string | undefined) => void
}) {
  return (
    <Field label={label}>
      <div className="cms-icon-grid">
        <button
          type="button"
          className={'opt' + (!value ? ' sel' : '')}
          onClick={() => onChange(undefined)}
          title="No icon"
          aria-pressed={!value}
        >
          <span className="cms-icon-none">None</span>
        </button>
        {ICON_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            className={'opt' + (value === key ? ' sel' : '')}
            onClick={() => onChange(key)}
            title={key}
            aria-pressed={value === key}
          >
            {ICONS[key]}
          </button>
        ))}
      </div>
    </Field>
  )
}

/** Editor for an ordered list of HTML strings (list items, takeaways, etc.). */
export function StringListEditor({
  label,
  itemLabel = 'Item',
  addLabel = '+ Add item',
  items,
  onChange,
  rich = true,
}: {
  label: string
  itemLabel?: string
  addLabel?: string
  items: string[]
  onChange: (items: string[]) => void
  rich?: boolean
}) {
  function update(i: number, v: string) {
    onChange(items.map((it, idx) => (idx === i ? v : it)))
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i))
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir
    if (j < 0 || j >= items.length) return
    const next = items.slice()
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }
  return (
    <Field label={label}>
      {items.map((item, i) => (
        <RepeatableItem
          key={i}
          title={`${itemLabel} ${i + 1}`}
          index={i}
          count={items.length}
          onMove={(dir) => move(i, dir)}
          onRemove={() => remove(i)}
        >
          {rich ? (
            <RichTextField label="" value={item} onChange={(v) => update(i, v)} />
          ) : (
            <input className="cms-input" value={item} onChange={(e) => update(i, e.target.value)} />
          )}
        </RepeatableItem>
      ))}
      <AddItemButton label={addLabel.replace(/^\+\s*/, '')} onClick={() => onChange([...items, ''])} />
    </Field>
  )
}
