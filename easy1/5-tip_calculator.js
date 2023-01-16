// 5. Tip Calculator

const READLINE = require('readline-sync');

let billAmount = +(READLINE.question(`=> What is the bill amount? `));

let tipPercent = +(READLINE.question(`=> What is the tip percentage? `));

let [billTotal, tipAmount] = calcTip(billAmount, tipPercent);

displayTipInfo(billTotal, tipAmount);

function calcTip(billAmount, tipPercent) {
  //convert tip from int to decimal format
  const PERCENT_INT_TO_DECIMAL_MULT = 0.01;
  tipPercent = tipPercent * PERCENT_INT_TO_DECIMAL_MULT;
  
  let tipAmount = billAmount * tipPercent;
  
  let billTotal = billAmount + tipAmount;
  
  return [billTotal, tipAmount];
}

function displayTipInfo(billTotal, tipAmount) {
  //Convert nums to 0.00 format
  tipAmount = tipAmount.toFixed(2);
  billTotal = billTotal.toFixed(2);
  
  //Construct and display message
  let tipMsg = `The tip is $${tipAmount}`;
  let billTotalMsg = `The total is $${billTotal}`;
  console.log(`${tipMsg}\n${billTotalMsg}`);
}