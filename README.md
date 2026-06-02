# geisterbaustellen.de

Satirische Live-Rangliste der ältesten offenen Baustellen Berlins. Hugo, Cloudflare Pages, Vanilla JS.

## Neuen Eintrag hinzufügen

1. Markdown-Datei in `content/` anlegen (`<slug>.md` für Deutsch, `<slug>.en.md` für Englisch).
2. Frontmatter pflegen: `title`, `postcode`, `start_date`, `source_url`, `record_note`; optional `ended_date`, `ended_label`, `assembly_date`, `note`, `photo`, `lat`, `lon`.
3. `note` ist die kurze trockene Pointe unter der Adresse. `record_note` ist die Aktenlage: Foto, Quelle, belegtes Datum, angesetzte Annahme.
4. Optionales Foto in `static/photos/` ablegen.
5. Committen, auf `main` pushen.
6. Cloudflare baut neu.

## Lokal bauen

`hugo server` für Entwicklung. `hugo --minify` für den Produktions-Build.

## Petitions-Zähler

Pages Functions unter `/api/petition/<slug>` verwenden das KV-Binding `PETITIONS`.

Einmalig:

1. `npx wrangler kv namespace create PETITIONS`
2. Die ID in `wrangler.toml` eintragen.
3. Im Pages-Projekt das KV-Binding `PETITIONS` setzen.

Lokal mit Functions: `hugo --minify && npx wrangler pages dev public`.

<3
