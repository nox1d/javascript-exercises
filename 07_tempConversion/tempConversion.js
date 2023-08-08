const convertToCelsius = function(degree) {
  const conversion = (degree - 32) * 5 / 9; 
  if (!Number.isInteger(conversion)) {
    return parseFloat(conversion).toFixed(1);
  }
  return conversion;
};

const convertToFahrenheit = function(degree) {
  const conversion = (degree * 5 / 9) + 32;
  if (!Number.isInteger(conversion)) {
    return parseFloat(conversion).toFixed(1);
  }
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
