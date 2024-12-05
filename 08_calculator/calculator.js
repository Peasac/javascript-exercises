const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const summ = arr.reduce((total, current)=> total+current, 0);
  return summ
};

const multiply = function(arr) {
  return arr.reduce((total, current)=> total*current, 1)
};

const power = function(a,b) {
  let c = 1;
	for(let i=1;i<=b;i++)
  {
    c= c*a;
  }
  return c;
};

const factorial = function(a) {
	let fact = 1;
  for(let i=a;i>0;i--)
  { 
    fact *= i;
  }
  return fact;
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
