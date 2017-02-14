// The Blkuebird Promise Library

// Loading Bluebird

// Example 4-2. Wrap a native promise with a Bluebird promise

// Assume bluebird has been loaded using <script src="bluebird.js"></script>
var Bluebird = Promise.noConflict();  // Restore previous reference to Promise
var nativePromise = Promise.resolve(); // Native Promise
var b = Bluebird.resolve(nativePromise); // Wrap native promise with Bluebird promise

// Force event loop to turn
setTimeout(function () {
    console.log('Pending? ' + b.isPending());       // Pending? false
    console.log('Fullfilled? ' + b.isFulfilled());  // Fulfilled? true
    console.log('Rejected? ' + b.isRejected());     // Rejected? false
}, 0);
