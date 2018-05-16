self.addEventListener('install', function (e) {
}
)
self.addEventListener('fetch', function (event) {
    event.respondWith(
        catches.match(event.request).then(function (response) {
            return response || fetch(event.reqest);
        }));
});
