# Ordnerstruktur

## Dokumentation
Dokumentationen werden im Ordner `/docs/` gespeichert.

Folgende Dateien müssen dabei vorhanden sein:
* [CODEOWNERS](CODEOWNERS)
* [FOLDERSTRUCTURE.md](FOLDERSTRUCTURE.md)
* [STYLEGUIDE.md](STYLEGUIDE.md)

#### _CODEOWNERS_
Diese Datei legt fest, welche Person(en) oder 
welches Team für die Kontrolle von PULL-Requests zuständig ist.

#### _FOLDERSTRUCTURE.md_
Ist diese geöffnete Datei, die exakt die Ordnerstruktur des Projekts beschreibt.
Unter anderem wird hier definiert, welche Dateitypen in welchem Ordner gespeichert werden,
sowie welche Dateien und Ordner welche Funktionen haben.

#### _STYLEGUIDE.md_
Diese Datei enthält den Styleguide für das Projekt.
Hier werden die Regeln für die Formatierung und Strukturierung von Code und Dokumentationen festgelegt.

---

## Distribution
Distributionen werden im Ordner `/dist/` gespeichert.
Distributionen werden automatisch erstellt und dürfen nicht manuell bearbeitet werden.

---

## Skripte
Besondere Skripte werden im Ordner `/scripts/` gespeichert.

Folgende Ordner sind anzulegen:
* `/scripts/generator/`
* `/scripts/run/`

### Generatoren
Generatoren werden im Ordner `/scripts/generator/` gespeichert.
Das sind Skripte, die automatisch andere Dateien generieren und beim **Build**-Prozess angestoßen werden.
Dateien erhalten den Zusatz `.gen` vor der Dateiendung.

### Ausführungsskripte
Ausführungsskripte werden im Ordner `/scripts/run/` gespeichert.
Diese Skripte werden zur Ausführung von Funktionen mit Beispieldaten für Beispielausgaben benötigt und können manuell gestartet werden.
Dateien erhalten den Zusatz `.run` vor der Dateiendung.

---

## Öffentliche, statische Dateien
Öffentliche Dateien werden im Ordner `/public/` gespeichert.
Folgende Ordner sind anzulegen:
* `/public/css/`
* `/public/js/`
* `/public/img/`
* `/public/fonts/`

---

## Quellcode
Quellcode werden im Ordner `/src/` gespeichert.

### Klassen
Klassen werden im Ordner `/src/classes/` gespeichert.
Dateien mit Klassen erhalten den Zusatz `.class` vor der Dateiendung.

**Beispiel:**
```text
/src/classes/benutzer.class.ts
```

## Daten und Datenstrukturen
Feste Datensätze, z. B. JSON-Dateien und Konstanten, werden im Ordner `/src/data` gespeichert.

### Konfiguration
Konfigurationsdateien werden im Unterordner `config` in `/src/data` gespeichert.

**Beispiel:**
```text
data/config.json
```

### Konstanten
Echte Konstanten werden im Unterordner `constants` in `/src/data` gespeichert.

### Sprachen
Sprachdateien werden im Unterordner `i18n` in `/src/data` gespeichert unter der Verwendung des ISO 639-1 Codes als Dateinamen.

**Beispiel:**
```text
/src/data/i18n/de.json
```

## Funktionen
Funktionen, die direkt das Modul betreffen und exportiert werden sollen, werden im Ordner `/src/functions` gespeichert.

### Vorlagen
Vorlagen werden im Unterordner `templates` in `src/data` gespeichert.
Dateien mit Vorlagen (Templates) erhalten den Zusatz `.tpl` vor der Dateiendung.

---

## Testskripte
Testskripte werden im Ordner `/tests/` gespeichert.
Dateien mit Tests erhalten den Zusatz `.test` vor der Dateiendung `.js`.

**Beispiel:**
```text
/tests/employee.test.ts
```