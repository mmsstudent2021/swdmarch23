// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.title);


// const el1 = document.createElement("h1");
// el1.innerText = "Min Ga Lar Par";
// el1.classList.add("text-primary","bg-primary-subtle","m-3","p-3","rounded")
// // el1.style.color = "Red";
// // el1.style.backgroundColor = "black";
// // el1.style.padding = "20px"

// const el2 = document.createElement("p");
// el2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur sunt fugit numquam possimus expedita natus quaerat sapiente in. Vel eum accusamus voluptates corporis mollitia excepturi! Corporis unde esse reiciendis?"
// // el2.style.padding = "0 20px"
// el2.classList.add("px-3","mx-3")

const el3 = document.createElement("ul");
el3.classList.add("list-group","px-3","mb-3")

const el4 = document.createElement("li");
el4.innerText = "YouTube";
el4.classList.add("list-group-item")

const el5 = document.createElement("li");
el5.innerText = "Google";
el5.classList.add("list-group-item")

const el6 = document.createElement("li");
el6.innerText = "Facebook";
el6.classList.add("list-group-item")

const frg = document.createDocumentFragment();

console.dir(frg);


frg.append(el4)
frg.append(el5)
frg.append(el6)

el3.append(frg)

// const a = document.createElement("a");
// a.href = "https://google.com";
// a.innerText = "To Google";
// a.classList.add("btn","btn-outline-primary","ms-3")


// const btn = document.createElement("button");
// btn.innerText = "Book Now";
// // btn.style.marginLeft = "10px"
// btn.classList.add("btn","btn-primary","ms-2")

// const greet = () => {
//     console.log("I'm greet");
//     return "min ga lar par";
// }

// btn.addEventListener("click",greet)


// const br = document.createElement("br");
// const br2 = document.createElement("br");

// const img = document.createElement("img");
// img.src = "./images/poe-mamhe-thar-2.jpg";
// img.width = 200





document.body.append(el3)
// el3.before(el2)
// el2.before(el1)
// el3.after(a)
// a.after(btn)

// // document.body.append(el1)
// // document.body.append(el2)
// // document.body.append(el3)
// // document.body.append(a)
// // document.body.append(btn)
// // document.body.append(br)
// // document.body.append(br2)
// // document.body.append(img)

// console.log(a);



// const button = document.createElement("button");
// button.classList.add("btn","btn-primary");
// // button.innerText = "Click Me";
// // button.innerHTML = ` <i class=' bi bi-house'></i> Home Page`;

// const houseIcon = document.createElement("i");
// houseIcon.classList.add("bi","bi-house");
// button.append(houseIcon);

// const textNode = document.createTextNode(" Home Page");
// // console.dir(textNode);
// button.append(" hello")


// document.body.append(button)

// const ul = document.querySelector("ul");


// ul.removeChild(ul.children[0])
// ul.removeChild(ul.children[0])
// ul.removeChild(ul.children[0])

// console.log(ul.children);
// console.log(ul.childNodes);

// ul.innerHTML = null

// const h1 = document.querySelector("h1");
// console.dir(h1);
// h1.innerText = "hello"
// h1.innerHTML = `<i class="bi bi-list"></i> Hello`;
// console.log(h1.childNodes);
// console.dir(h1.childNodes[2]);

// h1.childNodes[2].nodeValue = "hello"

// console.log(h1.remove());