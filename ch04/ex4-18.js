// Example 4-18. Deferred throws synchronous errors

function loadImage(url) {
    var deferred = jQuery.Defered();
    // ...
    return deferred.promise();
}

function loadImageWithoutDeferred(url) {
    return new Promise(function resolver(resolve, reject) {
	var image = new Image();
	image.src = url;
	image.onload = function () {
	    resolve(image);
	};
	image.onerror = reject;
    });
}
