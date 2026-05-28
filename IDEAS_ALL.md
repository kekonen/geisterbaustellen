# Geisterbaustellen.de — Idea Catalog

All ideas from this conversation, in the order they appeared. Brief notes for each so you can re-orient yourself later.

---

## Part 1 — What one person could do this week

**IFG request for Littenstraße 79.**
Via fragdenstaat.de, ask the Bezirksamt Mitte about the *Sondernutzungserlaubnis* — who holds it, when it expires, what the planned work is. The Bezirksamt is legally required to answer within four weeks.

**Street View history audit.**
Systematically go through Berlin's Google Street View captures from 2008–2024 and flag every fence appearing in multiple year-separated captures. The empirical foundation everything else lacks.

---

## Part 2 — What a small group could do

**"Berlins älteste Löcher" — crowdsourced map.**
Submission-based map layered over the official Geoportal data, sortable by Bezirk and age.

**"Geisterbaustelle des Monats" — Bluesky/Instagram account.**
Half-joking, fully serious. One photo, one address, one age count per month. Low-effort accountability journalism.

**Tactical Urbanism / Parklet conversion.**
Apply to convert a forgotten ghost site into a parklet, planter, or free library. Reframe from "civic failure" to "civic asset."

**Adopt-a-Fence Art.**
Paint Bauzaungitter with the Bezirk's blessing. Painted fence = visible fence = political attention.

---

## Part 3 — Policy proposals

**Escalating Sondernutzungsgebühren.**
Fees flat for the first 90 days, then double every quarter.

**Performance bonds.**
Forfeitable deposit for Sondernutzungen over 3 months.

**Enforced *Leitungskoordinierung*.**
Once a trench opens, every utility with maintenance need in the next 5 years must piggyback or wait.

**Mandatory QR-code transparency.**
Every barrier in public space must display a QR code with permit holder, expiry date, contact, reason.

---

## Part 4 — Provocative actions

### Cheeky but legal

**Birthday parties for fences.**
At one year of stillstand: cake, balloons, paper crown, local press invited.

**Obituaries column.**
Weekly newsletter / Instagram account publishing formal *Todesanzeigen* for overdue fences.

**Tourist-attraction reframe.**
Self-printed brown *Sehenswürdigkeiten*-style signs installed next to the oldest ghost sites.

**Micronation flag.**
*"Republik Littenstraße, gegründet 2022, Bevölkerung: 0."*

**Daily chalk tally.**
Every noon, someone updates a chalked tally next to the fence: *"Tag 1.547 ohne Fortschritt."*

### Closer to the gray zone

**"Genehmigt bis…" stickers.**
Senate house style, with the actual expiry date (obtained via IFG).

**Reverse occupation.**
Set up benches, planters, or a community garden inside the abandoned fence.

