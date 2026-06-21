import type { ImageElement } from '../cms/types'

export default function ImageEl({ el }: { el: ImageElement }) {
  return (
    <img
      src={el.src}
      alt={el.alt}
      style={{ maxWidth: el.maxWidth ? `${el.maxWidth}px` : '100%', borderRadius: 'var(--radius)', display: 'block' }}
    />
  )
}
