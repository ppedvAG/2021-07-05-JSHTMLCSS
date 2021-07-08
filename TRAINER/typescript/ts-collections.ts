// ARRAYS

// Array ohne Datentypangabe
let myArray = new Array(); 
myArray[0] = 3;
myArray[1] = 'text';
// alternativ
let myArray3 = [];


// Array mit Datentypangabe
let myArray2 = new Array<Number>();
// myArray2[0] = 'text'; // Type 'string' is not assignable to type 'Number'.

// Längenangabe
let myArray4 = new Array(2);
myArray4[4] = 4;
console.log('myArray4 :>> ', myArray4); // myArray4 :>>  (5) [empty × 4, 4]
// Auch in TS bleiben die Arrays dynamisch, obwohl die Länge angegeben wurde


// Umwandlung zu einem Array:
// HTMLCollection ist bei TS auch eine generische Klasse
let myH2s = document.getElementsByTagName('h2'); // HTMLCollectionOf<HTMLHeadingElement>
// myH2s.map() // Property 'map' does not exist on type 'HTMLCollectionOf<HTMLHeadingElement>'
let myArrayFromHTMLCollection = Array.prototype.slice.call(myH2s); // prototype ist nötig, weil 'Array' in TS nur ein Konstruktor ist
console.log('myArrayFromHTMLCollection instanceof Array :>> ', myArrayFromHTMLCollection instanceof Array); // true


// für neuere ES-Versionen
let myArrayFromHTMLCollection2 = Array.from(myH2s);
console.log('myArrayFromHTMLCollection2 :>> ', myArrayFromHTMLCollection2); // myArrayFromHTMLCollection2 :>>  (3) [h2, h2, h2]



// TUPELS

type coordinate2D = [x: number, y: number]
let coord1: coordinate2D = [234, 55];
let coord2: coordinate2D = [22, 212];
let coord3: coordinate2D = [123, 70];
let coord4: coordinate2D = [43, 90];
let coord5: coordinate2D = [56, 100];
// auch mehr als 2 Einträge dürfen vorkommen
let coord3D: [number, number, number] = [1,2,3]

let mySVG = document.getElementById('mySVG');

let stringForPolygon = `
<polygon points="
${coord1}
${coord2}
${coord3}
${coord4}
${coord5}
" style="fill: lime; stroke: purple; stroke-width: 3" />`;

mySVG!.innerHTML = stringForPolygon;