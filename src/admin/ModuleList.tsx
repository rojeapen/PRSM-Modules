import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { ModuleData } from '../cms/types'
import { createModule, deleteModule, listModules, saveModule } from '../cms/firestore'
import { signOut } from '../cms/auth'
import { SEED_LIST } from '../cms/seed'

export default function ModuleList() {
  const [modules, setModules] = useState<ModuleData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function refresh() {
    setLoading(true)
    setError('')
    try {
      setModules(await listModules())
    } catch (e) {
      setError('Could not load modules: ' + (e instanceof Error ? e.message : 'unknown error'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let cancelled = false
    listModules()
      .then((m) => !cancelled && setModules(m))
      .catch((e) => !cancelled && setError('Could not load modules: ' + (e instanceof Error ? e.message : 'unknown error')))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [])

  async function onCreate() {
    const slug = window.prompt('New module slug (lowercase, used in the URL):')?.trim()
    if (!slug) return
    const title = window.prompt('Module title:')?.trim() || slug
    try {
      await createModule(slug, title)
      await refresh()
    } catch (e) {
      setError('Create failed: ' + (e instanceof Error ? e.message : 'unknown error'))
    }
  }

  async function onImportSeeds() {
    try {
      for (const seed of SEED_LIST) await saveModule(seed)
      await refresh()
    } catch (e) {
      setError('Import failed: ' + (e instanceof Error ? e.message : 'unknown error'))
    }
  }

  async function onDelete(slug: string) {
    if (!window.confirm(`Delete module “${slug}”? This cannot be undone.`)) return
    try {
      await deleteModule(slug)
      await refresh()
    } catch (e) {
      setError('Delete failed: ' + (e instanceof Error ? e.message : 'unknown error'))
    }
  }

  return (
    <div className="cms-page">
      <div className="cms-bar">
        <h1>Modules</h1>
        <button type="button" className="cms-btn" onClick={onImportSeeds}>
          Import sample module
        </button>
        <button type="button" className="cms-btn primary" onClick={onCreate}>
          + New module
        </button>
        <button type="button" className="cms-btn" onClick={() => signOut()}>
          Sign out
        </button>
      </div>

      {error && <p className="cms-error" style={{ marginBottom: 12 }}>{error}</p>}
      {loading ? (
        <p>Loading…</p>
      ) : modules.length === 0 ? (
        <div className="cms-card">
          <p style={{ marginBottom: 10 }}>No modules yet.</p>
          <button type="button" className="cms-btn" onClick={onImportSeeds}>
            Import the sample Anaphylaxis module to get started
          </button>
        </div>
      ) : (
        <div>
          {modules.map((m) => (
            <div className="cms-list-row" key={m.slug}>
              <span className="title">{m.title}</span>
              <span style={{ fontSize: '.78rem', color: 'var(--text-muted)' }}>/{m.slug}</span>
              <span className={'cms-pill ' + m.status}>{m.status}</span>
              <a className="cms-btn" href={`#/m/${m.slug}`} target="_blank" rel="noopener noreferrer">
                View
              </a>
              <Link className="cms-btn primary" to={`/admin/m/${m.slug}`}>
                Edit
              </Link>
              <button type="button" className="cms-btn danger" onClick={() => onDelete(m.slug)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
