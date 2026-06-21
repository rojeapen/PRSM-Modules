import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import type { ModuleData } from './types'

const MODULES = 'modules'

/** All modules, ordered for the admin list. */
export async function listModules(): Promise<ModuleData[]> {
  const snap = await getDocs(query(collection(db, MODULES), orderBy('order')))
  return snap.docs.map((d) => d.data() as ModuleData)
}

/** Fetch a single module by its slug (= document id), or null if missing. */
export async function getModule(slug: string): Promise<ModuleData | null> {
  const snap = await getDoc(doc(db, MODULES, slug))
  return snap.exists() ? (snap.data() as ModuleData) : null
}

/** Write the whole module document (used by the editor's Save). */
export async function saveModule(module: ModuleData): Promise<void> {
  await setDoc(doc(db, MODULES, module.slug), {
    ...module,
    updatedAt: Date.now(),
  })
}

/** Create an empty draft module with a single blank screen. */
export async function createModule(slug: string, title: string): Promise<ModuleData> {
  const now = Date.now()
  const existing = await listModules()
  const module: ModuleData = {
    slug,
    title,
    status: 'draft',
    order: existing.length,
    screens: [{ id: cryptoId(), title: 'Screen 1', elements: [] }],
    createdAt: now,
    updatedAt: now,
  }
  await setDoc(doc(db, MODULES, slug), module)
  return module
}

export async function deleteModule(slug: string): Promise<void> {
  await deleteDoc(doc(db, MODULES, slug))
}

export async function setStatus(
  slug: string,
  status: ModuleData['status'],
): Promise<void> {
  await updateDoc(doc(db, MODULES, slug), { status, updatedAt: Date.now() })
}

/** Short unique id for screens/elements created in the browser. */
export function cryptoId(): string {
  return crypto.randomUUID().slice(0, 8)
}
