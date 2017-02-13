// Example 3-12. Build a sequential chain using a loop

// Build a sequential chain of promises from the elements in an array
function sequence(array, callback) {
    return array.reduce(function chain(promise, item) {
	return promise.then(function () {
	    return callback(item);
	});
    }, Promise.resolve());
};

var products = ['sku-1', 'sku-2', 'sku-3'];

sequence(products, function (sku) {
    return getInfo(sku).then(function (info) {
	console.log(info)
    });
}).catch(function (reason) {
    console.log(reason);
});

function getInfo(sku) {
    console.log('Requested info for ' + sku);
    return ajax(/*someurl for sku*/);
}

// Console output:
// Requested info for sku-1
// Info for sku-1
// Requested info for sku-2
// Info for sku-2
// Requested info for sku-3
// Info for sku-3
