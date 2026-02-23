const CACHE = "ganadero-v1";
const ARCHIVOS = [
  "/",
  "/static/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
  );
});