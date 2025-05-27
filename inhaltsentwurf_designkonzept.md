# Inhaltsentwurf und Designkonzept für die PLG-Homepage

## Seitenstruktur

### 1. Startseite
- **Hero-Bereich**: Prägnante Definition von PLGs mit Call-to-Action
- **Einführungsvideo/Podcast-Player**: Kurze Audioeinführung (1-2 Minuten)
- **Überblick**: Die 5 Kriterien und 2 Leitwerte als interaktive Grafik
- **Testimonials**: Kurze Erfahrungsberichte von Lehrkräften

### 2. Was sind PLGs?
- **Definition und Ursprung**
- **Interaktive Infografik**: Visualisierung der Kernelemente
- **Abgrenzung zu anderen Kooperationsformen**
- **Podcast-Einbettung**: Ausführliche Erklärung (5-7 Minuten)

### 3. Die 5 Kriterien
- **Interaktive Tabs/Akkordeon** für jedes Kriterium:
  1. Reflektierender Dialog
  2. De-Privatisierung der Unterrichtspraxis
  3. Fokus auf Lernen statt auf Lehren
  4. Zusammenarbeit
  5. Gemeinsame handlungsleitende Ziele
- **Praxisbeispiele** zu jedem Kriterium
- **Interaktive Checkliste** zur Selbsteinschätzung

### 4. Die 2 Leitwerte
- **Fehlertoleranz**: Erklärung, Beispiele, Reflexionsfragen
- **Hilfekultur**: Erklärung, Beispiele, Reflexionsfragen
- **Interaktives Element**: "Wie steht es um Ihre Schulkultur?" (Selbsttest)

### 5. PLG-Selbsttest
- **Interaktiver Quiz**: "Wie weit ist Ihre Arbeitsgruppe auf dem Weg zur PLG?"
- **Auswertung** mit personalisierten Empfehlungen
- **Downloadbare Materialien** für die Weiterarbeit

### 6. Implementierung
- **Schritt-für-Schritt-Anleitung** zur Etablierung einer PLG
- **Interaktiver Zeitstrahl** mit typischen Entwicklungsphasen
- **FAQ-Bereich** mit häufigen Fragen und Antworten
- **Podcast-Einbettung**: Tipps zur Implementierung (3-5 Minuten)

### 7. Ressourcen
- **Downloadbereich** für Arbeitsblätter und Checklisten
- **Literaturempfehlungen**
- **Weiterführende Links**
- **Vollständiger Podcast** zum Download

## Designkonzept

### Farbschema
- **Hauptfarbe**: #3498db (Blau) - Professionalität, Vertrauen
- **Akzentfarbe 1**: #27ae60 (Grün) - Wachstum, Entwicklung
- **Akzentfarbe 2**: #f39c12 (Orange) - Kreativität, Energie
- **Neutrale Farben**: Weiß, Hellgrau, Dunkelgrau für Text und Hintergründe

### Typografie
- **Überschriften**: Montserrat (sans-serif), bold
- **Fließtext**: Open Sans (sans-serif), regular
- **Hervorhebungen**: Open Sans, semibold oder italic

### Designelemente
- **Icons**: Einfache, moderne Line-Icons für die Visualisierung der Konzepte
- **Illustrationen**: Abstrakte, professionelle Grafiken zur Veranschaulichung
- **Fotos**: Authentische Bilder aus dem Schulalltag (falls verfügbar)
- **Whitespace**: Großzügige Verwendung von Weißraum für klare Strukturierung

### Interaktive Elemente

#### 1. PLG-Radar-Chart
- Interaktive Visualisierung der 5 Kriterien
- Nutzer können eigene Einschätzung vornehmen
- Vergleich mit Durchschnittswerten möglich

#### 2. Flip-Cards für Praxisbeispiele
- Vorderseite: Kurze Beschreibung des Beispiels
- Rückseite: Detaillierte Erklärung und Umsetzungstipps

#### 3. Interaktiver Selbsttest
- Multiple-Choice-Fragen zu den PLG-Kriterien
- Fortschrittsanzeige während des Tests
- Personalisierte Auswertung mit Empfehlungen

#### 4. Akkordeon-FAQ
- Aufklappbare Fragen und Antworten
- Kategorisiert nach Themenbereichen
- Suchfunktion für schnellen Zugriff

#### 5. Podcast-Player
- Kapitelmarker für gezielten Zugriff
- Playback-Geschwindigkeit einstellbar
- Transkript ein-/ausblendbar

### Responsive Design
- **Desktop**: Volle Funktionalität, horizontale Navigation
- **Tablet**: Angepasstes Layout, vertikale Navigation bei Bedarf
- **Smartphone**: Vereinfachte Darstellung, Hamburger-Menü, optimierte Touch-Elemente

## Technische Umsetzung

### HTML-Struktur
- Semantisches HTML5 mit korrekter Verwendung von Überschriften
- Barrierefreie Strukturierung mit ARIA-Attributen
- Modularer Aufbau für einfache Wartung

### CSS-Framework
- Verwendung von CSS Grid und Flexbox für das Layout
- CSS-Variablen für konsistentes Farbschema
- Responsive Breakpoints für verschiedene Gerätetypen

### JavaScript-Funktionalitäten
- Vanilla JavaScript für interaktive Elemente
- Modularer Code für bessere Wartbarkeit
- Lokale Speicherung von Testergebnissen (localStorage)

### Podcast-Integration
- HTML5 Audio-API für den Player
- JSON-Datei für Kapitelmarker und Metadaten
- Fallback für nicht unterstützte Browser

### Performance-Optimierung
- Lazy Loading für Bilder und nicht-kritische Ressourcen
- Minifizierung von CSS und JavaScript
- Optimierte Bildformate (WebP mit Fallbacks)

## Besondere Features

### 1. Persönlicher PLG-Entwicklungsplan
- Nach Abschluss des Selbsttests wird ein individueller Entwicklungsplan generiert
- Speicherbar im Browser oder als PDF downloadbar

### 2. Interaktive Zeitleiste
- Visualisierung des typischen Entwicklungsprozesses einer PLG
- Klickbare Elemente mit detaillierten Informationen zu jeder Phase

### 3. Kollaboratives Element
- Möglichkeit, anonymisierte Testergebnisse mit Kolleg*innen zu teilen
- QR-Code-Generator für einfaches Teilen von Ressourcen
