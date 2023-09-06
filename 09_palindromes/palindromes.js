const palindromes = function (str) {
    str.toLowerCase();
    if (str.includes('!')) {
        str.split().splice('!');
    }
    return (str === str.split().reverse().join(''));

};

// Do not edit below this line
module.exports = palindromes;
