// Example 3-14. Conditionally expanding a chain based on the outcome of a preceding promise

function readAllChunks(readableStream) {
    var reader = readableStream.getReader();
    var chunks = [];

    return pump();

    function pump() {
	return reader.read().then(function (result) {
	    if (result.done) {
		return chunks;
	    }

	    chunks.push(result.value);
	    return pump();
	});
    };
}
