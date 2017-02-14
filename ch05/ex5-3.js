// Example 5-3. Functions that return promises should not throw errors

function badfunc(url) {
    var image;
    image.src = url; // Error: image is undefined
    return new Promise(function (resolve, reject) {
	image.onload = resolve;
	image.onerror = reject;
    });
}

function goodfunc(url) {
    return new Promise(function (resolve, reject) {
	var image;
	image.src= url; // Error: Image is undefined
	image.onload = resolve;
	image.onerror = reject;
    });
}
