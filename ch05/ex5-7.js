// Implementing try/catch/finally

// Example 5-7. A try/catch block

function getData() {
    var timestamp = performance.now();
    try {
	// Fetch data
	// ...
    } catch (err) {
	// Deal with any errors that arise
	// ...
    }
    console.log('getData() took ' + (performance.now() - timestamp));
}
