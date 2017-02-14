// Using the Call Stack

// Example 5-11. Sample call stack

function echo(text) {
    console.log(text);
    throw Error('oops');

    // Example of call stack for error when triggered by a mouse click:
    // echo (line:3)
    // showRandomNumber (line:12)
    // handleClick (line:16)
}

function showRandomNumber() {
    echo(Math.random());
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
});

document.addEventListener('keypress', function handleKeypress() {
    showRandomNumber();
});
