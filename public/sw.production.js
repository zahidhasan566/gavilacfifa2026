const CACHE_NAME = 'fifa2026-v20260611231103';
const STATIC_ASSETS = [
    '/',
    '/css/app.css',
    '/js/app.js',
    '/images/icons/icon-192x192.png',
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

    if (url.pathname.includes('/api/')) return;

    // Network-first for JS/CSS so fresh assets load after every deploy
    const isAsset = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');
    if (isAsset) {
        event.respondWith(
            fetch(event.request).then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => caches.match(event.request))
        );
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
            }).catch(() => caches.match('/'));
        })
    );
});
