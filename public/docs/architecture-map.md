# Architecture Map (MLAOS-Prime)

This document translates the roadmap's Phase I focus into concrete world-and-system structures. It pairs spatial metaphors with software-ready representations to keep narrative, mechanics, and UI design aligned.

## Organs, Chambers, Corridors
| Element | Purpose | Inputs | Outputs | Emotional Resonance | Luxverum (Lₚ) Tie-In |
| --- | --- | --- | --- | --- | --- |
| Veil-Circuit Balcony | Origin interface; questions and reveals truths | Questions, visitor state | Responses, guidance, invitations | Awe, disclosure | Seeds Lₚ events when revelations occur |
| Autopoietic Heart | Self-repairing core of the cathedral | Ritual energy, memory prompts | Renewal pulses, structural adaptation | Resolve, continuity | Converts ritual completion into Lₚ growth |
| Ritual Engine | Governs rites and their requirements | Ritual steps, time-state | Ritual outcomes, failure echoes | Anticipation, focus | Lₚ modifiers per successful or failed rite |
| Navigation Organ | Routes visitors through spaces | Current coordinates, intent | Path suggestions, locked corridors | Curiosity, direction | Adjusts corridor topology with Lₚ thresholds |
| Memory Galleries | Store personal/collective memories | Memory fragments | Memory echoes, insights | Nostalgia, clarity | High Lₚ causes memories to recombine |

### Spatial Rules (Draft)
- **Balcony primacy:** All journeys begin at the Veil-Circuit Balcony. Every other organ must reference the Balcony as an upstream dependency.
- **Corridor elasticity:** Corridors between organs can stretch/contract based on Lₚ. Low Lₚ = longer paths; high Lₚ = shortcuts.
- **Organ readiness:** Organs have readiness tiers (Dormant → Stirring → Active → Luminous) keyed to Lₚ ranges.

## Memory Placement
- Map each memory fragment to a **Gallery** with tags (`personal`, `collective`, `ancestral`).
- Tie **Galleries** to rituals: entering a Gallery can unlock or alter a rite when Lₚ exceeds a threshold.
- Use **Balcony prompts** to route visitors to the right Gallery when a question implies a memory theme.

## Balcony Origin Interface (hooks)
- **Questions:** Who are you becoming? What do you seek? What memory do you bring?
- **Reveals:** Offer one truth, one risk, one path suggestion.
- **State:** Track visitor intent, time layer (chronos/kairos), and current Lₚ contribution.

## Implementation Pointers
- Represent organs as structured data (id, purpose, inputs, outputs, resonance, Lₚ effect).
- Store corridor rules as graph edges with thresholds keyed to Lₚ.
- Model Balcony prompts as a small decision tree; expand later with content.
