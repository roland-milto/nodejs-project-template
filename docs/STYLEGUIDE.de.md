# Style Guide für Java- und TypeScript-Projekte

## Ziel
Dieser Leitfaden definiert die verbindlichen Regeln für Code, Struktur, Benennung und Kommentare im Projekt.

## Grundregeln

### Sprache
Die Sprache für Variablen, Funktionen, Objekte, Klassen, Typen und Kommentare ist **Deutsch**.
Englische Begriffe sind zu vermeiden.

**Ausnahme:**
- Ordnernamen
- fachlich etablierte Begriffe, wenn keine sinnvolle deutsche Alternative existiert
  * CSS
  * HTML
  * JavaScript
  * JSON
  * TypeScript
  * XML
  * … und weitere
- spezielle Dateien, bei denen ein besonderer Name erwartet wird
  * config.json
  * index.html|js|ts
  * package.json
  * README.md
  * script.js
  * style.css
  * tsconfig.json
  * … und weitere

**Beispiele:**
```typescript
// Erwünscht.
const fehlerZaehler = 0;
function ladeDaten() {}
```

```typescript
// Verboten.
const errorCounter = 0;
function loadData() {}
```

### Skriptsprache
Es ist immer **TypeScript** mit der Dateiendung `.ts` zu verwenden.
TypeScript wird durch geeignete Tools in JavaScript (in den Ordner `dist`) übersetzt.

Für Tests ist JavaScript mit der Dateiendung `.js` erforderlich.
Die Dateiendung `.mjs` ist verboten, stattdessen ist der Dateityp `"type": "module"` in der `package.json` zu verwenden.

### README.md
Es wird immer eine **deutschsprachige** `README.md` angegeben, die das Projekt, die verwendeten Technologien und die Verwendung selbst beschreibt.

---

## Ordnerstruktur (Frontend/Backend)
Jedes Projekt hat eine festgelegte Ordnerstruktur.
Die Ordner sind je nach Vorhandensein zu wählen.
Details zu den einzelnen Ordnern finden sich in der [FOLDERSTRUCTURE.de.md](FOLDERSTRUCTURE.de.md) Datei.

