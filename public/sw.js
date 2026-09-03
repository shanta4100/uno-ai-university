const CACHE = 'uno-dashboard-v1';
const ASSETS = ['/dashboard.html', '/dashboard.css', '/dashboard.js', '/manifest.json'];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS))));
self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('/dashboard.html'))));
});
