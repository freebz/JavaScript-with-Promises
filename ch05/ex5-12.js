// Example 5-12. Promise callback breaks up the call stack

function echo(text) {
    console.log(text);
    throw new Error('oops');

    // Example of call stack for error when invoked as a callback for a promise
    // echo (line:3)
}

function showRandomNumber() {
    // Invoking echo as a promise callback
    var p = Promise.resolve(Math.random());
    p.then(echo).catch(function (error) {
	console.log(error.stack)
    });
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
});

document.addEventListener('keypress', function handleKeypress() {
    showRandomNumber();
});
