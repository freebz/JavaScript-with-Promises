// Example 2-9. Using then to sequence multiple steps

setup1().then(
    function step2(resultFromStep1) {
	// ...
    }
).then(
    function step3(resultFromStep2) {
	// ...
    }
).then(
    function step4(resultFromStep3) {
	// ...
    }
);
