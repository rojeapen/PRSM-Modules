import { useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
} from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '../firebase'

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function signOut() {
  return fbSignOut(auth)
}

/** Subscribe to the current Firebase user. `loading` is true until first resolve. */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
  }, [])

  return { user, loading }
}
