// Promises in jQuery

// Example 4-17. Simple deferred object in jQuery

function loadImage(url) {
    var deferred = jQuery.Deferred();
    var img = new Image();
    img.src = url;

    img.onload = function () {
	deferred.resolve(img);
    };

    img.onerror = function (e) {
	deferred.reject(e);
    };

    return deferred;
}
