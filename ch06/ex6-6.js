// Arrow Functions

// Example 6-6. Using array.map() with an inline callback

var requests = accounts.map(function (account) {
    return ajax('/balances/' + account);
});
