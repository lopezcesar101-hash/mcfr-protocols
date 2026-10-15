const CACHE = "mcfr-protocols-v3";
const ASSETS = ["./","index.html","manifest.json","icon-192.png","icon-512.png","apple-touch-icon.png","emblem-header.png","b74.jpg","b75.jpg","b110.jpg","b111.jpg","b112.jpg","b113.jpg","b115.jpg","b120.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
