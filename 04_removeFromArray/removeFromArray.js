const removeFromArray = function(array, ...theArgs) {
    // Find the index of theArgs inside the array
    // Slice the element
    let elementToRemove;
    for(let arg of theArgs) {
        if (array.includes(arg) === false) {
            continue;
        };
        elementToRemove = array.findIndex((x) => x === arg);
        array.splice(elementToRemove, 1);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
