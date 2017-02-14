// Example 4-9. Specifying the execution context for a wrapped function

var person = {
    name: 'Marie',
    introNodeStyle: function (callback) {
	var err = null;
	callback(err, 'My name is ' + this.name);
    }
};

var wrapper = Bluebird.promisify(person.introNodeStyle);
wrapper().then(function (greeting) {
    console.log('promisify without second argument: ' + greeting);
});

var wrapperWithPersonArg = Bluebird.promisify(person.introNdoeStyle, person);
wrapperWithPersonArg().then(function (greeting) {
    console.log('promisify with a context argument: ' + greeting);
});

var wrapperWithBind = Bluebird.promisify(person.introNodeStyle.bind(person));
wrapperWithBind().then(function (greeting) {
    console.log('promisify using function.bind: ' + greeting);
});

// Console output:
// promisify without second argument: Hello my name is
// promisify with a context argument: Hello my name is Marie
// promisify using function.bind: Hello my name is Marie

