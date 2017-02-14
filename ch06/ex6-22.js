// Sending Errors to a Generator

// Example 6-22. Throwing errors with the iterator

function* languages() {
    try {
	yield 'English';
	yield 'French';
	yield 'German';
	yield 'Spanish';
    } catch (error) {
	console.log(error.message);
    }
}

var greetings = {
    English: 'Hello',
    French: 'Bonjour',
    Spanish: 'Hola'
};
var iterator = languages();
var result;
var word;
while ((result = iterator.next()).done !== true) {
    word = greetings[result.value];
    if (word) console.log(word);
    else iterator.throw(Error('Missing translation for ' + result.value));
}

// Console output:
// Hello
// Bonjour
// Missing translation for German
