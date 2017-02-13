// Example 3-10. Overview of array.reduce

finalResult = array.reduce(function (previousValue, currentValue) {
    // Create a result using the previousValue and currentValue
    // return the result which will be used as the previousValue in the next loop
    return previousValue + currentValue;
}, initialValue) // Used with first element
