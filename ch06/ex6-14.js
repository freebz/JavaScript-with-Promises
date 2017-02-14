// Generators and Iterators

// Example 6-14. Computing a series of values without using a geneator

var a = 0;
var b = 1;

function fib() {
    b = a + b;
    a = b - a;
    return b;
}

var i;
for (i = 0; i < 5; i++) console.log(fib());

// Console output:
// 1
// 2
// 3
// 5
// 8
