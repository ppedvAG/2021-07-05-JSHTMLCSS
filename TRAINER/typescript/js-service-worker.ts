const cacheName = 'v1'; // um Caches später auszutauschen
const cacheAssets = [
    'js-service-worker-main.js'
];
    //'../css-box.html', //Dateien außerhalb vom SW-Scope können nicht gecachet werden!!!
    //'../css-selectors.html',

// call Install Event
self.addEventListener('install', (e: any) => { // Definition von dem EventObjekt muss für SW angepasst werden
    // todo #4
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                cache.addAll(cacheAssets);
                console.log('Service Worker: Caching Files');
            })
            .then(() => self.skipWaiting())
    )
})

// call activate event
self.addEventListener('activate', (e: any) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// call fetch event
self.addEventListener('fetch', e => { //fetch event tritt auf, wenn die main.js Daten fetcht
    console.log('Service Worker: Fetching');
    e.respondWith(
        // bei misserfolg lade assets vom cache
        fetch(e.request).catch(() => caches.match(e.request))
    )
})
