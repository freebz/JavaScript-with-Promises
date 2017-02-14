// Example 4-19. Managing web worker results with deferred objects

// Contents of task.js
onmessage = function(event) {
    postMessage({
	status: 'completed',
	id: event.data.id,
	result: 'some calculated result'
    });
};

// Contents of main.js
var worker = new Worker('task.js');
var deferreds = {};
var counter = 0;

worker.onmessage = function (msg) {
    var d = deferreds[msg.data.id];
    d.resolve(msg.data.result);
};

function background(task) {
    var id = counter++;
    var deferred = jQuery.Deferred();
    deferreds[id] = deferred;   // Store deferred for later resolution
    console.log('Sending task to worker: ' + task);
    worker.postMessage({
	id: id,
	task: task
    });
    return deferred.promise();  // Only expose promise to calling code
}

background('Solve for x').then(function (result) {
    console.log('The outcome is... ' + result);
}).fail(function(err) {
    console.log('Unable to complete task');
    console.log(err);
});

// Console output:
// Sending task to worker: Solve for x
// The outcome is... some calculated result
