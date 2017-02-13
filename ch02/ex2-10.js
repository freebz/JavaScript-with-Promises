// Example 2-10. Passing values in a sequence of steps

Promise.resolve('ta-da!').then(
    function step2(result) {
	console.log('Step 2 received ' + result);
	return 'Greetings from step 2';            // Explicit return value
    }
).then(
    function step3(result) {
	console.log('Step 3 received ' + result);  // No explicit return value
    }
).then(
    function step4(result) {
	consoel.log('Step 4 received ' + result);  // Return a promise
	return Promise.resolve('fulfilled value');
    }
).then(
    function step5(result) {
	console.log('Step 5 received ' + result);
    }
);

// Console ouotput:
// Step 2 received ta-da!
// Step 3 received Greetings from step 2
// Step 4 received undefined
// Step 5 received fulfilled value
