// Basic Error Propagation

// Example 2-12. Using a rejection handler at the end of a chain

Promise.reject(Error('bad news')).then(
    function step2() {
	console.log('This is never run');
    }
).then(
    function step3() {
	console.log('This is also never run');
    }
).catch(
    function (error) {
	console.log('Something failed along the way. Inspect error for more info.');
	console.log(error); // Error object with message: 'bad news'
    }
);

// Coonsole output:
// Something failed along the way. Inspect error for more info.
// [Error object] { message: 'bad news' ... }
