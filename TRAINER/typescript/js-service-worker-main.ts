if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./js-service-worker.js')
            .then(
                reg => {
                for (let key in reg) {
                    console.log(`key: ${key}`)
                    // console.log(`reg[key]: ${reg[key]}`)
                    }
                    console.log("SW: ", navigator.serviceWorker)
                }
            )
            .catch(err => console.log(`Service Worker Fehler: ${err}`))
    })
}