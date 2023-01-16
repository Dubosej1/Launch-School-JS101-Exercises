// 6. Sum or Product of Consecutive Integers

const READLINE = require('readline-sync');

// Get user input
let message = "Please enter an integer greater than 0: ";
let limitingInt = +(READLINE.question(message));

message = "Enter 's' to compute the sum, or 'p' to compute the product: ";
let operation = READLINE.question(message);

// Calculate sum or product based on user choice
let operationText;
let result;

if (operation === "s") {
  operationText = "sum";
  result = calcSum(limitingInt);
} else {
  operationText = "product";
  result = calcProduct(limitingInt);
}

// Construct and display message
let msgPart1 = `The ${operationText} of the integers`;
let msgPart2 = `between 1 and ${limitingInt} is ${result}.`;
console.log(`${msgPart1} ${msgPart2}`);

function calcSum(limit) {
  let sum = 0;
  
  for (let int = 1; int <= limit; int++) {
    sum = int + sum;
  }
  
  return sum;
}

function calcProduct(limit) {
  let product = 1;
  
  for (let int = 1; int <= limit; int++) {
    product = int * product;
  }
  
  return product;
}