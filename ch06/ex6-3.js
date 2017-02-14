// Example 6-3. Object destructuring with function parameters

// Without destructuring
reader.read().then(function (result) {
    // ... Use result.value and result.done
});

// Using destructuring
reader.read().then(function ({value, done}) {
    // ... Use done and value directly
});
