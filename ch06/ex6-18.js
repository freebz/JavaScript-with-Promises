// Example 6-18. The parameter in the first call to iterator.next() is always ignored

// Same function* counter as previous example
function* counter(increment) {
    var count = 0;
    increment = increment || 1;
    while (true) {
	count = count + increment;
	increment = (yield count) || increment;
    }
}

var iterator = counter(5);             //     <- Initial increment is 5
console.log(iterator.next(3).value);   // 5   <- 3 is ignored
console.log(iterator.next().value);    // 10
console.log(iterator.next(200).value); // 210 <- Increment by 200
console.log(iterator.next().value);    // 410
