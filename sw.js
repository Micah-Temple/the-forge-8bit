/* The Forge: 8-Bit — service worker. Bump CACHE version whenever files change. */
var CACHE = "forge8bit-cache-v2";
var ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./press-start-2p.woff2", "./vt323.woff2",
  "./anvil.png", "./hammer.png", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return res;
    }).catch(function(){
      return caches.match(e.request, {ignoreSearch: true}).then(function(r){
        return r || caches.match("./index.html");
      });
    })
  );
});
