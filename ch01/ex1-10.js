// Example 1-10. Using setTimeout to demonstrate the event loop

function marco() {
    console.log('polo');
}

setTimeout(marco, 0); // zero delay
console.log('Ready when you are');

// Console output:
// Ready when you are
// polo
