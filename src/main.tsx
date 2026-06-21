import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { DEFAULT_MODULE_SLUG } from './firebase'
import PlayerRoute from './routes/PlayerRoute'
import { AdminApp } from './admin/lazy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_MODULE_SLUG}`} replace />} />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<div className="module-shell" style={{ padding: 40, textAlign: 'center' }}>Loading…</div>}>
              <AdminApp />
            </Suspense>
          }
        />
        <Route path="/:slug" element={<PlayerRoute />} />
        <Route path="*" element={<Navigate to={`/${DEFAULT_MODULE_SLUG}`} replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
