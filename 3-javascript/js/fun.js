// function triangle() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   console.log("* * * *");
//   return "hello";
//   console.log("- - - - -");
// }

// console.log(triangle());

// triangle();

// let myName = "hhz";
// let myAge = 28;
// let myJob;

// console.log(myName, myAge, myJob);

// console.log(triangle());

// 12inches = 1feet

// function inchesToFeet(inches = 0) {
//   console.log(inches);
//   let resultFeet = inches / 12;
//   return resultFeet + "ft";
// }

// console.log(inchesToFeet(60));
// console.log(inchesToFeet(120));
// console.log(inchesToFeet(90));
// console.log(inchesToFeet());

// let results = [];
// let count = 0;

// function calculateArea(width, breadth) {
//   let resultArea = width * breadth;
//   let areaUnit = "sqft";
//   let area = resultArea + areaUnit;
//   let resultObject = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     area,
//   };

//   results[count++] = resultObject;
//   //   results.push(resultObject);

//   return area;
// }

// console.log(calculateArea(19, 70));
// console.log(calculateArea(12, 50));
// console.log(calculateArea(12, 50));

// console.table(results);

let rates = {
  usd: 2100,
  eur: 2200,
  sgd: 1500,
};
// 1 usd = 2100 mmk
// 1/2100 usd = 1mmk

// from 100 USD to mmk
// logic 100*(2100 mmk)

// function exchangeToMmk(amount, fromCurrency) {
//   let currentExchangeRate = rates[fromCurrency];
//   let resultAmount = amount * currentExchangeRate;
//   return resultAmount + " mmk";
// }

// console.log(exchangeToMmk(100, "usd"));
// console.log(exchangeToMmk(500, "eur"));
// console.log(exchangeToMmk(35, "sgd"));

// 500000mmk to ?usd
// 500000( 1/2100 usd)
// 500000/2100 usd

// function exchangeToCurrency(amount, toCurrency) {
//   let currentExchangeRate = rates[toCurrency];
//   let resultAmount = amount / currentExchangeRate;
//   return resultAmount + " " + toCurrency;
// }
// console.log(exchangeToCurrency(500000, "usd"));
// console.log(exchangeToCurrency(70000, "sgd"));
// console.log(exchangeToCurrency(1230000, "eur"));

let fruits = {
  apple: 500,
  orange: 450,
  mango: 1000,
  banana: 200,
};

let records = [];
let count = 0;
let total = 0;

// 100mmk 5% is 5mmk
// 300mmk 5% is 15mmk
//  ( 300 * 5 ) / 100
// 300 * 0.05
// 300 * 0.1

function calculateTax(amount, percentage = 5) {
  return amount * (percentage / 100);
}

function calculateCost(item, quantity) {
  let currentItemPrice = fruits[item];
  let cost = quantity * currentItemPrice;
  records[count++] = {
    item,
    quantity,
    cost,
  };
  total += cost;
  return cost + "mmk";
}

console.log(calculateCost("apple", 5));
console.log(calculateCost("orange", 15));
console.log(calculateCost("mango", 3));
console.log(calculateCost("banana", 3));
console.table(records);
console.table({
  total,
  tax: calculateTax(total),
  subTotal: total + calculateTax(total),
});
