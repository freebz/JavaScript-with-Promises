// Iterables and Iterators

// Example 6-10. Using the iterable interface of an array

var array = [1, 2];
var iterator = array[Symbol.iterator]();

iterator.next();      // {value: 1, done: false}
iterator.next();      // {value: 2, done: false}
iterator.next();      // {value: undefined, done: true}
