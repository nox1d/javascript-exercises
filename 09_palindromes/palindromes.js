const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g;
    let reStr = str.toLowerCase().replace(re, '');
    return (reStr === reStr.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
