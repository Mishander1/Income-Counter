if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration)
		},
    function(err) {
			console.log('ServiceWorker registration failed: ', err)
		})
    .catch(function(err) {
			console.log(err)
		})
	})
}
else {
	console.log('service worker is not supported')
}
