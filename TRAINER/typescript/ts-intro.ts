console.log('Hallo TypeScript');

// Automatische Variablen zu den IDs von HTMLElementen sind in TS-Dateien nicht verf�gbar
// console.log(myP);

// Datentypen K�NNEN angegeben werden, wenn Variablen initialisiert werden, weil die Datentypen bei der Zuweisung festgelegt werden
// Uniontypes werden mit dem Type-Operator '|' angelegt
let myPar: HTMLElement | null = document.getElementById('myP');

// Datentypen M�SSEN angegeben werden, wenn Variablen deklariert werden
let etwas; // in diesem Fall bekommen wir Datentyp 'any', bei welchem Type-Checking ausgeschaltet ist

let etwas1: number; // nur number-Werte werden von etwas1 angenommen. Nicht mal null oder undefined...

// Ziel: Inhalte zum Paragraphen hinzuf�gen
// Eigenschaft textContent hat nur der Datentyp 'HTMLElement', aber nicht der Datentyp 'HTMLElement | null'
// Null-Option wird mit dem Operator '!' oder '?' weggenommen

// Option1: Datentyp anpassen mit '!' - Casting
let myPar1 = myPar!; // Typ: HTMLElement
// let myPar2 = myPar ?; // Fehler: Expression expected
myPar!.textContent = 'Inhalt f�r P';

// Option2: Anweisungen an die Datentyp-Optionen durch Type-Guard 'if' anpassen
if (myPar) // Typ: HTMLElement | null
    myPar.textContent = 'Inhalt f�r P aus IF'; // Typ: HTMLElement
else
    console.log(myPar); // Typ: null

// Option3: Daten anpassen mit '<>' oder 'as' - Type Assertion
// Formatierung von Interpolation String �bernimmt die Eigenschaft innerText aber nicht die Eigengschaften textContent oder innerHTML
(myPar as HTMLElement).innerText = `Inhalt 
f�r
P
nach
Assertion`;


let myPar3 = (myPar as HTMLElement); // HTMLElement
