// Example 4-14. Passing on a value using promise.tap()

getConnection().tap(function (connection) {
    return connection.insert('student', {name: 'Bobby'});
}).then(function (connection) { //...
    
