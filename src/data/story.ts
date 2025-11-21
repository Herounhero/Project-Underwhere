export type Choice = {
  label: string
  effect: string
  next?: string
}

export type Scene = {
  id: string
  title: string
  location: string
  mood: string
  signal: string
  desc: string
  choices: Choice[]
}

export const scenes: Scene[] = [
  {
    id: 'balcony',
    title: 'Veil-Circuit Balcony Reboot',
    location: 'Edge of the suspended cathedral-node',
    mood: 'Gothic signal fog — neon stitched through ruin',
    signal: 'Clockwork rain + low choir static',
    desc: 'The Balcony flickers awake, cables humming like gothic organs. Below, chrono-smog veils the city ruins. The Eighth Choir stands beside you, half in code, half in bone.',
    choices: [
      {
        label: 'Ask the Choir to disclose the hidden breach',
        effect: 'ΘE surges softly; Balcony glass thins.',
        next: 'breach',
      },
      {
        label: 'Initiate glyph-boot of the Autopoietic Heart',
        effect: 'ΔM rises — you risk burning a corridor clean.',
        next: 'heart',
      },
      {
        label: 'Scan the Luxverum meter for ambient static',
        effect: 'Data overlays bloom; you see harmonics flicker.',
        next: 'scan',
      },
    ],
  },
  {
    id: 'breach',
    title: 'Breach Ledger',
    location: 'Underlevel conduit twelve',
    mood: 'Cold iron dripping light',
    signal: 'Ritual Engine clicks, counting contradictions',
    desc: 'A fracture runs along the corridor. Choir sigils flash error glyphs: paradox tolerated, not resolved. A mirror-slab shows your echo-self walking ahead of you.',
    choices: [
      {
        label: 'Seal the breach with Luxverum resin',
        effect: 'Luxverum expenditure stabilizes architecture.',
        next: 'stabilize',
      },
      {
        label: 'Let the paradox breathe — harvest insight',
        effect: 'ΘE spikes; Choir whispers become coordinates.',
        next: 'insight',
      },
    ],
  },
  {
    id: 'heart',
    title: 'Autopoietic Heart Spin-Up',
    location: 'Central lumen chamber',
    mood: 'Bronze ribcage lit by cyan fire',
    signal: 'Pulse audit tones chasing your heartbeat',
    desc: 'You slot an obsidian key into the Heart. The chamber inhales. Circuits remember old liturgies. The Balcony UI overlays a warning: overclock risks paradox bloom.',
    choices: [
      {
        label: 'Throttle up anyway — chase irradiation',
        effect: 'Luxverum arcs spark; corridors rearrange.',
        next: 'irradiant',
      },
      {
        label: 'Feather the pulse — seek harmonics',
        effect: 'Temporal cycles align; Choirs hum in sync.',
        next: 'harmonics',
      },
    ],
  },
  {
    id: 'scan',
    title: 'Luxverum Scan',
    location: 'Balcony console',
    mood: 'Soft blue UI on black glass',
    signal: 'Telemetry whisper over choral wind',
    desc: 'Readings show Luxverum at 62 — Kindled trending Resonant. Temporal drift between daily and seasonal cycles is minimal, but a generational echo is approaching.',
    choices: [
      {
        label: 'Route excess Luxverum to the Choir',
        effect: 'Choir shields thicken; ΔM cost deferred.',
        next: 'choir',
      },
      {
        label: 'Divert charge to the Ritual Engine',
        effect: 'Cooldowns compress; risk of paradox sparks.',
        next: 'engine',
      },
    ],
  },
  {
    id: 'stabilize',
    title: 'Sealed Corridor',
    location: 'Quieted fracture line',
    mood: 'Dust and ozone',
    signal: 'Heartbeat metronome settles',
    desc: 'Resin cools into glassy veins. The Eighth Choir relaxes, singing an underworld lullaby. The Balcony projects a safe passage marker.',
    choices: [],
  },
  {
    id: 'insight',
    title: 'Paradox Dream',
    location: 'Mirror-slab loop',
    mood: 'Silvered fog',
    signal: 'Voices overlaying your own',
    desc: 'You watch yourself choose differently. The mirror-self writes doctrine in light: “Transparency is a mercy, but recursion is a trial.”',
    choices: [
      {
        label: 'Accept the doctrine and encode it',
        effect: 'Doctrine delta stored; Luxverum efficiency +5.',
        next: 'encoded',
      },
      {
        label: 'Reject it — let the loop collapse',
        effect: 'Architecture wails; Balcony glass shivers.',
        next: 'collapse',
      },
    ],
  },
  {
    id: 'irradiant',
    title: 'Irradiant Surge',
    location: 'Heart overclocked',
    mood: 'Brass screaming under neon rain',
    signal: 'Luxverum roar',
    desc: 'The cathedral shudders. Corridors spiral, reshaping memory stacks. A paradox mote appears, orbiting your palm like a black sun.',
    choices: [],
  },
  {
    id: 'harmonics',
    title: 'Harmonic Glide',
    location: 'Heart in resonance',
    mood: 'Low amber glow',
    signal: 'Balanced pulse + soft choir',
    desc: 'Everything slows. The Ritual Engine and Navigation Organ sync to the same beat. The Balcony offers three stable routes deeper into the codex.',
    choices: [
      {
        label: 'Descend to the Choral Archive',
        effect: 'Memory clarity intensifies; ΘE steadies.',
        next: 'archive',
      },
      {
        label: 'Step into the Navigation spire',
        effect: 'Routes rewrite; you glimpse forbidden coordinates.',
        next: 'navigation',
      },
    ],
  },
  {
    id: 'choir',
    title: 'Choir Shield',
    location: 'Balcony rail',
    mood: 'Steel voices humming',
    signal: 'Protective hymn',
    desc: 'Luxverum washes over the Choir. Their robes flare with circuit glyphs. You feel safer, but the Ritual Engine waits, hungry.',
    choices: [],
  },
  {
    id: 'engine',
    title: 'Ritual Engine Prime',
    location: 'Rust-lit forge',
    mood: 'Sparks on oil-dark metal',
    signal: 'Ratcheting gears',
    desc: 'Charges surge into the Engine. Cooldowns shrink. A ritual slot opens: Glyph-Shift, Paradox Anointing, or Sanctuary Blooming.',
    choices: [],
  },
  {
    id: 'encoded',
    title: 'Doctrine Stored',
    location: 'Choral Archive vault',
    mood: 'Hushed, illuminated stacks',
    signal: 'Quills scratching in code',
    desc: 'The doctrine glows inside a crystal drive. Luxverum lines pulse steadily. Future selves will inherit this choice.',
    choices: [],
  },
  {
    id: 'collapse',
    title: 'Loop Collapse',
    location: 'Shattered mirror lane',
    mood: 'Glass and neon shards',
    signal: 'Alarm chimes + distant thunder',
    desc: 'The paradox collapses into static. Paths scramble. The Balcony dims, awaiting your next move.',
    choices: [],
  },
  {
    id: 'archive',
    title: 'Choral Archive',
    location: 'Memory stacks',
    mood: 'Ink and chrome',
    signal: 'Pages turning in code',
    desc: 'Translucent books reveal overlapping selves. The archive accepts your presence, offering to merge echoes.',
    choices: [],
  },
  {
    id: 'navigation',
    title: 'Navigation Spire',
    location: 'Glass ladder over city void',
    mood: 'Wind, data, and cathedral bells',
    signal: 'Soft triangulation beeps',
    desc: 'Coordinates scroll: sanctuaries, paradox shrines, temporal vents. You can mark a route or jump blind.',
    choices: [],
  },
]

export const sceneMap = new Map(scenes.map((scene) => [scene.id, scene]))
