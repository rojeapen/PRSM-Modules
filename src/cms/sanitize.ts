import DOMPurify from 'dompurify'

/**
 * Sanitize author-supplied HTML before rendering with dangerouslySetInnerHTML.
 * SVG is allowed so inline icons in rich content (and the raw-SVG escape hatch)
 * survive; `target`/`rel` on links are preserved for external links.
 */
export function clean(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true, svg: true, svgFilters: true },
    ADD_ATTR: ['target', 'rel'],
  })
}
