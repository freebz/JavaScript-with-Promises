// CHAPTER 4 Using Libraries and Frameworks

// Promise Interoperability and Thenables

// Example 4-1. Wrapping a thenable for interoperability

function thenable(value) {
    return {
	then: function (onfulfill, onreject) {
	    onfulfill(value);
	}
    };
}

var promise = Promise.resolve(thenable('voila!'));
promise.then(function(result) {
    console.log(result);
});

// Console output:
// voila!
