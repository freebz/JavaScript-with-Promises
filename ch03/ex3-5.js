// Example 3-5. Caching a promise

var user = {
    loginPromise: null,

    login: function () {
	var me = this;
	if (this.loginPromise == null) {
	    this.loginPromise = ajax(/*someurl*/);

	    // Remove cached loginPromise when a failure occurs to allow retry
	    this.loginPromise.catch(function () {
		me.loginPromise = null;
	    });
	}
	return this.loginPromise;
    }
};
