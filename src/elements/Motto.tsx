import { Fragment } from 'react'
import { Icon } from '../components/Icon'
import type { MottoElement } from '../cms/types'

export default function Motto({ el }: { el: MottoElement }) {
  return (
    <div className="motto-banner">
      <div
        style={{
          fontSize: '.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          opacity: 0.8,
          marginBottom: 10,
        }}
      >
        {el.eyebrow}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {el.pills.map((pill, i) => (
          <Fragment key={i}>
            {i > 0 && <div style={{ fontSize: '1.4rem', opacity: 0.5, color: '#fff' }}>→</div>}
            <div className="motto-pill">
              <Icon iconKey={pill.iconKey} />
              {pill.text}
            </div>
          </Fragment>
        ))}
      </div>
      <div style={{ fontSize: '.82rem', opacity: 0.8, marginTop: 10, color: '#fff' }}>{el.caption}</div>
    </div>
  )
}
