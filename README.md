# geisterbaustellen.de

Satirische Live-Rangliste der ältesten offenen Baustellen Berlins. Single-Page-Site, deployt automatisch auf Push nach `main` (Cloudflare Pages, Hugo extended).

## Neuen Eintrag hinzufügen

1. Markdown-Datei in `content/` anlegen (`<slug>.md` für Deutsch, `<slug>.en.md` für Englisch). Frontmatter: `title`, optional `postcode`, `start_date` im ISO-Format (`YYYY-MM-DD`), optional `note`, optional `photo` (Dateiname), `lat`, `lon`.
2. Optionales Foto in `static/photos/` ablegen.
3. Committen, auf `main` pushen — Cloudflare baut in ca. 30 Sekunden neu.

## Lokal bauen

`hugo server` für Entwicklung, `hugo --minify` für den Produktions-Build (Ausgabe in `public/`).

## Petitions-Zähler (Cloudflare Pages Functions + KV)

Jeder Eintrag hat eine Petition (`/api/petition/<slug>`). Gespeichert wird in einem KV-Namespace mit dem Binding-Namen `PETITIONS`.

Einmaliges Setup:

1. KV-Namespace anlegen: `npx wrangler kv namespace create PETITIONS` (oder im Cloudflare-Dashboard).
2. Die zurückgegebene ID in `wrangler.toml` unter `[[kv_namespaces]] id = "…"` eintragen.
3. Im Pages-Projekt unter *Settings → Functions → KV namespace bindings* das Binding `PETITIONS` auf denselben Namespace setzen (oder via `wrangler.toml` deployen).

Lokales Testen der Functions (statt `hugo server`): `hugo --minify && npx wrangler pages dev public`.
