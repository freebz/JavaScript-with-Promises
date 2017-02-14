// Example 4-5. Hiding the bound context from calling code

printer.shutdown = function () {
    return this.connect().bind(this).then(function () {
	//...
    }).then(function () {
	//...
    }).bind(null); // mask the previous binding
};

printer.shutdown().then(function () {
    console.log('Not running in the context of the printer: ' + this !== printer);
});

// Console output:
// This code is not running in the context of the printer: true
