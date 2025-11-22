import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DocsIndex from './pages/DocsIndex'
import DocReader from './pages/DocReader'
import Lab from './pages/Lab'
import Story from './pages/Story'
import NotFound from './pages/NotFound'

function Shell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-ink-100 text-ink-900">
      <header className="border-b border-ink-100/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-semibold text-ink-900">
            Project Underwhere
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-ink-700">
            <Link to="/" className="transition hover:text-ink-900">
              Home
            </Link>
            <Link to="/docs" className="transition hover:text-ink-900">
              Docs
            </Link>
            <Link to="/lab" className="transition hover:text-ink-900">
              Lab
            </Link>
            <Link to="/story" className="transition hover:text-ink-900">
              Text RPG
            </Link>
            <a href="https://vitejs.dev/guide/" className="transition hover:text-ink-900">
              Vite guide
            </a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-ink-100/80 bg-white/70 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-ink-700">
          <p>MLAOS-Prime playground • React + Vite + Tailwind</p>
          <div className="flex items-center gap-3">
            <a href="/docs/roadmap.md" className="transition hover:text-ink-900">
              Raw roadmap
            </a>
            <a href="https://tailwindcss.com" className="transition hover:text-ink-900">
              Tailwind
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<DocsIndex />} />
        <Route path="docs/:slug" element={<DocReader />} />
        <Route path="lab" element={<Lab />} />
        <Route path="story" element={<Story />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
