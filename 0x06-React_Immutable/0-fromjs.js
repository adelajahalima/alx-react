const { fromJS } = require('immutable');

// Function to convert a given JavaScript object to an Immutable Map
function getImmutableObject(obj) {
    // Use fromJS to convert the object into an Immutable Map
    return fromJS(obj);
}

// Example usage
const input = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableObject = getImmutableObject(input);
console.log(immutableObject); // Output the Immutable.js Map structure
