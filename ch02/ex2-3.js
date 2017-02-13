// Example 2-3. Chaining calls using then and catch

loadImage('security_holes.png').then(function (img) {
    document.body.appendChild(img);
}).catch(function (e) {
    console.log('Error occurred while loading image');
    console.log(e);
});
