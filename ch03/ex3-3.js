// Example 3-3. Substituting a resolved promise

function showMainMenu() {
    var p = (!user.authenticated) ? user.login() : Promise.resolve();
    return p.then(function () {
	// ... Code to display main menu
    });
}
