// Example 5-9. Use catch/then to mimic catch/finally

function getData() {
    var dataPromise;
    var timestamp = performance.now();

    dataPromise = new Promise(function (resolve, reject) {
	// ...
	throw new Error('Unexpected problem');
    });

    dataPromise.catch(function (err) {
	// Do not rethrow error
    }).then(function () {
	// Simulates finally block
	console.log('Data fetch took ' + (performance.now() - timestamp));
    });

    // Return data promise instead of catch/then tail to propagate rejection
    return dataPromise;
}
