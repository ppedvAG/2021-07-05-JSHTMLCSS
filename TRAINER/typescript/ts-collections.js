"use strict";
// ARRAYS
// Array ohne Datentypangabe
var myArray = new Array();
myArray[0] = 3;
myArray[1] = 'text';
// alternativ
var myArray3 = [];
// Array mit Datentypangabe
var myArray2 = new Array();
// myArray2[0] = 'text'; // Type 'string' is not assignable to type 'Number'.
// Längenangabe
var myArray4 = new Array(2);
myArray4[4] = 4;
console.log('myArray4 :>> ', myArray4); // myArray4 :>>  (5) [empty × 4, 4]
// Auch in TS bleiben die Arrays dynamisch, obwohl die Länge angegeben wurde
// Umwandlung zu einem Array:
// HTMLCollection ist bei TS auch eine generische Klasse
var myH2s = document.getElementsByTagName('h2'); // HTMLCollectionOf<HTMLHeadingElement>
// myH2s.map() // Property 'map' does not exist on type 'HTMLCollectionOf<HTMLHeadingElement>'
var myArrayFromHTMLCollection = Array.prototype.slice.call(myH2s); // prototype ist nötig, weil 'Array' in TS nur ein Konstruktor ist
console.log('myArrayFromHTMLCollection instanceof Array :>> ', myArrayFromHTMLCollection instanceof Array); // true
// für neuere ES-Versionen
var myArrayFromHTMLCollection2 = Array.from(myH2s);
console.log('myArrayFromHTMLCollection2 :>> ', myArrayFromHTMLCollection2); // myArrayFromHTMLCollection2 :>>  (3) [h2, h2, h2]
var coord1 = [234, 55];
var coord2 = [22, 212];
var coord3 = [123, 70];
var coord4 = [43, 90];
var coord5 = [56, 100];
// auch mehr als 2 Einträge dürfen vorkommen
var coord3D = [1, 2, 3];
var mySVG = document.getElementById('mySVG');
var stringForPolygon = "\n<polygon points=\"\n" + coord1 + "\n" + coord2 + "\n" + coord3 + "\n" + coord4 + "\n" + coord5 + "\n\" style=\"fill: lime; stroke: purple; stroke-width: 3\" />";
mySVG.innerHTML = stringForPolygon;
