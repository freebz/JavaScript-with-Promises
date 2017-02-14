// CHAPTER 5 Error Handling

// Rejecting Promises

// Example 5-1. Explicitly rejecting a promise

var rejectedPromise = new Promise(function (resolve, reject) {
    reject(new Error('Arghhhh!'));     // Explicit rejection
});

rejectedPromise.catch(function (err) {
    console.log('Rejected');
    console.log(err);
});

// Console output:
// Rejected
// [Error object] { message: 'Arghhhh!' ... }
