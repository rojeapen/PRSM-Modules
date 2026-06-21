import type { ReactNode } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

/** Props to spread onto a drag-handle button: ref + ARIA + listeners. */
export type DragHandle = {
  ref: (el: HTMLElement | null) => void
  [key: string]: unknown
}

function SortableItem({
  id,
  children,
}: {
  id: string
  children: (handle: DragHandle, dragging: boolean) => ReactNode
}) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id })
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 5 : undefined,
    position: 'relative',
  }
  const handle: DragHandle = { ref: setActivatorNodeRef, ...attributes, ...listeners }
  return (
    <div ref={setNodeRef} style={style} className={isDragging ? 'is-dragging' : undefined}>
      {children(handle, isDragging)}
    </div>
  )
}

/**
 * Vertical sortable list. Reordering works with pointer drag and the keyboard
 * (focus a handle, Space to lift, arrows to move, Space to drop), so it stays
 * operable for keyboard-only authors. `renderItem` receives drag-handle props
 * to spread onto whatever element should initiate the drag.
 */
export function SortableList<T extends { id: string }>({
  items,
  onReorder,
  renderItem,
  className,
}: {
  items: T[]
  onReorder: (next: T[]) => void
  renderItem: (item: T, index: number, handle: DragHandle, dragging: boolean) => ReactNode
  className?: string
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e
    if (!over || active.id === over.id) return
    const from = items.findIndex((i) => i.id === active.id)
    const to = items.findIndex((i) => i.id === over.id)
    if (from < 0 || to < 0) return
    onReorder(arrayMove(items, from, to))
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div className={className}>
          {items.map((item, i) => (
            <SortableItem key={item.id} id={item.id}>
              {(handle, dragging) => renderItem(item, i, handle, dragging)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
