// Sequential Execution Using Loops or Recursion

// Example 3-9. Running tasks in parallel using a loop

var products = ['sku-1', 'sku-2', 'sku-3'];

products.forEach(function (sku) {
    getInfo(sku).then(function (info) {
	console.log(info)
    });
});

function getInfo(sku) {
    console.log('Requested info for ' + sku);
    return ajax(/*someurl for sku*/);
}

// Console output:
// Requeted info for sku-1
// Requeted info for sku-2
// Requeted info for sku-3
// Info for sku-1
// Info for sku-2
// Info for sku-3
