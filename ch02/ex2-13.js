// Example 2-13. Rejecting a promise by throwing an error in the constructor callback

rejectWith('bad news').then(
    function step2() {
	console.log('This is never run');
    }
).catch(
    function (error) {
	console.log('Failed again!');
	console.log(error); // Error object with message: 'bad news'
    }
);

function rejectWith(val) {
    return new Promise(function (resolve, reject) {
	throw Error(val);
	resolve('Not used'); // This line is never run
    });
}

// Console output:
// Failed again!
// [Error object] { message: 'bad news' ... }
