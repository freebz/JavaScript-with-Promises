// Example 6-4. Array destructuring with function parameters

// Without destructuring
getAccountStatus().then(function (status) {
    var enabled = status[0];
    var lastLogin = status[1];
    // ...
});

// Using destructuring
getAccountStatus().then(function ([enabled, lastLogin]) {
    // ... Use enabled and lastLogin directly
});
