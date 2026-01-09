self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('calendario-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});
