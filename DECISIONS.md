# Decisions

Append-only log of small architectural decisions and their reasoning. ISO dates, newest at the bottom — read top-down for chronology.

---

## 2026-05-29 — Petition counter is shared across alive/dead status

When a Baustelle transitions from alive to dead (or back), its petition counter rolls over rather than resetting. One count per site; no separate `alive:<slug>` / `dead:<slug>` tallies.

**Why**: simpler KV schema, fewer keys to track. The petition text changes ("muss bleiben" → "wiedererrichten") but the counter is treated as a generic "objections to the current state of this site" tally. Signers of the alive petition silently become Wiedererrichtungs-Petenten once the Baustelle dies — which is also a bit funny.

**Trade-off**: the count conflates two different demands. A popular alive petition that flips to dead carries its enthusiasm over to a request the signers never actually made.

**Revisit when**: a single site accumulates enough signatures that the conflation matters editorially (rough threshold: >100), or several sites die and the inherited counts feel misleading. Migration path: split each `count:<slug>` into `count:alive:<slug>` and `count:dead:<slug>`, touching `functions/api/petition/[slug].js` and `functions/api/petition/[slug]/sign.js` plus a one-time KV backfill. Straightforward.

## 2026-05-31 — Petition signatures are stored append-only

New signatures are stored as `sig:<slug>:<token>` keys. The old `count:<slug>` key remains as a migration base so existing production counts continue to display.

**Why**: Workers KV has no atomic increment. Read-modify-write counters can lose concurrent signatures. Append-only keys make concurrent successful signatures durable, and repeated use of the same token writes the same key.
