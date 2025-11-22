import { ArrowUpRight, FileText, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { docs } from '../data/docs'

const highlights = [
  {
    title: 'React + Vite foundation',
    detail: 'Modern tooling with hot reloading, TypeScript typings, and a batteries-included dev server.',
  },
  {
    title: 'Tailwind CSS styling',
    detail: 'Utility-first styles with a custom ink palette to keep UI experiments consistent.',
  },
  {
    title: 'Mythotech docs scaffolded',
    detail: 'Roadmap, architecture map, Balcony interface, and temporal engine specs live in /docs for quick iteration.',
  },
]

function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-ink-700 shadow-glow ring-1 ring-ink-200 backdrop-blur">
          <Sparkles size={16} className="text-ink-500" />
          MLAOS-Prime • Project Underwhere
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">
          Build the living codex: architecture, time, and Luxverum calculus in one canvas.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
          Start from the Balcony, shape the organs, and wire temporal harmonics. The starter React + Tailwind stack is ready to
          host prototypes, UI explorations, and docs as they evolve.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/lab"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ink-500/20 transition hover:-translate-y-0.5 hover:bg-ink-700"
          >
            Open the lab
            <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/story"
            className="group inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Text RPG slice
            <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="https://tailwindcss.com/docs"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Tailwind docs
          </a>
        </div>
      </div>

      <div className="flex-1 space-y-6 rounded-3xl bg-white/80 p-6 shadow-xl shadow-ink-500/10 ring-1 ring-ink-100 backdrop-blur">
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-ink-100/60 bg-white/70 p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2 rounded-2xl border border-ink-100/60 bg-ink-900 text-white">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-ink-100/90">
            <FileText size={16} />
            Quick links to the mythotech docs
          </div>
          <div className="grid gap-3 px-4 pb-4 pt-2 sm:grid-cols-2">
            {docs.map((doc) => (
              <Link
                key={doc.title}
                to={`/docs/${doc.slug}`}
                className="group rounded-xl bg-white/5 p-3 text-left transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{doc.title}</p>
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-1 text-xs text-ink-100/80">{doc.summary}</p>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-ink-600">
          Ready to extend? Add routes, state management, and data models for Balcony prompts, temporal cycles, and Luxverum tracking.
        </p>
      </div>
    </div>
  )
}

export default Home
