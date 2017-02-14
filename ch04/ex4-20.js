// Example 4-20. Creating a deferred object using a standard Promise constructor

function Deferred() {
    var me = this;
    me.promise = new Promise(function (resolve, reject) {
	me.resolve = resolve;
	me.reject = reject;
    });
}

var d = new Deferred();
