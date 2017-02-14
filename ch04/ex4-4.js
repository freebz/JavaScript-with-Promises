// Example 4-4. Setting callback contexts using promise.bind()

printer.shutdown = function () {
    this.connect().bind(this).then(function() {  // bluebird.bind not function.bind
	console.log('First callback can use ' + this.paperSize);
    }).then(function () {
	console.log('And second callback can use ' + this.paperSize);
    });
};

// Console output:
// First callback can use A4
// And second callback can use A4
