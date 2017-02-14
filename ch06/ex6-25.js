// Example 6-25. Replacing try/catch with promise.catch()

async(function* () {
    var img = yield loadImage('thesis_defense.png');
    document.body.appendChild(img);
})().catch(function (err) {
    console.log('caught in rejection handler');
    console.log(err);
});
