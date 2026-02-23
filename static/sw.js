const CACHE = "ganadero-v2";

const ARCHIVOS = [
  "/",
  "/static/manifest.json"
];

// Instalación: guarda la página principal en caché
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ARCHIVOS);
    })
  );
  self.skipWaiting();
});

// Activación: borra cachés viejos
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: intenta red primero, si falla usa caché
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Guarda en caché cualquier respuesta exitosa
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});