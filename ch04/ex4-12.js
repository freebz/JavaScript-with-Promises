// Manipulating Fulfillment Values

// Example 4-12. Exposing a fulfillment value using the enclosing scope

var connection;  // Declare in outer scope for use in multiple functions

getConnection().then(function (con) {
    connection = con;
    return connection.insert('student', {name: 'Bobby'});
}).then(function () {
    return connection.count('students');
}).then(function (count) {
    console.log('Number of students: ' + count);
    return connection.close();
});