* Projektname
  - **dist/**
  - **docs/**
    - _CODEOWNERS_
    - _FOLDERSTRUCTURE.de.md_
    - _STYLEGUIDE.de.md_
  - **public/**
    - css/
    - fonts/
    - img/
    - js/
  - **scripts/**
    - generate/
    - run/
  - **src/**
    - classes/
    - data/
      - config/
      - constants/
      - i18n/
      - templates/
    - events/
    - functions/
    - services/
    - types/
    - ui/
      - pages/
      - partial/
      - templates/
  - **tests/**
  - _.env_
  - _.gitignore_
  - _.npmignore_
  - _CHANGELOG.md_
  - _CONTRIBUTING.md_
  - _package.json_
  - _README.md_
  - _tsconfig.json_

<br>
Für das Backend wird folgende zusätzliche Struktur in `src/` verlangt:

* src/
  * controllers/
  * middlewares/
  * models/
  * routes/


<br>
Für das Frontend wird folgende zusätzliche Struktur in `src/` verlangt:

* src/
  * components/
    - pages/
    - partial/
  * hooks/

---


## Dateistruktur und Formatierung

### Eine Einheit pro Datei
Für jede Funktion, Klasse, jeden Typ und jedes Interface ist eine eigene Datei anzulegen.

**Ausnahme:**
Interne Funktionen, die ausschließlich in **einer** anderen Funktion verwendet werden, dürfen in derselben Datei bleiben.

**Beispiel:**
```typescript
function berechneSumme() {
  function pruefeWert() {}
}
```

### Einrückung
Die Einrückung beträgt **zwei Leerzeichen**.
Tabs sind nicht zulässig.

**Beispiel:**
```typescript
if (true) {
  if (false) {
    console.log("falsch");
  }
  else {
    console.log("wahr");
  }
}
```

Bei jedem neuen verschachtelten Block oder blockähnlichen Konstrukt ist jeweils eine weitere Einrückung vorzunehmen.

### Kontrollstrukturen
Alle Kontrollstrukturen erhalten geschweifte Klammern, auch bei einzeiligen Anweisungen.
Die schließende geschweifte Klammer befindet sich immer in einer neuen Zeile.
Bei mehr als zwei Ausdrücken in einer Kontrollstruktur ist die öffnende geschweifte Klammer in eine neue Zeile vorzunehmen.

**Beispiel:**
```typescript
if (istGueltig) {
  verarbeiteDaten();
}

if (istGueltig)
{
  verarbeiteDaten2();
  verarbeiteDaten3();
}
```

### Arrays und Objekte
Arrays und Objekte werden als Block geschrieben.

**Beispiel:**
```typescript
const zahlen = [
  0,
  1,
  2,
];
```

Jeder Wert, auch der letzte, endet mit einem Komma.

Arrays und Objekte dürfen nicht direkt als Funktionsargumente übergeben werden.

**Beispiel:**
```typescript
// Nicht erlaubt.
verarbeiteWerte(
  erstWert, [
    0,
    1,
    2,
  ], drittWert,
);
```

Objekt-Eigenschaften werden im Struct-Style ohne Anführungszeichen geschrieben.

**Beispiel:**
```typescript
const daten = {
  width: 42,
  maxWidth: 43,
};
```

```typescript
const falsch = {
  "width": 42,
};
```

### Zeilenlänge
Die maximale Zeilenlänge beträgt **100 Zeichen**.

Wenn ein Ausdruck zu lang wird, soll er logisch umgebrochen werden.

**Beispiel:**
```typescript
const aktuelleSumme =
  berechneWert(
    wert1,
    wert2,
  ) + 7;

// Das ist falsch:
aktuelleSumme = kalkuliere(var1 + var2) /
  3.0;
```

### Funktionsargumente
Funktionsargumente werden bei Zeilenumbruch mit **4 Leerzeichen** eingerückt.

**Beispiel:**
```typescript
druckeText(
    "Ein sehr langer Text",
    "mit weiteren Parametern",
  );
```

### Ein Ausdruck pro Zeile
Pro Zeile steht nur ein Ausdruck.

**Beispiel:**
```typescript
const a = 1;
const b = 2;
```

```typescript
const a = 1, b = 2; // Nicht gewünscht
```

### Semikolons
Jeder Ausdruck endet mit einem Semikolon.

**Beispiel:**
```typescript
const michael = 42;
const fabian = 1337;
```

### Variablen
Es wird nur **eine** Deklaration von Variablen pro Zeile verwendet.

```typescript
// Falsch:
let a = 1, b = 2;

// Richtig:
let c = 1;
let d = 2;
```

---

## Literale

### String-Literale
Zeichenketten werden grundsätzlich mit doppelten Anführungszeichen geschrieben.
Alternativ sind Backticks erlaubt, wenn sie sinnvoller sind.

**Beispiel:**
```typescript
const name = "Max";
const text = `Hallo ${name}`;
```

### Nummer-Literale
Zahlen werden klar und lesbar geschrieben.
Bei Bedarf können Unterstriche zur besseren Lesbarkeit verwendet werden, wenn dies die Lesbarkeit verbessert.

**Beispiel:**
```typescript
const million = 1_000_000;
```

---

## Funktionen

### Deklaration
Eigenständige Funktionen werden mit `function` definiert.
Arrow-Funktionen sind nur als anonyme Funktionen zulässig.

**Beispiel:**
```typescript
function ladeBenutzer() {
  return [];
}

// Arrow-Funktion als anonyme Funktion.
setTimeout(() => {
  console.log("Hi");
}, 1000);

// Nicht erwünscht.
const verarbeite = () => {
  return true;
};
```

### `arguments`
Auf `arguments` als Eigenschaft wird verzichtet.
Stattdessen ist der Spread-Operator `...` zu verwenden.

**Beispiel:**
```typescript
function addiere(...werte: number[]) {
  return werte.reduce((summe, wert) => summe + wert, 0);
}
```

### Interne Hilfsfunktionen
Interne Funktionen, die nur innerhalb einer anderen Funktion verwendet werden, werden mit einem führenden Unterstrich gekennzeichnet.

**Beispiel:**
```typescript
function verarbeiteDaten() {
  function _pruefeDaten() {}
}
```

---

## Nicht erlaubte Features
Folgende Features dürfen nicht verwendet werden:

- automatische Semikolons
- CommonJS
- `eval`
- `with`

### Objekt-Wrapper
Objekt-Wrapper sollen vermieden werden, insbesondere die Verwendung von `new`.

**Beispiel:**
```typescript
const x = new Boolean(false);
window.alert(typeof x);  // Gibt 'object' aus. Das wird nicht erwartet!

const y = Boolean(false);
window.alert(typeof y);  // Gibt 'boolean' aus, wie erwartet.
```

### `var`
Das Schlüsselwort `var` ist nicht erlaubt, da es zu schwer nachvollziehbarem Verhalten führen kann.
Das nachfolgende Beispiel erzeugt die Ausgabe *2 2 2*, obwohl man *0 1 2* erwarten würde.

**Beispiel:**
```typescript
for (let i = 0; i < 3; ++i) {
  var iteration = i;
  setTimeout(() => {
    console.log(iteration);
  }, i * 1000);
}
```

In 99,9 % aller Fälle ist die Verwendung von `var` im Programmcode nicht notwendig.

---

## Kontrollanweisungen

### `switch`
Nach jedem `break;` folgt eine Leerzeile.
Ein `default:` ist immer anzugeben.
Sofern kein erwarteter `default:`-Wert vorhanden ist, muss ein `ValueUnexpectedError` geworfen werden.

**Beispiel:**
```typescript
// Import: third-party modules.
import {ValueUnexpectedError} from "@js-augment/errors";

switch (mitarbeiter)
{
  case "Fabian":
  case "Marcel":
    spieleDart();
    break;
    
  case "Michael":
    gibMichaelKekse();
    spieleBilliard();
    break;

  case "Roland":
    gibRolandSuessigkeiten();
    break;

  default:
    throw new ValueUnexpectedError({
      value: mitarbeiter,
      expected: ["Fabian", "Marcel", "Michael", "Roland"],
    });
}
```

---

## Benennung

### Allgemeine Regeln

#### Keine Abkürzungen
Abkürzungen sind zu vermeiden, außer sie sind im IT-Umfeld allgemein gebräuchlich, z. B. `DNS` oder `ID`.

Zusätzlich erlaubt:
- kurze Block-Variablen mit weniger als 5 Zeilen
- die Index-Variable `i` in Schleifen

**Beispiel:**
```typescript
const fehlerZaehler = 0;
const fZaehler = 0; // Nicht gewünscht
```

Der Name muss präzise beschreiben, wofür die Variable, Klasse, Funktion oder Methode steht.

#### Keine Sonderzeichen
Es werden nur ASCII-Buchstaben und Zahlen verwendet.
Umlaute werden durch äquivalente Schreibweisen ersetzt.

**Beispiel:**
```typescript
const fehlerZaehler = 1;

// Verboten.
const fehlerZähler = 1;
```

#### `lowerCamelCase`
Variablen, Funktionen, Objekte und Parameter werden in `lowerCamelCase` geschrieben.

**Beispiel:**
```typescript
const neueKundenId = 1;
function ladeBestellungen() {}
const kundenDaten = {};
```

Auch bekannte, großgeschriebene Abkürzungen / Akronyme wie zum Beispiel "DNS" werden in `lowerCamelCase` konvertiert.

| Zeichenkette     | Korrekt        | Inkorrekt      |
|------------------|----------------|----------------|
| neue Kunden-ID   | neueKundenId   | neueKundenID   |
| XML HTTP request | xmlHttpRequest | XMLHTTPRequest |

#### `UpperCamelCase`
Klassen, Enumerationen und Interfaces werden in `UpperCamelCase` geschrieben.

**Beispiel:**
```typescript
class KundenService {}
enum BestellStatus {}
interface KundenListe {}
```

Auch bekannte, großgeschriebene Abkürzungen / Akronyme wie zum Beispiel "DNS" werden in `UpperCamelCase` (auch bekannt als *PascalCase*) konvertiert.

| Zeichenkette     | Korrekt        | Inkorrekt      |
|------------------|----------------|----------------|
| neue Kunden-ID   | NeueKundenId   | NeueKundenID   |
| XML HTTP request | XmlHttpRequest | XMLHTTPRequest |

### Dateinamen
Dateinamen werden so geschrieben, wie die Funktion, Interface, Klasse oder Typ des Programms dargestellt wird.

Bedeutet:
* UPPER_CASE.ts für Konstanten
* lowerCamelCase für Funktionen
* upperCamelCase für Klassen, Enumerationen und Interfaces

### Variablen
Veränderliche Variablen und konstante lokale Variablen werden mit `let` oder `const` geschrieben und in `lowerCamelCase` benannt.

**Beispiel:**
```typescript
let anzahl = 0;
const maximaleAnzahl = 10;
```

Die Verwendung von `var`, sofern es nicht sinnvoll begründet werden kann, ist verboten.

### Funktionen
Funktionen werden in `lowerCamelCase` geschrieben.

Funktionen, die nur für eine andere Funktion verwendet werden und in der gleichen Datei existieren, werden mit einem Unterstrich als Privat gekennzeichnet.

```typescript
function _hilfeFunktion() {}
```

### Objekte
Objekte werden in `lowerCamelCase` geschrieben.

### Parameter
Parameter werden in `lowerCamelCase` geschrieben.

### Klassen
Klassen werden in `UpperCamelCase` (PascalCase) geschrieben.

### Enumerationen
Enumerationen werden in `UpperCamelCase` (PascalCase) geschrieben.

### Konstanten
Programmkonstanten werden in `UPPER_CASE` geschrieben.
Wörter werden mit Unterstrichen getrennt.

Eine Konstante ist nur dann eine Konstante, wenn ihr Wert wirklich unveränderlich ist.

**Beispiel:**
```typescript
const API_KEY = "1337";
const abfrage = await datenbankabfrage(1337); // Trotz const kein fachlich konstantes Ergebnis
```

### Interfaces
Interfaces werden in `UpperCamelCase` (PascalCase) geschrieben.

**Beispiel:**
```typescript
interface Enumerable {}
```

**Achtung:** Damit unterscheidet sich das Interface von der Konvention von Interfaces aus C#, die mit `I` beginnen.

---

## Importe
Bei Importen werden immer zuerst externe, dann interne Importe vorgenommen.
Die Importe sind außerdem mit einem Kommentar gekennzeichnet.

**Beispiel:**
```typescript
// Import: external interfaces and types.
import type { PlainObject } from "@type-check/guards";

// Import: external functions.
import { isString } from "@type-check/guards";

// Import: internal functions.
import { meineFunktion } from "../functions/meinModul.js";
```

### Dateiendung
Eigene Module werden **immer** mit der Dateiendung `.js` importiert.
Bei externen Modulen wird auf die Dateiendung verzichtet.

**Beispiel:**
```typescript
// Import: internal functions.
import { meineFunktion } from "../functions/meinModul.js";
```

### Default-Importe
Default-Importe für eigene Module sind nicht erlaubt.

**Beispiel:**
```typescript
// Verboten.
import meineFunktion from "modul.js";
```

### Aliase
Aliase in Importen sind nicht erlaubt.

**Beispiel:**
```typescript
// Richtig: Named-Import.
import { meineFunktion } from "modul.js";

// Verboten: Aliase.
import { meineFunktion as mF } from "modul.js";
```

### Kommentare
Externe Importe werden mit dem Kommentar-prefix `// Import: externe` und interne Importe mit `// Import: interne` gekennzeichnet.

Folgende Suffixe sind anschließend, je nach Kontext, zu verwenden:
- `Funktionen`
- `Klassen`
- `Enumerationen`
- `Konstanten`
- `Interfaces und Typen`

Kommentare enden immer mit einem Punkt, außer es wird ein Wert repräsentiert, der als erwartete Ausgabe gelten soll.

**Beispiel:**
```typescript
// Import: externe Funktionen.
import { isString } from "@type-check/guards";

// Prüft, ob die übergegebene Variable einen Mitarbeiter repräsentiert.
if (isString(mitarbeiter)) {
  // ... mache etwas.
}

// true
isString("smartPS GmbH");
```

---

## Exporte

### Benannte Exporte
Grundsätzlich sind benannte Exporte zu verwenden.
Default-Exporte sind nicht erlaubt.

**Beispiel:**
```typescript
function meineFunktion() {}

export {meineFunktion};
```

```typescript
// Verboten: Default Export.
export default function meineFunktion() {}
```

### Platzierung
Exporte stehen am Ende der Datei und werden mit einem Kommentar gekennzeichnet.

**Beispiel:**
```typescript
// Export: Funktion.
export { meineFunktion };
```

---

## Kommentare

Kommentare sollen so geschrieben sein, dass sich neue Entwickler schnell einarbeiten können und der Code auch nach längerer Zeit verständlich bleibt.

### JSDoc
Jede Funktion, Methode, Klasse, jedes Feld und jedes Objekt wird mit **JSDoc** *vor* der Deklaration dokumentiert.

Dazu gehört eine präzise Beschreibung, der oder die Autoren, die Version, die Parameter, der Rückgabewert,
wenn vorhanden die Fehlermeldungen und zwei bis drei Beispiele.

**Beispiel:**
```typescript
/**
 * Prüft, ob die Eingabe getätigt wurde.
 * 
 * @author  Roland Milto, Matthias Frank
 * @version 2026-03-20
 *
 * @param   {string}  eingabe - Die zu prüfenden Daten.
 * 
 * @returns `true`, wenn die Daten gültig sind.
 * 
 * @throws  {Error} - Wenn die Eingabe leer ist.
 * 
 * @example
 * // True.
 * pruefeEingabe("Hallo");
 * 
 * // False.
 * pruefeEingabe("");
 * 
 * // Wirft einen Fehler.
 * pruefeEingabe();
 */
