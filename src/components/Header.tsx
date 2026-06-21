import PrsmLogo from './PrsmLogo'

interface HeaderProps {
  current: number
  total: number
}

export default function Header({ current, total }: HeaderProps) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="header-bar">
      <div className="header-top">
        <div className="header-logo">
          <PrsmLogo />
        </div>
        <div className="header-text">
          <h1>Anaphylaxis: Know It. Act Fast. Save a Life.</h1>
          <div className="subtitle">
            A health training module for school students.
            <span className="credit">Presented by PRSM Allergy Foundation</span>
          </div>
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
