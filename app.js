"use strict";

// This is a bounded Wizard-of-Oz / preset-event prototype, not a change-detection algorithm.
// All original conversation excerpt text is loaded from conversation-data.js.
const EVENTS = [
  {
    id: "budget",
    label: "Workshop budget",
    marker: "Possible budget revision",
    before: "£600",
    after: "£420",
    reason: "Students’ Union funding was reduced; this was reported by the user in the chat.",
    note: "The source supports the reported funding change. It does not independently verify the Students’ Union allocation.",
    target: "a-04",
    sources: [
      { id: "u-01", title: "Earlier plan", role: "Original user message" },
      { id: "u-04", title: "Later funding update", role: "Original user message" }
    ]
  },
  {
    id: "schedule",
    label: "Workshop time",
    marker: "Possible time revision",
    before: "1–4 pm",
    after: "2–4 pm",
    reason: "The university room was available only from 2–4 pm; this was reported by the user in the chat.",
    note: "The source attributes the time change to room availability, not to the funding reduction.",
    target: "a-05",
    sources: [
      { id: "u-01", title: "Earlier time proposal", role: "Original user message" },
      { id: "u-05", title: "Later room update", role: "Original user message" }
    ]
  }
];

const STORAGE_KEY = "cw2-inline-lens-demo-v1";
const $ = (id) => document.getElementById(id);
const elements = {
  root: document.querySelector(".app-shell"),
  sidebar: $("sidebar"), menu: $("menuButton"),
  chatScroll: $("chatScroll"), conversation: $("conversation"),
  pinnedButton: $("pinnedButton"), pinnedCount: $("pinnedCount"),
  drawer: $("inspectionDrawer"), drawerOverline: $("drawerOverline"),
  drawerHeading: $("drawerHeading"), drawerContent: $("drawerContent"),
  closeDrawer: $("closeDrawer"),
  composer: $("composer"), input: $("messageInput"), sendButton: $("sendButton"),
  toast: $("toast"), reset: $("resetDemo"), scrollLatest: $("scrollLatest")
};

const safeRead = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return {
      pinned: Array.isArray(saved?.pinned) ? saved.pinned.filter((x) => EVENTS.some((e) => e.id === x)) : [],
      messages: Array.isArray(saved?.messages) ? saved.messages.filter((x) => typeof x === "string").slice(-15) : []
    };
  } catch { return { pinned: [], messages: [] }; }
};
const state = {
  ...safeRead(),
  mode: null,
  eventId: "budget",
  drawerReturnFocus: null,
  notifyTimer: null,
  highlightTimer: null
};
const eventById = (id) => EVENTS.find((e) => e.id === id);
const eventForTarget = (target) => EVENTS.find((e) => e.target === target);
const persist = () => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ pinned: state.pinned, messages: state.messages })); }
  catch { showToast("Browser storage unavailable; saved changes will not survive a reload."); }
};
function node(tag, klass = "", text = null) {
  const el = document.createElement(tag);
  if (klass) el.className = klass;
  if (text !== null) el.textContent = text;
  return el;
}
function add(parent, tag, klass = "", text = null) { const element = node(tag, klass, text); parent.append(element); return element; }
function makeButton(label, klass, callback) {
  const button = node("button", klass, label);
  button.type = "button";
  button.addEventListener("click", callback);
  return button;
}
function clear(parent) { parent.replaceChildren(); }
function showToast(text) {
  elements.toast.textContent = text;
  elements.toast.classList.add("shown");
  clearTimeout(state.notifyTimer);
  state.notifyTimer = setTimeout(() => elements.toast.classList.remove("shown"), 2900);
}
function updatePinCount() {
  elements.pinnedCount.textContent = String(state.pinned.length);
  document.querySelectorAll(".change-marker").forEach((button) => {
    const pinned = state.pinned.includes(button.dataset.event);
    button.classList.toggle("pinned", pinned);
    button.setAttribute("aria-label", `${eventById(button.dataset.event).marker}. ${pinned ? "Pinned. " : ""}Review details`);
    button.querySelector(".marker-status").textContent = pinned ? "Pinned · Review" : "Review";
  });
}

