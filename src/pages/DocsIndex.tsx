import { Link } from 'react-router-dom'
import { docs } from '../data/docs'

function DocsIndex() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Docs</p>
        <h1 className="text-3xl font-bold text-ink-900">Mythotech documentation hub</h1>
        <p className="text-ink-700">
          Browse the design docs directly inside the app. Each document mirrors the files in <code>public/docs</code>, making it easy to
          reference the mythotech roadmap while prototyping UI and logic.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            to={`/docs/${doc.slug}`}
            className="group rounded-2xl border border-ink-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-ink-900">{doc.title}</p>
                <p className="mt-1 text-sm text-ink-700">{doc.summary}</p>
              </div>
              <span className="text-sm font-semibold text-ink-600 transition group-hover:text-ink-900">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DocsIndex
