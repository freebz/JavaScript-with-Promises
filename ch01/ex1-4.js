// Asynchronous JavaScript

// Example 1-4. A callback being invoked asynchronously

function repositionElement() {
    console.log('repositioning!');
    // ...
}

window.requestAnimationFrame(requestAnimationFrame);
console.log('I am th last line of the script');

// Console output:
// I am the last line of the script
// repositioning!
