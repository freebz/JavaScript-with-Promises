// Conditional Logic

// Example 3-2. Conditional async step

var user = {
    authenticated: false,

    login: function () {
	// Returns a promise for the login request
	// Set authenticated to true and fulfill promise when login succeeds
    }
};

// Avoid this style of conditional async execution
function showMainMenu() {
    if (!user.authenticated) {
	user.login().then(showMainMenu);
	return;
    }

    // ... Code to display main menu
};
