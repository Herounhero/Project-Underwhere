import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/90 p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Navigation</p>
        <h1 className="text-3xl font-bold text-ink-900">Page not found</h1>
        <p className="text-ink-700">
          The requested path doesn&apos;t exist. Choose a starting point below to continue exploring the MLAOS playground.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:bg-ink-50"
          >
            Docs hub
          </Link>
          <a
            href="/docs/roadmap.md"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:bg-ink-50"
          >
            Raw roadmap
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
