import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import type { ModuleData } from '../cms/types'
import { getModule } from '../cms/firestore'
import { SEEDS } from '../cms/seed'
import ModulePlayer from '../player/ModulePlayer'

type State =
  | { status: 'loading' }
  | { status: 'ready'; module: ModuleData }
  | { status: 'notfound' }

export default function PlayerRoute() {
  const { slug } = useParams<{ slug: string }>()
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    const fallback = (): State => {
      const seed = slug ? SEEDS[slug] : undefined
      return seed ? { status: 'ready', module: seed } : { status: 'notfound' }
    }
    getModule(slug ?? '')
      .then((module) => {
        if (cancelled) return
        setState(module ? { status: 'ready', module } : fallback())
      })
      .catch(() => {
        // Firestore unavailable/unconfigured, or a permission error (e.g. an
        // unpublished module read while signed out). Fall back to a bundled
        // seed if one exists; otherwise treat as not found.
        if (!cancelled) setState(fallback())
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  if (state.status === 'loading') {
    return <CenteredNote>Loading…</CenteredNote>
  }
  if (state.status === 'notfound') {
    return <CenteredNote>Module “{slug}” was not found.</CenteredNote>
  }
  return <ModulePlayer module={state.module} />
}

function CenteredNote({ children }: { children: ReactNode }) {
  return (
    <div className="module-shell" style={{ padding: 40, textAlign: 'center' }}>
      <p>{children}</p>
    </div>
  )
}