function appendMessage(root, type, text, id, { local = false, excerpt = false, change = null } = {}) {
  const container = add(root, "div", `message ${type}`);
  container.id = id;
  const avatar = add(container, "div", "avatar", type === "user" ? "U" : "AI");
  avatar.setAttribute("aria-hidden", "true");
  const wrap = add(container, "div", "message-wrap");
  add(wrap, "div", "who", type === "user" ? "You" : "Assistant");
  const bubble = add(wrap, "div", "bubble", null);
  if (Array.isArray(text)) {
    bubble.classList.add("rich-message");
    for (const block of text) {
      if (block.type === "table") {
        const tableWrap = add(bubble, "div", "table-scroll");
        const table = add(tableWrap, "table", "conversation-table");
        (block.rows || []).forEach((row, idx) => {
          const tr = add(table, "tr");
          row.forEach((cell) => add(tr, idx === 0 ? "th" : "td", "", cell));
        });
      } else if (block.text) {
        add(bubble, block.type === "heading" ? "h3" : block.type === "quote" ? "blockquote" : "p",
          `source-block ${block.type === "list" ? "source-list" : ""}`, block.text);
      }
    }
  } else bubble.textContent = text;
  if (change) {
    const marker = makeButton("", "change-marker", () => openDrawer("details", change.id, marker));
    marker.dataset.event = change.id;
    marker.dataset.testid = `change-marker-${change.id}`;
    add(marker, "span", "marker-circle", "!").setAttribute("aria-hidden", "true");
    add(marker, "span", "marker-name", change.marker);
    add(marker, "span", "marker-status", "Review");
    add(marker, "span", "arrow", "→").setAttribute("aria-hidden", "true");
    wrap.append(marker);
  }
}
function renderConversation() {
  clear(elements.conversation);
  SOURCE_TURNS.forEach((pair) => {
    const section = add(elements.conversation, "section", "exchange");
    section.setAttribute("aria-label", `Conversation exchange ${pair.turn}`);
    appendMessage(section, "user", pair.user, `u-${String(pair.turn).padStart(2, "0")}`);
    const msgId = `a-${String(pair.turn).padStart(2, "0")}`;
    appendMessage(section, "assistant", pair.assistantBlocks, msgId, { change: eventForTarget(msgId) });
  });
  state.messages.forEach((text, i) => appendMessage(elements.conversation, "user", text, `local-${i}`, { local: true }));
  updatePinCount();
}

