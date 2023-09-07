const fibonacci = function(n) {
    return (Number(n) <0) ? 'OOPS'
     : (Number(n) <= 2) ? 1
     : fibonacci(Number(n)-1) + fibonacci(Number(n) - 2);
};

// Do not edit below this line
module.exports = fibonacci;
