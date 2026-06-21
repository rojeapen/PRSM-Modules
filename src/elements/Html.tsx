import { createElement } from 'react'
import { clean } from '../cms/sanitize'

interface HtmlProps {
  html: string
  /** Tag to render (default span). Use 'p' for paragraph styling inside slides. */
  tag?: string
  className?: string
}

/** Render sanitized author HTML via dangerouslySetInnerHTML. */
export default function Html({ html, tag = 'span', className }: HtmlProps) {
  return createElement(tag, { className, dangerouslySetInnerHTML: { __html: clean(html) } })
}
