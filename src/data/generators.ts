export type LorePulse = {
  theme: string
  anchor: string
  twist: string
  cadence: string
}

export type NpcProfile = {
  name: string
  role: string
  allegiance: string
  quirk: string
  motive: string
  loadout: string
}

export type CombatArchetype = {
  id: string
  title: string
  style: string
  hp: number
  flux: number
  tells: string
}

export type CharacterBuild = {
  background: string
  resonance: string
  weapon: string
  focus: string
}

const loreThemes = [
  'Balcony glass that remembers every footstep',
  'Autopoietic Heart tuned to a grief frequency',
  'Temporal vents opening under neon rain',
  'Luxverum engines disguised as cathedrals',
  'Choirs fracturing into mirrored selves',
]

const loreAnchors = [
  'an old memory seed hidden in the archive stacks',
  'a Choir oath rewritten mid-ritual',
  'a faulty navigation spire gear that sings backwards',
  'a ritual engine bell cracked by paradox',
  'a cipher etched into obsidian railings',
]

const loreTwists = [
  'the city hums back a reply in machine-song',
  'a hidden organ wakes and rethreads the corridor',
  'every echo-self argues about which future is real',
  'Luxverum flares and inverts gravity for thirteen heartbeats',
  'a Choir archivist swaps your role with their own for a night',
]

const loreCadence = ['staccato sigils', 'slow cathedral reverb', 'glitch-drone hymn', 'hollow bell tolls', 'polyrhythmic code']

const npcNames = ['Veyra Coil', 'Inquisitor Nhal', 'Elder Silex', 'Pilot Orin', 'Archivist Khera', 'Cipher-Eater Dima', 'Ruinwalker Lysa']
const npcRoles = ['Balcony custodian', 'Luxverum broker', 'Ritual engineer', 'Temporal courier', 'Choir tactician', 'Echo diplomat']
const npcAllegiances = [
  'Eighth Choir — transparent memory faction',
  'Neutral corridor guild',
  'Veil-Circuit loyalist',
  'Paradox harvesters',
  'Autopoietic Heart keepers',
]
const npcQuirks = [
  'speaks in alternating first- and second-person',
  'carries a pocket bell that rings when time slips',
  'refuses to touch metal rails',
  'leaves Luxverum glyphs behind like breadcrumbs',
  'laughs whenever paradox math balances',
]
const npcMotives = [
  'wants to stabilize daily cycles before the generational echo hits',
  'seeks to trade doctrine fragments for Choir protection',
  'tries to steal your ΘE signature to fuel a ritual',
  'needs an ally to decode a cracked navigation map',
  'hopes to defect if given safe passage through the Balcony',
]
const npcLoadouts = [
  'Glyph injector + Resonance tuner',
  'Obsidian mirror + Spinal uplink',
  'Choir sigil deck + Anti-paradox rosary',
  'Railgun relic + Lux dampeners',
  'Memory braid + Patch cable of salt',
]

const combatArchetypes: CombatArchetype[] = [
  {
    id: 'warden',
    title: 'Iron Warden',
    style: 'Close-quarters suppression, hates paradox sparks',
    hp: 18,
    flux: 8,
    tells: 'Flares when Luxverum spikes — prefers to parry then counter.',
  },
  {
    id: 'choir-node',
    title: 'Choir Node',
    style: 'Psychic resonance and echo duplication',
    hp: 14,
    flux: 12,
    tells: 'Splits into harmonics when threatened; static harms it.',
  },
  {
    id: 'archive-ghost',
    title: 'Archive Ghost',
    style: 'Data siphon and memory overwrite attempts',
    hp: 12,
    flux: 16,
    tells: 'Feeds on repeated moves; breaking rhythm weakens it.',
  },
]

const backgrounds = ['Runaway reliquary courier', 'Choir apostate', 'Cathedral systems hacker', 'Temporal archaeologist']
const resonances = ['Luxverum empath', 'Cipher-seer', 'Paradox diver', 'Chronicle binder']
const weapons = ['Glyph-blade', 'Pulse pistol', 'Choral staff', 'Data lash']
const focuses = ['Stealth recon', 'Ritual support', 'Frontline disruptor', 'Diplomatic conduits']

const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)]

export const generateLorePulse = (): LorePulse => ({
  theme: pick(loreThemes),
  anchor: pick(loreAnchors),
  twist: pick(loreTwists),
  cadence: pick(loreCadence),
})

export const generateNpc = (): NpcProfile => ({
  name: pick(npcNames),
  role: pick(npcRoles),
  allegiance: pick(npcAllegiances),
  quirk: pick(npcQuirks),
  motive: pick(npcMotives),
  loadout: pick(npcLoadouts),
})

export const getCombatArchetypes = () => combatArchetypes

export const generateCharacter = (): CharacterBuild => ({
  background: pick(backgrounds),
  resonance: pick(resonances),
  weapon: pick(weapons),
  focus: pick(focuses),
})

export const characterOptions = { backgrounds, resonances, weapons, focuses }
