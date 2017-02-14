// Example 6-26. Using async and await as proposed in ES7

async function () {
    try {
	var img = await loadImage('thesis_defense.png');
	document.body.appendChild(img);
    } catch (err) {
	console.log('caught in rejection handler');
	console.log(err);
    }
});
