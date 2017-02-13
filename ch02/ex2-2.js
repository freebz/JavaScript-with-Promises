// Example 2-2. Promise then and catch

// Assume loadImage returns a promise
var promise = loadImage('the_general_problem.png');

promise.then(function (img) {
    document.body.appendChild(img);
});

promise.catch(function (e) {
    console.log('Error occurred while loading image');
    console.log(e);
});
