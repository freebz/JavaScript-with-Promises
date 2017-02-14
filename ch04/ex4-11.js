// Example 4-11. Eager invocation of aggregate functions

function resolveLater(value) {
    return new Bluebird(function (resolve, reject) {
	setTimeout(function () {
	    resolve(value);
	}, 1000);
    });
};

var numbers = Bluebird.resolve([
    1,
    resolveLater(2),
    3
]);

console.log('Square the following numbers...');
numbers.map(function square(num) {
    console.log(num);
    return num * num;
}).then(function (result) {
    console.log('The squares of those numbers are...');
    console.log(result.join(', '));
});

// Console output:
// Square the following numbers...
// 1
// 3
// 2
// The squares of those numbers are...
// 1, 4, 9
