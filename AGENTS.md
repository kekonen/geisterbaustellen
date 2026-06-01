# AGENTS.md — geisterbaustellen.de

## Project

A satirical leaderboard website for Berlin's long-standing abandoned construction sites ("Geisterbaustellen"). Single-page site, deadpan tone, ranks sites by how long they've been untouched. Submissions arrive via email; the maintainer adds them manually to data files.

Production URL: geisterbaustellen.de
Hosting: Cloudflare Pages (free tier)
Build: Hugo (extended), deployed automatically on push to GitHub main branch.

## Tech stack — keep it minimal

- **Hugo extended** (latest stable). No themes — write a single minimal custom layout from scratch.
- **No JavaScript frameworks.** Vanilla JS only, and only where strictly needed (the live counters).
- **No CSS framework.** One small `<style>` block in the head or a single `style.css`. Total CSS under 100 lines.
- **No external fonts, no analytics, no trackers, no cookie banner needed.** The site sets no cookies.
- **No images required for v1.** Optional photo per entry, lazy-loaded, served from `/static/photos/`.

If a dependency or library is being considered, the default answer is no. The entire site should build to under 50KB total.

## Content model

Each ghost construction site is one entry in `data/sites.yaml`. Structure:

```yaml
sites:
  - address: "Littenstraße 79"
    postcode: "10179"
    start_date: "2019-04-01"   # ISO format, approximate is fine
    note: "Gegenüber dem Landgericht Berlin II."
    photo: "littenstrasse-79.jpg"   # optional, file lives in /static/photos/
```

Adding a new site = appending a YAML block + (optionally) dropping a photo into `/static/photos/`. Nothing else.

The site reads `data/sites.yaml`, sorts entries by `start_date` ascending (oldest first), and renders the leaderboard.

## Page layout

One page. The whole site. Rendered from `layouts/index.html`.

Top of page:
- Title: **Berlins älteste offene Baustellen**
- One-line subtitle, deadpan. Suggested: *"Live-Rangliste."*

Leaderboard:
- Numbered list, 1 through N.
- First three entries get medal emojis (🥇 🥈 🥉) before the rank number.
- Each entry displays:
  - Address (large, the headline)
  - Live age counter computed in JS from `start_date` (format: "7 Jahre, 2 Monate, 14 Tage", updating once per minute)
  - Optional note line (small, italic, only rendered if present)
  - Optional photo (small, right side or below, lazy-loaded, max 400px wide)

Bottom of page:
- One line: *Eine bessere Baustelle gefunden?* → mailto link to `kontakt@geisterbaustellen.de` with pre-filled subject "Neue Geisterbaustelle" and body template (address, start date, photo, note).

That is the entire site. Do not add:
- About page
- Contact page beyond the mailto
- Personal byline, social links, "made by"
- Submission form, login, accounts
- Filter by Bezirk, search
- Tag pages, categories, RSS
- Cookie banner (no cookies are set)

**Exception — per-entry petition counter.** Each detail page has a "Petition: Diese Baustelle muss bleiben" section with a counter ("Unterschriften") behind a parody image-grid CAPTCHA (every tile is a construction site; any answer passes). Counter is stored in a Cloudflare KV namespace (`PETITIONS`) via Pages Functions under `functions/api/petition/*`. One-time CAPTCHA tokens live in the same KV with a 5-minute TTL. See README for setup.

If a requested feature feels like it's making the site into a "real product," push back before implementing.

## Design and tone

The aesthetic is **dry, civic, slightly old-fashioned**. Think:
- White background, black text. Maybe one accent color (a muted red, the kind used on Schrankenbaken).
- Serif body font from the system stack (`Georgia, "Times New Roman", serif`) — feels institutional and dignified, which is the joke.
- Sans-serif for the address headlines if it improves hierarchy. System stack only.
- Generous whitespace. Nothing should look "designed." It should look like a civic register that happens to exist online.
- Mobile-first. Everything works on a phone in portrait without horizontal scrolling.

The German copy throughout is **deadpan, formal, no exclamation marks, no emoji except the medals**. The humor comes from the format treating absurdity as routine.

## Live counter

The age counter is computed in vanilla JS on the client:

- Read each entry's `data-start-date` attribute from the DOM (Hugo writes it server-side from the YAML).
- Compute the difference from now to that date.
- Render as `X Jahre, Y Monate, Z Tage`.
- Recompute every 60 seconds via `setInterval`.

Plural/singular handling matters in German: *1 Jahr*, *2 Jahre*. Implement correctly.

## Repository structure

```
/
├── AGENTS.md
├── config.toml          # Hugo config, minimal
├── data/
│   └── sites.yaml       # all entries live here
├── layouts/
│   └── index.html       # the only template
├── static/
│   ├── photos/          # optional entry photos
│   └── style.css        # or inline in layout
└── README.md            # explains how to add an entry
```

No content directory, no archetypes, no themes. Hugo is being used as a templating engine over a single data file, nothing more.

## Hugo config

`config.toml` should be the absolute minimum:

```toml
baseURL = "https://geisterbaustellen.de/"
languageCode = "de-de"
title = "Berlins älteste offene Baustellen"
```

No `params` block unless something specifically requires it. No theme.

## Deployment

Cloudflare Pages builds the site on every push to `main`. Build settings:
- Build command: `hugo --minify`
- Build output directory: `public`
- Hugo version: pin to a specific recent version in the Pages environment variables (e.g. `HUGO_VERSION=0.131.0`) to avoid surprise breakage.

The site must be fully static — no edge functions, no server-side rendering at request time.

## Adding a new entry (the maintainer workflow)

1. Receive email at `kontakt@geisterbaustellen.de` with an address and start date.
2. (Optional) Verify the start date by checking Google Street View history.
3. Append a YAML block to `data/sites.yaml`.
4. (Optional) Drop a photo into `/static/photos/`.
5. Commit, push to `main`. Cloudflare rebuilds in ~30 seconds.

Total time per submission: under two minutes.

## What "done" looks like for v1

- One Hugo project that builds clean with no warnings.
- `data/sites.yaml` contains Littenstraße 79 as the first entry plus three plausible placeholder entries with realistic Berlin addresses and start dates.
- Single template renders a clean, ranked, mobile-friendly leaderboard with live counters.
- Total page weight under 50KB (excluding any photos).
- README explains how to add a new entry in five lines.

## What to avoid

- Don't add a build step beyond Hugo itself (no Tailwind compilation, no PostCSS, no Webpack).
- Don't import any npm packages.
- Don't add Google Analytics, Plausible, or any tracker. The site is not measured.
- Don't add a footer with credits, copyright, or "built with Hugo."
- Don't add an explanation of what a Geisterbaustelle is. If the visitor doesn't get it from the leaderboard alone, the explanation won't help.
- Don't make any entry's tone snarkier than the median. The deadpan is the joke; explicit jokes drain it.

## Tone for any text Codex writes for this site

German. Formal. Dry. Sentence-length short. No exclamation marks. No emoji except the medal characters in the ranking. No "wir" — the site has no editorial voice. Information presented as if from a municipal register.

Examples of acceptable phrasing:
- "Absperrung dokumentiert seit April 2019."
- "Gegenüber dem Landgericht Berlin II."
- "Eine bessere Baustelle gefunden?"

Examples of phrasing to avoid:
- "Schau dir diese verrückte Baustelle an!" (too informal, too eager)
- "Berlin's wildest abandoned sites!" (English, breathless)
- "Wir sammeln Baustellen, die..." (introduces a "we" that shouldn't exist)