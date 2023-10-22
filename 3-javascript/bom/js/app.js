// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(outerHeight);
// console.log(outerWidth);

// window.addEventListener("scroll",() => {
//     console.log(scrollY);
// })

// window.addEventListener("load",() => {
//     console.log("window loaded");
// })

// console.log("hello");

// window.addEventListener("resize", () => {
//   console.clear();
//   console.log("inner H", innerHeight);
//   console.log("inner W", innerWidth);
//   console.log("outer H", outerHeight);
//   console.log("outer W", outerWidth);
// });

// timeout - ချိန်ကိုက်ဗုံး
// const run = () => {
//     console.log("timeout");
//     return "I'm working"
// }

// setTimeout(run,3000)

// interval

// const showClock = () => {
//     const d = new Date();
//     console.log(d.getHours(),d.getMinutes(),d.getSeconds());
// }

// setInterval(showClock, 1000);

// const clock = document.querySelector("#clock");
// const stopBtn = document.querySelector("#stop");
// const scrollBtn = document.querySelector("#scrollBtn");
// const here = document.querySelector("#here");

// const showClock = () => {
//   const d = new Date();
//   clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// const clockRunner = setInterval(showClock,1000);

// stopBtn.addEventListener("click",() => {
//     clearInterval(clockRunner)
// })

// scrollBtn.addEventListener("click",() => {
//     scrollTo(0,here.getBoundingClientRect().y)
// })

// console.log(screen);
// console.log(location);

// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos);
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
// });

// console.log(navigator.userAgent);

// navigator.getBattery().then((battery) => {
//     console.log(battery);
// })