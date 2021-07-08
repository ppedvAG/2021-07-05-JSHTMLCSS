"use strict";
// let datumVomJSON = new Date()
console.log("document.getElementsByName('birthdayInput')[0]: ", document.getElementsByName('birthdayInput')[0]);
var geburtsdatumInput = document.getElementsByName('birthdayInput')[0];
function saveBirthday() {
    var geburtsdatum;
    geburtsdatum = geburtsdatumInput.value;
    console.log("typeof geburtsdatum: ", typeof geburtsdatum);
    console.log("geburtsdatum: ", geburtsdatum);
    if (typeof geburtsdatum === 'string') {
        document.getElementById('datumHinweis').textContent = "geburtsdatum abgefangen als string: " + geburtsdatum;
    }
    else if (typeof geburtsdatum === typeof Date) { // mit instanceof wird hinweis gegeben, es ist ein string
        document.getElementById('datumHinweis').textContent = "geburtsdatum abgefangen als objekt: " + geburtsdatum;
    }
}
//geburtsdatum = new Date()
//if (geburtsdatum instanceof Date) {
//    geburtsdatum.toDateString()
//} else {
//    geburtsdatum = new Date(geburtsdatum)
//}
//// sollte die Datumvariable von String zu Date umgewandelt werden, dann mit dem Uniontype Date | string l�sst sich die Umwandlung mit der gleichen Variable erledigen.
//let dateArray = new Array<Date>();
