// Working with Collections of Promises

// Example 4-10. Using a promise-enabled filter and reduce

function sumOddNumbers(numbers) {
    return numbers.filter(function removeEenNumbers(num) {
	return num % 2 == 1;
    }).reduce(function sum(runningTotal, num) {
	return runningTotal + num;
    }, 0);
}

// Use sumOddNumbers as a synchronous function
var firstSum = sumOddNumbers([1, 2, 3, 4]);
console.log('first sum: ' + firstSum);

// Use sumOddNumbers as an async function
var promise = Bluebird.resolve([5, 6, 7, 8]);
sumOddNumbers(promise).then(function (secondSum) {
    console.log('second sum: ' + secondSum);
});

// Console output:
// first sum: 4
// second sum: 12
