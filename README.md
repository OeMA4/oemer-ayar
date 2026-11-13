# oemer-ayar

Persönliche Website / Online-Profil von Ömer Ayar – [oemer-ayar.de](https://oemer-ayar.de).
Gebaut mit [Astro](https://astro.build), ausgeliefert als statische Seite.

## Entwicklung

```bash
npm install
npm run dev      # lokaler Dev-Server mit Live-Reload
npm run build    # statische Seite nach dist/ bauen
npm run preview  # gebaute Seite lokal ansehen
```

## Inhalte ändern

Alle Texte (Deutsch und Englisch) stehen in `src/data/content.ts`:
Projekte, Tech Stack, Werdegang, Referenzen, Kontaktlinks.
Ein neues Projekt ist ein neuer Eintrag in `projects.items`.

- Verfügbarkeits-Hinweis im Hero: `site.available`
- Farben und Typografie: `src/styles/global.css` (Variablen ganz oben)
- Bilder: `src/assets/` (werden beim Build automatisch verkleinert und nach WebP konvertiert)

## Struktur

```
src/
  data/content.ts      Inhalte, zweisprachig
  components/          ein Baustein je Abschnitt
  layouts/Base.astro   <head>, SEO, Skripte
  pages/index.astro    Deutsch  →  /
  pages/en/index.astro Englisch →  /en/
  styles/global.css    Design
public/                Dateien, die unverändert ausgeliefert werden
```

## Deployment

`npm run build` erzeugt den Ordner `dist/` mit der fertigen Seite
(`index.html` liegt direkt darin).

Bei jedem Push nach `main` baut die GitHub Action `.github/workflows/deploy.yml`
die Seite und schreibt den Inhalt von `dist/` in den Branch **`live`**.
Der Webserver (Plesk) muss diesen Branch ausliefern – nicht `main`,
denn dort liegt nur der Quellcode ohne `index.html`.
