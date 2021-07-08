// ANY

console.info('\nANY');

// Ohne Typangaben ist eine nicht initialisierte Variable vom Typ 'any'
// nimmt aber bei der nächsten Zuweisung den Typ vom zugewiesenen Wert
let myAny;

// Bei Zuweisungen zu any ist Type-Checking aus
myAny = 4; // number
myAny = 'string';
let myString = 'buchstaben';
// Typeof Operator
console.log("typeof myAny: ", typeof myAny) // string
console.log("typeof myAny === typeof myString: ", typeof myAny === 'string') // true

// Bei Zuweisungen von any zu anderen Typen ist Type-Checking: ja
let myNumber: number = 3;
myAny = 'string';
// myNumber = myAny; //Type 'string' is not assignable to type 'number'.
console.log('myNumber :>> ', myNumber);

// Mit der Angabe vom Typ 'any' bleibt Type-Checking auch bei Zuweisungen von any-Variable zu anderen Typen ausgeschaltet
let myAny2: any;
myAny2 = 4;
myAny2 = 'string';
let myNumber2: number = 3;
myNumber2 = myAny2; // keine Fehlermeldung
console.log(" typeof myAny2 === typeof String: ", typeof myAny2 === typeof String) // false
console.log("typeof myAny2 === 'number': ", typeof myAny2 === 'number') // true
let check = typeof myAny2 === 'number';
console.log("check: ", check); // true
console.log("typeof myAny2: ", typeof myAny2) // number



// UNKNOWN

console.info('\nUNKNOWN');

// Bei Zuweisungen zu unknown ist Type-Checking aus
let myUnknown: unknown;
myUnknown = 'string';
myUnknown = 5;

// Zuweisung von unknown zu anderen Typen: Type-Checking an!
let myString3: string = 'text';
myUnknown = 'str';
// myString3 = myUnknown; // Type 'unknown' is not assignable to type 'string'
myString3 = myUnknown as string; // Nach Type-Assertion ist es möglich




// VOID

console.info('\nVOID');

// Ohne Angabe vom Rückgabetyp ist es 'void'
function fct1() {
    console.log('ausgabe fct1');  
}
function fct2(): string {
    return 'text';
}

let fctVar1 = () => { }; // Datentyp: () => void
let fctVar2 = () => { return 'letters' }; // Datentyp: () => string

fctVar2 = fct2;
// fctVar2 = fct1; // 'void' not assignable to 'string'

// Es ist möglich, Variablem vom Typ void anzulegen
// Es gibt aber keine Literale für void-Werte
let myVoid: void;
myVoid = fct1();

myVoid = undefined; // diese Richtung sind es kompatible Datentypen
// let myUndefined: undefined = myVoid; // diese Richtung sind die Typen nicht kompatibel
// let myNull: null = myVoid; // nicht kompatibel
// myVoid = myNull; // nicht kompatibel



// NEVER

console.info('\nNEVER');

let myNever: never;
myNever = [][0]; // Literal für leeres Array erzeugt ein Array von never
let arrayOfNever = new Array<never>();
myNever = arrayOfNever[0];
myNever = arrayOfNever[1];

function fct3(): never {
    console.log('fct3 mit never');
    throw new Error();
    console.log('noch ein Versuch'); // Funktionen mit unerreichbarem Code
}

function impossibleTypeGuard(value: string | number) {
    if (typeof value === "string" && typeof value === "number") {
       value; // Type never 
    }
}


// Experiment
// stack overflow
function fctX() {
    fctX();
    return 4;
}
// fct3();



// LITERALE DATENTYPEN

console.info('\nLITERALE DATENTYPEN');

let myUnit: 'px';
myUnit = 'px';
// myUnit = 'em'; // Type 'em' is not assignable to type 'px'
// Variablen von Literalen Datentypen nehmen nur den Wert von diesem Literal an


let myUnit1: 123;
// myUnit1 = 345;

// Das kann man als Alternative zu enum benutzen
let myUnit2: 'px' | 'em' | 'rem';


// Interpolationstrings bei Literalen Datentypen
// Das könnte z.B. eine Alternative zu regular Expressions sein
type d = 1 | 2 | 3 | 4 | 5;
type newType = `${d}-${d}-${d}`;


// ANDERE CUSTOM TYPES

// Damit kann man neue Datentypen anlegen
// ist gut, um ein Alias für benutzerdefinierte Datentypen einzuführen
type myType = string | number | never;
let myMyType: myType;

type myConsoleType = Console;

function name3(): myType {
    let myString = 'str'
    return myString;
}

type meinHübscherDatenTyp = string | (() => myType)