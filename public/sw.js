const CACHE_NAME = 'gavilacfifa2026-v1';
const BASE = '/gavilacfifa2026';
const STATIC_ASSETS = [
    BASE + '/',
    BASE + '/css/app.css',
    BASE + '/js/app.js',
    BASE + '/images/icons/icon-192x192.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)).catch(() => {})
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (!event.request.url.startsWith('http')) return;

    const url = new URL(event.request.url);

    // Always go to network for API calls and HTML navigation requests
    if (url.pathname.includes('/api/') || event.request.mode === 'navigate') {
        return;
    }

    // Cache-first for static assets only (js, css, images)
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            }).catch(() => cached);
        })
    );
});
