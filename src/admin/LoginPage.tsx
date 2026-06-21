import { useState } from 'react'
import type { FormEvent } from 'react'
import { signIn } from '../cms/auth'
import { TextInput } from './fields'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      await signIn(email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign-in failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="cms-page cms-auth">
      <form className="cms-card" onSubmit={submit}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", color: 'var(--teal-800)', marginBottom: 12 }}>
          Module CMS — Sign in
        </h2>
        <TextInput label="Email" value={email} onChange={setEmail} />
        <div className="cms-field">
          <label>Password</label>
          <input className="cms-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="cms-error" style={{ marginTop: 10 }}>{error}</p>}
        <button type="submit" className="cms-btn primary" style={{ width: '100%', marginTop: 14 }} disabled={busy}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
