const teilnehmerGegangen1 = false
const teilnehmerIstImHandy1 = false

// Definition
function learnJS(callback1: any, callback2: any) {
    if (teilnehmerGegangen) {
        // Deklaration von Collback2 nimmt ein Objekt als Argument
        callback2({
            name: 'teilnehmer hatte kein Bock mehr',
            message: 'so ist das Leben'
        })
    } else if (teilnehmerIstImHandy1) {
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
    console.log('Erfolgreich: ' + message);
}, (fail: any) => {
    console.log(fail.name + ' ' + fail.message);
})