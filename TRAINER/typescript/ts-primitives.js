"use strict";
// ANY
console.info('\nANY');
// Ohne Typangaben ist eine nicht initialisierte Variable vom Typ 'any'
// nimmt aber bei der nächsten Zuweisung den Typ vom zugewiesenen Wert
var myAny;
// Bei Zuweisungen zu any ist Type-Checking aus
myAny = 4; // number
myAny = 'string';
var myString = 'buchstaben';
// Typeof Operator
console.log("typeof myAny: ", typeof myAny); // string
console.log("typeof myAny === typeof myString: ", typeof myAny === 'string'); // true
// Bei Zuweisungen von any zu anderen Typen ist Type-Checking: ja
var myNumber = 3;
myAny = 'string';
// myNumber = myAny; //Type 'string' is not assignable to type 'number'.
console.log('myNumber :>> ', myNumber);
// Mit der Angabe vom Typ 'any' bleibt Type-Checking auch bei Zuweisungen von any-Variable zu anderen Typen ausgeschaltet
var myAny2;
myAny2 = 4;
myAny2 = 'string';
var myNumber2 = 3;
myNumber2 = myAny2; // keine Fehlermeldung
console.log(" typeof myAny2 === typeof String: ", typeof myAny2 === typeof String); // false
console.log("typeof myAny2 === 'number': ", typeof myAny2 === 'number'); // true
var check = typeof myAny2 === 'number';
console.log("check: ", check); // true
console.log("typeof myAny2: ", typeof myAny2); // number
// UNKNOWN
console.info('\nUNKNOWN');
// Bei Zuweisungen zu unknown ist Type-Checking aus
var myUnknown;
myUnknown = 'string';
myUnknown = 5;
// Zuweisung von unknown zu anderen Typen: Type-Checking an!
var myString3 = 'text';
myUnknown = 'str';
// myString3 = myUnknown; // Type 'unknown' is not assignable to type 'string'
myString3 = myUnknown; // Nach Type-Assertion ist es möglich
// VOID
console.info('\nVOID');
// Ohne Angabe vom Rückgabetyp ist es 'void'
function fct1() {
    console.log('ausgabe fct1');
}
function fct2() {
    return 'text';
}
var fctVar1 = function () { }; // Datentyp: () => void
var fctVar2 = function () { return 'letters'; }; // Datentyp: () => string
fctVar2 = fct2;
// fctVar2 = fct1; // 'void' not assignable to 'string'
// Es ist möglich, Variablem vom Typ void anzulegen
// Es gibt aber keine Literale für void-Werte
var myVoid;
myVoid = fct1();
myVoid = undefined; // diese Richtung sind es kompatible Datentypen
// let myUndefined: undefined = myVoid; // diese Richtung sind die Typen nicht kompatibel
// let myNull: null = myVoid; // nicht kompatibel
// myVoid = myNull; // nicht kompatibel
// NEVER
console.info('\nNEVER');
var myNever;
myNever = [][0]; // Literal für leeres Array erzeugt ein Array von never
var arrayOfNever = new Array();
myNever = arrayOfNever[0];
myNever = arrayOfNever[1];
function fct3() {
    console.log('fct3 mit never');
    throw new Error();
    console.log('noch ein Versuch'); // Funktionen mit unerreichbarem Code
}
function impossibleTypeGuard(value) {
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
var myUnit;
myUnit = 'px';
// myUnit = 'em'; // Type 'em' is not assignable to type 'px'
// Variablen von Literalen Datentypen nehmen nur den Wert von diesem Literal an
var myUnit1;
// myUnit1 = 345;
// Das kann man als Alternative zu enum benutzen
var myUnit2;
var myMyType;
function name3() {
    var myString = 'str';
    return myString;
}
