# Veil-Circuit Balcony Interface

The Balcony is the origin node and primary touchpoint for visitors. Use this specification to build interactive prototypes (UI and data) that stay faithful to the roadmap.

## Core Functions
- **Question Loop:** Present 2–3 prompts from the Balcony question set. Each prompt stores the visitor response and inferred intent.
- **Reveal Loop:** For every question batch, surface a triad: one truth, one risk, one suggested path.
- **Routing:** Based on intent + Lₚ + time layer, propose the next organ (Gallery, Ritual Engine, Navigation Organ).

## Data Model (draft)
```ts
export type BalconyPrompt = {
  id: string
  text: string
  tags: string[]
  unlocks?: string[] // ids of organs/rituals unlocked by answering
}

export type BalconyReveal = {
  promptId: string
  truth: string
  risk: string
  pathHint: string
}

export type BalconyState = {
  timeLayer: 'chronos' | 'kairos'
  luxverum: number // current Lₚ contribution from visitor
  intent: string
  memoryTags: string[]
}
```

## Interaction Notes
- Keep the UI minimal: a stacked card with question prompts and a “Proceed” action.
- Reflect time layer visually (e.g., chronos = structured grid; kairos = flowing gradient).
- Show current Lₚ contribution as a small meter; seed with sample values until the Luxverum tracker is wired.

## First Questions (starter set)
1. Who are you becoming?
2. What do you seek?
3. What memory do you carry here?

Map these to reveals that point into the Architecture Map’s organs.
