import PrsmLogo from './PrsmLogo'

interface HeaderProps {
  title: string
  subtitle?: string
  credit?: string
  current: number
  total: number
}

export default function Header({ title, subtitle, credit, current, total }: HeaderProps) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="header-bar">
      <div className="header-top">
        <div className="header-logo">
          <PrsmLogo />
        </div>
        <div className="header-text">
          <h1>{title}</h1>
          {(subtitle || credit) && (
            <div className="subtitle">
              {subtitle}
              {credit && <span className="credit">{credit}</span>}
            </div>
          )}
        </div>
      </div>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-meta">
        <span>
          Section {current} of {total}
        </span>
        <span>{pct}%</span>
      </div>
    </div>
  )
}
