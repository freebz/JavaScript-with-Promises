// Example 5-2. Unhandled error rejects a promise

var rejectedPromise = new Promise(function (resolve, reject) {
    throw new Error('Arghhhh!');       // Implicit rejection
});
