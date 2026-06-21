import type { ScreenData } from '../cms/types'
import { cryptoId } from '../cms/firestore'
import { SortableList } from './Sortable'
import { Grip, Plus, Trash } from './ui-icons'

export default function ScreenRail({
  screens,
  activeId,
  onSelect,
  onChange,
}: {
  screens: ScreenData[]
  activeId: string
  onSelect: (id: string) => void
  onChange: (screens: ScreenData[]) => void
}) {
  function addScreen() {
    const screen: ScreenData = { id: cryptoId(), title: `Screen ${screens.length + 1}`, elements: [] }
    onChange([...screens, screen])
    onSelect(screen.id)
  }

  function removeScreen(i: number) {
    if (screens.length === 1) return
    const next = screens.filter((_, k) => k !== i)
    onChange(next)
    if (screens[i].id === activeId) onSelect(next[Math.max(0, i - 1)].id)
  }

  return (
    <nav className="cms-rail" aria-label="Screens">
      <div className="cms-rail-head">
        <span className="cms-rail-title">Screens</span>
        <span className="cms-rail-count">{screens.length}</span>
      </div>
      <SortableList
        items={screens}
        onReorder={onChange}
        className="cms-rail-list"
        renderItem={(screen, i, handle, dragging) => {
          const active = screen.id === activeId
          const count = screen.elements.length
          return (
            <div className={'cms-screen' + (active ? ' active' : '') + (dragging ? ' dragging' : '')}>
              <button type="button" className="cms-grip" aria-label="Drag to reorder" {...handle}>
                <Grip size={16} />
              </button>
              <button
                type="button"
                className="cms-screen-main"
                onClick={() => onSelect(screen.id)}
                aria-current={active ? 'true' : undefined}
              >
                <span className="cms-screen-num">{i + 1}</span>
                <span className="cms-screen-text">
                  <span className="cms-screen-name">{screen.title || 'Untitled screen'}</span>
                  <span className="cms-screen-meta">
                    {count} {count === 1 ? 'block' : 'blocks'}
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="cms-iconbtn danger cms-screen-del"
                onClick={() => removeScreen(i)}
                disabled={screens.length === 1}
                aria-label={`Delete ${screen.title || 'screen'}`}
              >
                <Trash size={15} />
              </button>
            </div>
          )
        }}
      />
      <button type="button" className="cms-add-screen" onClick={addScreen}>
        <Plus size={16} /> Add screen
      </button>
    </nav>
  )
}
