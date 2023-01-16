/* Exercise 1: Isn't it Odd?

PEDAC

//Understand the Problem
Input: 
  -Integer (positive, negative or zero).  It will always be an integer
Output: 
  -Boolean which is the result of the number's absolute value is odd or not

Terms: 
  -Odd number: Number that is not divisible by 2.
  -Absolute Value: Non negative value of a number without regard to its sign
  
Implicit Requirements:
  
Mental Model:
  -Then Determine the absolute value of the integer input.  
  -Then determine if that number is odd.  Return TRUE or FALSE based on the 
  result.
  
//Examples/Test Cases
  1: INPUT: -5, OUTPUT: True
  2: INPUT: 0, OUTPUT: False
  3: INPUT: -0, OUTPUT: False
  4: INPUT: -2, OUTPUT: False
  5: INPUT: 2, OUTPUT: False
  6: INPUT: 5, OUTPUT: True

//Data Structure/Algorithm
  -Data Structure: Primitive Values and number operations
  
  -Algorithm:
    -Check if number is an integer.  Return error if not.
    -Check if number is negative.  Convert to positive if True.
    -Check if number has a remainder when divided by 2.  Return True if there is
      a remainder.
*/

function isOdd (int) {
  if (int < 0) int = int * -1;
  return int % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(-0)); // => false
console.log(isOdd(7)); // => true