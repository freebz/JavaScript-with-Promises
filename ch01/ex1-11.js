// Example 1-11. Async XHR (repeated from earlier)

// Make an async HTTP request
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

// Create a three second dealy (don't do this in real life)
var timestamp = Date.now() + 3000;
while (Date.now() < timestamp);

// Now that three seconds have passed,
// add a listener to the xhr.load and xhr.error events
function listener() {
    console.log('greetings from listener');
}
xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);
