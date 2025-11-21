import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { getDocBySlug } from '../data/docs'

function DocReader() {
  const { slug } = useParams()
  const doc = slug ? getDocBySlug(slug) : undefined
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!doc) return

    const loadDoc = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(doc.file)
        if (!response.ok) {
          throw new Error(`Unable to load ${doc.title}`)
        }
        const text = await response.text()
        setContent(text)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    loadDoc()
  }, [doc])

  if (!doc) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-ink-900">Document not found</h1>
          <p className="mt-2 text-ink-700">The requested document does not exist. Return to the docs hub to pick another file.</p>
          <Link
            to="/docs"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
          >
            <ArrowLeft size={16} /> Back to docs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Docs</p>
          <h1 className="text-3xl font-bold text-ink-900">{doc.title}</h1>
          <p className="text-ink-700">{doc.summary}</p>
        </div>
        <Link
          to="/docs"
          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:bg-ink-50"
        >
          <ArrowLeft size={16} /> Back to docs
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-ink-100 bg-white/95 p-6 shadow-sm">
        {isLoading ? (
          <div className="flex items-center gap-3 text-ink-700">
            <Loader2 size={20} className="animate-spin" />
            Loading {doc.title}...
          </div>
        ) : error ? (
          <div className="rounded-lg bg-rose-50 px-4 py-3 text-rose-800">{error}</div>
        ) : (
          <article className="doc-content max-w-none text-ink-900">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  )
}

export default DocReader
