// STRINGS
'string1';
"string2";
`string3`;
// interpolation strings
p_string3.textContent = // in Prod-Projekten wird es nicht empfohlne, die automatischen ID-Variaben zu benutzen
    `s
                    t
${4 + 5}
r
i
ng`
p_string3.innerHTML =
    `s
                    t
${4 + 5}
r
i
ng`
// innerText �bernimmt die Formattierung vom Interpolationstring
let letX = 4;
let letY = 5;
p_string3.innerText =
    `s
                    t
${letX + letY}
r
i
ng`;
// innerHTML wird genutzt um HTML Strings wie HTML auszuwerten
p_innterHTML.innerHTML = `
        <pre>dgffsdg
sdfg
sdfg
sn</pre>
`;




// VARIABLEN

var var1 = 3; // wird als Eigenschaft vom globalen Objekt eingetragen
let let1 = 5; // hier ist es nicht der Fall
// Kontrolle �ber Bezeichner
var var1 = 5; // man darf var-Variablen unter gleichem Namen anlegen
// let let1 = 3; // js-intro.html:65 Uncaught SyntaxError: Identifier 'let1' has already been declared


// DEBUGGER

// setzt ein Breakpoint direkt im Code festprogrammiert
// debugger;




// SCOPES
// let- und const-Variablen akzeptieren Block-Scopes, var-Variablen nicht
{
    let let1 = 3;
    console.log(let1); // 3
    var var1 = 7;
    console.log(var1); // 7
}
console.log(let1); // 5
console.log(var1); // 7
// Hinweis, in ES3 und ES5 sind keine Funktionen in den Block-Scopes möglich



// var-, let- und const-Variablen akzeptieren Function-Scope
var fctTest1 = 'wert vor der fct';
function testeFctScope() {
    var fctTest1 = 'wert in der fct';
    console.log("ausgabe in fct: fctTest1: ", fctTest1)
}
console.log("ausgabe nach fct: fctTest1: ", fctTest1)
testeFctScope();
console.log("ausgabe nach Aufruf von fct: fctTest1: ", fctTest1)

// Funktion-Scopes ist der Grund, warum man den Code manchmal in eine anonyme Funktion reinpackt und diese gleich aufruft.
(function () {
    // weiterer Js code im neuen FCT-Scope
})()



document.getElementById('p_id').innerHTML = 'Inhalt f&uuml;r p_id-Paragraph';

// AUFRUF VON FUNKTIONEN GLEICH NACH DER DEFINITION
// solche Ausdr�cke am besten mit Semikolons abschlie�en
(function doSomething() {
    console.log('something');
})();