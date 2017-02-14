// Practical Application

// Example 6-23. Using a promise with code that looks synchronous (repeated from earlier)

async(function* () {
    try {
	var img = yield loadImage('thesis_defense.png');
	document.body.appendChild(img);
    } catch (err) {
	console.log('caught in async routine');
	console.log(err);
    }
})();
