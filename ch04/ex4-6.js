// Wrapping Node.js Functions

// Example 4-6. Node-style callback

function loadImageNodeStyle(url, callback) {
    var image = new Image();
    image.src = url;
    image.onload = function () {
	callback(null, image);
    };
    image.onerror = function (error) {
	callback(error);
    };
}

loadImageNodeStyle('labyrinth_puzzle.png', function (err, image) {
    if (err) {
	console.log('Unable to load image');
	return;
    }
    console.log('Image loaded');
});
