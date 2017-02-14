// Example 4-15. Supplementing a chain with promise.tap()

function countStudents() {
    return getConnection().then(function (connection) {
	return connection.count('students');
    }).tap(function (count) {
	console.log('Number of students: ' + count);
    });
}

countStudents().then(function (count) {
    if (count > 24) console.log('Classroom has too many students');
});

// Console output:
// Number of students: 25
// Classroom has too many students
