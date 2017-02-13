// Example 3-8. Running code after multiple operations have finished, regardless of their outcome

function settled(promises) {
    var alwaysFulfilled = promises.map(function (p) {
	return p.then(
	    function onFulfilled(value) {
		return { state: 'fulfilled', value: value };
	    },
	    function onRejected(reason) {
		return { state: 'rejected', reason: reason };
	    }
	);
    });
    return Promise.all(alwaysFulfilled);
}

// Update status message once all requests finish
settled(requests).then(function (outcomes) {
    var count = 0;
    outcomes.forEach(function (outcome) {
	if (outcome.state == 'fulfilled') count++;
    });
    console.log(count + ' out of ' + outcomes.length + 'balances were updated');
});

// Console output (varies based on request):
// 2 out of 3 balances were updated
