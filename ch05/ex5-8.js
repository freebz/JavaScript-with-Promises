// Example 5-8. A traditional try/catch/finally block

function getData() {
    var timestamp = performance.now();
    try {
	// Fetch data
	// ...
    } catch (err) {
	// Bubble error up to code that called this function
	throw err;
    } finally {
	// Log time taken regardless of whether the preceding code throws an error
	console.log('getData() took ' + (performance.now() - timestamp));
    }
}

// Console output:
// getData() took 0.030000000158906914
