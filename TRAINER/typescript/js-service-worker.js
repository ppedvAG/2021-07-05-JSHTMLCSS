"use strict";
var cacheName = 'v1'; // um Caches sp�ter auszutauschen
var cacheAssets = [
    'js-service-worker-main.js'
];
//'../css-box.html', //Dateien au�erhalb vom SW-Scope k�nnen nicht gecachet werden!!!
//'../css-selectors.html',
// call Install Event
self.addEventListener('install', function (e) {
    // todo #4
    console.log('Service Worker: Installed');
    e.waitUntil(caches
        .open(cacheName)
        .then(function (cache) {
        cache.addAll(cacheAssets);
        console.log('Service Worker: Caching Files');
    })
        .then(function () { return self.skipWaiting(); }));
});
// call activate event
self.addEventListener('activate', function (e) {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cache) {
            if (cache !== cacheName) {
                console.log('Service Worker: Clearing Old Cache');
                return caches.delete(cache);
            }
        }));
    }));
});
// call fetch event
self.addEventListener('fetch', function (e) {
    console.log('Service Worker: Fetching');
    e.respondWith(
    // bei misserfolg lade assets vom cache
    fetch(e.request).catch(function () { return caches.match(e.request); }));
});
