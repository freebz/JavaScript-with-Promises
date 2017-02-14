// Example 6-12. Hypothetical use of loadImage as a synchronous function

try {
    var img = loadImage('thesis_defense.png');
    document.body.appendChild(img);
} catch (err) {
    console.log('Error occured while loading the image');
    console.log(err);
}
