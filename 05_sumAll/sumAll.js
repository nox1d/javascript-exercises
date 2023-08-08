const sumAll = function(start, end) {
    let result = 0;
    if (start < end) {
        for (let i = start; i <= end; i++) {
            result += i;
        }
    } else {
        for (let i = start; i >= end; i--) {
            console.log(i);
            result += i;
        }
    };
    return result;

};

// Do not edit below this line
module.exports = sumAll;
