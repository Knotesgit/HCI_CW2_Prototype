# Inline Change Lens — CW2 interactive design prototype

## Open locally

Open `index.html` in a modern browser. No installation, build, backend, API key, or network connection is required. The source excerpts are bundled in `conversation-data.js`.

## Demonstration path

1. Use **Budget revision** in the left navigation if needed, then click **Possible budget revision → Review** underneath the assistant's budget reply.
2. Inspect **Earlier plan**, **Later update**, and the reported reason in the persistent side panel; select **See original messages**. Source messages contain the researcher's original workshop-chat wording.
3. Select **Back to change details**; choose **Pin this change**.
4. Scroll in the conversation or add a **local** follow-up. The panel is non-modal; the chat remains available.
5. Close the panel and reopen the pinned item through **Pinned changes**. Remove the pin, or review the separate **Time revision** example.
6. Reload the page to check that pins persist in browser `localStorage`. Use **Reset saved demo data** to clear local state.

## Interaction scope and limits

- Budget £600 → £420 (user reports funding reduction from the Students' Union).
- Time 1–4 pm → 2–4 pm (user reports room access limited to 2–4 pm).
- These are **predefined, fixed-scenario change events**. The prototype does not infer changes using an LLM, verify external facts, access other chats, or generate responses.
- Source content is excerpted from the supplied researcher-prepared 11-exchange Do-method conversation. User messages are verbatim; displayed assistant extracts are verbatim **first paragraphs** (not complete assistant replies).
- Pinned state and user-added local follow-ups use browser-only `localStorage`; nothing is uploaded or shared. The note exists only on that browser/device.
- For demo accessibility, actions use ordinary buttons, focus indicators, and Escape to close the panel.

## Suggested GitHub Pages publication

Use a public repository that contains `index.html`, `styles.css`, `app.js`, and `conversation-data.js`. In GitHub repository **Settings → Pages**, configure **Deploy from a branch → main → / (root)**. The resulting public `https://<username>.github.io/<repo>/` URL can be put in the CW2 pictorial after verifying it in a logged-out browser. The code is entirely static; Pages requires no runtime configuration.

Do not upload real participant transcripts or private study records. This demonstration uses the researcher-prepared task conversation, not participants' Say/Do/Make transcripts.

## Academic use

The prototype illustrates a design intervention supported by CW1 T4 (facts vs reasons), with T3 context recovery and T5 retention choices as relevant adjacent insights. It is *not* an evaluated user study or evidence of improved user performance. The coursework pictorial must describe the actual interface and interactions, include genuine screenshots and an accessible demonstration link, and disclose generative-AI use in the required acknowledgement section.

**Local file caveat:** Some browsers restrict `localStorage` on `file://` URLs. The rest of the UI works when opened locally; publish to an HTTPS GitHub Pages URL to reliably verify cross-reload persistence before submission.
