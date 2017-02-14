// Example 4-7. Using promisify to wrap a node-style function

var loadImageWrapper = Bluebird.promisify(loadImageNodeStyle);
var promise = loadImageWrapper('computer_problems.png');

promise.then(function (image) {
    console.log('Image loaded');
}).catch(function (error) {
    console.log('Unable to load image');
});
