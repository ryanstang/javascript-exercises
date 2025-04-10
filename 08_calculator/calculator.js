const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
