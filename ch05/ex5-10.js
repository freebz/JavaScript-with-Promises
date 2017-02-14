// Example 5-10. Bluebird's promise.finally()

function getData() {
    var timestamp = performance.now();
    
    return new Bluebird(function (resolve, reject) {
	// ...
	throw new Error('Unexpected problem');
    }).finally(function () {
	console.log('Data fetch took ' + (performance.now() - timestamp));
    });
}
