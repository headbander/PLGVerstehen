# README.md - Professionelle Lerngemeinschaften Website

Diese interaktive Website zum Thema "Professionelle Lerngemeinschaften" (PLG) bietet umfassende Informationen, interaktive Elemente und einen integrierten Podcast zur Unterstützung von Schulentwicklungsprozessen.

## Funktionen

- **Responsive Design**: Optimiert für Desktop, Tablet und Smartphone
- **Interaktive Elemente**: Quiz, Tabs, Flip-Cards, Radar-Chart, Timeline, FAQ
- **Audio-Integration**: Podcast mit Kapitelmarkern zu zentralen PLG-Themen
- **Selbstreflexionstools**: Interaktive Slider und Selbsttest mit Auswertung

## Dateien und Struktur

- `index.html`: Hauptdatei mit der gesamten Webseitenstruktur
- `css/styles.css`: Alle Stildefinitionen für Layout und Design
- `js/`: JavaScript-Dateien für interaktive Funktionen
  - `main.js`: Hauptskript für Navigation, Tabs, Accordion, etc.
  - `quiz.js`: Funktionalität für den PLG-Selbsttest
  - `audio-player.js`: Anpassbarer Audio-Player für den Podcast
- `audio/`: Verzeichnis für Audiodateien (Podcast)
- `images/`: Verzeichnis für Bilder und Icons
- `podcast_skript.md`: Vollständiges Skript für den 10-minütigen Podcast

## Installation und Hosting

1. Laden Sie alle Dateien auf Ihren GitHub-Account hoch
2. Aktivieren Sie GitHub Pages für das Repository
3. Die Website ist dann unter `https://[ihr-username].github.io/[repository-name]/` verfügbar

## Podcast-Integration

Das Podcast-Skript ist in der Datei `podcast_skript.md` enthalten. Um den Podcast vollständig zu integrieren:

1. Nehmen Sie den Podcast basierend auf dem Skript auf
2. Speichern Sie die Audiodateien im MP3-Format im Verzeichnis `audio/`
3. Benennen Sie die Dateien entsprechend den Verweisen in der HTML-Datei:
   - `plg-einfuehrung.mp3`: Kurze Einführung (Hero-Bereich)
   - `plg-definition.mp3`: Ausführliche Definition und Konzept
   - `plg-implementierung.mp3`: Tipps zur Implementierung

## Anpassung

Die Website kann leicht angepasst werden:

- Ändern Sie Farben und Design über CSS-Variablen in `styles.css`
- Fügen Sie weitere Inhalte in der `index.html` hinzu
- Erweitern Sie den Quiz mit zusätzlichen Fragen in `quiz.js`
- Passen Sie die Radar-Chart-Darstellung in `main.js` an

## Barrierefreiheit

Die Website wurde mit Fokus auf Barrierefreiheit entwickelt:

- Semantisches HTML5 mit korrekter Überschriftenhierarchie
- ARIA-Attribute für bessere Screenreader-Unterstützung
- Ausreichende Farbkontraste
- Tastaturnavigation für alle interaktiven Elemente

## Lizenz

Diese Website wurde für Bildungszwecke erstellt und kann frei verwendet werden.

---

Erstellt für die Einführung professioneller Lerngemeinschaften an Schulen, 2025.
