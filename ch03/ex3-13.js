// Example 3-13. Build sequential chain using recursion

// Replaces sequence in previous example with a recursive implementation
function sequence(array, callback) {
    function chain(array, index) {
	if (index == array.length) return Promise.resolve();
	return Promise.resolve(callback(array[index])).then(function () {
	    return chain(array, index + 1);
	});
    }
    return chain(array, 0);
};

// Console output is identical to the previous example
