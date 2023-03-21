var CACHE_NAME = 'satosher-cache-v0.09'

cacheUrls = [
  'index.js',
  'index.css',
  'img/16x16.png',
  'img/256x256.png',
  'img/snipet.png',
  'index.html',
  'app.js',
  'service-worker.js',
  'config.json',
  'lang_partner.json',
  'lang.json',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Arsenal&display=swap',
  'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap',
]


self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(function(cache) {
    fetch('manifest.json')
    .then(response => {
      response.json()
    })
    .then(function() {
      cache.addAll(cacheUrls)
      console.log('cached')
      return cache
    })
  }))
})


addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request)
  .then(function(response) {
    if (response) {
      return response
    }
    else {
      return fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_NAME)
        .then(function(cache) {
          cache.put(event.request.url, res.clone())
          return res;
        })
      })
    }
  }))
})
