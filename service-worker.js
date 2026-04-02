const CACHE_NAME = "scorpion-toss-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./heads_coin_webp.webp",
  "./tails_coin_webp.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
