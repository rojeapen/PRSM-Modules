import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { ModuleData, ScreenData } from '../cms/types'
import { getModule, saveModule, setStatus } from '../cms/firestore'
import { SEEDS } from '../cms/seed'
import ScreenRail from './ScreenRail'
import ElementCanvas from './ElementCanvas'
import PreviewPane from './PreviewPane'
import { TextInput } from './fields'
import { Back, Check, Chevron, External, Eye, Gear, X } from './ui-icons'

export default function ModuleEditor() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const [draft, setDraft] = useState<ModuleData | null>(null)
  const [savedSnapshot, setSavedSnapshot] = useState('')
  const [activeId, setActiveId] = useState<string>('')
  const [showPreview, setShowPreview] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [status, setLocalStatus] = useState<'idle' | 'loading' | 'saving' | 'notfound'>('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    getModule(moduleId ?? '')
      .then((m) => (m ? m : moduleId ? SEEDS[moduleId] : undefined))
      .catch(() => (moduleId ? SEEDS[moduleId] : undefined))
      .then((m) => {
        if (cancelled) return
        if (m) {
          setDraft(m)
          setSavedSnapshot(JSON.stringify(m))
          setActiveId(m.screens[0]?.id ?? '')
          setLocalStatus('idle')
        } else {
          setLocalStatus('notfound')
        }
      })
    return () => {
      cancelled = true
    }
  }, [moduleId])

  useEffect(() => {
    if (!showPreview) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowPreview(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPreview])

  if (status === 'loading') return <p className="cms-page cms-loading">Loading…</p>
  if (status === 'notfound' || !draft)
    return (
      <div className="cms-page">
        <p className="cms-note">The module “{moduleId}” was not found.</p>
        <Link to="/admin" className="cms-btn">
          Back to modules
        </Link>
      </div>
    )

  const dirty = JSON.stringify(draft) !== savedSnapshot
  const activeIndex = Math.max(0, draft.screens.findIndex((s) => s.id === activeId))
  const activeScreen = draft.screens[activeIndex]

  const setScreen = (next: ScreenData) =>
    setDraft({ ...draft, screens: draft.screens.map((s) => (s.id === next.id ? next : s)) })

  async function save() {
    if (!draft) return
    setLocalStatus('saving')
    setError('')
    try {
      await saveModule(draft)
      setSavedSnapshot(JSON.stringify(draft))
    } catch (e) {
      setError('Could not save: ' + (e instanceof Error ? e.message : 'unknown error'))
    } finally {
      setLocalStatus('idle')
    }
  }

  async function togglePublish() {
    if (!draft) return
    const next: ModuleData['status'] = draft.status === 'published' ? 'draft' : 'published'
    const updated = { ...draft, status: next }
    setDraft(updated)
    setError('')
    try {
      await saveModule(updated)
      await setStatus(draft.slug, next)
      setSavedSnapshot(JSON.stringify(updated))
    } catch (e) {
      setError('Could not update: ' + (e instanceof Error ? e.message : 'unknown error'))
    }
  }

  const saveState =
    status === 'saving' ? (
      <span className="cms-savestate saving">Saving…</span>
    ) : dirty ? (
      <span className="cms-savestate dirty">Unsaved changes</span>
    ) : (
      <span className="cms-savestate saved">
        <Check size={14} /> All changes saved
      </span>
    )

  return (
    <div className="cms-editor-page">
      <header className="cms-topbar">
        <Link to="/admin" className="cms-btn ghost" aria-label="Back to modules">
          <Back size={18} /> Modules
        </Link>
        <div className="cms-topbar-title">
          <h1>{draft.title || 'Untitled module'}</h1>
          <span className={'cms-pill ' + draft.status}>{draft.status}</span>
        </div>
        {saveState}
        <div className="cms-topbar-actions">
          <button
            type="button"
            className={'cms-btn ghost' + (showSettings ? ' active' : '')}
            onClick={() => setShowSettings((s) => !s)}
          >
            <Gear size={16} /> Settings
          </button>
          <button
            type="button"
            className={'cms-btn ghost' + (showPreview ? ' active' : '')}
            onClick={() => setShowPreview((p) => !p)}
          >
            <Eye size={16} /> Preview
          </button>
          <a className="cms-btn ghost" href={`#/m/${draft.slug}`} target="_blank" rel="noopener noreferrer">
            <External size={16} /> View
          </a>
          <button type="button" className="cms-btn" onClick={togglePublish}>
            {draft.status === 'published' ? 'Unpublish' : 'Publish'}
          </button>
          <button type="button" className="cms-btn primary" onClick={save} disabled={status === 'saving' || !dirty}>
            {status === 'saving' ? 'Saving…' : 'Save'}
          </button>
        </div>
      </header>

      {error && <p className="cms-error">{error}</p>}

      {showSettings && (
        <section className="cms-settings" aria-label="Module settings">
          <div className="cms-settings-grid">
            <TextInput label="Module title" value={draft.title} onChange={(title) => setDraft({ ...draft, title })} />
            <TextInput
              label="Subtitle"
              value={draft.subtitle ?? ''}
              onChange={(subtitle) => setDraft({ ...draft, subtitle })}
            />
            <TextInput
              label="Credit"
              value={draft.credit ?? ''}
              onChange={(credit) => setDraft({ ...draft, credit })}
              help="Shown small in the module header, e.g. the author or source."
            />
          </div>
          <button type="button" className="cms-settings-close" onClick={() => setShowSettings(false)}>
            <Chevron open size={16} /> Hide settings
          </button>
        </section>
      )}

      <div className="cms-workspace">
        <ScreenRail
          screens={draft.screens}
          activeId={activeId}
          onSelect={setActiveId}
          onChange={(screens) => setDraft({ ...draft, screens })}
        />
        <main className="cms-editor-main">
          {activeScreen ? (
            <>
              <div className="cms-screen-head">
                <label className="cms-screen-head-label">Screen name</label>
                <input
                  className="cms-screen-input"
                  value={activeScreen.title ?? ''}
                  placeholder="Untitled screen"
                  onChange={(e) => setScreen({ ...activeScreen, title: e.target.value })}
                />
                <span className="cms-screen-head-meta">
                  Screen {activeIndex + 1} of {draft.screens.length}
                </span>
              </div>
              <ElementCanvas screen={activeScreen} onChange={setScreen} />
            </>
          ) : (
            <p className="cms-note">Select a screen to start editing.</p>
          )}
        </main>
      </div>

      {showPreview && (
        <>
          <div className="cms-sheet-scrim" onClick={() => setShowPreview(false)} />
          <aside className="cms-sheet" aria-label="Live preview">
            <div className="cms-sheet-head">
              <span>Preview</span>
              <span className="cms-sheet-sub">Screen {activeIndex + 1}</span>
              <button type="button" className="cms-iconbtn" onClick={() => setShowPreview(false)} aria-label="Close preview">
                <X size={16} />
              </button>
            </div>
            <div className="cms-sheet-body">
              {activeScreen && <PreviewPane module={draft} screen={activeScreen} index={activeIndex} />}
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
