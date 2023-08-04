const repeatString = function(string, num) {
    let stringInput = '';
    for(let i = 0; i < num; i++) {
        stringInput += string;
    }
    return stringInput;
};

// Do not edit below this line
module.exports = repeatString;
