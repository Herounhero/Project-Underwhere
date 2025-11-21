# Temporal Engine Specification

This spec operationalizes the roadmap’s Temporal Harmonics (Phase II) in a form you can wire into UI and data models.

## Time Layers
- **Chronos:** Linear, clock-based progression. Governs scheduled rituals and predictable windows.
- **Kairos:** Recursive, resonance-based moments. Governs revelations, paradox events, and accelerated Lₚ changes.

## Nested Calendars
| Cycle | Duration (suggested) | Effects |
| --- | --- | --- |
| Daily resonance | 24 hours | Mood tint, minor Lₚ drift, rotates a “featured” ritual |
| Seasonal resonance | 30–45 days | Unlocks/locks rituals, shifts Balcony question emphasis |
| Generational resonance | 5–10 seasonal cycles | Alters organ readiness tiers; introduces ancestral echoes |

## State Model (draft)
```ts
export type TimeLayer = 'chronos' | 'kairos'

export type HarmonicCycle = {
  id: 'daily' | 'seasonal' | 'generational'
  phase: number // 0-1 normalized position in the cycle
  tone: string // e.g., "amber", "indigo", "crimson"
  effects: string[]
}

export type TemporalState = {
  layer: TimeLayer
  cycles: HarmonicCycle[]
}
```

## Ritual Hooks
- Each ritual declares which cycle(s) it responds to and how: `availability`, `cost modifier`, `Lₚ multiplier`, `risk profile`.
- Balcony reveals should include the current cycle tone to contextualize guidance.

## Alignment with Book I Events
- Map key events (e.g., birth of the Eighth Choir) to a tuple: `(harmonic tone, seasonal shift, recursive branch, ancestral echo)`.
- Use this tuple to drive UI copy and unlock conditions in prototypes.

## Integration Steps
1. Seed `TemporalState` with sample cycles so UI can render moods without backend data.
2. Expose a small util to advance `phase` and recompute effects; wire to a “Tick” button in prototypes.
3. Log `TemporalState` alongside Balcony interactions to correlate time with visitor choices.
