// Chaning Promises

// Example 2-8. Calls to then always return a new promise

var p1, p2;

p1 = Promise.resolve();
p2 = p1.then(function () {
    // ...
});

console.log('p1 and p2 are different objects: ' + (p1 !== p2));

// Console output:
// p1 and p2 are different objects: true
