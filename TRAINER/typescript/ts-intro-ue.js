"use strict";
/*
 * Password-Confirm:
Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
wird eine Meldung f�r Erfolg gezeigt, sonst ein Fehlerhinweis.
 */
var inp1 = document.getElementById('input1');
var inp2 = document.getElementById('input2');
var outp = document.getElementById('outp');
function handleInput() {
    if (inp1.value && inp2.value && inp1.value === inp2.value) {
        outp.textContent = 'Bestaetigt';
    }
    else {
        outp.textContent = 'Eingaben fehlen oder sind falsch';
    }
}
