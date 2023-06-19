// for (let i = 10; i < 50; i += 3) {
//   console.log(i, "loop", i < 50);
//   //   console.log("*");
//   //   console.log("* *");
//   //   console.log("* * *");
// }

let fruits = ["apple", "orange", "mango", "banana", "lemon", "lime"];

let mySelf = {
  myName: "hein htet zan",
  age: 28,
  job: "developer",
  relationship: null,
  skill: "teach",
};

// console.log(`I like ${fruits[0]}`);
// console.log(`I like ${fruits[1]}`);
// console.log(`I like ${fruits[3]}`);
// break

// for (var i = 0; i < fruits.length; i++) {
//   // if (fruits[i] === "mango" || fruits[i] === "orange") {
//   //   continue;
//   // }
//   console.log(i, `I like ${fruits[i]}`);
// }

// console.log(i);

// let x;

// if (false) {
//   x = 5;
//   console.log(x);
// }

// console.log(x);

// for (fruit of fruits) {
//   console.log(`I eat ${fruit}`);
// }

// console.log(fruits);

// for (key in fruits) {
//   console.log(`I eat ${fruits[key]}`);
// }

console.log(mySelf);

for (key in mySelf) {
  console.log(key, mySelf[key]);
}
