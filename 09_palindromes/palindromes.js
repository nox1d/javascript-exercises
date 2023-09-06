const palindromes = function (str) {
    let re = /^A-Za-z0-9/g;
    str.toLowerCase().replace(re, '');
    return (str === str.split().reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
