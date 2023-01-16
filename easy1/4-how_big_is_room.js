/* 4. How Big is the Room?

PEDAC

//Understand the Problem
  Input:
    -Positive Number (Int and Float) that is the length of a room in meters
    -Positive Number that is the width of a room in meters
  Output:
    -Number that is the area of the room in Square Meters
    -Number that is the area of the room in Square Feet

  Terms:
    -Area: Length * Width of a square
    -Square Meters: The unit of measure of an area
    -Square Feet: 10.7639 square feet = 1 square meter

  Mental Model:
    -The user provides the length and width of a room in meters.
    -Multiply the length and width to get the area in square meters.
    -Multiply the area by 10.7639 to get the area in square feet.

//Examples/Test Cases
  1:
    INPUT: 10 meters, 10 meters
    OUTPUT: 100 square meters, 1076.39 square feet

//Data Structures/Algorithms
  Data Structure: Numbers and number operations

  Algorithm:
    - Prompt user for a number that is the length of a room
    -Prompt user for a number that is the width of a room
    -Multiply the length and width to get the room's area in square meters
    -Multiply the area by 10.7639 to convert the room's area to square feet
    -Display the room's area in square meters and square feet to the user.

  */

const READLINE = require('readline-sync');

let [length, width] = getUserInput();

let areaInSqMeters = calcArea(length, width);

let areaInSqFeet = convertToSqFeet(areaInSqMeters);

displayRoomAreaInfo(areaInSqMeters, areaInSqFeet);

function promptUser(message) {
  console.log(`=> ${message}`);
  let input = READLINE.question();
  return input;
}

function getUserInput() {
  let lengthMessage = "Enter the length of the room in meters:";
  let length = promptUser(lengthMessage);

  let widthMessage = "Enter the width of the room in meters:";
  let width = promptUser(widthMessage);

  return [length, width];
}

function calcArea(length, width) {
  return length * width;
}

function convertToSqFeet(numInSqMeters) {
  const SQMETERS_TO_SQFEET_MULTIPLIER = 10.7639;
  return numInSqMeters * SQMETERS_TO_SQFEET_MULTIPLIER;
}

function displayRoomAreaInfo(areaInSqMeters, areaInSqFeet) {
  //Round num to 2 decimal places
  areaInSqMeters = +(areaInSqMeters.toFixed(2));
  areaInSqFeet = +(areaInSqFeet.toFixed(2));

  //Construct and display message to console
  let message = "=> The area of the room is";
  let sqMetersMsg = `${areaInSqMeters} square meters`;
  let sqFeetMsg = `(${areaInSqFeet} square feet)`;
  console.log(`${message} ${sqMetersMsg} ${sqFeetMsg}.`);
}