// Passing Errors

// Example 5-4. Promise chains built across functions

var db = {
    connect: function () {/*...*/},
    query: function () {/*...*/}
};

function getReportData() {
    return db.connect().then(function (connection) {
	return db.query(connection, 'select report data');
    });
}

getReportData().then(function (data) {
    data.sort();
    console.log(data);
}).catch(function (err) {
    console.log('Unable to show data');
});