function pruefeEingabe(eingabe: string) {
  return eingabe.length > 0;
}
```

### Markdown beachten
JSDoc muss in Markdown geschrieben werden.

**Beispiel:**
```typescript
/**
 * Verarbeitet die Entwicklerliste von smartPS:
 *
 * - Fabian
 * - Marcel
 * - Michael
 * - Roland
 */
```

Ohne Markdown wird die Dokumentation von externen Programmen möglicherweise anders interpretiert und kann zu Darstellungsfehlern führen.

```typescript
/**
* Das sind die Entwickler von smartPS:
*
*  Fabian
*  Marcel
*  Michael
*  Roland
*/
```

> Das sind die Entwickler von smartPS: Fabian Marcel Michael Roland

### Ein Tag pro Zeile
Pro Zeile wird nur ein JSDoc-Tag verwendet.

**Beispiel:**
```typescript
/**
 * @author  Roland Milto
 * @version 2026-03-20
 */
```

### Autor
Der Autor wird mit Vor- und Nachnamen angegeben.
Falls durch gleichnamige Mitarbeiter nötig, wird zusätzlich die Personalnummer ergänzt.
Weitere Autoren, die an der Funktion arbeiten, werden durch ein Komma getrennt angehangen.

```typescript
/**
 * @author  Roland Milto, Matthias Frank
 */
