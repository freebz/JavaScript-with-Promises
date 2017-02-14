// Example 4-16. Passing in multiple values with Promise.all()

getConnection().then(function (connection) {
    var promiseForCount = connection.count('students');
    return Promise.all([connection, promiseForCount]);
}).spread(function (connection, count) {
    console.log('Number of students: ' + count);
    return connection.close();
});
