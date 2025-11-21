export type DocMeta = {
  slug: string
  title: string
  summary: string
  file: string
}

const basePath = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''

export const docs: DocMeta[] = [
  {
    slug: 'roadmap',
    title: 'Roadmap',
    summary: 'Phased plan that braids architecture, harmonics, Luxverum calculus, and narrative build-out.',
    file: `${basePath}/docs/roadmap.md`,
  },
  {
    slug: 'architecture-map',
    title: 'Architecture Map',
    summary: 'Organs, corridors, and memory placement rules ready for data modeling.',
    file: `${basePath}/docs/architecture-map.md`,
  },
  {
    slug: 'balcony-interface',
    title: 'Balcony Interface',
    summary: 'Prompt/reveal loops, state model, and UI guidance for the origin node.',
    file: `${basePath}/docs/balcony-interface.md`,
  },
  {
    slug: 'temporal-engine-spec',
    title: 'Temporal Engine',
    summary: 'Chronos/Kairos layers, harmonic cycles, and state models for time-aware rituals.',
    file: `${basePath}/docs/temporal-engine-spec.md`,
  },
]

export const getDocBySlug = (slug: string) => docs.find((doc) => doc.slug === slug)
