// CHAPTER 3 Working with Standard Promises

// The Async Ripple Effect

// Example 3-1. The async ripple effect

showPun().then(function () {
    console.log('Maybe I should stick to programming');
});

function showPun() {
    return getPun().then(function (pun) {
	console.log(pun);
    });
}

function getPun() {
    // Assume ajax() returns a promise that is eventually
    // fulfilled by json for {content: 'The pet store job was ruff!'}
    return ajax(/*someurl*/).then(function (json) {
	var pun = JSON.parse(json);
	return pun.content;
    });
}

// Console output:
// The pet store job was ruff!
// Maybe I should stick to programming
