const removeFromArray = function(array, ...theArgs) {
    // Find the index of theArgs inside the array
    // Slice the element
    let elementToRemove;
    for(const arg of theArgs) {
        elementToRemove = array.findIndex((x) => x === arg);
        array.splice(elementToRemove, 1);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
