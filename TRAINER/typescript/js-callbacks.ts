// Da es in JS FCT-Scopes existieren, werden oft anonyme Funktionen zum Anlegenen von neuen Scopes benutzt. Ziel: sichtbarkeit von Daten zu begrenzen
(function () {
    const teilnehmerGegangen = false
    const teilnehmerIstImHandy = false

    // Definition
    function learnJS(callback1: any, callback2: any) {
        if (teilnehmerGegangen) {
            // Deklaration von Collback2 nimmt ein Objekt als Argument
            callback2({
                name: 'teilnehmer hatte kein Bock mehr',
                message: 'so ist das Leben'
            })
        } else if (teilnehmerIstImHandy) {
            callback2({
                name: 'teilnehmer ist in Insta',
                message: 'Insta vs JS'
            })
        } else {
            // Deklaration von Callback1 nimmt ein String als Argument
            callback1('Daumen hoch')
        }
    }

    learnJS((message: any) => {
        console.log('\n CALLBACKS')
        console.log('Erfolgreich: ' + message);
    }, (fail: any) => {
        console.log('\n CALLBACKS')
        console.log(fail.name + ' ' + fail.message);
    })
})()
