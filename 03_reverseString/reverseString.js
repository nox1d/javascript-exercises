const reverseString = function(string) {
    const char = string.split('');
    let newString = [];
    for (let i = char.length - 1; i >= 0; i--) {
        newString.push(char[i]);
    }
    
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