```

### Version
Die Version wird als ISO-Datum im Format `YYYY-MM-DD` angegeben.

```typescript
/**
 * @version 2026-04-01
 */
```

### Beschreibungen
Beschreibungen sollen die Zeichen-Grenze beachten.
Wenn der Platz nicht reicht, wird die Beschreibung in der nächsten Zeile fortgesetzt.
Ist der Platz sehr stark eingeschränkt, ist es erlaubt in der nächsten Zeile auch mit 4 Leerzeichen weiterzumachen.

**Beispiel:**
```typescript
/**
 * @param {string} beschreibung - Diese Beschreibung ist bewusst etwas länger und
 *                                wird deshalb umgebrochen.
 * @param {string} [beschreibungText="Keine Beschreibung angegeben"] 
 *     - Diese Beschreibung fängt in der nächsten Zeile an, eingerückt mit vier
 *     Leerzeichen.
 */
```

### Parameter
Parameter werden mit Typ, Name und kurzer Beschreibung angegeben.
Optionale Parameter stehen in eckigen Klammern.
Standardwerte werden mit angegeben.

**Beispiel:**
```typescript
/**
 * @param {number} [code=417] - Fehlercode für die Verarbeitung.
 * @param {string} name       - Der Name der Person.
 */
```

### Variablen und Systemschlüssel
Variablen oder Systemschlüssel in Kommentaren werden in einfache Backticks gesetzt.

**Beispiel:**
```typescript
/**
 * Verwendet den Schlüssel `apiKey` zur Authentifizierung.
 * Gibt `true` zurück, wenn die Authentifizierung erfolgreich war.
 */
```

---

## Fehler
Individuelle Fehlerklassennamen müssen Englisch sein und mit **Error** enden.

```typescript
declare name: `${string}Error`;

// Beispiel:
CustomBaseError
```
