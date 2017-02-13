// Example 3-7. Consolidating the outcomes of parallel tasks with Promise.all()

var requests = accounts.map(function (account) {
    return ajax(/*someurl for account*/);
});

// Update status message once all requests are fulfilled
Promise.all(requests).then(function (balance) {
    console.log('All ' + balances.length + ' balances are up to date');
}).catch(function (error) {
    console.log('An error occurred while retrieving balance information');
    console.log(error);
});

// Console output:
// All 3 balances are up to date
