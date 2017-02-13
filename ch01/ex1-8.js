// Example 1-8. The jQuery ready function can be synchronous or asynchronous

jQuery(document).ready(function () {
    // jQuery calls this function after the DOM is loaded and ready to use
    console.log('DOM is ready');
});

console.log('I am the last line of the script');

// Console output may appear in either order depending on when the DOM is ready
