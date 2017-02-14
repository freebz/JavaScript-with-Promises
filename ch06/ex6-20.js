// Example 6-20. Looping through iterations

// Substitute for iterator and console.log in previous example
iterator = match(animals, 'legs', 4);
while ((result = iterator.next()).done !== true) {
    console.log(result.value.type);
}

// Console output:
// cat
// dog
