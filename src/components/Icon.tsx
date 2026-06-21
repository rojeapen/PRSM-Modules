import { ICONS } from '../icons'

/** Render an icon by registry key, or nothing if the key is unknown/empty. */
export function Icon({ iconKey }: { iconKey?: string }) {
  if (!iconKey) return null
  return <>{ICONS[iconKey] ?? null}</>
}
