// Example 6-17. Configuring an iterator with an intitial parameter

function* counter(increment) {
    var count = 0;
    increment = increment || 1;
    while (true) {
	count = count + increment;
	increment = (yield count) || increment;
    }
}

var evens = counter(2);
console.log('Even numbers');       // Even numbers
console.log(evens.next().value);   // 2
console.log(evens.next().value);   // 4
console.log(evens.next().value);   // 6

var fives = counter(5);
console.log('Count by fives');     // Count by fives
console.log(fives.next().value);   // 5
console.log(fives.next().value);   // 10
console.log(fives.next().value);   // 15
