# Inline Change Lens

**Human–Computer Interaction · Interactive Design Prototype**

[**Launch interactive prototype**](https://knotesgit.github.io/HCI_CW2_Prototype/)

## Design concept

Inline Change Lens explores how people can inspect revisions in a long AI-assisted conversation without losing the conversational context. A system-suggested marker appears beside a relevant assistant response. Rather than treating the suggested change as an authoritative fact, the interface exposes the earlier and updated values, the reported reason, and the original messages on which the suggestion is based.

The design responds primarily to the CW1 theme **T4 — Facts Versus Reasons**: locating the latest decision does not necessarily mean understanding why it changed. **T3 — Active Context Recovery** informs source navigation, while **T5 — Retention Choices** motivates user-controlled pinning.

## Interaction

The prototype presents the complete eleven-exchange, researcher-prepared workshop-planning conversation and initially opens at its latest message. Two predefined revision examples are available:

| Revision | Earlier position | Later position | Reported reason |
| --- | --- | --- | --- |
| Budget | £600 | £420 | Students’ Union funding reduction |
| Workshop time | 1–4 pm | 2–4 pm | Reduced room availability |

Selecting a **Possible revision · Review** marker opens a non-modal inspection panel. The panel displays the revision and offers **See original messages**, allowing the relevant conversation evidence to be inspected. The user can return to the change details, **Pin** or **Unpin** a change, continue reading the chat with the panel open, and revisit pinned changes from the chat header. Pinning denotes retention for later reference, not approval of the reported reason.

The left sidebar's **two demonstration shortcuts** provide direct access to the budget and time revision examples for assessment; the original plan is accessible through source inspection. They are **demonstration aids, not elements of the proposed product interface**. **Reset** clears locally stored demonstration data.

## Prototype fidelity and evidence

This is a **bounded interactive prototype**, not a live AI change-detection system. Both suggested changes are preconfigured using the researcher-prepared study stimulus. Source inspection reveals statements from the conversation; it does not independently validate external funding or room-booking facts. The complete conversation preserves the structure of the researcher archive, including the extended checklist replies. Some later user prompts in that archive were reconstructed by the researcher, so the stimulus is not presented as an independently verified verbatim export from the original chat platform.

The message composer adds local follow-up text only. It does not contact an AI model or generate assistant replies. Pinned changes and locally added messages are stored using browser `localStorage`; no backend, account or external API is used. Persistence is limited to the browser and device storing the data.

The prototype demonstrates a design proposition and its interaction states. It is **not** evidence of a completed participant evaluation or improved user performance.

## Implementation and access

The site is implemented using static HTML, CSS and JavaScript and is deployable through GitHub Pages. No build process or external dependencies are required.

| File | Role |
| --- | --- |
| `index.html` | Conversation layout and interface structure |
| `styles.css` | Responsive visual presentation |
| `app.js` | Change inspection, source navigation, pinning and local state |
| `conversation-data.js` | Researcher-prepared eleven-exchange conversation |

The demonstration is designed for desktop use and adapts to narrower viewports. Standard buttons, visible keyboard focus and Escape-to-close behaviour are provided for key interactions.
