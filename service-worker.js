const CACHE_NAME = 'inventario-bar-cache-v2'; // Cambiar la versión para forzar la actualización del caché
const urlsToCache = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
    'https://placehold.co/192x192/2c3e50/ffffff?text=INV', // Nuevo icono del manifiesto con la paleta de colores
    'https://placehold.co/512x512/2c3e50/ffffff?text=INV'  // Nuevo icono del manifiesto con la paleta de colores
];

// Instalar Service Worker y cachear archivos estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Service Worker: Cacheando archivos');
            return cache.addAll(urlsToCache);
        })
        .catch(error => {
            console.error('Service Worker: Fallo al cachear', error);
        })
    );
});

// Activar Service Worker y limpiar cachés antiguos
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Estrategia de Cache-first para la obtención de recursos
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Devuelve la versión cacheada si existe
            if (response) {
                return response;
            }
            // Si no está en caché, la solicita a la red
            return fetch(event.request);
        })
    );
});