// let condition = 1 === 5;

// if (condition) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// } else {
//   console.log("* * *");
//   console.log("* *");
//   console.log("*");
// }

// looping;

// for (let i = 1; i <= 10; i++) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// // console.log(true);
// // console.log(5 == 1);
// let x = {};

// console.log(x ? true : false);

// mark > 80 => D
// mark >= 40 => P
// mark < 40 => F

// let mark = "hello";

// if (mark >= 80) {
//   console.log("D");
// } else if (mark >= 40) {
//   console.log("P");
// } else if (mark < 40) {
//   console.log("F");
// } else {
//   console.log("Something wrong");
// }

// function run(mark) {
//   if (mark >= 40) {
//     return "U passed";
//   }
//   return "U fail";
// }

// console.log(run(35));
// console.log(run(75));
// console.log(run(60));

// function wakeUpCheck(wakeUpTime) {
//   if (wakeUpTime > 8) {
//     return "ကြိမ်းလုံးနဲ့ လာနှိုးမယ် 🤣";
//   }
//   return "အေးဆေးပဲ";
// }

// console.log(wakeUpCheck(4));
// console.log(wakeUpCheck(10));
// console.log(wakeUpCheck(7));
// console.log(wakeUpCheck(9));

// officeStartTime = 9

// function attendance(arrivalTime, officeStartTime = 9, rate = 1000) {
//   if (arrivalTime > officeStartTime) {
//     let lateTime = arrivalTime - officeStartTime;
//     let lateAmount = rate * lateTime;
//     return "U Late . U will be cut " + lateAmount;
//   }
//   return "Thank U";
// }

// console.log(attendance(10));
// console.log(attendance(12));

// // 6တက် 500
// console.log(attendance(8, 6, 500));
// console.log(attendance(5, 6, 500));

// function takeABus(pocketMoney, busFee = 300) {
//   if (pocketMoney > busFee * 2) {
//     if (pocketMoney > busFee) {
//       // let leftMoney = pocketMoney - busFee;
//       // return "U can take a bus and " + leftMoney + " amount will left";
//       return `U can take a bus and ${pocketMoney - busFee} amount will left `;
//     }

//     return "walking";
//   }

//   return "စိတ်ကောက်မယ်";
// }

// console.log(takeABus(1500));
// console.log(takeABus(1000));

// console.log(!true);
// // input ထဲ ဘာမှမပါရင် alert ထိုးပါ

// if(!input){
//     alert()
// }

// function yccEntrance(writing, viper, passMark = 60) {
//   if (writing > passMark && viper > passMark) {
//     return "U can join YCC";
//   }
//   return "U can't";
// }

// console.log(yccEntrance(85, 45));
// console.log(yccEntrance(65, 70));

// function chooseBus(busNo) {
//   if (busNo === 20 || busNo === 65) {
//     return "U can get MMS IT";
//   }
//   return "U can't";
// }

// console.log(chooseBus(19));
// console.log(chooseBus(20));
// console.log(chooseBus(27));
// console.log(chooseBus(65));

// function search(input) {
//   //   if (input) {
//   //     return "U are searching " + input + " keyword";
//   //   }
//   //   return "please input something";

//   if (!input) {
//     return alert("please input something");
//   }
//   return "U are searching " + input + " keyword";
// }

// console.log(search());
// console.log(search("hhz"));
