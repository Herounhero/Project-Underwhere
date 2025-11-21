import { useMemo, useState } from 'react'
import { ArrowLeft, Flame, Gauge, Map, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  balconyPrompts,
  luxverumProfiles,
  organs,
  temporalCycles,
} from '../data/labs'

const luxStates = [
  { threshold: 20, label: 'Dormant', desc: 'Luxverum is barely awake; rituals run in maintenance mode.' },
  { threshold: 45, label: 'Kindled', desc: 'Organs hum at baseline; Balcony prompts reveal gentle truths.' },
  { threshold: 70, label: 'Resonant', desc: 'Corridors shift subtly; temporal cycles accelerate and Choirs sharpen.' },
  { threshold: 100, label: 'Irradiant', desc: 'Luxverum overflows; paradox events trigger and architecture reconfigures.' },
]

function LuxverumMeter() {
  const [value, setValue] = useState(48)
  const state = useMemo(() => {
    const match = luxStates.find((s) => value <= s.threshold)
    return match ?? luxStates[luxStates.length - 1]
  }, [value])

  return (
    <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Luxverum tracker</p>
          <h2 className="text-2xl font-bold text-ink-900">Adjust the emotional voltage</h2>
          <p className="text-ink-700">Slide to preview how the codex responds as Luxverum rises.</p>
        </div>
        <Gauge className="h-10 w-10 text-ink-500" />
      </div>

      <div className="mt-6 space-y-3">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-ink-600"
        />
        <div className="flex items-center justify-between text-sm text-ink-700">
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      {state && (
        <div className="mt-4 rounded-2xl border border-ink-100 bg-ink-900 text-white">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-ink-100/80">
            <Flame size={16} /> {state.label} ({value})
          </div>
          <p className="px-4 py-3 text-sm text-ink-100/90">{state.desc}</p>
        </div>
      )}
    </div>
  )
}

function Lab() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
      <div className="rounded-3xl bg-white/90 p-8 shadow-xl shadow-ink-500/10 ring-1 ring-ink-100">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
          <Sparkles size={18} /> MLAOS Lab
        </div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Interactive Balcony + Luxverum lab</h1>
            <p className="max-w-2xl text-ink-700">
              Experiment with Balcony prompts, organ behaviors, temporal cycles, and Luxverum charge levels. Use this as a launchpad
              before wiring deeper logic or visualizations.
            </p>
          </div>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
          >
            <ArrowLeft size={16} /> Docs hub
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Balcony prompts</p>
              <h2 className="text-2xl font-bold text-ink-900">Ask, attune, or challenge</h2>
            </div>
            <Sparkles className="h-9 w-9 text-ink-500" />
          </div>
          <div className="space-y-3">
            {balconyPrompts.map((prompt) => (
              <div key={prompt.title} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{prompt.mode}</p>
                    <h3 className="text-lg font-semibold text-ink-900">{prompt.title}</h3>
                  </div>
                  <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">{prompt.mode}</span>
                </div>
                <p className="mt-2 text-sm text-ink-700">{prompt.description}</p>
                <ul className="mt-3 space-y-1 text-sm text-ink-700">
                  {prompt.questions.map((question) => (
                    <li key={question} className="flex gap-2">
                      <span className="text-ink-400">•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Organs</p>
              <h2 className="text-2xl font-bold text-ink-900">Interior roles + impact</h2>
            </div>
            <Map className="h-9 w-9 text-ink-500" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {organs.map((organ) => (
              <div key={organ.name} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <h3 className="text-lg font-semibold text-ink-900">{organ.name}</h3>
                <p className="mt-1 text-sm text-ink-700">{organ.role}</p>
                <dl className="mt-3 space-y-2 text-sm text-ink-700">
                  <div>
                    <dt className="font-semibold text-ink-900">Inputs</dt>
                    <dd>{organ.inputs}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Outputs</dt>
                    <dd>{organ.outputs}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Resonance</dt>
                    <dd>{organ.resonance}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Luxverum impact</dt>
                    <dd>{organ.luxverumImpact}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Temporal harmonics</p>
              <h2 className="text-2xl font-bold text-ink-900">Cycles to wire next</h2>
            </div>
            <Sparkles className="h-9 w-9 text-ink-500" />
          </div>
          <div className="space-y-3">
            {temporalCycles.map((cycle) => (
              <div key={cycle.name} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink-900">{cycle.name}</h3>
                  <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-800">{cycle.cadence}</span>
                </div>
                <p className="mt-2 text-sm text-ink-700">Effects:</p>
                <ul className="mt-1 space-y-1 text-sm text-ink-700">
                  {cycle.effects.map((effect) => (
                    <li key={effect} className="flex gap-2">
                      <span className="text-ink-400">•</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-ink-700">Rituals:</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {cycle.rituals.map((ritual) => (
                    <span key={ritual} className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">
                      {ritual}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <LuxverumMeter />

          <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Profiles</p>
                <h2 className="text-2xl font-bold text-ink-900">ΘE / ΔM reference</h2>
              </div>
              <Gauge className="h-9 w-9 text-ink-500" />
            </div>
            <div className="mt-3 space-y-3">
              {luxverumProfiles.map((profile) => (
                <div key={profile.name} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-ink-900">{profile.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">ΘE {profile.thetaE} / ΔM {profile.deltaM}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-700">{profile.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lab