function openDrawer(mode, eventId = null, trigger = null) {
  if (trigger instanceof HTMLElement) state.drawerReturnFocus = trigger;
  state.mode = mode;
  if (eventId) state.eventId = eventId;
  elements.root.classList.add("drawer-open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.pinnedButton.setAttribute("aria-expanded", "true");
  renderDrawer();
  elements.drawer.focus({ preventScroll: true });
  closeNavigation();
}
function closeDrawer() {
  if (!state.mode) return;
  state.mode = null;
  elements.root.classList.remove("drawer-open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.pinnedButton.setAttribute("aria-expanded", "false");
  clear(elements.drawerContent);
  if (state.drawerReturnFocus?.isConnected) state.drawerReturnFocus.focus({ preventScroll: true });
}
function switchDrawer(mode) { state.mode = mode; renderDrawer(); elements.drawer.focus({ preventScroll: true }); }
function setHeader(overline, heading) {
  elements.drawerOverline.textContent = overline;
  elements.drawerHeading.textContent = heading;
}
function renderDrawer() {
  clear(elements.drawerContent);
  if (state.mode === "pinned") renderPinned();
  else if (state.mode === "sources") renderSources();
  else renderDetails();
}
function renderDetails() {
  const e = eventById(state.eventId);
  setHeader("CHANGE INSPECTION", e.label);
  const root = elements.drawerContent;

  const delta = add(root, "div", "delta-card");
  add(delta, "p", "card-key", "Reported change");
  const values = add(delta, "div", "delta");
  const before = add(values, "div", "");
  add(before, "strong", "before", e.before);
  add(before, "small", "", "Earlier plan");
  add(values, "span", "delta-arrow", "→");
  const after = add(values, "div", "");
  add(after, "strong", "after", e.after);
  add(after, "small", "", "Later update");
  const reason = add(root, "div", "reason-card");
  add(reason, "p", "card-key", "REPORTED REASON");
  add(reason, "p", "", e.reason);

  root.append(makeButton("See original messages  →", "drawer-button primary", () => switchDrawer("sources")));
  const pinned = state.pinned.includes(e.id);
  const pinButton = makeButton(pinned ? "✓ Pinned — remove pin" : "Pin this change", `drawer-button ${pinned ? "saved" : ""}`, () => togglePin(e.id));
  pinButton.dataset.testid = "pin-toggle";
  root.append(pinButton);

}
function renderSources() {
  const e = eventById(state.eventId);
  setHeader("SOURCE INSPECTION", "Original messages");

  for (const source of e.sources) {
    const item = add(elements.drawerContent, "article", "source-item");
    const head = add(item, "div", "source-head");
    add(head, "span", "", source.title);

    const number = Number(source.id.split("-")[1]);
    const turn = SOURCE_TURNS.find((x) => x.turn === number);
    add(item, "p", "source-quote", `“${turn.user}”`);
    item.append(makeButton("Jump to this message  ↗", "source-button", () => {
      jumpToMessage(source.id);
      showToast("Original message highlighted in the conversation.");
    }));
  }
  elements.drawerContent.append(makeButton("← Back to change details", "drawer-button", () => switchDrawer("details")));
  add(elements.drawerContent, "p", "disclaimer", "These are user messages from the fixed researcher-prepared conversation, not an AI-generated summary. Source inspection does not independently validate external events.");
}
function renderPinned() {
  setHeader("YOUR CURATED CHANGES", "Pinned changes");
  const root = elements.drawerContent;
  if (state.pinned.length === 0) {
    add(root, "p", "empty-title", "No changes pinned yet.");
    return;
  }

  state.pinned.forEach((id) => {
    const e = eventById(id);
    const card = add(root, "article", "pin-card");
    add(card, "h3", "", e.label);
    add(card, "div", "pin-values", `${e.before} → ${e.after}`);
    add(card, "p", "", e.reason);
    const actions = add(card, "div", "pin-actions");
    actions.append(makeButton("Open details", "", () => { state.eventId = id; switchDrawer("details"); }));
    actions.append(makeButton("Remove pin", "remove", () => togglePin(id)));
  });
}
function togglePin(id) {
  const already = state.pinned.includes(id);
  if (already) state.pinned = state.pinned.filter((x) => x !== id);
  else state.pinned.push(id);
  persist();
  updatePinCount();
  renderDrawer();
  showToast(already ? "Pin removed. The suggested change remains available in chat." : "Change pinned. Reopen it anytime from Pinned changes.");
}
function jumpToMessage(id) {
  const target = $(id);
  if (!target) return;
  target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  clearTimeout(state.highlightTimer);
  document.querySelectorAll(".message.flash").forEach((n) => n.classList.remove("flash"));
  target.classList.add("flash");
  state.highlightTimer = setTimeout(() => target.classList.remove("flash"), 3200);
  closeNavigation();
  if (window.matchMedia("(max-width:900px)").matches && state.mode) {
    // Mobile uses a full-height overlay; close it so the source is actually visible.
    closeDrawer();
  }
}
function closeNavigation() { elements.sidebar.classList.remove("open"); elements.menu.setAttribute("aria-expanded", "false"); }

// Initialize the controls.
renderConversation();
elements.closeDrawer.addEventListener("click", closeDrawer);
elements.pinnedButton.addEventListener("click", () => {
  if (state.mode === "pinned") closeDrawer();
  else openDrawer("pinned", null, elements.pinnedButton);
});
elements.menu.addEventListener("click", () => {
  const isOpen = elements.sidebar.classList.toggle("open");
  elements.menu.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("[data-jump]").forEach((button) => button.addEventListener("click", () => jumpToMessage(button.dataset.jump)));
elements.input.addEventListener("input", () => { elements.sendButton.disabled = !elements.input.value.trim(); });
elements.composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = elements.input.value.trim();
  if (!content) return;
  state.messages.push(content);
  state.messages = state.messages.slice(-15);
  persist();
  const id = `local-${state.messages.length - 1}`;
  const former = $(id);
  if (former) former.remove();
  appendMessage(elements.conversation, "user", content, id, { local: true });
  elements.input.value = "";
  elements.sendButton.disabled = true;
  jumpToMessage(id);
  showToast("Saved locally — no AI reply is generated.");
});
elements.reset.addEventListener("click", () => {
  if (!window.confirm("Reset pinned changes and locally added messages in this browser?")) return;
  state.pinned = [];
  state.messages = [];
  persist();
  closeDrawer();
  renderConversation();
  scrollToLatest();
  showToast("Local demonstration data reset.");
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (elements.sidebar.classList.contains("open")) closeNavigation();
  else if (state.mode) closeDrawer();
});
// Open at the latest message; example shortcuts remain available for inspection.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
function scrollToLatest(instant = false) { elements.chatScroll.scrollTo({ top: elements.chatScroll.scrollHeight, behavior: instant ? "instant" : "smooth" }); }
function updateLatestVisibility() {
  if (!elements.scrollLatest) return;
  const el = elements.chatScroll;
  elements.scrollLatest.classList.toggle("visible", el.scrollHeight - el.scrollTop - el.clientHeight > 240);
}
elements.chatScroll.addEventListener("scroll", updateLatestVisibility, { passive: true });
elements.scrollLatest.addEventListener("click", scrollToLatest);
requestAnimationFrame(() => requestAnimationFrame(() => { scrollToLatest(true); updateLatestVisibility(); }));
window.addEventListener("load", () => { scrollToLatest(true); updateLatestVisibility(); }, { once: true });