**The Maulwurf Award.**
Annual prize for the Bezirk with the longest-running Geisterbaustelle. Golden mole trophy, ceremony, Stadtrat invited (doesn't show), empty chair photographed.

### Genuinely provocative

**Crowdfunded Untätigkeitsklage.**
Neighbors pool money for a Fachanwalt für Verwaltungsrecht to file failure-to-act lawsuits against the Bezirksämter for not revoking expired *Sondernutzungserlaubnisse*.

**"Bürgermeister-Tour."**
Monthly walking tour for a journalist through the worst ghost sites *in the Bezirksbürgermeister's own district*.

**Counter-billing.**
With an economist's help, calculate market-rate sidewalk rent, send monthly invoice to the *Bauherr*, publish.

**Strategic fence removal.**
One fence, one Saturday morning. *Sachbeschädigung* but low-risk. Mentioned only — not recommended.

---

## Part 5 — Single-person, viral, white/gray zone, sticker to banner

### Websites

**Geisterbaustellen.berlin — slider site.**
One page. Drop a pin, the system fetches the oldest Street View capture, builds a before/after slider with auto-computed age.

**Bauzaun-Geburtstagskarte generator.**
Webpage that takes an address and date and produces a printable A5 birthday card you photograph at the fence.

### Stickers

**Single sticker in Senate house style.**
> *"Diese Baustelle wird Ihnen präsentiert von der Senatsverwaltung für Stadtentwicklung. Vielen Dank für Ihre Geduld seit März 2022."*

**Wikipedia-style / Berlin *Gedenktafel* plaques.**
Laminated A5 in the exact style of the real cobalt-blue Berlin Gedenktafeln. *"Geisterbaustelle Littenstraße 79. Errichtet März 2022. Erhalten durch: kollektives Vergessen."*

---

## Part 6 — Lower entry barrier, viral vehicles

**Google Maps reviews.**
Add the Geisterbaustelle as a Google Maps place under category "Tourist attraction." Fill with reviews.

**Single-format posts from your normal account.**
*"Tag 1.547. Littenstraße 79."* Posted from your normal account, no project branding, no consistency pressure.

**One perfect sticker PDF.**
Designed once, uploaded once, posted once. *"★★★★★ Diese Baustelle. Bewertet auf Google Maps."* Others print and stick.

**Berliner Geisterbaustellen Bingo (image version).**
5x5 grid of typical features, posted once as an image. Spreads in WhatsApp groups.

---

## Part 7 — If a website, then one of these

**istdiebaustelleinderlittenstrasse79nochda.de.**
One page. Huge: **JA.** Underneath, smaller: *Seit 2.847 Tagen.* Counter ticks up daily. Eight lines of HTML.

**Static "live cam."**
`littenstrasse79.live` — a static photo, small red "● LIVE" indicator, timestamp *"aktualisiert vor 4 Sekunden."* Nothing ever changes.

**Wrong-direction countdown.**
*"Diese Baustelle ist 7 Jahre, 2 Monate, 14 Tage alt. Geplantes Bauende: unbekannt."*

---

## Part 8 — The static leaderboard site (main page)

**Berlins älteste offene Baustellen.**
Ranked list, medal emojis for top 3. Address, live age counter (years/months/days), optional note, optional photo. *"Eine bessere Baustelle gefunden?"* → mailto.

**Architecture:**
- Static HTML file or Hugo
- Submissions via email, manually added
- Cloudflare Pages (free)
- `geisterbaustellen.de` via Namecheap, Cloudflare Registrar, or INWX
- Cloudflare Email Routing for `kontakt@geisterbaustellen.de`

**OpenGraph card factory.**
Per entry, generate a square share card: big address, age counter, one line of text. When shared on Twitter/Bluesky/WhatsApp, the card itself is the preview.

---

## Part 9 — Subdomain family and standalone single-pages

**istdiebaustellefertig.de.**
One page: **NEIN.**

**baustellen-bingo.de.**
Real bingo card on a webpage with a "Karte mischen" button.

**baustelle.live.**
"Live cam" as static photo.

**zähler.geisterbaustellen.de.**
The main-site counter, full-screen, for one fence. *"DIESE BAUSTELLE IST 2.609 TAGE ALT."*

**schaden.geisterbaustellen.de.**
Live ticking estimated economic damage.

---

## Part 10 — Birthday calendar and postcards

**Geburtstagskalender.**
Subpage listing upcoming "birthdays" of every fence. Includes `.ics` download so you can subscribe in a real calendar app.

**Bot @geburtstagsbaustelle.**
Bluesky/Mastodon bot, posts daily on fence birthdays.

**Reisepass für Baustellen.**
Print-at-home PDF in the exact style of a German passport. Fields: *Errichtet am, Erste Sichtung, Erkennungsmerkmale, Lebenserwartung.*

---

## Part 11 — Postcards

**Vintage greeting postcards for download.**
*"Grüße aus der Littenstraße"* — 70s-pastel border, fence in soft focus. Six designs.

**Selbstausdruckende Urkunde.**
Form on the site: enter address and start date, generates a PDF in *Urkunde* style (gold border, blackletter heading, fake official seal). Print, tape to the actual fence, photograph.

**Petition gegen Beendigung.**
Online petition, formal-looking, demanding the *preservation* of a Baustelle as cultural heritage.

---

## Part 12 — Fictional recurring people

**Der Bauleiter, der nie kam.**
Recurring character. Police-style *Vermisstenanzeige*, phone number listed as *"nicht vergeben."*

**Frau Schmidt vom Bezirksamt.**
Mythical caseworker. Office hours: *"nach Vereinbarung — Termine derzeit ausgebucht bis 2031."* Auto-responder at `frau.schmidt@geisterbaustellen.de`.

**Die anonyme Bauzaun-Witwe.**
SZ-Magazin-style profile pieces of supposed longtime neighbors.

---

## Part 13 — Specialized pseudo-expertise

**Baustellenkunde — Einführung.**
University course-catalog style. *"BA-Modul 47192: Berliner Baustellenkunde. Dozent: vakant."*

**Bestimmungsbuch.**
Field guide in bird-identification book style. *"Schrankenbaca berolinensis. Lebenserwartung in freier Wildbahn: 3–7 Jahre."*

**Sammlerkatalog.**
Bauzaungitter as collectibles. Rarity index, auction-house-style listings.

**Geologische Karte.**
Neighborhood map as a "geological survey" of construction-barrier strata over time.

---

## Part 14 — Time-play

**Live timeline.**
Vertical timeline of every "non-event" in a fence's life.

**Zukunftsprognose.**
*"Voraussichtliche Fertigstellung 2031 (Bezirksamt). Realistisch: 2047. Pessimistisch: niemals."*

**Historische Vorhersage.**
2019 Tagesspiegel quotes ("voraussichtliche Fertigstellung Sommer 2020") cut against the present.

**Zeitkapsel-Seite.**
Users leave "messages for the Baustelle of the future."

---

## Part 15 — Cross-media

**Spotify playlist *"Songs für lange Bauphasen."***
Real, curated. Eno, Satie, Element of Crime.

**Google Reviews crusade.**
Sober one-star reviews for the Bezirksämter themselves.

**Yelp for Berlin.**
A single review. *"Insgesamt zufrieden, aber zu viele Baustellen. Vier Sterne."*

**Berlin tour that only sees ghost sites.**
90-minute audio walking tour as MP3. The narrator consistently ignores all real landmarks.

---

## Part 16 — Cross-generational artifacts

**Schulbuch entry.**
A single page from a fictional Heimatkunde textbook. *"Diskussionsfragen: Was würdest du mit einer Baustelle machen, die nicht weitergebaut wird?"*

**Lonely Planet–style guide entry.**
One paragraph in Lonely Planet voice about Littenstraße 79.

**Coffee-table book.**
Mock pages from *"Berlin: A Study in Stillness."* Black-and-white photos with gelatin-silver-print captions.

**Soap opera summary.**
Telenovela *"Die Baustelle"* — episode summaries up to *Folge 847.*

---

## Part 17 — Lost-and-found family

**Fundbüro für Baustellen.**
BVG lost-and-found database style. *"Verloren gemeldet: 1 Bauleiter, zuletzt gesichtet 03/2019."*

**Vermisstenanzeige (supermarket-poster style).**
Print-at-home A4 PDF with handwritten plea and tear-off phone-number strips.

---

## Part 18 — Specific German cultural objects

**Tatort episode.**
ARD Mediathek–style page. *"Tatort: Die Baustelle. Spielzeit 88 Minuten, davon 84 Minuten Standbild."*

**Klingelschild.**
Printable Klingelschild PDF. *"Müller, Schneider, Bauleiter (nicht zuständig), Schmidt, Bezirksamt (in Bearbeitung)."*

**Tagesschau-Bauchbinde.**
Lower-third graphic in exact Tagesschau style. *"BERLIN — Baustelle Littenstraße seit 2.609 Tagen unverändert."*

**BVG-Aushang.**
A4 in yellow BVG passenger-info style. *"…kommt es weiterhin zu keinen Beeinträchtigungen."*

**ICE announcement.**
DB delay-display style. *"Die Baustelle Littenstraße 79 wird heute, wie an allen vorhergehenden Tagen seit 2019, voraussichtlich ohne Fortschritt verbleiben."*

---

## Part 19 — One image, devastating

**Vorher-Nachher.**
Two-panel image: Street View 2019 / 2026, both labeled. Identical.

**Architectural photography.**
One photo of Littenstraße shot in Iwan Baan / Hélène Binet style. *"Anonymous, Littenstraße 79, 2019–. Mixed media installation."*

**Family photo.**
Photo of the fence with a small inset of a stick-figure family illustration. *"Familie Bauzaun, 2019."*

**Snapshot album.**
A single page styled as a vintage photo album, four taped-on photos, handwritten captions. *"Frühling 2020 — die ersten Blümchen."*

---

## Part 20 — Genre-borrowing

**Immobilien-Exposé.**
Multi-page glossy PDF in Makler-Exposé style.

**Speisekarte-Klemmbrett.**
Berlin-bistro chalkboard against brick wall. *"Tagesgericht: Stillstand."*

**Book cover.**
Suhrkamp/Hanser style. Title: *"Die Baustelle."* Author: blank. *"Roman."*

**Klausuraufgabe.**
PDF in Realschule-math-exam style. *"Aufgabe 3 (6 Punkte): Berechnen Sie den hypothetischen Fortschritt pro Tag."*

**Verkehrsfunk script.**
Radio-script format. *"BERLIN INFORMATION 88,8 — Verkehr 14:47 Uhr."*

---

## Part 21 — Seasonal artifacts

**Adventskalender.**
Downloadable PDF, December 1–24. *"4. Dezember: Sie liegt immer noch im Schnee…"*

**Neujahrsansprache.**
Annually updated page in Bundeskanzler New-Year-address style.

**Oktoberfest special.**
*Maßkrug* coaster: *"Geisterbaustelle Littenstraße — seit 2019 gut gereift."*

**Sommerloch report.**
Spiegel Online–style article published every August. *"Im Sommerloch: Wir besuchen Berlins älteste Baustelle."*

---

## Part 22 — The one perfect sticker

**TÜV-Plakette.**
Round sticker in exact TÜV-inspection style. Center: **"NIE."**

---

## Part 23 — Formal documents with the position inverted

**Eingabe an den Petitionsausschuss.**
PDF in proper Berlin petition format, formally correct, demands *protection* of Littenstraße 79 rather than completion.

**Antrag auf Aufnahme in die Berliner Denkmalliste.**
6-page PDF in exact Denkmalschutz application format. Justification: lived Berlin administrative culture.

**Bürgerantrag zur Umbenennung.**
Application to the BVV Mitte to rename the stretch *Geisterbaustellenstraße.*

**Urkunde des Berliner Senats.**
Self-filling form, generates PDF in *Verdienstorden* style. Recipient: the fence itself.

**Einspruch gegen die Beendigung.**
Pre-drafted formal objection for the hypothetical day construction actually resumes. Argument: *Verstoß gegen den Vertrauensschutz.*

**Antrag auf Eintragung in die Welterbeliste der UNESCO.**
Dossier in real UNESCO format. Outstanding Universal Value statement, comparative analysis with Hadrian's Wall.

**Beschwerde nach dem Berliner IFG (inverted).**
Request asking why other Berlin streets have *not* had construction interruptions of over a year.

**Stiftungsurkunde der Stiftung Berliner Stillstand.**
Founding document under Berlin's Stiftungsgesetz. Stiftungsvermögen: €0.

**Volksinitiative *"Mein Berlin, meine Baustellen."***
Draft of a *Berliner Gesetz zum Schutz langjähriger Baustellen (BauStBeG).*

**Antrag auf Einbürgerung.**
Real Berlin naturalization application, filled out for the fence. Birthplace: Littenstraße 79.

---

## Part 24 — Actionable citizen tools

**Mein Berlin Mängelmeldung guide.**
Step-by-step instructions with pre-written text, 90 seconds to file. *Vorgangsnummer* counter on the site.

**Bürgermeister-Sprechstunde generator.**
Mailto generator: creates formal constituent inquiry to the Bezirksbürgermeister.

**FragDenStaat one-click button.**
Site link to a pre-filled IFG request.

**Bauzaun-Steckbrief.**
A5 PDF to fill out by hand at the fence. Fields: address, first sighting, Bagger state, Schrankenbaken upright, etc.

**Citizen-science Baustellen-Zählung.**
Once a year, *"Tag der Baustellenzählung,"* modeled on NABU's bird-counting day.

**Vor-Ort-Anzeige for laminating.**
A4 *"AMTLICHE FESTSTELLUNG"* from the fictional *"Anwohnerinitiative Berliner Baustellenkontrolle."* Zip-tied to the fence.

**Brief an den Bauherrn.**
Pre-drafted letter to the utility company that holds the permit.

---

## Part 25 — Formal documents that only live on the website

**Stellenausschreibung: Bauleiter (m/w/d) gesucht.**
Stepstone style. *"Anforderungen: Geduld. Ein leichter Hang zur Resignation ist von Vorteil."*

**Geschäftsbericht 2025.**
DAX shareholder-letter style. *"Mitarbeiterzahl: 0 (Vorjahr: 0)."*

**Speisekarte des Bezirksamtes.**
Public-sector cafeteria format. *"Sondernutzungsbescheid mit Reis — €4,80."*

**Wikipedia article: *"Geisterbaustelle (Berlin)."***
Pixel-perfect German Wikipedia style, with infobox, references, *Siehe auch.*

**Theater season program.**
*"Die Baustelle — Ein Stück in keinem Akt von Anonymus. Aufführungsdauer: seit 2019, durchgehend."*

**Plenarprotokoll excerpt.**
Bundestag protocol layout with fictional debate.

**ImmobilienScout listing (polished).**
*"Charmantes Berliner Baustellengrundstück, etabliert seit 2019."*

**Berliner Verfassung Art. 27a (new).**
Three paragraphs of mock constitutional law, properly typeset. *"Das Nähere regelt ein Gesetz."*

**Erbschein.**
Amtsgericht style. *"Ein Erbfall ist nicht eingetreten und wird voraussichtlich auch in absehbarer Zeit nicht eintreten."*

**Glückwunschkarte vom Regierenden Bürgermeister.**
In the exact format of the real city-administered jubilee letters. *"…wünschen Ihnen insbesondere keine voreilige Fertigstellung."*

---

## Part 26 — Interactive mini-pages

**Welche Baustelle bist du? Persönlichkeitstest.**
6-question BuzzFeed-style quiz, result: one of the fences from the leaderboard.

**Baustellen-Bingo (live).**
5x5 grid on the page, clickable cells, *"Karte mischen"* button. *Vollausschuss* requires actual walks.

**Wie alt ist sie wirklich? Schätzspiel.**
Photo of a random fence, guess the age, delta computed, highscore.

**Bagger oder Bauleiter?**
Telling active from ghost sites apart. *"4 von 10 erkannt — besser als das Bezirksamt."*

**Karte: dein Kiez, deine Baustellen.**
Leaflet + OpenStreetMap, clickable pins, submission button for your own pin.

**Countdown to average Baustellenfertigstellung.**
Pseudo-rigorous counter ticking up.

**Schreibe der Baustelle einen Brief.**
Form → public wall of short letters.

**Baustellen meme generator.**
Canvas API, three templates, two text lines, wordmark in the corner.

**Welcher Bauzaun bist du heute? Tageshoroskop.**
12 lines, written once, JS-randomized daily.

**Spot the Bagger.**
Where's-Wally-style illustration with one hidden Bagger.

**Welches Geräusch macht deine Baustelle?**
Five audio buttons. *"Stille (extended cut)"* — 30 seconds of silence.

**Petition mit einem Klick: *"Belassen wie es ist."***
One button, counter, your name on a list.

---

## Part 27 — UI pattern subversion

**Baustellen-CAPTCHA.**
*"Wählen Sie alle Bilder mit einer Baustelle aus."* Answer: all nine.

**Cookie banner.**
*"Diese Website verwendet Baustellen. Einige sind technisch notwendig…"* with toggle switches that do nothing.

**404 page.**
*"Diese Seite befindet sich in der Bauphase seit 2019."*

**Infinite loading animation.**
Status messages rotate: *"Anfrage wird bearbeitet… Zuständigkeit wird geklärt… Bitte warten Sie…"*

**Newsletter signup.**
*"Sie werden benachrichtigt, sobald sich etwas ändert."* (Nothing ever changes.)

**Terms of Service.**
*"§2 Die Baustelle verpflichtet sich, anwesend zu sein. Weitere Pflichten bestehen nicht."*

**Privacy policy.**
*"Welche Daten erheben wir? Wir erheben keine Daten. Wir warten nur."*

**Search function.**
Every query returns the same result: Littenstraße 79.

---

## Part 28 — What we'd been missing

**Riechprobe.**
Wine-tasting register applied to ghost-site smells.

**Night gallery.**
Photos at 3 AM, orange Schrankenbaken lights doing their work.

**Soundtrack loop.**
30-second loop of a Schrankenbaken light's mechanical clicker. Labeled *"Berlin, 24/7."*

**Tierwelt page.**
Nature-documentary register on the actual fauna of abandoned sites.

**Bauzaun dating field guide.**
Real specialist knowledge: distinguishing barrier generations by design.

**Micro-economy calculator.**
*"Berliner Bauzaungitter GmbH hat seit 2019 geschätzte €Z eingenommen."*

**Time-lapse GIF.**
Six photos of the same spot over five years, looped. Microscopic movement inside macroscopic stasis.

---

## Part 29 — Main recommendation

If the whole idea is reduced to six artifacts that together form a *world*:

1. **The leaderboard** (main page)
2. **Wikipedia-style article** for Littenstraße 79
3. **Frau Schmidt and the missing Bauleiter** as recurring characters
4. **Bestimmungsbuch** (printable)
5. **OpenGraph card factory** (the viral mechanism)
6. **Bot account** with daily birthdays

Everything else is bonus material you spin up when you feel like it.

---

## Concrete first steps

If the question is what to actually build next, in order:

1. **Main page (leaderboard) on geisterbaustellen.de** via Cloudflare Pages
2. **CAPTCHA page** as the second subpage — the most original single idea
3. **404 page and cookie banner** — improve the whole site at once
4. **Petition mit einem Klick** — zero-friction participation
5. **Stellenausschreibung** — the strongest standalone document in the bunch
6. **Vorher-Nachher image** — the strongest viral single artifact

That gives you a site in two or three evenings that hits all the important registers.