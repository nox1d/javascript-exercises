const sumAll = function(start, end) {
    let result = 0;
    
    if (!(Number.isInteger(start)) || !(Number.isInteger(end)) || start < 0 || end < 0) {
        return 'ERROR';
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            result += i;
        }
    } else {
        for (let i = start; i >= end; i--) {
            result += i;
        }
    };
    return result;

};

// Do not edit below this line
module.exports = sumAll;
