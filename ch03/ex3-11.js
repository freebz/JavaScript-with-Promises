// Example 3-11. Simple array.reduce to sum numbers

var numbers = [2, 4, 6];
var sum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log(sum);

// Console output:
// 12
