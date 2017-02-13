// Multiple Consumers

// Example 2-5. One promise with multiple consumers

var user = {
    profilePromise: null,

    getProfile: function () {
	if (!this.profilePromise) {
	    // Assume ajsx() returns a promise that is eventualy
	    // fulfilled with {name: 'Samantha', subscribedToSpam: true}
	    this.profilePromise = ajax(/*someurl*/);
	}
	return this.profilePromise;
    }
};

var navbar = {
    show: function (user) {
	user.getProfile().then(function (profile) {
	    console.log('*** Navbar ***');
	    console.log('Name: ' + profile.name);
	});
    }
};

var account = {
    show: function (user) {
	user.getProfile().then(function (profile) {
	    console.log('*** Account Info ***');
	    console.log('Name ' + profile.name);
	    console.log('Send lots of email? ' + profile.subscribedToSpam);
	});
    }
};

navbar.show(user);
account.show(user);

// Console output:
// *** Navbar ***
// Name: Samantha
// *** Account Info ***
// Name: Samantha
// Send lots of email? true
