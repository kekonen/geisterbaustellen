# geisterbaustellen.de

Satirische Live-Rangliste der ältesten offenen Baustellen Berlins. Single-Page-Site, deployt automatisch auf Push nach `main` (Cloudflare Pages, Hugo extended).

## Neuen Eintrag hinzufügen

1. Block an `data/sites.yaml` anhängen: `address`, optional `postcode`, `start_date` im ISO-Format (`YYYY-MM-DD`), optional `note`, optional `photo` (Dateiname).
2. Optionales Foto in `static/photos/` ablegen.
3. Committen, auf `main` pushen — Cloudflare baut in ca. 30 Sekunden neu.

## Lokal bauen

`hugo server` für Entwicklung, `hugo --minify` für den Produktions-Build (Ausgabe in `public/`).
