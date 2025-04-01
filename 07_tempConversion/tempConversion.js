const convertToCelsius = function(num) {
  let c = ((num - 32) * 5 / 9);
  return c % 1 === 0 ? c : parseFloat(c.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let f =  (num * 9/5) + 32;
  return f % 1 === 0 ? f : parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
