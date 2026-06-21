import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../cms/auth'
import LoginPage from './LoginPage'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'

export default function AdminApp() {
  const { user, loading } = useAuth()

  if (loading) return <p className="cms-page">Loading…</p>
  if (!user) return <LoginPage />

  return (
    <Routes>
      <Route path="/" element={<ModuleList />} />
      <Route path="m/:moduleId" element={<ModuleEditor />} />
    </Routes>
  )
}
