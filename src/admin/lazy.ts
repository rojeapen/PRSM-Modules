import { lazy } from 'react'

/** Code-split entry for the admin app so the public player doesn't bundle it. */
export const AdminApp = lazy(() => import('./AdminApp'))
