// Example 4-8. Converting arrays into individual arguments using promise.spread()

function getAccountStatus(callback) {
    var error = null;
    var enabled = true;
    var lastLogin = new Date();

    callback(error, enabled, lastLogin);  // Callback has multiple values on success
}

var fulfillUsingAnArray = true;
var wrapperFunc = Bluebird.promisify(getAccountStatus, fulfillUsingAnArray);

// Without using spread
wrapperFunc().then(function (status) {
    var enabled = status[0];
    var lastLogin = status[1];
    // ...
});

// Using spread
wrapperFunc().spread(function (enabled, lastLogin) {
    // ...
});
