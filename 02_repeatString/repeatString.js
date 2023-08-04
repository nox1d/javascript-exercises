const repeatString = function(string, num) {
    let stringInput = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for(let i = 0; i < num; i++) {
            stringInput += string;
        }
        return stringInput;
    }
};

// Do not edit below this line
module.exports = repeatString;
