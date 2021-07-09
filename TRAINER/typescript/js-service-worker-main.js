"use strict";
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./js-service-worker.js')
            .then(function (reg) {
            for (var key in reg) {
                console.log("key: " + key);
                // console.log(`reg[key]: ${reg[key]}`)
            }
        })
            .catch(function (err) { return console.log("Service Worker Fehler: " + err); });
    });
}
