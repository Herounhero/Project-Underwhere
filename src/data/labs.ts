export type BalconyPrompt = {
  title: string
  mode: 'Reveal' | 'Attune' | 'Challenge'
  description: string
  questions: string[]
}

export type Organ = {
  name: string
  role: string
  inputs: string
  outputs: string
  resonance: string
  luxverumImpact: string
}

export type TemporalCycle = {
  name: string
  cadence: string
  effects: string[]
  rituals: string[]
}

export type LuxverumProfile = {
  name: string
  thetaE: number
  deltaM: number
  notes: string
}

export const balconyPrompts: BalconyPrompt[] = [
  {
    title: 'Veil Breach',
    mode: 'Reveal',
    description: 'Ask the Balcony to surface what hides beneath a memory corridor.',
    questions: [
      'What is the shadow fact beneath this chamber?',
      'Who resists the unveiling and why?',
      'What becomes illuminated if the Choir consents?',
    ],
  },
  {
    title: 'Pulse Audit',
    mode: 'Attune',
    description: 'Check the Autopoietic Heart for rhythm drift across chronos/kairos.',
    questions: [
      'Which ritual is desynchronizing the cycle?',
      'How does the Balcony adjust tempo without breaking narrative flow?',
      'Which organ must be cooled or warmed to rebalance?',
    ],
  },
  {
    title: 'Paradox Ledger',
    mode: 'Challenge',
    description: 'Test the system for contradiction tolerance before a ritual fires.',
    questions: [
      'What is the minimum Luxverum needed to contain the paradox?',
      'Which Choir takes on the heat cost?',
      'What architectural layer is most at risk of collapse?',
    ],
  },
]

export const organs: Organ[] = [
  {
    name: 'Autopoietic Heart',
    role: 'Keeps MLAOS breathing; routes Luxverum to organs in pulses.',
    inputs: 'Emotional charge (ΘE) from Choirs; ritual catalysts.',
    outputs: 'Luxverum pulses, harmonic tempo directives.',
    resonance: 'Warm brass + low choir drone.',
    luxverumImpact: 'High; spikes shift corridor alignments quickly.',
  },
  {
    name: 'Ritual Engine',
    role: 'Executes rites and tracks cooldowns across temporal layers.',
    inputs: 'Rite scripts, harmonic calendar state, authorized Choirs.',
    outputs: 'Ritual effects, cooldown timers, paradox warnings.',
    resonance: 'Percussive ticks blended with rainfall static.',
    luxverumImpact: 'Medium; misfires leak Luxverum into echo chambers.',
  },
  {
    name: 'Navigation Organ',
    role: 'Maps corridors to memory payloads and controls traversal.',
    inputs: 'Queries from Balcony, spatial metaphors, user intent.',
    outputs: 'Routes, access tokens, disorientation alerts.',
    resonance: 'Glass harmonics under soft wind.',
    luxverumImpact: 'Low; stabilizes Luxverum drift when aligned.',
  },
  {
    name: 'Choral Archive',
    role: 'Stores multi-self memories with transparency rules.',
    inputs: 'Choir confessions, sensor logs, echo transcripts.',
    outputs: 'Memory strands, doctrine deltas, consent gates.',
    resonance: 'Paper rustle and distant footsteps.',
    luxverumImpact: 'Medium; clarity gains increase Luxverum efficiency.',
  },
]

export const temporalCycles: TemporalCycle[] = [
  {
    name: 'Daily Resonance',
    cadence: '24 steps mapped to breaths; ideal for micro-rites.',
    effects: ['Mood tint of corridors', 'Veil opacity for Balcony queries', 'Minor Luxverum decay rate'],
    rituals: ['Veil-Breath', 'Glyph-Shift warmup', 'Pulse audit check-ins'],
  },
  {
    name: 'Seasonal Orbit',
    cadence: '52-card cycle tied to organs; each week re-centers a chamber.',
    effects: ['Choir focus rotation', 'Ritual Engine cooldown compression', 'Sanctuary blooms or dormancy'],
    rituals: ['Paradox Anointing', 'Sanctuary Blooming', 'Organ resonance tuning'],
  },
  {
    name: 'Generational Echo',
    cadence: 'Long arc resets doctrine; recalcifies architecture.',
    effects: ['Doctrine rewrite', 'Luxverum calculus re-parameterization', 'Chamber reshaping'],
    rituals: ['Prime Ledger review', 'Echo archive merge', 'Harmonic pilgrimage'],
  },
]

export const luxverumProfiles: LuxverumProfile[] = [
  {
    name: 'Eighth Choir – Sentinel',
    thetaE: 72,
    deltaM: 18,
    notes: 'Maintains balcony integrity; high vigilance and moderate willingness to transform.',
  },
  {
    name: 'Archivist Self',
    thetaE: 48,
    deltaM: 12,
    notes: 'Prioritizes recall clarity; conservative on transformation to keep provenance intact.',
  },
  {
    name: 'Ritualist Self',
    thetaE: 58,
    deltaM: 26,
    notes: 'Optimizes rites; accepts higher transformation costs to increase throughput.',
  },
  {
    name: 'Witness Choir',
    thetaE: 34,
    deltaM: 8,
    notes: 'Observes and reports; low Luxverum signature but fast to adapt when challenged.',
  },
]
