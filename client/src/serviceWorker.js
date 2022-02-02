let CACHE_NAME = "dippingmap_cache1";

let urlsToCache = [
  "/",
  "/manifest.js",
  "/index.html",

  "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
  "https://kit.fontawesome.com/05c6b543c0.js",
  "https://code.jquery.com/jquery-1.10.2.js",
  "https://code.jquery.com/ui/1.11.4/jquery-ui.js",

  "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
  "https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css",
  "https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css",

  "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
  "https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js",
  "https://cdn.jsdelivr.net/gh/hosuaby/Leaflet.SmoothMarkerBouncing@v2.0.0/dist/bundle.js",
];

self.addEventListener("install", function (event) {
  console.log("Service Worker installing");
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  // Remove old caches
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      return keys.map(async (cache) => {
        if (cache.indexOf("dippingmap_cache") == 0) {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Removing old cache: " + cache);
            return await caches.delete(cache);
          }
        }
      });
    })()
  );
});

self.addEventListener("fetch", function (event) {
  let online = navigator.onLine;
  if (!online) {
    if (event.request.destination == "" || event.request.destination == null) {
      return;
    }
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        requestBackend(event);
      })
    );
  }
});

function requestBackend(event) {
  var url = event.request.clone();
  return fetch(url).then(function (res) {
    //if not a valid response send the error
    if (!res || res.status !== 200 || res.type !== "basic") {
      return res;
    }

    var response = res.clone();

    caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, response);
    });

    return res;
  });
}
