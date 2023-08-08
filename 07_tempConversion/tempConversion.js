const convertToCelsius = function(degree) {
  const conversion = (degree - 32) * 5 / 9; 
  if (Number.isInteger(conversion)) return conversion;
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(degree) {
  const conversion = degree * 9 / 5 + 32;
  if (Number.isInteger(conversion)) return conversion;
  return parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
