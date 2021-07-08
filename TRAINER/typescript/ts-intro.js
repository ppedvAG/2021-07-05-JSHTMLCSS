"use strict";
console.log('Hallo TypeScript');
// Automatische Variablen zu den IDs von HTMLElementen sind in TS-Dateien nicht verfügbar
// console.log(myP);
// Datentypen KÖNNEN angegeben werden, wenn Variablen initialisiert werden, weil die Datentypen bei der Zuweisung festgelegt werden
// Uniontypes werden mit dem Type-Operator '|' angelegt
var myPar = document.getElementById('myP');
// Datentypen MÜSSEN angegeben werden, wenn Variablen deklariert werden
var etwas; // in diesem Fall bekommen wir Datentyp 'any', bei welchem Type-Checking ausgeschaltet ist
var etwas1; // nur number-Werte werden von etwas1 angenommen. Nicht mal null oder undefined...
// Ziel: Inhalte zum Paragraphen hinzufügen
// Eigenschaft textContent hat nur der Datentyp 'HTMLElement', aber nicht der Datentyp 'HTMLElement | null'
// Null-Option wird mit dem Operator '!' oder '?' weggenommen
// Option1: Datentyp anpassen mit '!' - Casting
var myPar1 = myPar; // Typ: HTMLElement
// let myPar2 = myPar ?; // Fehler: Expression expected
myPar.textContent = 'Inhalt für P';
// Option2: Anweisungen an die Datentyp-Optionen durch Type-Guard 'if' anpassen
if (myPar) // Typ: HTMLElement | null
    myPar.textContent = 'Inhalt für P aus IF'; // Typ: HTMLElement
else
    console.log(myPar); // Typ: null
// Option3: Daten anpassen mit '<>' oder 'as' - Type Assertion
// Formatierung von Interpolation String übernimmt die Eigenschaft innerText aber nicht die Eigengschaften textContent oder innerHTML
myPar.innerText = "Inhalt \nf\u00FCr\nP\u00FC\u00FC\u00FC\u00FC\u00FC\u00FC\u00FC\u00FC\u00FC\u00FC\nnach\nAssertion";
var myPar3 = myPar; // HTMLElement
