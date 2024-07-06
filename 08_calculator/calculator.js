const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const sum1 = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sum1;
};

const multiply = function(array) {
  const mult = array.reduce((total,currentItem) => {
    return total * currentItem;
  },1);
  return mult;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
  if(number == 0){
    return 1;
  }
  let count = number;
  while(number !=0) {
    if ((number - 1) ==0) {
      number = number - 1;
    }
    else {
      count = count * (number - 1);
      number = number - 1;
    }
  }
	return count;
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
