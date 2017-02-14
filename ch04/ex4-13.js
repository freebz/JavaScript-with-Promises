// Example 4-13. Passing on a value using promise.return()

getConnection().then(function (connection) {
    return connection
	.insert('student', {name: 'Bobby'})
	.return(connection);
}).then(function (connection) { ...
				
