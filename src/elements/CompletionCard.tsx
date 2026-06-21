import Html from './Html'
import { Icon } from '../components/Icon'
import type { CompletionCardElement } from '../cms/types'

export default function CompletionCard({ el }: { el: CompletionCardElement }) {
  return (
    <div className="completion-card">
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="34" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <path d="M20 38l10 10 22-22" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="56" cy="18" r="5" fill="rgba(255,255,255,0.3)" />
        <circle cx="16" cy="20" r="3" fill="rgba(255,255,255,0.2)" />
        <circle cx="58" cy="52" r="4" fill="rgba(255,255,255,0.2)" />
      </svg>
      <h2>{el.title}</h2>
      <Html tag="p" html={el.bodyHtml} />
      <div className="badge-row">
        {el.badges.map((badge, i) => (
          <div className="badge" key={i}>
            <Icon iconKey={badge.iconKey} />
            {badge.text}
          </div>
        ))}
      </div>
    </div>
  )
}
