import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Cpu, Ghost, Map, Shield, Skull, Swords, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sceneMap } from '../data/story'
import {
  characterOptions,
  generateCharacter,
  generateLorePulse,
  generateNpc,
  getCombatArchetypes,
} from '../data/generators'

const loadouts = [
  {
    title: 'Chrome Reliquary',
    detail: 'Carries Choir sigils and Luxverum filters; stabilizes paradox bleed.',
  },
  {
    title: 'Glyph Injector',
    detail: 'Flash-program ritual scripts into the Engine mid-encounter.',
  },
  {
    title: 'Obsidian Mirror',
    detail: 'Lets you converse with echo-selves; risky but revealing.',
  },
]

const quickSignals = [
  'Balcony glass is thin; whispers leak.',
  'Autopoietic Heart pulsing amber.',
  'Temporal harmonics: daily cycle steady, generational echo rising.',
  'Luxverum at 62 — Kindled -> Resonant trajectory.',
]

function Story() {
  const [current, setCurrent] = useState('balcony')
  const [log, setLog] = useState<{ scene: string; choice?: string; effect?: string }[]>([])
  const [error, setError] = useState<string | null>(null)
  const [lore, setLore] = useState(() => generateLorePulse())
  const [npc, setNpc] = useState(() => generateNpc())
  const [build, setBuild] = useState(() => generateCharacter())

  const combatants = useMemo(() => getCombatArchetypes(), [])
  const [enemyId, setEnemyId] = useState(combatants[0]?.id ?? '')
  const activeEnemy = useMemo(
    () => combatants.find((entry) => entry.id === enemyId) ?? combatants[0],
    [combatants, enemyId],
  )
  const baseIntegrity = 16
  const baseFlux = 10
  const [integrity, setIntegrity] = useState(baseIntegrity)
  const [flux, setFlux] = useState(baseFlux)
  const [enemyHp, setEnemyHp] = useState(activeEnemy?.hp ?? 0)
  const [enemyFlux, setEnemyFlux] = useState(activeEnemy?.flux ?? 0)
  const [combatLog, setCombatLog] = useState<string[]>([])

  const scene = useMemo(() => sceneMap.get(current), [current])

  useEffect(() => {
    if (!scene) {
      setError(`Scene "${current}" is unavailable. Reset to begin again.`)
      return
    }
    setError(null)
  }, [current, scene])

  useEffect(() => {
    setEnemyHp(activeEnemy?.hp ?? 0)
    setEnemyFlux(activeEnemy?.flux ?? 0)
    setCombatLog((prev) => [`New foe: ${activeEnemy?.title ?? '???'}`, ...prev])
  }, [activeEnemy])

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

  const handleChoice = (label: string, effect: string, next?: string) => {
    setLog((prev) => [...prev, { scene: current, choice: label, effect }])
    if (next) {
      if (sceneMap.has(next)) {
        setCurrent(next)
      } else {
        setError(`Route to "${next}" is broken. Reset or step back to continue.`)
      }
    }
  }

  const resetCombat = () => {
    setIntegrity(baseIntegrity)
    setFlux(baseFlux)
    setEnemyHp(activeEnemy?.hp ?? 0)
    setEnemyFlux(activeEnemy?.flux ?? 0)
    setCombatLog([])
  }

  const performMove = (move: 'strike' | 'static' | 'guard' | 'detonate') => {
    if (!activeEnemy) return
    if (move === 'strike') {
      setEnemyHp((prev) => clamp(prev - 5, 0, activeEnemy.hp))
      setFlux((prev) => clamp(prev - 1, 0, baseFlux))
      setCombatLog((prev) => [`Glyph-strike carves ${activeEnemy.title}; flux -1`, ...prev])
    }
    if (move === 'static') {
      setEnemyFlux((prev) => clamp(prev - 4, 0, activeEnemy.flux))
      setFlux((prev) => clamp(prev - 2, 0, baseFlux))
      setCombatLog((prev) => [`Static burst rattles ${activeEnemy.title}; flux -2`, ...prev])
    }
    if (move === 'guard') {
      setIntegrity((prev) => clamp(prev + 3, 0, baseIntegrity))
      setFlux((prev) => clamp(prev + 1, 0, baseFlux))
      setCombatLog((prev) => [`Guard stance restores integrity +3, flux +1`, ...prev])
    }
    if (move === 'detonate') {
      setEnemyHp((prev) => clamp(prev - 3, 0, activeEnemy.hp))
      setEnemyFlux((prev) => clamp(prev - 2, 0, activeEnemy.flux))
      setIntegrity((prev) => clamp(prev - 2, 0, baseIntegrity))
      setFlux((prev) => clamp(prev - 3, 0, baseFlux))
      setCombatLog((prev) => [`Detonate a paradox mote; everyone takes collateral`, ...prev])
    }
  }

  const reset = () => {
    setCurrent('balcony')
    setLog([])
    setError(null)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-ink-900 px-6 py-6 text-white shadow-2xl shadow-ink-500/30 ring-1 ring-ink-700">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-100/80">Gothic-cyberpunk corridor</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Text RPG slice: the Balcony wakes the city ruins</h1>
          <p className="max-w-3xl text-ink-100/85">
            Walk a mythotech corridor in prose. Make a choice, watch the Luxverum-infused world react, and trace the gothic circuit between architecture, Choirs, and paradox engines.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-ink-100/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold">
              <Ghost size={16} /> Gothic ruin
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold">
              <Cpu size={16} /> Cybernetic liturgy
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold">
              <Skull size={16} /> Paradox risk
            </span>
          </div>
        </div>
        <Link
          to="/lab"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} /> Back to Lab
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {error && (
          <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-800">{error}</div>
        )}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Scene</p>
              <h2 className="text-2xl font-bold text-ink-900">{scene?.title ?? 'Unknown corridor'}</h2>
            </div>
            <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">{scene?.location}</span>
          </div>

          <div className="mt-3 rounded-2xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-5 text-white ring-1 ring-ink-800/70">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-ink-100/80">
              <span className="rounded-full bg-white/10 px-3 py-1">{scene?.mood}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Signal: {scene?.signal}</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink-100/90">{scene?.desc ?? 'The Balcony hums but refuses to render this corridor.'}</p>
          </div>

          <div className="space-y-3">
            {(scene?.choices.length ?? 0) > 0 ? (
              scene?.choices.map((choice) => (
                <button
                  key={choice.label}
                  className="group flex w-full flex-col gap-2 rounded-2xl border border-ink-100 bg-white/90 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white"
                  onClick={() => handleChoice(choice.label, choice.effect, choice.next)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-ink-900">{choice.label}</span>
                    <ArrowRight size={16} className="text-ink-500 transition group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-sm text-ink-700">{choice.effect}</p>
                </button>
              ))
            ) : (
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-sm font-semibold text-ink-900">No more decisions in this corridor.</p>
                <p className="text-sm text-ink-700">Restart to jump back to the Balcony or step back via the log.</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
              onClick={reset}
            >
              Reset to Balcony
            </button>
            {log.length > 0 && (
              <button
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-200 transition hover:-translate-y-0.5"
                onClick={() => {
                  const last = log[log.length - 1]
                  setLog((prev) => prev.slice(0, -1))
                  setCurrent(last.scene)
                }}
              >
                Step back one choice
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Loadout</p>
                <h3 className="text-xl font-bold text-ink-900">Carry these into the ruin</h3>
              </div>
              <Skull className="h-8 w-8 text-ink-500" />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {loadouts.map((item) => (
                <div key={item.title} className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-ink-900">{item.title}</p>
                  <p className="text-sm text-ink-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Signal brief</p>
                <h3 className="text-xl font-bold text-ink-900">Remember the city’s state</h3>
              </div>
              <Map className="h-8 w-8 text-ink-500" />
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              {quickSignals.map((signal) => (
                <li key={signal} className="flex gap-2">
                  <span className="text-ink-400">•</span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Path log</p>
                <h3 className="text-xl font-bold text-ink-900">Your last moves</h3>
              </div>
              <Ghost className="h-8 w-8 text-ink-500" />
            </div>
            {log.length === 0 ? (
              <p className="mt-3 text-sm text-ink-700">No moves yet. Choose a path from the Balcony.</p>
            ) : (
              <ol className="mt-3 space-y-2 text-sm text-ink-700">
                {log.map((entry, idx) => {
                  const sceneTitle = sceneMap.get(entry.scene)?.title ?? entry.scene
                  return (
                    <li key={`${entry.scene}-${idx}`} className="rounded-xl border border-ink-100 bg-white/80 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">{sceneTitle}</span>
                        {entry.choice && <span className="text-xs font-semibold text-ink-600">{entry.choice}</span>}
                      </div>
                      {entry.effect && <p className="text-xs text-ink-700">{entry.effect}</p>}
                    </li>
                  )
                })}
              </ol>
            )}
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white/90 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Want more corridors?</p>
            <p className="mt-1 text-sm text-ink-700">
              Use this slice as a seed. Add scenes to <code>src/data/story.ts</code>, wire new routes in the Navigation Spire, or connect Luxverum meters from the Lab for mechanical effects.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6 rounded-3xl bg-white/80 p-6 shadow-xl shadow-ink-500/10 ring-1 ring-ink-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Automation</p>
            <h2 className="text-3xl font-bold text-ink-900">Lore synth, NPC fabricator, combat + character creation</h2>
            <p className="max-w-3xl text-ink-700">
              Drop-in generators so you can extend the corridor quickly. Spin fresh lore, fabricate Balcony NPCs, sketch combat beats, and assemble playable builds without leaving this page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/lab"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
            >
              <ArrowLeft size={16} /> Return to Lab
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 ring-1 ring-ink-100 transition hover:-translate-y-0.5"
            >
              Docs hub
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Lore synth</p>
                <h3 className="text-2xl font-bold text-ink-900">Automatic mythotech pulse</h3>
              </div>
              <Wand2 className="h-9 w-9 text-ink-500" />
            </div>
            <dl className="space-y-2 rounded-2xl border border-ink-100 bg-ink-900/90 p-4 text-sm text-ink-50">
              <div>
                <dt className="text-ink-200">Theme</dt>
                <dd className="font-semibold">{lore.theme}</dd>
              </div>
              <div>
                <dt className="text-ink-200">Anchor</dt>
                <dd className="font-semibold">{lore.anchor}</dd>
              </div>
              <div>
                <dt className="text-ink-200">Twist</dt>
                <dd className="font-semibold">{lore.twist}</dd>
              </div>
              <div>
                <dt className="text-ink-200">Cadence</dt>
                <dd className="font-semibold">{lore.cadence}</dd>
              </div>
            </dl>
            <button
              className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
              onClick={() => setLore(generateLorePulse())}
            >
              Generate another pulse
            </button>
          </div>

          <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">NPC fabricator</p>
                <h3 className="text-2xl font-bold text-ink-900">Drop fresh Balcony actors</h3>
              </div>
              <Cpu className="h-9 w-9 text-ink-500" />
            </div>
            <div className="grid gap-3 rounded-2xl border border-ink-100 bg-white/80 p-4 text-sm text-ink-800 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Name</p>
                <p className="font-semibold text-ink-900">{npc.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Role</p>
                <p className="font-semibold text-ink-900">{npc.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Allegiance</p>
                <p>{npc.allegiance}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Quirk</p>
                <p>{npc.quirk}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Motive</p>
                <p>{npc.motive}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Loadout</p>
                <p>{npc.loadout}</p>
              </div>
            </div>
            <button
              className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-700"
              onClick={() => setNpc(generateNpc())}
            >
              Fabricate another NPC
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Combat micro-sim</p>
                <h3 className="text-2xl font-bold text-ink-900">Test Gothic-Cyberpunk beats</h3>
              </div>
              <Swords className="h-9 w-9 text-ink-500" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Opposition</p>
                <select
                  className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 focus:border-ink-500 focus:outline-none"
                  value={enemyId}
                  onChange={(e) => setEnemyId(e.target.value)}
                >
                  {combatants.map((foe) => (
                    <option key={foe.id} value={foe.id}>
                      {foe.title}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-ink-700">{activeEnemy?.style}</p>
                <p className="text-xs text-ink-500">{activeEnemy?.tells}</p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Integrity</p>
                <div className="mt-2 h-2 w-full rounded-full bg-ink-100">
                  <div
                    className="h-2 rounded-full bg-ink-900"
                    style={{ width: `${(integrity / baseIntegrity) * 100}%` }}
                  />
                </div>
                <p className="mt-1 text-sm text-ink-700">{integrity} / {baseIntegrity}</p>
                <p className="text-xs text-ink-500">Health-equivalent — how much strain the Balcony body can take.</p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Flux</p>
                <div className="mt-2 h-2 w-full rounded-full bg-ink-100">
                  <div className="h-2 rounded-full bg-amber-500" style={{ width: `${(flux / baseFlux) * 100}%` }} />
                </div>
                <p className="mt-1 text-sm text-ink-700">{flux} / {baseFlux}</p>
                <p className="text-xs text-ink-500">Luxverum control — burned for aggressive or ritual moves.</p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <button
                className="rounded-2xl border border-ink-100 bg-ink-900 px-4 py-3 text-left text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-800"
                onClick={() => performMove('strike')}
              >
                Glyph-strike
                <p className="text-xs font-normal text-ink-100/80">-5 enemy hp, -1 flux</p>
              </button>
              <button
                className="rounded-2xl border border-ink-100 bg-white px-4 py-3 text-left text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5"
                onClick={() => performMove('static')}
              >
                Static burst
                <p className="text-xs font-normal text-ink-700">-4 enemy flux, -2 flux</p>
              </button>
              <button
                className="rounded-2xl border border-ink-100 bg-white px-4 py-3 text-left text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5"
                onClick={() => performMove('guard')}
              >
                Guard stance
                <p className="text-xs font-normal text-ink-700">+3 integrity, +1 flux</p>
              </button>
              <button
                className="rounded-2xl border border-ink-100 bg-white px-4 py-3 text-left text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5"
                onClick={() => performMove('detonate')}
              >
                Paradox mote
                <p className="text-xs font-normal text-ink-700">-3 hp, -2 enemy flux, self strain</p>
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Enemy state</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-ink-900 text-center text-lg font-bold text-white">{enemyHp}</div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">HP / Integrity</p>
                    <p className="text-xs text-ink-600">{activeEnemy?.title}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-ink-500">Flux: {enemyFlux} / {activeEnemy?.flux ?? 0}</p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Combat log</p>
                {combatLog.length === 0 ? (
                  <p className="mt-2 text-sm text-ink-700">No moves yet. Pick an action to provoke the foe.</p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm text-ink-700">
                    {combatLog.map((entry, idx) => (
                      <li key={`${entry}-${idx}`} className="flex gap-2">
                        <span className="text-ink-400">•</span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-800"
                onClick={resetCombat}
              >
                Reset combat
              </button>
              <span className="text-sm text-ink-600">Use values as scaffolding for system wiring.</span>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">Character creation</p>
                <h3 className="text-2xl font-bold text-ink-900">Assemble a Balcony runner</h3>
              </div>
              <Shield className="h-9 w-9 text-ink-500" />
            </div>

            <div className="grid gap-3">
              {(
                [
                  { key: 'background', label: 'Background', options: characterOptions.backgrounds },
                  { key: 'resonance', label: 'Resonance', options: characterOptions.resonances },
                  { key: 'weapon', label: 'Weapon', options: characterOptions.weapons },
                  { key: 'focus', label: 'Focus', options: characterOptions.focuses },
                ] as const
              ).map((field) => (
                <label key={field.key} className="block text-sm font-semibold text-ink-800">
                  {field.label}
                  <select
                    className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 focus:border-ink-500 focus:outline-none"
                    value={build[field.key]}
                    onChange={(e) => setBuild((prev) => ({ ...prev, [field.key]: e.target.value }))}
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Build summary</p>
              <p className="text-sm text-ink-700">
                {build.background} — {build.resonance}. Carries a {build.weapon} and leans on {build.focus} tactics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-800"
                onClick={() => setBuild(generateCharacter())}
              >
                Randomize build
              </button>
              <span className="text-sm text-ink-600">Slot this directly into the Text RPG as a playable shell.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
