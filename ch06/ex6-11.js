// Generators

// Synchronous Style

// Example 6-11. Managing asynchronous image loading using a promise

loadImage('thesis_defense.png').then(function (img) {
    document.body.appendChild(img);
}).catch(function (e) {
    console.log('Error occurred while loading image');
    console.log(e);
});
