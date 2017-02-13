// Parallel Execution

// Example 3-6. Running asynchronous tasks in parallel

// Define each account
var accounts = ['Checking Account', 'Travel Rewards Card', 'Big Box Retail Card'];

console.log('Updating balance information...');
accounts.forEach(function (account) {
    // ajax() returns a promise eventually fulfilled by the account balance
    ajax(/*someurl for account*/).then(function (balance) {
	console.log(account + ' Balance: ' + balance);
    });
});

// Console output:
// Updating balance information...
// Checking Account Balance: 384
// Travel Rewards Card Balance: 509
// Big Box Retail Card Balance: 0

