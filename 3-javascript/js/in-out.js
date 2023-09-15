console.log("Basic Input Output");


// console.log(window);

// window.alert("hello")

// //input
// let yourName = window.prompt("What is your name ?");

// //output
// console.log(yourName);


// let answer = window.confirm("Have U finish dinner ?");
// window.alert(answer ? "yes, I 'm finish" : "No, I don't");


// console.log(console);


// console.log(document);

// document.write(yourName)

// let name = window.prompt("Your Name");
// let email = window.prompt("Your email");
// let password = window.prompt("Password");
// let password_confirmation = window.prompt("Confirm Password");


// const obj = {
//     a : "aaa",
//     b : "bbb"
// }

// obj.a = "xxx"

// console.log(obj);
// userInput.value = "hello"

// console.dir(userInput);

// console.dir(textOutput);


// textOutput.innerText = "hein htet zan"

// console.log(textOutput.innerText);

// console.log(fruits.innerText);
// console.log(fruits.innerHTML);
// textOutput.innerHTML = "san kyi tar <a href='#'>MMS IT</a>"


// selectors
const userInput = document.getElementById("userInput");
const runBtn = document.getElementById("runBtn");
const textOutput = document.getElementById("textOutput");
const fruits = document.getElementById("fruits");
const salary = document.getElementById("salary");
const bd = document.getElementById("bd");
const photo = document.getElementById("photo");


// document.addEventListener("click",(event) => {
//     console.log(event);
// })

userInput.addEventListener("keyup",(event) => {
    if(event.key === "Enter"){
        console.log(event.target.value);
        event.target.value = null
    }
})




// functions

// function run(){
//     let text = userInput.value;
//     textOutput.innerText = text;
//     userInput.value = null
// }


// runBtn.onclick = run

// runBtn.addEventListener("click",run)

// console.log(runBtn);