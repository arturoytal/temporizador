self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Recuperando');
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request))
    );
});
