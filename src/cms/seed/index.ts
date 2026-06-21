import type { ModuleData } from '../types'
import { anaphylaxisModule } from './anaphylaxis'

/**
 * Modules bundled with the app. Used to seed Firestore from the admin, and as a
 * graceful fallback in the player when the database has no matching document
 * (e.g. before Firebase is configured/populated). A real Firestore document
 * always takes precedence.
 */
export const SEEDS: Record<string, ModuleData> = {
  [anaphylaxisModule.slug]: anaphylaxisModule,
}

export const SEED_LIST: ModuleData[] = Object.values(SEEDS)
