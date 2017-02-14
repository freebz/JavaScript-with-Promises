// Example 6-15. Computing a series of values using a generator

function* fib() {
    var a = 0;
    var b = 1;
    while (true) {
	yield a + b;
	b = a + b;
	a = b - a;
    }
}

var i;
var result;
var iterator = fib();
for (i = 0; i < 5; i++) {
    result = iterator.next();
    console.log(result.value);
}

// Console output is identical to the previous example
