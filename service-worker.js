const CACHE_NAME = 'inventario-bar-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    // Puedes añadir más recursos aquí si los usas (ej. imágenes específicas)
    'https://placehold.co/192x192/3498db/ffffff?text=INV', // Icono del manifiesto
    'https://placehold.co/512x512/3498db/ffffff?text=INV'  // Icono del manifiesto
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
                console.error('Service Worker: Fallo al cachear durante la instalación', error);
            })
    );
});

// Activar Service Worker y limpiar cachés antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Eliminando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interceptar peticiones y servir desde caché o red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si el recurso está en caché, lo devuelve
                if (response) {
                    return response;
                }
                // Si no está en caché, intenta obtenerlo de la red
                return fetch(event.request).catch(error => {
                    console.error('Service Worker: Fallo en la petición de red:', event.request.url, error);
                    // Puedes devolver una página offline aquí si lo deseas
                    // return caches.match('/offline.html');
                });
            })
    );
});
