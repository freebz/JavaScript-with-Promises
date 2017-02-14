// Example 5-5. Logging and rethrowing an error

function getReportData() {
    return db.connect().then(function (connection) {
	return db.query(connection, 'select somthing');
    }).catch(function (err) {
	console.log('An error occurred while getting the data');
	if (err && err.message) console.log(err.message);
	throw err; // Must re-thorw if you wnat the rejection to propagate further
    });
}
