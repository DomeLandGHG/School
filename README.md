# BNJS — Anleitung für die Webseite

Zweck
- Kurz: Diese Anleitung hilft beim Erstellen einer einfachen, datenschutzfreundlichen und ansprechenden Website für die deutsche Partei BNJS (Programm, Mitmachen, Info).

Zielgruppe
- Schüler & Studierende, junge Berufstätige, Pendler, technisch Interessierte.

Seitenstruktur (empfohlen)
- Startseite (Hero, 3 Kernforderungen, CTA „Mitmachen“)
- Über uns (Mission, Werte, Team)
- Programm (Kernforderungen, Visionen, Details)
- Mitmachen (Mitglied werden, Aktionen, Kontaktformular)
- Termine & Events (kalenderartig)
- Medien (Presse, Social Media, Downloads: Pressematerial, Logo)
- Impressum & Datenschutz

Inhalte pro Seite (Copy-Vorlagen auf Deutsch)
- Startseite — Hero (kurz):
  "BNJS — Digital. Fair. Voran. Für schnelles Internet, moderne Bildung und gerechte Regeln. Mach mit!"
- 3 Kernforderungen (Kurzzeilen):
  1. "Schnelles Internet für alle — Stadt & Land verbunden."
  2. "Moderne Schulen & digitale Bildung für jede:n."
  3. "Faire, sichere Regeln — Fortschritt mit Verantwortung."
- Über uns — 1‑Absatz:  
  "BNJS steht für eine zukunftsorientierte Politik: Wir verbinden technisches Know‑how mit sozialer Verantwortung. Unser Ziel ist eine digitale, faire und sichere Gesellschaft." 
- Programm — Visionen (Kurzformen, direkt einfügbar):
  - Technik: Fortschritt — "Wir nutzen Technik, um Alltagsprobleme zu lösen, Bildung, Arbeit und Gesundheit gerechter und effizienter zu gestalten."
  - Öffentliche Verkehrsmittel — "Verlässliche, günstige und vernetzte Verkehrsmittel, die Stadt und Land nachhaltig verbinden."
  - Sicherheit — "Mehr Sicherheit durch Prävention und moderne Technik, ohne Freiheitsrechte unnötig einzuschränken."
  - Gerechtigkeit — "Chancengleichheit durch Zugang zu Bildung, Infrastruktur und wirtschaftlichen Möglichkeiten für alle."
  - Inflationsbremse — "Wirtschaftliche Stabilität durch verantwortungsvolle, zukunftsorientierte Finanzpolitik, die Kaufkraft schützt und Investitionen fördert."
- Mitmachen — Kurztext + CTA: "Unterstütze BNJS: Jetzt Mitglied werden oder beim nächsten Info‑Treffen vorbeischauen."

Design & Assets
- Logo: quadratisch + horizontale Variante. Formate: SVG (skalierbar), PNG 1200×1200 (für Social).
- Farbpalette (Beispiel): Blau (#0B62FF), Dunkelgrau (#222222), Weiß.
- Schrift: Sans‑Serif (z. B. Inter oder Open Sans)

SEO & Meta (Beispiel)
- Title (Startseite): "BNJS — Digital. Fair. Voran. | Partei für digitale Chancen"
- Meta description: "BNJS setzt sich für schnelles Internet, moderne Bildung und faire Regeln ein. Jetzt informieren und mitmachen."
- Open Graph (für Social Sharing):
  <meta property="og:title" content="BNJS — Digital. Fair. Voran." />
  <meta property="og:description" content="Für schnelles Internet, moderne Schulen und faire Regeln. Mach mit!" />
  <meta property="og:image" content="https://example.org/assets/og-image.png" />

Social‑Media‑Texte (Vorlagen)
- Instagram / Facebook Post (short):
  "BNJS startet: Für digitales Lernen, schnelles Internet und faire Regeln. Info‑Abend am [Datum]. Sei dabei! #DigitalZukunft #BNJS"
- Tweet / X (short):
  "BNJS will schnelles Internet für alle. Mehr Infos & Mitmachen: [Link] #BNJS"
- 30s Video Skript (Kurz):
  1. 0–5s: Logo + Slogan "BNJS — Digital. Fair. Voran."
  2. 5–20s: 3 Kernforderungen in kurzen Texteinblendungen
  3. 20–30s: Call to Action: "Mehr erfahren: [Link]"

Mitgliedergewinnung & CTAs
- Kurzer Pitch (20–30s): "Hi, wir sind BNJS. Wir machen Politik für digitale Chancen, moderne Bildung und faire Regeln. Wenn du das auch willst, komm zum Treffen am [Datum] oder trag dich kurz ein."
- Formularfelder empfohlen: Vorname, Nachname, E‑Mail, Wohnort, Interessensgebiet, Opt‑in Newsletter.
- Onboarding: automatisierte E‑Mail mit 3 Links (Willkommensseite, Terminübersicht, Social Media)

Rechtliches & Datenschutz
- Pflichtseiten: Impressum, Datenschutz (inkl. Kontakt, Verantwortliche, Zweck der Datenverarbeitung), Cookies (wenn Tracker eingesetzt werden).
- Empfehlung: Tracking nur mit Opt‑in; Privacy‑first (Matomo on‑premise oder keine Analytics).

Technische Hinweise & Deployment
- Minimalst-Setup: statische Seite (HTML/CSS/JS) — einfach zu hosten.
- Schnell lokal testen mit Python:

```bash
python -m http.server 8000
```

- Deployment: GitHub Pages (kostenlos) oder Netlify/Vercel (einfaches CI/CD).
- Dateien/Ordner: `/index.html`, `/about.html`, `/programm.html`, `/mitmachen.html`, `/assets/` (logo, images, css)

Beispiel: Basis‑`index.html`‑Hero (einfach)
```html
<header>
  <h1>BNJS — Digital. Fair. Voran.</h1>
  <p>Schnelles Internet, moderne Schulen, faire Regeln. Mach mit!</p>
  <a href="/mitmachen.html" class="btn">Mitmachen</a>
</header>
```

Barrierefreiheit & Performance
- Kontrast prüfen, alt‑Attribute für Bilder, semantische HTML‑Struktur.
- Bilder optimieren (WebP), SVG für Logos.

Analytics & Erfolgsmessung (privacy friendly)
- Metriken: Seitenaufrufe, Formulareinträge, Event‑Teilnahmen, Social Shares.
- Nutze einfache Ziele statt invasive Trackings.

Wie weiter / Contribution
- Inhalte anpassen: `programm.html` mit detaillierten Forderungen füllen.
- Grafiken in `/assets/` ablegen (SVG/PNG).
- Änderungen per PR auf GitHub — einfache Anleitung im Repo (branch→PR→Review).

Kontakt / Pressekontakt (Vorlage)
- E‑Mail: presse@bnjs.example
- Telefon (optional): +49 000 000000

To‑do / Quick Wins
- Homepage mit Hero & 3 Forderungen live setzen.
- Pressematerial (1‑seitiges PDF) erzeugen.
- Social‑Launch mit 30s Video und Info‑Event planen.

---

Wenn du willst, erstelle ich daraus direkt die Minimal‑HTML‑Dateien (`index.html`, `programm.html`, `mitmachen.html`) und einfache Social‑Grafiken. Soll ich loslegen?