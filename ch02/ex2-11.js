// Callback Execution Order

// Example 2-11. Execution order of callbacks used by promises

var promise = new Promise(function (resolve, reject) {
    console.log('Inside the resolver function');        // 1
    resolve();
});

promise.then(function () {
    console.log('Inside the onFulfilled handler');      // 3
});

console.log('This is the last line of the script);      // 2

// Conosole output:
// Inside the resolver function
// This is the last line of the script
// Inside the onFulfilled handler
