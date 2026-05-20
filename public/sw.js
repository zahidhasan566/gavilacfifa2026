const CACHE_NAME = 'fifa2026-v1';
const STATIC_ASSETS = [
    '/fifa2026/',
    '/fifa2026/css/app.css',
    '/fifa2026/js/app.js',
    '/fifa2026/images/icons/icon-192x192.png',
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
    // Skip non-HTTP requests (chrome-extension, etc.)
    if (!event.request.url.startsWith('http')) return;

    const url = new URL(event.request.url);

    // Skip API calls - always go to network
    if (url.pathname.includes('/api/')) {
        return;
    }

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
            }).catch(() => caches.match('/fifa2026/'));
        })
    );
});
